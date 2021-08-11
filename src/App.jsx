import React, { useState } from 'react'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header count={count} />
    </div>
  )
}

export default App
