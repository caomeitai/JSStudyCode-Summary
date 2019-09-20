import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import './18,ListData.dart';

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home:Scaffold(
      appBar: AppBar(
        title: Text(
          "金泰亨",
        ),
      ),
      body: HomePage(),
    )
  );
 }
}


class HomePage extends StatelessWidget {
  List <Widget> _getData(){//要得到个列表
    // 在flutter中箭头函数=>可以省略
    var tempList = ListData.map((value){
      return ListTile(
        leading: Image.network(value["imageUrl"]),
        title: Text(value["title"]),//想拿到对象中的值时，是变量就要[]
        subtitle: Text(value["author"]),
      );
    });
    return tempList.toList();//map函数返回的是数组，最终要返回成List
  }
  @override
  Widget build(BuildContext context) {
    return ListView(
      children: this._getData()
    );
  }
}




