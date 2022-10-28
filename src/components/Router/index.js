import { Routes, Route, HashRouter } from 'react-router-dom'

import Home from './pages/index'
import GameCBallPage from './pages/GameCBallPage'
import CBallPolicy from './pages/GameCBallPage/Policy'

const Router = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <meta name="google-site-verification" content="FzR2zvOwfBbLBXAS737XdK_DL6vj2PLLBoAUdeWU3d0" />
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
