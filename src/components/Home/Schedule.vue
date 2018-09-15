<template>
  <div id="Schedule">
      <div class="slogan">
          <ul>
          <li>
            <h3  ><span class="aaa1">你的价值在哪？</span></h3>
          </li>
          <li>
            <h5  ><span class="aaa2">凡事预则立，不预则废。制定自己的学习计划，并执行下去。这就是你的价值</span></h5>
          </li>
        </ul>
      </div>
    <div class="Gschedule">
      <div class="mysch">
        <div class="card"></div>
        <div class="goto">

          <ul>
            <li>
              <a href="#"><span class="txt">制定你的专属学习计划</span></a>
            </li>
            <li>
              <a href="#"><span class="txt">制定你的专属学习计划</span></a>
            </li>
          </ul>
      </div>

      </div>

      <div class="otherssch">
        <div class="card"></div>
        <div class="goto">

          <ul>
            <li>
              <a href="#"><span class="txt">制定你的专属学习计划</span></a>
            </li>
            <li>
              <a href="#"><span class="txt">制定你的专属学习计划</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="otherssch1">
      </div>
    </div>
  </div>
</template>
<style scoped>
  .slogan{
    width: 85%;
    height: 125px;
    margin: 0px auto;
    line-height: 70px;
  }
  .aaa1{
    color: #f34608;
    font-size: 40px;
    font-weight: bold;
  }
  .aaa2{
    font-size: 12px;
    color: rgba(109, 111, 110, 0.52);
  }
  .Gschedule{
    margin: 0px auto;
    width: 85%;
    height: 488px;
  }
  .Gschedule div{
    float: left;
  }
  .mysch{
    background:url("http://blazrobar.com/wp-content/uploads/2015/05/Web-design-inspiration-two.jpg")no-repeat;
    background-size:100% 100%;
    height: 488px;
    width: 28%;
  }
  .card:hover{
    background-color: #dc4225;
    background-size:100% 100%;
    opacity: .2;
    background-image:linear-gradient(135deg,  rgba(0, 0, 0, 0.97), #000000);
    box-shadow: 0 8px 7px 4px rgb(181, 181, 181), -2px 9px 20px -2px rgb(184, 207, 216);
  }
  .card{
    background-color: #dc4225;
    background-image: linear-gradient(135deg,  #8fc6e0, #7d7777);
    background-size:100% 100%;
    opacity: .3;
    width: 100%;
    height: 488px;
  }
  .otherssch{
    background:url("http://blazrobar.com/wp-content/uploads/2013/06/Free-PSD-Templates_0.jpg")no-repeat;
    background-size:100% 100%;
    width: 28%;
    height: 488px;
    margin-left: 15px;
  }
  .mysch img{
    width: 100%;
    height: 480px;
  }
  .goto{
    position: absolute;
    margin-top: 250px;
    margin-left: 10px;
  }
  .txt{
    font-weight: bold;
    font-size: 18px;
    color: white;
  }
</style>
