import './home.scss'
import { Col, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'

import FlowBg from '@assets/images/flow-bg.jpg'
import { routesConfig } from '@config/routes'

const Home = () => {
  return (
    <section id="home-page" className="homepage">
      <>
        <Row justify="space-between">
          <Col span={11}>
            <article className="homepage-title mb-3">
              <Typography.Title level={2}>
                Diagramming for teams
              </Typography.Title>
              <Typography.Paragraph className="content">
                Bring your storage to our online tool
              </Typography.Paragraph>
            </article>
            <section className="button-wrapper mb-3">
              <Link
                to={routesConfig.flow}
                type="button"
                className="btn btn-primary button-wrapper--start"
              >
                Start
              </Link>
              <Link className="btn btn-secondary button-wrapper--docs" to={'/'}>
                Docs
              </Link>
            </section>
            <article className="mb-3 note">
              <Typography.Text>
                No login or registration required.
              </Typography.Text>
            </article>
          </Col>
          <Col span={13}>
            <section className="homepage-bg">
              <img src={FlowBg} alt="flow-bg" />
            </section>
          </Col>
        </Row>
      </>
    </section>
  )
}
export default Home
