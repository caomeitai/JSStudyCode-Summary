<template>
  <!-- 实现蒙板，加了个盒子，绑上的类开控制蒙板的现示与否 -->
  <div :class="{'open':isSort||isScreen}" @click.self="hideView">
    <!-- 完成排序导航 -->
    <div v-if="filterData" class="filter_wrap">
      <aside class="filter">
        <!-- 
            1，v-for需要将导航所需数据进行双向数据绑定
            2，绑上一个类，当点击导航时字体变粗，判断是否点击的根据索引
            3，有一个@click点击事件，当点击导航时会出现字体变粗的现象
        -->
        <div
          class="filter-nav"
          v-for="(item,index) in filterData.navTab"
          :key="index"
          :class="{'filter-bold':currentFilter == index}"
          @click="filterSort(index)"
        >
          <!-- 下面这是导航真正需要的格式 -->
          <span>{{item.name}}</span>
          <i v-if="item.icon" :class="'fa fa-'+item.icon"></i>
        </div>
      </aside>
    </div>
    <!-- 选择排序条件 -->
    <!-- 排序条件是根据蒙版的现示而现示的，绑定蒙版 -->
    <section class="filter-extend" v-if="isSort">
      <!-- 综合排序排序条件列表 -->
      <ul>
        <!-- 综合排序排序条件是遍历的sortBy,拿到排序条件的项 -->
        <li v-for="(item,index) in filterData.sortBy" :key="index" @click="selectSort(item,index)">
          <!-- 相应的排序条件按照索引来显示 -->
          <span :class="{'selectName':currentSort == index}">{{item.name}}</span>
          <i v-show="currentSort == index" class="fa fa-check"></i>
        </li>
      </ul>
    </section>
    <!-- 筛选 -->
    <!-- v-if绑定来确定点击时判断有无蒙版 -->
    <section class="filter-extend" v-if="isScreen">
      <div class="filter-sort">
        <!-- 对于筛选中的数据进行嵌套遍历，第一遍得到三大块，第二遍得到每一块中的小块 -->
        <div class="morefilter" v-for="(screen,index) in filterData.screenBy" :key="index">
          <p class="title">{{screen.title}}</p>
          <ul>
            <!-- class类绑定，通过select属性，判断它是否被点击选中,没被选中就是false，选中就是true -->
            <li
              v-for="(item,i) in screen.data"
              :key="i"
              :class="{'selected':item.select}"
              @click="selectScreen(item,screen)"
            >
              <img v-if="item.icon" :src="item.icon" alt />
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="morefilter-btn">
        <span @click="clearFilter" class="morefilter-clear" :class="{'edit':edit}">清空</span>
        <span @click="fliterOk" class="morefilter-ok">确定</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "filterview",
  //   就是在点击导航出现蒙板时，和字体是否变粗都需要用到当前数据索引的感觉
  data() {
    return {
      currentFilter: 0,
      currentSort: 0,
      isSort: false, //综合排序的蒙版
      isScreen: false //筛选的蒙版
    };
  },
  props: {
    //导航中所需接收到的数据
    filterData: Object
  },
  computed: {
    edit() {
      //   最初始时按钮为false
      let edit = false;
      //   按钮这里要遍历的数据是整个screenBy
      this.filterData.screenBy.forEach(screen => {
        screen.data.forEach(item => {
          //   遍历出来每一小项中的有关点击与否的属性
          if (item.select) {
            //代表已被点击
            edit = true;
          }
        });
      }); //整个遍历结束，返回结果
      return edit;
    }
  },
  methods: {
    // 点击导航时是否变粗还与索引有关
    filterSort(index) {
      this.currentFilter = index;
      //   当索引为0或者是为3时，才会有蒙板
      switch (index) {
        case 0:
          this.isSort = true; //仅仅去让蒙板出现
          this.$emit("searchFixed", true); //在点击相应导航时搜索框上提
          break;
        case 1:
          this.$emit("update", {
            //传递的参数,这里仅仅是距离最近这个导航
            condition: this.filterData.navTab[1].condition
          });
          // 每每数据更新就会有默认蒙版不显示
          this.hideView();
          break;
        case 2:
          this.$emit("update", {
            //传递的参数,这里仅仅是品质联盟这个导航
            condition: this.filterData.navTab[2].condition
          });
          //   每每数据更新就会有默认蒙版不显示
          this.hideView();
          break;
        case 3:
          this.isScreen = true; //当点击筛选，出现蒙版
          this.isSort = false; //默认没有蒙版
          this.$emit("searchFixed", true);
          break;
        default:
          // 默认其它导航是没有蒙版的
          this.hideView();
          break;
      }
    },
    // 点击蒙版，蒙版消失，搜索框下来
    hideView() {
      this.isSort = false;
      this.isScreen = false;
      this.$emit("searchFixed", false);
    },
    // 排序条件点击之后与导航上的索引相对应显示出来，它会用到排序条件与索引
    selectSort(item, index) {
      this.currentSort = index; //将排序条件的索引给当前点击的导航索引
      // 将排序条件点击之后对应的内容，直接赋给首个导航的内容
      this.filterData.navTab[0].name = this.filterData.sortBy[index].name;
      // 赋完值的同时蒙版消失
      this.hideView(); //默认的蒙版是消失没有的
      // 将数据进行更新,仅仅限制在综合排序的这个导航上，每个条件都是不一样的，通过condition来判断
      // console.log(item.code);  //condition不一样
      this.$emit("update", { condition: item.code });
    },
    // 点击筛选的事件,遍历时是需要item即screen
    selectScreen(item, screen) {
      // 选择条件不同，id来判断
      if (screen.id !== "MPI") {
        // 单选,将三大块中的每一块都进行遍历
        screen.data.forEach(ele => {
          ele.select = false; //默认在没有点击时是false的
        });
      }
      // 不管是多选还是单选，只要点击，那么select就会变true
      item.select = !item.select;
    },
    // 使用清空按钮将选择的数据清空
    clearFilter() {
      this.filterData.screenBy.forEach(screen => {
        screen.data.forEach(item => {
          item.select = false;
        });
      });
    },
    // 确定好已选择的数据
    fliterOk() {
      let screenData = {
        // 根据不同数据的id来判断
        MPI: "",
        offer: "",
        per: ""
      };
      // 因为对于多选的模块，每一项的选择可能要进行拼接
      let mpiStr = "";
      this.filterData.screenBy.forEach(screen => {
        screen.data.forEach((item,index) => {
          if (item.select) {
            //表明项被选择
            //  虽然被选择，但会分为两种：单选，多选
            if (screen.id !== "MPI") {
              //单选
              screenData[screen.id] = item.code; //表明这是为per或者说offer的id的项
            }
          } else {
            mpiStr += item.code + ",";
            screenData[screen.id] = mpiStr;
          }
        });
        console.log(mpiStr)
        this.$emit("update",{condition:screenData});
        this.hideView();
      });
    }
  }
};
</script>
<style scoped>
.filter_wrap {
  background: #fff;
  position: sticky;
  top: 54px;
  z-index: 10;
}
.filter {
  position: relative;
  border-bottom: 1px solid #ddd;
  line-height: 10.4vw;
  z-index: 101;
  height: 10.666667vw;
  display: flex;
  justify-content: space-around;
}
.filter-nav {
  flex: 1;
  text-align: center;
  color: #666;
  font-size: 0.8333rem;
}
.filter-nav i {
  width: 1.6vw;
  height: 0.8vw;
  margin-left: 1.333333vw;
  margin-bottom: 0.533333vw;
  fill: #333;
  will-change: transform;
}

