// 存放工具函数  加密方式是md5

let md5 = require("md5")

let tools = {
// 里面存放工具
// 首先有着一个函数用来加密数字
  md5(str){
    return md5(str)//将使用md5加密方式的字符串再返回
  }
}

module.exports = tools
