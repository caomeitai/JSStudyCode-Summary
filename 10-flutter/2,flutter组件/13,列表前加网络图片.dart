import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home:Scaffold(
      appBar: AppBar(
        title: Text(
          "金泰亨",
        ),
      ),
      body: HomePage(),
    )
  );
 }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // ListView组件是列表，内部肯定存在多个组件
    return ListView(
     children: <Widget>[
      //列表中的某一项
      ListTile(
        // 给每个列表加上网络图片，直接使用Image组件
        leading: Image.network(
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=795729840,295864683&fm=26&gp=0.jpg",
          width: 80,
          height: 50,
        ),
        title: Text(
          "金泰亨",
          style: TextStyle(
            fontSize: 20,
            fontWeight:FontWeight.w500, 
          ),
        ),
        subtitle: Text(
          "被称为世界美男被称为世界美男被称为世界美男被称为世界美男被称为世界美男",
          overflow: TextOverflow.ellipsis,
          maxLines: 1,
          style: TextStyle(
            fontStyle: FontStyle.normal,
          ),
        ),
      ), 
        ListTile(
        leading: Image.network(
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=795729840,295864683&fm=26&gp=0.jpg",
          width: 80,
          height: 50,
        ),
        title: Text(
          "金泰亨",
          style: TextStyle(
            fontSize: 20,
            fontWeight:FontWeight.w500, 
          ),
        ),
        subtitle: Text(
          "被称为世界美男被称为世界美男被称为世界美男被称为世界美男被称为世界美男",
          overflow: TextOverflow.ellipsis,
          maxLines: 1,
          style: TextStyle(
            fontStyle: FontStyle.normal,
          ),
        ),
      ),
        ListTile(
        leading: Image.network(
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=795729840,295864683&fm=26&gp=0.jpg",
          width: 80,
          height: 50,
        ),
        title: Text(
          "金泰亨",
          style: TextStyle(
            fontSize: 20,
            fontWeight:FontWeight.w500, 
          ),
        ),
        subtitle: Text(
          "被称为世界美男被称为世界美男被称为世界美男被称为世界美男被称为世界美男",
          overflow: TextOverflow.ellipsis,
          maxLines: 1,
          style: TextStyle(
            fontStyle: FontStyle.normal,
          ),
        ),
      ),
     ],
    );
  }
}

