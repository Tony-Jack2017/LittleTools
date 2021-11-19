import styles from './index.module.scss'

import React from "react";

function DragVisible(Component) {

  const drag = (e) => {
    // React.cloneElement(<Component />)
  };

  return function () {
    return (
      <div className={styles.drage} draggable="true" onDragStart={drag}>
        <Component />
      </div>
    )
  }
}

export default DragVisible;
