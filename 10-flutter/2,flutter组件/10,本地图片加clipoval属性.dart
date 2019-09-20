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
        title: Text("金泰亨"),
      ),
      body: HomePage(),
    )
  );
 }
}

// 使用clipoval属性外还使用的是本地图片
class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        child: ClipOval(
          // 注意在pubspec.yaml中assets的图片配置
          child: Image.asset("images/1.jpg"),
        ),
    ),
   );
  }
}

