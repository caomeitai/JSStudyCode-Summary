<template>
  <div class="search">
    <Header :isLeft="true" title="搜索" />
    <div class="search_header">
      <div class="search_wrap">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="输入商家 商品信息" v-model="key_word" />
        <button @click="searchHandle">搜索</button>
      </div>
    </div>
    <!-- 首先判断到的根据关键字有商铺信息 -->
    <div class="shop" v-if="result&&!showShop">
      <!-- 当关键词搜索不到数据时 -->
      <div class="empty_wrap" v-if="empty">
        <img src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt />
        <div class="empty_txt">
          <h4>附近没有搜索结果</h4>
          <span>换个关键词试试吧</span>
        </div>
      </div>
      <!-- 当根据关键词搜索到数据时 -->
      <div v-else>
        <!-- 商铺显示可分为两大部分，商铺，关键字 -->
        <SearchIndex :data="result.restaurants" @click="$router.push('/shop')"/>
        <SearchIndex :data="result.words" @click="shopItemClick" />
      </div>
    </div>
    <!-- 在搜索框下，点击商品信息，出来的详情,它是根据有无商铺相关内容来实现的 -->
    <div class="container" v-if="showShop">
      <!-- 导航 -->
      <FilterView :filterData="filterData" @update="update" />
      <div class="shoplist" :infinite-scroll-disabled="loading" v-infinite-scroll="loadMore">
        <IndexShop v-for="(item,index) in restaurants" :key="index" :restaurant="item.restaurant" />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
import SearchIndex from "../components/SearchIndex";
// 在这里显示的搜索内容显示与之前首页时一样
import FilterView from "../components/FilterView";
import IndexShop from "../components/IndexShop";
// 后面用到滑动
import { infiniteScroll } from "mint-ui";

export default {
  data() {
    return {
      // input框输入的关键字
      key_word: "",
      result: null,
      showShop: false, //默认不显示商铺
      empty: false,
      filterData: null,
      restaurants: [],
      page: 0, //当前页为几页
      size: 7, //一页有几条内容
      loading: false, //不会自动加载
      data: null
    };
  },
  watch: {
    //   想要监听谁，谁就是一个函数
    key_word() {
      // 优化代码，因为此时在搜索完一项没有数据的信息之后，再搜索有数据的内容也显示不出来啦
      this.empty = false;
      // 此时在搜索完一项有数据的信息之后，再搜索没有数据的内容也显示出来啦
      this.showShop = false;
      //   监视关键字的改变
      this.keyWordChange();
    }
  },
  // 通过creatd函数来去获取数据，渲染出来
  created() {
    this.$axios("/api/profile/filter").then(res => {
      console.log(res.data);
      this.filterData = res.data;
    });
  },
  methods: {
    shopItemClick() {
      // ？？？
      this.page = 0;
      this.restaurants = [];
      // 当点击商家列表时显示相关信息
      this.showShop = true;
    },
    searchHandle() {
      // 点击搜索，如果有结果跳转，没结果return结束程序
      if (!this.key_word) return;
      if (
        (this.result && this.result.restaurants.length > 0) ||
        this.result.words.length > 0
      ) {
        console.log("有相关商店的内容");
        this.shopItemClick(); //有先关信息就可点击信息啦，就是也可通过列表信息里的内容来显示详情内容
      } else {
        // 反正此时在搜索完一项没有数据的信息之后，再搜索有数据的内容也显示不出来啦
        this.empty = true; //没有数据，使得显示不见的图片
      }
    },
    keyWordChange() {
      //   console.log(this.key_word);
      // 目的是根据关键字来获取相关数据
      this.$axios(`/api/profile/typeahead/${this.key_word}`)
        .then(res => {
          console.log(res.data); //  restaurants: Array(4), words: Array(8)
          // 将根据关键字的得到的所有数据放在result数组中
          this.result = res.data;
        })
        .catch(err => {
          this.result = null; //未得到数据就为空
        });
    },
    loadMore() {
      this.page++;
      this.$axios
        .post(`/api/profile/restaurants/${this.page}/${this.size}`, this.data)
        .then(res => {
          if (res.data.length > 0) {
            res.data.forEach(item => {
              this.restaurants.push(item);
            });
          } else {
            this.loading = true;
          }
        });
    },
    // 带有条件的数据更新
    update(condition) {
      // console.log(condition);
      this.data = condition;
      this.shopItemClick();
    }
  },
  components: {
    Header,
    SearchIndex,
    FilterView,
    IndexShop
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.search_header {
  margin-top: 45px;
  background: #fff;
  padding: 0 4.266667vw;
}
.search_header .search_wrap {
  padding: 2.933333vw 2.933333vw 2.933333vw 0;
  display: flex;
  align-items: center;
  position: relative;
}
.search_wrap .fa-search {
  width: 2.933333vw;
  height: 2.933333vw;
  color: #888;
  position: absolute;
  top: 4.6666666vw;
  left: 2.933333vw;
}
.search_wrap input {
  flex-grow: 1;
  border-radius: 0.266667vw;
  background-color: #f8f8f8;
  padding: 1.733333vw 4vw 1.733333vw 8.8vw;
  color: #666;
  outline: none;
  border: none;
}
.search_wrap button {
  outline: none;
  border: none;
  color: #333;
  font-size: 0.426667rem;
  background: #fff;
  font-weight: 700;
  margin-left: 2.933333vw;
  font-size: 14px;
}

.shop {
  width: 100%;
  height: calc(100% - 95px);
  overflow: auto;
}

.empty_wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
  display: flex;
  justify-content: center;
}
.empty_wrap img {
  width: 35vw;
  height: 35vw;
}
.empty_txt h4 {
  color: #666;
  font-size: 1rem;
  margin: 12vw 0 2vw 0;
}
.empty_txt span {
  color: #999;
  font-size: 0.8rem;
}
</style>


