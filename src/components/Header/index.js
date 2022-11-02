import { useNavigate } from 'react-router-dom'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'

import cs from './header.module.css'

const Header = () => {
  const navigate = useNavigate()

  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <img src="/logo512.png" className={cs.logo} />
        <Typography variant="h6" component="div" sx={{ mr: 2 }}>
          Di4ik3r
        </Typography>
        <Button color="inherit" onClick={() => navigate('/')}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate('/cball')}>
          cBall
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
