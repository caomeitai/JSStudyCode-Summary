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
        // 给每个列表加上个图标
        leading: Icon(Icons.settings,size:40),
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
        leading: Icon(Icons.settings,size:40),
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
        leading: Icon(Icons.settings,size:40),
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
        leading: Icon(Icons.settings,size:40),  
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
        leading: Icon(Icons.settings,size:40),  
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

