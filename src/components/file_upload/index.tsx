import React, {MouseEventHandler, ReactElement} from "react";
import "./index.scss"

const FileUpload = ():ReactElement => {

  const uploadFile:MouseEventHandler = (e) => {
    console.log(e)
  }

  return (
    <div className="file_upload">
      <input type="file" />
      <button onClick={uploadFile}>上传</button>
    </div>
  )
}

export default FileUpload
