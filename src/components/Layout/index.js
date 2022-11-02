import PropTypes from 'prop-types'
import { useTheme } from '@mui/material'

import Footer from '../Footer'
import Header from '../Header'

import cs from './index.module.css'

const Layout = ({ children }) => {
  const theme = useTheme()

  return (
    <div className="App" style={{ backgroundColor: theme.palette.primary.light }}>
      <Header />
      <div className={cs.content}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
