// 将路由抽离--->里面存放路由规则
import 'package:flutter/material.dart';
import './Tabs.dart';
import './Form.dart';
import './Detial.dart';
import './Swiper.dart';
import './DatePicker.dart';
import './DatePickerPub.dart';

// 配置路由，别忘记参数上下文context
final routes = {
  "/":(context)=>Tabs(),//首先配置默认路由路径
  "/detial":(context,{arguments})=>Detial(arguments: arguments,),
  "/form":(context)=>FormPage(),
  "/swiper":(content)=>SwiperDemo(),
  "/datepicker":(context)=>DatePicker(),//需要用到就要配置路由，在使用时，仅仅就写上路径即可
  "/datepickerpub":(context)=>DatePickerPub(),
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


