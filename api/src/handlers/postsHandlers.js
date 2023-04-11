const { createPost } = require('../controllers/postsController')

const createPostHandler = async (req, res) => {
    try {
        const { title, body, userId } = req.body;
        const newPost = await createPost(title, body, userId);
        res.status(201).json(newPost)
    } catch (error) {
        res.status(400).json({ error: error.mesagge })
    }

}


module.exports = {
    createPostHandler
}