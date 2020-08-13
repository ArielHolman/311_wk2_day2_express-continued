const comments = require('./../data/comments')
let counter = comments.length+1

// list
const listComment = (req, res) => {
  res.json(comments)
}

// create
const createComment = (req, res) => {
  comments.push({_id: counter++, ...req.body});
  res.json(comments[comments.length-1])
}

// update
const updateComment = (req, res) => {
  let foundComment = comments.find( comment => comment._id === parseInt(req.params.commentId))
  foundComment.body = req.body.body ? req.body.body : foundComment.body
  foundComment.postId = req.body.postId ? req.body.postId : foundComment.postId
  res.json(foundComment)
}

// delete
const deleteComment = (req, res) => {
  let foundComment = comments.find( comment => comment._id === parseInt (req.params.commentId))
  if (foundComment) {
    foundComment.isActive = false
    res.send("No comment!")
  } else {
    res.status(400).json({message: `No comment with the id of ${req.params.commentId}`})
  }
  }
// show
const showComment = (req, res) => {
  let foundComment = comments.find( comment => comment._id === parseInt(req.params.commentId))
  res.json(foundComment)
}

module.exports = {
  listComment,
  createComment,
  updateComment,
  deleteComment,
  showComment
}