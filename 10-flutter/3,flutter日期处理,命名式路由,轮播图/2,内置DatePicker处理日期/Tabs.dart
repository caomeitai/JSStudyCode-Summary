import 'package:flutter/material.dart';
import './Home.dart';
import './My.dart';
import './Search.dart';

class Tabs extends StatefulWidget {
  @override
  _TabsState createState() => _TabsState();
}

class _TabsState extends State<Tabs> {
  int _currentIndex = 0;
  //定义列表来存放要渲染的组件
  List<Widget> _TabsPage = [
    Home(),
    Search(),
    My(),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Flutter项目"),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Container(
            // 将组件随点击渲染到页面
            child: this._TabsPage[this._currentIndex],
          ),
        ],
      ),
      // 底部导航是Scaffold的属性，在配置时记得出错就点进去看看
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: this._currentIndex,
        // 完成点击的同时图标变色
        onTap: (int index){
          setState(() {
            this._currentIndex = index;
          });
        },
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home), 
            title: Text("首页")
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search), 
            title: Text("搜索")
          ),
          BottomNavigationBarItem(
              icon: Icon(Icons.account_circle), 
              title: Text("我的")
            )
        ],
      ),
    );
  }
}
