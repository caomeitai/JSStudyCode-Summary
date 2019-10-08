import 'package:flutter/material.dart';
// import 'dart:convert';
// import 'package:http/http.dart' as http;
import 'package:dio/dio.dart';

class DioDemo extends StatefulWidget {
  @override
  _DioDemoState createState() => _DioDemoState();
}

class _DioDemoState extends State<DioDemo> {
  List _list =[];
  @override
  void initState() {
    super.initState();
    this._getData();
  }
  void _getData() async {
    var url = "https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0";
    Response res = await Dio().get(url);
    setState(() {
      this._list = res.data["subjects"];
    });
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