import * as React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'


const Header = () => {
  return (
    <header className="bg-dark">
      <Navbar expand="md" variant="dark">
        <Navbar.Brand href="/">Otenim's Personal Web Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li">
              <Link to="/pubs" className="nav-link" activeClassName="active">Publifications</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}


export default Header