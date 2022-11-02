import { useNavigate } from 'react-router-dom'
import { Avatar, Box, Button, Grow, Paper, Slide, Stack, Typography } from '@mui/material'

import Layout from '../../../Layout'
import { useEffect, useState } from 'react'

const GameCBallPage = () => {
  const navigate = useNavigate()
  const [fadeInHeader, setFadeInHeader] = useState(false)
  const [growInContent, setGrowInContent] = useState(false)

  useEffect(() => {
    setTimeout(() => setFadeInHeader(true), 100)
    setTimeout(() => setGrowInContent(true), 100)
  }, [])

  return (
    <Layout className="App">
      <Slide in={fadeInHeader} unmountOnExit>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} mt={12}>
          <Avatar src="/cBall_logo.png" variant="rounded" sx={{ width: 60, height: 60, marginRight: 2 }} />
          <Typography variant="h1">cBall</Typography>
        </Box>
      </Slide>

      <Grow in={growInContent}>
        <Box sx={{ maxWidth: 800 }} mt={2}>
          <Paper>
            <Stack py={6} px={6} spacing={3}>
              <Typography variant="h4">
                cBall is a primitive game which is not collects any user data and was created to have fun.
              </Typography>
              <Button variant="outlined" size="large" onClick={() => navigate('/cBall/policy')}>
                cBall policy
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Grow>
    </Layout>
  )
}

export default GameCBallPage
