  
import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote, } from '../reducers/anecdoteReducer'
import { notification, clearNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

/*
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    dispatch(notification(`you added ${content}`))
  }
  */

 const AnecdoteForm = (props) => {
  const dispatch = useDispatch()
  
  const addAnecdote = async (event) => {
    
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const AnecdoteForm = await anecdoteService.createNew(content)
    dispatch(createAnecdote(AnecdoteForm))
    dispatch(notification(`you added ${content}`))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  }


  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
  )
}

export default AnecdoteForm