module.exports.isObjectId = (params) => {
  const checkForValidMongoDbID = new RegExp('^[0-9a-fA-F]{24}$');
  return checkForValidMongoDbID.test(params);
};
