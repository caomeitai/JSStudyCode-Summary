import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home:Scaffold(
      appBar: AppBar(
        title: Text(
          "金泰亨",
        ),
      ),
      body: HomePage(),
    )
  );
 }
}


// 自定义组件
class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    //形成一个2维的可滚动的网络中展示内容的控件
    return GridView.count(//类似于九空格的感觉
      crossAxisCount: 2,//一行中最少2行
      children: <Widget>[
        Text("金年碳！"),
        Text("金年碳！"),
        Text("金年碳！"),
        Text("金年碳！"),
        Text("金年碳！"),
        Text("金年碳！"),
        Text("金年碳！"),
        Text("金年碳！"),
        Text("金年碳！"),
        Text("金年碳！"),
        Text("金年碳！"),
        Text("金年碳！"),
      ],
    );
  }
}




