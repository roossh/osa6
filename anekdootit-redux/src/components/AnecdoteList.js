import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const vote = (anecdote) => {
    props.voteAnecdote(anecdote)
    props.setNotification(`you voted ${anecdote.content}`, 5)
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

const ConnectedAnecdotes = connect(mapStateToProps, {voteAnecdote, setNotification })(AnecdoteList)
export default ConnectedAnecdotes