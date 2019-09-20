import 'package:flutter/material.dart';

void main(){
  runApp(MyApp());
}

// 谨记在flutter中根组件只能是MyApp-->MaterialApp(一般会设置title和主题，最后使用home来渲染子定义组件)
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "根组件",
      theme: ThemeData(
        primarySwatch: Colors.purple
      ),
      home: MyHomePage(title:'Flutter'),
    );
  }
}

// 动态组件--->传参时要求重写函数，且key
class MyHomePage extends StatefulWidget {
  // 这里使用key时要求({key,参数}) ：super(key:key)
  MyHomePage({key,this.title}) :super(key:key);
  final String title ;//定义参数类型
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("防弹少年团")
      ),
      body: Center(
        child: Text(
          "这是一个韩国男团",
          style: TextStyle(
            fontSize: 20,
            color: Colors.blue
          ),
        ),
      ),
    );
  }
}

