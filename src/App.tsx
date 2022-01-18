import './App.css';
import React, {ReactElement} from "react";

// import GridExtrusion from "./components/grid_extrusion"
// import DragElement from "./components/drag_element";
// import FileUpload from "./components/file_upload";

import FileUploadAnimate from "./components/animate/file_upload"

function App():ReactElement {
  return (
    <div className="App">
      {/*<GridExtrusion />*/}
      {/*<DragElement />*/}
      <FileUploadAnimate />
    </div>

  )
}

export default App;
