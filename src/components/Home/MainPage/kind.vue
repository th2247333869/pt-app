<template>
  <div id="kind">
    <div class="head">
      <div class="fabu">
        话题
      </div>
      <div class="return">
        <img src="./../../../../static/image/img2/return1.png" @click="returnBack">
      </div>

    </div>
    <div class="kindleft">
      <ul>
        <li :class="{active:0==ins}" @click="active(0)">推荐</li>
        <li :class="{active:1==ins}" @click="active(1)">学习</li>
        <li :class="{active:2==ins}" @click="active(2)">搞笑</li>
        <li :class="{active:3==ins}" @click="active(3)">娱乐</li>
        <li :class="{active:4==ins}" @click="active(4)">生活</li>
      </ul>
    </div>
    <div class="kindright">
      <ul>
        <template v-for="item in items">

          <li @click="goFabu(item.name)">
            <img style="width: 80px;height: 80px;" src="./../../../../static/image/img2/gaixiao1.jpg">
            {{item.name}}
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        ins: 0,
        items:[{name:1},{name:2},{name:3},{name:4}]
      }
    },
    methods:{
      returnBack:function () {
        let _this = this;
        _this.$router.back(-1);
      },
      active (num) {
        let _this = this;
        _this.ins=num;
        if(_this.ins == 1){
          _this.items = [{name:'q'},{name:'w'},{name:'r'},{name:'e'}];
        }
        if(_this.ins == 0){
          _this.items = [{name:1},{name:2},{name:3},{name:4}];
        }

      },
      goFabu:function (name) {
        let _this = this;
        _this.$router.push({
          name:'content',
          query:{
            kind:name,
          }
        })
      }
    }
  }

</script>
<style scoped>
  #kind{
    width: 100%;
    height: 100%;
    position: relative;
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
    line-height: 65px;
    color: #3a8ee6;
    font-size: 25px;
    font-weight: bold;
  }
  .kindleft{
    width: 155px;
    height: 100%;
    float: left;
    background: #rgba(234, 237, 239, 0.9);
  }
  .kindleft ul li{
    padding: 25px;
    font-size: 25px;
    font-weight: bold;
    color: black;
  }
  .kindright{
    width: calc(100% - 155px);
    height: 100%;
    float: left;
    background: white;
  }
  .kindright ul li{
    width: 95%;
    margin: 0px auto;
    border-bottom: 2px solid rgba(183, 180, 180, 0.5);
    padding: 15px;
    font-size: 25px;
    font-weight: bold;
    color: gray;
  }
  .active{
    background: white;
  }
</style>
