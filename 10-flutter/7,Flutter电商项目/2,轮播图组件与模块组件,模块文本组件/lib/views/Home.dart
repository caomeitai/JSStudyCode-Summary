import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';

// 就首页的整体布局来说ListView（大的框架）-->Container(轮播图)

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  // 轮播图数据
  List<Map> _ImageList = [
    {"url":"https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg"},
    {"url":"http://gw.alicdn.com/imgextra/i3/96/O1CN01mMnTmp1Ca0a8Pze9C_!!96-0-lubanu.jpg"},
    {"url":"http://gw.alicdn.com/imgextra/i1/773779/O1CN01GlfPqx1dmpI9YyVTC_!!773779-0-lubanu.jpg"},
    {"url":"http://gw.alicdn.com/imgextra/i4/1449131/O1CN01y7sQ3m2HK32JgHBWt_!!1449131-0-lubanu.jpg"},
    {"url":"https://gw.alicdn.com/imgextra/i2/601312/O1CN01Vr7hVW1LYwCRFKy7G_!!601312-0-lubanu.jpg"},
  ];
  // 轮播图组件
  Widget _SwiperWidget() {
    return Container(
      //需要设置宽高比才可将轮播图显示出来
      child: AspectRatio(
        aspectRatio: 20 / 9,
        child: Swiper(
          itemBuilder: (BuildContext context, int index) {
            return new Image.network(
              this._ImageList[index]["url"],
              fit: BoxFit.fill,
            );
          },
          itemCount: this._ImageList.length,
          pagination: new SwiperPagination(),
          control: new SwiperControl(),
          autoplay: true, //自动播放
        ),
      ),
    );
  }
  //模块文本组件
  Widget _TextWidget(value){
    return Container(
      margin: EdgeInsets.only(left:5),
      padding: EdgeInsets.only(left: 10),
      decoration: BoxDecoration(
        border: Border(
          left: BorderSide(
            color: Colors.red,
            width: 5,
          )
        )
      ),
      child: Text(value,style: TextStyle(
        color: Colors.black87,
      )),
    );
  }
   // 猜你喜欢组件
  Widget _likeListWidget(){
    return Container(
      height: ScreenAdaper.height(150),
      child: ListView(),
    );
  }
  // 热门推荐组件
  Widget _hotListWidget(){
    return Container(
	  height: ScreenAdaper.height(150),
      child: ListView(),
    );
  }
  @override
  Widget build(BuildContext context) {
    // 算是将组件全部抽离到外面，在这里都只是调用函数
    return ListView(
      children: <Widget>[
        _SwiperWidget(),//轮播图
        SizedBox(height: 10),
        _TextWidget("猜你喜欢"),//猜你喜欢
        _likeListWidget(),
		SizedBox(height: 10),
        _TextWidget("热门推荐"),//热门推荐
	    _hotListWidget(),
      ],
    );
  }
}
