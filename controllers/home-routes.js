const router = require('express').Router();
const { Post, Comment, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'commentary',
            'createdAt'
          ],
          include: {
            model: User,
            attributes: ['username'],
          }
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one post
// Use the custom middleware before allowing the user to access the gallery
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'commentary',
            'createdAt'
          ],
          include: {
            model: User,
            attributes: ['username'],
          }
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })

    const post = dbPostData.get({ plain: true });
    console.log(post);
    res.render('post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one comment
// Use the custom middleware before allowing the user to access the painting
router.get('/comment/:id', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.findByPk(req.params.id);

    const comment = dbCommentData.get({ plain: true });

    res.render('comment', { comment, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// post one comment
// Use the custom middleware before allowing the user to access the painting
router.get('/post/comment/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
    })

    const post = dbPostData.get({ plain: true });
    res.render('post-comment', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
