import 'package:flutter/material.dart';

class selfText extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Flutter"),
      ),
      body: Center(
        child: Text(
          "这是首个Flutter项目这是首个Flutter项目这是首个Flutter项目这是首个Flutter项目",
          style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.w500,
            fontStyle: FontStyle.italic,
            color: Colors.purple,
            //要配置每个字之间的间隔
            letterSpacing: 2,
          ),
          overflow: TextOverflow.ellipsis,//当内容变多时出现溢出，解决
          maxLines: 2,//页面上最多可显示的内容行数
        ),
      ),
    );
  }
}