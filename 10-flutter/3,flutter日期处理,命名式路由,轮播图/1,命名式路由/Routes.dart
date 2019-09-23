// 将路由抽离--->里面存放路由规则
import 'package:flutter/material.dart';
import './Tabs.dart';
import './Form.dart';
import './Detial.dart';

// 配置路由
final routes = {
  "/":()=>Tabs(),//首先配置默认路由路径
  "/detial":()=>Detial(),
  "/form":()=>FormPage(),
};

// 在将路由抽离出来时，需要配置这下面的代码，进行的统一处理
var onGenerateRoute=(RouteSettings settings) {
      // 统一处理
      final String name = settings.name; 
      final Function pageContentBuilder = routes[name];
      if (pageContentBuilder != null) {
        if (settings.arguments != null) {
          final Route route = MaterialPageRoute(
              builder: (context) =>
                  pageContentBuilder(context, arguments: settings.arguments));
          return route;
        }else{
            final Route route = MaterialPageRoute(
              builder: (context) =>
                  pageContentBuilder(context));
            return route;
        }
      }
};


