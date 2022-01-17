import React, {MouseEventHandler, ReactElement, useRef} from "react";
import "./index.scss"
import uploadFileQiNiu from "../../utils/upload";

const FileUpload = (): ReactElement => {

  const upload_file = useRef<HTMLInputElement>(null)

  const uploadFile: MouseEventHandler = () => {
    if (upload_file.current !== null) {
      console.log(upload_file.current.files)
      if(upload_file.current.files) {
        const file = upload_file.current.files
        // uploadFileQiNiu({file})
      }else {
        console.log("上传文件为空")
      }
    } else {
      console.log(upload_file.current)
    }
  }

  return (
    <div className="file_upload">
      <input ref={upload_file} type="file" multiple={true}/>
      <button onClick={uploadFile}>上传</button>
    </div>
  )
}

export default FileUpload
