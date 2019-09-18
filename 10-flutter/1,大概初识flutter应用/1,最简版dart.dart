import 'package:flutter/widgets.dart';

void main(){
  runApp(MyApp());
}

// flutter把组件分成两类：有状态和无状态；无状态的叫静态组件，有状态的叫动态组件
// flutter规定一个组件就是一个类，一切都是组件

// 定义个MyApp组件 --->必须继承这样一个方法
class MyApp extends StatelessWidget{
  // 一个组件必须有一个build方法  Widget表示函数返回值类型
 //@override 是个修饰器 是重写的意思
 //  BuildContext 形参的类型
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return null;
  }
}