const { userRegister } = require("../controllers");
const { validateSchema } = require("../middlewares");
const {userRegisterValidationSchema} = require("../validations")
const router = require("express").Router();

const validateNewUser = validateSchema(userRegisterValidationSchema);

router.post("/register", validateNewUser, userRegister);

module.exports = router;