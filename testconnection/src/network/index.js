import axios from "axios";
export function request(config) {
  const instance=axios.create({
    baseURL:"http://localhost:9090",
    timeout:10000
  })
  instance.interceptors.request.use(config=>{
    return config
  },error =>{
    console.log(error);
  })
  instance.interceptors.response.use(res=>{
    return res.data
  },error => {
    console.log(error);
  })


  return instance(config);
}
