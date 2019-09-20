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

// Expanded 它是使组件在其主轴方向进行扩展，使其充满主轴
// Row沿水平方向，Colunm沿垂直方向，flex是多组件以比例的形式进行扩展
class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 400,
      height: 400,
      // color: Colors.pink,
      child: Row(
        children: <Widget>[
          Expanded(
          // 在扩展方向上占据一倍的空间
          flex: 1,
          child: IconContainer(Icons.settings,color:Colors.green),
          ),
          Expanded(
          flex: 3,
          child: IconContainer(Icons.home,color:Colors.blue),
          ),
        ],
      ),
    );
  }
}

// 自定义的Icon库组件，里面存着所有的Icon小图标
class IconContainer extends StatelessWidget {
  IconData icon;
  Color color;
  double size = 30.0;
  IconContainer(this.icon,{this.color});
  @override
  Widget build(BuildContext context) {
    return Container(
      // 给每个小图标的外边加上修饰便于区分查看
      width: 100,
      height: 100,
      decoration: BoxDecoration(
        border: Border.all(
          width: 2,
          color: Colors.blue
        )
      ),
      margin: EdgeInsets.all(20),
      child: Icon(this.icon,color: this.color,size:this.size),
      
    );
  }
}








