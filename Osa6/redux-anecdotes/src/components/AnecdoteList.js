import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'
import { notification, clearNotification } from '../reducers/notificationReducer'
import filterReducer from '../reducers/filterReducer'

const AnecdoteList = () => {
  
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const filteredAnecdotes = () => anecdotes.filter(anecdote =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    .map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>
    )
     
  const dispatch = useDispatch()
  
  const vote = (anecdote) => {
    dispatch(addVote(anecdote.id));
    dispatch(notification(`you voted for: '${anecdote.content}'`))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  }
  
  return (
    <div>
    <h2>Anecdotes</h2>
    {filteredAnecdotes()}
  </div>
  )
}

export default AnecdoteList