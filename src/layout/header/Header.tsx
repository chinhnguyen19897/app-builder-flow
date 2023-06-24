import { Link } from 'react-router-dom'
import { Layout } from 'antd'

import './header.scss'
import { routesConfig } from '@config/routes'

const { Header } = Layout
export const HeaderNavigate = () => {
  return (
    <Header className="header">
      <section className="logo">
        <Link to={routesConfig.home}>
          <h4>Flow Builder</h4>
        </Link>
      </section>
      <nav className="menu-wrapper">
        <ul className="menu-item">
          <li className="menu-item--list">
            <Link
              to={routesConfig.flow}
              type="button"
              className="btn btn-primary"
            >
              Start Now
            </Link>
          </li>
        </ul>
      </nav>
    </Header>
  )
}
