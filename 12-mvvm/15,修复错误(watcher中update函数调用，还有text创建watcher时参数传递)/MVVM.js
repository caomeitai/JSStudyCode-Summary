class Dep{
  constructor(){
      this.subs = [];//用来存放所有的watcher
  }
  addSub(watcher){
     this.subs.push(watcher)
  }
 notify(){
     this.subs.forEach(watcher=>watcher.update())
 }
}
class Watcher{
  constructor(vm,expr,cb){
     this.vm = vm;
     this.expr = expr;
     this.cb = cb;
     this.oldState = this.get();
  }
  get(){
     // 获取状态时将Watcher赋给Dep的target
      Dep.target = this
      let state = CompilerUtil.getval(this.vm,this.expr)
     // 获取完之后赋为null
      Dep.target = null;//等再去取状态时就是新的状态
      return state;
  }
  update(){
    let newstate = CompilerUtil.getval(this.vm,this.expr)
    if(newstate !=this.oldState){
        this.cb(newstate)
    }
  }
}

class Observer{
    constructor(data){
     this.observer(data)
    }
    observer(data){
       if(data && typeof data=='object'){
          for(let key in data){
              this.defindReactive(data,key,data[key])
          }
       }
    }
    defindReactive(obj,key,value){
        this.observer(value)
        let dep = new Dep()
        Object.defineProperty(obj,key,{
            get(){
                Dep.target && dep.subs.push(Dep.target)
                return value
            },
            // 设置数据
            set:(newval)=>{
                if(newval != value){
                    this.observer(newval)
                    value = newval;
                    dep.notify()//通知watcher调用update方法
                }
            },
        })
    }
}

class Compiler{
    constructor(el,vm){
      this.el =  this.isElementNode(el) ? el : document.querySelector(el)
      this.vm = vm;
      let fragment = this.node2fragment(this.el)
      this.compile(fragment); 
      this.el.appendChild(fragment)
    }
    compileElement(node){
     let attributes = node.attributes;
      [...attributes].forEach(attr=>{
       let {name,value:expr} = attr
       if(this.isDirective(name)){
        let [,directive] = name.split("-")
        CompilerUtil[directive](node,expr,this.vm)
       }
      })
    }
    isDirective(attrName){
      return attrName.startsWith("v-")
    }
    compileText(node){
     let content = node.textContent
     let reg = /\{\{(.+?)\}\}/; 
     if(reg.test(content)){
        CompilerUtil['text'](node,content,this.vm)
     }
    }
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

    node2fragment(node){
    let fragment = document.createDocumentFragment();
    let firstChild;
    while(firstChild=node.firstChild){
      fragment.appendChild(firstChild)
    }
    return fragment;
    }
    isElementNode(node){
        return  node.nodeType === 1;
    }
}
CompilerUtil = {
    getval(vm,expr){
    return expr.split(".").reduce((data,current)=>{
       return data[current]
    },vm.$data)
    },
    getContentValue(vm,expr){
        return expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            return this.getval(vm,args[1])
        })
    },
    model(node,expr,vm){
       let val = this.getval(vm,expr)
       let fn = this.updater["modelUpdater"]
       new Watcher(vm,expr,(newstate)=>{
         fn(node,newstate)
       })
       fn(node,val)
    },
    text(node,content,vm){
        // console.log(content)//{{school.name}}  得到的是插值表达式
        let newcontent = content.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            // console.log(args)//["{{school.age}}", "school.age", 0, "{{school.age}}"]
            new Watcher(vm,args[1],()=>{
                fn(node,this.getContentValue(vm,content))
            }) 
            return this.getval(vm,args[1])
        })
        let fn = this.updater["textUpdater"]
        fn(node,newcontent)
    },
    updater:{
        modelUpdater(node,value){
          node.value = value;
        },
        textUpdater(node,content){
            node.textContent = content;
        }
    }
}

class Vue{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;
        if(this.$el){
            new Observer(this.$data)
            new Compiler(this.$el,this)
        }
    }
}












