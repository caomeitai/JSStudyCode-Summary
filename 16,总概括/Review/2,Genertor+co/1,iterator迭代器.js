// 创建迭代器
function createIterator(items) {
    let i = 0;
    return {
        next() {
            // value每next一下就会往后移一个
            // value = items[i++]
            // 当i值比数组长度大时代表遍历完毕，done会是true
            // done = items.length < i ? true:false

            // (i>=items.length)就直接判断出true还是false
            var done = (i>=items.length)
            // 利用三元运算符，当done还是false时证明还未迭代完毕
            // 当done为true时，迭代完毕
            var value =!done ? items[i++]:undefined
            return {
                value:value,
                done:done
            }
        }
    }
}

// 迭代器就是为了遍历不同的集合，数组；迭代器需要每next一下才会得到结果
const arr = [1, 2, 3]
// 生成迭代器
let iterator = createIterator(arr)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
















