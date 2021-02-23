const initialState = [
  {
    content: 'redux',
    votes: 3,
    id: 43241,
  }
]

const reducer = (state = initialState, action) => {
  //console.log('state now: ', state)
  //console.log('action', action)

  switch(action.type) {
    case 'VISIBLE':
      return {message: action.data.content} 
    case 'INVISIBLE':
      return ''
    default:
    return state
  }
}
export const clearNotification = () => {
  return {
    type: "INVISIBLE"
  }
}

export const notification = (content) => {
  const timeout = setTimeout(() => {
  }, 3000);
  return {
    type: 'VISIBLE',
    data: {
      content : content
    }
    
    
  }
}

export default reducer