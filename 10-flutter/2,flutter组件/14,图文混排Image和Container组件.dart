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
        title: Text(
          "金泰亨",
        ),
      ),
      body: HomePage(),
    )
  );
 }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView(
     children: <Widget>[
      //放一张网络图片
        Image.network(
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=795729840,295864683&fm=26&gp=0.jpg",
           width: 250,
           height: 250,
        ),
        // 图片的简单简介
        Container(
          child: Text(
            "金碳阿爸",
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 20,
            ),
          ),
          padding: EdgeInsets.all(10),
        ),
        Image.network(
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=795729840,295864683&fm=26&gp=0.jpg",
           width: 250,
           height: 250,
        ),
        // 图片的简单简介
        Container(
          child: Text(
            "金碳阿爸",
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 20,
            ),
          ),
          padding: EdgeInsets.all(10),
        ),
        Image.network(
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=795729840,295864683&fm=26&gp=0.jpg",
           width: 250,
           height: 250,
        ),
        // 图片的简单简介
        Container(
          child: Text(
            "金碳阿爸",
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 20,
            ),
          ),
          padding: EdgeInsets.all(10),
        ),
        Image.network(
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=795729840,295864683&fm=26&gp=0.jpg",
           width: 250,
           height: 250,
        ),
        // 图片的简单简介
        Container(
          child: Text(
            "金碳阿爸",
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 20,
            ),
          ),
          padding: EdgeInsets.all(10),
        ),
     ],
    );
  }
}