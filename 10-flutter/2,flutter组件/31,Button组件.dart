import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

class ButtonPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // leading: Icon(Icons.menu),这是直接使用Icon库
        leading: IconButton(
          icon: Icon(Icons.rate_review),
        ),
        // 紧接着在文字后面也存在小图标 --->图标的排序只需跟着它本身的顺序即可
        actions: <Widget>[
          Icon(Icons.home) //默认是白色
        ],
        title: Text("Button组件"),
        centerTitle: true, //这行代码表示是组件标题居中
      ),
      body: Container(
          child: ListView(
        children: <Widget>[
          Row(
            children: <Widget>[
              RaisedButton(
                child: Text("普通"),
                onPressed: () {
                  print("普通按钮");
                },
              ),
              SizedBox(width: 10),
              RaisedButton(
                color: Colors.blue,
                textColor: Colors.white,
                child: Text("颜色"),
                onPressed: () {
                  print("颜色按钮");
                },
              ),
              SizedBox(width: 10),
              RaisedButton(
                child: Text("阴影"),
                elevation: 10, //用来设置阴影的
                onPressed: () {
                  print("阴影按钮");
                },
              ),
              SizedBox(width: 5),
            ],
          ),
          Row(
            children: <Widget>[
              // 图标按钮.icon
              RaisedButton.icon(
                // 和之前不同的是不再存放小组件，而是图标按钮的属性
                icon: Icon(Icons.home),
                label: Text("图标"),
                color: Colors.red, //它指的是按钮颜色
                textColor: Colors.blue,
                onPressed: () {
                  print("图标按钮");
                },
              ),
              SizedBox(width: 10),
              Container(
                width: 90,
                height: 40,
                decoration: BoxDecoration(
                  color: Colors.black,
                ),
                child: RaisedButton(
                  //存在波浪号的原因是没有点击事件
                  child: Text(
                    "自定义",
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ),
              SizedBox(width: 10),
              RaisedButton(
                child: Text("圆角"),
                // textColor: Colors.blue,//不起作用
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20)//直接一步设置圆角
                    ), //控制的圆角
              ),
            ],
          ),
          Row(
            children: <Widget>[
              RaisedButton(
                child: Text("圆形"),
                shape: CircleBorder(//用来直接设置按钮是圆形
                 side: BorderSide(color: Colors.pink)//就是给按钮加上个边
                )
              ),
            ],
          )
        ],
      )),
    );
  }
}
