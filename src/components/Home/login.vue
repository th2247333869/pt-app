<template>
  <div id="Home"
       v-loading="loading" element-loading-text="登陆中 请稍后......"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(48, 49, 69, 0.89)">
    <h1>Your Circle</h1>
    <div class="app-location">
      <h2>Your Circle</h2>
      <div class="line"><span></span></div>
        <input type="text" class="text" v-model="username" value="" placeholder="邮箱账号"  onBlur="if (this.value == '') {this.value = '';}" >
        <input type="password" value="" v-model="password" placeholder="密码"  onBlur="if (this.value == '') {this.value = '';}">
        <div class="submit"><input type="submit" @click="sign" value="登录" ></div>
        <div class="clear"></div>
        <div class="new">
          <h3><a >忘记密码 ?</a></h3>
          <h4><a @click="register()">点击 注册</a></h4>
          <div class="clear"></div>
        </div>
    </div>
  </div>
</template>
<script>
  import store from '../../vuex'

  export  default {
    data(){
      return{
        username:'',
        password:'',
        loading:false,
      }
    },
    methods:{
      sign:function () {
        let url = this.HOST;
        let _this = this;

        _this.loading = true;

        this.axios.post(url+'/login', {
          data: {
            username: _this.username,
            password: _this.password
          },
        })
          .then(function (response) {

            if(response.data.code == "1"){//成功
              store.commit("setUserInformation", response.data.result);
              store.commit("setMenus", response.data.menus);
              sessionStorage.setItem("uucode",response.data.uucode);
              _this.$router.push({
                name:'main',
                query:{
                  userinformation:response.data.result,
                  menus:response.data.menus,
                  model:response.data.model,
                }
              })

            }else{
              alert("请检查用户名或密码");
              //制空
              _this.username="";
              _this.password="";
            }
            _this.loading = false;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      register:function () {
        let _this = this;
        _this.$router.push({name: 'register'});
      },
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
    left: 95px ;
  }
  #Home h4 {
    position: absolute;
    right: 95px;
  }
  .test{
    position: absolute;
    bottom: 0px;
    color: white;
    font-size: 25px;
  }
</style>
<style>
  .el-loading-spinner .el-loading-text .el-icon-loading .el-loading-spinner i{
    font-size: 85px;
  }
</style>
