// 编译模板
class Compiler{
    constructor(el,vm){
      this.el =  this.isElementNode(el) ? el : document.querySelector(el)
      this.vm = vm;
      let fragment = this.node2fragment(this.el)
      this.compile(fragment); 
      this.el.appendChild(fragment)
    }
    // 编译元素节点
    compileElement(node){
     // 拿到属性节点
     let attributes = node.attributes;
     //   console.log(node);//得到所有元素节点
      [...attributes].forEach(attr=>{
       let {name,value} = attr
       if(this.isDirective(name)){
           console.log(node)//找到带有指令的元素节点
       }
      })
    }
    // 判断属性是否为指令 
    isDirective(attrName){
      return attrName.startsWith("v-")
    }
    // 编译文本节点
    compileText(node){
    //  console.log(node)//拿到所有文本节点
     let content = node.textContent
    //  console.log(content)//拿到所有文本节点内容
     let reg = /\{\{(.+?)\}\}/; //{}在正则中有特殊含义，需要转义
     if(reg.test(content)){
         console.log(content)//{{school.name}}  找到{{}}的内容
     }//判断内容是否负责正则
    }
    // 编译模板
    compile(fragment){
        let childNodes = fragment.childNodes;
        [...childNodes].forEach(child=>{
           if(this.isElementNode(child)){
            this.compileElement(child)  
            // 元素节点child中嵌套其它节点  进行递归调用
            this.compile(child)//递归重新编译
           }else{
            this.compileText(child)
           }
        })
    }

    // 返回文档碎片
    node2fragment(node){
    //创建文档碎片
    let fragment = document.createDocumentFragment();
    let firstChild;
    while(firstChild=node.firstChild){
      fragment.appendChild(firstChild)
    }
    return fragment;
    }
    //元素节点
    isElementNode(node){
        return  node.nodeType === 1;
    }
}

// Vue类  负责整体调度
class Vue{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;
        if(this.$el){
         new Compiler(this.$el,this)
        }
    }
}