import { useState } from 'react'

const Statistics = (props) => {

  const total = props.good + props.neutral + props.bad

  if (total === 0) {
    return (
      <div>No feedback given</div>
    )
  }

  const average = (props.good - props.bad) / total
  const percentage = (props.good / total) * 100
  
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>total {total}</p>
      <p>average {average}</p>
      <p>percentage {percentage}%</p>
    </div>
  )

}

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


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodBtn} >good</button>
      <button onClick={neutralBtn}>neutral</button>
      <button onClick={badBtn}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App