import styles from "../../index.module.scss"
import { useContext, useState } from 'react'

const Container = (props) => {

  const {react_component} = useContext(props.DragContext)
  const [child, setChild] = useState([])
  const [id, setId] = useState('gan')

  const drop = (e) => {
    const arr = child
    setId(id + 'g')
    arr.push({
      id: id,
      component: react_component
    })
    setChild(arr)
    console.log(child);
  }

  return (
    <div className={styles.container} onDragOver={(e) => { e.preventDefault() }} onDrop={drop}>
      {
        child.map((n, index) => {
          return <div key={n.id}>
            {n.component}
          </div>
        })
      }
    </div>
  )
}

export default Container