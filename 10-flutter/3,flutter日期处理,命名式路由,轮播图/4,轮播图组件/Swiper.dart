import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';

class SwiperDemo extends StatefulWidget {
  @override
  _SwiperDemoState createState() => _SwiperDemoState();
}

class _SwiperDemoState extends State<SwiperDemo> {
  List<Map> imgList = [
    {
      "title":"tanni",
      "url":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=556553619,28835917&fm=26&gp=0.jpg"
    },
    {
      "title":"tanni",
      "url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569158649907&di=1baab11d1d4a9d098cde8d47bf73ec9a&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F9d09cd886e9d6229e35e0172dc8bb9b8d55d4a34.jpg"
    },
    {
      "title":"tanni",
      "url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569158649901&di=a6dd46f936556ddbda16e0ffe133beb1&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F24%2F20190124195504_yixmo.jpg"
    }
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("轮播图"),
      ),
      body: Column(
        children: <Widget>[
          Container(
            child: AspectRatio(
              // 放着轮播图在手机上的宽高适应比
              aspectRatio: 16 / 9,
              child: Swiper(
                //Swiper组件使用方法
                // itemBuilder相当于数组中的map循环
                itemBuilder: (BuildContext context, int index) {
                  return new Image.network(
                    imgList[index]["url"],
                    fit: BoxFit.fill,
                  );
                },
                itemCount: imgList.length,
                pagination: new SwiperPagination(),
                control: new SwiperControl(),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
