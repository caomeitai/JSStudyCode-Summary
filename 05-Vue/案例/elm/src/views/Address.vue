<template>
  <div class="address">
    <!-- 左边的按钮默认不存在，在address组件中是存在的 -->
    <Header :isLeft="true" title="选择收货地址"></Header>
    <div class="city_search">
      <div class="search">
        <!-- 当点击城市之后转到city页面 -->
        <span class="city" @click="$router.push('/city')">
          {{city}}
          <i class="fa fa-angle-down"></i>
        </span>
        <i class="fa fa-search"></i>
        <input type="text" v-model="search_val" placeholder="小区/写字楼/学校等" />
      </div>
      <!-- 在子组件中只传递了一个参数address,和一个点击事件click -->
      <Location @click="selectAddress" :address="address" />
    </div>
    <div class="area">
        <!-- 遍历所有地址数据找到所需数据 -->
        <ul class="area_list" v-for="(item,index) in areaList" :key="index">
            <!-- li是显示地址列表，开始是地址名字，，然后是详细地址 -->
            <li @click="selectAddress(item)">
                <!-- 点击之后搜索到所需数据，并且显示出来 -->
                <h4>{{item.name}}</h4>
                <p>{{item.district}}{{item.address}}</p>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
import Location from "../components/Location";
import {nextTick} from "q";
export default {
  name: "Address",
  data() {
    return {
      // 在搜索框处有当前城市的获取
      city: "",
      search_val: "",
      areaList: []  //所有的城市地址，它是通过searchPlace这个方法完成的
    };
  },
  //   用来监听输入框中数据的变化
  watch: {
    search_val() {
      this.searchPlace();
    }
  },
  methods: {
    // 显示匹配到的所有数据
    searchPlace() {
      const self = this;
      AMap.plugin("AMap.Autocomplete", function() {
        var autoOptions = {
          city: self.city
        };
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(self.search_val, function(status, result) {
          self.areaList = result.tips;
        });
      });
    },
    // 它不仅仅实现了点击location中的数据跳转发生，还出现了点击搜索列表也会发生跳转
    selectAddress(item){
        if(item){
            // 如果搜索到相关数据，就以以下形式显示出来
            this.$store.dispatch("setAddress",item.district+item.address+item.name)
        }else{
            // 未搜索到相关数据，就显示当前地址
            this.$store.dispatch("setAddress",this.address)
        }
        // 搜索到数据显示出来，且跳转到home页面
        this.$router.push("/home")
    
    }
  },
  computed: {
    //   和绑定的地址一致，传递地址数据
    address() {
      return this.$store.getters.location.formattedAddress;
    }
  },
  components: {
    Header,
    Location
  },
  //
  beforeRouteEnter(to, from, next) {
    // console.log(to.params.city+"test");
    // next是用来放行的
    next(vm => {
      //   console.log("...")
      vm.city = to.params.city;
    });
  }
};
</script>

<style scoped>
.address {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}
.city_search {
  background-color: #fff;
  padding: 10px 20px;
  color: #333;
}
.search {
  background-color: #eee;
  height: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  line-height: 40px;
}
.search .city {
  padding: 0 10px;
}
.city i {
  margin-right: 10px;
}
.search input {
  margin-left: 5px;
  background-color: #eee;
  outline: none;
  border: none;
}
.area {
  margin-top: 16px;
  background: #fff;
}
.area li {
  border-bottom: 1px solid #eee;
  padding: 8px 16px;
  color: #aaa;
}
.area li h4 {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}
</style>