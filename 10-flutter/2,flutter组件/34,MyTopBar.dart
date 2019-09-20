import 'package:flutter/material.dart';


class MyTopBar extends StatefulWidget {

  @override
  _MyTopBarState createState() => _MyTopBarState();
}

// 顶部Bar  TabBar组件需要有一个控制器
// extends表示继承  而在tabbar组件中除了继承还需要with-->SingleTickerProviderStateMixin它是对tabbar进行的配置
class _MyTopBarState extends State<MyTopBar> with SingleTickerProviderStateMixin {
  TabController _controller;//第二步需要控制器
  //它是flutter中的生命周期，会自动调用 
  @override
  void initState() {
    // 表示给导航控制器controller进行初始化  控制器不仅仅在TabBar中存在，还有TabBarView中也有
    // _controller能够将页面和导航绑定到一起，最终实现切换的效果
    // length  导航/页面的个数  vsync动画效果异步匹配模式
    _controller = TabController(length:3,vsync:this);
    // 需要在钩子函数中对TabBar进行初始化
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: TabBar(//在页面的顶部渲染一个bar-->TabBar
        controller: _controller,
          tabs: <Widget>[
            // 第一步定义个容器，来盛内容
            Tab(icon: Icon(Icons.directions_bike)),
            Tab(icon: Icon(Icons.directions_bus)),
            Tab(icon: Icon(Icons.directions_subway)),
          ],
        ),
      ),
      // 存放页面级组件，以便实现页面的切换
      body: TabBarView(
        controller: _controller,
        children: <Widget>[
         SelfHomePage(page:1),
         SelfHomePage(page:2),
         SelfHomePage(page:3),
        ],
      ),
    );
  }
}

class SelfHomePage extends StatelessWidget {
  int page;
  // 类的重写，重写的目的是为了使得类可以重传参数
  // 想要接收数据就只能重写方法函数
  // @required 表示必传参
  SelfHomePage({key, @required this.page}):super(key:key);
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        "page $page",
        style: TextStyle(
          fontSize: 35,
        ),
      ),
    );
  }
}