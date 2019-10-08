import 'package:flutter/material.dart';
import '../../services/ScreenAdaper.dart';
import '../../model/productcontent.dart';
import '../../config/Config.dart';

import '../../Widget/JdButton.dart';

class ProductContentFirst extends StatefulWidget {
  //接收的是从ProductContent中1传递过来的List
  final List _productContentList;
  ProductContentFirst(this._productContentList, {Key key}) : super(key: key);

  _ProductContentFirstState createState() => _ProductContentFirstState();
}

class _ProductContentFirstState extends State<ProductContentFirst> {
  ProductContentitem _productContent;
  List _attr = [];

  @override
  void initState() {
    super.initState();
    this._productContent =
        widget._productContentList[0]; //widget._productContentList指的是上边传递过来的参数
    this._attr = this._productContent.attr;
    // print(this._attr);// ?
    //[{"cate":"鞋面材料","list":["牛皮 "]},{"cate":"闭合方式","list":["系带"]},{"cate":"颜色","list":["红色","白色","黄色"]}]
  }

  // 应该是 _attr --->attrItem--->attrItem.list(item)
  // 封装组件，渲染AttrItem
  List<Widget> _getAttrItemWidget(attrItem) {
    List<Widget> attrItemList = [];
    attrItem.list.forEach((item) {
      attrItemList.add(Container(
        margin: EdgeInsets.all(10),
        child: Chip(
          label: Text("${item}"),
          padding: EdgeInsets.all(10),
        ),
      ));
    });
    return attrItemList;
  }

  // 封装组件，渲染attr
  List<Widget> _getAttrWidget() {
    List<Widget> attrList = [];
    this._attr.forEach((attrItem) {
      attrList.add(Wrap(
        children: <Widget>[
          Container(
            width: ScreenAdaper.width(120),
            child: Padding(
              padding: EdgeInsets.only(top: ScreenAdaper.height(22)),
              child: Text(
                "${attrItem.cate}:",
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
            ),
          ),
          Container(
            width: ScreenAdaper.width(590),
            child: Wrap(
              children: _getAttrItemWidget(attrItem),
            ),
          ),
        ],
      ));
    });
    return attrList;
  }

  // 底部弹出框
  _attrBottomSheet() {
    showModalBottomSheet(
        context: context,
        builder: (context) {
          return GestureDetector(
            // 解决showModelBottomSheet点击消失的问题
            onTap: () {
              return false;
            },
            child: Stack(
              children: <Widget>[
                Container(
                  padding: EdgeInsets.all(ScreenAdaper.width(20)),
                  child: ListView(
                    children: <Widget>[
                      Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: _getAttrWidget(),
                      )
                    ],
                  ),
                ),
                Positioned(
                  bottom: 0,
                  width: ScreenAdaper.width(750),
                  height: ScreenAdaper.height(76),
                  child: Row(
                    children: <Widget>[
                      Expanded(
                        flex: 1,
                        child: Container(
                          margin: EdgeInsets.fromLTRB(10, 0, 0, 0),
                          child: JdButton(
                            color: Color.fromRGBO(253, 1, 0, 0.9),
                            text: "加入购物车",
                            cb: () {
                              print("立即购买");
                            },
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          );
        });
  }

  @override
  Widget build(BuildContext context) {
    // 得到图片url
    String pic = Config.domain + this._productContent.pic;
    pic = pic.replaceAll("\\", "/");

    return Container(
      padding: EdgeInsets.all(10),
      child: ListView(
        children: <Widget>[
          // 商品图片及宽高适应比
          AspectRatio(
            aspectRatio: 16 / 9,
            child: Image.network(pic, fit: BoxFit.cover),
          ),
          // 标题
          Container(
            padding: EdgeInsets.only(top: ScreenAdaper.height(10)),
            child: Text(
              "${this._productContent.title}",
              style: TextStyle(
                color: Colors.black87,
                fontSize: ScreenAdaper.size(36),
              ),
            ),
          ),
          // 副标题
          Container(
            padding: EdgeInsets.only(top: ScreenAdaper.height(10)),
            child: Text(
              "${this._productContent.subTitle}",
              style: TextStyle(
                color: Colors.black54,
                fontSize: ScreenAdaper.size(28),
              ),
            ),
          ),
          // 价格
          Container(
            padding: EdgeInsets.only(top: ScreenAdaper.height(10)),
            child: Row(
              children: <Widget>[
                // 特价
                Expanded(
                  flex: 1,
                  child: Row(
                    children: <Widget>[
                      Text("特价："),
                      Text(
                        "￥${this._productContent.price}",
                        style: TextStyle(
                          color: Colors.red,
                          fontSize: ScreenAdaper.size(46),
                        ),
                      ),
                    ],
                  ),
                ),
                // 原价
                Expanded(
                  flex: 1,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Text("原价："),
                      Text(
                        "￥${this._productContent.oldPrice}",
                        style: TextStyle(
                          color: Colors.black38,
                          fontSize: ScreenAdaper.size(28),
                          decoration: TextDecoration.lineThrough,
                        ),
                      )
                    ],
                  ),
                ),
              ],
            ),
          ),
          // 筛选
          Container(
            margin: EdgeInsets.only(top: ScreenAdaper.height(10)),
            height: ScreenAdaper.height(80),
            child: InkWell(
              onTap: () {
                _attrBottomSheet();
              },
              child: Row(
                children: <Widget>[
                  Text(
                    "已选：",
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  Text("115，黑色，XL，1件"),
                ],
              ),
            ),
          ),
          Divider(),
          // 商品运费
          Container(
            height: ScreenAdaper.height(80),
            child: Row(
              children: <Widget>[
                Text(
                  "运费：",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text("免运费"),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
