const express = require('express');

const postsRouter  = require('./data/routes/posts-route')

const server = express()

server.use(express.json());

server.use('/api/posts', postsRouter)

server.listen(8000, () => {
    console.log('\n API RUNNING')
})