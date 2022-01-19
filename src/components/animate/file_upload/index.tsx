import React, {useEffect, useRef} from "react"
import "./index.scss"

const speed1_percent = 2 / 500
const speed2_percent = 2 / 500
const positionX_percent = 130 / 500
const positionY_percent = 240 / 500
const x_percent = 130 / 500
const y_percent = 240 / 500
let x = 0
let y = 0
let speed1 = 0
let speed2 = 0

export interface SuccessProps {
  background ?: string
  line_color ?: string
  width: number
  height: number
}


const FileUploadAnimateSuccess = (props:SuccessProps) => {

  const { width, height, background, line_color } = props

  let positionX = positionX_percent * width
  let positionY = positionY_percent * height
  x = x_percent * width
  y = y_percent * height
  speed1 = speed1_percent * width
  speed2 = speed2_percent * height
  const success = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    initCanvas()
  }, [])

  function loop(context: CanvasRenderingContext2D) {
    context.fillStyle = 'rgba(0,0,0,0)';
    context.fillRect(0, 0, width, height);
    positionX += speed1
    positionY += speed2
    context.fillStyle = "#FFFFFF";
    context.strokeStyle = "#FFFFFF";
    context.lineWidth = 20 / 500 * width;
    context.lineCap = "round"
    if ( positionY >= ( 340 / 500) * width ) {
      speed2 = -speed2
      positionY += speed2
      x = positionX
      y = positionY
    }
    context.moveTo(x, y);
    context.lineTo(positionX, positionY);
    context.stroke();
  }

  function initCanvas() {
    if (success.current !== null) {
      const context = success.current.getContext("2d")
      if (context !== null) {
        context.fillStyle = 'rgba(0,0,0,0)';
        context.fillRect(0, 0, width, height);
        context.beginPath();

        const time = setInterval(() => {
          loop(context)
        }, 1000 / 200);
        setTimeout(() => {
          clearInterval(time)
        } , 700)
      }
    }
  }

  return (
    <div className="container" style={{width:width, height:height}}>
      <canvas ref={success} width={width} height={height}></canvas>
    </div>
  )
}

export default FileUploadAnimateSuccess


