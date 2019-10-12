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
      [...attributes].forEach(attr=>{
       let {name,value:expr} = attr
       if(this.isDirective(name)){
        let [,directive] = name.split("-")
        CompilerUtil[directive](node,expr,this.vm)
       }
      })
    }
    // 判断属性是否为指令 
    isDirective(attrName){
      return attrName.startsWith("v-")
    }
    // 编译文本节点
    compileText(node){
     let content = node.textContent
     let reg = /\{\{(.+?)\}\}/; 
     if(reg.test(content)){
     }
    }
    // 编译模板
    compile(fragment){
        let childNodes = fragment.childNodes;
        [...childNodes].forEach(child=>{
           if(this.isElementNode(child)){
            this.compileElement(child)  
            this.compile(child)
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
// 不同指令对应的不同处理办法
CompilerUtil = {
    // 处理得到指令对应的值 v-model="school.name"
    getval(vm,expr){
    return expr.split(".").reduce((data,current)=>{
       return data[current]
    },vm.$data)
    },
    model(node,expr,vm){
       let val = this.getval(vm,expr)//已经拿到beida
    //    console.log(val)
       let fn = this.updater["modelUpdater"]
        fn(node,val)
    },
    text(){

    },
    updater:{
        modelUpdater(node,value){
          node.value = value;//将得到的值赋到input框上
        }
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