import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
    event.persist()
    const content = event.target.anecdote.value
    const newAnecdote = await anecdoteService.createNew(content)
    props.createAnecdote(newAnecdote)
    event.target.anecdote.value = ''
    props.setNotification(`you created ${newAnecdote.content}`)
    setTimeout(() => props.setNotification(null), 5000)
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

const ConnectedForm = connect(null, { createAnecdote, setNotification })(AnecdoteForm)
export default ConnectedForm