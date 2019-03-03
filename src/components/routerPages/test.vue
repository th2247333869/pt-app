<template>
  <div id="Home">
    <h1>Your Circle</h1>
    <div class="app-location">
      <h2>Your Circle</h2>
      <div class="line"><span></span></div>
      <form>
        <input type="text" class="text" value="" placeholder="邮箱账号" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'E-mail address';}" >
        <input type="password" value="" placeholder="密码" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Password';}">
        <div class="submit"><input type="submit" @click="sign" value="登录" ></div>
        <div class="clear"></div>
        <div class="new">
          <h3><a >忘记密码 ?</a></h3>
          <h4><a >点击 注册</a></h4>
          <div class="clear"></div>
        </div>
      </form>
    </div>
    <div class="test"> woshi test</div>
    <!--<transition name="fade">
      <div class="sendMessage" >
        <h1>用户名或密码不正确！请重试</h1>
      </div>
    </transition>-->
  </div>
</template>
<script>


  export  default {
    methods:{
      sign:function () {
        let _this = this;
        _this.$router.push({ name: 'main'})
      }
    }
  }


</script>
<style scoped>
  #Home{
    height:100%;
    background: url("./../../../static/image/bg4.jpg") no-repeat;
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
    margin:50px 0;
    background:  rgba(10, 10, 10, 0.24);
    margin-top: 10%;
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
</style>
