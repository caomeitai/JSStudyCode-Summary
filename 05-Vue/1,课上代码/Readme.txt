1,vue是一套构建用户界面的渐进式框架
    构建用户界面：画页面
    渐进式：最核心功能单一，只关注视图，生态好（vue技术栈（全家桶））
    全家桶：vue.js  es6  vue-router   vuex   webpack ....
2，Vue.js的核心采用是一个允许采用简洁的模板语法来声明式地将数据渲染进DOM的系统
   HTML代码：
      <div id="app">
      // {{}}这是插值表达式
          {{message}}
      </div>
   JS代码：
     var app = new Vue({
         //el指定app管理的边界
          el: '#app',
         // 在app中data是一个属性写上键值对，是一个对象   在后面讲的组件中data是一个方法，是函数
          data: {
            message: 'Hello Vue!'
         }
      })
3,vue指令：
         在vue中，以v-打头，指令写在开始标签里面。
  （1）数据绑定相关指令：
       v-text:直接把数据渲染出来，有Html标签也不会解析，不能绑html标签，相当于插值表达式   {{}}存在于标签中间
       v-html:数据绑定就是当你的属性上存在html标签，可以解析html标签
       v-model:实现双向数据绑定
        MVVM：
        M model  数据模型  data
        V View   视图  
        VM  ViewModel  视图模型
  （2）和属性相关指令：
       v-bind:用于绑定html标签中的属性  v-bind:href="数据"   简写： :href = "数据"
  （3）条件指令：
       v-if:用来控制一个元素是否显示；
       v-show:用来控制元素是否显示；通过display:none，display：block来控制是否隐藏 
             v-show=""后面可以写表达式，表达式会自动判断是true还是false；0 -0 "" 全部都会转成false，1会转成true
       v-if-else:v-if与v-else是紧挨着的，指令之间不能有其他元素
       v-else-if:v-if,v-else-if,v-else
  （4）循环指令：
       v-for：  基本格式：在开始标签中写  v-for="(value,key,index) in 循环的东西（数组，对象，整数）"
       对于数组：第一个参数是代表组中的值；第二个参数是数组值的索引；它的第三个参数没有意义。
                当数组中全部是对象时，要想拿到其对应的属性，就得使用value.属性名来拿到
       对于对象：第一个参数是代表属性值（对象中的value）；第二个参数是属性名（对象中的key）；它的第三个参数代表的是索引。
       对于整数：第一个参数是代表组中的值；第二个参数是数组值的索引；它的第三个参数没有意义。
4，两个特殊的属性：class与style
  （1）class
      1)：class="数据" ---->数据指的是存在于data中的值
      2)：class="三元运算符"
      3)：class="{类名：boolean}" ---->通过boolean来判断类名是否存在
      4)：class="{类名1：boolean,类名2：boolean}"  ---->通过boolean来判断类名是否存在
      5)  类名中有-这样的特殊符号，则需要使用引号将其类名包起来
          ：class="{'含-的类名'：true}"
      6) ：class="['类名']"--->将类名通过引号将其以数组的格式包起来
  （2）style
     在最开始的行内样式中，是通过style:"color:red",现在则通过v-bind来绑定属性，并且他在写样式时应会利用大驼峰命名，将-换成大写字母
     ：style="数据（写的是要显示的样式）"
	 
	 小知识点：
	 1，在想要拿到标签时，可通过document.getElementsByTagName拿到一个伪数组，它不能进行forEach循环；
	 可使用document.querySelectorAll拿到数组形式
	 2，想要拿到标签里面的内容的话，可使用innerHTML来获取


