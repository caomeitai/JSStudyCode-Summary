import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/rendering.dart';
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

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        width: 500,
        height: 600,
        decoration: BoxDecoration(
          color: Colors.white,
          // borderRadius:BorderRadius.circular(100),
          borderRadius: BorderRadius.all(
            Radius.circular(100)
          ),

          // 将图片作为背景图片
          image: DecorationImage(
            image: NetworkImage("https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3665577549,3303784426&fm=26&gp=0.jpg")
          ),
        ),
      ),
    );
  }
}

