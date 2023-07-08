const Joi = require("joi");

const userRegisterValidationSchema = Joi.object().keys({
    fullName: Joi.string().trim().min(3).max(50).required(),
    email: Joi.string().required().trim().email({tlds:{allow:false}}),
    password: Joi.string().required().min(6),
    role:Joi.string().default("user"),
})

const userLoginValidationSchema = Joi.object().keys({
    email: Joi.string().required().trim().email({tlds:{allow:false}}),
    password: Joi.string().required().min(6),
})

module.exports = {userRegisterValidationSchema, userLoginValidationSchema}