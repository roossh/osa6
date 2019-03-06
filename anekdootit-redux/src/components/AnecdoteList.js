import React from 'react'
import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const vote = (anecdote) => {
    const id = anecdote.id
    props.dispatch({
        type: 'VOTE',
        data: { id }
    })
    props.dispatch(
      setNotification(`you voted ${anecdote.content}`)
    )
    setTimeout(() => props.dispatch(setNotification(null)), 5000)
  }

  return (
    <div>
      {props.visibleAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const anecdotesToShow = ({anecdotes, filter}) => {
  if (filter === 'ALL') {
    return anecdotes.sort((a, b) => (b.votes - a.votes))
  }
  return filter === 'ALL' ? anecdotes
    : anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => (b.votes - a.votes))
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state),
    filter: state.filter,
  }
}

const ConnectedAnecdotes = connect(mapStateToProps)(AnecdoteList)
export default ConnectedAnecdotes