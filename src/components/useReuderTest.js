import React, { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
    </div>
  )
}

export default App
