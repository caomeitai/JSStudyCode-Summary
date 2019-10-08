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
  @override
  Widget build(BuildContext context) {
    ScreenAdaper.init(context); //初始化
    return Scaffold(
      appBar: AppBar(
        title: Text("商品列表"),
      ),
      body: Padding(
        //使用Padding主要是为了设置宽高padding,margin等样式方便
        padding: EdgeInsets.all(10),
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
      ),
    );
  }
}
