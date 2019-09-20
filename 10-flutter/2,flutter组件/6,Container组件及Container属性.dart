import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';

void main(){
  runApp(MyApp());
}
// 练习Container组件及Container属性

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home:Scaffold(
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
        // margin: EdgeInsets.all(30),
        // margin: EdgeInsets.fromLTRB(20, 30, 30, 20),
        // padding:EdgeInsets.all(20) ,
        padding: EdgeInsets.fromLTRB(60, 60, 50, 50),
        // alignment: Alignment.bottomCenter,//控制的是文本对齐方式
        decoration: BoxDecoration(
          color: Colors.purple,
          border: Border.all(
            width:2,
            color: Colors.red
          ),
          borderRadius: BorderRadius.all(//设置边框的四条边
            Radius.circular(20)//不能直接设置，需要circular
          )
        ),
        child: Text(
          "hello Flutter!",
          style: TextStyle(
            // 一些文本有关设置
            fontSize: 30,
            fontStyle: FontStyle.italic,
            fontWeight: FontWeight.w500,
            color: Color.fromRGBO(255, 0, 0, 1),
            decorationStyle:TextDecorationStyle.dashed 
          ),
        ),
      ),
    );
  }
}

