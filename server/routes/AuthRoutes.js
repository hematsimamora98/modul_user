const route = require('express').Router();
const requestValidator = require('express-joi-validation').createValidator({});
const { registerGuest, registerEmployee } = require('../controller/AuthController');
const { registerGuestSchema, registerEmployeeSchema } = require('../services/http/AuthRequestSchema');

route.post('/register/guest',
    requestValidator.body(registerGuestSchema, {
        joi: { allowUnknown: false },
    }),
    registerGuest
);
route.post('/register/employee',
    requestValidator.body(registerEmployeeSchema, {
        joi: { allowUnknown: false },
    }),
    registerEmployee
);

module.exports = route;
