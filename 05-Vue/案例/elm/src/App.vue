<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  // 勾子函数，直接调用的
  created() {
    // 在钩子函数中直接调用了精确获取定位的方法
    this.getLocation();
  },
  methods: {
    // 使用这些代码获取精确定位
    getLocation() {
      // 用来存放this的指向
      const self = this;
      // 通过这样的改写函数，函数this指向发生了改变
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);
        function onComplete(data) {
          // 最终目的不是为了打印地址，而是将其存储到vuex当中
          console.log(data)  // data是具体的定位信息
          // console.log(this)  //this指向变啦
          // 通过actions使用异步（dispatch）,在actions中拿到数据，存放到vuex中
          self.$store.dispatch("setLocation",data); //拿到具体的地址信息
          self.$store.dispatch("setAddress",data.formattedAddress); //拿到具体的地址信息 
        }
        function onError(data) {
        //  console.log(data)   // 定位出现错误
        self.getLngLatLocation();
          
        }
      });
    }
  }
};
</script>


