// 客户端去访问服务器两种方式：浏览器:url直接访问  js代码不需要浏览器
let http = require("http")
// 利用js代码http.request来创建一个客户端请求服务器
let client =  http.request({
// 相当于配置了url中的内容
  hostname:"localhost",
  port:3000,
//  get的请求正文是在？后面加；
//  post的请求正文是在最后另外加以表单形式
// name='xioami'&age=18"  请求参数或者说请求正文
//   path:"/abc?name='xioami'&age=18",//现在无用
  path:"/abc",  
  method:"post",
// 使用浏览器请求时会有请求头，js代码也可配置请求头
  headers:{
    // 要想使其为post请求，那么就只能以表单形式传给服务器
   "Content-Type":"application/x-www-form-urlencoded"
  }
})
// 这样就将请求发出去啦，可以将请求正文给服务器
// a=1&b=2&c=3  就是请求正文
client.end("a=1&b=2&c=3")

// 请求由三部分组成：请求头，请求行，请求正文

// get请求：在地址栏中输入网址访问页面；a标签中的href；img标签中的src；script标签中的src；form中的method指定为get
// post请求：form中的method指定为post，其余大部分都是get请求