import 'package:flutter/material.dart';

class My extends StatefulWidget {
  @override
  _MyState createState() => _MyState();
}

class _MyState extends State<My> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: RaisedButton(
        child: Text("转轮播图"),
        onPressed: () {
          Navigator.pushNamed(context, "/swiper");
        },
      ),
    );
  }
}
