const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
  console.log("CREATE ORDER: ", req.body);
};
