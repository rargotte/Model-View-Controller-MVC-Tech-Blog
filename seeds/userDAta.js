const { User } = require('../models');

const userdata = [
    {
        username: 'gallo_loco',
        email: 'email@hotmail.com',
        password: '123456'
    },

    {
        username: 'gallina_loca',
        email: 'email2@hotmail.com',
        password: '123456'
    },


];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
