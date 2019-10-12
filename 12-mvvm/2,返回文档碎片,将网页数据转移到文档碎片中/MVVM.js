// 编译模板
class Compiler{
    constructor(el,vm){
      this.el =  this.isElementNode(el) ? el : document.querySelector(el)
      //将模板中数据转移到文档碎片中
       let fragment = this.node2fragment(this.el) 
    //    console.log(fragment)//得到文档碎片及其内容  
    }

    // 将文档碎片返回--->里面已有模板数据
    node2fragment(node){
    //创建文档碎片(内容为空)
    let fragment = document.createDocumentFragment();
    // 模板中数据未知，使用while循环转移数据
    let firstChild;
    // 将模板中的第一个孩子赋给文档碎片
    while(firstChild=node.firstChild){
      // 往文档碎片中扔每个节点  appendChild具有移动性，当数据没有时也就终止啦
      fragment.appendChild(firstChild)
    }
    return fragment;
    }
    //元素节点
    isElementNode(node){
        return  node.nodeType === 1;
    }
}



// Vue类
class Vue{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;
        if(this.$el){
         new Compiler(this.$el,this)
        }

    }
}