<template>
  <div id="Search">
    <div class="search" v-show="!isSearch">
      <img class="m1" src="./../../../static/image/more.png"/>
      <div class="title">
        <p><h1>今日推荐</h1></p>
      </div>
      <img class="m2" @click="showSearch"  src="./../../../static/image/search.png" >
    </div>
    <div class="search1" v-show="isSearch">
      <div class="title">
        <input type="text"  @blur="showSearch" ref="in">
      </div>
      <img class="m2"  src="./../../../static/image/search.png" >
    </div>
    <div class="show">
      <div class="user_notes_id" v-for="item in items">
        <div class="uname">
          <img class="tx" src="./../../../static/image/huge.jpg">
          <h4>{{item.text}}</h4>
          <h5>student</h5>
          <h6>last : 2018.9.3</h6>
        </div>
        <div class="zhutiimg"></div>
        <div class="introduce">
          <h4>北京的一天</h4>
          <h5>一个微微的动作，曾让我涑然泪下。一道美丽的风景，划过我的视线，曾让我感动不已。
            那天，阳光明媚，一缕清风扫过我的秀发，清爽之气流过全身，感觉十分惬意。我独自一
            人漫步在街上，欣赏树的翠绿，草的旺盛。不知不觉中，我走进了人民公园。人们三五成
            群地聚集在一起玩自己兴趣最浓的事。看看那边，
            人们的舞蹈优资优采，好不愉快！脸上绽放了朵朵鲜花，在阳光下显得那么耀眼，那么醉人。</h5>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
  export  default {
    data:function () {
      return{
        items:[
          {text:"第一组"},
          {text:"第二组"},
          {text:"第三组"},
         ],
        isSearch:false,
      }
    },
    methods:{
      showSearch:function () {
        let _this = this;
        _this.isSearch = !_this.isSearch;
        _this.$nextTick(function(){
          _this.$refs.in.focus()
        })
      },
    }
  }
</script>
<style scoped>
  #Search{
    height:100%;
    width:100%;background-size:cover;
    -moz-background-size:100% 100%;
    overflow: hidden
  }
  .search{
    position: relative;
    width: 100%;
    border-radius: 4px;
    height: 85px;
    border-bottom: 2px solid gray;
    box-shadow:0px 1px 8px gray;
    background: white;
    margin: 0px auto;
  }
  .search1{
    position: relative;
    top: 0px;
    width: 100%;
    height: 85px;
    border-bottom: 2px solid gray;
    box-shadow:0px 1px 8px gray;
  }
  .search1 input{
    width: 100%;
    height: 90px;
    border-bottom: 5px solid gray;
    border-radius: 9px;
    font-size: 30px;
    padding-left: 25px;
    outline:none;
  }
  .show{
    width: 100%;
    position: relative;
    top:10px;
    height: calc(100% - 85px);
    background: rgba(222, 220, 220, 0.34);
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    background: white;
  }
  .user_notes_id{
    position: relative;
    width: 100%;
    height:925px;
  }
  .tx{
    width: 75px;
    height: 75px;
    border-radius: 30px;
    position: absolute;
    left: 30px;
    top: 25px;
  }
  .zhutiimg{
    position: absolute;
    top: 125px;
    height:550px;
    background:url("./../../../static/image/haidao.jpg");
    width:100%;background-size:cover;
    -moz-background-size:100% 100%;
    overflow: hidden
  }
  .introduce{
    position: absolute;
    top: 675px;
    height:250px;
    width: 100%;
    border-bottom: 1px solid gray;
    box-shadow:0px 1px 28px gray;
  }
  .introduce h4{
    font-size: 30px;
    position: absolute;
    left: 55px;
    top: 25px;
  }
  .introduce h5{
    width: 95%;
    font-size: 15px;
    position: absolute;
    left: 15px;
    top: 85px;
    color: #5b5a5a;
    text-align: justify;
  }
  .uname h4{
    font-size: 30px;
    position: absolute;
    left: 145px;
    top: 25px;
  }
  .uname h5{
    font-size: 20px;
    position: absolute;
    left: 145px;
    top: 65px;
    color: gray;
  }
  .uname h6{
    font-size: 25px;
    position: absolute;
    right: 85px;
    top: 35px;
    color: gray;
  }
  .m1{
    width: 65px;
    height: 65px;
    top:15px;
    position: absolute;
    left: 5px;
  }
  .m2{
    width: 65px;
    height: 65px;
    top:15px;
    position: absolute;
    right: 5px;
  }
  .title{
    position: absolute;
    top: 0px;
    width: 100%;
    margin: 0px auto;
    text-align: center;
  }
</style>
