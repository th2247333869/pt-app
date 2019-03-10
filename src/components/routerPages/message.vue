<template>
  <div id="userSeting">
    <div class="return" @click="returnBack()">
      <img src="./../../../static/image/img2/return1.png">
    </div>
    <div class="edit">
      <img src="./../../../static/image/img2/open.png">
    </div>
    <div class="head">
      <div class="search">
          <img src="./../../../static/image/img2/flash.jpg">
          <input type="text" placeholder="请输入文字"/>
      </div>
    </div>
    <div class="message">
      <template v-for="a in items">
        <template v-for="item in 8">
          <div class="m">
              <div class="um">
                <img src="./../../../static/image/img2/flash.jpg">
                <h4><a>{{a.advertiser}}</a></h4>
                <div class="heart">
                  <img src="./../../../static/image/img2/goreturn.png">
                </div>
              </div>
              <div class="am">
                {{auth.substring(0,200)}}
              </div>
          </div>
        </template>
      </template>

    </div>
  </div>
</template>
<script>
  export  default {
    data() {
      return {
        shows:1,
        items:[],
        auth:"《流浪地球》是由中国电影股份有限公司、北京京西文化旅游股份有限公司、\n" +
        "                北京登峰国际文化传播有限公司、郭帆文化传媒（北京）有限公司出品的科幻片\n" +
        "                ，由郭帆执导，吴京特别出演，屈楚萧、李光洁、吴孟达\n" +
        "                、赵今麦领衔主演。该片于2019年2月5日（农历大年初一）在中国内地上映。",
      }
    },
    created(){
      this.getMessage();
    },
    methods:{
      active:function () {
        let _this = this;
        if(_this.shows==1){
          _this.shows = 2;
        }else{
          _this.shows = 1;
        }
      },

      getMessage:function () {
        let _this = this;
        let url = _this.HOST;
        _this.axios.post(url+'/getMessageByUser',{
          data: {
            uucode:"A2019022416574371175403853115090"
          },
        })
          .then(function (response) {
            _this.items = response.data;
          }).catch(function (error) {
          console.log(error);
        });
      },
      returnBack:function () {
        let _this = this;
        _this.$router.back(-1);
      }
    }
  }

</script>
<style scoped>
  #userSeting{
    width: 100%;
    height: 100%;
  }
  .return{
    position: absolute;
    left: 15px;
    top: 15px;
    width: 65px;
    height: 65px;
  }
  .return img{
    width: 100%;
    height: 100%;
  }
  .edit{
    display: none;
    position: absolute;
    right: 35px;
    top: 15px;
    width: 65px;
    height: 75px;
    color: gray;
  }
  .edit h4{
    float: left;
    font-size: 20px;
  }
  .edit img{
      float: left;
      width: 65px;
      height: 50px;
  }
  .head{
    width: 100%;
    height: 250px;
    background: rgb(243, 243, 243);
  }
  .search{
    height: 35%;
    position: relative;
    top: 35%;
  }
  .search img{
    width: 105px;
    height: 105px;
    border-radius:55px;
    float: left;
    border: 2px solid white;
    margin-left: 25px;
  }
  .search input{
    margin-top: 25px;
    width: calc(100% - 255px);
    height: 55px;
    border-radius: 25px;
    border: 3px solid #dddcdc;
    -moz-box-shadow: 1px 1px 1px rgba(202, 197, 197, 0.33);
    -webkit-box-shadow: 1px 1px 1px rgba(202, 197, 197, 0.33);
    box-shadow:1px 1px 1px rgba(202, 197, 197, 0.33);
    padding-left: 35px;
  }
  input::-webkit-input-placeholder {
    /* placeholder颜色  */
      color: gray;
    /* placeholder字体大小  */
     font-size: 18px;
   }
  .head .p1 {
    height: 100%;
    float: left;
    position: relative;
    line-height: 0.733333rem;
  }
  .head .p2 {
    height: 100%;
    float: right;
    position: relative;
    line-height: 0.733333rem;
  }
  .head a{
    color: black;
    font-size: 30px;
    font-weight: bold;
  }
  .active a{
    color: #3a8ee6;
  }
  .message{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .m{
    width: 90%;
    margin: 0px auto;
    height: 280px;
    border-bottom: 5px solid rgba(202, 197, 197,1);
    padding: 35px;
  }
  .m img{
    width: 85px;
    height: 85px;
    border-radius: 55px;
    float: left;
  }
  .um{
    margin-top: 2%;
    float: left;
    margin-right: 15px;
    width: 100%;
    height: 100px;
  }
  .heart{
    float: right;
    width: 20%;
    height: 100px;
  }
  .heart img{
    width: 35%;
    height: 35%;
    float: right;
  }
  .um h4{
    position: relative;top:15%;
    float: left;
    margin-left: 25px;
  }
  .um h4 a{
    font-size: 25px;
    color: black;
    font-weight: bold;
  }
  .am {
    width: 100%;
    height: 70px;
    float: left;
    text-align: left;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    line-height:24px;
    color: #666666;
    font-weight: bold;
  }
  .am h3{
    float: left;
  }
  .m h3 a{
    font-size: 35px;
    color: white;
  }

</style>
