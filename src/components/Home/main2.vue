<template>
  <div id="main2">
      <div class="am-g" :class="main">
        <div :class="mark" @click="openTab()">
        </div>
        <header data-am-widget="header" class="myAppHead am-header am-header-default am-no-layout">
          <div class="am-header-left am-header-nav">
            <i @click="openTab()"><img src="./../../../static/image/img2/list.png"></i>
          </div>
          <h1 class="am-header-title">
            <a href="#title-link" class="">
              Amaze UI
            </a>
          </h1>
        </header>
        <div data-am-widget="tabs" class="myAppTab am-tabs am-tabs-d2 am-no-layout">
          <ul class="am-tabs-nav am-cf">
            <li class="am-active"><a href="[data-tab-panel-0]">Amaze</a></li>
            <li class=""><a href="[data-tab-panel-1]">React</a></li>
            <li class=""><a href="[data-tab-panel-2]">Native</a></li>
          </ul>
          <div class="router">
            <router-view class="Main"></router-view>
          </div>
        </div>
    </div>
    <div id="doc-oc-demo2" class="myAppOffcanvas am-offcanvas am-active"
         style="touch-action: pan-y; user-select: none; -webkit-user-drag: none;
         -webkit-tap-highlight-color: rgba(0, 0, 0, 0);" :class="tab">
      <!--个人信息-->
      <div class="am-offcanvas-content">
        <div class="myAppOffcanvasUserIco">
          <img src="./../../../static/image/huge.jpg" alt="">
        </div>
        <div class="myAppOffcanvasUserName">{{user.name}}</div>
        <div class="line"></div>
      </div>
      <div class="menu-content">
        <template v-for="item in menus">
          <div class="menu-mm">
            <div class="menu-icon con">
              <img :src="item.url">
            </div>
            <div class="menu-name con"><h5>{{item.name}}</h5></div>
            <div class="menu-icon con go" @click="goto(item.router)">
              <img src="./../../../static/image/img2/go.png">
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
  export  default {
    data() {
      return {
        isMove:false,
        main:'',
        tab:'',
        mark:'',
        menus:[{url:""}],
        user:{
          name:'defult',
          uucode:'defult',
          position:'defult',
        },
      }
    },
    inject:['goRout'],
    created(){
      let _this = this;
      _this.user = _this.$route.query.userinformation;
      _this.menus = _this.$route.query.menus;
    },
    methods:{
      /**
       * 打开面板切换 消除遮罩
       */
      openTab:function () {
          let _this = this;
          if(!_this.isMove){
            _this.main = 'main';
            _this.tab = 'tab';
            _this.mark='mark';
          }else{
            _this.main = '';
            _this.tab = '';
            _this.mark='';
          }
          //修正参数
        _this.isMove = !_this.isMove;
      },
      /**
       * 跳转路由
       */
      goto:function (router) {
        let _this = this;
        _this.goRout(router);
      },
    }
  }
</script>
<style scoped>
  #main2{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .am-g{
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
  .myAppHead {
    background: #292c34;
  }
  .am-header {
    position: relative;
    width: 100%;
    height: 89px;
    line-height: 49px;
    padding: 0 10px;
  }
  .am-header-default .am-header-nav {
    color: #eee;
    position: absolute;
    left: 40px;
    top: 25%;
  }
  .am-header-nav img{
    width: 38px;
    height: 38px;
    min-width: 36px;
    text-align: center;
    color: #eee;
    display: inline-block;
  }
  .am-header .am-header-title {
    margin: 0 30%;
    font-weight: 400;
    text-align: center;
    display: block;
    word-wrap: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .am-header a{
    color: white;
    font-size: 35px;
    line-height: 89px;
  }
  .myAppTab {
    background: #fff;
    margin: 0;
    width: 100%;
    height: calc(100% - 89px);
  }
  .am-tabs-nav {
    width: 100%;
    padding: 0;
    height: 95px;
    margin: 0;
    list-style: none;
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .router{
    height: calc(100% - 100px);
  }
  .myAppTab ul li{
    width: 33%;
    padding: 25px;
  }
  .myAppTab ul li a{
    font-size: 25px;
    color: black;
  }
  .am-offcanvas {
    width:0px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #292c34;
    transition: 0.35s;
    opacity: 0;
    visibility: hidden;
    z-index: 0;
  }
  .main{
    transform:translate(60%,0);
  }
  .tab{
    width: 60%;
    display: block;
    opacity: 1;
    visibility: visible;
    z-index: 1090;
  }
  .mark{
    width: 100%;
    height: 100%;
    background-color:black;
    position:absolute;
    left:0;
    top:0;
    filter:alpha(opacity=50); /*IE滤镜，透明度50%* ie89 支持*/
    -moz-opacity:0.5; /*Firefox私有，透明度50%*/
    opacity:0.5;/*其他，透明度50%*/
    z-index:99;
  }
  .myAppOffcanvas .am-offcanvas-content {
    width: 100%;
    height:30%;
    text-align: center;
  }
  .am-offcanvas-content {
    padding: 35px;
    color: #999;
    margin-top: 25px;
  }
  .myAppOffcanvas .myAppOffcanvasUserIco img {
    width: 100%;
  }
  .myAppOffcanvas .myAppOffcanvasUserIco {
    margin: 0 auto;
    text-align: center;
    margin-top: 20px;
    overflow: hidden;
    width: 60%;
    border-radius: 50%;
    margin-bottom: 20px;
    border: 4px solid white;
  }
  img {
    box-sizing: border-box;
    vertical-align: middle;
  }
  .myAppOffcanvas .myAppOffcanvasUserName {
    border-radius: 30px;
    display: inline-block;
    color: #fff;
    padding: 5px 39px;
    background: rgba(219, 108, 14, 0.94);
    font-size: 14px;
    text-align: center;
  }
  .line{
    width: 85%;
    margin: 0px auto;
    border: 2px solid gray;
    margin-top: 25px;
  }
  .menu-content{
    width: 100%;
    margin: 0px auto;
    height: 60%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .con{
    float: left;
  }
  .con img{
    width: 85%;
    height: 100%;
  }
  .menu-icon{
    width: 15%;
    height: 100%;
  }
  .go{
    width: 10%;
  }
  .go img{
    height: 80%;
  }
  .menu-name{
    width: 75%;
    height: 100%;
    text-align: initial;
    padding-left: 25px;
  }
  .menu-mm{
    width: 100%;
    height: 45px;
    padding-left: 15%;
    padding-right: 35px;
    margin-top: 35px;
  }
  .menu-mm h5{
    font-size: 28px;
    font-weight: bold;
    color: white;
  }
</style>
