import React, { useRef, useState } from 'react'
import styles from './index.module.scss'

import DragVisible from '../../common/DragVisible'


const Hello = () => {
  return (<p>Hello</p>)
}

const HelloDrag = DragVisible(Hello)


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
      
      <HelloDrag />

      {/* <div id="text" className={styles.drage} draggable="true" onDragStart={drag}>
        <p>Hello</p>
      </div> */}
    </div>
  )
}


export default ElementDrag