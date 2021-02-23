var _ = require('lodash')

const dummy = (blogs) => 1

const totalLikes = (blogs) => {
    const reducer = (total, num) => total + num.likes
    return blogs.reduce(reducer, 0)
}
const favoriteBlog = (blogs) => {
    y = 0
    blogger = []
    blogs.forEach(x => {
        if (x.likes > y) {
            y = x.likes
            blogger = x
        }
    })
    return blogger
}
const mostBlogs = (blogs) => {
  const mapBlogs = _(blogs).groupBy('author').map(
      authors => ({...authors[0], amount: authors.length})
  )
  mapBlogs.forEach(blog => {
    (blog.amount > blog.amount) ? blog.amount
      : blogger = blog
  })

  const mostActiveBlogger = {
    author: blogger.author,
    blogs: blogger.amount
  }
  return mostActiveBlogger
}

const mostLikes = (blogs) => {
    const likes = _(blogs).groupBy('author').map((author, blogger) => (
        {
            author: blogger,
            likes: _.sumBy(author, 'likes')
        }
    )).value()
    return _.maxBy(likes, 'likes')
}


module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}
