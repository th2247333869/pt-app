<template>
  <div id="page">
    <div class="card-content" interval="5000">
      <el-carousel  height="6rem">
        <el-carousel-item v-for="(item,index) in card" :key="index" >
          <div class="card-img"><img :src="item.src"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content-msg">
      <template v-for="(item,index) in contents">
        <div class="msg">
          <div class="h">
            <img src="./../../../../static/image/huge.jpg">
            <label>{{item[3]}}</label>
            <div class="close" @click="contents.splice(index, 1)"><img src="./../../../../static/image/img2/close.png"></div>
          </div>
          <div class="msg-text">{{item[2].substring(0,132)}}...</div>
          <div class="imgsdiv" ><img class="imgs" v-if="item[4].length>2" :src="url+item[4]"></div>
          <div class="talk">
            <div class="pl" >
              <div class="lab" style=" font-size:30px;width: 25%; float: left;padding: 5px"><label >热门评论</label></div>
              <div class="zan" style="width: 50%; float: right;padding: 5px">
                <p class="plip">{{item[9]}}</p>
                <img class="plip" @click="addFall(item[0])" style="transform: rotateZ(180deg);" src="./../../../../static/image/img2/zanf.png">
                <p class="plip">{{item[8]}}</p>
                <img class="plip" @click="addPraise(item[0])" style="transform: rotateZ(360deg);"  src="./../../../../static/image/img2/zan.png">
              </div>
              <div class="firstalk" @click="showTalk(item)">{{item[10]}}</div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>

  import store from '../../../vuex';
  import cat from './../../../../static/image/img2/cat.jpg';
  import jpan from './../../../../static/image/img2/jpan.jpg';
  import yinghua from './../../../../static/image/img2/yinghua.jpg';

  export  default {
    data() {
      return {
        card:[
          {src:cat},
          {src:jpan},
          {src:yinghua}
        ],
        contents:[],
        isPra:false,
        isFall:false,
        url:this.HOST,
      }
    },
    created(){this.findRecommend()},
    methods:{
      findRecommend:function () {
        let _this = this;
        let url = _this.HOST;
        _this.axios.post(url+'/getEveryRecommend')
          .then(function (response) {
            console.log(response.data)
            _this.contents = response.data;
          }).catch(function (error) {
          console.log(error);
        });
      },
      showTalk:function (item) {
        let _this = this;
        _this.$router.push({
          name:'contentTalk',
          query:{
            item:item
          }})
      },
      close:function () {

      },
      /*addFall:function (id) {
        let _this = this;
        let url = _this.HOST;
        if(!_this.isFall){
          this.axios.post(url+'/addFallOrPraise', {
            data: {
              midc: id+'',
              fop: 'f',
            },
          })
            .then(function (response) {
              alert("点击成功");
              _this.isFall = true;
              _this.findRecommend();
            }).catch(function (error) {
            console.log(error);
          });
        }

      },
      addPraise:function (id) {
        let _this = this;
        let url = _this.HOST;
        if(!_this.isPra){
          this.axios.post(url+'/addFallOrPraise', {
            data: {
              midc: id+'',
              fop: 'p',
            },
          })
            .then(function (response) {
              alert("点击成功")
              _this.isPra = true;
              _this.findRecommend();
            }).catch(function (error) {
            console.log(error);
          });
        }
      }*/
    }
  }

</script>
<style scoped>

  #page{
    touch-action: pan-y;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .card-content{
    width: 100%;
    height: 450px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .card-img{
    width: 100%;
    height: 100%;
  }
  .card-img img{
    width: 100%;
    height: 100%;
  }
  .content-msg{
    width: 100%;
    height: calc(100% - 450px);
  }
  .msg{
    position: relative;
    float: left;
    width: 100%;
    border-bottom: 20px solid rgb(231, 232, 233);
    padding: 25px;
    padding-right: 0px;
    height:auto;
    background: rgba(232, 233, 234, 0.22);
  }
  .msg .h{
    width: 100%;
    font-size: 25px;
    color: #666666;
    text-align: left;
    display: inline-block;
    letter-spacing:2px;
    font-weight: bold;
  }
  .h img{
    width: 75px;
    height: 75px;
    border-radius: 50px;
    border: 3px solid gray;
  }
  .h label{
    position: relative;
    left: 15px;
    top: -35px;
    font-size: 25px;
  }
  .msg-text{
    margin-top: 25px;
  }
  .imgsdiv{
    position: relative;
    float: left;
    width: 100%;
    padding: 25px;
  }
  .imgs{
    position: relative;
    float: left;
    width: 85%;
    height: 350px;
    padding: 25px;
  }
  .msg-text {
    font-size: 30px;
    color: rgba(179, 173, 173, 0.85);
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    color: black;
    text-align: left;
  }
  .talk{
    position: relative;
    float: left;
    width: 98%;
    background: rgba(235, 233, 233, 0.22);
    margin-top: 15px;
  }
  .pl label{float: left; font-weight: bold;font-size: 20px; color: palevioletred;}
  .firstalk{
    width: 100%;
    position: relative;
    float: left;
    text-align: left;
    padding: 25px;
    font-size: 25px;
  }
  .zan img{
    width: 35px;
    height: 35px;
  }
  .plip{float: right;margin-left: 2px}

  .lab label{
    font-size:28px;
  }
  .close{
    border: 0px solid;
    float: right;
    width: 45px;
    height: 45px;
  }
  .close img{
    width: 35px;
    height: 35px;
    border: 0px solid;
  }
</style>
