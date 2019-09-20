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
          "金泰亨",
        ),
      ),
      body: HomePage(),
    )
  );
 }
}


class HomePage extends StatelessWidget {
  List<Widget>  _getData(){
    // 创建个新的列表（较为灵活的数据），将其返回
    List<Widget> list = new List();
    for(var i=0;i<20;i++){
      list.add(//往列表中扔数据
       ListTile(
         title: Text("我是第$i条列表"),
       )
      );
    }
    return list;
  }
  @override
  Widget build(BuildContext context) {
    return ListView(
      children: this._getData()
    );
  }
}




// 练习代码
// class HomePage extends StatelessWidget {
//   List<Widget> _getData(){
//     List<Widget> list = new List();
//     for(var i=0;i<20;i++){
//       list.add(
//         ListTile(
//           title: Text("我是第$i个列表"),
//         )
//     );
//    }
//    return list;
//   }
//   @override
//   Widget build(BuildContext context) {
//     return ListView(
//       children:this._getData()
//     );
//   }
// }