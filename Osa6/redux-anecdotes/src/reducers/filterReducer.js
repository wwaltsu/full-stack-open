const filterReducer = (state = '', action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
      case 'CHANGE':
        return action.data
      default:
        return state
    }
  }
  export const change = (content) => {
    //console.log("content", content)
    return {
      type: 'CHANGE',
      data: content      
    }
  }
  
  export default filterReducer