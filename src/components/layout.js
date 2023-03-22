import * as React from 'react'
import Header from './header'
import { pageStyles } from '../components/master';

const Layout = ({ children }) => {
  return (
    <main style={pageStyles}>
      <Header/>
      {children}
    </main>
  )
}

export default Layout