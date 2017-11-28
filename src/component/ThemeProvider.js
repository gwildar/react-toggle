import React from 'react'
import { ThemeProvider as DefaultThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

const defaultTheme = {
  checkedBg: '#19AB27',
  checkedBgHover: '#128D15',
  notCheckedBg: '#4D4D4D',
  notCheckedBgHover: '#000000',
  checkedBorder: '#19AB27',
  notCheckedBorder: '#4D4D4D',
  thumbBg: '#FAFAFA',
}

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
