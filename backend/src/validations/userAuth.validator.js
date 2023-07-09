const Joi = require("joi");


// JOI validation schema for Registration input coming from frontend
const userRegisterValidationSchema = Joi.object().keys({
    fullName: Joi.string().trim().min(3).max(50).required(),
    email: Joi.string().required().trim().email({tlds:{allow:false}}),
    password: Joi.string().required().min(6),
    role:Joi.string().default("user"),
})

// JOI validation schema for login inputs coming from frontend
const userLoginValidationSchema = Joi.object().keys({
    email: Joi.string().required().trim().email({tlds:{allow:false}}),
    password: Joi.string().required().min(6),
})

module.exports = {userRegisterValidationSchema, userLoginValidationSchema}