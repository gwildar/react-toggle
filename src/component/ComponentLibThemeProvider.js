import React from 'react'
import { ThemeProvider } from 'styled-components'
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

const ComponentLibThemeProvider = (props) => {
  const theme = {
    reactToggle: Object.assign({}, defaultTheme, props.theme),
    // 👆 Merge the default theme with the user-provided theme
  }
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

ComponentLibThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
}

export default ComponentLibThemeProvider
