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
// Positioned组件是通过坐标的感觉来控制其位置的
class PositionDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        width: 300,
        height: 300,
        color: Colors.pink,
        child: Stack(
          children: <Widget>[
            Positioned(
              // 就相当于html中的定位，直接来写就ok啦
              bottom: 0,
              right: 0,
              child: Icon(Icons.search),
            ),
            Positioned(
              top: 0,
              left: 0,
              child: Icon(Icons.home),
            ),
            Positioned(
              top: 150,
              right: 150,
              child: Icon(Icons.access_alarm),
            ),
          ],
        ),
      ),
    );
  }
}
