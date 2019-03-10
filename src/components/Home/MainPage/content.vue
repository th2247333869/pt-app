<template>
  <div id="content" v-loading="loading" element-loading-text="上传中 请稍后......"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(48, 49, 69, 0.89)">
    <div class="head">
      <div class="return" @click="returnBack()">
        <img src="./../../../../static/image/img2/return1.png">
      </div>
      <div class="fabu" @click="fabu()">
        发布
      </div>
    </div>
    <div class="bo">
      <textarea v-on:input ="inputFunc" :style="tstyle" ref="tx" v-model="text">

      </textarea>
      <div class="choose">选择话题</div>
    </div>
    <!--<div class="but" >
      <div class="img" @onclick="getImg()">
        <input type="file"  accept="image/jpg,image/gif">
      </div>
    </div>-->
  </div>
</template>
<script>

  import store from '../../../vuex'

  export  default {
    data() {
      return {
        tstyle:{height:'250px'},
        loading:false,
        text:'',
      }
    },
    methods:{
      inputFunc:function () {
        let _this = this;
        _this.tstyle.height = _this.$refs.tx.scrollHeight+'px';
      },
      getImg:function () {
      },
      returnBack:function () {
        let _this = this;
        _this.$router.back(-1);
      },
      fabu:function () {
        let uucode = store.state.userinformation.uucode;


        let url = this.HOST;
        let _this = this;

        _this.loading = true;
        this.axios.post(url+'/addContentProvider', {
          data: {
            uucode: uucode,
            content: _this.text
          },
        })
          .then(function (response) {
            if(response.data == "1"){//成功
              _this.loading = false;
              alert("发布成功");
            }else{
              _this.loading = false;
              alert("发布失败");
            }
          })
          .catch(function (error) {
            _this.loading = false;
            alert("发布失败");
          });
      }
    }
  }

</script>
<style scoped>
  #content{
    position: relative;
    width: 100%;
    height:100%;
    background: white;
    overflow-y: auto;
  }
  .head{
    position: relative;
    width: 100%;
    height: 89px;
    background: rgba(229, 228, 228, 0.8);
  }
  .bo{
    position: relative;
    width: 100%;
    padding: 25px;
  }
  .bo textarea{

    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 222, 255, 0.58);
    border-radius: 15px;
    font-size: 30px;
    color: black;
    outline: none;
    min-height: 250px;
    overflow-y:hidden;
    overflow-x: hidden;
    word-break:break-all;
  }
  .choose{
    width: 150px;
    height: 45px;
    border-radius: 25px ;
    background: #3a8ee6;
    color: white;
    line-height: 45px;
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
    right: 15px;
    top: 15px;
    width: 65px;
    height: 65px;
    line-height: 65px;
    color: #3a8ee6;
    font-size: 25px;
    font-weight: bold;
  }
</style>
