const { Router } = require('express');
const { createPostHandler } = require('../handlers/postsHandlers')

const postsRouter = Router();

postsRouter.get('/', (req, res) => {
    res.status(200).send('We are in post')
})

postsRouter.get('/detail/:id', (req, res) => {
    res.status(200).send('Detail post for id')
})
postsRouter.post('/', createPostHandler)

module.exports = postsRouter;