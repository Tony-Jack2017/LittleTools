import React, {useRef, useEffect, useState} from "react"
import './index.scss'

export interface FileUploadDoingProps {
  width?: number
  height?: number
  percent: number
}

const FileUploadDoing = (props: FileUploadDoingProps) => {

  const {width = 500, height = 500, percent} = props

  const file_upload_doing = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    if (file_upload_doing.current !== null) {
      const context = file_upload_doing.current.getContext('2d')
      if (context !== null) {
        context.clearRect(0, 0, width, height)
        console.log(percent)
        context.save();
        context.fillStyle = 'rgba(0,0,0,0)';
        context.fillRect(0, 0, width, height);
        context.beginPath()
        context.lineCap = "round"
        context.lineWidth = 10
        context.strokeStyle = "red"
        context.arc(width / 2, height / 2, (width / 2) - 10, 0, 360)
        context.stroke()
        context.closePath(); //路径结束
        console.log(111)
        loop(context,percent)
      }
    }
  },[percent])

  function init() {
    if (file_upload_doing.current !== null) {
      const context = file_upload_doing.current.getContext('2d')
      if (context !== null) {
        context.save();
        context.fillStyle = 'rgba(0,0,0,0)';
        context.fillRect(0, 0, width, height);
        context.beginPath()
        context.lineCap = "round"
        context.lineWidth = 10
        context.strokeStyle = "red"
        context.arc(width / 2, height / 2, (width / 2) - 10, 0, 360)
        context.stroke()
        context.closePath(); //路径结束
      }
    }
  }

  function loop(context: CanvasRenderingContext2D, percent: number) {
    const startAngle = 0 * Math.PI; //开始位置弧度
    const diffAngle = percent * Math.PI * 2; //完成进度弧度值
    context.restore();
    context.beginPath();
    context.lineCap = "round"
    context.lineWidth = 10
    context.arc(width / 2, height / 2, (width / 2) - 10, startAngle, diffAngle + startAngle, false);
    context.strokeStyle = 'green';
    context.stroke();
    context.closePath();
  }

  // function getCoordinate(percent:number):{x: number, y: number} {
  //   const r = (width / 2) - 5
  //   const positionX = Math.abs( width / 2 + r * Math.cos(-percent * 100 * Math.PI / 50))
  //   let positionY
  //   if ( percent >= 0.5 ) {
  //     positionY = height / 2 + Math.sqrt(Math.pow(r, 2) - Math.pow(positionX - width / 2, 2))
  //   } else {
  //     positionY = height / 2 - Math.sqrt(Math.pow(r, 2) - Math.pow(positionX - width / 2, 2))
  //   }
  //   return { x: positionX, y: positionY}
  // }

  // function animate(context:CanvasRenderingContext2D) {
  //   requestAnimationFrame(() => { animate(context) })
  //   context.clearRect(0,0,width,height);
  //   percent += 0.001
  //   loop(context, percent)
  // }

  return (
    <div className="container">
      <canvas ref={file_upload_doing} width={width} height={height}/>
    </div>
  )
}

export default FileUploadDoing
