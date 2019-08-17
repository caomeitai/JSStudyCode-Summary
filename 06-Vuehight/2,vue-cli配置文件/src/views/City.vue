<template>
  <div class="city">
    <div class="search_wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <!-- 最后会使用到输入框中的内容  city_val-->
        <input type="text" placeholder="输入城市名" v-model="city_val" />
      </div>
      <button @click="$router.push({name:'address',params:{city:city}})">取消</button>
    </div>
    <div style="height:100%" v-if="searchList.length==0">
      <div class="location">
        <!-- 传递参数address通过计算属性city来拿数据 -->
        <Location @click="selectCity({name:city})" :address="city" />
      </div>

      <Alphabet @selectCity="selectCity" ref="allcity" :cityInfo="cityInfo" :keys="keys" />
    </div>
    <div class="search_list" v-else>
        <ul>
            <li @click="selectCity(item)" v-for="(item,index) in searchList" :key="index">{{item.name}}</li>
        </ul>
    </div>
  </div>
</template>
<script>
import Location from "../components/Location";
import Alphabet from "../components/Alphabet";
export default {
  name: "city",
  data() {
    return {
      city_val: "",  //城市的名称的一些值
      cityInfo: null,  //A-z所有城市数据再加上热门城市数据
      keys: [],//里面放的A-Z
      allCities: [],
      searchList: []
    };
  },
  computed: {
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    }
  },
  //   为获取所有城市
  created() {
    this.getCityInfo();
  },
  watch:{
      city_val(){
          this.searchCity();
      }
  },
  methods: {
    // 只要进到city页面就获取所有城市数据
    getCityInfo() {
      //   请求去拿到数据
      this.$axios("/api/posts/cities").then(res => {
        //   请求成功之后得到的所有数据
        console.log(res);//A-z所有城市数据再加上热门城市数据还有其它数据
        this.cityInfo = res.data;//A-z所有城市数据再加上热门城市数据
        //   处理key, 计算key
        // Object.keys用来遍历数组，返回一个数组
        // 找到cityInfo里面A-Z放到keys中
        this.keys = Object.keys(res.data);
        // 将热门城市的key删掉,pop删除的都是最后一个元素
        this.keys.pop();
        // 将剩余城市，对key进行排序使其从A-Z排列
        this.keys.sort();
        // 当页面中所有的dom元素渲染完后
        this.$nextTick(()=>{
            this.$refs.allcity.initScroll();
        });
        // 存储所有城市，用来搜索过滤
        this.keys.forEach(key=>{
            this.cityInfo[key].forEach(city=>{
                this.allCities.push(city);
            });
        });
      })
        .catch(err=>{
            console.log(err);
        })
    },
    // 这个点击事件是代表着选择热门城市，或者其他所有城市中的任意一个都会发生跳转页面
    selectCity(city){
        this.$router.push({name:"address",params:{city:city.name}})
    },
    searchCity(){
        if(!this.city_val){
            // 如果搜索框为空，数组置空
            this.searchList = [];
        }else{
            // 根据输入框的关键字检索城市  并存入到searchList数组中
            this.searchList = this.allCities.filter(item=>{
                return item.name.indexOf(this.city_val) != -1;
            });
        }
    }
  },
  components: {
    Location,
    Alphabet
  }
};
</script>


<style scoped>
.city {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}
.search_wrap {
  position: fixed;
  top: 0;
  height: 45px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 3px 16px;
  display: flex;
  justify-content: space-between;
}
.search {
  background-color: #eee;
  border-radius: 10px;
  line-height: 40px;
  width: 85%;
  box-sizing: border-box;
  padding: 0 16px;
}
.search input {
  background: #eee;
  outline: none;
  border: none;
  margin-left: 5px;
}
.search_wrap button {
  outline: none;
  color: #009eef;
}

.location {
  background: #fff;
  padding: 8px 16px;
  height: 65px;
  box-sizing: border-box;
}

.search_list {
  background: #fff;
  padding: 5px 16px;
}
.search_list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>
