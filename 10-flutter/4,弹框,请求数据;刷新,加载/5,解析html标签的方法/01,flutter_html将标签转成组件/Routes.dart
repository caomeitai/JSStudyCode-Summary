// 将路由抽离--->里面存放路由规则
import 'package:flutter/material.dart';
import 'package:flutter_app/News.dart';
import './Tabs.dart';
import './Form.dart';
import './Detial.dart';
import './Swiper.dart';
import './DatePicker.dart';
import './DatePickerPub.dart';
import './Dialog.dart';
import './Dio.dart';
import './News.dart';
import './NewsDetial.dart';


final routes = {
  "/":(context)=>Tabs(),
  "/detial":(context,{arguments})=>Detial(arguments: arguments,),
  "/form":(context)=>FormPage(),
  "/dialog":(context)=>DialogDemo(),
  "/swiper":(content)=>SwiperDemo(),
  "/datepicker":(context)=>DatePicker(),
  "/datepickerpub":(context)=>DatePickerPub(),
  "/dio":(context)=>DioDemo(),
  "/news":(context)=>NewsPage(),
  "/newsdetial":(context,{arguments})=>NewsDetial(arguments: arguments,),
};

var onGenerateRoute=(RouteSettings settings) {
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


