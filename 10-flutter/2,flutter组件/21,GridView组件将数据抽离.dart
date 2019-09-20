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
          "Flutter",
        ),
      ),
      body: HomePage(),
    )
  );
 }
}


class HomePage extends StatelessWidget {
  List<Widget> _getData(){
    var tempList  = ListData.map((value){
     return Container(
       decoration: BoxDecoration(
         border: Border.all(
           width: 2,
          //  color: Colors.yellow, //颜色也可直接设置在外面
         )
       ),
      // margin: EdgeInsets.all(10),
      child:Column(
        children: <Widget>[
          Image.network(value["imageUrl"]),
          SizedBox(height: 10),//此时仅仅设置这些不能将图片显示出来
          Text("Hello tanni")
        ],
      ),
     );
    });
    return tempList.toList();
  }
  @override
  Widget build(BuildContext context) {
    return GridView.count(
      crossAxisCount: 2,
      // 可以设置行与行，列与列的间隔
      crossAxisSpacing: 5,//列与列
      mainAxisSpacing: 5,//行与行
      // 当将宽高比设置完成时，图片才可完全显示出来
      childAspectRatio: 0.5,//相当于设置的是container的宽高比
      children: this._getData(),
    );
   
  }
}





