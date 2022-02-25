const router = require('express').Router();
const { Comment } = require('../../models');

// CREATE new comment
router.post('/', async (req, res) => {
    try {
        const dbCommentData = await Comment.create({
            user_id: req.session.userId,
            commentary: req.body.commentText,
            post_id: req.body.post_id,


        });

        res.status(201).json(dbCommentData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

module.exports = router;
