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
  final GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>(); //直接去百度查就OK

  // 定义_scrollController滚动条控制器；用于上拉分页--->是ListView的控制器
  ScrollController _scrollController = ScrollController();

  /*-----定义的全局变量 -----*/
  int _page = 1; //分页
  int _pageSize = 8; //每页数据条数
  // 排序规则:价格升序 sort=price_1 价格降序 sort=price_-1  销量升序 sort=salecount_1 销量降序 sort=salecount_-1
  String _sort = ""; //排序
  // 解决重复请求的问题，最初请求数据
  bool flag = true;
  //是否还有数据
  bool _hasMore = true;
  //存放列表数据
  List _productList = [];
 
  @override
  void initState() {
    super.initState();
    _getProductListData();

    //监听滚动条滚动事件，在滚动条滚动时判断之后调用商品列表数据  
    _scrollController.addListener(() {
      // _scrollController.position.pixels//获取滚动条滚动的高度
      // _scrollController.position.maxScrollExtent//获取页面高度
      if(_scrollController.position.pixels>_scrollController.position.maxScrollExtent-20){//就代表一页的内容将要加载完毕
        if(this.flag &&this._hasMore){//仍存在内容需要加载
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
    var api = "${Config.domain}api/plist?cid=${widget.arguments["cid"]}&page=${this._page}&sort=${this._sort}&pageSize=${this._pageSize}";
    var res = await Dio().get(api);
    var productList = new ProductModel.fromJson(res.data);
    //  print(productList.result.length);
    if (productList.result.length < this._pageSize) { //不再有数据啦
      setState(() {
        // this._productList = productList.result;//它是每次请求回来的数据将前一次的替换掉啦
        this._productList.addAll(productList.result);//这是进行叠加，得到所有的数据
        this._hasMore = false; //没有更多的数据
        this.flag = true; //仍会请求数据
      });
    } else {//还存在剩余数据可以去请求
      this._productList.addAll(productList.result);
      this._page++;
      this.flag = true; //再去请求数据
    }
  }
  
  // 显示加载中的圆圈，和最后加载完毕提示信息
  Widget _showMore(index){
    if(this._hasMore){//仍存在很多数据,判断是不是每页的最后一条数据
      return (index == this._productList.length-1)? LoadingWidget() :Text("");
    }else{//是不是所有数据的最后
      return (index == this._productList.length-1)? Text("--我是有底线的--"):Text("");
    } 
  }

  // 商品列表
  Widget _productListWidget() {
    if (this._productList.length > 0) {
      return Container(
        padding: EdgeInsets.all(10),
        margin: EdgeInsets.only(top: ScreenAdaper.height(80)), //给筛选功能留出位置与空间
        child: ListView.builder(
          controller: _scrollController,//ListView中存在滚动条控制器
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
                      child: Image.network(pic,fit: BoxFit.cover),
                    ),
                    Expanded(
                      flex: 1,
                      child: Container(
                        height: ScreenAdaper.height(180),
                        margin: EdgeInsets.only(left: ScreenAdaper.width(20)),
                        child: Column(
                          mainAxisAlignment:MainAxisAlignment.spaceBetween, //更好的处理了富余空间
                          crossAxisAlignment:CrossAxisAlignment.start, //使得组件全部从头开始排列
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
    }else{
      return LoadingWidget();
    }
  }

  // 筛选导航
  Widget _subHeaderWidget() {
    return Positioned(
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
          children: <Widget>[
            Expanded(
              //将内容拓展开
              flex: 1,
              child: InkWell(
                //筛选导航是可点击的
                onTap: () {},
                child: Padding(
                  padding: EdgeInsets.fromLTRB(
                      0, ScreenAdaper.height(16), 0, ScreenAdaper.height(16)),
                  child: Text(
                    "综合",
                    textAlign: TextAlign.center,
                    style: TextStyle(color: Colors.red),
                  ),
                ),
              ),
            ),
            Expanded(
              //将内容拓展开
              flex: 1,
              child: InkWell(
                //筛选导航是可点击的
                onTap: () {},
                child: Padding(
                  padding: EdgeInsets.fromLTRB(
                      0, ScreenAdaper.height(16), 0, ScreenAdaper.height(16)),
                  child: Text(
                    "销量",
                    textAlign: TextAlign.center,
                  ),
                ),
              ),
            ),
            Expanded(
              //将内容拓展开
              flex: 1,
              child: InkWell(
                //筛选导航是可点击的
                onTap: () {},
                child: Padding(
                  padding: EdgeInsets.fromLTRB(
                      0, ScreenAdaper.height(16), 0, ScreenAdaper.height(16)),
                  child: Text(
                    "价格",
                    textAlign: TextAlign.center,
                  ),
                ),
              ),
            ),
            Expanded(
              //将内容拓展开
              flex: 1,
              child: InkWell(
                //筛选导航是可点击的
                onTap: () {
                  _scaffoldKey.currentState.openEndDrawer();
                },
                child: Padding(
                  padding: EdgeInsets.fromLTRB(
                      0, ScreenAdaper.height(16), 0, ScreenAdaper.height(16)),
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
        children: <Widget>[
          _productListWidget(), 
          _subHeaderWidget()
        ],
      ),
    );
  }
}
