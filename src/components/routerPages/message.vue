<template>
  <div id="userSeting">
    <div class="head">
      <div>
        <p class="p1" :class="{active:shows==1}" @click="active()"><a>消息</a></p>
        <p class="p2" :class="{active:shows==2}" @click="active()"><a>私信</a></p>
      </div>
    </div>
    <div class="message">
      <template v-for="a in items">
        <div class="m">
          <div class="am">
            <h3><a>{{a.title}}</a></h3>
            <h5>{{a.advertText}}</h5>
          </div>
          <div class="um">
            <img src="./../../../static/image/huge.jpg">
            <h4><a>{{a.advertiser}}</a></h4>
          </div>
        </div>
      </template>

    </div>
  </div>
</template>
<script>
  export  default {
    data() {
      return {
        shows:1,
        items:[]
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
      }
    }
  }

</script>
<style scoped>
  #userSeting{
    width: 100%;
    height: 100%;
  }
  .head{
    width: 100%;
    height: 0.733333rem;
    background: #ebebeb;
  }
  .head div{
    margin: 0px auto;
    width: 30%;
    height: 100%;
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
    height: calc(100% - 55px);
    overflow-x: hidden;
    overflow-y: auto;
  }
  .m{
    width: 100%;
    height: 125px;
    border-bottom: 1px solid;
    background: rgba(27, 24, 24, 0.44);
    filter:progid:DXImageTransform.Microsoft.Shadow(color=#909090,direction=120,strength=4);
    -moz-box-shadow: 2px 2px 10px #909090;
    -webkit-box-shadow: 2px 2px 10px #909090;
    box-shadow:2px 2px 10px #909090;
    margin-top: 5px;
  }
  .m img{
    width: 55px;
    height: 55px;
    border-radius: 25px;
  }
  .um{
    margin-top: 2%;
    float: right;
    margin-right: 15px;
  }
  .am {
    width: 60%;
    height: 100%;
    float: left;
  }
  .am h3{
    float: left;
  }
  .m h3 a{
    font-size: 35px;
    color: white;
  }
</style>
