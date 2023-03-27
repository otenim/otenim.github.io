import * as React from 'react'
import { pageStyles } from '../components/style/master'
import { Link } from 'gatsby'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import Header from '../components/header'
import MetaData from '../components/meta'
import {
  profileSectionStyle,
  thumbnailPictureStyle,
  nameStyle,
  sectionTitleStyle,
  sectionContentStyle,
  contentListStyle,
  importantNameStyle,
  publicationListStyle
} from '../components/style/styles.module.scss'


const PublicationSection = () => {
  return (
    <div>
      <h2 className={sectionTitleStyle}>PUBLICATIONS</h2>
      <div className={sectionContentStyle}>
        <h3 className={sectionTitleStyle}>Journal Papers</h3>
        <ul className={publicationListStyle}>
          <li>
            <u>Mineto Tsukada</u> and Hiroki Matsutani,
            "An Overflow/Underflow-Free Fixed-Point Bit-Width Optimization Method for OS-ELM Digital Circuit",
            IEICE Transactions on Fundamentals of Electronics, Communications and Computer Sciences,
            Special Section on VLSI Design and CAD Algorithms, Vol.E105-A, No.3, pp.437-447, Mar. 2022.
          </li>
          <li>
            <u>Mineto Tsukada</u>, Masaaki Kondo and Hiroki Matsutani,
            "A Neural Network-Based On-device Learning Anomaly Detector for Edge Devices",
            IEEE Transactions on Computers (TC), Vol.69, No.7, pp.1027-1044, Jul. 2020. <b>(Spotlight Paper in July 2020 Issue of IEEE TC)</b>
          </li>
          <li>
            <u>Mineto Tsukada</u>, Masaaki Kondo and Hiroki Matsutani,
            "OSUAD: An FPGA-Based Online Sequential Learning Unsupervised Anomaly Detector",
            IPSJ Transactions on Advanced Computing Systems (ACS), Vol.12, No.3, pp.34-45, Jul. 2019.
          </li>
          <li>
            Rei Ito, <u>Mineto Tsukada</u> and Hiroki Matsutani,
            "An On-Device Federated Learning Approach for Cooperative Model Update between Edge Devices",
            IEEE Access, Vol.9, pp.92986-92998, Jun. 2021.
          </li>
        </ul>

        <h3 className={sectionTitleStyle}>Conference Proceedings</h3>
        <ul className={publicationListStyle}>
          <li>
            <u>Mineto Tsukada</u>, Masaaki Kondo and Hiroki Matsutani,
            "OS-ELM-FPGA: An FPGA-Based Online Sequential Unsupervised Anomaly Detector",
            Proc. of the 24th International European Conference on Parallel and Distributed Computing (Euro-Par'18) Workshops,
            pp.518-529, Aug. 2018.
          </li>
          <li>
            Hirohisa Watanabe, <u>Mineto Tsukada</u> and Hiroki Matsutani,
            "An FPGA-Based On-Device Reinforcement Learning Approach using Online Sequential Learning",
            Proc. of the 35th IEEE International Parallel and Distributed Processing Symposium (IPDPS'21) Workshops,
            The 28th Reconfigurable Architectures Workshop (RAW'21), pp.96-103, May. 2021.
          </li>
          <li>
            Tokio Kibata, <u>Mineto Tsukada</u> and Hiroki Matsutani,
            "An Edge Attribute-wise Partitioning and Distributed Processing of R-GCN using GPUs",
            Proc. of the 26th International European Conference on Parallel and Distributed Computing (Euro-Par'20) Workshops,
            The 18th International Workshop on Algorithms, Models and Tools for Parallel Computing on Heterogeneous Platforms (HeteroPar'20), pp.122-134, Aug. 2020.
          </li>
          <li>
            Rei Ito, <u>Mineto Tsukada</u>, Masaaki Kondo and Hiroki Matsutani,
            "An Adaptive Abnormal Behavior Detection using Online Sequential Learning",
            Proc. of the 17th International Conference on Embedded and Ubiquitous Computing (EUC'19), pp.436-440, Aug. 2019.
          </li>
          <li>
            Tomoya Itsubo, <u>Mineto Tsukada</u> and Hiroki Matsutani,
            "Performance and Cost Evaluations of Online Sequential Learning and Unsupervised Anomaly Detection Core",
            Proc. of the 22nd IEEE Symposium on Low-Power and High-Speed Chips and Systems (COOL Chips 22), pp.1-3, Apr. 2019.
          </li>
          <li>
            Kaho Okuyama, Yuta Tokusashi, Takuma Iwata, <u>Mineto Tsukada</u>, Kazumasa Kishiki and Hiroki Matsutani,
            "Network Optimizations on Prediction Server with Multiple Predictors",
            Proc. of the 16th IEEE International Symposium on Parallel and Distributed Processing with Applications (ISPA'18), pp.1044-1045, Dec. 2018
          </li>
        </ul>

        <h3 className={sectionTitleStyle}>Demonstration</h3>
        <ul className={publicationListStyle}>
          <li>
            <u>Mineto Tsukada</u>, Masaaki Kondo and Hiroki Matsutani,
            "An FPGA-based On-device Sequential Learning Approach for Unsupervised Anomaly Detection",
            The 27th IEEE Symposium on Field-Programmable Custom Computing Machines (FCCM'19), Demo Night, Apr. 2019.
          </li>
        </ul>

        <h3 className={sectionTitleStyle}>Technical Reports</h3>
        <ul className={publicationListStyle}>
          <li>
            <u>Mineto Tsukada</u>, Masaaki Kondo and Hiroki Matsutani,
            "Anomaly Detection using On-Device Learning Algorithm on Wireless Sensor Nodes",
            IEICE Technical Reports CPSY2022-10 (SWoPP'22), Vol.122, No.133, pp.53-58, Jul. 2022. <b>(IPSJ ARC Young Researcher Encouragement Award)</b>
          </li>
          <li>
            <u>Mineto Tsukada</u> and Hiroki Matsutani,
            ``Automated Fixed-Point Bit-Length Optimization for OS-ELM'',
            IEICE Technical Reports CPSY2020-4 (SWoPP'20), Vol.120, No.121, pp.23-28, Jul. 2020.
          </li>
          <li>
            <u>Mineto Tsukada</u>, Masaaki Kondo and Hiroki Matsutani,
            "A Method for Improving Accuracy using Multiple Online Unsupervised Anomaly Detection Cores",
            IEICE Technical Reports CPSY2018-114 (ETNET'19), Vol.118, No.514, pp.247-252, Mar. 2019.
          </li>
          <li>
            <u>Mineto Tsukada</u>, Masaaki Kondo and Hiroki Matsutani,
            "A Stable and Efficient Learning Method for FPGA-Based Online Sequential Unsupervised Anomaly Detector",
            IEICE Technical Reports CPSY2018-30 (SWoPP'18), Vol.118, No.165, pp.217-222, Aug. 2018. <b>(IPSJ ARC Young Researcher Encouragement Award)</b>
          </li>
          <li>
            <u>Mineto Tsukada</u>, Koya Mitsuzuka, Kohei Nakamura, Yuta Tokusashi and Hiroki Matsutani,
            "Accelerating Sequential Learning Algorithm OS-ELM Using FPGA-NIC",
            IEICE Technical Reports CPSY2017-127, Vol.117, No.378, pp.133-138, Jan. 2018. <b>(IEICE CPSY Young Presentation Award)</b>
          </li>
          <li>
            Rei Ito, <u>Mineto Tsukada</u> and Hiroki Matsutani,
            "An Efficient Cooperative Model Update using On-Device Learning",
            IEICE Technical Reports CPSY2019-65, Vol.119, No.372, pp.79-84, Jan. 2020.
          </li>
          <li>
            Hirohisa Watanabe, <u>Mineto Tsukada</u> and Hiroki Matsutani,
            "A Light-Weight Reinforcement Learning using Online Sequential Learning",
            IEICE Technical Reports CPSY2019-66, Vol.119, No.372, pp.85-90, Jan. 2020.
          </li>
          <li>
            Tomoya Itsubo, <u>Mineto Tsukada</u> and Hiroki Matsutani,
            "Area and Performance Evaluations of Online Sequential Learning and Unsupervised Anomaly Detection Core",
            IEICE Technical Reports CPSY2018-96, Vol.118, No.431, pp.83-88, Jan. 2019. <b>(IEICE CPSY Young Presentation Award)</b>
          </li>
          <li>
            Rei Ito, <u>Mineto Tsukada</u>, Masaaki Kondo and Hiroki Matsutani,
            "A Case for Unsupervised Abnormal Behavior Detection Using Multiple Online Sequential Learning Cores",
            IEICE Technical Reports CPSY2018-95, Vol.118, No.431, pp.77-82, Jan. 2019.
          </li>
          <li>
            Kaho Okuyama, Takuma Iwata, <u>Mineto Tsukada</u>, Masakazu Kishiki and Hiroki Matsutani,
            "FPGA and DPDK-Based Communication Acceleration Methods for Prediction Server with Multiple Predictors",
            IEICE Technical Reports CPSY2018-5 (HotSPA'18), Vol.118, No.92, pp.101-106, Jun. 2018.
          </li>
        </ul>
      </div>
    </div>
  )
}

const ProfileSection = () => {
  return (
    <div className={profileSectionStyle}>
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
          <p>CS Ph.D. candidate @ <Link to="https://www.arc.ics.keio.ac.jp/english">Matsutani edgeAI Lab</Link></p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p>
            <Link to="https://github.com/otenim">GitHub</Link>,
            <Link to="https://scholar.google.com/citations?user=59yO56AAAAAJ&hl=en">Google Scholar</Link>
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
    <div>
      <MetaData title="Mineto Tsukada" description="Mineto Tsukada's Personal Web Page" />
      <Header />
      <main style={pageStyles}>
        <Container>
          <ProfileSection />
          <JobSection />
          <EducationSection />
          <PublicationSection />
        </Container>
      </main>
    </div>
  )
}

export const Head = () => <title>Home</title>

export default IndexPage