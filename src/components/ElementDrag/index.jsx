import React, { useState } from 'react'
import styles from './index.module.scss'

import DragVisible from '../../common/DragVisible'
import Container from './components/container'

import ImageComponent from './elements/ImageComponent'

const DragingElement = React.createContext(null);

const HelloDrag = DragVisible(ImageComponent, DragingElement)

const ElementDrag = (props) => {

  const [react_component, setReactComponent] = useState(0)

  return (
    <DragingElement.Provider value={{react_component, setReactComponent}}>
      <div className={styles.content}>
        {/* Container */}
        <Container DragContext={DragingElement} />

        {/* DragVisible Element */}
        <HelloDrag DragContext={DragingElement} />
      </div>

    </DragingElement.Provider>
  )
}


export default ElementDrag