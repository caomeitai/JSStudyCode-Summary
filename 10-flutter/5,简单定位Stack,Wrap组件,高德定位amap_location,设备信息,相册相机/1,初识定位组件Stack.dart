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
      home: Scaffold(
        appBar: AppBar(
          title: Text("定位"),
        ),
        body: PositionDemo(),
      ),
    );
  }
}

// 有关定位的组件Stack
class PositionDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Stack(
	  //这三行代码摸出Stack坐标轴的原点是第一个容器中心点
	  //alignment:Alignment(.5,.5),
	  //alignment:Alignment(0,0),//位于容器正中间
	  //alignment:Alignment(1,1),//位于右下角
      alignment: Alignment.topRight,
      children: <Widget>[
        // 对于flutter中的定位，在Stack组件中第一个Container就相当于Stack组件啦
        // 它默认处于左上角,而下面的容器最初也默认是在左上角
        Container(
         width: 300,
         height: 300,
         color: Colors.purple,
        ),
        Container(
          // 第二个div容器它会随着Stack，
          // 也就是第一个容器来进行相对定位
          width: 80,
          height: 80,
          color: Colors.pink,
        ),
        Text("hello Stack!")
      ],
    );
  }
}

