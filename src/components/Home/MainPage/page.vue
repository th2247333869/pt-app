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
      <template v-for="item in contents">
        <div class="msg">
          <div class="h">
            <img src="./../../../../static/image/huge.jpg">
            {{item.head}}
          </div>
          <div class="msg-text">{{item.mesg.substring(0,132)}}...</div>
          <div class="imgsdiv"><img class="imgs" src='./../../../../static/image/img2/yinghua.jpg'></div>
          <div class="talk">
            <div class="pl" >
              <div style="width: 20%; float: left;padding: 5px"><label>热门评论_</label></div>
              <div class="zan" style="width: 50%; float: right;padding: 5px">
                <p class="plip">{{item.fall}}</p>
                <img class="plip" @click="addFall(item.id)" style="transform: rotateZ(180deg);" src="./../../../../static/image/img2/zanf.png">
                <p class="plip">{{item.praise}}</p>
                <img class="plip" @click="addPraise(item.id)" style="transform: rotateZ(360deg);"  src="./../../../../static/image/img2/zan.png">
              </div>
              <div class="firstalk" @click="showTalk(item)">不知道来吃了没！！</div>
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
      addFall:function (id) {
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
      }
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
    border-bottom: 3px solid gray;
    padding: 15px;
    padding-right: 0px;
    height:auto;
  }
  .msg .h{
    width: 100%;
    font-size: 25px;
    color: rgba(60, 58, 58, 0.85);
    text-align: left;
    display: inline-block;
    letter-spacing:2px;
    font-weight: bold;
  }
  .h img{
    width: 55px;
    height: 55px;
    border-radius: 50px;
    border: 3px solid gray;
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
    font-size: 15px;
    color: rgba(179, 173, 173, 0.85);
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    color: #666666;
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
  }
  .zan img{
    width: 35px;
    height: 35px;
  }
  .plip{float: right;margin-left: 2px}
</style>
