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
          {{item.name}}
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
          {src:'./../../../static/image/img2/usa.jpg'},
          {src:'./../../../static/image/img2/huoying.jpg'}
        ],
        contents:[
          {name:'我的喵'},
          {name:'我的喵'},
          {name:'我的喵'},{name:'我的喵'},
          {name:'我的喵'},
          {name:'我的喵'},
          {name:'我的喵'},
          {name:'我的喵'},
          {name:'我的喵'},
        ]
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
    width: 100%;
    border-bottom: 1px solid gray;
    box-shadow: 1px 1px 1px #888888;
  }
</style>
