import 'package:flutter/material.dart';

class localImage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("防弹少年团")),
      body: Center(
        child: Image(
          //需要在pubspec.yaml中配置asset一个图片路径
          image: AssetImage("images/1.jpg")
        ),
      ),
    );
  }
}