// 编译模板
class Compiler{
    constructor(el,vm){
      this.el =  this.isElementNode(el) ? el : document.querySelector(el)
      this.vm = vm;
      //将模板中数据转移到文档碎片中
       let fragment = this.node2fragment(this.el)
      //将内存中数据替换（编译模板  用数据来编译）
      this.compile(fragment); 
      //将文档碎片的内容弄到页面上   
      this.el.appendChild(fragment)
    }
    // 编译模板
    compile(fragment){
        // console.log(fragment)//里面是文档碎片中的内容
        
        //childNodes仅仅是子节点，不包含孙子节点 
        // fragment.childNodes 一堆的节点，包含了元素节点和文本节点
        // console.log(fragment.childNodes)//NodeList(11) [text, input, text, comment, text, div, text, div, text, ul, text]
        let childNodes = fragment.childNodes;//[text, input, text, comment, text, div, text, div, text, ul, text]
        // console.log(Array.isArray(childNodes))//false  不是数组而是伪数组
        
        // 伪数组转成数组
        [...childNodes].forEach(child=>{
            // 将得到的节点进行判断，元素还是文本
           if(this.isElementNode(child)){
               console.log(child+"元素节点")
           }else{
               console.log(child+"文本节点")
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