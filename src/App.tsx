import './App.css';
import React, {ReactElement, useState} from "react";

// import GridExtrusion from "./components/grid_extrusion"
import DragElement from "./components/drag_element";
// import FileUpload from "./components/file_upload";

import FileUploadAnimateSuccess from "./components/animate/file_upload/file_upload_success"
import FileUploadAnimateDoing from "./components/animate/file_upload/file_upload_doing"

function App():ReactElement {
  const [percent, setPercent] = useState(0)

  const handleClick = () => {
    // setInterval(() => {
    //   setPercent(() => {
    //     console.log("before inc", { percent });
    //     const percentDoing = percent + 0.05;
    //     console.log("after inc\n--------", { percentDoing });
    //     return percentDoing;
    //   });
    // }, 2000);
    setPercent(percent + 0.01)
  }

  return (
    <div className="App">
      {/*<GridExtrusion />*/}
      <DragElement />
      {/*<FileUploadAnimateSuccess width={50} height={50} />*/}
      {/*<FileUploadAnimateDoing width={150} height={150} percent={percent} />*/}
      {/*<button onClick={handleClick}>Click Me</button>*/}
    </div>
  )
}

export default App;
