class Dep{
  constructor(){
      this.subs = [];
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
      Dep.target = this
      let state = CompilerUtil.getval(this.vm,this.expr)
      Dep.target = null;
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
    setValue(value,expr,vm){
        
        expr.split(".").reduce((data,current,index,arr)=>{
            if(index==arr.length-1){
               data[current] = value
            }
            return data[current]
        },vm.$data)
    },
    model(node,expr,vm){
       let val = this.getval(vm,expr)
       let fn = this.updater["modelUpdater"]
       new Watcher(vm,expr,(newstate)=>{
         fn(node,newstate)
       })
       node.addEventListener('input',(e)=>{
        let value = e.target.value
        this.setValue(value,expr,vm)
       })
       fn(node,val)
    },
    text(node,content,vm){
        let newcontent = content.replace(/\{\{(.+?)\}\}/g,(...args)=>{
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
            // console.log(this.$data)
            // 需要让vm代理this.$data
            this.proxyVm(this.$data)
            new Compiler(this.$el,this)
        }
    }
    
    // 让vm代理data
    proxyVm(data){
    for(let key in data){
        // console.log(key)//school
        // console.log(data)//school对象
        // console.log(data[key])//school对象的值
        // 将数据key交给vm代理  给vm上挂上key这个属性
        Object.defineProperty(this,key,{
        //   vm.school  要想拿到数据就是获取数据，调用get()
        get(){
            return data[key]//将数据返回就OK
        }
        })
    }
 
    }
}
// vue中使用vue实例代理了data vm.$data.xxx--->vm.xxx












