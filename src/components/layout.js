import * as React from 'react'
import Header from './header'
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout