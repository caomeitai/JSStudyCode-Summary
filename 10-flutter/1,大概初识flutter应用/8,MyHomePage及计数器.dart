import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

//一个有状态的组件分成两部分：一部分处理状态，一部分写结构
// 结构都要写在build方法中

// 有状态组件，动态组件  需要继承 StatefulWidget
//需要重写createState方法  
class MyHomePage extends StatefulWidget {//处理状态
  // 当有的地方MyHomePage("xxx") 那么MyHomePage组件需要接收数据
  // 需要重写那个类
  // 无论你接不接收数据，MyHomePage({key key}):super(key:key)都得写
  // MyHomePage({key}) : super(key : key);

  // 当要接收数据时，下面表示接收个title，当你new时要传递参数
  MyHomePage({key,this.title}) : super(key : key);
  final String title;//接收之后定义title
  @override
  // 指定函数类型 创建泛型函数
  // 每一个动态方法，都需要一个createState函数，利用这个函数
  // createState函数，返回值是一个_MyHomePageState的实例
  // 所以在这里一般与下面保持一致
  //  _MyHomePageState createState(){
  //    return  _MyHomePageState();//代表生成一个实例
  //  }

  // _MyHomePageState是一个类，加上（）就是个对象--->类型是_MyHomePageState
  _MyHomePageState createState()=>_MyHomePageState();//代表生成一个实例，new上个对象
}

// 下面函数继承上面函数  是个类
class _MyHomePageState extends State<MyHomePage> {//处理结构
  // 定义一个私有变量
  int _counter = 0;
  _incrementCounter(){
    // 要去改变状态，需要通过setState
    setState((){
     _counter++;//通过方法改变状态
    });
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("${widget.title}")),
      body: Center(
        // column组件  从上到下排列很多组件  类似于之前的flex布局
        // column中有个主轴，默认是从上到下的，而组件是按照主轴方向排列的
        child: Column(
          // mainAxisAlignment设置主轴上组件的位置
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text("You have pushed the button this many times:"),
            Text(
              "$_counter",//一般情况下，在里面是变量时，{}可以省略
              style: TextStyle(
                fontSize: 30,
                color: Colors.grey
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        // 按钮的类型
        tooltip: "increment",
        child: Icon(Icons.add),//使用小图标 +
        onPressed:(){
          // print("hello");//必须在控制台才能查看打印效果
          _incrementCounter();

        } ,//点击事件
    ),
    );
  }
}






// 在基于对象的语言中来说，创建一个类，可以new上它，就是创建一个对象了，那么它的类型就是Object。
// 在面向对象的语言中来说，一个类就是一个类型

// 再去创建一个有状态组件
class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Container(
      
    );
  }
}