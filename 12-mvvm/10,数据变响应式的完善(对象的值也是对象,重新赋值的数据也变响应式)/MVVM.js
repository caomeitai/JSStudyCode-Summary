// 实现数据劫持
class Observer{
    constructor(data){
     this.observer(data)
    }
    // 将数据变成响应式数据
    observer(data){
        // 如果数据存在且是个对象将其变成响应式
       if(data && typeof data=='object'){
          for(let key in data){
              this.defindReactive(data,key,data[key])
          }
       }
    }
    // 将数据做成响应式  
    defindReactive(obj,key,value){
        //如果对象obj中的值value也是一个对象，那么需要将value也变成响应式
        this.observer(value)
        Object.defineProperty(obj,key,{
            get(){
                console.log("get....")
                return value
            },
            // 设置数据时，如果赋的值不是新值时，不再重新赋值啦
            set:(newval)=>{
                console.log("set......")//这里是只要修改就会走
                if(newval != value){
                    console.log("set......")//这里只有数据发生变化才会走
                    // 在修改过数据之后，新的值不再是响应式数据啦
                    // this.observer(newval)//此时this的指向已经改变
                    this.observer(newval)//将上面的set()改为箭头函数，箭头函数中不存在this
                    value = newval;
                }
            },
        })
    }
}

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
        let newcontent = content.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            // console.log(args)//["{{school.name}}", "school.name", 0, "{{school.name}}"]
        //    let v = this.getval(vm,content)//多出了}}
        
        //    let v = this.getval(vm,args[1])//多出了}}
        //    console.log(v)//beida 122
        return this.getval(vm,args[1])
        })
        let fn = this.updater["textUpdater"]
        fn(node,newcontent)
    },
    // 更新数据
    updater:{
        modelUpdater(node,value){
          node.value = value;
        },
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
            new Observer(this.$data)
            // console.log(this.$data)//这样会将所有的数据变成响应式
            new Compiler(this.$el,this)
        }
    }
}



// 实现数据劫持  把数据变成响应式  当数据修改时，需要感应到数据修改啦
// definedPorperty()精细化设置属性  get() set()









