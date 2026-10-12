import { useState } from 'react'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodBtn = () => {
    setGood(good + 1)
  }

  const neutralBtn = () => {
    setNeutral(neutral + 1)
  }

  const badBtn = () => {
    setBad(bad + 1)
  }

  const total = good + neutral + bad
  const average = (good - bad) / total
  const percentage = (good / total) * 100


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodBtn} >good</button>
      <button onClick={neutralBtn}>neutral</button>
      <button onClick={badBtn}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average {average}</p>
      <p>percentage {percentage}%</p>
    </div>
  )
}

export default App