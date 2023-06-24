import SidebarFlow from '@pages/flow/components/sidebar-flow/SidebarFlow'
import { Layout } from 'antd'
import { ReactFlowProvider } from 'reactflow'
import './flow.scss'
import PanelFlow from '@pages/flow/components/panel-flow/PanelFlow'
import { FlowContext, useFlowContext } from '@context/FlowContext'

const Flow = () => {
  const valuesFlow = useFlowContext()
  const { Content } = Layout
  return (
    <div className="wrapper">
      <ReactFlowProvider>
        <FlowContext.Provider value={valuesFlow}>
          <Layout>
            <SidebarFlow />
            <Layout>
              <Layout>
                <Content>
                  <PanelFlow />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </FlowContext.Provider>
      </ReactFlowProvider>
    </div>
  )
}

export default Flow
