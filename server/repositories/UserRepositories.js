const { Users, UserRoles, UserPassword } = require('../models');
const { USER_TYPE } = require('../helpers/constants');
const Logger = require('../helpers/logger');
const bcrypt = require('bcrypt');

const RepositoryName = 'UserRepositories';

const createNewGuest = async (phone_number) => {
    try {
        const newGuest = await Users.create({
            user_full_name: 'guest',
            user_type: USER_TYPE.Individual,
            user_phone_number: phone_number,
        });

        await UserRoles.create({
            usro_user_id: newGuest.user_id,
            usro_role_id: 1,
        });

        return { data: newGuest };
    } catch (error) {
        Logger.error(`[${RepositoryName}, createNewGuest]: ${error.message}`);
        throw error;
    }
};

const createNewEmployee = async (args) => {
    const { username, email, password, user_role, phone_number } = args;
    try {
        const newEmployee = await Users.create({
            user_full_name: username,
            user_type: USER_TYPE.Individual,
            user_email: email,
            user_phone_number: phone_number,
        });

        await UserRoles.create({
            usro_user_id: newEmployee.user_id,
            usro_role_id: user_role,
        });

        await UserPassword.create({
            uspa_user_id: newEmployee.user_id,
            uspa_passwordHash: bcrypt.hashSync(password, 10),
            uspa_passwordSalt: bcrypt.genSaltSync(10),
        });

        return { data: newEmployee.user_full_name };
    } catch (error) {
        Logger.error(`[${RepositoryName}, createNewEmployee]: ${error.message}`);
        throw error;
    }
};

module.exports = { createNewGuest, createNewEmployee };
