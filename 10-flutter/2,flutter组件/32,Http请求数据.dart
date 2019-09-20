import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;//在下面请求数据时要用到
import 'dart:convert';//该模块来解析数据

// http模块使用前需要先安装，配置一下  在pubspec.yaml中
// http发出请求http.get(url)拿到结果
// 数据解析：先利用toString把数据转成字符串，再使用json.decode字符串转成json数据

class SelfHttpRequest extends StatefulWidget {
  @override
  _SelfHttpRequestState createState() => _SelfHttpRequestState();
}

class _SelfHttpRequestState extends State<SelfHttpRequest> {
  // 在flutter中也存在生命周期-->勾子函数
  

  List _list = [];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Http请求"),
      ),
      floatingActionButton: FloatingActionButton(//浮动按钮
        child: Icon(Icons.add),
        onPressed: (){
          // print("OK啦！");
          http1();
        },
      ),
      body: ListView.builder(//创建一个列表
      itemCount: _list.length,//项目的个数
      itemBuilder: (BuildContext context,int i){
        // 拿到数组中的每一项的电影名
        return Text('${_list[i]["title"]}');//响应数据到页面，创建出列表
      },
      ),
    );
  }
  http1() async {
    String url = "https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0";
    http.Response response = await http.get(url);//得到数据
    // print(response);//Instance of 'Response' 此时已得到结果，但需要将其解析
    // print(response.body);//解析数据  得到原始真实数据
    // 因为得到的数据是对象，需要使用map来保存数据--->通过<>来指定数据类型  dynamic类型不确定
    Map<String,dynamic> responseData = json.decode(response.body);//将原始数据解析成json对象  它会将""去掉
    // print(responseData);//得到对象
    // print(responseData["subjects"]);
    setState(() {
      this._list = responseData["subjects"];
    });
  }
}
