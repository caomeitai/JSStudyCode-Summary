let f1 = function(){
    console.log("正在执行任务...")
}
// 因为不管是执行某函数之前还是之后，都要执行若干个函数，需要把若干个函数存储起来
// 将函数存放到对象里面，可以有多个对象，将多个对象放数组当中
let wrappers = [
    {
        // 第一个wrapper，每个wrapper都有执行之前的函数，和执行之后的函数
        init(){
            console.log("hello1")
        },
        close(){
            console.log("bey1")
        }
    },
    {
        // 第二个wrapper
        init(){
            console.log("hello2")
        },
        close(){
            console.log("bey2")
        }
    }
]
// 这个函数就是来执行普通函数之前的若干函数，然后普通函数，最后才是执行普通函数之后的若干函数
const work = (core,wrappers)=>{
//   core可以说是普通函数f1
    wrappers.forEach(wrapper=>{
        wrapper.init()
    })
    core()
    wrappers.forEach(wrapper=>{
        wrapper.close()
    })
}
// 调用函数就要求传递实参
work(f1,wrappers)






































