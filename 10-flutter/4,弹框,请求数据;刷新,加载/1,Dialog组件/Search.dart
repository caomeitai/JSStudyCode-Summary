import 'package:flutter/material.dart';



class Search extends StatefulWidget {
  @override
  _SearchState createState() => _SearchState();
}

class _SearchState extends State<Search> {
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        RaisedButton(
          child: Text("转表单页"),
          onPressed: () {
            Navigator.pushNamed(context, "/form");
          },
        ),
        SizedBox(width: 10),
        RaisedButton(
          color: Colors.blue,
          child: Text(
            "转弹出框",
            style: TextStyle(
              fontSize: 14,
              color: Colors.white
            ),
          ),
          onPressed: () {
            Navigator.pushNamed(context, "/dialog");
          },
        ),
      ],
    );
  }
}
