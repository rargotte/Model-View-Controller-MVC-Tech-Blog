const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

const commentRoutes = require('./comment-routes');

router.use('/comment', commentRoutes);

module.exports = router;
