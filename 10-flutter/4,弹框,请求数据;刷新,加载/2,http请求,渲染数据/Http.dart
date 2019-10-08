import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;


class HttpDemo extends StatefulWidget {
  @override
  _HttpDemoState createState() => _HttpDemoState();
}

class _HttpDemoState extends State<HttpDemo> {
  List _list =[];
  @override
  void initState() {
    super.initState();
    this._getData();
  }
  void _getData() async {
    var url = "https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0";
    var res = await http.get(url);
    if(res.statusCode==200){
      setState(() {
       this._list =json.decode(res.body)["subjects"];  
      });
    }else{
      print("失败啦...${res.statusCode}");//失败时，打印出状态码
    }
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("请求渲染数据"),
      ),
      // 列表长度大于0，代表请求回来了数据，渲染出来
      body: this._list.length>0 ? ListView.builder(
        itemCount: this._list.length,
        itemBuilder: (context,index){
          return ListTile(
            leading: Image.network("${this._list[index]['cover']}"),
            title: Text("${this._list[index]['title']}"),
          );
        }
        // 还未拿到数据，在拿到数据之前
      ):Text("加载中...")
    );
  }
}