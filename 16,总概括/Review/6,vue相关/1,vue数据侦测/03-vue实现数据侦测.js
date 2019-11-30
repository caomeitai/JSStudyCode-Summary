let arrProto = Array.prototype
let proto = Object.create(arrProto);
['push', 'shift', 'poop'].forEach(method => {
    // 重写原型方法
    proto[method] = function (...args) {
        updateView()//视图更新
        // console.log(this)//数组[]
        // console.log(...args)//[name:"xxx"]
        arrProto[method].call(this, ...args)

    }
})

function updateView() {
    console.log("update...")
}

// 数据监测
function observer(data) {
    // 去除基本数据类型
    if (typeof data !== "object" || data == null) {
        return data
    }
    if (Array.isArray(data)) {
        // 一个数组想要重写数组原型上的方法  将对象的原型设置成proto
        Object.setPrototypeOf(data,proto)
        for (let i = 0; i < data.length; i++) {
            observer(data[i])
        }
    } else {
        //数据为对象（对象或数组）
        for (let key in data) {
            defineReactive(data, key, data[key])
        }
    }
}
function defineReactive(obj, key, value) {
    observer(value)
    Object.defineProperty(obj, key, {
        get() {
            console.log("get...")
            return value;
        },
        set(newValue) {
            if (newValue !== value) {
                observer(newValue)
                value = newValue
                updateView()
            }
        }
    })
}

// 基本数据类型
// let data = "wangcai"//wangcai
// let data = 1 //1
// console.log(observer(data))



// 数据是对象 单层
// let obj = { name: "wangcai", age: 12 }
// observer(obj)//数据监测
// // console.log(obj.name)//get...  wangcai
// obj.name = "wangcai"// 不走update...
// obj.name = "tanni"//  update...



// 双层对象
// let obj = { name: "wangcai", age: { number: 12 } }
// observer(obj)//数据监测
// // console.log(obj.age.number)
// obj.age.number = { counter: 34 }
// // console.log(obj.age.number.counter)

// obj.age.number.counter = 22//为检测counter在set中加上observer



// 数组
// let obj = { name: [1, 2, 3] }//纯数组时没有视图更新
let obj = { name: [{ age: 12 }] }
observer(obj)
// console.log(obj.name[0])
// obj.name[0] = 4

// console.log(obj.name[0])//一次
// console.log(obj.name[0].age)//两次
// obj.name[0].age = 23

obj.name.push({ name: "xxx" })








