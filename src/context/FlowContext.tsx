import {
  EdgesItems,
  FlowBuilderContext,
  InputData,
  NodeItems,
} from '@~types/flowBuilder'
import React, { DragEvent, useCallback, useRef, useState } from 'react'
import {
  addEdge,
  Connection,
  Edge,
  Node,
  Position,
  ReactFlowInstance,
  useEdgesState,
  useNodesState,
} from 'reactflow'

export const FlowContext = React.createContext<FlowBuilderContext>(null)

export const useFlowContext = () => {
  let id = 0
  const getId = () => `dndnode_${id++}`
  const reactFlowWrapper = useRef<HTMLDivElement>(null)
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeItems[]>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState<EdgesItems[]>([])
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null)

  const [valueInput, setValueInput] = useState<InputData>({
    description: '',
  })

  const onChangeInput = useCallback((evt: { target: HTMLInputElement }) => {
    setValueInput({
      ...valueInput,
      description: evt.target.value,
    })
  }, [])

  const onConnect = useCallback((params: Edge | Connection) => {
    setEdges((eds) => addEdge(params, eds))
  }, [])

  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault()

      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect()

      const dataFlow = JSON.parse(
        event.dataTransfer.getData('application/flow')
      )

      const { title, type, data, content } = dataFlow

      // check if the dropped element is valid
      if (typeof title === 'undefined' || !title) {
        return
      }

      if (reactFlowBounds && reactFlowInstance) {
        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        })
        const newNode: Node = {
          id: getId(),
          type,
          position,
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
          data: { label: `${title}`, type, data, content },
        }
        setNodes((nds) => nds.concat(newNode))
      }
    },
    [reactFlowInstance]
  )

  return {
    valueInput,
    onChangeInput,
    onConnect,
    reactFlowWrapper,
    onDrop,
    onDragOver,
    nodesItems: {
      nodes,
      setNodes,
      onNodesChange,
    },
    edgesItems: {
      edges,
      setEdges,
      onEdgesChange,
    },
    flowInstanceItems: {
      reactFlowInstance,
      setReactFlowInstance,
    },
  }
}
