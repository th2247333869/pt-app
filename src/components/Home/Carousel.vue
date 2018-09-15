<template>
  <div>
    <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
      <div class="slideshow">
        <ul>
          <transition-group tag="ul" name="image">
          <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
            <a href="#">
              <img :src='img' style="width: 100%;">
            </a>
          </li>
          </transition-group>
        </ul>
      </div>

    </div>
    <div class="bar">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }" :key="index"></span>
    </div>
  </div>
</template>
<script>



  export default {
    data () {
      return {
        mark: 0, //比对图片索引的变量
        imgArray: [
          ' /static/image/fj1.jpg',
          '/static/image/fj2.jpg',
          '/static/image/fj3.jpg',
        ]
      }
    },
    methods: {
      autoPlay () {
        this.mark++;
        if (this.mark === 3) { //当遍历到最后一张图片置零
          this.mark = 0
        }
      },
      play () {
        setInterval(this.autoPlay, 2500)
      },
      change (i) {
        this.mark = i
      }
    },
    stop () {
      clearInterval(this.timer)
    },
    move () {
      this.timer = setInterval(this.autoPlay, 2500)
    },
    created () {
      this.play()
    }
  }
</script>


<style>
  * {
    list-style: none;
  }
  .slide {
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 100%;
    height: 380px;
  }
  .slideshow li {
    position: absolute;
  }
  .slideshow img {
    width: 100%;
    height: 380px;
  }
  .bar {
    position: absolute;
    width: 100%;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }
  .bar span {
    width: 50px;
    height: 4px;
    background: #c4c4c4;
    display: inline-block;
    margin-right: 10px
  }
  .active {
    background: #e3810a !important;
  }

  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
</style>
