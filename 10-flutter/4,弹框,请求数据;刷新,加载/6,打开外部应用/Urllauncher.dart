import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class Urllauncher extends StatefulWidget {
  @override
  _UrllauncherState createState() => _UrllauncherState();
}

class _UrllauncherState extends State<Urllauncher> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("外部应用"),
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            RaisedButton(
              child: Text("打开浏览器"),
              onPressed: () async{
                // 倘若是以http开头的就会自动打开网址浏览器
                const url ="http://www.baidu.com";
                if(await canLaunch(url)){//它是异步操作，判断能不能打开浏览器
                  await launch(url);//真正意义上的打开浏览器，它也是异步的
                }else{
                  throw "can not launch $url";//抛出错误
                }
              },
            ),
            RaisedButton(
              child: Text("拨打电话"),
              onPressed: () async{
                // 倘若是以http开头的就会自动打开网址浏览器
                const tel ="tel:10086";
                if(await canLaunch(tel)){//它是异步操作，判断能不能打开浏览器
                  await launch(tel);//真正意义上的打开浏览器，它也是异步的
                }else{
                  throw "can not launch $tel";//抛出错误
                }
              },
            ),
            RaisedButton(
              child: Text("发送短信"),
              onPressed: () async{
                // 倘若是以http开头的就会自动打开网址浏览器
                const tel ="sms:10086";
                if(await canLaunch(tel)){//它是异步操作，判断能不能打开浏览器
                  await launch(tel);//真正意义上的打开浏览器，它也是异步的
                }else{
                  throw "can not launch $tel";//抛出错误
                }
              },
            ),
             RaisedButton(
              child: Text("打开微信"),
              onPressed: () async{
                // 倘若是以http开头的就会自动打开网址浏览器
                const url ="weixin://";
                if(await canLaunch(url)){//它是异步操作，判断能不能打开浏览器
                  await launch(url);//真正意义上的打开浏览器，它也是异步的
                }else{
                  throw "can not launch $url";//抛出错误
                }
              },
            ),
            RaisedButton(
              child: Text("打开支付宝"),
              onPressed: () async{
                // 倘若是以http开头的就会自动打开网址浏览器
                const url ="alipays://";
                if(await canLaunch(url)){//它是异步操作，判断能不能打开浏览器
                  await launch(url);//真正意义上的打开浏览器，它也是异步的
                }else{
                  throw "can not launch $url";//抛出错误
                }
              },
            ),
          ],
        ),
      ),
    );
  }
}