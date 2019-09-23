import 'package:flutter/material.dart';

class Search extends StatefulWidget {
  @override
  _SearchState createState() => _SearchState();
}

class _SearchState extends State<Search> {
  @override
  Widget build(BuildContext context) {
    return Center(
        child: RaisedButton(
          child: Text("转表单页"),
          onPressed: (){
            Navigator.pushNamed(context, "/form");
          },
        ),
    );
  }
}