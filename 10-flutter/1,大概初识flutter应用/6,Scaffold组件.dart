import 'package:flutter/widgets.dart';
import 'package:flutter/material.dart';

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title:"App",
      theme: ThemeData(
        primaryColor: Colors.purple
      ),
      // home: Text("flutter hello"),
      home:HomePage() ,
    );
  }
}
// 按st可以快速搭建静态组件的结构
class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Container当成是div
    // return Text("hello");
    // scaffold也是一个组件  称为脚手架，它提供很多现成的组件可以使用
    return Scaffold(
      appBar: AppBar(
        title: Text("金泰亨"),
      ),
      body: Center(
        child: Text("hello 泰泰！"),
      ),
    );
  }
}