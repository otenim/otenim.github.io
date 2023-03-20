import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const IntroSection = () => {
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <div>
            <StaticImage src="../images/profile.jpg" />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p>Mineto Tsukada</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p>CS Ph.D. new graduate @ Keio University</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p>
            <a href="https://github.com/otenim">GitHub</a>,
            <a href="https://scholar.google.com/citations?user=59yO56AAAAAJ&hl=ja">Google Scholar</a>
          </p>
        </Col>
      </Row>
    </div>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <IntroSection/>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage