import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import 'dart:convert';

class SelfDioRequest extends StatefulWidget {
  @override
  _SelfDioRequestState createState() => _SelfDioRequestState();
}

class _SelfDioRequestState extends State<SelfDioRequest> {
  List _list = [];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Dio请求"),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () {
          //  print("hello");
          dio();
        },
      ),
      body: ListView.builder(
       itemCount: _list.length,
       itemBuilder: (BuildContext context,int i){
         return Text('${_list[i]["title"]}');
       },  
      ),
    );
  }
  dio() async {
  Response response = await Dio().get(
      "https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0");
  // print(response);
  //利用json.decode来解析数据时要求引入一个包
  Map<String, dynamic> responseData = json.decode(response.toString());
  // print(responseData["subjects"]);
  setState(() {
   this._list = responseData["subjects"];
  });
}
}



