import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    props.dispatch(
      createAnecdote(event.target.anecdote.value)
    )
    props.dispatch(
      setNotification(`you created ${event.target.anecdote.value}`))
    setTimeout(() => props.dispatch(setNotification(null)), 5000)
    event.target.anecdote.value = ''
    
  }

  return (  
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    notification: state.notification,
    filter: state.filter,
  }
}

const ConnectedForm = connect(mapStateToProps)(AnecdoteForm)
export default ConnectedForm