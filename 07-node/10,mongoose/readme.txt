mogoDB 把操作数据库的操作封装到了一个db.js文件中 db.find("xx",{})
mongoose是第三方依赖，能够像操作对象一样，去操作数据库。

 

mongoose 安装完后，不需要再引入mongodb了

1，步骤：
    1，安装并引入 
       安装：npm i mongoose 
       引入：const mongoose = require("mongoose")
    2，建立连接  mongoose.connect("mongodb://127.0.0.1:27017/myapp")
        如果在数据库没有myapp这个数据库，那么此时并没有自动创建这个数据库 
    3，定义一个Schema，它需要和你最终在数据库中创建的字段保持一样，里面定义了你最终文档的格式及字段
        Schema创建完后，也不会在数据库自动创建这个数据库
    4，根据Schema创建model，model中的第一个参数，首字母要大写，且如果未指定集合名，
       会最终按照model创建时定义的名字全部变为小写，且单数变复数作为集合名
    5，实例化model，就是简单的new上一下，且传入实际参数。
    6，往数据库里保存数据：使用model的save方法，这样也会自动建立数据库

2，mongoose中的操作
    增：save到数据库---->操作于对象，它是将model new了一下，然后使用它的save函数
    删：delete删除数据从数据库--->基于model使用deleteone函数
    改：update更新数据库数据--->基于model使用updateone函数
    查：find查找数据库中需要的数据--->基于model使用find函数

3，在mongoose中是可以携带一些默认参数的，在连接数据库时可以携带函数。
    最初始时未携带参数会有警告出现，带上参数：{useNewUrlParser:true}，就可去掉。
    参数指定时可以按照之前形式，将它以对象形式传过来，指定了类型type和默认参数default，当你并未定义那个值时，它会使用默认参数

4，实现mongoose模块化
   建一个model文件夹：db.js里面存放着代码的公共部分，而且要求将其导出，以便别人使用，要想在某处使用它需要导入
   还有可在model文件夹中存放其它需要的js文件，只创建model，然后导出，哪里需要就在哪里引入























