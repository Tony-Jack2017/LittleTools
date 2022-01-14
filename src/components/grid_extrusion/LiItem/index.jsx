const LiItem = (props) => {
  return (
    <li className="item" data_id={props.data_id} draggable={true}
        onDragStart={(e) => { props.handleDragStart(props, props.data_id)} }
    >
      {props.children}
    </li>
  )
}

export default LiItem
