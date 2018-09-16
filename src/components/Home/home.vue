<template>
  <div id="Home">
    <!--<el-row>
      &lt;!&ndash;&lt;!&ndash;标题头&ndash;&gt;&ndash;&gt;
      <el-col :span="24">
        <div class=" bg-purple-dark head_top">
          <div class="grid-left">
            <a href="#" title="回到首页"><span class="a1">HOMEPAGE</span></a>
            <a href="#" title="刷新"><span class="a2">FLASH</span></a>
          </div>
          <div class="grid-right">
            <a href="#" title="回到首页"><span class="a1">HOMEPAGE</span></a>
            <a href="#" title="刷新"><span class="a2">FLASH</span></a>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>-->
      <!--扩展页面-->
      <el-col :span="24" class="head">
        <div class="grid-content bg-purple head-extension">
          <div class="grid-extension-left">
            <h4><span class="h1">HYW</span><!--<span class="h2">Versions-18.9.8</span>--></h4>
          </div>
          <!--菜单栏@最大值为6-->
          <div class="grid-extension-menu">
            <ul class="menu">
              <li><button>主页</button></li>
              <li><button @click="redirectPage">我的信息</button></li>
              <li><button>工作空间</button></li>
              <li><button>工作空间</button></li>
              <li><button>工作空间</button></li>
              <li><button>关于</button></li>
              <li><button>搜索</button><img src="/static/image/search.png" class="searchbut" style="width: 20px;"></li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <!--轮播图-->
      <el-col :span="24">
        <div class="grid-content bg-purple head-Carousel">
          <Carousel></Carousel>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <!--排行榜-->
      <el-col :span="24">
        <div class="grid-content bg-purple head-LeaderBoard">
          <LeaderBoard></LeaderBoard>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <!--我的计划-->
      <el-col :span="24">
        <div class="grid-content bg-purple head-Schedule">
          <Schedule></Schedule>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>

  //引入组件
  import Carousel from './Carousel'
  import LeaderBoard from './leaderboard'
  import Schedule from './Schedule'

  export  default {
    //变量@
    data: function(){
      return {
        //跳转路由@可查询
        PageUrl:{
          PersonalDetailsUrl:'PerspnalDetails',
        }
      }
    },
    //组件引用@放置主页面的初始化方法内有过多处理
    components : {
      Carousel,LeaderBoard,Schedule
    },
    methods:{

      redirectPage:function () {
        alert();
        let _this = this;
        _this.$router.push({name:_this.PageUrl.PersonalDetailsUrl});
      }
    }
  }


</script>
<style scoped>
  #Home{

  }
/*  .head{
    position:fixed;
    top:0;
    left: 0;
  }*/
/*  .bg-purple {
    background: #d3dce6;
  }*/

  .row-bg {
    background-color: #f9fafc;
  }
  .grid-content {
    min-height: 36px;
  }
  .head_top{
    background: black;
    height: 15px;
  }
  .grid-left{
    width: 150px;
    height: 15px;
    float: left;
    line-height: 15px;
  }
  .grid-left a{
    color: white;
    text-decoration:none;
  }
  .a1{
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    font-size: 12px;
  }
  .a2{
    color:gray;
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    font-size: 10px;
  }
  .grid-right{
    width: 150px;
    height: 35px;
    float: right;
    line-height: 15px;
  }
  .head-extension{
    background: #8bda43;
    height: 65px;
  }
  .grid-extension-left{
    color:white;
    width: 30%;
    height: 65px;
    float: left;
    line-height: 65px;
  }
  .h1{
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    font-size: 40px;
  }
  .grid-extension-menu{
    color:white;
    height: 65px;
    float: right;
    line-height: 65px;
  }
  .menu li{
    float: left;
    margin-left: 5px;
  }
  .menu button{
    background-color: #8bda43; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }


  /*****轮播图*******/
  .head-Carousel{
    height: 400px;
  }

  /****排行榜*****/
  .head-LeaderBoard{
    height: 550px;
    background: rgba(188, 188, 188, 0.28);
  }
  .searchbut{
    width: 20px;
    position: relative;
    left: -27px;
    top: 5px;
  }
  /**我的计划**/
  .head-Schedule{
    height: 650px;
    background: rgba(173, 170, 170, 0.34);
  }
</style>
