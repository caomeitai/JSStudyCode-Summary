import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/widgets.dart';

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Flutter",
      theme: ThemeData(
        primaryColor: Colors.blue
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text("TabBar"),
       ),

      //  最主要是创建tabbar中的bottomnavigationbar
      // 这个组件中存在多个item，里面有icon和title，形成items
       body: Text("hello tabbar"),
      //它是处于body下面的，页面最底部
      //页面底部的tabbar--->底部可以有多个bar
       bottomNavigationBar: BottomNavigationBar(
        //bar肯定有多项，使用items
        items: [
          // 一小项：里面有小图标和标题
          BottomNavigationBarItem(
           icon: Icon(Icons.home),
           title: Text("首页")
          ),
          BottomNavigationBarItem(
           icon: Icon(Icons.category),
           title: Text("分类")
          ),
          BottomNavigationBarItem(
           icon: Icon(Icons.settings),
           title: Text("设置")
          ),
        ],
       ),
      ),
    );
  }
}


