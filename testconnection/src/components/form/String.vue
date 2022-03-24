<template>
  <div class="form"><h2>STRING数据类型的相关操作</h2>
    <p>增：传两个   查：一个参 更：两个参  删：一个参   设置时间：两个参   查询时间:一个参</p>
    <ul>
      <li>测试接口地址：<input type="text" ref="arg0"></li>
      <li>测试传递key：<input type="text" ref="arg1"></li>
      <li>测试传递value：<input type="text" ref="arg2"></li>

      <li>你请求来的数据如下：<br><textarea ref="show"></textarea></li>
    </ul>
    <button @click="save">保存参数</button>
    <button @click="submit">发起请求</button>
    <br>
    <button @click="clickToHash">hash值相关操作</button>
  </div>
</template>

<script>
import {
  getString,
  putString,
  updateString,
  deleteString,
  setExpire,
  getExpire
} from "../../network/StringRequestOperation";

export default {
  name: "String",
  data(){
    return{
      arguments0:'',
      arguments1:'',
      arguments2:'',
    }
  },
  methods:{
    save(){
      this.arguments0=this.$refs.arg0.value;
      this.arguments1=this.$refs.arg1.value;
      this.arguments2=this.$refs.arg2.value;
      console.log("参数已保存");
    },
    submit(){
      switch (this.arguments0){
        case "/get":
          this.getString(this.arguments1);
          break;
        case "/put":
          this.putString(this.arguments1,this.arguments2);
          break;
        case "/update":
          this.updateString(this.arguments1,this.arguments2);
          break;
        case "/delete":
          this.deleteString(this.arguments1);
          break;
        case "/setExpire":
          this.setExpire(this.arguments1,this.arguments2);
          break;
        case "/getExpire":
          this.getExpire(this.arguments1);
          break;
      }
    },
    getString(key){
      getString(key).then(res=>{
        console.log("请求已发起，请稍后");
        const result=res;
        this.$refs.show.value=result;
      })
    },
    putString(key,value){
      putString(key,value).then(res=>{
        console.log("请求已发起，请稍后");
        const result=res+"           数据库中内容已修改，请查看数据库最新内容";
        this.$refs.show.value=result;
      })
    },
    updateString(key,newValue){
      updateString(key,newValue).then(res=>{
        console.log("请求已发起，请稍后");
        const result=res+"数据库中内容已修改，请查看数据库最新内容";
        this.$refs.show.value=result;
      })
    },
    deleteString(key){
      deleteString(key).then(res=>{
        console.log("请求已发起，请稍后");
        const result=res+"数据库中内容已修改，请查看数据库最新内容";
        this.$refs.show.value=result;
      })
    },
    setExpire(key,time){
      setExpire(key,time).then(res=>{
        console.log("请求已发起，请稍后");
        const result=res+"数据库中内容已修改，请查看数据库最新内容";
        this.$refs.show.value=result;
      })
    },
    getExpire(key){
      getExpire(key).then(res=>{
        console.log("请求已发起，请稍后");
        const result=res+"数据库中内容已修改，请查看数据库最新内容";
        this.$refs.show.value=result;
      })
    },
    clickToHash(){
      this.$router.replace("/hash")
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
