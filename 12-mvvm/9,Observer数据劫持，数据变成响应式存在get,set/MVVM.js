// 实现数据劫持
class Observer{
    constructor(data){
    //  console.log(data)//此时的数据非响应式数据 不存在get()和set()
     this.observer(data)
    }
    // 将数据变成响应式数据
    observer(data){
        // 如果数据存在且是个对象将其变成响应式
       if(data && typeof data=='object'){
        //   console.log(data)//{school: {name: "beida", age: 122}}
          for(let key in data){
            //   console.log(data[key])//{name: "beida", age: 122}
              this.defindReactive(data,key,data[key])
          }
       }
    }
    // 将数据做成响应式  添加上get()，set()方法
    defindReactive(obj,key,value){
        // console.log(obj) //{school: {name: "beida", age: 122}}
        // console.log(key) //school
        // console.log(value) //{name: "beida", age: 122}
        // 精细化设置某属性，key代表着school 就是给school整体加上get(),set()
        Object.defineProperty(obj,key,{
            // 获取school时，会调用get
            get(){
                return value
            },
            // 设置school时，会调用set
            set(newval){
                value = newval;
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
            // console.log(this.$data)//{school: {name: "beida", age: 122}}            // 在修改数据之前就将数据变成响应式
            new Observer(this.$data)
            // console.log(this.$data)//得到响应式数据
            new Compiler(this.$el,this)
        }
    }
}



// 实现数据劫持  把数据变成响应式  当数据修改时，需要感应到数据修改啦
// definedPorperty()精细化设置属性  get() set()









