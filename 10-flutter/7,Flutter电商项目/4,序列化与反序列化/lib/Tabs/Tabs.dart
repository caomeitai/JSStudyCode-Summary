import 'package:flutter/material.dart';
import '../views/Home.dart';
import '../views/Category.dart';
import '../views/Find.dart';
import '../views/Cart.dart';
import '../views/User.dart';

class Tabs extends StatefulWidget {
  @override
  _TabsState createState() => _TabsState();
}

class _TabsState extends State<Tabs> {
  int _currentIndex = 0;
  List _ListPage = [
    HomePage(), 
    Category(), 
    FindPage(), 
    CartPage(), 
    UserPage()
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("电商项目")),
      body: this._ListPage[this._currentIndex],//不同图标对应不同页面渲染
      bottomNavigationBar: BottomNavigationBar(
        // 实现点击图标，图标变色
        currentIndex: this._currentIndex,
        onTap: (index) {
          setState(() {
            this._currentIndex = index;
          });
        },
        //底部导航默认只可有三个，这一行可设置三个以上的导航
        type: BottomNavigationBarType.fixed, 
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home), 
            title: Text("首页")
          ),
          BottomNavigationBarItem(
              icon: Icon(Icons.category), 
              title: Text("分类")
            ),
          BottomNavigationBarItem(
              icon: Icon(Icons.find_replace), 
              title: Text("发现")
            ),
          BottomNavigationBarItem(
              icon: Icon(Icons.shopping_cart), 
              title: Text("购物车")
            ),
          BottomNavigationBarItem(
              icon: Icon(Icons.account_circle), 
              title: Text("我的")
            ),
        ],
      ),
    );
  }
}
