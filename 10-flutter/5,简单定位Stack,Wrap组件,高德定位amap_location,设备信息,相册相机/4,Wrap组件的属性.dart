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

class PositionDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 2,//每个小按钮之间的间隔
      // 其他的属性都试过了，没起作用
      children: <Widget>[
        RaisedButton(
          onPressed: () {},
          child: Text("第一集"),
        ),
        RaisedButton(
          onPressed: () {},
          child: Text("第二集"),
        ),
        RaisedButton(
          onPressed: () {},
          child: Text("第三集"),
        ),
        RaisedButton(
          onPressed: () {},
          child: Text("第四集"),
        ),
        RaisedButton(
          onPressed: () {},
          child: Text("第五集"),
        ),
        RaisedButton(
          onPressed: () {},
          child: Text("第六集"),
        ),
        RaisedButton(
          onPressed: () {},
          child: Text("第七集"),
        ),
      ],
    );
  }
}
