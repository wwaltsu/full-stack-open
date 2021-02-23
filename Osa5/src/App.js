import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login' 
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'
import Success from "./components/Success";
import Error from "./components/Error";

const App = () => {
  const [blogs, setBlogs] = useState([]) 
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null) 
  const blogFormRef = React.createRef()
  const [success,setSuccess] = useState(null);
  const [error,setError] = useState(null);
  
  useEffect(() => {
    blogService
      .getAll()
      .then(initialBlogs => {
        setBlogs(initialBlogs)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])



  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      ) 

      blogService.setToken(user.token)
      setUser(user)
      setSuccess(`Logged in as ${user.name}`);
      setTimeout(() => {
        setSuccess(null)
      }, 5000)
      setUsername('')
      setPassword('')
      
    } catch (exception) {
      setError('wrong username or password')
      setTimeout(() => {
        setError(null)
      }, 5000)
    }
  }

  useEffect(() => {
    const likesMagnitude = async () => {
      const likesMagnitude = await blogService.getAll()
      likesMagnitude.sort((a, b) => b.likes - a.likes )
      setBlogs(likesMagnitude)
    }
    likesMagnitude()
  }, [])

  const logOutUser = event => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
  }
 const loginForm = () => (
  <Togglable buttonLabel='login'>
    <LoginForm
      username={username}
      password={password}
      handleUsernameChange={({ target }) => setUsername(target.value)}
      handlePasswordChange={({ target }) => setPassword(target.value)}
      handleSubmit={handleLogin}
    />  
  </Togglable>
 )
const addBlog = (blogObject) => {
  console.log("addblog",blogObject)
  blogFormRef.current.toggleVisibility()
  try {
  blogService
    .create(blogObject)
    .then(returnedBlog => {     
      setBlogs(blogs.concat(returnedBlog))
    })
    setSuccess(`Added ${blogObject.title}`);
    setTimeout(() => {
      setSuccess(null)
    }, 5000)
    
  } catch (exception) {
    setError('Oops something went wrong adding blog')
    setTimeout(() => {
      setError(null)
    }, 5000)
  }
}
const blogForm = () => (
  <>
  <Togglable id="new-blog-button" buttonLabel ='new blog' ref={blogFormRef}>
    <BlogForm makeBlog={addBlog} />
  </Togglable>
  <div>
  
  <h2>blogs</h2> {blogs.map(blog => <Blog key={blog.id} blog={blog}/>)}
  
  </div>
  </>
)
  return (
    <div>
      <Notification message={errorMessage}/>
      <Success message={success}/>
      <Error message={error}/>
      {user === null ?
        loginForm() :
        <div>
          <p> logged in as {user.username} <button onClick={logOutUser}>logout</button> </p> 
          {blogForm()}
        </div>
      }

    </div>
  )
}

export default App