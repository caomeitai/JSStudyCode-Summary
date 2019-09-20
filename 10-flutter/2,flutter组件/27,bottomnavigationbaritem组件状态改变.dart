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
      home: Tabs(),
    );
  }
}

// 创建的是动态组件--->两部分状态管理与结构管理
class Tabs extends StatefulWidget {
  @override
  _TabsState createState() => _TabsState();
}

// 设置BottomNavigationBar以外，还完成点击事件
// 改变状态只存在setState函数--->率先定义好tabbar索引
class _TabsState extends State<Tabs> {
  int  _currentindex = 0;//定义的内部变量都是_打头
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Tabs组件"),
      ),
      body: Text("tabbar"),
      // 真正的底部tabbar在下面
      bottomNavigationBar: BottomNavigationBar(
        // 在BottomNavigationBar组件中存在该属性，只需拿变量与其做对比
        currentIndex: _currentindex,//默认当前的下标索引为0
        
        // 当点击下面tabbar时，将索引带过来赋值给默认索引
        onTap: (int index){//点击第一个，index为0；点击第二个，index为1；点击第三个，index为2。
          // 改变状态的函数是箭头函数
          setState((){//点击是将相应索引带过来改变状态
           this._currentindex = index;
          });
        },
        
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            title: Text("首页"),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.category),
            title: Text("分类"),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            title: Text("设置"),
          ),
        ],
      ),
    );
  }
}


