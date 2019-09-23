import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_localizations/flutter_localizations.dart';//配置多语言，国际化处理
import 'package:flutter_app/Routes.dart';

// 国际化处理多语言
// 1，现在配置文件中配置一下
// 2，在main.js中引入
// 3，在使用内置模块处理内容的地方配置语言


import './Routes.dart';

void main(){
  runApp(MyApp());
}

// 命名式路由配置规则存在于main.js中
// 命名式路由：
//  1，配置路由规则；引进main.js中来
//  2，在合适位置进行跳转--->跟Vue中路由使用相似
//  3，路由传值之前的路由抽离：先创建Routes.dart文件，还需要配置一堆代码onGenerateRoute，配置之后在main.js中，也要将其配置
//  4，当想要传值时，还需要在路由规则中配置参数，并且需要解构出来一个arguments
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // 要向国际化语言处理，除了配置引入外，还需要加这两块内容
      localizationsDelegates: [
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
        ],
        supportedLocales: [
          const Locale('zh','CH'), // 中文
          const Locale('en', 'US'), // English
          const Locale('he', 'IL'), // Hebrew
        ],
      // home:Tabs(),
      // routes: {
      //   // 当访问路由时，调函数加载组件
      //   "/detial":(context)=>Detial(),
      //   "/form":(context)=>FormPage(),
      // },

      // 路径抽离之后，渲染方法
      initialRoute:"/",//直接就是默认路径"/"--->代表的是Tabs组件
      onGenerateRoute:onGenerateRoute,//简单的配置onGenerateRoute
    );
  }
}

