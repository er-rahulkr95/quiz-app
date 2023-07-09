module.exports.errorHandlers = require("./error.middleware").errorHandlers

module.exports.checkUserExistsInDB = require("./users.middleware").checkUserExistsInDB
module.exports.isAdmin = require("./users.middleware").isAdmin;

module.exports.validateSchema = require("./validate.middleware").validateSchema;