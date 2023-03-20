import React from "react"
import { Link } from 'gatsby'
import { Container, Navbar, Nav } from 'react-bootstrap'


const Header = () => {
  return (
    <header className="bg-dark">
      <Container>
        <Navbar expand="md" variant="dark">
          <Navbar.Brand href="/">Mineto Tsukada</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="ml-auto">
              <Nav.Item as="li">
                <Link to="/pubs" className="nav-link" activeClassName="active">Publifications</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}


export default Header