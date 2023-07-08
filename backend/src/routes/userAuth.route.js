const { userRegister,userLogin } = require("../controllers");
const { validateSchema, checkUserExistsInDB } = require("../middlewares");
const {userRegisterValidationSchema, userLoginValidationSchema} = require("../validations")
const router = require("express").Router();

const validateNewUser = validateSchema(userRegisterValidationSchema);
const validateLogin = validateSchema(userLoginValidationSchema);

router.post("/register", validateNewUser, userRegister);
router.post("/login",validateLogin,checkUserExistsInDB,userLogin)
module.exports = router;