import 'package:flutter/material.dart';
import '../services/ScreenAdaper.dart';
// import '../config/Config.dart';
// import 'package:dio/dio.dart';

class ProductList extends StatefulWidget {
  // Map arguments;
  // ProductList({Key key,this.arguments}) : super(key : key);
  @override
  _ProductListState createState() => _ProductListState();
}

class _ProductListState extends State<ProductList> {
// GlobalKey是泛型类型，它可提高性能，为商品详情做准备
// 商品列表与详情共用一个商品图片的组件，也就没必要再重复创建组件，而是直接借用已有的组件
// GlobalKey是专门用于组件的
 final GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>();//直接去百度查就OK
  // 商品列表
  Widget _productListWidget(){
    return Container(
        padding: EdgeInsets.all(10),
        margin: EdgeInsets.only(top:ScreenAdaper.height(80)),//给筛选功能留出位置与空间
        child: ListView.builder(
          itemCount: 10,
          itemBuilder: (context, index) {
            return Column(
              children: <Widget>[
                Row(
                  children: <Widget>[
                    Container(
                      //图片使用div包裹
                      width: ScreenAdaper.width(180),
                      height: ScreenAdaper.height(180),
                      child: Image.network(
                        "https://www.itying.com/images/flutter/list2.jpg",
                        fit: BoxFit.cover,
                      ),
                    ),
                    Expanded(
                      //文本使用Expanded包裹
                      flex: 1,
                      child: Container(
                        height: ScreenAdaper.height(180),
                        margin: EdgeInsets.only(left: ScreenAdaper.width(20)),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,//更好的处理了富余空间
                          crossAxisAlignment: CrossAxisAlignment.start,//使得组件全部从头开始排列
                          children: <Widget>[
                            Text(
                              "戴尔(DELL)灵越3670 英特尔酷睿i5 高性能 台式电脑整机(九代i5-9400 8G 256G)",
                              maxLines: 2,
                              overflow: TextOverflow.ellipsis,
                            ),
                            Row(
                              //存在两个小的div
                              children: <Widget>[
                                Container(
                                  height: ScreenAdaper.height(36),
                                  margin: EdgeInsets.fromLTRB(0, 10, 10, 0),
                                  padding: EdgeInsets.fromLTRB(10, 0, 10, 0),
                                  //注意:如果Container里面加上decoration属性，
                                  // 这个时候color属性必须得放在BoxDecoration
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(10),
                                    color: Color.fromRGBO(230, 230, 230, 0.9),
                                  ),
                                  child: Text("4g"),
                                ),
                                Container(
                                  height: ScreenAdaper.height(36),
                                  margin: EdgeInsets.fromLTRB(0, 10, 10, 0),
                                  padding: EdgeInsets.fromLTRB(10, 0, 10, 0),
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(10),
                                    color: Color.fromRGBO(230, 230, 230, 0.9),
                                  ),
                                  child: Text("126"),
                                ),
                              ],
                            ),
                            Text(
                              "￥990",
                              style: TextStyle(color: Colors.red, fontSize: 16),
                            )
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
                Divider(height: 20),//在每个商品下面加上横线
              ],
            );
          },
        ),
    );
  }
 // 筛选导航 
  Widget _subHeaderWidget(){
    return Positioned(//定位组件
    top: 0,
    width: ScreenAdaper.width(750),
    height: ScreenAdaper.height(80),
    child: Container(
     width: ScreenAdaper.width(750),
     height: ScreenAdaper.height(80),
     decoration: BoxDecoration(
       border: Border(//通过这样可以只设置一边
         bottom: BorderSide(
           width: 1,
           color: Color.fromRGBO(233, 233, 233, 0.9)
         ),
       ),
     ),
     child: Row(
       children: <Widget>[
         Expanded(//将内容拓展开
           flex: 1,
           child: InkWell(//筛选导航是可点击的
             onTap: (){},
             child: Padding(
               padding: EdgeInsets.fromLTRB(0, ScreenAdaper.height(16), 0, ScreenAdaper.height(16)),
               child: Text(
                 "综合",
                 textAlign: TextAlign.center,
                 style: TextStyle(color: Colors.red),
                ),
             ),
           ),
         ),
         Expanded(//将内容拓展开
           flex: 1,
           child: InkWell(//筛选导航是可点击的
             onTap: (){},
             child: Padding(
               padding: EdgeInsets.fromLTRB(0, ScreenAdaper.height(16), 0, ScreenAdaper.height(16)),
               child: Text(
                 "销量",
                 textAlign: TextAlign.center,
                ),
             ),
           ),
         ),
         Expanded(//将内容拓展开
           flex: 1,
           child: InkWell(//筛选导航是可点击的
             onTap: (){},
             child: Padding(
               padding: EdgeInsets.fromLTRB(0, ScreenAdaper.height(16), 0, ScreenAdaper.height(16)),
               child: Text(
                 "价格",
                 textAlign: TextAlign.center,
                ),
             ),
           ),
         ),
         Expanded(//将内容拓展开
           flex: 1,
           child: InkWell(//筛选导航是可点击的
             onTap: (){
               //对于GlobalKey，它是对象，其中有相关属性
               //currentElement，currentWidget，currentState
               _scaffoldKey.currentState.openEndDrawer();
             },
             child: Padding(
               padding: EdgeInsets.fromLTRB(0, ScreenAdaper.height(16), 0, ScreenAdaper.height(16)),
               child: Text(
                 "筛选",
                 textAlign: TextAlign.center,
                ),
             ),
           ),
         ),
       ],
     ),
    ),
    );
  }

  @override
  Widget build(BuildContext context) {
    ScreenAdaper.init(context); //初始化
    return Scaffold(
      key:_scaffoldKey,//使用GlobalKey可以保证全局的唯一性
      appBar: AppBar(
        title: Text("商品列表"),
        actions: <Widget>[
          Text(""),
        ],
      ),
      endDrawer: Drawer(//右侧的抽屉组件
        child: Container(
          child: Text("实现筛选功能"),
        ),
      ),
      body: Stack(
        children: <Widget>[
          _productListWidget(),
          _subHeaderWidget()
        ],
      ),
    );
  }
}
