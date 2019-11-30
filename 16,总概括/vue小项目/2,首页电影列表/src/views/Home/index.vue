<template>
  <div id="home">
    <!-- 头部 -->
    <Homeheader :categories="categories" @change="change"></Homeheader>
    <!-- 轮播图 -->
    <div class="home-slide">
      <cube-slide :data="slides" />
    </div>
    <!-- 电影列表 -->
    <div class="home-wrapper">
      <cube-recycle-list class="list" ref="list" :size="size" :offset="offset" :on-fetch="onAjax">
        <template slot="item" slot-scope="{ data }">
          <div :id="data.id" class="item">
            <!-- {{data}} -->
            <h2>{{data.title}}</h2>
            <img :src="data.pic" alt />
            <p>{{data.info}}</p>
          </div>
        </template>
      </cube-recycle-list>
    </div>
    <!-- {{movieList}} -->
  </div>
</template>

<script>
import Homeheader from "../Home/Homeheader";
import { ajaxMovieList } from "../../api/home";
import * as types from "../../store/action-types.js";
import { createNamespacedHelpers } from "vuex";
let { mapActions, mapState, mapMutations } = createNamespacedHelpers("home");

export default {
  // 放在data中的数据会被检测到，如果不想被侦测，那么可以写在created中
  data() {
    return {
      size: 3,
      offset: 100
      // movieList:[]
    };
  },
  created() {
    // 在这里定义的数据不会被侦测到
    this.offsetIndex = 0;
    this.hasMore = true;
  },
  methods: {
    //多个actions时，是在一个数组中
    ...mapActions([types.SET_CATEGORY, types.SET_SLIDES]),
    ...mapMutations([types.SET_CURRENT_MOVIE]),
    // 头部菜单点击时会触发
    change(value) {
      // console.log(value)
      this[types.SET_CURRENT_MOVIE](value[0]);
	  //每每点击菜单时，都会将之前数据清空后，重新请求数据
      this.hasMore = true; //点击菜单时，把hasMore置为true
      this.offsetIndex = 0; //当点击菜单时，将偏移量重新置为0
      this.$refs.list.reset(); // 清空列表，在得到第二页数据时，其第一页的数据会被清空
    },
    // 获取电影数据
    async onAjax() {
      // 判断是否还有数据，是否还需要请求数据
      if (this.hasMore) {
        //  请求数据时接口需要带上参数
        let { result, hasMore } = await ajaxMovieList(
          this.size,
          this.offsetIndex
        );
        // console.log(result)
        this.hasMore = hasMore; //使用获取到的数据将初始化数据代替
        this.offsetIndex = this.offsetIndex + result.length;
        // console.log(this.offsetIndex);
        return result;
        // this.movieList = result;
      } else {
        return false;
      }
    }
  },
  computed: {
    ...mapState(["categories", "slides"])
  },
  mounted() {
    this[types.SET_CATEGORY](); //调用actions方法
    this[types.SET_SLIDES]();
  },
  components: {
    Homeheader
  }
};
</script>

<style lang="stylus" >
.cube-slide-item {
  width: 100%;
  height: 150px;
}
.home {
  &-wrapper {
    height calc(100vh - 300px)
    .item {
      h2 {
        font-size: 24px;
        font-weight: bolder;
        text-align: center;
      }

      p {
        font-size: 20px;
        text-align: center;
      }
    }
  }
}
</style>