.filter-bold {
  font-weight: 600;
  color: #333;
}

.open {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  z-index: 3;
}

.filter-extend {
  background-color: #fff;
  color: #333;
  padding-top: 2.133333vw;
  position: absolute;
  width: 100%;
  z-index: 4;
  left: 0;
  top: 24.533333vw;
}
.filter-extend li {
  position: relative;
  padding-left: 5.333333vw;
  line-height: 10.666667vw;
  overflow: hidden;
}
.fa-check {
  float: right;
  color: #009eef;
  margin-right: 3.733333vw;
  line-height: 10.666667vw;
}

.selectName {
  color: #009eef;
}
/* 筛选 */
.filter-sort {
  background: #fff;
  padding: 0 2.666667vw;
  line-height: normal;
}
.morefilter {
  margin: 2.666667vw 0;
  overflow: hidden;
}
.morefilter .title {
  margin-bottom: 2vw;
  color: #666;
  font-size: 0.5rem;
}
.morefilter ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.morefilter li {
  box-sizing: border-box;
  width: 30%;
  height: 9.333333vw;
  line-height: 9.333333vw;
  margin: 0.8vw 1%;
  background: #fafafa;
}
.morefilter li img {
  width: 3.466667vw;
  height: 3.466667vw;
  vertical-align: middle;
  margin-right: 0.8vw;
}
.morefilter li span {
  margin-left: 2%;
  vertical-align: middle;
}

.morefilter-btn {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fafafa;
  box-shadow: 0 -0.266667vw 0.533333vw 0 #ededed;
  line-height: 11.466667vw;
  box-sizing: border-box;
}
.morefilter-btn span {
  font-size: 0.826667rem;
  text-align: center;
  text-decoration: none;
  flex: 1;
}
.morefilter-clear {
  color: #ddd;
  background: #fff;
}
.morefilter-ok {
  color: #fff;
  background: #00d762;
  border: 0.133333vw solid #00d762;
}

.selected {
  color: #3190e8 !important;
  background-color: #edf5ff !important;
}

.edit {
  color: #333 !important;
}
</style>
