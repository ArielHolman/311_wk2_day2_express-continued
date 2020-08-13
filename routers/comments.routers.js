const express = require('express')
const router  = express.Router()
const commentsController = require('../controllers/comments.controllers')

router.get('/comments',commentsController.listComment)

router.get('/comments/:commentId',commentsController.showComment)

router.post('/comments', commentsController.createComment)

router.put('/comments/:commentId',commentsController.updateComment)

router.delete('/comments/:commentId',commentsController.deleteComment)

module.exports = router