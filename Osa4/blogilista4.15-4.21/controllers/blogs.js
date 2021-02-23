const blogRouter = require('express').Router()
const Blog = require("../models/blog")
const jwt = require('jsonwebtoken')
const User = require('../models/user')


const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

blogRouter.get('/', async (request, response) => {
    const blogs = await Blog
        .find({}).populate('user', {username:1, name:1, id:1})

    response.json(blogs.map(b => b.toJSON()))
})

blogRouter.post('/', async (request, response,next) => {
    const body = request.body
    const token = getTokenFrom(request)
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET)
        if (!token || !decodedToken.id) {
            return response.status(401).json({ error: 'token missing or invalid' })
        }
        if(!request.body.hasOwnProperty('url') && !request.body.hasOwnProperty('title')) {
            response.status(400).end()
        }
       if(!request.body.hasOwnProperty('likes')){
            const user = await User.findById(decodedToken.id)
            mockBody = request.body
            const mockBlog = new Blog({
                title: mockBody.title,
                author: mockBody.author,
                url: mockBody.url,
                likes: 0,
                user: user._id
            })
           const savedMockBlog = await mockBlog.save()
           user.blogs = user.blogs.concat(savedMockBlog._id)
           await user.save()
           response.json(savedMockBlog.toJSON())
        }
        const user = await User.findById(decodedToken.id)
        const blog = new Blog({
            title: body.title,
            author: body.author,
            url: body.url,
            likes: body.likes,
            user: user._id
        })
        const savedBlog = await blog.save()
        user.blogs = user.blogs.concat(savedBlog._id)
        await user.save()
        response.json(savedBlog.toJSON())
    } catch(exception) {
        next(exception)
    }
})
blogRouter.delete('/:id', async (request, response, next) => {
    const token = getTokenFrom(request)
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET)
        if (!token || !decodedToken.id) {
            return response.status(401).json({error: 'token missing or invalid'})
        }
        await Blog.findByIdAndDelete(request.params.id)
        response.status(200).end()
    } catch(exception) {
        next(exception)
    }
})


blogRouter.put('/:id', async (request,response,next) => {
    const anotherDummyBody = request.body
    const dummy1 = {
        title: anotherDummyBody.title,
        author: anotherDummyBody.author,
        url: anotherDummyBody.url,
        likes: anotherDummyBody.likes
    }
    try {
        await Blog.findByIdAndUpdate(request.params.id,dummy1,{new: true})
        response.status(200).json(dummy1).end()
    } catch (error) {
        response.status(400).json({error: "check persons id again"})
        next(error)
    }
})



module.exports = blogRouter