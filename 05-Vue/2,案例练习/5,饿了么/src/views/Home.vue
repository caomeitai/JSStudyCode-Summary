<template>
  <div class="home">
    <div class="header">
      <!-- 获取真实地址以后在点击地址会跳转到address界面 -->
      <!-- 因为传递了address路由，原本直接推到address，现在使用params -->
      <!-- 哪一行代码name代表着要推到的路由界面，后面是传递过来的参数 -->
      <div class="address_map" @click="$router.push({name:'address',params:{city:city}})">
        <i class="fa fa-map-marker"></i>
        <!-- 需要得到真实的收货地址 -->
        <span>{{address}}</span>
        <i class="fa fa-sort-desc"></i>
      </div>
    </div>
    <!-- 显示蒙版时搜索框是否会提到最上面 -->
    <div class="search_wrap" :class="{'fixedview':showFilter}" @click="$router.push('/search')">
      <div class="shop_search" >
        <i class="fa fa-search"></i>
        搜索商家 商家名称
      </div>
    </div>
    <div id="container">
      <!-- 轮播图 -->
      <mt-swipe :auto="4000" class="swiper">
        <!-- 轮播图图片地址就是data中的swipeImgs数组的每一项数据 -->
        <mt-swipe-item v-for="(img,index) in swipeImgs" :key="index">
          <img :src="img" alt />
        </mt-swipe-item>
      </mt-swipe>
      <!-- 食品入口 -->
      <mt-swipe :auto="0" class="entries">
        <!-- 入口进行了双层遍历，第一层得到每一大张图片，第二层得到每大张图片中的小图片 -->
        <mt-swipe-item v-for="(entry,i) in entries" :key="i" class="entry_wrap">
          <!-- 每一张小图片的div样式 -->
          <div class="foodentry" v-for="(item,index) in entry" :key="index">
            <div class="img_wrap">
              <!-- 仅仅放了一张图片，图片地址 -->
              <img :src="item.image" alt />
            </div>
            <!-- 美食名字 -->
            <span>{{item.name}}</span>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 推荐商家 -->
    <div class="shoplist-title">推荐商家</div>
    <!-- 排序导航 -->
    <FilterView :filterData="filterData" @searchFixed="showFilterview" @update="update" />
    <!--商家信息  -->
    <!--auto-fill是否自动加载完毕-->
    <mt-loadmore
      :top-method="loadData"
      :bottom-method="loadMore"
      :bottom-all-loaded="allLoaded"
      :auto-fill="false"
      :bottomPullText="bottomPullText"
      ref="loadmore"
    >
      <div class="shoplist">
        <!-- 在商家信息列表中只传递了商家名来进行遍历得到具体信息 -->
        <!-- restaurant绑定数据，在这边则传过来的是遍历得到的每一项中的restaurant -->
        <IndexShop v-for="(item,index) in restaurants" :key="index" :restaurant="item.restaurant" />
      </div>
    </mt-loadmore>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Loadmore } from "mint-ui";
