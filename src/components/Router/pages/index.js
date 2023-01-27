import { Card, CardActions, CardContent, CardMedia, Grow, IconButton, Slide, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Android, Apple } from '@mui/icons-material'

import Layout from '../../Layout'

import './index.css'
import { useEffect, useState } from 'react'
import { Box } from '@mui/system'

const Home = () => {
  const navigate = useNavigate()
  const [fadeInHeader, setFadeInHeader] = useState(false)
  const [growInContent, setGrowInContent] = useState(false)

  useEffect(() => {
    setTimeout(() => setFadeInHeader(true), 100)
    setTimeout(() => setGrowInContent(true), 100)
  }, [])

  return (
    <Layout>
      <Slide in={fadeInHeader} unmountOnExit>
        <Typography variant="h1" mt={12}>
          Di4ik3r&apos;s personal website
        </Typography>
      </Slide>

      <Grow in={growInContent}>
        <Box mt={12}>
          <Card
            onClick={() => navigate('/cball')}
            className="card"
            sx={{
              maxWidth: 320,
              ':hover': { boxShadow: 20 },
            }}>
            <CardMedia component="img" height="320" image="/cBall_logo.png" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                cBall
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Time-honored block destroyer game with marvelous effects, where you should calculate each shot and
                gather upgrades to be able to overcome the high-score.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
                sx={{ ml: 1 }}
                color="success"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open('https://play.google.com/store/apps/details?id=org.godotengine.cball', '_blank')
                }}>
                <Android />
              </IconButton>
              <IconButton
                sx={{ ml: 1 }}
                color="inherit"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open('https://apps.apple.com/us/app/cball/id1635572748', '_blank')
                }}>
                <Apple />
              </IconButton>
            </CardActions>
          </Card>
        </Box>
      </Grow>
    </Layout>
  )
}

export default Home
