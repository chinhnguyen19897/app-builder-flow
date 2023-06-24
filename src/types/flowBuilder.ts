import { DragEvent, ReactElement, RefObject } from 'react'
import {
  Connection,
  Edge,
  Node,
  OnEdgesChange,
  OnNodesChange,
  ReactFlowInstance,
} from 'reactflow'

export interface ISideBarData {
  key: number
  label: string
  items?: IChildrenSidebar[]
  icon?: ReactElement
}

export interface IChildrenSidebar {
  content: string
  title: string
  type: string
  color: string
  data: {
    target: number
    potentialTarget: number
    percentOK: {
      value: number
    }
    analytics: AnalysisData[]
  }
}

export type FlowBuilderContext = {
  valueInput: InputData
  reactFlowWrapper: RefObject<HTMLDivElement>
  onChangeInput: (event: { target: HTMLInputElement }) => void
  onConnect: (params: Connection | Edge) => void
  onDrop: (event: DragEvent<HTMLDivElement>) => void
  onDragOver: (event: DragEvent<HTMLDivElement>) => void
  nodesItems: NodeItems
  edgesItems: EdgesItems
  flowInstanceItems: FlowInstanceItems
} | null

export type NodeItems = {
  nodes: Node[]
  setNodes: (e: Node[]) => void
  onNodesChange: OnNodesChange
}
export type EdgesItems = {
  edges: Edge[]
  setEdges: (e: Edge[]) => void
  onEdgesChange: OnEdgesChange
}
export type FlowInstanceItems = {
  reactFlowInstance: ReactFlowInstance | null
  setReactFlowInstance: (reactFlowInstance: ReactFlowInstance) => void
}

export type InputData = {
  description: string
}

export type AnalysisData = {
  label: string
  color: string
  value: number
}
