<template>
  <div id="Home">
    <div class="head"><img src="./../../../static/image/right.png"></div>
    <h1>注册</h1>
    <div class="app-location">
      <div class="user"></div>
        <input type="text" class="text"  v-model="username" value="" placeholder="邮箱账号"  >
        <div>
          <input type="text" value="" class="identifyingCode" v-model="identifyingCode" placeholder="序列码" >
          <button :class="sendidentifyingCode" @click="sendIdentifyingCode()" :disabled="isdisabledFn">{{sendidentifyingCodeText}}</button>
        </div>
        <input type="password" value=""  v-model="password" placeholder="密码" >
        <input type="password" value=""  v-model="rePassword" placeholder="确认密码" >
        <div class="submit"><input type="submit" @click="reg2()" value="注册" ></div>
        <div class="clear"></div>
        <div class="fz"><h3><a @click="goto()">已有账号返回登录</a></h3></div>
    </div>
    <div class="test"> V_19.2.16</div>
  </div>
</template>
<script>


  export  default {
    data(){
      return{
        username:'',
        password:'',
        identifyingCode:'',
        identifyingCodeValue:'',
        rePassword:'',
        isdisabledFn:false,
        sendidentifyingCode:"sendidentifyingCode1",
        sendidentifyingCodeText:"发送验证码",
      }
    },
    methods:{
      register:function () {
        let _this = this;
        let url = this.HOST;
        if(_this.identifyingCode == _this.identifyingCodeValue&& _this.identifyingCode!=''){
          alert("验证码正确");
          this.axios.post(url+'/register', {
            data:{
              username:_this.username,
              password:_this.password,
              identifyingCode:_this.identifyingCode,
            }
          })
            .then(function (response) {
              if(response.data == "1"){
                alert("注册成功");
              }else if(response.data == "001"){
                alert("邮箱重复");
              }else{
                alert("注册失败");
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }else{
          alert("验证码错误");
          _this.identifyingCode = "";
        }

      },
      reg2:function () {
        let _this = this;
        let url = this.HOST;
        this.axios.post(url+'/register', {
          data:{
            username:_this.username,
            password:_this.password,
            identifyingCode:_this.identifyingCode,
          }
        })
          .then(function (response) {
            if(response.data == "1"){
              alert("注册成功");
            }else if(response.data == "001"){
              alert("邮箱重复");
            }else{
              alert("注册失败");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      sendIdentifyingCode:function () {
        let _this = this;
        _this.isdisabledFn = "disabled";
        _this.sendidentifyingCode = "sendidentifyingCode2";
        //获取服务器验证码
        let url = this.HOST;
        this.axios.post(url+'/sendIdentifyingCode', {})
          .then(function (response) {
            _this.identifyingCodeValue = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
        //计时
        let i = 10;
        var interval = window.setInterval(function () {
          _this.sendidentifyingCodeText = i+" 秒";
          i=i-1;
          if(i<0){
            _this.sendidentifyingCodeText = "重新发送";
            _this.isdisabledFn = false;
            _this.sendidentifyingCode = "sendidentifyingCode1";
            window.clearInterval(interval);
          }
          ;
        },1000);

      },
      goto:function () {
        let _this = this;
        _this.$router.push({name: 'home'});
      }
    }
  }


</script>
<style scoped>
  #Home{
    touch-action: pan-y;
    -webkit-overflow-scrolling: touch;
    height:100%;
    background: url("./../../../static/image/bgtest.png") no-repeat;
    width:100%;background-size:cover;
    -moz-background-size:100% 100%;
    overflow: hidden
  }
  #Home h1{
    padding: 70px 0px ;
    font-size: 65px;
    color: white;
  }
  #Home input[type="text"]{
    padding: 30px 30px 30px 65px;
    color: white;
    font-size: 25px;
    outline: none;
    font-weight: 500;
    border: none;
    font-family: 'Open Sans', sans-serif;
    border-radius: 10px;
    -o-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    background:  rgba(10, 10, 10, 0.24);
    margin-top: 2%;
  }
  #Home input[type="password"]{
    width:calc(100% - 185px);
    padding: 30px 30px 30px 65px;
    color: white;
    font-size: 25px;
    outline: none;
    font-weight: 500;
    border: none;
    font-family: 'Open Sans', sans-serif;
    border-radius: 10px;
    -o-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    background:  rgba(10, 10, 10, 0.24);
    margin-top: 2%;
  }
  #Home input[type="submit"]:hover{
    background:none;
    border: 3px solid #0bd38a;
    color: #0bd38a;
  }
  #Home input[type="submit"]{
    font-size: 25px;
    font-weight: 300;
    color: #fff;
    cursor: pointer;
    outline: none;
    padding: 30px 30px 30px 65px;
    width:calc(100% - 185px);
    border:3px solid #3c3e55;
    background: rgba(48, 49, 69, 0.89);
    border-radius: 10px;
    -o-border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    margin: 50px 0px;
  }
  .new a{
    color: #babbbe;
    font-weight: 400;
  }
  #Home h2{
    color: rgba(255, 255, 255, 0.46);
  }
  #Home h3 {
    position: absolute;
    left: 65px ;
  }
  #Home h4 {
    position: absolute;
    right: 65px;
  }
  .test{
    position: absolute;
    bottom: 0px;
    color: white;
    font-size: 25px;
  }
  .user{
    border: 1px solid;
    border-radius: 5px;
  }
  .head{
    width: 100%;
    height: 65px;
    position: fixed;
  }
  .head img{
    height: 100%;
    float: right;
  }
  .text{
    width:calc(100% - 185px);
  }
  .identifyingCode{
    width:calc(100% - 340px);
    position: relative;
    left: -25px;
  }
  .sendidentifyingCode1{
    width: 100px;
    height: 55px;
    color: #fff;
    cursor: pointer;
    outline: none;
    border:0px solid #3c3e55;
    background: rgba(0, 112, 182, 0.87);
    border-radius: 10px;
    -o-border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
  }

  .sendidentifyingCode2{
    width: 100px;
    height: 55px;
    color: #fff;
    cursor: pointer;
    outline: none;
    border:0px solid #3c3e55;
    border-radius: 10px;
    -o-border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    background: rgba(131, 131, 131, 0.87);
  }
  .fz{
    width: 100%;
  }
  .fz{
    position: absolute;
    left: 65px ;
  }
  .fz a{
    color: white;
    font-size: 20px;
  }
</style>
