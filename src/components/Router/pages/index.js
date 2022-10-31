import { Link } from 'react-router-dom'

import './index.css'

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Di4ik3r&apos;s personal website</p>
        <Link to="/cBall">cBall game</Link>
      </header>
    </div>
  )
}

export default Home
