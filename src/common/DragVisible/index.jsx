import styles from '../../components/ElementDrag/index.module.scss'

import React, {useContext} from "react";

function DragVisible(Component, context) {

  return function DragVisibleTest() {

  let {setReactComponent} = useContext(context)

  const drag = (e) => {
    setReactComponent(React.cloneElement(<Component />))
  };

    return (
      <div className={styles.drage} draggable="true" onDragStart={drag}>
        <Component />
      </div>
    )
  }
}

export default DragVisible;
