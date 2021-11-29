const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const { newColor, getColors, getOneColor} = require('./controller/color');
const app = express();
const port = config.port;

app.use(express.json());
mongoose.connect("mongodb+srv://admin:LoNqXR6mYBmMWsYV@cluster0.ojimq.azure.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
.then((db) => console.info('base de datos conectada'))
  .catch((error) => console.info(error));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

app.get('/colors', getColors);
app.get('/colors/:id', getOneColor);

app.post('/colors', newColor);
