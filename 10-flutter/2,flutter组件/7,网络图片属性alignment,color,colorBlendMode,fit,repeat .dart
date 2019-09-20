import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';

void main(){
  runApp(MyApp());
}
// 网络图片：
// 属性学习：alignment,color,colorBlendMode,fit,repeat 


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
        // 简单对Container进行简单修饰
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border.all(
            width: 2,
            color: Colors.blueAccent,
          )
        ),
        child: Image.network(
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3665577549,3303784426&fm=26&gp=0.jpg",
          // alignment: Alignment.bottomCenter,//效果不明显

          // color: Colors.red,//这样会将图片完全覆盖掉
          // colorBlendMode: BlendMode.screen,//和颜色配合就会蒙层，像是在原来基础上染上一层颜色
          
          // fit: BoxFit.cover,//以盒子大小将图片对其覆盖
          repeat: ImageRepeat.repeat,//与之前不同，它默认是不覆盖的
        ),
      ),
    );
  }
}

