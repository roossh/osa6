import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }

  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  const getTotal = () => {
    return(Object.values(store.getState()).reduce((s, p) => s+p, 0))
  }

  const getAverage = () => {
    const averageVotes = (store.getState().good + store.getState().bad * -1)/getTotal()
    return(averageVotes)
  }

  const getPositives = () => {
    const positives = Math.floor((store.getState().good/getTotal())*100)
    return(positives)
  }

  const statsList = () => {
    return (
      <div>
        <div>hyvä {store.getState().good}</div>
        <div>neutraali {store.getState().ok}</div>
        <div>huono {store.getState().bad}</div>
        <div>yhteensä {getTotal()}</div>
        <div>keskiarvo {getAverage()}</div>
        <div>positiivisia {getPositives()+'%'}</div>
      </div>
    )
  }

  return (
    <div>
      <h2>anna palautetta</h2>
      <button onClick={good}>hyvä</button> 
      <button onClick={bad}>neutraali</button> 
      <button onClick={ok}>huono</button>
      <button onClick={zero}>nollaa tilastot</button>
      <h2>statistiikka</h2>
      {getTotal() === 0 ?  'yhtään palautetta ei ole annettu' : statsList()}
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)