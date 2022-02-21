const sequelize = require('../config/connection');
const seedPost = require('./postData');
const seedComments = require('./commentData');
const seedUsers = require('./userDAta');

const seedAll = async () => {

  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPost();

  await seedComments();

  process.exit(0);
};

seedAll();
