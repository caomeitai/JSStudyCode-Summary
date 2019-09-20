import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

void main(){
  runApp(MyApp());
}

// 利用scrollDirection进行水平排布设置，形成轮播图

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

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // 有一个盒子，对盒子进行列表
    return Container(
      height: 200,
      decoration: BoxDecoration(
        color: Colors.purple
      ),
      child: ListView(
        scrollDirection: Axis.horizontal,//水平方向排布
        children: <Widget>[
          Container(
            width: 100,
            color: Colors.red,
          ),
          Container(
            width: 100,
            color: Colors.orange,
          ),
          Container(
            width: 100,
            color: Colors.blue,
          ),
          Container(
            width: 100,
            color: Colors.purple,
          ),
          Container(
            width: 100,
            color: Colors.pink,
          ),
        ],
      ),
    );
  }
}