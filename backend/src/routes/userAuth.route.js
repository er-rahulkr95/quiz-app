const { userRegister,userLogin } = require("../controllers");
const { validateSchema, checkUserExistsInDB } = require("../middlewares");
const {userRegisterValidationSchema, userLoginValidationSchema} = require("../validations")
const router = require("express").Router();

//For validating the input coming from client during login and registration using joi schema
const validateNewUser = validateSchema(userRegisterValidationSchema);
const validateLogin = validateSchema(userLoginValidationSchema);

// Post route to register a new user
router.post("/register", validateNewUser, userRegister);

// Post route to login a registered user
router.post("/login",validateLogin,checkUserExistsInDB,userLogin)
module.exports = router;