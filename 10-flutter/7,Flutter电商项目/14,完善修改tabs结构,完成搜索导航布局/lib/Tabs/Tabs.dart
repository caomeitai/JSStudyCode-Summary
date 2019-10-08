import 'package:flutter/material.dart';
import '../services/ScreenAdaper.dart';

import '../views/Home.dart';
import '../views/Category.dart';
import '../views/Cart.dart';
import '../views/User.dart';

class Tabs extends StatefulWidget {
  @override
  _TabsState createState() => _TabsState();
}

class _TabsState extends State<Tabs> {
  int _currentIndex = 0;
  PageController _pageController; //声明定义变量
  @override
  initState() {
    super.initState();
    // 默认滚动控制器初始页为当前页
    this._pageController = new PageController(initialPage: this._currentIndex);
    print(this._currentIndex);
  }

  List<Widget> _PageList = [HomePage(), Category(), CartPage(), UserPage()];
  @override
  Widget build(BuildContext context) {
    ScreenAdaper.init(context); //初始化
    return Scaffold(
      appBar: _currentIndex != 3
          ? AppBar(
              //得到除了用户中心外的所有页面都存在搜索框
              leading: IconButton(
                //左边小图标
                onPressed: null,
                icon: Icon(
                  Icons.center_focus_weak,
                  size: 28,
                  color: Colors.black38,
                ),
              ),
              title: InkWell(
                //搜索框
                child: Container(
                  padding: EdgeInsets.only(left: ScreenAdaper.width(10)),
                  height: ScreenAdaper.height(68),
                  decoration: BoxDecoration(
                    color: Color.fromRGBO(233, 233, 233, 0.8),
                    borderRadius: BorderRadius.circular(30),
                  ),
                  child: Row(
                    children: <Widget>[
                      Icon(Icons.search),
                      Text(
                        "笔记本",
                        style: TextStyle(
                          fontSize: ScreenAdaper.size(28),
                        ),
                      )
                    ],
                  ),
                ),
                onTap: () {
                  Navigator.pushNamed(context, "/search");
                },
              ),
              actions: <Widget>[
                //右边小图标
                IconButton(
                  onPressed: null,
                  icon: Icon(Icons.message, size: 28, color: Colors.black38),
                )
              ],
            )
          : AppBar(
              title: Text("用户中心"),
            ),
      body: PageView(
        //通过该组件来实现页面随导航的切换
        controller: this._pageController, //滚轮控制器，控制当前每一页
        children: this._PageList, //渲染每一组件
        onPageChanged: (index) {
          setState(() {
            this._currentIndex = index;
          });
        },
        physics: NeverScrollableScrollPhysics(), //禁止pageView滑动
      ),
      bottomNavigationBar: BottomNavigationBar(
        // 实现点击图标，图标变色
        currentIndex: this._currentIndex,
        onTap: (index) {
          // 底部导航点击除了改变索引，还有伴随索引进行页面跳转
          setState(() {
            this._currentIndex = index;
            this._pageController.jumpToPage(index);
          });
        },
        //底部导航默认只可有三个，这一行可设置三个以上的导航
        type: BottomNavigationBarType.fixed,
        fixedColor: Colors.red,
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), title: Text("首页")),
          BottomNavigationBarItem(
              icon: Icon(Icons.category), title: Text("分类")),
          BottomNavigationBarItem(
              icon: Icon(Icons.shopping_cart), title: Text("购物车")),
          BottomNavigationBarItem(
              icon: Icon(Icons.account_circle), title: Text("我的")),
        ],
      ),
    );
  }
}
