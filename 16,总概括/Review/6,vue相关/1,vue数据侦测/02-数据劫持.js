// 数据劫持要靠Object.defineproperty
// 数据改变，视图更新；视图变化，数据会改变

// 数据类型是数组  实现视图更新
let arrayProto = Array.prototype; //保存原型上的方法
let proto = Object.create(arrayProto);//创建一个以数组原型的proto的对象
['push', 'unshift', 'pop', 'shift'].forEach(method => {
    // console.log(method)
    // 重写数组中的方法，更新视图
    proto[method] = function (...args) {
        updateView()
        arrayProto[method].call(this, ...args)//对象借用数组中原型上的方法
    }
})


// 更新视图
function updateView() {
    console.log("视图更新成功啦！！！")
}

// 数据监测
function observer(data) {
    // 去除对象外的其他数据类型，以及undefined和null
    if (typeof data !== "object" || data == null) {
        return data
    }
    // 数据是数组
    if (Array.isArray(data)) {
        //  console.log(data)//[1,2,3]
        Object.setPrototypeOf(data, proto)
        // 数组中的每一项中可能存在对象
        for (let i = 0; i < data.length; i++) {
            let item = obj[i]
            // 得到的数组中可能存在对象，监测
            observer(item)
        }
    } else {
        // 数据是对象
        // 遍历对象中每一项,默认只会遍历一遍
        for (let key in data) {
            defineReactive(data, key, data[key])
        }
    }

}

// 实现数据劫持
function defineReactive(data, key, value) {
    observer(value)
    // 精细化设置一个对象属性
    Object.defineProperty(data, key, {
        // 获取数据
        get() {
            console.log("成功获取数据咯...")
            return value;
        },
        // 设置数据
        set(newValue) {
            // 当设置数据还是老数据，那么就不更新视图！
            if (value !== newValue) {
                observer(newValue)
                value = newValue
                updateView()
            }
        }
    })
}




// -----------------------------------------单层对象
// let obj = { name: "wangcai", age: 12 }
// observer(obj)//侦测数据
// console.log(obj.name)//成功获取数据咯...  wangcai
// // console.log(obj.age)//成功获取数据咯...  12
// obj.name = "wangcai"//数据还是赋的老数据，那么就不更新视图
// obj.name = "tanni"//视图更新成功啦！！！
// console.log(obj.name)//成功获取数据咯...  tanni

// ---------------------------------------多层对象
// 多层对象嵌套时，还需要去劫持这个对象中的属性
// let obj = {name: "wangcai", age: {number:12} }
// observer(obj)
// 获取数据  defineproperty如果对象中没有此属性，是劫持不到的
// console.log(obj.abc)//获取不到数据

// console.log(obj.name)//成功获取数据咯...  wangcai

// console.log(obj.age)//成功获取数据咯...  {number:12}
// console.log(obj.age)//成功获取数据咯...  { number: [Getter/Setter] }

// console.log(obj.age.number)// 12 成功获取数据只有一次
// console.log(obj.age.number)// 12 成功获取数据打印两次

// 设置修改
// obj.age.number = 23//成功获取数据咯...(这里获取到的数据是obj.age)  视图更新成功啦！！！
// console.log(obj.age.number)// 两次打印成功获取数据

// -------------------------------------数据是数组
// let obj = [1, 2, 3]
let obj = { name: [{ name: "tanni" }] }
observer(obj)
// console.log(obj.name[0].name)//成功获取数据咯...  wangcai
// obj.name[0].name = "wangcai"//数组中数据赋值改变数据视图不会更新
// obj.name = {age:12}//视图更新成功啦！！！借用数组中方法才会触发视图更新

// 借用数组中方法才实现视图更新
obj.name.push({ age: 34 })//成功获取数据咯...    视图更新成功啦！！！
obj.name.shift({ age: 34 })//成功获取数据咯...    视图更新成功啦！！！











