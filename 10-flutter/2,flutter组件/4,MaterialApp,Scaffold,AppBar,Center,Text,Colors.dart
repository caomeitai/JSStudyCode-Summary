import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

void main(){
  runApp(MyApp());
}

// 学习的组件：MaterialApp,Scaffold,AppBar,Center,Text,Colors
// 学习的配置：title,theme,home,child
// 根组件MyApp-->子组件MaterialApp-->渲染其它组件MyHomePage
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "根组件",
      theme: ThemeData(
        primarySwatch: Colors.purple
      ),
      home:HomePage() ,

    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Flutter"
        ),
      ),
      body: Center(
        child: Text(
          "hello Flutter!",
          style: TextStyle(
            fontSize: 30,
            fontWeight: FontWeight.w500,
            fontStyle: FontStyle.italic,
            color: Colors.blue,
          ),
        ),
      ),
    );
  }
}

