import 'package:flutter/material.dart';
class selfTest extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("金泰亨"),
      ),
      body: Center(
        child: Text(
          "碳尼阿爸碳尼阿爸碳尼阿爸碳尼阿爸碳尼阿爸碳尼阿爸",
          style: TextStyle(
            fontSize: 30,
            color: Colors.blue,
            letterSpacing: 2,//字体之间间隙变大
            fontWeight: FontWeight.w500,
          ),
          overflow: TextOverflow.ellipsis,
          ),
      ),
    );
  }
}