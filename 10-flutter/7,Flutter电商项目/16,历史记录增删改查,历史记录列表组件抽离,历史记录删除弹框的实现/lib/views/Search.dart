import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

import '../services/ScreenAdaper.dart';
import '../services/SearchServices.dart';

class SearchPage extends StatefulWidget {
  @override
  _SearchPageState createState() => _SearchPageState();
}

class _SearchPageState extends State<SearchPage> {
  var _keywords; //搜索需要的关键字
  List _historyListData = [];

  @override
  void initState() {
    super.initState();
    _getHistoryData();
  }

  // 获取到历史记录数据
  _getHistoryData() async {
    var _historyListData = await SearchServices.getHistoryData(); //获取到历史记录数据
    setState(() {
      this._historyListData = _historyListData; //将获取到的数据存放到定义好的[]中
    });
  }

  // 删除的弹框显示
  _showAlertDialog(keywords) async {
    var result = await showDialog(
        barrierDismissible: false, //表示点击灰色背景的时候弹框是否消失
        context: context,
        builder: (context) {
          return AlertDialog(
            title: Text("提示信息"),
            content: Text("您确定要删除吗？"),
            actions: <Widget>[
              FlatButton(
                child: Text("取消"),
                onPressed: () {
                  // print("取消");
                  Navigator.pop(context, "cancel"); //context后传的值就是res的结果值
                },
              ),
              FlatButton(
                child: Text("确定"),
                onPressed: () async {
                  //删除数据是异步操作
                  // print("确定");
                  await SearchServices.removeHistoryData(keywords);
                  this._getHistoryData(); //删除之后需要再次调用
                  Navigator.pop(context, "ok");
                },
              )
            ],
          );
        });
  }

  // 历史记录列表组件
  Widget _historyListWidget() {
    if (this._historyListData.length > 0) {
      return Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          // 历史记录文本
          Container(
            child: Text(
              "历史记录",
              style: Theme.of(context).textTheme.title,
            ),
          ),
          Divider(),
          // 历史记录列表
          Column(
              children: this._historyListData.map((value) {
            return Column(
              children: <Widget>[
                ListTile(
                  title: Text("${value}"),
                  onLongPress: () {
                    this._showAlertDialog("${value}");
                  },
                ),
                Divider(), //在每一项下都加上边框
              ],
            );
          }).toList()),
          SizedBox(height: ScreenAdaper.height(100)),
          // 删除历史记录div
          Row(
            children: <Widget>[
              InkWell(
                onTap: () {
                  SearchServices.clearHistoryData(); //清空数据
                  this._getHistoryData(); //每次清空数据都需要调用函数
                },
                child: Container(
                  width: ScreenAdaper.width(400),
                  height: ScreenAdaper.height(64),
                  decoration: BoxDecoration(
                      border: Border.all(
                    color: Colors.black54,
                    width: 1,
                  )),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Icon(Icons.delete),
                      Text("清空历史记录"),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ],
      );
    } else {
      //不存在历史记录
      return Text("");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Container(
          child: TextField(
            //文本输入框
            autofocus: true, //自动聚焦
            decoration: InputDecoration(
              //input输入框修饰
              border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(30),
                  borderSide: BorderSide.none),
            ),
            onChanged: (value) {
              this._keywords = value; //搜索的关键字就是你输入的内容
            },
          ),
          height: ScreenAdaper.height(68),
          decoration: BoxDecoration(
              color: Color.fromRGBO(233, 233, 233, 0.8),
              borderRadius: BorderRadius.circular(30)),
        ),
        actions: <Widget>[
          InkWell(
            child: Container(
              height: ScreenAdaper.height(68),
              width: ScreenAdaper.width(80),
              child: Row(
                children: <Widget>[
                  Text("搜索"),
                ],
              ),
            ),
            onTap: () {
              SearchServices.setHistoryData(this._keywords);//点击搜索，会产生历史记录，也就设置了历史记录
              // 跳转到商品列表需携带参数
              Navigator.pushNamed(context, "/productList",
                  arguments: {"keywords": this._keywords});
            },
          ),
        ],
      ),
      body: Container(
        padding: EdgeInsets.all(10),
        child: ListView(
          children: <Widget>[
            // 热搜的历史数据
            Container(
              child: Text("热搜", style: Theme.of(context).textTheme.title),
            ),
            Divider(),
            Wrap(
              //内容使其自动换行
              children: <Widget>[
                Container(
                  padding: EdgeInsets.all(10),
                  margin: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                      color: Color.fromRGBO(233, 233, 233, 0.9),
                      borderRadius: BorderRadius.circular(10)),
                  child: Text("女装"),
                ),
                Container(
                  padding: EdgeInsets.all(10),
                  margin: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                      color: Color.fromRGBO(233, 233, 233, 0.9),
                      borderRadius: BorderRadius.circular(10)),
                  child: Text("男装"),
                ),
                Container(
                  padding: EdgeInsets.all(10),
                  margin: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                      color: Color.fromRGBO(233, 233, 233, 0.9),
                      borderRadius: BorderRadius.circular(10)),
                  child: Text("笔记本电脑"),
                ),
                Container(
                  padding: EdgeInsets.all(10),
                  margin: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                      color: Color.fromRGBO(233, 233, 233, 0.9),
                      borderRadius: BorderRadius.circular(10)),
                  child: Text("鞋子"),
                ),
                Container(
                  padding: EdgeInsets.all(10),
                  margin: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                      color: Color.fromRGBO(233, 233, 233, 0.9),
                      borderRadius: BorderRadius.circular(10)),
                  child: Text("裤子"),
                ),
                Container(
                  padding: EdgeInsets.all(10),
                  margin: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                      color: Color.fromRGBO(233, 233, 233, 0.9),
                      borderRadius: BorderRadius.circular(10)),
                  child: Text("水果"),
                ),
                Container(
                  padding: EdgeInsets.all(10),
                  margin: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                      color: Color.fromRGBO(233, 233, 233, 0.9),
                      borderRadius: BorderRadius.circular(10)),
                  child: Text("手机"),
                ),
              ],
            ),
            SizedBox(height: ScreenAdaper.height(10)),
            // 历史记录相关
            _historyListWidget(),
          ],
        ),
      ),
    );
  }
}
