import React, { useRef, useState } from 'react'
import styles from './index.module.scss'

const ElementDrag = (props) => {

  function CloneDemo() {
    console.log(text.current)
    return React.cloneElement(<div></div>,{},<p>Hello</p>)
  }


  const text = useRef(null)
  const [child, setChild] = useState([])

  const drag = (e) => {
    // setChild([<Progress />])
  }

  const drop = (e) => {
    setChild([<CloneDemo />])
  }

  return (
    <div className={styles.content}>
      <div id="container" className={styles.container} onDragOver={(e) => {e.preventDefault()}} onDrop={drop}>
        {
          child.map( (n,index) => {
            return <div key="index">
              {n}
            </div>
          })
        }
      </div>
      <div id="text" className={styles.drage} draggable="true" onDragStart={drag}>
        <p>Hello</p>
      </div>
    </div>
  )
}


export default ElementDrag