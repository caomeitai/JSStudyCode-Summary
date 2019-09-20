import 'package:flutter/material.dart';




class FormPage extends StatelessWidget {
  String title;
  FormPage({this.title:"Form表单"});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(this.title),
      ),
      body: Center(
        child: RaisedButton(
          child: Text("返回"),
          onPressed: (){
            Navigator.of(context).pop();
          },
        ),
      ),
    );
  }
}