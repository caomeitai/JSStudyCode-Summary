import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import './3,selfText组件.dart';

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
      home: selfText(),
    );
  }
}