--------------------------------方法methods
--------------------------------计算属性computed（依赖于数据来使用）
计算属性与方法区别：
  1，他们本质都是函数，都可将：和function去掉，进行简写；
  2，用的时候，方法要调用，加上()，计算属性当成数据直接使用{{}}便可显示出来效果
  3，方法没有缓存,每当调用一次就打印一次，且有返回值；计算属性有缓存，它依赖于data中的内容，只要data中数据不发生变化，执行时，其中要打印的内容只会打印一次，但它也是有返回值的
  4，计算属性是依赖于data中的数据而存在的，当data中的内容未发生变化时，计算属性不会调用（存在着缓存）
  5，能使用计算属性就不要使用方法
  6，当计算属性与方法的名字一样时，会调用方法，而非计算属性
  
7，过滤器：
  定义格式：
filters:{
  1,fixed(data){return toFixed(保留的数据小数个数)  //这个是无参数传递的，仅仅来传过来数据
  2,fixed(data,n){return toFixed(保留的数据小数个数) //这是存在参数的传递，n代表着要保留的小数位数
  3,insertBefore(data){return "特殊符号"+data}
  4,insertBefore(data,s){return s+data}
}
调用格式：
   1,{{pi | fixed}} //无参数过滤器
   2,{{pi | fixed1(2)}}  //参数过滤器后面小括号里传的是实参
   3,{{pi|insertBefore}}  //无参数添加特殊符号过滤器
   4,{{pi|fixed|insertBefore1("%")}}//参数添加特殊符号过滤器
   5,{{pi|fixed|insertBefore}}同时调用两个过滤器
  
------------------------------------------------------------------------------------------------------------------------------
自己学习网页的渲染原理，diff，虚拟DOM（对象）
1，除了vue以外还有react(中)与Angular(高)
   vue:
     特征1：指令系统
     特征2：组件化
     特征3：模块化
     特征4：工程化
     特征5：全栈化

2，vue实例的配置项：
   el:必选的，vue实例管理的边界
   data:数据模型
   methods:方法
   computed:计算属性
   filters:过滤器
   components:组件
   勾子函数：vue的生命周期函数（不需要我们自己调用，要合适的时机，vue会自动调用）

3，事件模型
（1）事件三要素：事件源，事件类型，监听器
     v-on:处理事件  使用格式：v-on:事件类型
（2）事件类型
     鼠标事件：click,dblclick,mouseover,mouseout,mouseenter,mouseleave,mousedown,mousemove,mouseup
     键盘事件：keydown,keyup,keypress
     UI事件：  scroll,resize,load,unload
     焦点事件：focus, blur
     表单事件：change,submit
（3）事件处理函数：
     1)把事件处理函数写在标签中  <span v-on:click="isShow = !isShow">{{isShow ? "收起":"展开"}}</span>
     2)把事件处理函数写在方法中  常规写法
     3)传字面量  v-on:click="f1('world')"
     4)传变量  <button v-for="(value,key,index) in 3" v-on:click="f2(value)">按钮{{value}}</button>
（4）事件对象：当事件发生时，事件对象中保存了很多信息，比如点击的坐标
     $event（事件对象） 固定的名字  
      （1）阻止默认事件：在相应的标签上绑定一个事件，传递对象事件（$event）这个参数,而相应函数则是对应参数上的方法比如：abc.preventDefault().
          <a href="http://www.baidu.com">百度</a>  a标签有的所谓的默认事件
		  在对象事件上绑定一个preventDefault()用来阻止默认事件
      （2）阻止事件冒泡：它是大盒子套个小盒子，点击大的时，小盒子没事，点击小盒子时，大盒子也发生事件
           <div class="father">
               <div class="son">
               </div>
           </div>        
		 在对象事件上绑定一个stopPropagation()用来阻止默认事件
         在子标签上绑定一个事件，传递对象事件（$event）这个参数,而相应函数则是对应参数上的方法比如：abc.stopPropagation().
         事件默认情况下会传播，可以从里向外传播，也可以从外向里传播。
         如果是从里向外传播--->事件冒泡机制
