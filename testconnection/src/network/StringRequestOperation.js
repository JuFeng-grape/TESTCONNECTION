import {request} from "./index";


export function getString(key){
  return request({
    url:'/get',
    params:{
      key
    }
  })
}

export function putString(key,value) {
  return request({
    url:'/put',
    params:{
      key,value
    }
  })
}

export function updateString(key,newValue){
  return request({
    url:'/update',
    params:{
      key,newValue
    }
  })
}


export function deleteString(key){
  return request({
    url:'/delete',
    params:{
      key
    }
  })
}

export function getExpire(key) {
  return  request({
    url:'/getExpire',
    params:{
      key
    }
  })
}

export function setExpire(key,time) {
  return request({
    url:'/strExpire',
    params:{
      key,time
    }
  })
}
