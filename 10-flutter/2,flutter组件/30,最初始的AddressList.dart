import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

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
        //地址列表中很多内容
        padding: EdgeInsets.all(5),
        children: <Widget>[
          GestureDetector(
            //可以给子组件添加事件
            child: Container(
              // 给列表的每一项都加上div
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
            //可以给子组件添加事件
            child: Container(
              // 给列表的每一项都加上div
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
            //可以给子组件添加事件
            child: Container(
              // 给列表的每一项都加上div
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
