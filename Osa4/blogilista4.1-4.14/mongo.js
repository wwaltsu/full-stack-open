const mongoose = require('mongoose')
if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const url = `mongodb+srv://walter:${password}@cluster0-ndlyf.mongodb.net/blogList?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const blog = new Blog({
    title: title,
    author: author,
    url: url,
    likes: likes

})

export default mongo

