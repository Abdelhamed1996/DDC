const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Post = require('../../models/Post');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

const chat = {
  lobby: {
    messages: [
      { user:"asd35asd4", text:"hi", date: Date.now() }
    ],
    members: {
      asd35asd4: { name:"anx", avatar: "https://avatars3.githubusercontent.com/u/4190620?s=460&v=4" }
    }
  }
};

router.post('/direct_message', auth, async ( req, res ) => {
  const { id, name, avatar } = req.user;
  let { text, channel } = req.body;
  const otherId = channel;
  channel = [channel,id]
    .sort( (a,b) => a.localeCompare(b) )
    .join( "-" )
  if ( ! chat[channel] ){
    chat[channel] = { members:{}, messages:[] };
    chat[channel].members[req.user.id] = { id, name, lastMessage: Date.now() };
    const other = await User.findById(otherId);
    chat[channel].members[otherId] = { id:other.id, name:other.name, lastMessage: Date.now() };
  }
  if ( text !== ''){
    chat[channel].members[req.user.id] = { id, name, lastMessage: Date.now() };
    chat[channel].messages.unshift({ user: req.user.id, text, date: Date.now() });
    // console.log(channel, req.user.name, req.body );
  }


  res.json(chat[channel]);
});

router.post('/message', auth, async ( req, res ) => {
  const { id, name, avatar } = req.user;
  const { text, channel="lobby" } = req.body;
  if ( text !== ''){
    chat[channel].members[req.user.id] = { id, name, lastMessage: Date.now() };
    chat[channel].messages.unshift({ user: req.user.id, text, date: Date.now() });
    console.log(channel, req.user.name, req.body );
  }
  res.send(chat[channel]);
});

//POST api/posts

router.post(
  '/',upload.single('img'),
  [auth],
  [check('text', 'Text is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      

      const newPost = new Post({
        text: req.body.text,
        img:  req.file.path ,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });

      

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// GET api/posts

router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// GET api/posts/:id

router.get('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.json(post);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// DELETE api/posts/:id

router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await post.remove();

    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// PUT api/posts/like/:id

router.put('/like/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (post.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: 'Post already liked' });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();

    return res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// PUT api/posts/unlike/:id

router.put('/unlike/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has not yet been liked
    if (!post.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: 'Post has not yet been liked' });
    }

    // remove the like
    post.likes = post.likes.filter(
      ({ user }) => user.toString() !== req.user.id
    );

    await post.save();

    return res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// POST api/posts/comment/:id

router.post(
  '/comment/:id',
  [
    auth,
    checkObjectId('id'),
    [check('text', 'Text is required').not().isEmpty()]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// DELETE api/posts/comment/:id/:comment_id

router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Pull out comment
    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );
    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }
    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    post.comments = post.comments.filter(
      ({ id }) => id !== req.params.comment_id
    );

    await post.save();

    return res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});

module.exports = router;
