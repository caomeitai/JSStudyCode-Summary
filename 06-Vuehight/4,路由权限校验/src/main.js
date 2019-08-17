import Vue from 'vue'
import App from './App.vue'
// 如若找不到router-view的话就在这里引进router即可
import router from './router'
// 这里已经引入了store,注入路径
import store from './store/index'

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.css"

// 这个钩子生命周期最大,在这里来判断是否有访问权限
router.beforeEach((to,from,next)=>{
   console.log(to)//可以知道对应页面的meta权限
//   //  some返回的是true或false,只要有一个满足条件的即可就是true
//   // match表示判断每一项数组中必须有权限且权限是xxx的打印出来
  let flag= to.matched.some(match=>match.meta && match.meta.needLogin)//如果满足条件返回的是true
  // console.log(flag)
  let isLogin = localStorage.getItem('login');
  if(flag){//需要校验权限，需要进行验证
    // let isLogin = localStorage.getItem('login');
    if(isLogin){//代表存在login登录标识
      if(to.name=='login'){//如果存在登录标识但进入了登录界面
        next('/');//放行到首页面即可
      }else{//进入到的不是登录的界面
        next();//放行到相应界面
      }
    }else{
      next('/login');//需要有权限校验，但没有登录标识，转入到登陆界面去登陆
    }
  }else if(to.name == 'login'){//其他不需要验证的页面想要访问登录界面
    // 去判断是否存在登录标识
    if(isLogin){
      next('/');
    }else{
      next();
    }
  }else{
    next()
  } 
})
  




// 创建vue实例，使得仓库注入
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

