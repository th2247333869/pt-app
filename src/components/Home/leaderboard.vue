<template>
  <div id="leader">
    <div class="more" title="排行榜">
      <ul>
        <li>
          <h3  ><span class="aa1">排行榜</span></h3>
        </li>
        <li>
          <h5  ><span class="aa2">排行榜信息默认展示每月被关注最多的用户，您也可以在个人设置中根据您的喜好设置排行榜中所显示的用户和您感兴趣的技术</span></h5>
        </li>
      </ul>
      <button>更多</button>
    </div>
    <div class="leadList">
            <!--排序前四@由于兼容性问题 3/4的顺序和排列顺序相反-->
            <div class="listNum n1">
              <div class="first"><img src="/static/image/first.png"></div>
              <ul class="mesg">
                <li><img src="/static/image/boys.png"></li>
                <li><span class="name">张益达</span></li>
                <li><span class="gzd">关注度：5000+</span></li>
                <li>
                  <span class="juti">
                    今日更新文章：JAVA基础：浏览器记录：8000+
                    JAVA进阶：浏览器记录：8000+
                  </span>
                </li>
              </ul>
              <button>详情</button>
            </div>

            <div class="listNum n2">
              <div class="first"><img src="/static/image/second.png"></div>
              <ul class="mesg">
                <li><img src="/static/image/boys.png"></li>
                <li><span class="name">张益达</span></li>
                <li><span class="gzd">关注度：5000+</span></li>
                <li>
                  <span class="juti">
                    今日更新文章：JAVA基础：浏览器记录：8000+
                    JAVA进阶：浏览器记录：8000+
                  </span>
                </li>
              </ul>
              <button>详情</button>
            </div>

            <div class="listNum n3">
              <ul class="mesg">
                <li><img src="/static/image/boys.png"></li>
                <li><span class="name">暂无</span></li>
                <li><span class="gzd"></span></li>
                <li>
                  <span class="juti">

                  </span>
                </li>
              </ul>
              <button>详情</button>
            </div>

            <div class="listNum n4">
              <div class="first"><img src="/static/image/threed.png"></div>
              <ul class="mesg">
                <li><img src="/static/image/boys.png"></li>
                <li><span class="name">张益达</span></li>
                <li><span class="gzd">关注度：5000+</span></li>
                <li><span class="juti">每日更新文章：JAVA基础：浏览器记录：8000+</span></li>
              </ul>
              <button>详情</button>
            </div>
    </div>
    <div class="stla">
    </div>
  </div>
</template>
<script>

  export default {

    created(){

    },

  }

</script>
<style scoped>
  .more{
    position: relative;
    top: 15px;
    width: 80%;
    height: 85px;
    margin: 0px auto;
    background: rgba(128, 128, 128, 0.19);
    box-shadow: 0 3px 0px 0px rgba(167, 166, 166, 0.77), -2px 9px 20px -2px rgba(125, 122, 121, 0.77);
  }
  .aa1{
    color:#717171;
    font-size: 20px;
  }
  .aa2{
    font-size: 13px;
    color: rgba(109, 111, 110, 0.52);
  }
  .more h5,h3{
    padding: 10px;
    margin-left: 10px;
    text-align:left;
  }

  .more button{
    position: relative;
    /* right: 5px; */
    float: right;
    right: 60px;
    top: -55px;
    background-color: rgba(210, 75, 27, 0.77); /* Green */
    border: none;
    color: white;
    padding: 10px 50px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius:5px ;
    box-shadow: 0 3px 0px 0px rgba(210, 75, 27, 0.77), -2px 9px 20px -2px rgba(210, 75, 27, 0.77);
  }
  .more button:hover{
    background-color: rgb(208, 124, 55); /* Green */
    box-shadow: 0 3px 0px 0px rgb(208, 124, 55), -2px 9px 20px -2px rgb(208, 124, 55);
  }
  .leadList{
    width: 80%;
    height: 325px;
    margin: 0px auto;
    margin-top: 35px;
  }
  .listNum{
    background: white;
    border-radius: 8px;
    width:20%;
    height: 265px;
    float: left;
    margin-top: 35px;
  }
  .n1{
    float: left;
  }
  .n2{
    float: left;
    margin-left:6%;
  }
  .n4{
    float: right;
    margin-right: 5%;
  }
  .n3{
    float: right;
  }
  .name{
    font-size: 15px;
    font-weight: bold;
  }
  .gzd{
    font-size: 15px;
  }
  .listNum ul li{
    margin-top: 8px;
  }
  .first{
    position: absolute;
    margin-left: -27px;
    margin-top: -25px;
  }
  .leadList button{
    position: relative;
    background-color: rgba(210, 75, 27, 0.77); /* Green */
    border: none;
    color: white;
    bottom: -20px;
    padding: 11px 28px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius:5px ;
    box-shadow: 0 3px 0px 0px rgba(210, 75, 27, 0.77), -2px 9px 20px -2px rgba(210, 75, 27, 0.77);
  }
  .mesg{
  height: 215px;
  }
  .stla{
    width: 100%;
    position: relative;
    height: 10px;
    bottom: -95px;
    background-image : url(/static/image/stla.png);background-repeat : repeat-x;
  }
</style>
