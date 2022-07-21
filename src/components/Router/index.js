import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/index'
import GameCBallPage from './pages/GameCBallPage'
import CBallPolicy from './pages/GameCBallPage/Policy'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cball">
          <Route index element={<GameCBallPage />} />
          <Route path="policy" element={<CBallPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
