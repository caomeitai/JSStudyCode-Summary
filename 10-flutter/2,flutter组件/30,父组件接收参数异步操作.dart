import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import './30,子组件完成点击事件带参数.dart';

class GetAddress extends StatefulWidget {
  @override
  _GetAddressState createState() => _GetAddressState();
}

class _GetAddressState extends State<GetAddress> {
  // 定义默认地址参数为空
  String _ads = "";
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
        appBar: AppBar(
          title: Text("收货地址"),
        ),
        body: Center(
          child: Column(
            //因为要存放地址数据在按钮下面，多条数据--->column
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              RaisedButton(
                textTheme: ButtonTextTheme.primary,
                color: Theme.of(context).accentColor,
                child: Text("选择收货地址"),
                onPressed: () async {
                  //与vue中相似又不同
                  // 因为函数返回的是AddressList()，而他又返回的是每个人的地址信息
                  //  通过路由跳转从子页面中传递过来的数据，都是异步的
                  var ads = await Navigator.of(context).push(MaterialPageRoute(
                    builder: (BuildContext context) {
                      return AddressList();
                    },
                  ));
                  // print("hello");
                  // print("....$ads");//....Instance of 'Future<dynamic>'这是异步请求数据
                  // print("$ads"); // 旺财 北京市昌平区沙河镇北京科技经营管理学院   拿到真实数据
                  setState(() {//改变状态只有通过setState来改变
                    _ads = ads;//用接收到的数据来代替默认数据
                  });
                },
              ),
              Text("${_ads=='' ? '未查到收货地址' : _ads}"),//利用三元表达式，判断是否获取到地址
            ],
          ),
        ),
      ),
    );
  }
}
