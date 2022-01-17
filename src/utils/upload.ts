import * as qiniu from "qiniu-js"
import {QiniuError, QiniuNetworkError, QiniuRequestError} from "qiniu-js";
import {CompletionObserver} from "qiniu-js/esm/utils";
import {UploadProgress} from "qiniu-js/esm/upload";

const qiniu_token = "yLNewjeoiZXTqbq3lK4cwLW9FCBFQVY0cMHF_JV6:rlHJg7K399RCqBM_4w41Jgy_Mf0=:eyJzY29wZSI6Imdhbi1jbG91ZCIsImRlYWRsaW5lIjoxNjQyNDk3Nzc1fQ=="


export interface UploadFileBase {
  file : File
  token ?: string
  key ?: string
  putExtra ?: {}
  config ?: {}
  observe ?: CompletionObserver<UploadProgress, QiniuError | QiniuNetworkError | QiniuRequestError, any>
}

/**
 * @description 压缩图片配置
 * */
const option = {

}

/**
 * @description 上传过程的监听对象
 * */
const defaultObserve : CompletionObserver<UploadProgress, QiniuError | QiniuNetworkError | QiniuRequestError, any> = {
  next(res) {
    console.log(res)
  },
  error(err:QiniuError|QiniuNetworkError|QiniuRequestError) {
    console.log(err)
  },
  complete(res) {
    console.log(res)
  }
}

const uploadFileQiNiu = (arg:UploadFileBase):void => {
  const {file, key, token, putExtra, config,  observe} = arg
  const observable = qiniu.upload(file, key, token ? token : qiniu_token , putExtra, config)
  observable.subscribe(observe ? observe : defaultObserve)
}

export default uploadFileQiNiu
