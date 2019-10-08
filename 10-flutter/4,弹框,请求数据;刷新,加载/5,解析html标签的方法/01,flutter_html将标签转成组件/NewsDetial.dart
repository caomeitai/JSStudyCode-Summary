import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import 'dart:convert';
// 将html转成组件
import 'package:flutter_html/flutter_html.dart';

// 跳转详情需要传递参数，那么路径配置要求arguments
class NewsDetial extends StatefulWidget {
  Map arguments;
  // 拿到传递过来的参数
  NewsDetial({this.arguments});
  @override
  _NewsDetialState createState() => _NewsDetialState(this.arguments);
}

class _NewsDetialState extends State<NewsDetial> {
  // 接收一下上面接收的arguments，需要在函数中作为参数传递下来，还需要重写上面方法
  Map arguments;
  _NewsDetialState(this.arguments);
  List _list = [];
  @override
  void initState() {
    super.initState();
    this._getData();
  }

  void _getData() async {
    var url =
        "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=${this.arguments['aid']}"; //通过aid去获取新闻详情
    var res = await Dio().get(url);
    //  print("0000000000000000000000000000000000");
    //  print(res.data);
    //  print("0000000000000000000000000000000000");
    setState(() {
      this._list = json.decode(res.data)["result"];
    });
  }

  // 使用上面接收的类需要用到widget
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("新闻详情"),
      ),
      //拿到的新闻详情是富文本编辑器实现的，里面有标签需要解析
      // 想要解析标签可用flutter_html(少量的标签可以识别)
      body: ListView(
        children: <Widget>[
          // 存在数据，渲染出来数据
          //  Text("${this._list.length>0 ? this._list[0]['title']:""}"),
          //  Text("${this._list.length>0 ? this._list[0]['content']:""}"),
          Html(
            //在解析div标签的包中存在Html这样的组件
            data: """
             ${this._list.length > 0 ? this._list[0]['content'] : ''}
           """,
            //Optional parameters:
            padding: EdgeInsets.all(8.0),
            backgroundColor: Colors.white70,
            defaultTextStyle: TextStyle(fontFamily: 'serif'),
            linkStyle: const TextStyle(
              color: Colors.redAccent,
            ),
            onLinkTap: (url) {
              // open url in a webview
            },
          ),
        ],
      ),
    );
  }
}
