const _ = require('lodash');
const Logger = require('../helpers/logger');
const UserRepositories = require('../repositories/UserRepositories');
const { Users } = require('../models');
const { USER_ROLE_ID } = require('../helpers/constants');

const Controller = 'AuthController';

const registerGuest = async (req, res) => {
    try {
        const { phone_number } = req.body;

        Logger.info(`[${Controller}, registerGuest]: Checking user availability ${phone_number}`);
        const findExistingUser = await Users.findOne({ where: { user_phone_number: phone_number } });
        
        if (findExistingUser) {
            Logger.error(`[${Controller}, registerGuest]: User already exists!`);
            return res.boom.badRequest('User already exists!');
        }

        await UserRepositories.createNewGuest(phone_number);
        Logger.info(`[${Controller}, registerGuest]: New user with role guest has been created!`);
        return res.status(201).json({ message: 'User created successfully!' });

    } catch (error) {
        Logger.error(`[${Controller}, registerGuest]: ${error.message}`);
        return res.boom.badImplementation(error.message);
    }
};

const registerEmployee = async (req, res) => {
    try {
        const { username, email, password, password_confirmation, user_role, phone_number } = req.body;

        Logger.info(`[${Controller}, registerEmployee]: Checking user availability`);

        const findExistingUser = await Users.findOne({ where: { user_email: email } });
        if (findExistingUser) {
            Logger.error(`[${Controller}, registerEmployee]: User already exists!`);
            return res.boom.badRequest('User already exists!');
        }

        const checkPasswordConfirmation = _.isEqual(password, password_confirmation);
        if (!checkPasswordConfirmation) {
            Logger.error(`[${Controller}, registerEmployee]: Password confirmation does not match!`);
            return res.boom.badRequest('Password confirmation does not match!');
        }

        const checkUserRole = _.isEqual(user_role, USER_ROLE_ID.User);
        if (checkUserRole) {
            Logger.error(`[${Controller}, registerEmployee]: Guest is forbidden`);
            return res.boom.badRequest('User role does not match!');
        }
        
        const createNewEmployeeData = {
            username,
            email,
            password,
            user_role,
            phone_number,
        }

        await UserRepositories.createNewEmployee(createNewEmployeeData);
        Logger.info(`[${Controller}, registerEmployee]: New user employee has been created!`);
        return res.status(201).json({ message: 'User created successfully!' });

    } catch (error) {
        Logger.error(`[${Controller}, registerEmployee]: ${error.message}`);
        return res.boom.badImplementation(error.message);
    }
};

module.exports = { registerGuest, registerEmployee };
