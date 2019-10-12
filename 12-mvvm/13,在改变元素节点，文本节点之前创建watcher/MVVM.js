// Dep中存放多个观察者
class Dep{
  constructor(){
      this.subs = [];//用来存放所有的watcher
  }
 // 获取数据时添加watcher  订阅
  addSub(watcher){
     this.subs.push(watcher)
  }
 // 通知watcher调用update方法 发布
 notify(){
     this.subs.forEach(watcher=>Watcher.update)
 }
}
// 数据改变创建观察者
class Watcher{
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
 // 更新状态
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
      // 要改变数据需要创建观察者
       new Watcher(vm,expr,(newstate)=>{
        //  回调根据新状态重新修改数据
         fn(node,newstate)
       })//用来监控input框中数据的改变
       fn(node,val)//找到input框完成数据绑定
    },
    // 数据改变后，拿到插值表达式中新的文本内容
    getContentValue(vm,expr){
        return expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            return this.getval(vm,args[1])
        })
    },
    // 插值表达式去掉  v-text
    text(node,content,vm){
        // 将文本节点中内容进行替换
        let newcontent = content.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            // 文本改变之前创建watcher  回调中更新状态
            new Watcher(vm,expr,()=>{
                fn(node,this.getContentValue(vm,expr))
            }) 
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












