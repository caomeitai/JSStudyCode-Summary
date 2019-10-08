import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';
import '../services/ScreenAdaper.dart';
import 'package:dio/dio.dart';
import '../config/Config.dart';

// 模型数据
import '../model/focus.dart';
import '../model/likeList.dart';
import '../model/hotList.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  void initState() {
    super.initState();
    _getfocusData();
    _getlikeListData();
    _gethotListData();
  }

/*--------- 存放数据-------- */
  List _focusData = []; //存放轮播图数据
  List _likeListData = []; //存放猜你喜欢数据
  List _hotListData = []; //存放热门推荐数据

/*-----------获取数据---------*/
  // 获取轮播图数据
  _getfocusData() async {
    var api = "${Config.domain}api/focus";
    var res = await Dio().get(api);
    var focusList = FocusModel.fromJson(res.data);
    setState(() {
      this._focusData = focusList.result;
    });
  }

  // 获取猜你喜欢数据
  _getlikeListData() async {
    var api = "${Config.domain}api/plist?is_hot=1";
    var res = await Dio().get(api);
    var likeList = LikeListModel.fromJson(res.data);
    setState(() {
      this._likeListData = likeList.result;
    });
  }

  // 获取热门推荐数据
  _gethotListData() async {
    var api = "${Config.domain}api/plist?is_best=1";
    var res = await Dio().get(api);
    var hotList = HotListModel.fromJson(res.data);
    setState(() {
      this._hotListData = hotList.result;
    });
  }

  // 轮播图组件--->它最终返回的都是组件
  Widget _swiperWidget() {
    if (this._focusData.length > 0) {
      return Container(
        child: AspectRatio(
          //需要设置合适的宽高比才可将轮播图显示出来
          aspectRatio: 21 / 9,
          child: Swiper(
            itemBuilder: (BuildContext context, int index) {
              String pic = this._focusData[index].pic;
              pic = Config.domain + pic.replaceAll('\\', '/'); //拿到轮播图地址
              return new Image.network(pic, fit: BoxFit.fill);
            },
            itemCount: this._focusData.length,
            pagination: new SwiperPagination(),
            control: new SwiperControl(),
            autoplay: true, //自动播放
          ),
        ),
      );
    } else {
      return Text("加载中....");
    }
  }

  //模块文本组件
  Widget _textWidget(value) {
    return Container(
      height: ScreenAdaper.height(42),
      margin: EdgeInsets.only(left: ScreenAdaper.width(15)),
      padding: EdgeInsets.only(left: ScreenAdaper.width(15)),
      decoration: BoxDecoration(
          border: Border(
              left: BorderSide(
        color: Colors.red,
        width: ScreenAdaper.width(10),
      ))),
      child: Text(value,
          style: TextStyle(
            color: Colors.black87,
          )),
    );
  }

  // 猜你喜欢组件
  Widget _likeListWidget() {
    if (this._likeListData.length > 0) {
      return Container(
        height: ScreenAdaper.height(200),
        margin: EdgeInsets.only(top: ScreenAdaper.height(15)),
        padding: EdgeInsets.only(left: ScreenAdaper.width(14)),
        child: ListView.builder(
          scrollDirection: Axis.horizontal, //与column进行配合改变主轴滚轮方向
          itemCount: this._likeListData.length,
          itemBuilder: (BuildContext context, index) {
            String sPic = this._likeListData[index].sPic;
            sPic = Config.domain + sPic.replaceAll('\\', '/');
            return Column(
              children: <Widget>[
                Container(
                  // 图片
                  height: ScreenAdaper.height(150),
                  width: ScreenAdaper.width(150),
                  margin: EdgeInsets.only(right: ScreenAdaper.width(15)),
                  child: Image.network(sPic, fit: BoxFit.cover),
                ),
                Container(
                  //文本
                  height: ScreenAdaper.height(45),
                  padding: EdgeInsets.only(top: ScreenAdaper.height(10)),
                  child: Text("￥${this._likeListData[index].price}"),
                ),
              ],
            );
          },
        ),
      );
    } else {
      return Text("");
    }
  }

  // 热门推荐组件
  Widget _hotListWidget() {
    double itemWidth = (ScreenAdaper.getScreenWidth() - 30) / 2;
    return Container(
      padding: EdgeInsets.all(10),
      child: Wrap(
          runSpacing: ScreenAdaper.width(10),
          spacing: ScreenAdaper.width(10),
          children: this._hotListData.map((value) {
            String sPic = value.sPic;
            sPic = Config.domain + sPic.replaceAll('\\', '/');
            return InkWell(
              onTap: () {//根据商品id来进行跳转到商品详情
                Navigator.pushNamed(context, "/productContent",
                    arguments: {"id": value.sId});
                // print(value.sId);
              },
              child: Container(
                padding: EdgeInsets.all(ScreenAdaper.width(10)),
                width: itemWidth,
                decoration: BoxDecoration(
                    border: Border.all(
                  color: Color.fromRGBO(233, 233, 233, 0.9),
                  width: ScreenAdaper.width(1),
                )),
                child: Column(
                  children: <Widget>[
                    Container(
                      //图片
                      width: double.infinity,
                      child: AspectRatio(
                        aspectRatio: 1 / 1, //防止服务器返回的图片大小不一致
                        child: Image.network(
                          sPic, fit: BoxFit.cover, //它可能会导致图片的剪切，拉伸且会充满盒子
                        ),
                      ),
                    ),
                    Padding(
                      //标题文本
                      padding: EdgeInsets.only(top: ScreenAdaper.height(20)),
                      child: Text(
                        "${value.title}",
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(color: Colors.black54),
                      ),
                    ),
                    Padding(
                      padding: EdgeInsets.only(top: ScreenAdaper.height(20)),
                      child: Stack(
                        children: <Widget>[
                          Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              "￥${value.price}",
                              style: TextStyle(color: Colors.red, fontSize: 16),
                            ),
                          ),
                          Align(
                            alignment: Alignment.centerRight,
                            child: Text(
                              "￥${value.oldPrice}",
                              style: TextStyle(
                                  fontSize: 14,
                                  color: Colors.black87,
                                  decoration: TextDecoration.lineThrough),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            );
          }).toList()),
    );
  }

  @override
  Widget build(BuildContext context) {
    ScreenAdaper.init(context);
    return ListView(
      children: <Widget>[
        _swiperWidget(), //轮播图
        SizedBox(height: ScreenAdaper.height(20)),
        _textWidget("猜你喜欢"), //猜你喜欢
        _likeListWidget(),
        SizedBox(height: ScreenAdaper.height(20)),
        _textWidget("热门推荐"), //热门推荐
        _hotListWidget(),
      ],
    );
  }
}
