const Color = require('../models/Color');
const { isObjectId } = require('../utils/utils');

const newColor = async (req, res ) => {
  const { color, name, year, pantone_value } = req.body;
  if (!name || !year || !color || !pantone_value) {
    res.status(404).send({ error: 'Missing parameters' });
  }
  try {
    const newColor = new Color(req.body);
    const resultColor = await newColor.save(newColor);
    const newColorFinal = await Color.findOne({ _id: resultColor._id });
    res.status(200).json(newColorFinal);
  } catch (err) {
    res.status(500).send({ error: "Error. Try with name, color, year & pantone value" });
  }

};

const getOneColor = async (req, res) => {
  try {
    if (!isObjectId(req.params.id)) res.status(500).send({ error: 'Please, try with correct ID'});;
    const color = await Color.findOne({ _id: req.params.id });
    if (!color) res.status(404).send({ error: 'Color not found' });
    res.status(200).json(color);
  } catch (err) {
    res.status(500).send({ error: 'Try again please' });
  }
}

const getColors = async ( req, res ) => {
  try {
    const colors = await Color.find({}).select('-__v -pantone_value -year');
    if (colors.length > 0) {
      return res.status(200).json(colors);
    }
  } catch (error) {
    return res.status(400).json('Error to try colors');
  }
};

module.exports = {
  newColor,
  getColors,
  getOneColor
} ;
