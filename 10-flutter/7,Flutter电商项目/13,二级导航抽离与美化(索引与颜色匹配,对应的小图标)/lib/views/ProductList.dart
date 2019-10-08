import 'package:flutter/material.dart';
import '../services/ScreenAdaper.dart';
import '../config/Config.dart';
import 'package:dio/dio.dart';
import '../Widget/LoadingWidget.dart';

import '../model/productList.dart';

class ProductList extends StatefulWidget {
  // 接收参数
  Map arguments;
  ProductList({Key key, this.arguments}) : super(key: key);
  @override
  _ProductListState createState() => _ProductListState();
}

class _ProductListState extends State<ProductList> {
  // GlobalKey是专门用于组件的  Scaffold组件
  final GlobalKey<ScaffoldState> _scaffoldKey =
      new GlobalKey<ScaffoldState>(); //直接去百度查就OK

  // 定义_scrollController滚动条控制器；用于上拉分页--->是ListView的控制器
  ScrollController _scrollController = ScrollController();

  /*---------------定义的全局变量 ----------*/
  int _page = 1; //分页
  int _pageSize = 8; //每页数据条数
  // 排序规则:价格升序 sort=price_1 价格降序 sort=price_-1  销量升序 sort=salecount_1 销量降序 sort=salecount_-1
  String _sort = ""; //排序
  // 解决重复请求的问题，最初请求数据
  bool flag = true;
  //是否还有数据
  bool _hasMore = true;
  // 二级导航数据
  List _subHeaderList = [
    {
      "id": 1,
      "title": "综合",
      "fileds": "all",
      "sort": -1,
    },
    {
      "id": 2,
      "title": "销量",
      "fileds": "salecount",
      "sort": -1,
    },
    {
      "id": 3,
      "title": "价格",
      "fileds": "price",
      "sort": -1,
    },
    {
      "id": 4,
      "title": "筛选",
    }
  ];
  // 二级导航选中判断，默认为1
  int _selectHeaderId = 1;

  //存放列表数据
  List _productList = [];

  @override
  void initState() {
    super.initState();
    _getProductListData();

    //在滚动条滚动时判断之后调用商品列表数据
    _scrollController.addListener(() {
      if (_scrollController.position.pixels >
          _scrollController.position.maxScrollExtent - 20) {
        //就代表一页的内容将要加载完毕
        if (this.flag && this._hasMore) {
          //仍存在内容需要加载
          _getProductListData();
        }
      }
    });
  }

  //获取列表数据
  _getProductListData() async {
    setState(() {
      this.flag = false;
    });
    var api =
        "${Config.domain}api/plist?cid=${widget.arguments["cid"]}&page=${this._page}&sort=${this._sort}&pageSize=${this._pageSize}";
    var res = await Dio().get(api);
    var productList = new ProductModel.fromJson(res.data);
    //  print(productList.result.length);
    if (productList.result.length < this._pageSize) {
      //不再有数据啦
      setState(() {
        // this._productList = productList.result;//它是每次请求回来的数据将前一次的替换掉啦
        this._productList.addAll(productList.result); //这是进行叠加，得到所有的数据
        this._hasMore = false; //没有更多的数据
        this.flag = true; //仍会请求数据
      });
    } else {
      //还存在剩余数据可以去请求
      this._productList.addAll(productList.result);
      this._page++;
      this.flag = true; //再去请求数据
    }
  }

  // 显示加载中的圆圈，和最后加载完毕提示信息
  Widget _showMore(index) {
    if (this._hasMore) {
      return (index == this._productList.length - 1)
          ? LoadingWidget()
          : Text("");
    } else {
      return (index == this._productList.length - 1)
          ? Text("--我是有底线的--")
          : Text("");
    }
  }

