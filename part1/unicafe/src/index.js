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
  <div>
    <p>{props.category}: {props.count}</p>
  </div>
  )
}

const Total = (props) => {
  // Component to average category values
  return (
    <div>
      <p>{props.title}: {(props.value1 + props.value2 + props.value3)}</p>
    </div>
  )
}

const Average = (props) => {
  // Component to average category values
  return (
    <div>
      <p>{props.title}: {(props.value1-props.value3)/(props.value1 + props.value2 + props.value3)}</p>
    </div>
  )
}

const Positive = (props) => {
  // Component to displya percentage of positive responses
  return (
    <div>
      <p>{props.title}: {props.value1/(props.value1 + props.value2 + props.value3)*100}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h1>Statistics</h1>
      <Statistics category='Good' count={good} />
      <Statistics category='Neutral' count={neutral} />
      <Statistics category='Bad' count={bad} />
      <Total title='All'
               value1={good}
               value2={neutral}
               value3={bad} />
      <Average title="Average"
               value1={good}
               value2={neutral}
               value3={bad} />
      <Positive title='Positive'
               value1={good}
               value2={neutral}
               value3={bad} />         
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)