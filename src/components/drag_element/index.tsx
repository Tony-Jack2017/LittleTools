import React, {DragEventHandler, ReactElement} from "react";
import "./index.css"

const DragElement = (): ReactElement => {

  const handleDragStart:DragEventHandler<HTMLParagraphElement> = (e) => {
    console.log(e)
    e.dataTransfer.dropEffect = "move"
    e.dataTransfer.setData("text/html", "<p>来拖我啊1</p>")
  }

  return (
    <div className="drag-cotainer">
      <div className="container">
        <p draggable={true} onDragStart={handleDragStart} style={{border: '1px solid red'}}>来拖我啊</p>
      </div>
      <div className="content">

      </div>
    </div>
  )
};

export default DragElement;
