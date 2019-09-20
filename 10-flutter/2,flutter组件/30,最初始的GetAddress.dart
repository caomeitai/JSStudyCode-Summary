import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import './30,最初始的AddressList.dart';

// GetAddress获取数据，需要改变状态
class GetAddress extends StatefulWidget {
  @override
  _GetAddressState createState() => _GetAddressState();
}

class _GetAddressState extends State<GetAddress> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
        appBar: AppBar(
          title: Text("收货地址"),
        ),
        body: Center(//为了使得按钮居中--->原本使用的是Column
          child: RaisedButton(
              textTheme: ButtonTextTheme.primary,//默认文本颜色
              color: Theme.of(context).accentColor,//默认按钮主体颜色
              child: Text("选择收货地址"),
              // 点击按钮时要求从子页面获取数据
              onPressed: (){
               Navigator.of(context).push(
                 MaterialPageRoute(
                  //  builder: (BuildContext context)=>AddressList()
                  builder: (BuildContext context){
                   return AddressList();
                  },
                 )
               );
              },
            ),
        ),
      ),
    );
  }
}