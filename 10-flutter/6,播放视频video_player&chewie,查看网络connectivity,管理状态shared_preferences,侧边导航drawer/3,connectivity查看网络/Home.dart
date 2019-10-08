import 'package:flutter/material.dart';
import './Network.dart';

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
          onPressed: (){
            Navigator.pushNamed(context, "/network");
          },
          child: Text("判断是否是网络"),
        ),
      ],
    );
  }
}