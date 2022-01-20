import './App.css';
import React, {ReactElement, useState} from "react";

// import GridExtrusion from "./components/grid_extrusion"
// import DragElement from "./components/drag_element";
// import FileUpload from "./components/file_upload";

import FileUploadAnimateSuccess from "./components/animate/file_upload/file_upload_success"
import FileUploadAnimateDoing from "./components/animate/file_upload/file_upload_doing"

function App():ReactElement {
  const [percent, setPercent] = useState(0)

  const handleClick = () => {
      setPercent(percent + 0.05)
  }

  return (
    <div className="App">
      {/*<GridExtrusion />*/}
      {/*<DragElement />*/}
      {/*<FileUploadAnimateSuccess width={50} height={50} />*/}
      <FileUploadAnimateDoing width={300} height={300} percent={percent} />
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App;
