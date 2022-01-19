import './App.css';
import React, {ReactElement} from "react";

// import GridExtrusion from "./components/grid_extrusion"
// import DragElement from "./components/drag_element";
// import FileUpload from "./components/file_upload";

import FileUploadAnimateSuccess from "./components/animate/file_upload/file_upload_success"
import FileUploadAnimateDoing from "./components/animate/file_upload/file_upload_doing"

function App():ReactElement {
  return (
    <div className="App">
      {/*<GridExtrusion />*/}
      {/*<DragElement />*/}
      {/*<FileUploadAnimateSuccess width={50} height={50} />*/}
      <FileUploadAnimateDoing width={150} height={150} />
    </div>

  )
}

export default App;
