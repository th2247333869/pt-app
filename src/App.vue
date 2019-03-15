<template>
  <div id="app">
    <transition :name="transitionName">
    <router-view class="Home"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        transitionName:''
      }
    },
    provide(){
      return{
        goRout:this.goto
      }
    },
    watch: {//使用watch 监听$router的变化
      $route(to, from) {
        //如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if(to.meta.index > from.meta.index){
          //设置动画名称
          this.transitionName = 'slide-left';
          console.log(to.meta.index > from.meta.index)
        }else{
          this.transitionName = 'slide-right';
          console.log(to.meta.index > from.meta.index)
        }
      }
    },
    methods:{
      goto:function (router) {
        alert();
        let _this = this;
        _this.$router.push({name: router});
      }
    }
  }
</script>

<style>



#app {
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch;
  font-family: 'Microsoft JhengHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
