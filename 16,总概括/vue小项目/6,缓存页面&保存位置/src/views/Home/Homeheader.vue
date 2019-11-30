<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <p>这是个Logo</p>
      <p @click="showDrawer">
        <svg
          t="1573552277251"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2022"
          width="16"
          height="16"
        >
          <path
            d="M92 92l840 0C965.104 92 992 118.864 992 152c0 33.136-26.896 60-60 60L92 212C58.864 212 32 185.136 32 152 32 118.864 58.864 92 92 92z"
            p-id="2023"
          />
          <path
            d="M92 452l840 0c33.104 0 60 26.864 60 60 0 33.104-26.896 60-60 60L92 572C58.864 572 32 545.104 32 512 32 478.864 58.864 452 92 452z"
            p-id="2024"
          />
          <path
            d="M92 812l840 0c33.104 0 60 26.896 60 60s-26.896 60-60 60L92 932C58.864 932 32 905.104 32 872S58.864 812 92 812z"
            p-id="2025"
          />
        </svg>
      </p>
    </div>
    <!-- 抽屉 -->
    <cube-drawer
      ref="drawer"
      title="请选择"
      :data="data"
      :selected-index="selectedIndex"
      @select="selectHandler"
    ></cube-drawer>
  </div>
</template>

<script>
export default {
  props:{
     categories:{
       type:Array
     }
  },
  data() {
    return {
      selectedIndex: [],
    };
  },
  computed:{
    data(){
      let allActive = [{text:"全部电影",value:-1}];
      return this.categories.length>0 ? [[...allActive,...this.categories]]:[allActive]
    }
  },
  methods: {
    showDrawer() {
      this.$refs.drawer.show();
    },
    selectHandler(selectedVal, selectedIndex, selectedText) {
      this.$emit("change",selectedVal)//触发父中的change方法
    },
  }
};
</script>
<style lang="stylus" scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 55px;
  line-height: 55px;
  padding: 0px 20px;
  background-color: red;
}
</style>