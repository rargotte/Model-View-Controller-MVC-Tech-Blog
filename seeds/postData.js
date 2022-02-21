const { Post } = require('../models');

const postdata = [
  {
    title: 'Sequelize',
    Content: 'Sequelize is an engine to enhance and improve SQL commands',
    user_id: 1
  },
  {
    title: 'SQL',
    Content: 'SQL has an engine called sequelize that enhances SQL commands',
    user_id: 2
  },


];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
