import 'package:flutter/material.dart';

// 商品评价相关--->多少条第几条评论
class ProductContentThird extends StatefulWidget {
  @override
  _ProductContentThirdState createState() => _ProductContentThirdState();
}

class _ProductContentThirdState extends State<ProductContentThird> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: ListView.builder(
        itemCount: 30,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text("第${index}条"),
          );
        },
      ),
    );
  }
}
