import React, {useEffect, useRef } from "react"
import "./index.scss"

const FileUploadAnimate = () => {


  const success = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    initCanvas()
  }, [])

  function initCanvas() {
    if ( success.current !== null ) {
      const context = success.current.getContext("2d")
      if(context !== null) {
        context.fillStyle = "red"
        context.beginPath();
        context.arc(75, 75, 50, 0, Math.PI * 2, true);
        context.moveTo(110, 75);
        context.stroke()
        context.fill()
      }
    }
  }

  function action() {
    console.log(1)
  }

  function animate() {
    console.log(2)
  }

  return (
    <div className="container">
      <canvas ref={success}></canvas>
    </div>
  )
}

export default FileUploadAnimate
