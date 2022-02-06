import express from 'express'; 

const router = express.Router();

// /api/forum/:forumId
// get specific forum
router.get('/:forumId', (req, res, next) => {
  const id = req.params.forumId;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    id: id, // extract id and store in id
    message: 'This is the forum\'s id: ' + id
    // return id
  });
});

// Delete individual forum
router.delete('/:forumId', (req, res, next) => {
  console.log('console delete individual forum ', req.body);
  res.status(202).json({
    message: 'Successfully deleted forum'
  });
});

// /api/forum/post
// get all posts
router.get('/:forumId/post', (req: any, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    message: 'Get all posts from forum'
  })
});

// add new post
router.post('/:forumId/post', (req: any, res, next) => {
  const post = req.body.post;
  res.status(201).json({
    message: 'Add new post, ' + post + ', to forum'
  })
})

// /api/forum/post/:post-id
// get specific post of post-id
router.get('/:forumId/post/:postId', (req, res, next) => {
  const id = req.body.postId;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    id: id,
    message: 'Get specific post, post #' + id
  })
})

// /api/forum/post/:postId/comment
// get all comments
router.get('/:forumId/post/:postId/comment', (req: any, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    message: 'Get all comments from forum post #' + req.body.comment
  })
})

// create new comment
router.post('/:forumId/post/:postId/comment', (req: any, res, next) => {
  const comment = req.body.comment;
  res.status(201).json({
    message: 'Create new comment in forum: ' + comment
  })
})

// /api/forum/:forumId/post/:postId/comment/:comment-id
// get specific comment of comment-id 
router.get('/:forumId/post/:postId/comment/:commentId', (req, res, next) => {
  const id = req.body.commentId;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    id: id,
    message: 'Get specific comment from comment #' + id
  });
});

// delete specific comment
router.delete('/:forumId/post/:postId/comment/:commentId', (req, res, next) => {
  const id = req.body.commentId;
  res.status(202).json({
    id: id,
    message: 'Deleted comment #' + id
  });
});

export default router;