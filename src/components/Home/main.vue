<template>
  <div id="main">
    <div class="router">
      <router-view class="Main"></router-view>
    </div>
    <div class="bottom">
      <template v-for="menu in menus">
        <div class="but but1" :style="butStyle">
          <div class="menu">
            <img :src="menu.url" @click="goto(menu.router)">
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>

  import home from './../../../static/image/home.png';
  import search from './../../../static/image/search.png';
  import mg from './../../../static/image/mg.png';
  import user from './../../../static/image/user.png';

  export  default {
    data:function () {
      return{
        userinformation:null,
        menus:[],
        butStyle:{width:'0px'},
        models:[],
      }
    },
    created(){
      let _this = this;
      _this.userinformation = _this.$route.query.userinformation;
      _this.menus = _this.$route.query.menus;
      _this.models = _this.$route.query.model;
      //计算菜单样式
      _this.butStyle.width =(1/_this.menus.length)*100+'%';
    },
    mounted(){
      let _this = this;
      _this.addressDetail();
    },
    provide(){
      return{
        goUserSeting:this.goUserSeting
      }
    },
    methods:{
      goUser:function () {
        let _this = this;
        _this.$router.push({ name: 'Us',
          query:{
            models:_this.models,
            userinformation:_this.userinformation,
          }})
      },
      goto:function (router) {
        let _this = this;
        console.log(router)
        if(router == "Us"){
          _this.$router.push({ name: 'Us',
            query:{
              userinformation:_this.userinformation,
              models:_this.models,
            }})
        }else{
          _this.$router.push({ name: router})
        }
      },
      goSearch:function () {
        let _this = this;
        _this.$router.push({ name: 'Search'})
      },
      goUserSeting:function () {
        let _this = this;
        _this.$router.push({ name: 'Useting'})
      },
      addressDetail:function(){ //获取地理位置
        var self = this;
        var province = '';
        var city = '';
        var url = self.HOST;
        //全局的this在方法中不能使用，需要重新定义一下
        var geolocation = new BMap.Geolocation();
        //调用百度地图api 中的获取当前位置接口
        geolocation.getCurrentPosition(function(r){ if(this.getStatus() == BMAP_STATUS_SUCCESS){
          //获取当前位置经纬度
          var myGeo = new BMap.Geocoder();
          myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(result){ if (result){
            //根据当前位置经纬度解析成地址
            alert('您的位置：'+result.point.lng+','+result.point.lat);
            var gc = new BMap.Geocoder();
            gc.getLocation(r.point, function (rs) {   //getLocation函数用来解析地址信息，分别返回省市区街等 r.point里有经纬度
              var addComp = rs.addressComponents;
              province = addComp.province;//获取省份
              city = addComp.city;//获取城市
              alert(province+city);
            });
          }});
        }
        });
        if(province==""&&city==""){
          province="fail";
          city = "fail";
        }
        //发送请求获取异常登录信息
        self.axios.post(url+'/sendIdentifyingCode', {province:province,city:city})
          .then(function (response) {
            self.identifyingCodeValue = response.data;
         }).catch(function (error) {
          console.log(error);
        });
      },
    }
  }
</script>
<style scoped>

  #main{
    touch-action: pan-y;
    -webkit-overflow-scrolling: touch;
    height:100%;
    background: url("./../../../static/image/bgtest-w.png") no-repeat;
    width:100%;background-size:cover;
    -moz-background-size:100% 100%;
    overflow: hidden
  }
  .router{
    width: 100%;
    height: calc(100% - 75px);
  }
  .head{
    position: relative;
    width: 100%;
    height: 42%;
    /*background: #0bd38a;*/
  }
  .center{
    position: relative;
    width: 100%;
    height: calc(58% - 95px);
    background:white;
  }
  .bottom{
    height: 75px;
    background: rgb(235, 235, 235);
    width: 100%;
    position: absolute;
    bottom: 0px;
  }
  .but{
    height: 100%;
    font-size: 15px;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align:top;
    display: inline-block;
  }
  .but img{
    vertical-align:middle;
    width: 55px;
    height: 55px;
    margin-top: 10px;
  }
  .userp{
    position: relative;
    top:calc(50% - 120px);
    left: calc(50% - 120px);
    width: 240px;
    height:240px;
    border: 5px solid gray;
    border-radius: 115px;
  }
  .userP1{
    position: relative;
    margin: 0px auto;
    width: 220px;
    height:230px;
    border: 8px solid white;
    border-radius: 105px;
  }
  .userP1{
    background: url("./../../../static/image/huge.jpg") no-repeat;
    width:100%;background-size:cover;
    -moz-background-size:100% 100%;
    overflow: hidden
  }
  .userp h2{
    font-size: 35px;
    color: white;
    margin-top: 10px;
  }
  .userp h3{
    font-size: 25px;
    color: white;
    margin-top: 10px;
  }
  .ts{
    width: 100%;
    height: 20%;
  }
  .tst{
    width: 32.5%;
    height: 100%;
    font-size: 15px;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align:top;
    display: inline-block;
  }
  .tst h2,h3{
    font-size: 25px;
    color: gray;
    margin-top: 10px;
  }
  .mb{
    width: 100%;
    height: 80%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .mbm{
    width: 100%;
    height: 255px;
    margin-top: 5px;
  }
  .mbmm{
    width: 30.5%;
    height: 92%;
    margin-left: 5px;
    font-size: 15px;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align:top;
    display: inline-block;
    border-radius: 12px;
    background: url("./../../../static/image/bea.jpg") no-repeat;
    background-size:cover;
    -moz-background-size:100% 100%;
  }
  .menu{
    width: 80%;
    height: 100%;
    margin: 0px auto;
  }
</style>
