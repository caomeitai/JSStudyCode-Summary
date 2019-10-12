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
        // console.log(expr)//school.name
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
        //  console.log(node)//"{{school.name}}"  文本节点
        //  console.log(content)//文本节点内容 {{school.name}}  {{school.age}}
        CompilerUtil['text'](node,content,this.vm)
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
    // 处理得到指令对应的值 
    getval(vm,expr){
    return expr.split(".").reduce((data,current)=>{
       return data[current]
    },vm.$data)
    },
    // 处理v-model指令，实现数据绑定
    model(node,expr,vm){
       let val = this.getval(vm,expr)
       let fn = this.updater["modelUpdater"]
       fn(node,val)
    },
    // 插值表达式去掉  v-text
    text(node,content,vm){
        // console.log(node)//文本节点
        
        // getval得到的expr是scool.name
        // console.log(content)//文本节点内容{{scool.name}}
        
        // console.log(vm)//vue实例
        // 通过正则使数据中{{}}全部由后面得到的数据替换
        let newcontent = content.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            // console.log(args)//["{{school.name}}", "school.name", 0, "{{school.name}}"]
        //    let v = this.getval(vm,content)//多出了}}
        
        //    let v = this.getval(vm,args[1])//多出了}}
        //    console.log(v)//beida 122
        return this.getval(vm,args[1])
        })
        // console.log(newcontent) //beida 122
        let fn = this.updater["textUpdater"]
        fn(node,newcontent)
    },
    // 更新数据
    updater:{
        // 更新v-model指令数据
        modelUpdater(node,value){
          node.value = value;
        },
        // 更新文本内容数据
        textUpdater(node,content){
            node.textContent = content;
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