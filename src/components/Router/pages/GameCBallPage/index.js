import { Link } from 'react-router-dom'

const GameCBallPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>cBall game info page</p>
        <Link to="/cBall/policy">cBall policy</Link>
      </header>
    </div>
  )
}

export default GameCBallPage
