const router = require('express').Router();
const { Post } = require('../../models')

router.get('/', async (req, res) => {
    const postData = await Post.findAll()
    res.status(200).json(postData)
})



router.post('/new-chat', async (req, res) => {
    try {
        const postData = await Post.create({
            content: req.body.content,
            user_name: req.session.username,
            room_id: req.body.roomCode,
        });

        res.status(200).json(postData)

    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.delete({
            where: {
                id: req.params.id
            }
        })
        if (!postData) {
            return res.status(404).json({ message: 'post not found' })
        }
        res.status(200).json({ message: 'post deleted' })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;