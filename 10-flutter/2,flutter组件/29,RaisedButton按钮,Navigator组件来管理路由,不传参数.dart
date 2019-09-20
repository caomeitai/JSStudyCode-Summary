import 'package:flutter/material.dart';
import 'package:myflutter/views/Search.dart';
import './Search.dart';

// 首页面中有一个按钮，当点击按钮时，它到到搜索页面
class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(//要存放多个内容 children
      children: <Widget>[
       RaisedButton(//最最普通的按钮
         color: Colors.lightBlue,
         child: Text(
           "跳到搜索页面",
           style: TextStyle(
             color: Colors.white
          ),
         ),
        //在点击时跳到搜索页面，需要有这个组件
         onPressed: (){
          //通过Navigator来管理路由
          Navigator.of(context).push(
          MaterialPageRoute(
            builder: (context)=>Search()//通过builder方法来跳转路由页面
            // 下面是箭头函数箭头省略，出现错误
            // builder: (context){
            //  Search(); 
            // }
          )
          );
         },
       ),  
      ],

      ),
    );
  }
}