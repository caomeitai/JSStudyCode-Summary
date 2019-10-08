import 'package:flutter/material.dart';
import 'package:dio/dio.dart'; //请求数据
import '../config/Config.dart'; //网址

import '../model/productcontent.dart'; //商品详情数据模型
import '../services/ScreenAdaper.dart'; //屏幕适应，高度表示法

import '../Widget/LoadingWidget.dart'; // 加载动画组件
import '../Widget/JdButton.dart'; //按钮组件

// 商品详情组件
import './ProductContent/ProductContentFirst.dart';
import './ProductContent/ProductContentSecond.dart';
import './ProductContent/ProductContentThird.dart';

class ProductContentPage extends StatefulWidget {
  final Map arguments;
  ProductContentPage({this.arguments});
  @override
  _ProductContentPageState createState() => _ProductContentPageState();
}

class _ProductContentPageState extends State<ProductContentPage> {
  List _productContentList = [];
  @override
  void initState() {
    super.initState();
    this._getContentData();
  }

  //获取商品详情数据
  _getContentData() async {
    // print("dddddddddddddddddddddddd");
    // print(widget.arguments['id']);//当id拿不到是注意路由组件
    // print("dddddddddddddddddddddddd");
    var api = "${Config.domain}api/pcontent?id=${widget.arguments['id']}";
    // print(api);
    var res = await Dio().get(api);
    var productContent =
        new ProductContentModel.fromJson(res.data); //转成可以用点运算符的对象
    // print(productContent.result.title);
    // print(productContent.result.pic);
    setState(() {
      this._productContentList.add(productContent.result);
    });
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      child: Scaffold(
        appBar: AppBar(
          title: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              // 头部导航
              Container(
                width: ScreenAdaper.width(400),
                child: TabBar(
                  indicatorColor: Colors.red,
                  indicatorSize: TabBarIndicatorSize.label, //导航下划线随label来改变
                  tabs: <Widget>[
                    Tab(
                      child: Text("商品"),
                    ),
                    Tab(
                      child: Text("详情"),
                    ),
                    Tab(
                      child: Text("评价"),
                    ),
                  ],
                ),
              ),
            ],
          ),
          // 在头部导航后面的小图标
          actions: <Widget>[
            IconButton(
              icon: Icon(Icons.more_horiz),
              onPressed: () {
                showMenu(
                  context: context,
                  position: RelativeRect.fromLTRB(
                      ScreenAdaper.width(600),
                      ScreenAdaper.height(76),
                      ScreenAdaper.width(10),
                      ScreenAdaper.height(0)),
                  items: [
                    PopupMenuItem(
                      child: Row(
                        children: <Widget>[
                          Icon(Icons.home),
                          Text("首页"),
                        ],
                      ),
                    ),
                    PopupMenuItem(
                      child: Row(
                        children: <Widget>[
                          Icon(Icons.search),
                          Text("搜索"),
                        ],
                      ),
                    ),
                  ],
                );
              },
            ),
          ],
        ),
        // 渲染商品详情信息
        body: this._productContentList.length > 0
            ? Stack(
                children: <Widget>[
                  TabBarView(
                    children: <Widget>[
                      ProductContentFirst(this._productContentList),
                      ProductContentSecond(this._productContentList),
                      ProductContentThird()
                    ],
                  ),
                  // 这是最底部的购物车图标，与加入购物车和立即购买盒子定位
                  Positioned(
                    //定位最底部
                    width: ScreenAdaper.width(750),
                    height: ScreenAdaper.height(88),
                    bottom: 0,
                    child: Container(
                      decoration: BoxDecoration(
                        border: Border(
                          top: BorderSide(
                            color: Colors.black26,
                            width: ScreenAdaper.width(1),
                          ),
                        ),
                        color: Colors.white,
                      ),
                      child: Row(
                        children: <Widget>[
                          Container(
                            margin: EdgeInsets.only(left: ScreenAdaper.width(10)),
                            padding:EdgeInsets.only(bottom: ScreenAdaper.height(5)),
                            width: ScreenAdaper.width(100),
                            height: ScreenAdaper.height(88),
                            // 出现溢出现象时只需要将原本的组件换成listView就行啦！
                            child: ListView(
                              children: <Widget>[
                                Icon(Icons.shopping_cart),
                                Text("购物车"),
                              ],
                            ),
                          ),
                          Expanded(
                            flex: 1,
                            child: JdButton(
                              color: Color.fromRGBO(253, 1, 0, 0.9),
                              text: "加入购物车",
                              cb: () {
                                print("加入购物车");
                              },
                            ),
                          ),
                          Expanded(
                            flex: 1,
                            child: JdButton(
                              color: Color.fromRGBO(255, 165, 0, 0.9),
                              text: "立即购买",
                              cb: () {
                                print("立即购买");
                              },
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              )
            : LoadingWidget(), //加载动画
      ),
    );
  }
}
