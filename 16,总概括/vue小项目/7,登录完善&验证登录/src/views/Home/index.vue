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
  activated(){
    let position = sessionStorage.getItem("position")||0
    this.$refs.list.$el.scrollTop = position//将仓库中数据赋给列表高度
  },
  methods: {
    //多个actions时，是在一个数组中
    ...mapActions([types.SET_CATEGORY, types.SET_SLIDES]),
    ...mapMutations([types.SET_CURRENT_MOVIE]),
    // 头部菜单点击时会触发
    change(value) {
      // console.log(value)
      this[types.SET_CURRENT_MOVIE](value[0]);
      this.hasMore = true; //点击菜单时，把hasMore置为true
      this.offsetIndex = 0; //当点击菜单时，将偏移量重新置为0
      this.$refs.list.reset(); // 清空列表
    },
    // 获取电影数据
    async onAjax() {
      if (this.hasMore) {
        let { result, hasMore } = await ajaxMovieList(
          this.size,
          this.offsetIndex
        );
        this.hasMore = hasMore; 
        this.offsetIndex = this.offsetIndex + result.length;
        return result;
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

       
    // 防抖  需要通过定时器
    let timer;   
    this.$refs.list.$el.addEventListener("scroll",(e)=>{
      // 在滚动列表之前，先清空一下timer
      if(timer){
        clearTimeout(timer)
      }
      timer = setTimeout(()=>{
        // 保存位置到临时仓库
        sessionStorage.setItem("position",e.target.scrollTop)
      },75)
    })
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