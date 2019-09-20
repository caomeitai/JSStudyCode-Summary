import 'package:flutter/material.dart';

void main(){
  // 在flitter中默认根组件就只能是MyApp组件
  // 直接跑的组件是Center组件，想要在它里面写组件就必须child
  runApp(new Center(
    child: new Text(
      "hello"
    ),
  ));
}

