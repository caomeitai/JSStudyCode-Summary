import 'package:flutter/material.dart';
import '../SharedPreferences.dart';

class Settings extends StatefulWidget {
  @override
  _SettingsState createState() => _SettingsState();
}

class _SettingsState extends State<Settings> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        RaisedButton(
          onPressed: () async {
           var username = await Storage.getString("name");
           print(username);
          },
          child: Text("获取Storage保存的数据"),
        ),
        SizedBox(height: 10),
        RaisedButton(
          onPressed: () async {
            await Storage.setString("name", "tanni");
          },
          child: Text("设置Storage保存的数据"),
        ),
      ],
    );
  }
}