import 'package:flutter/material.dart';
import 'package:amap_location/amap_location.dart';

// 想要实现高德定位，需要第三方包amap_location，更为详细的步骤由pub.dev网站上有

class Location extends StatefulWidget {
  @override
  _LocationState createState() => _LocationState();
}

class _LocationState extends State<Location> {
  // 初始化定义经度纬度为0
  double _longitude = 0;
  double _latitude = 0;

  @override
  void initState() {
   super.initState();
   this._getLocation();
  }
  
  // 获取地理位置的方法
  _getLocation() async {
    // 需要先启动一下
    await AMapLocationClient.startup(new AMapLocationOption(desiredAccuracy:CLLocationAccuracy.kCLLocationAccuracyHundredMeters));
    var  result  = await AMapLocationClient.getLocation(true);
    // print(result);
    // print("经度：${result.longitude}");
    // print("经度：${result.latitude}");
    setState(() {
     this._longitude = result.longitude;
     this._latitude = result.latitude;
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("地理定位演示"),
      ),
      body: Column(
        children: <Widget>[
          Text("经度：${this._longitude}"),
          Text("纬度：${this._latitude}"),
        ],
      ),
    );
  }
}
