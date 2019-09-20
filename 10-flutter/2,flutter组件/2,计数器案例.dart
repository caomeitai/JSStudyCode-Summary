import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

void main(){
  runApp(MyApp());
}

// 根组件MyApp-->子组件MaterialApp-->渲染其它组件MyHomePage
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "根组件",
      theme: ThemeData(
        primarySwatch: Colors.blue
      ),
      home: MyHomePage(title:'计数器'),
    );
  }
}

// 改变状态
class MyHomePage extends StatefulWidget {
  // 渲染其它组件时传递参数，需要key
  MyHomePage({key,this.title}) :super(key:key);
  final String title ;//定义参数类型
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

// 改变结构
class _MyHomePageState extends State<MyHomePage> {
  // 想要改变状态只能通过setState函数，定义私有变量需要加_
  int  _counter = 0;
   _incrementCounter(){
    setState((){
     _counter++;
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // 通过上面得到传递过来的参数需要${widget.title}
        title: Text(
          "${widget.title}",
          style: TextStyle(
            color: Colors.black
          ),
        )
      ),
      body: Center(
        child: Column(
          // 使得内容处于主轴中心
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text("You have pushed the button this many times:"),
            Text(
              // _counter是在这里定义好的，拿取变量只需${}，而{}可省略
              "$_counter",
              // style: Theme.of(context).textTheme.display1
              style: TextStyle(
                fontSize: 30,
                color: Colors.grey
              ),
            )
          ],
        ),
      ),


      // 主要修饰的按钮  --->先取得按钮，获取颜色，小图标最终是事件
      floatingActionButton: FloatingActionButton(
        tooltip: "increment",//按钮默认颜色
        child:Icon(Icons.add),//加号按钮
        onPressed: (){
          // 点击事件
          _incrementCounter();

        },
      ),
    );
  }
}