  // 商品列表
  Widget _productListWidget() {
    if (this._productList.length > 0) {
      return Container(
        padding: EdgeInsets.all(10),
        margin: EdgeInsets.only(top: ScreenAdaper.height(80)), //给筛选功能留出位置与空间
        child: ListView.builder(
          controller: _scrollController, //滚动条控制器
          itemCount: this._productList.length,
          itemBuilder: (context, index) {
            // 图片url
            String pic = this._productList[index].pic;
            pic = Config.domain + pic.replaceAll('\\', '/');
            return Column(
              children: <Widget>[
                Row(
                  children: <Widget>[
                    Container(
                      width: ScreenAdaper.width(180),
                      height: ScreenAdaper.height(180),
                      child: Image.network(pic, fit: BoxFit.cover),
                    ),
                    Expanded(
                      flex: 1,
                      child: Container(
                        height: ScreenAdaper.height(180),
                        margin: EdgeInsets.only(left: ScreenAdaper.width(20)),
                        child: Column(
                          mainAxisAlignment:
                              MainAxisAlignment.spaceBetween, //更好的处理了富余空间
                          crossAxisAlignment:
                              CrossAxisAlignment.start, //使得组件全部从头开始排列
                          children: <Widget>[
                            Text(
                              "${this._productList[index].title}",
                              maxLines: 2,
                              overflow: TextOverflow.ellipsis,
                            ),
                            Row(
                              children: <Widget>[
                                Container(
                                  height: ScreenAdaper.height(36),
                                  margin: EdgeInsets.fromLTRB(0, 10, 10, 0),
                                  padding: EdgeInsets.fromLTRB(10, 0, 10, 0),
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
                              "${this._productList[index].price}",
                              style: TextStyle(color: Colors.red, fontSize: 16),
                            )
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
                Divider(height: 20),
                _showMore(index),
              ],
            );
          },
        ),
      );
    } else {
      return LoadingWidget();
    }
  }

  // 导航改变时触发，会需要导航对应索引--->除了触发导航对应函数外，还会改变导航id
  _subHeaderChange(id) {
    if (id == 4) {
      //此时导航选中了筛选，点击它会出现抽屉
      _scaffoldKey.currentState.openEndDrawer();
      setState(() {
        this._selectHeaderId = id;
      });
    } else {
      //其它三个导航被选中
      setState(() {
        this._selectHeaderId = id;
        // 排序规则:价格升序 sort=price_1 价格降序 sort=price_-1  销量升序 sort=salecount_1 销量降序 sort=salecount_-1
        this._sort =
            "${this._subHeaderList[id - 1]['fileds']}_${this._subHeaderList[id - 1]['sort']}";
        // 重置分页
        this._page = 1; //每个导航对应的首页
        // 重置商品数据
        this._productList = [];
        //重置_hasMore
        this._hasMore = true;
        //重新请求
        this._getProductListData();
        // 改变sort排序--->由升序改降序或由降序改升序
        this._subHeaderList[id - 1]['sort'] =
            this._subHeaderList[id - 1]['sort'] * -1;
        // 回到顶部 页面最初
        _scrollController.jumpTo(0);
      });
    }
  }

  // 显示header Icon
  Widget _showIcon(id) {
    if (id == 2 || id == 3) {
      if (this._subHeaderList[id - 1]["sort"] == 1) {
        return Icon(Icons.arrow_drop_down);
      }
      return Icon(Icons.arrow_drop_up);
    }
    return Text("");
  }

  // 筛选导航
  Widget _subHeaderWidget() {
    return Positioned(//不写下面三行报错：_positions.isNotEmpty'
      top: 0,
      width: ScreenAdaper.width(750),
      height: ScreenAdaper.height(80),
      child: Container(
        width: ScreenAdaper.width(750),
        height: ScreenAdaper.height(80),
        decoration: BoxDecoration(
          border: Border(
            bottom:
                BorderSide(width: 1, color: Color.fromRGBO(233, 233, 233, 0.9)),
          ),
        ),
        child: Row(
          //原本这是返回的Widget组件，但现在变了，
          // 想要不报错需要在其后面加上.toList()
          children: this._subHeaderList.map((value) {
            return Expanded(
              flex: 1,
              child: InkWell(
                onTap: () {
                  _subHeaderChange(value["id"]);
                },
                child: Padding(
                  padding: EdgeInsets.fromLTRB(
                      0, ScreenAdaper.height(16), 0, ScreenAdaper.height(16)),
                  child: Row(
                    children: <Widget>[
                      Text(
                        "${value['title']}",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                            // 判断导航是否被选中啦
                            color: (this._selectHeaderId == value["id"])
                                ? Colors.red
                                : Colors.black54),
                      ),
                      _showIcon(value["id"])
                    ],
                  ),
                ),
              ),
            );
          }).toList(),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    ScreenAdaper.init(context); //初始化
    return Scaffold(
      key: _scaffoldKey, //使用GlobalKey可以保证全局的唯一性
      appBar: AppBar(
        title: Text("商品列表"),
        actions: <Widget>[
          Text(""),
        ],
      ),
      endDrawer: Drawer(
        //右侧的抽屉组件
        child: Container(
          child: Text("实现筛选功能"),
        ),
      ),
      body: Stack(
        children: <Widget>[_productListWidget(), _subHeaderWidget()],
      ),
    );
  }
}
