import "package:flutter/material.dart";
import 'package:flutter/widgets.dart';

import 'package:dio/dio.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List _news = [];
  
  // dio的get请求
  void  _getData() async{
    var url = "https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0";
    Response response = await Dio().get(url);
    // print(response.data);
    // print(response.data is Map);//true
    // print(response.data is String);//false
    setState(() {
     this._news = response.data["subjects"]; 
    });
  }

  // post请求需要携带参数
  void _postData() async {
    var url = "https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0";
    // post请求携带参数
    Map jsondata = {
      "username":"tanni",
      "age":12,
    };
    // 将参数通过data绑定传递过去
    Response response = await Dio().post(url,data:jsondata);
    print(response);//{"subjects":[]}
  }
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: <Widget>[
          Container(
            child: Text(
              "${this._news}",
              style: TextStyle(
                fontSize: 16,
              ),
              overflow: TextOverflow.ellipsis,
            ),
          ),
          RaisedButton(
            child: Text("Dio Get请求数据"),
            onPressed: _getData,
          ),
          RaisedButton(
            child: Text("Dio Post请求数据"),
            onPressed: _postData,
          ),
          RaisedButton(
            child: Text("Dio请求渲染数据"),
            onPressed: (){
              Navigator.pushNamed(context, "/dio");
            },
          ),
        ],
      ),
    );
  }
}
