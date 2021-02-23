const mongoose = require('mongoose')
const url = process.env.MONGODB_URI
var uniqueValidator = require('mongoose-unique-validator')
/*
console.log('connecting to', url)
mongoose.connect(url, { useNewUrlParser: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

 */

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,

  },
  url: {
    type: String,
  },
  likes: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})
blogSchema.plugin(uniqueValidator)

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

mongoose.set('useFindAndModify', false)

module.exports = mongoose.model('Blog', blogSchema)