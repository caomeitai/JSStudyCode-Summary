// 编译模板
class Compiler{
    // el整体是个元素节点   但需要判断编译的是不是元素  
    constructor(el,vm){
        // 如果el本身就是元素节点，使用它；否则拿到 #app对应的一堆的元素节点
      this.el =  this.isElementNode(el) ? el : document.querySelector(el)
      console.log(this.el)//走的是后面，非元素节点
    }
    // 判断是否为元素节点 根据节点的属性来判断
    isElementNode(node){
        //元素节点
        return  node.nodeType === 1;
    }

}



// Vue类
class Vue{
    constructor(options){
        this.$el = options.$el;
        this.$data = options.data;
        // 如果$el存在，就找到上面的HTML模板，
        // 在模板中找到需要替换数据的元素，替换又称为编译(编译模板)
        if(this.$el){
         new Compiler(this.$el,this)
        }

    }
}