import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_app/Routes.dart' as prefix0;

import './Tabs.dart';
import './Detial.dart';
import './Form.dart';

import './Routes.dart';

void main(){
  runApp(MyApp());
}

// 命名式路由配置规则存在于main.js中
// 命名式路由：
//  1，先配置路由规则；引进main.js中来
//  2，在合适位置进行跳转--->跟Vue中路由使用相似
//  3，路由传值之前的路由抽离，还需要配置一堆代码onGenerateRoute，配置之后在main.js中，也要将其配置

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // home:Tabs(),
      // routes: {
      //   // 当访问路由时，调函数加载组件
      //   "/detial":(context)=>Detial(),
      //   "/form":(context)=>FormPage(),
      // },

      // 路径抽离之后，渲染方法
      initialRoute:"/",//直接就是默认路径"/"--->代表的是Tabs组件
      onGenerateRoute: prefix0.onGenerateRoute,//简单的配置onGenerateRoute
    );
  }
}

