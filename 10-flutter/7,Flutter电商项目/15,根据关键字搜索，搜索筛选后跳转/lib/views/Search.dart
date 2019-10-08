import 'package:flutter/material.dart';
import '../services/ScreenAdaper.dart';
import 'package:flutter/rendering.dart';

class SearchPage extends StatefulWidget {
  @override
  _SearchPageState createState() => _SearchPageState();
}

class _SearchPageState extends State<SearchPage> {
  var _keywords;//搜索需要的关键字

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
                borderSide: BorderSide.none
              ),
            ),
            onChanged: (value){
            this._keywords = value;//搜索的关键字就是你输入的内容
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
              // 跳转到商品列表需携带参数
              Navigator.pushNamed(context, "/productList",arguments: {
                "keywords":this._keywords
              });
            },
          ),
        ],
      ),
      body: Container(
        padding: EdgeInsets.all(10),
        child: ListView(
          children: <Widget>[
            Container(
             child: Text(
               "热搜",
               style:Theme.of(context).textTheme.title
              ),
            ),
            Divider(),
            Wrap(//内容使其自动换行
             children: <Widget>[
               Container(
                 padding: EdgeInsets.all(10),
                 margin: EdgeInsets.all(10),
                 decoration: BoxDecoration(
                   color: Color.fromRGBO(233, 233, 233, 0.9),
                   borderRadius: BorderRadius.circular(10)
                 ),
                 child: Text("女装"),
               ),
               Container(
                 padding: EdgeInsets.all(10),
                 margin: EdgeInsets.all(10),
                 decoration: BoxDecoration(
                   color: Color.fromRGBO(233, 233, 233, 0.9),
                   borderRadius: BorderRadius.circular(10)
                 ),
                 child: Text("男装"),
               ),
               Container(
                 padding: EdgeInsets.all(10),
                 margin: EdgeInsets.all(10),
                 decoration: BoxDecoration(
                   color: Color.fromRGBO(233, 233, 233, 0.9),
                   borderRadius: BorderRadius.circular(10)
                 ),
                 child: Text("笔记本电脑"),
               ),
               Container(
                 padding: EdgeInsets.all(10),
                 margin: EdgeInsets.all(10),
                 decoration: BoxDecoration(
                   color: Color.fromRGBO(233, 233, 233, 0.9),
                   borderRadius: BorderRadius.circular(10)
                 ),
                 child: Text("鞋子"),
               ),
               Container(
                 padding: EdgeInsets.all(10),
                 margin: EdgeInsets.all(10),
                 decoration: BoxDecoration(
                   color: Color.fromRGBO(233, 233, 233, 0.9),
                   borderRadius: BorderRadius.circular(10)
                 ),
                 child: Text("裤子"),
               ),
               Container(
                 padding: EdgeInsets.all(10),
                 margin: EdgeInsets.all(10),
                 decoration: BoxDecoration(
                   color: Color.fromRGBO(233, 233, 233, 0.9),
                   borderRadius: BorderRadius.circular(10)
                 ),
                 child: Text("水果"),
               ),
               Container(
                 padding: EdgeInsets.all(10),
                 margin: EdgeInsets.all(10),
                 decoration: BoxDecoration(
                   color: Color.fromRGBO(233, 233, 233, 0.9),
                   borderRadius: BorderRadius.circular(10)
                 ),
                 child: Text("手机"),
               ),
             ],
            ),
            SizedBox(height: ScreenAdaper.height(10)),
            Container(
              child: Text(
                "历史记录",
                style:Theme.of(context).textTheme.title,
              ),
            ),
            Divider(),
            Column(//一一列出的样子将历史记录展示出来
             children: <Widget>[
               ListTile(
                title: Text("女装"), 
               ),
               Divider(),
               ListTile(
                title: Text("男装"), 
               ),
               Divider(),
               ListTile(
                title: Text("鞋子"), 
               ),
               Divider(),
               ListTile(
                title: Text("裤子"), 
               ),
               Divider(),
               ListTile(
                title: Text("手机"), 
               ),
               Divider(),
               ListTile(
                title: Text("电脑"), 
               ),
               Divider(),
               ListTile(
                title: Text("水果"), 
               ),
               Divider(),
             ],
            ),
            SizedBox(height: 100),
            InkWell(
              onTap: (){},
              child: Container(
                width: ScreenAdaper.width(400),
                height: ScreenAdaper.height(64),
                decoration: BoxDecoration(
                  border: Border.all(
                    color: Colors.black54,
                    width: 1,
                  )
                ),
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

      ),
    );
  }
}