（5）事件修饰符：
    （1）之前阻止默认事件的写法：
         e.preventDefaut()  
         <a href="javascript:void(0)"></a>
    （2）vue中通过修饰符的写法：
         @click.prevent="f1"
（6）常用修饰符：
     stop  阻止冒泡;只需给子元素的标签的调用函数@click上加上.stop即可
     prevent 阻止默认事件;只需给对应的标签的调用函数@click上加上.prevent即可
     capture（需要给相应的都加上capture）  冒泡改捕获（从外向里）;
     self  只处理发生在自己身上的事件，不理会冒泡或捕获
         self写在谁身上，谁就不会触发
     once  只执行一次，它也是放在谁身上谁就执行一次
如若想要同时使用多个修饰符直接在后面接上.修饰符即可
（6）按键修饰符：
    keyCode

表单的处理（form,input,select,option）
  绑定普通文本框
  绑定单选框  在二选一的时候，name属性要注意；在绑定数据时，要求v-model且必须要带上value值才可将其进行双向数据绑定
  绑定复选框  进行双向数据绑定都是要求携带value属性的；存在多个复选框时要求下面data中存在一个数组，用来存放value值
  绑定下拉菜单
单标签上面是不能使用v-for的
在循环单标签时，可使用template这个特殊标签，它不会被渲染出来

写一个todolist
1，组件：表面来说，组件就是标签。
  根组件：vm    let vm = new Vue()    后面我们定义的所有的组件都是vm的子组件

2，分类：全局组件和局部组件
  （1）全局组件：
     利用Vue的静态方法component()定义一个全局组件，有一个属性叫template
     在所有的vue实例中都可以使用
     全局注册：
        Vue.component("my-head",{temxxxxx})
     局部注册：在components：{}中写函数
  （2）局部组件：只能在它规定的那个vue实例中使用

3，使用组件的一个基本流程：（之前学习的组件都是定义与注册合并在一块的）
   第一步：定义一个组件对象，组件对象就是普通的对象，只不过里面有个template属性，也就是说，只要是一个对象中有template标签就是一个组件
   第二步: 注册组件：它存在于compontents中
   第三步：使用组件：就直接在视图中使用OK

4，使用组件时注意细节
 （1）组件中的三个名字：
     1）定义组件对象的名字  MyHeader   这个名字写法没有要求
     2）注册组件时的名字  （但一般好像不能使用全部大写）MyHeader  也没有要求   一般和定义组件对象的名字保持一致
     3）使用组件时的名字   只能使用小写  使用组件的名字中不能大写字母，注册时给你写了一个大驼峰命名，使用时需要把在驼峰转化中划线命名
       MyHeader  定义名 
       MyHeader  注册名 
       my-header 使用名 
 （2） 在template中必须有一个唯一的根标签不能出现这样的情况"<div>somthing</div><h1><h1>"，并且它里面不可使用template标签
     当存在多个根标签或者说里面内容较多时，可另外写到<template></template>外面去，然后通过id标签，再通过#id引进来

5，完整组件： 除了根组件之外，后面子组件数据都是data函数,并且要return一个对象，数据放对象中（去看组件之间的通信代码）
6，组件之间是可以通信（数据的传递），默认情况下数据不能在父与子之间共享。
     父子组件之间的数据传递：父传子；子传父 
     （1）父传子： 父中有数据，传递给子
          1，确定父中有数据
          2，在父组件的模板（app视图上）中通过属性绑定把数据绑到子组件上
          3，在子组件中定义props属性，用来接收父传递过来的数据
          4，在子组件的模板就可以使用接收过来的数据了
       父绑定数据 v-bind:XX="xx"-->:XX=xx   子接收数据props来接收XX，在这里面定义接收数据类型  
    
	（2）子传父：
          1，在父组件模板中，给子组件添加一个事件监听  (@submitmsg="addmsg")  addmsg是父组件中的函数
          2，在子组件中，它存在一个点击事件，该事件会通过this.$emit发射出一个函数，发射出的函数submitmsg会触发父组件中的addmsg函数；
		     子组件发射函数的同时可以携带数据
          3，当父中的方法触发，数据作用这个方法的第一个参数

    在子组件中注册一个事件，通过this.$emit来发射一个事件，在发射事件时可以携带参数；
	当事件发射时，父组件会监听该事件，该事件也会触发父组件中的事件 



