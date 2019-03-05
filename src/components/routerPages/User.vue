<template>
  <div id="UserSeting">
    <div class="head">

    </div>
  </div>
</template>
<script>

  export  default {
    data() {
      return {
        user:{
          name:'defult',
          uucode:'defult',
          position:'defult',
        },
        tabStyle:{height:'0px',visibility:'hidden'},
        temStyle:{width:'100%',display:'none'},
        settingItems:[
          {text:'我的信息'},
          {text:'我的信息'},
          {text:'我的信息'},
        ],
        modelItems:[],
      }
    },
    created(){
      let _this = this;
      //获取初始用户信息
      /*_this.user = _this.$route.query.userinformation;
      console.log( _this.$route.query.models);
      _this.modelItems = _this.$route.query.models;*/
    },
    inject:['goUserSeting'],
    computed: {
    },
    methods:{
      silder:function () {
        let _this = this;
        if(_this.tabStyle.visibility != 'hidden'){
          /*_this.settingItems = [];*/
          _this.tabStyle = {height:'0px',visibility:'hidden'}
        }else{
          _this.tabStyle = {height:'150px',visibility:'visible'}
        }
      },
      close:function () {
        let _this = this;
        _this.tabStyle = {width:'0px',display:'display'}
      }
    },
  }

</script>
<style scoped>

  #UserSeting{
    height:100%;
    background: url("./../../../static/image/bgtest.png") no-repeat;
    width:100%;background-size:cover;
    -moz-background-size:100% 100%;
    overflow: hidden
  }
  .head{
    position: relative;
    width: 100%;
    height: 250px;
    background: #0bd38a;
  }
  .center{
    position: relative;
    width: 100%;
    height: 58%;
    background:white;
  }
  .bottom{
    height: 95px;
    background: white;
    width: 100%;
    position: absolute;
    bottom: 0px;
  }
  .but{
    width: 32.5%;
    height: 100%;
    font-size: 15px;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align:top;
    display: inline-block;
  }
  .but img{
    vertical-align:middle;
    height: 65px;
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
    height: 100%;
    margin-top: 5px;
  }
  .mbmm{
    float: left;
    border: 1px solid;
    width: 22.5%;
    height: 25.3%;
    font-size: 15px;
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align:top;
    display: inline-block;
    border-radius: 12px;
    background: -webkit-gradient(linear, 0% 20%, 0% 92%, from(#fff), to(#f3f3f3), color-stop(.1,#fff));
    border: 1px solid #ccc;
    -webkit-border-radius: 60px 5px;
    -webkit-box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.1) inset;
    margin-top: 20px;
    margin-left: 2%;
  }
  .mbmm:before{
    content:'';
    -webkit-border-bottom-right-radius: 30px;
    -webkit-box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.3);
    -webkit-transform:
      rotate(-20deg)
      skew(-40deg,-3deg)
      translate(-13px,-13px);
  }
  .mbmm:after{
    content: '';
    z-index: -1;
    background: rgba(0, 0, 0, 0.2);
    display: inline-block;
    -webkit-box-shadow: 20px 20px 8px rgba(0, 0, 0, 0.2);
    -webkit-transform: rotate(0deg)
    translate(-45px,-20px)
    skew(20deg);
  }
  .setting{
    position: absolute;
    top:9%;
    left: 20px;
    width: 52px;
    height: 52px;
    background: url("./../../../static/image/seticon.png") no-repeat;
    background-size:cover;
    -moz-background-size:100% 100%;
  }
  .ling{
    position: absolute;
    top:9%;
    right: 20px;
    width: 52px;
    height: 52px;
    background: url("./../../../static/image/tx.png") no-repeat;
    background-size:cover;
    -moz-background-size:100% 100%;
  }
  .red{
    background: red;
    position: relative;
    left:20px;
    top:-5px;
    border-radius: 20px;
    width: 30px;
    height: 30px;
  }
  .red span{
    color: white;
    font-size: 15px;
  }
  div.tab
  {
    width: 200px;
    position: absolute;top: 9%; left: 20px;
    background: white;
    border-radius: 5px 5px 5px 5px;

    transition:all  1s;
    -moz-transition:all  1s; /* Firefox 4 */
    -webkit-transition:all  1s; /* Safari and Chrome */
    -o-transition:all  1s; /* Opera */
  }
  .tab tabMenu{
    color: gray;
    width: 100%;
  }
  .tabMenu a{
    color: white;
  }
  .close{
    border: 1px solid white;
    width: 55px;
    height: 55px;
    border-radius: 30px;
    left: 50%;
    position: absolute;
    bottom: 40px;
    background: url("./../../../static/image/close.png");
    background-size: 100% 100%;
  }
  .mbmm img{
    height: 60%;
    position: relative;
    margin: 0px auto;
  }
  .mbmm a{
    color: #5b5a5a;
  }
  .tsmin{
    position: relative;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%,-50%);
    text-align: center;
  }
</style>
