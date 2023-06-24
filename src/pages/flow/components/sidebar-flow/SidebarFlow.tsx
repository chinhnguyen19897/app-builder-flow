import { dataSidebar } from '@pages/flow/constants/dataSidebar'
import { Collapse, Layout } from 'antd'
import './sidebarFlow.scss'
import React from 'react'
import SidebarItem from '@pages/flow/components/sidebar-item/SidebarItem'

const SidebarFlow = () => {
  const { Sider } = Layout
  const { Panel } = Collapse
  return (
    <Sider className="slider">
      <Collapse defaultActiveKey={['1']} className="collapse-slider">
        {dataSidebar.map((e) => {
          return (
            <Panel header={e.label} key={e.key}>
              {e.items?.map((child) => {
                return (
                  <React.Fragment key={child.content}>
                    <SidebarItem child={child} />
                  </React.Fragment>
                )
              })}
            </Panel>
          )
        })}
      </Collapse>
    </Sider>
  )
}

export default SidebarFlow
