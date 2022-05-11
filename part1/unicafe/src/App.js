import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = props => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>waiting for feedback</div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine value={props.clicks.good} text="good"></StatisticLine>
          <StatisticLine value={props.clicks.neutral} text="neutral"></StatisticLine>
          <StatisticLine value={props.clicks.bad} text="bad"></StatisticLine>
          <StatisticLine value={props.all} text="all"></StatisticLine>
          <StatisticLine value={props.avg} text="average"></StatisticLine>
        </tbody>
      </table>
    </div>
  )

}

const App = () => {

  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  let all = clicks.good + clicks.neutral + clicks.bad
  let avg = Math.round((clicks.good - clicks.bad) / (Object.keys(clicks).length) * 100) / 100

  const handleGoodClick = () => {
    setClicks({
      ...clicks,
      good: clicks.good + 1,
    })
  }

  const handleNeutralClick = () => {
    setClicks({
      ...clicks,
      neutral: clicks.neutral + 1,
    })
  }

  const handleBadClick = () => {
    setClicks({
      ...clicks,
      bad: clicks.bad + 1,
    })
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good"></Button>
      <Button handleClick={handleNeutralClick} text="neutral"></Button>
      <Button handleClick={handleBadClick} text="bad"></Button>
      <Statistics clicks={clicks} all={all} avg={avg}></Statistics>
    </div>
  )
}

export default App