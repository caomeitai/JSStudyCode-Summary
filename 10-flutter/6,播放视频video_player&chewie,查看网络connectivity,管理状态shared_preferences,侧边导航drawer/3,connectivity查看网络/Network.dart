import 'package:connectivity/connectivity.dart';
import 'package:flutter/material.dart';

class Network extends StatefulWidget {
  Network({Key key}):super (key:key);
  @override
  _NetworkState createState() => _NetworkState();
}

class _NetworkState extends State<Network> {
  var subscription;
  String _stateText; //定义的字符串就是用来填写是什么网络
  
  @override
  void initState() {
    super.initState();
    subscription = Connectivity()
        .onConnectivityChanged
        .listen((ConnectivityResult result) {
      if (result == ConnectivityResult.mobile) {
        setState(() {
          this._stateText = "处于移动网络";
        });
      } else if (result == ConnectivityResult.wifi) {
        setState(() {
          this._stateText = "处于wifi网络";
        });
      } else {
        setState(() {
         this._stateText = "没有网络";
        //  print("jjjjjjjjjjjjjjjjj");
         print(this._stateText);
        //  print("jjjjjjjjjjjjjjjjj");
        });
      }
    });
  }

  @override
  dispose() {
    super.dispose();
    subscription.cancel(); //注意
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("检测网络变化")),
      body: Center(
        child: Text("${this._stateText}"),
      ),
    );
  }
}
