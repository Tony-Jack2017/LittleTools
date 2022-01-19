import React, { useRef, useEffect } from "react"
import './index.scss'

export interface FileUploadDoingProps {
  width ?: number
  height ?: number
}

const FileUploadDoing = (props:FileUploadDoingProps) => {

  const { width = 500, height = 500 } = props

  const file_upload_doing = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    init()
  }, [])

  function init() {
    if ( file_upload_doing.current !== null ) {
      const context = file_upload_doing.current.getContext('2d')
      if ( context !== null ) {
        context.fillStyle = 'rgba(0,0,0,0)';
        context.fillRect(0, 0, width, height);
        context.beginPath()
        context.lineCap = "round"
        context.lineWidth = 10
        context.strokeStyle = "#E0E0E0"
        context.arc(width / 2, height /2 , (width / 2) - 10, 0, 360)
        context.stroke()



      }
    }
  }

  function loop(context:CanvasRenderingContext2D) {
    context.beginPath()
    context.moveTo(width / 2, 0)
    context.lineCap = "round"
    context.lineWidth = 10
    // context.lineTo()
  }

  function animate(context:CanvasRenderingContext2D) {
    const time = setInterval(() => {
      loop(context)
    }, 1000 / 200);
    setTimeout(() => {
      clearInterval(time)
    } , 700)
  }

  return (
    <div className="container">
      <canvas ref={file_upload_doing} width={width} height={height} />
    </div>
  )
}

export default FileUploadDoing
