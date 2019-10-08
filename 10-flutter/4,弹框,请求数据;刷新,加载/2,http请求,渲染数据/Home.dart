import "package:flutter/material.dart";
import 'package:flutter/widgets.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List _news = [];
  
  void  _getData() async{
    // 在这里不再通过type来判断类型，而是直接is xxx 来看判断真假
    
    // 将对象转成字符串
    // Map userInfo = {"name":"tanni","age":12};//对象
    // print(json.encode(userInfo));//{"name":"tanni","age":12}
    // print(json.encode(userInfo) is Map);//false
    // print(json.encode(userInfo) is String);//true

    // 将字符串转成对象
    // String userInfo = '{"name":"tanni","age":12}';
    // print(json.decode(userInfo));//{name: tanni, age: 12}
    // print(json.decode(userInfo) is String);//false
    // print(json.decode(userInfo) is Map);//true

    // http请求数据
    var url = "https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0";
    var res = await http.get(url);
    if(res.statusCode==200){//请求成功时
      // print(res.body);//拿到数据，它们是字符串
      setState(() {
        this._news = json.decode(res.body)["subjects"];
      });
      
    }
  }
  void _postData() async {
    var url = "https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0";
    var res = await http.post(url,body:{"title":"准备饭桌的男人"});
    if(res.statusCode==200){
      print(json.decode(res.body));
    }else{
      print(res.statusCode);
    }
    
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
            child: Text("Get请求数据"),
            onPressed: _getData,
          ),
          RaisedButton(
            child: Text("Post请求数据"),
            onPressed: _postData,
          ),
          RaisedButton(
            child: Text("http请求数据且渲染数据"),
            onPressed: (){
              Navigator.pushNamed(context, "/http");
            },
          ),
        ],
      ),
    );
  }
}
