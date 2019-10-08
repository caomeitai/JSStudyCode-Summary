import 'package:flutter/material.dart';
import 'package:device_info/device_info.dart';
import 'dart:convert';

// 获取设备信息也需要第三方包
class Device extends StatefulWidget {
  @override
  _DeviceState createState() => _DeviceState();
}

class _DeviceState extends State<Device> {
  var _deviceInfo = "";
  @override
  void initState() {
    super.initState();
    this._getDeviceInfo();
  }
  _getDeviceInfo() async {
   DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();
   AndroidDeviceInfo androidInfo = await deviceInfo.androidInfo;
  //  print(androidInfo);//Instance of 'AndroidDeviceInfo'
  //  print('设备号:${androidInfo.androidId}');//设备号:130aaaff93b0347b
  setState(() {
   this._deviceInfo="${androidInfo.androidId}"; 
  }); 


  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Flutter Native Device演示"),
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            Text("看控制台 信息已打印到控制台了"),
            Container(
              child: Text("本机设备号：${this._deviceInfo}"),
            ),
          ],
        ),
      ),
    );
  }
}

