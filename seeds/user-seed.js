const { User } = require('../models');

const userData = [
    {
        "email": "a@email.com",
        "password": "Abc123"
    },
    {
        "email": "b@email.com",
        "password": "321cbA"
    },
    {
        "email": "c@email.com",
        "password": "Cba123"
    },
    {
        "email": "d@email.com",
        "password": "123aBc"
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true} );

module.exports = seedUsers;