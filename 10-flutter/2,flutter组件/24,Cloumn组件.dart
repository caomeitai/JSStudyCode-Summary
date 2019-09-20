import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/widgets.dart';

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
          "Flutter",
        ),
      ),
      body: HomePage(),
    )
  );
 }
}


class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      // 与Row相比，它位于主轴开头，交叉轴开头
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        // crossAxisAlignment: CrossAxisAlignment.center, //它对改变交叉轴位置不起作用 
        children: <Widget>[
          // Text("金碳尼"),
          // Text("金碳尼"),
          // Text("金碳尼"),
          // Text("金碳尼"),
          IconContainer(Icons.home,color: Colors.purple),
          IconContainer(Icons.search,color: Colors.pink),
          IconContainer(Icons.settings,color: Colors.blue),
        ],
      ),
    );
  }
}

class IconContainer extends StatelessWidget {
  IconData icon;
  Color color;
  double size = 30.0;
  IconContainer(this.icon,{this.color});
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Icon(this.icon,color:this.color,size:this.size),//形参，定义参数
    );
  }
}






