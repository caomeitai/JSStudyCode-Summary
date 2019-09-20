import 'package:flutter/material.dart';
import './31,子组件.dart';

// 将分类组件中的数据传递到表单组件
// 父组件向子组件中传递数据
class Category extends StatefulWidget {
  @override
  _CategoryState createState() => _CategoryState();
}

class _CategoryState extends State<Category> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: RaisedButton(
        child: Text("去表单"),
        onPressed: (){
          Navigator.of(context).push(
            MaterialPageRoute(
             builder: (context){
               return FormPage(title:"hello Form组件！");//在跳转组件之前带参数
              },//此处的名字应与对应组件保持一致
           )
          );
        },
      ),
    );
  }
}