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
        onTap: (int index) {
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
      // 抽屉组件，它是内置模块，这里设置的左边抽屉
      drawer: Drawer(
        // 它里面可以写任何结构
        child: Column(
          children: <Widget>[
            ListTile(
              //  leading: Icon(Icons.home),//仅仅拥有小图标
              leading: CircleAvatar(
                //给图标弄上了一个圆圈
                child: Icon(Icons.home),
              ),
              title: Text("我的首页"),
            ),
            Divider(),
            ListTile(
              leading: CircleAvatar(
                child: Icon(Icons.settings),
              ),
              title: Text("设置中心"),
            ),
            //  在每个图标下都加上一条线
            Divider(),
            ListTile(
              leading: CircleAvatar(
                child: Icon(Icons.category),
              ),
              title: Text("分类页面"),
            ),
          ],
        ),
      ),
      // 设置的是右边抽屉
      endDrawer: Drawer(
        child: Column(
          children: <Widget>[
            ListTile(
              //  leading: Icon(Icons.home),//仅仅拥有小图标
              leading: CircleAvatar(
                //给图标弄上了一个圆圈
                child: Icon(Icons.home),
              ),
              title: Text("我的首页"),
            ),
            Divider(),
            ListTile(
              leading: CircleAvatar(
                child: Icon(Icons.settings),
              ),
              title: Text("设置中心"),
            ),
            //  在每个图标下都加上一条线
            Divider(),
            ListTile(
              leading: CircleAvatar(
                child: Icon(Icons.category),
              ),
              title: Text("分类页面"),
            ),
          ],
        ),
      ),
    );
  }
}
