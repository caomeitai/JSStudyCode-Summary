<template>
  <div id="app">
    <!-- <Menu>
      <SubMenu>
        <template slot="title">菜单</template>
        <template #title>菜单</template>
        <MenuItem>菜单一</MenuItem>
        <MenuItem>菜单二</MenuItem>
        <template #title>菜单1</template>
        <MenuItem>
          <SubMenu>
            <template #title>菜单1-1</template>
            <MenuItem>菜单1-1-1</MenuItem>
            <MenuItem>菜单1-1-2</MenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>菜单1-2</MenuItem>
      </SubMenu>
    </Menu>-->
    <Menu>
      <!-- 为得到submenu但又不想渲染出div -->
      <!-- menu得到的是第一级的菜单1 -->
      <template v-for="(menu) in menuList">
        <MenuItem :key="menu.title" v-if="!menu.children">{{menu.title}}</MenuItem>
        <!-- 需要递归的数据里面存在children，且它是menuList中的每一项 -->
        <!-- menuItem中的除了title以外的children需要递归 -->
        <ReSubMenu :data="menu" :key="menu.title" v-else></ReSubMenu>
      </template>
    </Menu>
  </div>
</template>

<script>
import Menu from "./views/MenuComponent/Menu";
import MenuItem from "./views/MenuComponent/MenuItem";
import SubMenu from "./views/MenuComponent/SubMenu";
import ReSubMenu from "./views/MenuComponent/ReSubMenu";
export default {
  data() {
    return {
      menuList: [
        {
          title: "菜单1",
          children: [
            {
              title: "菜单1-1",
              children: [
                { title: "菜单1-1-1" },
                { title: "菜单1-1-2" },
                {
                  title: "菜单1-1-3",
                  children: [
                    { title: "菜单1-1-1" },
                    { title: "菜单1-1-2" },
                    {
                      title: "菜单1-1-3",
                      children: [
                        { title: "菜单1-1-1" },
                        { title: "菜单1-1-2" },
                        {
                          title: "菜单1-1-3",
                          children: [
                            { title: "菜单1-1-1" },
                            { title: "菜单1-1-2" },
                            { title: "菜单1-1-3" }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { title: "菜单1-2" },
            { title: "菜单1-3" }
          ]
        },
        {
          title: "菜单2"
        },
        {
          title: "菜单3"
        }
      ]
    };
  },
  components: {
    Menu,
    MenuItem,
    SubMenu,
    ReSubMenu
  }
};
</script>


