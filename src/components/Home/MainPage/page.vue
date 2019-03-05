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
          <div><h3>{{item.head}}</h3>
          </div>
          <div class="msg-text"><h3>{{item.mesg}}</h3></div>
        </div>
        <div class="msg-text-img">
         <img src='./../../../../static/image/img2/yinghua.jpg'>
        </div>
      </template>
    </div>
  </div>
</template>
<script>

  export  default {
    data() {
      return {
        card:[
          {src:'./../../../static/image/img2/cat.jpg'},
          {src:'./../../../static/image/img2/jpan.jpg'},
          {src:'./../../../static/image/img2/yinghua.jpg'}
        ],
        contents:[]
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
      }
    }
  }

</script>
<style scoped>

  #page{
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
    /*height: 500px;*/
  }
  .msg{
    float: left;
    width: 65%;
    height: 200px;
    border-bottom: 1px solid gray;
    padding: 25px;
    padding-right: 0px;
  }
  .msg h3{
    font-size: 25px;
    color: rgba(60, 58, 58, 0.85);
    text-align: left;
    display: inline-block;
    letter-spacing:1px;
    line-height:44px;
  }
  .msg-text-img{
    float: left;
    width: 35%;
    height: 200px;
    border-bottom: 1px solid gray;
    padding: 25px;
  }
  .msg-text{
    margin-top: 25px;
  }
  .msg-text-img img{
    width: 100%;
    height: 100%;
    padding: 2px;
  }
  .msg-text h3{
    font-size: 15px;
    color: rgba(179, 173, 173, 0.85);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    letter-spacing:1px;
    line-height:24px;
  }
</style>
