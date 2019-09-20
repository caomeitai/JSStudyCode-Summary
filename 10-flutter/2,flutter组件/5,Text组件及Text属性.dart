import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/widgets.dart';

void main(){
  runApp(MyApp());
}
// 练习Text组件相关属性  Container,Text组件及Text属性


class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(//里面存在home属性，可渲染其他组件
      home:Scaffold(//脚手架，便于渲染页面
      appBar: AppBar(
        title: Text("Flutter"),
      ),
      body: HomePage(),
    )
  );
 }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(//使其处于中间
      child: Container(
        width: 300,
        height: 300,
        decoration: BoxDecoration(
          color: Colors.purple
        ),
        child: Text(
          "hello Flutter!",
          // textScaleFactor: 2,//将文本扩大几倍
          // overflow: TextOverflow.ellipsis,//处理溢出
          // maxLines: 2,//内容显示几行
          // textAlign: TextAlign.center,//使文本水平居中
          // textDirection:TextDirection.rtl,//!hello Flutter
          // textDirection:TextDirection.ltr,//hello Flutter!
          style: TextStyle(
            fontSize: 30,
            fontStyle: FontStyle.italic,
            fontWeight: FontWeight.w500,
            color: Color.fromRGBO(255, 0, 0, 1),//利用数字来表示颜色
            // decoration: TextDecoration.lineThrough,//删除线
            // decorationColor: Colors.black,/没起作用
            decorationStyle:TextDecorationStyle.dashed 
          ),
        ),
      ),

    );
  }
}

