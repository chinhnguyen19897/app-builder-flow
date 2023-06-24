import React, { useContext, useMemo } from 'react'
import { FlowContext } from '@context/FlowContext'
import { Background, BackgroundVariant, Controls, ReactFlow } from 'reactflow'
import './panelFlow.scss'
import 'reactflow/dist/style.css'
import { TextNode } from '@components/text-node/TextNode'

const PanelFlow = () => {
  const proOptions = { hideAttribution: true }
  const reactFlowItems = useContext(FlowContext)
  const nodeTypes = useMemo(() => ({ customNode: TextNode }), [])
  return (
    <div
      className="reactflow-wrapper"
      ref={reactFlowItems?.reactFlowWrapper as React.RefObject<HTMLDivElement>}
    >
      <ReactFlow
        nodes={reactFlowItems?.nodesItems.nodes}
        nodeTypes={nodeTypes}
        edges={reactFlowItems?.edgesItems.edges}
        onNodesChange={reactFlowItems?.nodesItems.onNodesChange}
        onEdgesChange={reactFlowItems?.edgesItems.onEdgesChange}
        onConnect={reactFlowItems?.onConnect}
        onInit={reactFlowItems?.flowInstanceItems.setReactFlowInstance}
        onDrop={reactFlowItems?.onDrop}
        onDragOver={reactFlowItems?.onDragOver}
        fitView
        proOptions={proOptions}
      >
        <Background variant={BackgroundVariant.Lines} />
        <Controls />
      </ReactFlow>
    </div>
  )
}
export default PanelFlow
