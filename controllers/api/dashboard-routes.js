const router = require('express').Router();
const { Post } = require('../../models');

// CREATE new post
router.post('/post', async (req, res) => {
    console.log("lleguie a la ruta");
    try {
        const dbPostData = await Post.create({
            title: req.body.postTitle,
            content: req.body.postContent,
            user_id: req.session.userId,
        });

        res.status(201).json(dbPostData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

module.exports = router;
