import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

void main(){
  runApp(MyApp());
}

// 自定义组件中的常见属性：alignment,crossAxisCount,mainAxisSpacing,crossAxisSpacing,childAspectRatio
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
  List<Widget> _getData(){
    List<Widget> list = new List();
    for(var i=0;i<20;i++){
      list.add(Container(
      //  margin: EdgeInsets.all(10),//通过margin来设置盒子之间间隙 
       color: Colors.yellow,//盒子颜色可通过decoration配置
       alignment: Alignment.center,//控制文本对齐方式，位于中间
       child: Text(
         "我是第$i条列表",
         style: TextStyle(
           fontSize: 20,
           color: Colors.pink
         ),
       ),
      ),
     );
    }
    
    return list;
  }
  @override
  Widget build(BuildContext context) {
    return GridView.count(
     crossAxisCount: 2,//二维来讲，一行有多少个
     mainAxisSpacing: 10,//主轴也就是竖着盒子之间的间隔
     crossAxisSpacing: 10,//交叉轴指的是横着的盒子之间的距离
    //  padding: EdgeInsets.all(10),//设置的是整体上的padding
    childAspectRatio: 1.5,//设置的是每个二维组件的宽高比
     children: this._getData(),
    );
   
  }
}





