// 加载组件
import 'package:flutter/material.dart';
class LoadingWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: EdgeInsets.all(10.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            CircularProgressIndicator(//创造循环进度指示器
              strokeWidth: 1.0,//指的是加载圆圈的宽度
            ),
            Text(
              "加载中...",
              style: TextStyle(fontSize: 16.0),
            ),
          ],
        ),
      ),
    );
  }
}