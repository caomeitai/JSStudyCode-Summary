import 'package:flutter/material.dart';
import './views/Home.dart';
import './views/My.dart';
import './views/Settings.dart';

class Tabs extends StatefulWidget {
  @override
  _TabsState createState() => _TabsState();
}

class _TabsState extends State<Tabs> {
  int _currentindex = 0;
  // 实现点击图标，渲染页面的效果
  List _PageList = <Widget>[
    HomePage(),
    Settings(),
    My(),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
    appBar: AppBar(
      backgroundColor: Colors.red,
      title: Container(
        child: Text("Flutter项目"),
      ),
    ),
    body: this._PageList[this._currentindex],
    // 完成底部导航
    bottomNavigationBar: BottomNavigationBar(
      currentIndex: this._currentindex,
      // 点击按钮：携带索引，改变状态
      onTap: (int index){
        setState(() {
          this._currentindex = index;
        });
      },
      items: [
        BottomNavigationBarItem(
          icon: Icon(Icons.home),
          title: Text("首页"),
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.settings),
          title: Text("设置"),
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.account_circle),
          title: Text("我的"),
        )
      ],
    ),
    );
  }
}
