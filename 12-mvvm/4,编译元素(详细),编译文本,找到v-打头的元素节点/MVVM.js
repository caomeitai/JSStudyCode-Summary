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
    //  console.log(attributes)//NamedNodeMap {0: type, 1: v-model, type: type, v-model: v-model, length: 2}
    //  console.log(Array.isArray(attributes))//flase  object
    // console.log([...attributes]), //[type, v-model]
      [...attributes].forEach(attr=>{
    //    console.log(attr)//type="text"  v-model="school.name"  object
       let {name,value} = attr
    //    console.log(name,value)//type text   v-model  school.name
       if(this.isDirective(name)){
        //  判断出是指令
        console.log(name+"是个指令")//v-model是个指令
        console.log(node)//<input type="text" v-model="school.name">
       }
      })
    }
    // 判断属性是否为指令  是否以v-打头 使用startsWith命令
    isDirective(attrName){
      return attrName.startsWith("v-")
    }
    // 编译文本节点
    compileText(){

    }
    // 编译模板
    compile(fragment){
        let childNodes = fragment.childNodes;
        [...childNodes].forEach(child=>{
           if(this.isElementNode(child)){
            //    console.log(child+"元素节点")
            this.compileElement(child)  
           }else{
            //    console.log(child+"文本节点")
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