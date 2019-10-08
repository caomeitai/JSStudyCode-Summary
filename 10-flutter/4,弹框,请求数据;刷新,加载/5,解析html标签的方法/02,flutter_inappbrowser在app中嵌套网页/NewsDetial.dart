import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import 'dart:convert';
// 将html转成组件
// import 'package:flutter_html/flutter_html.dart';

// 直接在app中嵌套网页--->在使用该包时它是有坑的，需将 minSdkVersion的版本从16改为17直接在search中搜索即可 
import 'package:flutter_inappbrowser/flutter_inappbrowser.dart';

class NewsDetial extends StatefulWidget {
  Map arguments;
  NewsDetial({this.arguments});
  @override
  _NewsDetialState createState() => _NewsDetialState(this.arguments);
}

class _NewsDetialState extends State<NewsDetial> {
  Map arguments;
  _NewsDetialState(this.arguments);
  List _list = [];
  bool _flag = true;
  // progress
  @override
  void initState() {
    super.initState();
    this._getData();
  }

  void _getData() async {
    var url =
        "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=${this.arguments['aid']}"; //通过aid去获取新闻详情
    var res = await Dio().get(url);
    setState(() {
      this._list = json.decode(res.data)["result"];
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("新闻详情"),
      ),
      body: Column(
        children: <Widget>[
          // this._flag为true时，请求数据，有加载小圆圈；
          // this._flag为false时，请求回来数据，将用文本将加载圆圈覆盖掉
          this._flag ? _getMoreWidget() :Text(""),
          Expanded(
            child: InAppWebView(
              initialUrl:
                  "http://www.phonegap100.com/newscontent.php?aid=${this.arguments['aid']}",
              onProgressChanged:
                  (InAppWebViewController controller, int progress) {
                    // print(progress/100);//是从0到1的
                  if((progress/100)>0.999){//快要完成操作时
                    // 数据请求回来时才将_flag置为false
                    setState(() {
                     this._flag = false; 
                    });
                  }
              },
            ),
          ),
        ],
      ),
    );
  }
  // 这是加载圆圈组件
  Widget _getMoreWidget(){//widget必须返回一个组件
   return Center(
     child:Padding(
       padding: EdgeInsets.all(10.0),
       child: Row(
        //  mainAxisAlignment: MainAxisAlignment.center,
         children: <Widget>[
           Text("加载中....."),
           CircularProgressIndicator(//加载圆圈
             strokeWidth: 1.0,//加载圆圈本身的宽度
           ),
         ],
       ),
     ) ,
   );
  }
}
