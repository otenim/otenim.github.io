import * as React from 'react'
import { Link } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import {
  introSectionStyle,
  thumbnailPictureStyle,
  nameStyle,
  sectionTitleStyle,
  sectionContentStyle,
  contentListStyle,
  importantNameStyle,
  publicationListStyle
} from '../components/styles.module.scss'

const PublicationSection = () => {
  return (
    <div>
      <h2 className={sectionTitleStyle}>PUBLIFICATIONS</h2>
      <div className={sectionContentStyle}>
        <ul className={publicationListStyle}>
          <li>
          </li>
        </ul>
      </div>
    </div>
  )
}

const IntroSection = () => {
  return (
    <div className={introSectionStyle}>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <div className={thumbnailPictureStyle}>
            <StaticImage src="https://avatars.githubusercontent.com/u/26879886?v=4"/>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p className={nameStyle}>Mineto Tsukada</p>
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
            <Link to="https://github.com/otenim">GitHub</Link>,
            <Link to="https://scholar.google.com/citations?user=59yO56AAAAAJ&hl=ja">Google Scholar</Link>
          </p>
        </Col>
      </Row>
    </div>
  )
}

const JobSection = () => {
  return (
    <div>
      <h2 className={sectionTitleStyle}>WORK EXPERIENCES</h2>
      <div className={sectionContentStyle}>
        <ul className={contentListStyle}>
          <li>
            <p><span className={importantNameStyle}>Japan Society for the Promotion of Science</span> (Apr. 2020 - Mar. 2023)</p>
            <p>Chiyoda-ku, Tokyo, Japan</p>
            <p>Research Fellow DC1</p>
          </li>
          <li>
            <p><span className={importantNameStyle}>Ghelia Inc.</span> (Jun. 2017 - Feb. 2023)</p>
            <p>Taito-ku, Tokyo, Japan</p>
            <p>Machine Learning Engineer (Part-Time)</p>
          </li>
          <li>
            <p><span className={importantNameStyle}>Intel Corp.</span> (Jun. 2018 - Aug. 2018)</p>
            <p>Chiyoda-ku, Tokyo, Japan</p>
            <p>Software Engineer (Intern)</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

const EducationSection = () => {
  return (
    <div>
      <h2 className={sectionTitleStyle}>EDUCATIONS</h2>
      <div className={sectionContentStyle}>
        <ul className={contentListStyle}>
          <li>
            <p><span className={importantNameStyle}>Ph.D. in Engineering</span> (Apr. 2020 - Mar. 2023)</p>
            <p>Center for Information and Computer Science, Graduate School of Science and Technology, Keio University</p>
          </li>
          <li>
            <p><span className={importantNameStyle}>Master of Engineering</span> (Apr. 2018 - Mar. 2020)</p>
            <p>Center for Information and Computer Science, Graduate School of Science and Technology, Keio University</p>
          </li>
          <li>
            <p><span className={importantNameStyle}>Bachelor of Engineering</span> (Apr. 2014 - Mar. 2018)</p>
            <p>Department of Information and Computer Science, Faculty of Science and Technology, Keio University</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <IntroSection/>
      <JobSection/>
      <EducationSection/>
      <PublicationSection/>
    </Layout>
  )
}

export const Head = () => <title>Home</title>

export default IndexPage