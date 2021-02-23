import React, {useState} from 'react'
const BlogForm = ({makeBlog}) => {
  const [newTitle, setNewTitle] = useState([])
  const [newAuthor, setNewAuthor] = useState([])
  const [newUrl, setNewUrl] = useState([])
  const initialLikes = 0;

  
  const handleUrlChange = (event) => {
    setNewUrl(event.target.value)
  }
  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value)
  }
  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const addBlog = (event) => {
    event.preventDefault()
    
    makeBlog ({
      title: newTitle,
      author: newAuthor,
      url: newUrl,
      likes: initialLikes
    })
    setNewTitle("")
    setNewAuthor("")
    setNewUrl("")
  }
  return(
    <div> <form onSubmit={addBlog}>   
    title:
    <input id ="title"
    value={newTitle} 
    onChange={handleTitleChange}  
    /> 
    <div>
    </div>
    author: 
    <input id ="author"
    value={newAuthor}
    onChange={handleAuthorChange}   
    />
    <div>    
    </div>
    url:
    <input id="url"
    value={newUrl} 
    onChange={handleUrlChange}
    />
    <button id="save-button" type="submit">save</button>
    </form>
    </div>
    )
  }
 
export default BlogForm