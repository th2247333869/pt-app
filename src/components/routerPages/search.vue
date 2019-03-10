<template>
  <div id="Search">
    <div class="headbg">
    </div>
    <div class="userimg">
      <img src="./../../../static/image/huge.jpg">
    </div>
    <div>

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
    touch-action: pan-y;
    -webkit-overflow-scrolling: touch;
    height:100%;
    width:100%;background-size:cover;
    -moz-background-size:100% 100%;
    overflow: hidden
  }
  .headbg{
    width: 100%;
    height: 450px;
    background: url("./../../../static/image/img2/city_night.jpg");
    border-radius: 0px 0px 185px 185px;
  }
  .userimg{
    top:350px;
    width: 165px;
    height: 165px;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
  .userimg img{
    width: 100%;
    height: 100%;
    border-radius: 185px;
    border: 5px solid white;
  }
</style>
