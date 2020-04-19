import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  // Button component for submitting feedback
  return (
    <button onClick={props.handleClick}>
      {props.text}
      </button>
  )
}

const Statistics = (props) => {
  // Component to display the totals from each feedback category
  return(
    <tr>
      <td>{props.text}</td> <td>{props.stat}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const positive = (good/(good + neutral + bad)*100+'%')
  const total = good + bad + neutral
  const average = (good - bad)/total

  if (total === 0) {
    return(
      <div>
        <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h1>Statistics</h1>
      <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h1>Statistics</h1>
      <table>
      <Statistics text='Good' stat={good} />
      <Statistics text='Neutral' stat={neutral} />
      <Statistics text='Bad' stat={bad} />
      <Statistics text='All' stat={total} />
      <Statistics text='Average' stat={average} />
      <Statistics text='Positive' stat={positive} />
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)