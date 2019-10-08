import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Column(
     children: <Widget>[
       RaisedButton(
         child: Text("跳搜索页"),
         onPressed: (){
           Navigator.pushNamed(context, "/search");
         },
       ),
     ],
    );
  }
}