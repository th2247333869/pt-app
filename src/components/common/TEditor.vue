<template>
  <div id="editor">
      <div class="ltmb">
        <div v-for="(item,index) in items">
          <div v-if="item.code == 0"  style="text-align:left;position:relative;left: 0px; width: 100%;height: 45px;border: 1px solid black;">{{item.message}}</div>
          <div v-else style="text-align:right;position:relative;right: 0px; width: 100%;height: 45px;border: 1px solid black;">{{item.message}}</div>
        </div>

      </div>
      <div class="cz">

      </div>
      <input type="text" v-model="shorts"/>
      <button @click="go">发送</button>
    </div>
</template>
<script>
  export  default {
    data:function () {
      return{
        items:[],
        shorts:'',
        others:''
      }
    },
    methods:{
      go:function () {

        //发送请求
        var _this = this;
        var url = this.HOST;
//
        _this.items.push(
          {message:_this.shorts,code:0}
        );
        this.axios({
          url:url+"/test/chat",
          method:'post',
          data:{shorts: _this.shorts}
        })
          .then(function(res){
            _this.items.push(
              {message:res.data,code:1}
            );
            console.log(_this.items)
          })
          .catch(function(err){
            console.log(err);
          })
      },
    }
  }
</script>
<style scoped>
  #editor{
    width: 100%;
    height: 100%;
    border: 1px solid white;
    margin: 0px auto;
    position: relative;
  }

  .ltmb{
    width: 100%;
    height: calc(100% - 240px );
    color: black;
    font-size: 35px;
  }
  .cz{
    width: 100%;
    height: 120px;
  }


  .con{
    width: 100%;
    height: 85px;
    background: white;
    position: relative;
    top: 0px;
  }
  .critical{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .cc{
    position: relative;
    width: 100%;
    height: 450px;
    background: #5b5a5a;
    border-bottom: 3px solid white;
  }
  .Learn{
    background: url("./../../../static/image/Learn.jpg") no-repeat;
    width:100%;background-size:cover;
    -moz-background-size:100% 100%;
    overflow: hidden
  }
  .Work{
    background: url("./../../../static/image/Work.jpg") no-repeat;
    width:100%;background-size:cover;
    -moz-background-size:100% 100%;
    overflow: hidden
  }
  .Life{
    background: url("./../../../static/image/Life.jpg") no-repeat;
    width:100%;background-size:cover;
    -moz-background-size:100% 100%;
    overflow: hidden
  }
  .Friends{
    background: url("./../../../static/image/Friend.jpg") no-repeat;
    width:100%;background-size:cover;
    -moz-background-size:100% 100%;
    overflow: hidden
  }
</style>
