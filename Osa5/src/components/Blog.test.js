import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Blog from './Blog'
import BlogForm from './BlogForm'

afterEach(cleanup)

test('renders author and title', () => {
    const blog = { title: 'react-kurssi', author: '2020'}
  const component = render(
    <Blog blog={blog} />
  )
  expect(component.container).toHaveTextContent(
    "react-kurssi 2020"
  ) 
})

test('test if all information is show when pressed button', () => {
  const blog = { title: 'react-kurssi', author: '2020', url: 'github.com', likes: 10, author: 'author'}
  const component = render(
    <Blog blog={blog} />
  )
  fireEvent.click(component.getByText('show'))
  const expandedBlog = component.container.querySelector('hide')
  expect(component.container).toHaveTextContent( 'react-kurssi hide github.com 10 likes Like author remove' )
  expect(expandedBlog).toBeDefined()
})
test('clicking the likebutton twice calls event handler twice', async () => {
  const blog = { title: 'react-kurssi', author: '2020', url: 'github.com', likes: 0, author: 'author'}

  const mockHandler = jest.fn()

  const { getByText } = render(
    <Blog blog={blog} onClick={mockHandler} />
  )

  fireEvent.click(getByText('show'))
  const button = getByText('Like')
  //console.log(button)
  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(2)
})

test('<blogForm /> updates parent state and calls onSubmit', () => {
  const makeBlog = jest.fn()

  const component = render(
    <BlogForm makeBlog={makeBlog} />
  )

  const title = component.container.querySelector('#title')
  const author = component.container.querySelector('#author')
  const url = component.container.querySelector('#url')
  const form = component.container.querySelector('form')

  fireEvent.change(title, { 
    target: { value: 'Hei' } 
  })
  fireEvent.change(author, { 
    target: { value: 'sinä' } 
  })
  fireEvent.change(url, { 
    target: { value: 'hyvää joulua!' } 
  })
  
  fireEvent.submit(form)

  expect(makeBlog.mock.calls).toHaveLength(1)
  //console.log(makeBlog.mock.calls[0][0].content)
  expect(makeBlog.mock.calls[0][0].url).toBe("hyvää joulua!");
  expect(makeBlog.mock.calls[0][0].author).toBe("sinä");
  expect(makeBlog.mock.calls[0][0].title).toBe("Hei");
})






