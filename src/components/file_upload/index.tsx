import React, {MouseEventHandler, ReactElement, useRef, useState} from "react";
import "./index.scss"
import uploadFileQiNiu from "../../utils/upload";
import {CompletionObserver} from "qiniu-js/esm/utils";
import { UploadProgress } from "qiniu-js/esm/upload";
import {QiniuError, QiniuNetworkError, QiniuRequestError} from "qiniu-js";

const FileUpload = (): ReactElement => {

  const upload_file = useRef<HTMLInputElement>(null)
  const [uploadRes, setUploadRes] = useState({
    upload_fallback_info : {},
    percent: 0,
    complete: false,
  })

  const observe : CompletionObserver<UploadProgress, QiniuError | QiniuNetworkError | QiniuRequestError, any> = {
    next(res) {
      setUploadRes({
        upload_fallback_info: res,
        percent: res.total.percent,
        complete: res.total.percent === 100 ? true : false
      })
    },
    error(err) {
      console.log(err)
    },
    complete(res) {
      console.log(res)
    }
  }


  const selectFile:MouseEventHandler = () => {
    upload_file.current!.click()
  }
  const uploadFile: MouseEventHandler = () => {
    if (upload_file.current !== null) {
      console.log(upload_file.current.files)
      if(upload_file.current.files) {
        const file = upload_file.current.files[0]
        uploadFileQiNiu({file, observe})
      }else {
        console.log("上传文件为空")
      }
    } else {
      console.log(upload_file.current)
    }
  }

  return (
    <div className="file_upload">
      <p>进度：{uploadRes.percent}</p>
      <button onClick={uploadFile}>上传</button>

      <input style={{display: "none"}} ref={upload_file} type="file" />
      <div className="upload_file" onClick={selectFile}></div>
    </div>
  )
}

export default FileUpload
