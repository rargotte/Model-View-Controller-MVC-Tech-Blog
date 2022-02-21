const { Comment } = require('../models');

const commentdata = [
  {
    content: 'This is a comment',
    post_id: 1,
    user_id: 1
  },

  {
    content: 'This is another',
    post_id: 2,
    user_id: 2
  },


];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