Vue中的脚手架：快速搭建项目的结构
单文件组件：一个文件就是一个组件
想要是用别人的项目，需要npm install来安装所有依赖才OK

1，脚手架
   1，使用脚手架之前
     1，要使用npm，那么你在电脑上需要安装node.js查看电脑上是否安装Node，如下：
       输入 node -v  ---> 出来版本号，node安装成功（里面自动安装npm，用来下载第三方模块）
     2，通过npm i nrm -g 表示安装一个nrm的模块，安装完可以使用nrm ls命令，来查看下载源
     3，切换下载源：nrm use taobao --->把下载源切换到国内淘宝
     4，vue --version--->得到版本号，表示脚手架安装成功
   2，脚手架使用 
     1，全局安装脚手架工具：npm i -g @vue/cli
     2，创建项目：vue create myproject
     3，第一次选择第二个，然后Babel,Router,Vuex，然后y，然后选择第二个配置文件，然后n

2，路由
     使用vue-router模块  安装依赖：npm i vue-router
     一个url对应一个页面，根据不同的路由可以渲染出来不同页面

3，路由案例
     存放组件的地方：一个是components（通用级别的组件），一个是views（页面级别的组件）
     主页 ---> Home组件
     发现页--> Find组件
     设置页--> Setting组件

4，路由     
  1，基本路由
    1，创建组件（看看是页面组件还是通用组件）
    2，在router.js中设置匹配路由
    3，在App.vue根组件中使用router-view来放路由匹配的组件  
    4，使用router-link通过点击实现配置路由，代替了a标签
  2，嵌套路由
    1，首先看在哪里创建组件
    2，在router.js中设置匹配路由，在对应路由里面配置子路由，children:[{},{}]
    3，在要嵌套的组件中使用router-view来放路由匹配的组件  
    4，使用router-link通过点击实现配置路由，代替了a标签
  3，动态路由
    1，需要在配置路由时传递参数，在路由文件中/:id--->对于具体的组件中是直接/id数值
    2，想要得到是具体的那个id，需要通过this.$route.params.id获得
    3，动态路由可以携带多个参数，就直接在配置的地方/:id/:name--->对于具体的组件中是直接/id数值，再/name的值
  4，编程式路由
    1，就仅仅利用this.$router.push("/aobut")---->跳转到自己想要去的路径下面
    2，this.$router.go(-1)---->返回到的是上级路由
  5，路由重定向
    1，直接使用redirect("/home")，将一个路由重定向到另外一个路径下面

5，请求api接口数据
   1）后端返回数据形式是json，它需要都加上双引号
   2）模拟请求数据可利用easy mock网站
   3）ajax（原生的ajax）---->axios是一个第三方模块（使用前安装依赖），非常好用
   4）使用axios的步骤：
       安装:npm i axios
       引入:import axios from "axios"
       请求数据:axios.get("后台接口").then(res=>{console.log(res)}).catch(err=>{console.log(err)})

6，ElementUI框架
 安装：npm i element-ui -S
 引入：在main.js中引入
      import ElementUI from 'element-ui';
      import 'element-ui/lib/theme-chalk/index.css';
      Vue.use(ElementUI);



Vuex学习

1，Vuex概念
   状态（数据）管理器；它是一个第三方模块，使用时需要引进来。

2，为什么需要它？
     之前数据传递比较麻烦，利用vuex可以把数据统一管理起来。使用比较方便

