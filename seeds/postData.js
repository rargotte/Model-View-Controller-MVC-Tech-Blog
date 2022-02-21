const { Post } = require('../models');

const postdata = [
  {
    title: 'Sequelize',
    content: 'Sequelize is an engine',
    user_id: 1
  },
  {
    title: 'SQL',
    content: 'SQL has an engine',
    user_id: 2
  },


];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
