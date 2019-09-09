<template>
  <div class="home">
    <button @click="f">正在热映</button>
    <!-- 得到的item是一个对象 -->
    <li class="moive" v-for="(item) in msg" :key="item.id">
        <!-- item.poster拿到的是海报的地址，正好图片地址附上去 -->
      <img :src="item.poster" alt />
      <div class="content">
        <h4>{{item.name}}</h4>
        <p>观众评分{{item.grade}}</p>
        <span>主演：</span><span v-for="(value) in item.actors" :key="value.id" >{{value.name}}</span>
        <p>{{item.nation}} |{{item.runtime}}分钟</p>
      </div>
    </li>
  </div>
</template>
<script>
import axios from "axios";
import { constants } from "crypto";
export default {
  data() {
    return {
      msg: "" //这里得到的是一个数组
    };
  },
  methods: {
    f() {
      axios
        .get(
          "https://www.easy-mock.com/mock/5d3f9aae6c9e4650824b9d2f/fegf/fgrg"
        )
        .then(res => {
          // console.log(res.data.data.films)  //得到的是大数组
          this.msg = res.data.data.films.map(item => item);
          
        });
    }
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
.moive {
  width: 300px;
  height: 94px;
  padding: 15px 15px 15px 0px;
  margin-left: 12px;
  display: flex;
}
.content {
  margin-left: 12px;
}
img {
  display: block;
  width: 66px;
  height: 91px;
}
h4 {
  height: 22px;
  font-weight: normal;
  font-size: 16px;
  color: #191a1b;
}
p,
span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 3px;
  font-size: 13px;
  color: #797d82;
}
span{margin-right: 5px;}
</style>


