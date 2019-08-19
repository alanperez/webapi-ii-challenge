const router = require('express').Router()
const Posts = require('../db')

// GET ALL POSTS
router.get('/', (req,res) => {
    Posts.find().then(posts => {
        if(posts) {
            res.status(200).json(posts)
        } else {
            res.status(404).json({message: 'unable to find posts'})
        }
    })
})

//GET POST BY ID
router.get('/:id', (req,res) => {
    const {id} = req.params;
    Posts.findById(id)
    .then( post => {
      if(post) {
        res.status(200).json({
          post: post,
          message: "post by id retrieved"
        })
      } else {
        res.status(404).json({ 
          message: "unable to retrieve this specefic post"
        })
      }
    }).catch( error => {
      res.status(500).json({
        message: `error reason: ${error}`
      })
    })
})

// GET COMMENTS FROM POST BY ID
router.get('/:id/comments', (req,res) => {
    // Posts.findPostComments
})

// POST
router.post('/', (req,res) => {
    
    const {title,contents} = req.body;
    
    if (!title || !contents ) {
        res.status(404).json({
            message: "Please provide title and contents for the post."
        })
    } else {
        Posts.insert(req.body).then(posts => {
            res.status(200).json(
                req.body
            )
        }).catch(error => {
            res.status(500).json({
                error: `error reason - ${error}`
            })
        })
    }
})

router.post('/:id/comments', (req,res) => {

})

// UPDATE
router.put('/:id', (req,res) => {
    const {id} = req.param;
    const {title, contents} = req.body;

    if (!title || !contents) {
        res.status(400).json({
            message: "Could not update at this time."
        })
    } else {
        Posts.findById(id,req.body).then(post => {
            if(!post) {
                res.status(404).json({
                    message: `error: ${post}, not specefied`
                })
            } else {
                res.status(200).json(
                    {message:"success"}
                )
            }
        }).catch(error => {
            res.status(500).json({
                message: `Error: ${error}`
            })
        })
    }
})


// DELETE



module.exports = router