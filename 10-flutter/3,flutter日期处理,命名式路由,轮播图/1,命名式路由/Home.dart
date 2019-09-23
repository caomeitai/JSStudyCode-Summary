import "package:flutter/material.dart";
import 'package:flutter/widgets.dart';
import './Detial.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Center(
        child: RaisedButton(
          child: Text("转详情页"),
          onPressed: (){
            Navigator.pushNamed(context, "/detial");
          },
          // onPressed: (){
          //   Navigator.of(context).push(MaterialPageRoute(
          //     builder: (BuildContext context){
          //       return Detial();
          //     }
          //   ));
          // },//最初学习路由管理时的跳转事件
        ),
    );
  }
}