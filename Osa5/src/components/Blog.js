import React, { useState } from 'react';
import blogService from '../services/blogs'
import PropTypes from 'prop-types'

const Blog = ({ blog, setBlogs, onClick}) => {
const [like, setNewLike] = useState(blog.likes)
const [toggle, toggled] = useState(true)

  console.log("like count",like)

  const addLike = async () => {
  try{
     console.log("addLike",addLike)
    const copyBlog =  { 
      likes: ++blog.likes, 
      title: blog.title, 
      author: blog.author, 
      user: blog.user.id, 
      url: blog.url 
    }
    await blogService.update(blog.id, copyBlog)
    setNewLike(like+1)
  }catch(exception){
    console.log('error')
  }
}

const handleBlogRemove = async () => {
  try {
    if (window.confirm ('Are you sure to remove this blog by ' + blog.title + ' ' + blog.author)) {
      const response = await blogService.remove(blog.id)
      const updateBlogs = await blogService.getAll()
      setBlogs(updateBlogs)
      console.log(response)
    }
  } catch (error) {
    console.log(error)
  }
}

const blogStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: 'solid',
  borderWidth: 1,
  marginBottom: 5
}
  if (toggle) {
    return (
      <div
        style={blogStyle}
        className="less blog" onClick={() => toggled(!toggle)}>
          <div>
        {blog.title} {blog.author}
        </div>
        <button className="showButton" onClick={() => toggled(!toggle)}>show</button>
      </div>
    )
  } else {
    return (
      <div  
      style={blogStyle}>
        <div className="more blog" >
        <div >{blog.title}<button onClick={() => toggled(!toggle)}>{' '}hide</button> {' '}
        <div>{blog.url}</div> {' '}
    {" "}{blog.likes} likes <button className="likeButton" onClick={onClick||addLike}>Like</button>{' '}
          <div>{blog.author}</div> {' '}
        </div>  
        <button onClick={() => handleBlogRemove()}>remove</button>
        </div>
      </div>
    )
  }
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  setBlogs: PropTypes.func.isRequired,
  //käytetään vain testissä
  onClick: PropTypes.func,
}
Blog.defaultProps = {
  setBlogs: () => {},
};

export default Blog
