import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import 'dart:convert';

class NewsPage extends StatefulWidget {
  @override
  _NewsPageState createState() => _NewsPageState();
}

class _NewsPageState extends State<NewsPage> {
  List _list = [];
  int _page = 1;
  bool hasMore = true;
  ScrollController _scrollController = new ScrollController();

  @override
  void initState() {
    super.initState();
    this._getData();
    // print("sssssssssssssssssssssssssss");

    //  监听滚动的事件 --->判断有问题，需要换成整数
    _scrollController.addListener(() {
      // print(_scrollController.position.pixels); //得到下拉的距离
      // print(_scrollController.position.maxScrollExtent); //得到页面的高度
      if (_scrollController.position.pixels.toInt() ==
          _scrollController.position.maxScrollExtent.toInt()) {
        this._getData();
      }
    });
  }

  // 请求得到数据
  void _getData() async {
    if (this.hasMore) {
      var url =
          "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=${this._page}";
      // print(url);
      Response response = await Dio().get(url);
      // 数据在浏览器上时会进行自动编码
      var res = json.decode(response.data)["result"]; //数据在拿不回来时可以试着将它解码
      // print(res);
      setState(() {
        //  this._list = res;//新的内容信息将老的信息覆盖掉，存到了_list中了
        this._list.addAll(res); //将每一页的数据拼接统一放到_list中
        this._page++;
      });
      // 判断是否是最后一页
      if (res.length < 20) {
        setState(() {
          this.hasMore = false;
        });
      }
    }
  }

  //实现下拉刷新，没有返回值void
  Future<void> _onRefresh() async {
    // 实现下拉刷新就是加载数据 Duration--->表示间隔时间
    await Future.delayed(Duration(milliseconds: 2000), () {
      _getData(); //实现了请求数据
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("新闻页面"),
      ),
      // 为实现下拉刷新，使用组件RefreshIndicator内置的组件
      // 所谓的下拉刷新，就是重新请求第一页数据
      body: this._list.length > 0
          ? RefreshIndicator(
              onRefresh: _onRefresh,
              child: ListView.builder(
                //需要循环数据，就使用builder
                controller: _scrollController, //想要使用上拉加载，需要配置controller
                itemCount: this._list.length,
                itemBuilder: (context, index) {
                  // 在列表渲染到最后一条数据时加一个圈圈
                  if (index == this._list.length - 1) {
                    return Column(
                      children: <Widget>[
                        ListTile(
                          title: Text(
                            "${this._list[index]['title']}",
                            maxLines: 1,
                          ),
                        ),
                        Divider(),
                        _getMoreWidget()
                      ],
                    );
                  } else {
                    return Column(
                      children: <Widget>[
                        ListTile(
                          title: Text(
                            "${this._list[index]['title']}",
                            maxLines: 1,
                          ),
                        ),
                        Divider(),
                      ],
                    );
                  }
                },
              ),
            )
          : _getMoreWidget(),
    );
  }

  //加载中的圈圈
  Widget _getMoreWidget() {
    if (hasMore) {
      return Center(
        child: Padding(
          padding: EdgeInsets.all(10.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Text(
                '加载中...',
                style: TextStyle(fontSize: 16.0),
              ),
              CircularProgressIndicator(
                strokeWidth: 1.0,
              )
            ],
          ),
        ),
      );
    } else {
      return Center(
        child: Text("--我是有底线的--"),
      );
    }
  }
}
