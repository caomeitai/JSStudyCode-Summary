Vue的学习：
     1,vue是一套构建用户界面的渐进式框架,vue是一个构造器，它需要new
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
          // 在app中data是一个属性   在后面讲的组件中data是一个方法
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
               v-show=""后面可以写表达式；0 -0 ""全部都会转成false，1会转成true
          v-if与v-show的区别以后再说。
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
          ：class="数据"
          ：class="三元运算符"
          ：class="{类名：boolean}"
          ：class="{类名1：boolean,类名2：boolean}"
          类名中有-，则需要使用引号将其类名包起来
          ：class="{'含-的类名'：true}"
          ：class="['类名']"
     （2）style
          ：style="数据（含有要显示的样式）"

     5，计算属性(computed)与方法(methods)区别：
     1，他们本质都是函数，都可将：和function去掉，进行简写；
     2，用的时候，方法要调用，加上()，计算属性当成数据直接使用{{}}便可显示出来效果
     3，方法没有缓存,每当调用一次就打印一次，且有返回值；计算属性有缓存，它依赖于data中的内容，只要data中数据不发生变化，执行时，其中要打印的内容只会打印一次，但它也是有返回值的
     4，能使用计算属性就不要使用方法

     6，过滤器：
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



 ----------------------------------------------------------------------------------------------------------------------------
事件的学习：
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
          。把事件处理函数写在标签中  <span v-on:click="isShow = !isShow">{{isShow ? "收起":"展开"}}</span>
          。把事件处理函数写在方法中  常规写法
          。传字面量  v-on:click="f1('world')"
          。传变量  <button v-for="(value,key,index) in 3" v-on:click="f2(value)">按钮{{value}}</button>
     （4）事件对象：当事件发生时，事件对象中保存了很多信息，比如点击的坐标
          $event（事件对象） 固定的名字  
          （1）阻止默认事件：在相应的标签上绑定一个事件，传递对象事件（$event）这个参数,而相应函数则是对应参数上的方法比如：abc.preventDefault().
               <a href="http://www.baidu.com">百度</a>  a标签有的所谓的默认事件
          （2）阻止事件冒泡：它是大盒子套个小盒子，点击大的时，小盒子没事，点击小盒子时，大盒子也发生事件
               <div class="father">
                    <div class="son">
                    </div>
               </div>        
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
     （7）按键修饰符：
          keyCode

     4，表单的处理（form,input,select,option）
     绑定普通文本框
     绑定单选框  name要注意
     绑定复选框
     单标签上面是不能使用v-for的
     在循环单标签时，可使用template这个特殊标签，它不会被渲染出来


写一个todolist

组件的学习：
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

     3，使用组件的一个基本流程：
     第一步：定义一个组件对象，组件对象就是一个普通的对象，只不过里面有个template属性
     第二步: 注册组件
     第三步：使用组件

     4，使用组件时注意细节
     （1）组件中的三个名字：
          。定义组件对象的名字  MyHeader   这个名字写法没有要求
          。注册组件时的名字  （但一般好像不能使用全部大写）MyHeader  也没有要求   一般和定义组件对象的名字保持一致
          。使用组件时的名字   只能使用小写  使用组件的名字中不能大写字母，注册时给你写了一个大驼峰命名，使用时需要把在驼峰转化中划线命名
          MyHeader  定义名 
          MyHeader  注册名 
          my-header 使用名 

     （2） 在template中必须有一个唯一的根标签不能出现这样的情况"<div>somthing</div><h1><h1>"
          当存在多个根标签或者说里面内容较多时，可另外写到<template></template>外面去，在引进来

     5,完整组件： 除了根组件之外，后面子组件数据都是data函数,并且要return一个对象，数据放对象中（去看组件之间的通信代码）


     6，组件之间是可以通信（数据的传递），默认情况下数据不能在父与子之间共享。
          父子组件之间的数据传递：父传子；子传父 
          （1）父传子： 父中有数据，传递给子
               1，确定父中有数据
               2，在父组件的模板中通过属性绑定把数据绑到子组件上
               3，在子组件中定义props属性，用来接收父传递过来的数据
               4，在子组件的模板就可以使用接收过来的数据了
          父绑定数据   子接收数据  
         （2）子传父：
               1，在父组件模板中，给子组件添加一个事件监听
               2，在子组件中，某个时间通过this.$emit发出这个事件，发出事件的同时就可以携带数据
               3，当父中的方法触发，数据作用这个方法的第一个参数




vue中的脚手架
脚手架：快速搭建项目的结构
单文件组件：一个文件就是一个组件




安装脚手架工具：
npm  install -g @vue/cli
按空格来选择