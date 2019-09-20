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
  // 将Listile抽离出去 children:<widget>[]
  // 函数类型是List形式，且泛型是小组件--->里面存放的就是小的组件
  List<Widget> _getData(){//这个函数最终返回一个数组，数组里面是ListTile
    return [
      //这里的数据全部都是写死的，固定的列表数据
      ListTile(
        title: Text("金泰亨很帅！"),
      ),
      ListTile(
        title: Text("金泰亨很帅！"),
      ),
      ListTile(
        title: Text("金泰亨很帅！"),
      ),
    ];
  }
  @override
  Widget build(BuildContext context) {
    return ListView(
      children: this._getData()//通过函数来获取数据
    );
  }
}




// 练习代码
// class HomePage extends StatelessWidget {
//  List <Widget> _getData(){
//    return [
//      ListTile(
//        title: Text("Young Forever"),
//      ),
//      ListTile(
//        title: Text("Young Forever"),
//      ),
//      ListTile(
//        title: Text("Young Forever"),
//      ),
//    ];

//   }
//   @override
//   Widget build(BuildContext context) {
//     return ListView(
//       children:this._getData()
//     );
//   }
// }