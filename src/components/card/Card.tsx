import React, { DragEvent } from 'react'
import './card.scss'
import { IChildrenSidebar } from '@~types/flowBuilder'

type CardProps = {
  onDragStart: (event: DragEvent<HTMLDivElement>, obj: IChildrenSidebar) => void
  draggable: boolean
  child: IChildrenSidebar
}
export const Card = ({ onDragStart, draggable, child }: CardProps) => {
  const { content, color } = child

  return (
    <>
      <div
        className={`card-custom dnd-node ${color}`}
        onDragStart={(event) => onDragStart(event, child)}
        draggable={draggable}
      >
        {content}
      </div>
    </>
  )
}
