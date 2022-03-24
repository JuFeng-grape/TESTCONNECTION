import {request} from "./index";


export function getHash(key){
  return request({
    url:'/hashGetResults',
    params:{
      key
    }
  })
}

export function putHash(key) {
  return request({
    url:'/hashSet',
    params:{
      key
    }
  })
}

export function updateHash(key,field,newValue){
  return request({
    url:'/hashUpdate',
    params:{
      key,field,newValue
    }
  })
}


export function deleteHash(key,field){
  return request({
    url:'/hashDelete',
    params:{
      key,field
    }
  })
}