3，引入Vuex方法：
  （1）传统方法：
       <script src="../Vue.js"></script>
       <script src="../vuex.js"></script>
      引入之后得到一个Vuex对象：{Store: ƒ, install: ƒ, mapState: ƒ, mapMutations: ƒ, mapGetters: ƒ, …}
      1）Store:是一个构造器，因为首字母大写啦，那我们就需要去new创建一个仓库。
         仓库是用来管理数据的，里面存在着state:{};还有用来修改数据的mutations：{}，里面有着修改状态的方法；actions:{}，里面放着解决异步的函数
      2）将仓库注入到vue实例（就是将Vue new一下之后赋给一个新的值）中去，仅仅是在vue中注册一下store即可。
      3）去写子组件的内容
  （2）脚手架方法：
        安装：npm i vuex --save

4，Vuex中能够直接去操作状态（或者说仓库里的数据）this.$store.state，但是不推荐直接去操作状态。
    如下：通过this.$store.state.counter++这个api来获取状态，修改数据；
    推荐：想要修改状态，在组件内部通过this.$commit方法触发事件，执行mutations当中对应的方法
    Vuex可以使得我们可以方便的跟踪每一个状态的变化。

5，mutations中写的都是方法，每个方法就表示一个事件，子组件方法调用时就会触发mutations中的方法
   方法中的第一个参数就是仓库中的状态（数据）。

6，vuex中的四个概念
 （1）state：存放数据（状态），这样数据就可以在组件中共享了。获取数据：this.$store.state.counter
 （2）mutations:修改数据（状态）。别的组件中要修改数据，只能触发一个mutations,通过mutations来修改数据：this.$store.commit(sub)，触发mutations中的一个方法
 （3）getters:从state中的数据中，取出一部分来，依据数据产生新数据，类似于vue中的计算属性
 （4）actions：在对数据实现异步操作时，需要用到；它提交的也是mutations，不能直接修改状态；
    它可以包含任意异步操作，接收一个与store实例具有相同方法和属性content，它可通过content.$commit来提交mutations，也可通过content.state
 （5）特殊概念用法：
     mapState --->import {mapState} from "Vuex",然后...mapState(["数据1","数据2"])--->计算属性中
     mapGetters--->import {mapGetters} from "Vuex",然后...mapGetters(["数据1","数据2"])--->计算属性中
     mapMutations--->import {mapMutations} from "Vuex",然后...mapMutations(["方法1","方法2"])--->方法中
     mapActions--->import {mapActions} from "Vuex",然后...mapActions(["方法1","方法2"])--->方法中

7，如何在组件中获取数据？
  方法一：this.$store.state.counter
  方法二：在组件中使用计算属性来接收仓库中的数据，就是将this.$store.state仓库中的数据作为返回值，通过计算属性（跟data使用方法一样）来获取数据
  方法三：需要在script标签中import {mapState} from "Vuex"引进来
         mapState（它是一个函数，它加上小括号就是函数调用，实参是一个数组（里面存放着要得到的数据），需要获取那个数据就写那个数据即可
         mapState是写在计算属性里面的，计算属性是一个属性名，属性值是一个对象，也就是说mapState存在于计算属性里，它返回一个对象
         mapState返回一个对象，...把一个对象拆分，叫拓展运算符），是上述计算属性的简单方式，将vuex.store.state中的数据直接映射到组件中的计算属性中 
         
8，可不可以将仓库中的数据设置成data？
  OK，但是不推荐；
  原因：计算属性一般是只读的，不能修改，所以可以将仓库中数据设置成计算属性；
  但是data是可以修改的，如果你绑定到data中的数据是引用数据类型（修改的就是地址，那样会影响仓库中的数据），对data修改数据，会影响仓库中的数据
小案例:使用根组件，AddNumber,SubNumber这三个组件来管理状态counter。












组件懒加载：直接在component时引入
接收数据props
emit
在封装的组件上写方法，不可以需要在封装组件上写上emit
 
 
   
   




































































































      

























