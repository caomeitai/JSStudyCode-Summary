import 'package:flutter/material.dart';
import './28,views/Category.dart';
import './28,views/Home.dart';
import './28,views/Settings.dart';

// 使用的是动态组件
class Tabs extends StatefulWidget {
  @override
  _TabsState createState() => _TabsState();
}

class _TabsState extends State<Tabs> {
  int _currentindex = 0;
  // 创建列表（数组），里面存放小组件，当点击不同图标时显示不同组件
  List _pageList = <Widget>[//里面只能放小部件
  // 可以将组件创建出来new，new可以省略
    Home(),
    Category(),
    Settings(),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Tabs组件"),
      ),
      // body: Text("hello Tabs!"),
      body: this._pageList[this._currentindex],//对应着的点击相应小图标时，渲染不同的组件
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: this._currentindex,//将默认0的索引赋给currentIndex
        onTap: (int index){
        setState(() {
          this._currentindex = index;//点击事件会将对应的索引赋给当前索引
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