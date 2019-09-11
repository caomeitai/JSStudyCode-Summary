一、跨域模块
 1，同源策略是什么？
   答：同源指的是协议，域名，端口都要相同，其中有一个不同就会产生跨域；
      同源策略是指作为浏览器最基本安全功能的一种约定，它是对以下请求进行限制来降低收到XSS、CSFR等攻击的风险；
      同源策略限制的请求：
        （1）浏览器的存储：Cookie、LocalStorage和IndexDB无法读取；
        （2）浏览器的DOM对象和JS对象无法获得；
        （3）AJAX请求不能发送 
 2，跨域是什么？
   答：广义上来讲是指一个域下资源去请求另一个非同源域下资源；
      狭义上来讲是指浏览器不能执行其他网站的脚本，它是由浏览器的同源策略造成的，是浏览器对JavaScript施加的安全限制；
      换句话说其实跨域的限制访问，是浏览器的限制。 
 3，跨域产生的条件或者说跨域产生的原因？
    答：浏览器的限制和XHR（ajax）请求，也就是说通过JS代码利用axios去请求数据；
        服务器与服务器之间的请求是不存在跨域问题的，跨域问题仅仅存在于浏览器端
 4，跨域解决常见方案：
    答：1）jsonp：靠script标签的src发出请求，它只支持get请求；
        2）cors：跨域资源共享，在服务器端指定请求头中的Access-Control-Allow-Origin字段即可，在后端配置允许哪个人可以访问服务器（遵循最小授权的原则）；
        3）代理服务器：在前端开一个代理服务器，代理服务器与前端处于同一个域下，而代理服务器再去请求其它服务器时也不存在跨域问题
        4）iframs：浮动框架，里面有src标签，利用src来进行请求  
        5）websocket：协议，可以使服务器主动的推送消息到客户端
        6）nginx 反向代理解决跨域--->隐藏跨域 
        7）iframs+document.domain：要求两个页面属于一个基础域，使用同一个协议和同一个端口，这样就可以给他们同时添加document.domain来跨子域，它只适用于不同子域（父类与子类）的框架间的交互
      如果使用ajax的方法进行交互或者JS调用，可以让iframs载入一个与你想要通过ajax获取数据的目标页面处于相同的域的页面html文件，然后就可利用ajax来获取数据，另外再使用document.domain 
        8）window.name+iframs：配置代理文件，是没有任何内容的html文件，需要它和前端渲染的页面处于同一域下
       iframs的src属性由外域转向本地域，跨域的数据内容由iframs的window.name从外域传递到本地域，从而解决了跨域

二、ajax发展流程
 1，原生ajax请求的5个步骤？
    答：
      第一步，创建XMLHttpRequest对象，直接new上它就OK；
      第二步，指定ajax请求那个服务器，配置请求的信息（请求的方式，请求的接口）
      第三步，注册回调函数，监听ajax的状态变化
      第四步，创建回调函数，如果状态==4，表示ajax完成了。而状态码为200，那么成功返回数据
 2，jQuery封装的ajax？
    答：直接通过$.ajax来请求数据，传入个地址即可，然后通过responseText就可拿到数据
 3，新时代的ajax？
    答：iOS--->ajax模块，Android--->ajax模块，
        h5--->axios  底层还是ajax
              fetch  底层已不是ajax--->ajax已死，fetch永生
 4，反向ajax？
    答：简单来说就是服务器主动把信息推送给客户端，指的是websocket协议
 5，向服务器传送数据有几种方式？
  1）通过url路径的形式，可通过?name="wangcai"&age=12的方式携带参数；
  2）以form表单的形式传参，提交信息
  3）以设置header的形式，直接在header头中来传参，在配置项中headers:{参数}
 6，请求方式：
   简单请求：
      GET,
      POST,
   复杂请求：  
    OPTIONS--->试探请求，在真正发送请求时，先试探一下是否ok
    PUT
    DELETE

   


  



















	 


三、上线流程
    创建完毕项目后，打包npm run build--->生成dist,将其弄出来
    托管dist代码---->创建服务,js文件
    将文件都放在public文件夹中
    app.use(express.static("public"))
