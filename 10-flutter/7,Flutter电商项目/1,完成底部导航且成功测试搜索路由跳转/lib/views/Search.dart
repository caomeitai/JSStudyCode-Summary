import 'package:flutter/material.dart';

// 在发生路由跳转时出现新的页面，那么需要渲染脚手架Scaffold
class SearchPage extends StatefulWidget {
  @override
  _SearchPageState createState() => _SearchPageState();
}

class _SearchPageState extends State<SearchPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title:Text("搜索页面")
      ),
      body: Text("搜索"),
    );
  }
}