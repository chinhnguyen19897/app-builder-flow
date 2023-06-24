import React from 'react'
import { Handle, Position } from 'reactflow'
import './textNode.scss'
import { IconReact, IconsDatabase, ProcessIcon } from '@assets/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const handleStyle = { top: 70 }
const handleStyleNode1 = { top: 30 }

const getIcon = (node: any) => {
  switch (node.type) {
    case 'customNode': {
      return <IconsDatabase />
    }
    case 'react':
      return <IconReact />

    default:
      break
  }
}

export const TextNode = ({ data: nodeData }: any) => {
  console.log(nodeData)
  const iconNode = getIcon(nodeData)
  return (
    <>
      <div className="node-container orange">
        <div
          className={`node-header node-header--${nodeData.label.toLowerCase()}`}
        >
          {nodeData.label}
        </div>
        <Handle type="target" position={Position.Left} isConnectable={true} />
        <div className="node-icon">
          <ProcessIcon
            values={nodeData.data.analytics}
            total={nodeData.data.potentialTarget}
            icon={iconNode}
          />
        </div>
        <div className="node-footer">
          <div className="target">
            <FontAwesomeIcon icon={faBullseye} className="icon-node-footer" />
            {nodeData.data.target}
          </div>
          <div className="percent">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="icon-node-footer"
            />
            {nodeData.data.percentOK?.value}%
          </div>
        </div>
        <Handle
          type="source"
          id="a"
          position={Position.Right}
          isConnectable={true}
          style={handleStyleNode1}
        />
        <Handle
          type="source"
          id="b"
          position={Position.Right}
          isConnectable={true}
          style={handleStyle}
        />
        <Handle
          type="source"
          id="c"
          position={Position.Right}
          isConnectable={true}
        />
      </div>
    </>
  )
}
