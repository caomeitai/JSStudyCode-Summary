const crypto = require("crypto")

// 哈希算法（散列算法）
// 将数据123456通过md5进行摘要转成base64的形式
let b = crypto.createHash("md5").update("123456").digest('base64')
// console.log(b)// 4QrcOUm6Wau+VuBX8g+IPg==

let b1 = crypto.createHash("md5").update(b).digest('base64')
console.log(b1)

// 通过多次算法处理，就无法破解，想要破解简单的，可直接搜索MD5网站解密













































