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
          "Flutter",
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
    return Padding(
      padding: EdgeInsets.fromLTRB(0, 0, 10, 0),
      child: GridView.count(
       crossAxisCount: 2,
       children: <Widget>[
         Padding(
           padding: EdgeInsets.fromLTRB(10, 10, 0, 0),
           child: Image.network("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568895798054&di=3f404ed7c1373765c992918abdffb3fd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F02%2F20171102230215_QWBR5.jpeg"),
         ),
         Padding(
           padding: EdgeInsets.fromLTRB(10, 10, 0, 0),
           child: Image.network("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568895798054&di=3f404ed7c1373765c992918abdffb3fd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F02%2F20171102230215_QWBR5.jpeg"),
         ),
         Padding(
           padding: EdgeInsets.fromLTRB(10, 10, 0, 0),
           child: Image.network("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568895798054&di=3f404ed7c1373765c992918abdffb3fd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F02%2F20171102230215_QWBR5.jpeg"),
         ),
         Padding(
           padding: EdgeInsets.fromLTRB(10, 10, 0, 0),
           child: Image.network("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568895798054&di=3f404ed7c1373765c992918abdffb3fd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F02%2F20171102230215_QWBR5.jpeg"),
         ),
       ],
      ),
    );
  }
}





