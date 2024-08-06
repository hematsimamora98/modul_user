const Joi = require('joi');

const registerGuestSchema = Joi.object({
    phone_number: Joi.string().required(),
});

const registerEmployeeSchema = Joi.object({
    username: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    password_confirmation: Joi.string().valid(Joi.ref('password')).required().strict(),
    user_role: Joi.number().max(5).required(),
    phone_number: Joi.string().required(),
});

module.exports = { registerGuestSchema, registerEmployeeSchema };
