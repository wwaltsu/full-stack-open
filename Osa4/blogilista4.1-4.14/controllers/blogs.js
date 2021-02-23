const blogRouter = require('express').Router()
const Blog = require("../models/blog")


blogRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs.map(b => b.toJSON()))
})

blogRouter.post('/', async (request, response,next) => {

    const body = request.body
    try {
        if(!request.body.hasOwnProperty('url') && !request.body.hasOwnProperty('title')) {
            response.status(400).end()
        }
        if(!request.body.hasOwnProperty('likes')){
            mockBody = request.body
            const mockBlog = new Blog({
                title: mockBody.title,
                author: mockBody.author,
                url: mockBody.url,
                likes: 0
            })
            const savedMockBlog = await mockBlog.save()
            response.json(savedMockBlog.toJSON())
        }
        const blog = new Blog({
            title: body.title,
            author: body.author,
            url: body.url,
            likes: body.likes,
            likes: body.likes,
        })
        const savedBlog = await blog.save()
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

blogRouter.delete('/:id', async (request, response, next) => {
    try {
        await Blog.findByIdAndRemove(request.params.id)
        response.status(204).end()
    } catch (error) {
        next(error)
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