const { Comment } = require('../models');

const commentdata = [
  {
    commentary: 'This is a comment',
    post_id: 1,
    user_id: 1
  },

  {
    commentary: 'This is another comment',
    post_id: 2,
    user_id: 2
  },


];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
