<template>
  <div id="Message">
    <div class="title">
      <img src="./../../../static/image/return.png" @click="goHome"/>
    </div>
    <div class="Message">
      <h1>开发者的话</h1>
      <h2>劳于读书，逸于作文。 —— 程端礼
        读书使人心明眼亮。 —— 伏尔泰
        为乐趣而读书。 —— 毛姆
        读书何所求?将以通事理。 —— 张维屏
        读书之法，在循序而渐进，熟读而精思。 —— 朱熹
        读书使人充实，讨论使人机智，笔记使人准确，读史使人明智，读诗使人灵秀，数学使人周密，科学使人深刻，伦理使人庄重，逻辑修辞使人善辩。凡有所学，皆成性格。 —— 培根
        读书时要深思多问。只读而不想，就可能人云亦云，沦为书本的奴隶；或者走马看花，所获甚微。 —— 王梓坤</h2>
    </div>
  </div>
</template>
<script>

  export  default {
    data: function(){
      return {

      }
    },
    methods:{
      goHome(){
        let _this = this;
        _this.$router.push({name:"home"});
      }

    }
  }
</script>
<style scoped>
  .title{
    width: 100%;
    height: 60px;
    position: absolute;
    top: 0px;
    background: rgba(85, 82, 102, 0.78);
  }
  .title img{
    width: 50px;
    height: 56px;
    position: absolute;
    left: 5px;
  }
  #Message{
    height:100%;
    background: url("./../../../static/image/bg4.jpg") no-repeat;
    width:100%;background-size:cover;
    -moz-background-size:100% 100%;
    overflow: hidden
  }
  .Message{
    width: 80%;
    height: 60%;
    margin: 0px auto;
    position: relative;
    border: 5px solid rgba(255, 255, 255, 0.14);
    top:20%;
  }
  .Message h1{
    font-size: 35px;
    font-weight: bold;
    color: white;
  }
  .Message h2{
    position: relative;
    top: 45px;
    text-align: left;
    font-size: 30px;
    font-weight: bold;
    line-height: 45px;
    color: white;
  }
</style>
