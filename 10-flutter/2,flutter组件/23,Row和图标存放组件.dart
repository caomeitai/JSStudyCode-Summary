import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
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
      width: 700,
      height: 400,
      decoration: BoxDecoration(
        border: Border.all(
          width: 2,
          color: Colors.green
        )
      ),
      // 它默认位于主轴开头和交叉轴的中间
      child: Row(//主轴与否取决于Row还是Cloumn-->Row主轴是水平，Cloumn主轴是垂直
        // mainAxisAlignment: MainAxisAlignment.center,//水平
        // mainAxisAlignment: MainAxisAlignment.spaceAround,//处理富余空间在内容两侧
        mainAxisAlignment: MainAxisAlignment.spaceEvenly, //将富余空间真正意义上的均分
        // crossAxisAlignment: CrossAxisAlignment.center,//默认位于交叉轴的中间
        children: <Widget>[
          // Text("金泰亨"),
          // Text("金泰亨"),
          // Text("金泰亨"),
          // Text("金泰亨"),
          IconContainer(Icons.home,color:Colors.purple),
          IconContainer(Icons.search,color:Colors.pink),
          IconContainer(Icons.settings,color:Colors.blue),
        ],
      ),
    );
  }
}

// 自定义一个组件用来存放小图标--->里面存有icon的种类，大小，颜色
class IconContainer extends StatelessWidget {
  // icon大小的类型应为double类型
  double size = 30.0;//定死的图标大小
  IconData icon;//定义icon
  Color color;
  IconContainer(this.icon,{this.color});
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      width: 100,
      child: Center(
        child: Icon(this.icon,color:this.color,size: this.size,),
      ),
    );
  }
}





