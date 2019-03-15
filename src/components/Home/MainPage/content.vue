<template>
  <div id="content" v-loading="loading" element-loading-text="上传中 请稍后......"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(48, 49, 69, 0.89)">
    <div class="head">
      <div class="return" @click="returnBack()">
        <img src="./../../../../static/image/img2/return1.png">
      </div>
      <div class="fabu" @click="getFile()">
        发布
      </div>
    </div>
    <div class="bo">
      <textarea v-on:input ="inputFunc" :style="tstyle" ref="tx" v-model="text"></textarea>
      <!--<img :src="imgSrc" style="width: 150px;height: 150px;">-->
      <div class="chooseo"><div class="choose" @click="openKind()">{{kind}}</div></div>
      <div class="dynamic-video-image">
        <div class="t" style="float: left;" :style="pimgshow">
          <img  class="showimg"  style="border-radius: 15px;border: 4px solid white" :src="imgSrc">
        </div>
        <div class="t" style="float: left;margin-left: 25px;"><a href="javascript:void(0)" class="up-file">
          <input type="file" accept="image/*"  ref="new_image" capture="camera" @change="galleryImg()">
        </a>
        </div>
      </div>
    </div>
    <!--<div class="but" >
      <div class="img" @onclick="getImg()">
        <input type="file"  accept="image/jpg,image/gif">
      </div>
    </div>-->

    <div class="kind">
    </div>
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
        kind:'选择话题',
        videoImageData:[],
        imgSrc:'',//展示的图片路径
        pimgshow:{display:'none'}
      }
    },
    created(){
      if(this.$route.query.kind !=null&&this.$route.query.kind!=""){
        this.kind = this.$route.query.kind;
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
      /*fabu:function () {
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
      },*/
      openKind:function () {
        let _this = this;
        _this.$router.push({
          name:'kind',
        })
      },

      // 从相册中选取图片

      galleryImg(){
        let This=this;
        console.log("从相册中选择图片:");
        var url = URL.createObjectURL(This.$refs.new_image.files[0]);
        This.pimgshow = {display:'block'};
        This.imgSrc = url;
      },
      getFile:function () {
          let uucode = store.state.userinformation.uucode;
          let self = this;
          let url = self.HOST;
          self.loading = true;

          console.log(self.$refs.new_image.files[0]);
            var formData = new FormData()
            formData.append('image_data', self.$refs.new_image.files[0]);
            if(self.$refs.new_image.files[0].size>0){
              formData.append('name',self.$refs.new_image.files[0].name);
            }else{
              formData.append('name',"");
            }
            formData.append('uucode',uucode);
            formData.append('content',self.text);
            //单个文件进行上传
            self.axios.post(url+'/addImage',
              formData,
              {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }).then(response => {
              console.log(response.data);
              if(response.data == 1){
                self.loading = false;
                self.$router.back(-1);
                alert("上传成功");
              }
            }).catch(response => {
              self.loading = false;
              alert("上传失败");
            })
      },

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
    height: 55px;
    border-radius: 25px ;
    background: #3a8ee6;
    color: white;
    line-height: 55px;
    float: left;
    font-size: 23px;
    margin-top: 10px;
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
  .dynamic-video-image{
    width: 100%;
    height: 240px;
    float: left;
    margin-top: 10px;
  }
  .pimg{
    width: 100%;
    height: 350px;
    float: left;
  }
  .pimg img{
    float: left;
    width: 250px;
    height: 100%;
  }
  .up-file {
    float: left;
         padding: 4px 10px;
         height: 240px;
         width: 240px;
         text-align: center;
         line-height: 40px;
         position: relative;
         cursor: pointer;
         color: #FFFFFF;
          border: 3px dashed #ddd;
         border-radius: 4px;
      overflow: hidden;
      display: inline-block;
         *display: inline;
         *zoom: 1;
    border-radius: 25px;
    background: url("./../../../../static/image/img2/add.png");
    background-size: auto 75px;
    background-repeat: no-repeat;
    background-position: center center;
     }
   .up-file input {
            width: 100%;
            height: 100%;
            position: absolute;
            font-size: 100px;
            right: 0;
            top: 0;
            opacity: 0;
            cursor: pointer;
  }
  .chooseo{
    width: 100%;
    float: left;
    position: relative;
    left: 0px;
  }
  .showimg{
    width: 100%;
    height: 100%;
  }
  .t{
    width: 250px;
    height: 250px;
  }
</style>
