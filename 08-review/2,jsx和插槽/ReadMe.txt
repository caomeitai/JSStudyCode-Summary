JSX:javascript + xml--->它是js代码和xml代码混着写
  html  <div></div>
  xml   <name></name>   <age></age>
JSX规定如果你想要在html中写JS代码，，需要把JS代码（函数调用之类的）放在{}中

利用传统的模板（vue）写结构不灵活，vue中也可以使用JSX来解决，也就是需要在JS代码(建的都是js或jsx文件)中写标签
当不使用传统形式来写组件，而是使用jsx来写组件时，靠的就是render函数，render函数中有一个固定参数h
h也是个函数，而h()表示调用函数，最终在render函数中要返回其调用值
在函数中第一个参数表示要创建什么样的标签，第二个参数表示这个标签中的属性，第三个参数表示标签中的内容
render函数是创建元素（也是组件）的-->createElement

通过vm.$attrs是将父组件的属性（除去在props中传入的属性）传递给子组件

有一个数组，以指定的标签渲染出来，有两种方案：
  1，render函数（jsx的形式）--->iView
  2，插槽（默认插槽，具名插槽，作用域插槽）--->ElementUI















