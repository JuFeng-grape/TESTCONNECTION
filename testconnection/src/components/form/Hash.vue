<template>
  <div class="hash">
    <h2>HASH数据类型的相关操作</h2>
    <p>增：传一/三个参  查：一个参 更：三个参  删：一个参</p>
    <ul>
      <li>测试接口地址：<input type="text" ref="arg0"></li>
      <li>测试传递key：<input type="text" ref="arg1"></li>
      <li>测试传递field：<input type="text" ref="arg2"></li>
      <li>测试传递value：<input type="text" ref="arg3"></li>
      <li>你请求来的数据如下：<br><textarea ref="show"></textarea></li>
    </ul>
    <button @click="save">保存参数</button>
    <button @click="submit">发起请求</button>
    <br>
    <button @click="clickToString">string值相关操作</button>
  </div>
</template>

<script>
import {getHash, putHash, updateHash,deleteHash} from "../../network/HashRequestOperation";

export default {
  name: "Hash",
  data(){
    return{
      arguments0:'',
      arguments1:'',
      arguments2:'',
      arguments3:'',
    }
  },
  methods:{
    save(){
      this.arguments0=this.$refs.arg0.value;
      this.arguments1=this.$refs.arg1.value;
      this.arguments2=this.$refs.arg2.value;
      this.arguments3=this.$refs.arg3.value;
      console.log("参数已保存");
    },
    submit(){
      switch (this.arguments0){
        case "/hashGetResults":
          this.getHash(this.arguments1);
          break;
        case "/hashSet":
          this.putHash(this.arguments1);
          break;
        case "/hashUpdate":
          this.updateHash(this.arguments1,this.arguments2,this.arguments3);
          break;
        case "/hashDelete":
          this.deleteHash(this.arguments1,this.arguments2);
          break;
      }
    },
    getHash(key){
       getHash(key).then(res=>{
         this.$refs.show.value=res;
         console.log(res);
       })
    },
    putHash(key){
      putHash(key).then(res=>{
          this.$refs.show.value=res;
      })
    },
    updateHash(key,field,value){
      updateHash(key,field,value).then(res=>{
        this.$refs.show.value=res;
      })
    },
    deleteHash(key,field){
      deleteHash(key,field).then(res=>{
        this.$refs.show.value=res;
      })
    },
    clickToString(){
      this.$router.replace("/")
    }
  }
}
</script>

<style scoped>
ul li{
  list-style: none;
  line-height: 1.5rem;
}
li>input{
  display: block;
  height: 25px;
  font-size: 20px;
  line-height: 25px;
}
textarea{
  width: 300px;
  height: 200px;
  background-color: pink;
  font-size: 20px;
}
button{
  margin-left:60px;
}
</style>
