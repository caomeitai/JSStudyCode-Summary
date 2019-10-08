import 'package:flutter/material.dart';

import '../Tabs/Tabs.dart';
import '../views/ProductList.dart';
import '../views/Search.dart';

//配置路由
final routes = {
  "/": (context) => Tabs(),
  // 利用了解构赋值将参数arguments解构出来
  "/productList":(context,{arguments})=>ProductList(arguments:arguments),
  "/search":(context)=>SearchPage(),
};

//固定写法
var onGenerateRoute = (RouteSettings settings) {
  // 统一处理
  final String name = settings.name;
  final Function pageContentBuilder = routes[name];
  if (pageContentBuilder != null) {
    if (settings.arguments != null) {
      final Route route = MaterialPageRoute(
          builder: (context) =>
              pageContentBuilder(context, arguments: settings.arguments));
      return route;
    } else {
      final Route route =
          MaterialPageRoute(builder: (context) => pageContentBuilder(context));
      return route;
    }
  }
};
