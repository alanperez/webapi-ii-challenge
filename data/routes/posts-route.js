const router = require('express').Router()
const Posts = require('../db')
// GET

router.get('/', (req,res) => {
    Posts.find().then(posts => {
        if(posts) {
            res.status(200).json(posts)
        } else {
            res.status(404).json({message: 'unable to find posts'})
        }
    })
})

// POST


// UPDATE



// DELETE



module.exports = router