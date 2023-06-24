import './sidebarItem.scss'
import { DragEvent } from 'react'
import { Card } from '@components/card/Card'
import { IChildrenSidebar } from '@~types/flowBuilder'

type Props = {
  child: IChildrenSidebar
}
const SidebarItem = ({ child }: Props) => {
  const onDragStart = (
    event: DragEvent<HTMLDivElement>,
    obj: IChildrenSidebar
  ) => {
    // event.dataTransfer.setData('type', nodeType)
    // event.dataTransfer.setData('label', nodeLabel)
    event.dataTransfer.setData('application/flow', JSON.stringify(obj))
    event.dataTransfer.effectAllowed = 'move'
  }
  return <Card onDragStart={onDragStart} draggable={true} child={child} />
}
export default SidebarItem
