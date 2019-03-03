<template>
  <div id="SendMessage">
    <div class="sendMessage">
      用户名或密码不正确！请重试
    </div>
  </div>
</template>
<script>



  export  default {
    data: function(){
      return {
        username:"",
        password:"",
      }
    },
    methods:{
      Sign(){
        let _this = this;

        if(_this.username == "2247333869@qq.com"&&_this.password == "123456"){
          _this.$router.push({name:"Login"});
        }else{

        }
      }
    }
  }


</script>
<style scoped>
  .sendMessage{
    width: 99%;
    height: 2.333333rem;
    border: 0.4em solid white;
    position: absolute;
    top: 0;
    background: rgba(41, 64, 104, 0.66);
  }
</style>
