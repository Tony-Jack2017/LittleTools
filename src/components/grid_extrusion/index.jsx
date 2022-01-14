import './index.css'
import React, {useRef, useState} from "react";
import LiItem from "./LiItem";
const itemList = ['React', 'Vue', 'Html', 'Css', 'JavaScript']

const GridExtrusion = () => {

  const li = useRef()

  const [fakeItem, setFakeItem] = useState()
  const [isDraging, setDraging] = useState(false)


  function CreateFakeItem(el) {
    return React.cloneElement(el, {className: 'item fake_drag_item'})
  }

  function Container(props) {
    return CreateFakeItem(<LiItem {...props} />)
  }

  const handleDrop = (e) => {
    console.log(e.dataTransfer.getData("Text"))
  }

  const allowDrop = (e) => {
    e.preventDefault()
  }

  const handleDragStart = (props, index) => {
    const el = li.current.children[index]
    el.classList.add('draggingItem')
    setFakeItem(props)
    setDraging(true)
  }
  return (
    <div className="drag-cotainer">
      <div className="container">
        <p>There are some items</p>
        <ul ref={li}>
          {
            itemList.map((n, index) => {
              return (
                <LiItem data_id={index} key={index} handleDragStart={handleDragStart}>{n}</LiItem>
              )
            })
          }
          {
            isDraging ? Container(fakeItem) : <p>Hello</p>
          }
        </ul>
      </div>
      <div className="content">
        <p>You drop some item in here</p>
        <ul onDrop={handleDrop} onDragOver={allowDrop}>

        </ul>
      </div>
    </div>
  )
}
export default GridExtrusion
