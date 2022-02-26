const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

const commentRoutes = require('./comment-routes');

router.use('/comment', commentRoutes);

const dashboardRoutes = require('./dashboard-routes');

router.use('/dashboard', dashboardRoutes);

module.exports = router;