四、http-server原理
 1，脚手架，工具是可以利用node实现的；我们可以将写好的包发布到Npm官网上面，其他人通过npm i xxx来安装使用
    在http-server里面应用到两个比较重要的头(压缩和缓存)--->项目优化
 2，托管文件
       在某个文件夹下面，全局安装http-server，托管任何一个文件夹
    如果一个包全局安装了，就可以执行这个包中命令；
    而自己写了个脚本时，也想让它在任何目录下执行，需要通过npm link连接到全局环境下面
 3，第三方模块
  1）commander模块:
        用来收集用户在命令行输的参数
      1）需要引入它：import program from "commander"
      2）program.option('-p,--port<val>','set http-server port') 配置自己需要的命令
      3）program.parse可以解析process.argv，process.argv它的前两项是固定的，而后面输入的可通过前面解析得到
  2）babel模块：它可以将ES6中的高级请求转成ES5    
      1）安装三个模块：@babel/cli解析core--->@babel/core-->@babel/preset-env将ES6高级语法转成ES5低级语法(需要配置环境.babelrc)  
      2）在ES6中，引入文件是通过import，而在node中是利用require，node在默认情况下是不能识别import这种高级语言的
      3）需要输入命令：babel src -d dist（会报错） --->代表将src文件中的内容中的高级语法转化成低级语法存到dist中
      4）使用npx babel src -d dist-->如果你不存在babel模块的话，就自动安装
      5）不能每写点代码就转化一次  npx babel src -d dist --watch来监控src下的文件（窗口不可关）
      6）不想总写上述命令过于麻烦，package.json中配置脚本，放在scriptions中，通过npm run xxx 执行
 4，HTTP中的头
  请求头：
   1）If-Modified-Since:上一次修改内容的时间，与Last-Modified两者配合使用，来进行对比缓存分析   
   2）if-none-match: 它是与Etag配合使用的。想要使用这个头，就必须修改文件；当你修改服务器上的文件时，请求头上会自动添加这个头
         最初始时if-none-match是不存在的，当它存在时，说明你修改了文件中的内容（分为真实修改和假修改）。
   3）Accept-Encodeing:一个文件到底能不能压缩，看有没有这个头
         浏览器（客户端）告诉服务器它所支持的压缩格式（gzip,deflate,br），如果存在某种压缩格式就会解压缩 
   4）User-Agent:在PC端和移动端都输入同一网址，会出现两个项目，通过头来判断      
  响应头：
   1）Content-Type:根据不同的文件类型来返回不同的响应头，它是在响应数据之前设置的 
         1，在得知是文件时要求读取内容再响应回来（利用的是流的概念--->pipe管道）
            mime.getType()根据不同的文件类型可自动转成不同的格式--->filepath(文件名)
            设置的形式：res.setHeader("Content-Type",mime.getType(filepath)+";charset=utf8") 
         2，在判断出是目录时要求将目录下文件读出来，并且渲染到模板上（返回一个网页）
            设置的形式：res.setHeader("Content-Type","text/html;charset=utf-8") 
         3，除了渲染主目录外，在其它文件夹渲染时注意路径的拼接；如果出现中文路径的话，
         浏览器自动解析成编码：encodeURIComponent(pathname)
         我们需要将中文再解码：pathname = decodeURIComponent(pathname)
   2）Content-Encodeing: 在返回文件之前，响应时告诉浏览器服务器以什么格式压缩，以便浏览器可以解析文件
         服务器告诉客户端它是以何种格式压缩的，然后返回给客户端  
   3）Cache-Control:缓存控制---->强制缓存，告诉浏览器多久不要再来访问我
      设置格式：res.setHeader("Cache-control","max-age=10")//再隔10秒才来访问我，时间过长，就一直从缓存中拿数据，即强制缓存
               res.setHeader("Cache-control","no-cache")//走网络，但是有缓存，它是对比缓存
               res.setHeader("Cache-control","no-store")//走网络，但不缓存     
   4）Expires:和上面控制缓存差不多，需要设置时间---->强制缓存
      设置格式：res.setHeader("Expires",new Date(Date.now()+1000*20).toGMTString())//隔多久来访问我   
   5）Last-Modified:最后一次修改内容，时间的变化，与对比缓存有联系，它是与if-modified-dince配合使用
   6）Etag：摘要缓存--->就好像是将文件进行加密处理一样，与if-none-match配合使用
   7）Location:重定向到某个地方
五、node应用
  1，写后端：api接口，ssr模板引擎
  2，作为前端的工具：npm来安装依赖
  3，写工具：（命令行执行工具）http-server  vue-cli  react-cli  express-cli  loader
六、http优化策略有两种：压缩  缓存 
   1，压缩：   
      1）压缩的目的：将文件变小
      2）压缩的原理转化流：
         日志输出是啥？conole.log("ok")
         标准输出？process.stdout.write("ok)
         标准输入？process.stdin.on("data",function(data){})	
      3）压缩文件：数据中重复性东西越多，就适合压缩；对于音乐电影不适合压缩
         读取文件：异步读取回调中的数据，同步读取时返回值是数据，
         压缩文件：zlib.gizp("file",function(err,data){console.log(data)})
      4）注意点：    
            在响应文件时，把一个文件压缩，压缩完后返回给浏览器，我们不需要解压，浏览器会自动解压，而一个文件到底会不会解压，看请求头中有没有Accept-Encodeing
            服务器返回给浏览器一个文件，如果浏览器认识这个文件，就将其进行解析，如果不认识就以下载的方式处理	
   2，缓存：
      1）缓存的分类：强制缓存与对比缓存--->每个浏览器都有一个缓存的文件夹（里面存放着缓存文件），而任何网站的首页面是不可能走缓存的，这里的缓存指的是强制缓存
      2）强制缓存：服务器通过一个头告诉浏览器，我已把文件返回给你，在多久之内你不要再请求我
      3）对比缓存：（协商缓存）如果一个文件没有改变，那么文件走缓存
      4）对比缓存不足之处：
         （1）文件内容没有改变，但是修改时间发生变化
         （2）时间上不够非常精确，可能在极短时间内修改内容，但并未捕捉到   
七、摘要算法：可以解决对比缓存的不足之处（典型算法MD5加密）
  1，摘要算法是不可逆的。可由一篇文章得到摘要，但不能从一个摘要还原出一篇文章
  2，摘要的长度是固定不变的
  3，相同内容的摘要是相同的，不同内容的摘要是不同的
  4，哈希算法（散列算法），crypyo.createHash--->进行摘要再转成base64的形式
八、http总结	
 如果你在PC端和移动端输入同一个网址http://www.taobao.com/，会出现两套不一样的项目
 	





3，面试题
     前端：html,css,js,vue技术栈
     后端：node:express,koa2
     网络：http,tcp	 
     数据结构与算法
	 
HTTP需要准备的东西
   1，网络模型
   2，HTTP，TCP协议概念--->三次握手，四次挥手
   3，HTTP常用的头
   4，HTTP常用状态码
   5，HTTP中的请求方法
   6，代理：反向代理，正向代理
   7，HTTPS 原理

   图解http--->图解tcp



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	 