const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
    const id = action.data.id
    const anecdoteToVote = state.find(a => a.id === id)
    const votedAnecdote = {...anecdoteToVote,
      votes: anecdoteToVote.votes + 1}
      return state.map(anecdote => anecdote.id !== id ? anecdote : votedAnecdote)
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default: return state
    }
}

export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data,
  }
}

export const initialiseAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}

export default anecdoteReducer