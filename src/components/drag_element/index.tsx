import React, {DragEventHandler, ReactElement} from "react";
import "./index.css"

const DragElement = (): ReactElement => {

  const handleDragStart:DragEventHandler<HTMLParagraphElement> = (e) => {
    console.log("开始拖动")
  }
  const handleDragEnd:DragEventHandler<HTMLParagraphElement> = (e) => {
    e.currentTarget.style.display = "block"
  }

  const handleDrag:DragEventHandler<HTMLParagraphElement> = (e) => {
    e.currentTarget.style.display = "none"
  }

  return (
    <div className="drag-cotainer">
      <div className="container">
        <p draggable={true} onDrag={handleDrag} onDragEnd={handleDragEnd} onDragStart={handleDragStart} style={{border: '1px solid red', opacity: 1}}>来拖我啊</p>
      </div>
      <div className="content">

      </div>
    </div>
  )
};

export default DragElement;
