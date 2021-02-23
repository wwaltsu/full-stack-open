import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = [ ""
]


const getId = () => (100000 * Math.random()).toFixed(0)

/*
 const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
*/


// const initialState = anecdotesAtStart.map(asObject)

//const reducer = (state = initialState, action) => {
  const reducer = (state = [], action) => {
  //console.log('state now: ', state)
  //console.log('action', action)
  


  switch(action.type) {
    case 'VOTE':
      //console.log(action.data)
      const id = action.data.id
      const anecToChange = state.find(n => n.id === id)
      const changedAnec = { 
        ...anecToChange, votes: anecToChange.votes+1
      }
      //console.log('changedAnec', changedAnec)
      const notSorted = state.map(state =>state.id !== id ? state : changedAnec)
      return notSorted.sort( (x,y) => y.votes - x.votes )
    case'CREATE': 
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
  
  
}
export const addVote = (id) => {
  return {
    type: 'VOTE',
    data: { 
      id
     }
  }
}

export const createAnecdote = (content) => {

  return {
    type: 'CREATE',
    data: content      
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}


  


export default reducer