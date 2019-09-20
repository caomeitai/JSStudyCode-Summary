import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

// 需要改变状态，使用动态组件
// 为给子组件添加点击事件，在div外边再包上一层GestureDetector，其中事件为ontip
// 仍然通过Navigator来管理路由，弹栈时可以携带参数
class AddressList extends StatefulWidget {
  @override
  _AddressListState createState() => _AddressListState();
}


class _AddressListState extends State<AddressList> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("地址列表"),
      ),
      body: ListView(
        //存放多个数据还是利用的ListView组件
        padding: EdgeInsets.all(5),
        children: <Widget>[
          // 为给每个子组件添加点击事件，使用GestureDetector来包起来
          GestureDetector(
            // 在子组件中的点击事件
            onTap: () {
              Navigator.of(context).pop("旺财 北京市昌平区沙河镇北京科技经营管理学院");
            },
            // 使用Container来写子组件
            child: Container(
              decoration: BoxDecoration(
                  border: Border.all(
                color: Colors.purple,
                width: 2,
              )),
              child: ListTile(
                leading: Icon(Icons.account_circle),
                title: Text(
                  "旺财 北京市昌平区沙河镇北京科技经营管理学院",
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
              ),
            ),
          ),
          SizedBox(height: 5),
          GestureDetector(
            onTap: () {
              Navigator.of(context).pop("小青 北京市昌平区沙河镇北京科技经营管理学院");
            },
            child: Container(
              decoration: BoxDecoration(
                  border: Border.all(
                color: Colors.purple,
                width: 2,
              )),
              child: ListTile(
                leading: Icon(Icons.account_circle),
                title: Text(
                  "小青 北京市昌平区沙河镇北京科技经营管理学院",
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
              ),
            ),
          ),
          SizedBox(height: 5),
          GestureDetector(
            onTap: () {
              Navigator.of(context).pop("香蜜 北京市昌平区沙河镇北京科技经营管理学院");//弹栈的同时带参数
            },
            child: Container(
              decoration: BoxDecoration(
                  border: Border.all(
                color: Colors.purple,
                width: 2,
              )),
              child: ListTile(
                leading: Icon(Icons.account_circle),
                title: Text(
                  "香蜜 北京市昌平区沙河镇北京科技经营管理学院",
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
              ),
            ),
          ),
          SizedBox(height: 5),
        ],
      ),
    );
  }
}
