<template>
  <div id="contentTalk">
    <div class="head">
      <div class="fabu">
        帖子详情
      </div>
      <div class="return">
        <img src="./../../../../static/image/img2/return1.png" @click="returnBack">
      </div>

    </div>
    <div class="all">
      <div class="mesg">
        <div class="h">
          <img src="./../../../../static/image/huge.jpg">
          {{item[3]}}   ：<label>写于{{item[7]}}</label>
        </div>
        <div class="mesgcontent" style="text-indent: 2em;">{{item[2]}}</div>
        <div style="width: 100%;height: 15px;"></div>
      </div>
      <div class="fgx"></div>
      <div class="dqpl" style="width: 100%; height: 25px">&nbsp;&nbsp;&nbsp;&nbsp;当前评论_</div>
      <template v-for="item in Talk">
        <div class="talk">
          <div class="h">
            <img src="./../../../../static/image/huge.jpg">
            {{item[6]}}<label>发表于：{{item[5]}}</label>
          </div>
          <div style="width: 100%;height: 25px;"></div>
          <div class="talkmsg">评论：{{item[4]}}</div>
        </div>
      </template>

    </div>
    <div class="write">
      <input type="text" v-model="text" placeholder="都让让！！！神评来了">
      <button @click="send()">发送</button>
    </div>
  </div>
</template>
<script>

  import store from '../../../vuex'

  export  default {
    data() {
      return {
        item:{},
        text:'',
        Talk:[],
      }
    },
    created(){
      this.item = this.$route.query.item;
      this.showAllTalks();
    },
    methods:{
      returnBack:function () {
        let _this = this;
        _this.$router.back(-1);
      },
      showAllTalks(){
        let _this = this;
        let url = _this.HOST;
        console.log(_this.item);
        _this.axios.post(url+'/getAllContentTalk',{
          data: {
            midc:_this.item[0]+"",
          },
        })
          .then(function (response) {
            if(response.data.length<=0){
              _this.Talk=[['无','无','无','当前暂无评论','无','无','','']];
            }else{
              _this.Talk = response.data;
            }

          }).catch(function (error) {

        });
      },
      send:function () {
        let _this = this;
        let url = _this.HOST;
        let uucode = store.state.userinformation.uucode;
        _this.axios.post(url+'/addContentTalk',{
          data: {
            uucode:uucode,msg:_this.text,midc:_this.item[0]+"",
          },
        })
          .then(function (response) {
            _this.showAllTalks();
            _this.text = "";
          }).catch(function (error) {

        });
      }
    }
  }

</script>
<style scoped>
  #contentTalk{
    position: relative;
    width: 100%;
    height:100%;
    background: white;
    overflow-y: hidden;
  }
  .all{
    width: 100%;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100% - 180px);
  }
  .head{
    position: relative;
    width: 100%;
    height: 89px;
    background: rgba(229, 228, 228, 0.8);
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
  .fabu{
    position: absolute;
    width: 100%;
    height: 65px;
    line-height: 85px;
    color: #3a8ee6;
    font-size: 35px;
    font-weight: bold;
  }
  .mesg{
    width: 85%;
    margin: 0px auto;
    font-weight: bold;
    font-size: 25px;
    color: black;
    text-align: left;
    word-wrap: break-word;
    margin-top: 25px;
    line-height: 55px;
  }
  .mesgcontent{
    width: 85%;
    margin: 0px auto;
    font-weight: bold;
    font-size: 25px;
    color: black;
    text-align: left;
    word-wrap: break-word;
    margin-top: 25px;
    line-height: 55px;
  }
  .talk{
    width: 85%;
    margin: 0px auto;
    border-top: 3px solid rgba(212, 214, 216, 0.29);
    border-bottom: 3px solid rgba(212, 214, 216, 0.29);
    padding: 15px;
  }
  .h{
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
  .dqpl{
    color: palevioletred;
    font-size: 25px;
    text-align: left;
    font-weight: bold;
  }
  .fgx{
    width: 100%;
    height: 25px;
    background: rgba(196, 192, 192, 0.28);
  }
  .talkmsg{
    width: 85%;
    margin: 0px auto;
    text-align: left;
    color: black;
    margin-left: 34px;
    font-size: 25px;
    font-weight: bold;
    display: inline-block;
    letter-spacing:2px;
  }
  .write{
    height: 100px;
    background: #d2cece;
    border-top: 2px solid gray;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
  .write input{
    width:calc(100% - 210px);
    color: gray;
    font-size: 30px;
    outline: none;
    font-weight: 500;
    border: 2px solid;
    font-family: 'Open Sans', sans-serif;
    border-radius: 25px ;
    padding-top: 15px;
    padding-left: 15px;
    position: relative;
    top: 12px;
    float: left;
    left: 55px;
  }
  .write button{
    background:#085ade;
    border-radius: 15px;
    border: 2px solid #085ade;
    color: white;
    padding: 20px 25px 16px 20px;
    position: relative;
    top: 12px;
    left: 12px;
  }
  .h label{
    font-size: 15px;
    float: right;
  }
</style>
