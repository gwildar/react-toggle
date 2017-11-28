import React from 'react'
import { ThemeProvider as DefaultThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { theme as defaultTheme } from './theme'

const ThemeProvider = (props) => {
  const theme = {
    reactToggle: Object.assign({}, defaultTheme, props.theme),
  }
  return (
    <DefaultThemeProvider theme={theme}>
      {props.children}
    </DefaultThemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
}

export default ThemeProvider
