import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';

// 存在于这里的弹出框方案:
// AlertDialog SimpleDialog showModalBottomSheet--->内置模块
// toast--->第三方的弹出框

class DialogDemo extends StatefulWidget {
  @override
  _DialogDemoState createState() => _DialogDemoState();
}

class _DialogDemoState extends State<DialogDemo> {
  // AlertDialog组件是内置的
  void _alertDialog() async {
    var res = await showDialog(
        context: context,
        barrierDismissible: true, //当点击遮罩层时，是否使弹框消失
        builder: (context) {
          //在builder函数中context是必传的
          return AlertDialog(
            title: Text("提示信息"),
            content: Text("你确定要删除吗"),
            actions: <Widget>[
              FlatButton(
                //扁平化按钮
                child: Text("取消"),
                onPressed: () {
                  print("取消");
                  Navigator.pop(context, "cancel"); //context后传的值就是res的结果值
                },
              ),
              FlatButton(
                //扁平化按钮
                child: Text("确定"),
                onPressed: () {
                  print("确定");
                  Navigator.pop(context, "ok"); //context后传的值就是res的结果值
                },
              )
            ],
          );
        });
    print(res);
  }

  void _simpleDialog() async {
    var res = await showDialog(
        context: context,
        barrierDismissible: true,
        builder: (context) {
          return SimpleDialog(
            title: Text("选择内容"),
            children: <Widget>[
              SimpleDialogOption(
                child: Text("选择A"),
                onPressed: () {
                  Navigator.pop(context, "A");
                },
              ),
              Divider(), //两个选项之间的分割线，类似于html中的hr标签
              SimpleDialogOption(
                child: Text("选择B"),
                onPressed: () {
                  Navigator.pop(context, "B");
                },
              ),
            ],
          );
        });
    print(res);
  }

  void _modalBottomSheet() async {
    var res = await showModalBottomSheet(
        context: context,
        builder: (context) {
          return Container(
            child: Column(
              children: <Widget>[
                ListTile(
                  title: Text("分享到朋友圈1"),
                  onTap: () {
                    Navigator.pop(context, "分享到朋友圈1");
                  },
                ),
                ListTile(
                  title: Text("分享到朋友圈2"),
                  onTap: () {
                    Navigator.pop(context, "分享到朋友圈2");
                  },
                ),
              ],
            ),
          );
        });
    print(res);
  }
  
  void _toast() async => Fluttertoast.showToast(
        msg: "This is Center Short Toast",
        toastLength: Toast.LENGTH_SHORT,
        gravity: ToastGravity.CENTER,
        timeInSecForIos: 1,
        backgroundColor: Colors.red,
        textColor: Colors.white,
        fontSize: 16.0
    );
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("弹出框组件"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
              child: Text("AlertDialog"),
              onPressed: _alertDialog, //点击按钮，调用方法得到弹框
            ),
            RaisedButton(
              child: Text("SimpleDialog"),
              onPressed: _simpleDialog, //点击按钮，调用方法得到弹框
            ),
            RaisedButton(
              child: Text("showModalBottomSheet"),
              onPressed: _modalBottomSheet, //点击按钮，调用方法得到弹框
            ),
            RaisedButton(
              child: Text("toast第三方弹框"),
              onPressed: _toast, //点击按钮，调用方法得到弹框
            ),
          ],
        ),
      ),
    );
  }
}