import FilterView from "../components/FilterView";
import IndexShop from "../components/IndexShop";
export default {
  name: "home",
  data() {
    return {
      swipeImgs: [], // 轮播图图片数据
      entries: [], // 食品分类相关数据
      filterData: null, //排序导航所有数据,它是一个对象，使用null来表示空
      showFilter: false, //点击导航，搜索框是否向上提到顶部
      page: 1,//第几页
      size: 5,//一页显示多少条
      restaurants: [], //用来存放商家信息
      allLoaded: false, //默认不会将所有信息加载出来
      bottomPullText: "上拉加载更多",//上拉时显示文字提醒
      data: null  //条件为空
    };
  },
  components: {
    FilterView,
    IndexShop
  },
  //   为得到真正的收货地址使用计算属性
  computed: {
    // 去getters中拿到真实地址
    address() {
      return this.$store.getters.address;
    },
    //   从这里将地址获取传到address
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    }
  },
  created() {
    this.getData();
    this.loadData();
  },
  methods: {
    getData() {
      // 得到轮播图数据
      this.$axios("/api/profile/shopping").then(res => {
        // 得到数据，将一堆数据打印出来
        // console.log(res);  //轮播图所有相关数据
        console.log(res.data); //轮播图图片数据和入口数据
        this.swipeImgs = res.data.swipeImgs; //轮播图数据
        this.entries = res.data.entries; //入口数据
      });
      // 得到排序导航数据
      this.$axios("/api/profile/filter").then(res => {
        // console.log(res);
        console.log(res.data); //排序导航的数据信息
        this.filterData = res.data;
      });
    },
    loadData() {
      this.page = 1; //当前页为第一页
      this.allLoaded = false; //不允许一下子全部加载完毕
      this.bottomPullText = "上拉加载更多";
      // 获取商家信息
      // 使用别人的接口获取这么本页的这么多条信息
      this.$axios
        // 只有在上拉加载，下拉刷新时才传递数据，在加载时要带着相关条件
        .post(`/api/profile/restaurants/${this.page}/${this.size}`, this.data)
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.$refs.loadmore.onTopLoaded(); //下拉刷新的方法
          this.restaurants = res.data; //传递到到上面空数组
        });
    },
    loadMore() {
      // 上滑加载更多方法
      if(!this.allLoaded){
        // 数据还没有加载完，每请求一次数据就page加一
        this.page++;
        this.$axios
          .post(`/api/profile/restaurants/${this.page}/${this.size}`)
          .then(res => {
          // 加载完之后得到后面的数据，再重新渲染
          this.$refs.loadmore.onBottomLoaded(); //上滑加载更多
          // 后端数据也是有限的，需要去判断
          if (res.data.length > 0) {
            //判断数据长度大于0表示还有数据，还可加载
            // 将数据进行遍历后都推到restaurants中渲染出来
            res.data.forEach(item => {
              // 将遍历到的数据全部扔到容器里面
              this.restaurants.push(item);
            });
            if (res.data.length < this.size) {
              // 剩余内容不足显示整个页面
              this.allLoaded = true; //将完全加载显示为true，使数据加载完全
              this.bottomPullText = "没有更多啦"; //在加载完成后有这样的提醒
            }
          } else {
            // 在没有数据时，数据为空
            this.allLoaded = true;
            this.bottomPullText = "没有更多咯";
          }
        });
      }
    },
    // 搜索框是否上提了
    showFilterview(isShow) {
      this.showFilter = isShow;
    },
    // 数据更新需要condation来区分判断
    update(condition) {
      // 每次请求数据都要带着条件
      this.data = condation;
      // 加载数据的条件
      this.loadData();
    }
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.header,
.search_wrap {
  background-color: #009eef;
  padding: 10px 16px;
}
.header .address_map {
  color: #fff;
  font-weight: bold;
}
.address_map i {
  margin: 0 3px;
  font-size: 18px;
}
.address_map span {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.search_wrap .shop_search {
  /* margin-top: 10px; */
  background-color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  text-align: center;
  color: #aaa;
}

.search_wrap {
  position: sticky;
  top: 0px;
  z-index: 999;
  box-sizing: border-box;
}
.swiper {
  height: 100px;
}
.swiper img {
  width: 100%;
  height: 100px;
}

.entries {
  background: #fff;
  height: 47.2vw;
  text-align: center;
  overflow: hidden;
}
.foodentry {
  width: 20%;
  float: left;
  position: relative;
  margin-top: 2.933333vw;
}
.foodentry .img_wrap {
  position: relative;
  display: inline-block;
  width: 12vw;
  height: 12vw;
}
.img_wrap img {
  width: 100%;
  height: 100%;
}
.foodentry span {
  display: block;
  color: #666;
  font-size: 0.32rem;
}
/* 推荐商家 */
.shoplist-title {
  display: flex;
  align-items: flex;
  justify-content: center;
  height: 9.6vw;
  line-height: 9.6vw;
  font-size: 16px;
  color: #333;
  background: #fff;
}
.shoplist-title:after,
.shoplist-title:before {
  display: block;
  content: "一";
  width: 5.333333vw;
  height: 0.266667vw;
  color: #999;
}
.shoplist-title:before {
  margin-right: 3.466667vw;
}
.shoplist-title:after {
  margin-left: 3.466667vw;
}

.fixedview {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 999;
}

.mint-loadmore {
  height: calc(100% - 95px);
  overflow: auto;
}
</style>

