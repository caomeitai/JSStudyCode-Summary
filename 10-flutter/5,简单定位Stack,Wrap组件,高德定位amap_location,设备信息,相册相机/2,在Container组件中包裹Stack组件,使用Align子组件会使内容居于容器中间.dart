import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("定位"),
        ),
        body: PositionDemo(),
      ),
    );
  }
}

// 有关定位的组件Stack
//在它里面使用Align会使其在未设置alignment属性时，就居于容器中间
class PositionDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        width: 300,
        height: 300,
        color: Colors.pink,
        child: Stack(
          // alignment: Alignment.topLeft,//此时的它不起作用
          children: <Widget>[
            Align(
              // alignment: Alignment(0,0),//它好像位于container的中间
              alignment: Alignment.topLeft,
              child: Icon(Icons.home),
            ),
            Align(
              alignment: Alignment.center,
              child: Icon(Icons.search),
            ),
            Align(
              alignment: Alignment.bottomRight,
              child: Icon(Icons.settings),
            ),
          ],
        ),
      ),
    );
  }
}
