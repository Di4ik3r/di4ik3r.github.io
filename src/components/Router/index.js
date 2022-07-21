import { Routes, Route, HashRouter } from 'react-router-dom'

import Home from './pages/index'
import GameCBallPage from './pages/GameCBallPage'
import CBallPolicy from './pages/GameCBallPage/Policy'

const Router = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cball">
          <Route index element={<GameCBallPage />} />
          <Route path="policy" element={<CBallPolicy />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default Router
