// 生成器一般配合promise使用，生成器调用得到迭代器
function* read() {
    yield 1;
    yield 2;
}
// 迭代器，存在next函数，每执行一次拿到一个结果
let it = read()
console.log(it.next())//{ value: 1, done: false }
console.log(it.next())//{ value: 2, done: false }
console.log(it.next())//{ value: undefined, done: true }


// 以下是生成器的定义模式，*要存在于function和函数名之间
function* read1() { }
function* read2() { }
function* read3() { }

// 当生成器存在于对象中时：
let obj = {
    // 普通函数
    say:function(){
    },
    // 生成器
    say: function* () {
    },
    // 简写生成器
    *say1() {
    }
}