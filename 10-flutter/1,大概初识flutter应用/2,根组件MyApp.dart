import 'package:flutter/widgets.dart';
import 'package:flutter/material.dart';//flutter中的UI库

void main(){
  runApp(MyApp());
}

// 每一个静态方法中必须有一个bulid，build是用来做组件渲染的
class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
  // 每个项目最外层必须包一个MaterialApp,里面放UI组件
  // 里面还包含了渲染移动端的规范
    return MaterialApp(//渲染出一个App应用
    // 每个页面上面都有一个title,但是不会显示到页面上
      title:"App",
      // 设置当前项目的默认颜色
      theme: ThemeData(
        primaryColor: Colors.blue
      ),
      // home表示把Text这个组件渲染到页面上面，它是携带的最基础的组件
      home: Text("flutter hello"),
    );
  }
}