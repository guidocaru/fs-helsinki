import { useState } from 'react'

const MostVoted = ({ anecdotes, points }) => {
  let mostVotedIndex = points.indexOf(Math.max(...points));
  if (mostVotedIndex === 0) {
    return (<div>No votes yet</div>)
  }
  return (<div>{anecdotes[mostVotedIndex]}</div>)

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const vote = () => {
    const pointsUpdated = [...points]
    pointsUpdated[selected]++
    setPoints(pointsUpdated)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>Next anecdote</button>
      <button onClick={vote}>vote</button>
      <h1>Anecdote with most votes</h1>
      <MostVoted anecdotes={anecdotes} points={points} ></MostVoted>
    </div>
  )
}

export default App

