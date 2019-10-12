// 设计模式：
// 发布-订阅模式(没啥关系，没有前后顺序)  
// 观察者模式(包含发布-订阅)存在观察者和被观察者，被观察者中存在观察者

// 数据改变创建观察者
class Watcher{
  // 观察者在数据改变时触发回调函数，干件事
  constructor(vm,expr,cb){
     this.vm = vm;
     this.expr = expr;
     this.cb = cb;//回调是状态改变会发生的事
     this.oldState = this.get();//初始时保存老的状态
  }
 // 获取状态
  get(){
    let state = CompilerUtil.getval(this.vm,this.expr)
    return state;
  }
 // 数据状态改变，调用观察者update方法，更新状态
  update(){
    let newstate = CompilerUtil.getval(this.vm,this.expr)
    if(newstate !=this.oldState){//状态改变，调用回调(它会随着状态做事)
        this.cb(newstate)
    }
  }
}


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
        this.observer(value)
        Object.defineProperty(obj,key,{
            get(){
                return value
            },
            // 设置数据
            set:(newval)=>{
                if(newval != value){
                    this.observer(newval)
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












