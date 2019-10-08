import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';
import '../services/ScreenAdaper.dart';
import 'package:dio/dio.dart';

// 轮播图类模型
import '../model/focus.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  void initState() {
    super.initState();
    _getfocusData();
  }

  //轮播图数据
  List _focusData = []; //存放轮播图数据
  // 调用接口来获取数据
  _getfocusData() async {
    var api = "http://jd.itying.com/api/focus";
    var res = await Dio().get(api);
    //  print(res.data);
    var focusList = FocusModel.fromJson(res.data);
    // print(focusList.result);//Instance of 'Result'数组
    // focusList.result.forEach((value){//因为得到数组，进行遍历可拿到每一项
    //   print(value.title);
    //   print(value.pic);// public\upload\f3OtH11ZaPX5AA4Ov95Q7DEM.png
    // });
    setState(() {
      this._focusData = focusList.result;
    });
  }

  // 轮播图组件--->它最终返回的都是组件
  Widget _SwiperWidget() {
    if (this._focusData.length > 0) {
      //最先判断轮播图是否有请求回来数据
      return Container(
        child: AspectRatio(//需要设置合适的宽高比才可将轮播图显示出来
          aspectRatio: 21 / 9,
          child: Swiper(
            itemBuilder: (BuildContext context, int index) {
              String pic = this._focusData[index].pic; //拿到轮播图地址
              // http://jd.itying.com/public\upload\f3OtH11ZaPX5AA4Ov95Q7DEM.png
              // print("http://jd.itying.com/${pic.replaceAll('\\', '/')}");
              return new Image.network(
                "http://jd.itying.com/${pic.replaceAll('\\', '/')}",
                fit: BoxFit.fill,
              );
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
  Widget _TextWidget(value) {
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
    return Container(
      height: ScreenAdaper.height(200),
      margin: EdgeInsets.only(top: ScreenAdaper.height(15)),
      padding: EdgeInsets.only(left: ScreenAdaper.width(14)),
      child: ListView.builder(
        //是活的数据肯定需要循环，就利用了ListView.builder
        scrollDirection: Axis.horizontal, //与column进行配合改变主轴滚轮方向
        itemCount: 10,
        itemBuilder: (BuildContext context, index) {
          return Column(
            children: <Widget>[
              Container(// 图片
                height: ScreenAdaper.height(150),
                width: ScreenAdaper.width(150),
                margin: EdgeInsets.only(right: ScreenAdaper.width(15)),
                child: Image.network(
                  "https://www.itying.com/images/flutter/hot${index + 1}.jpg",
                  fit: BoxFit.cover,
                ),
              ),
              Container( //文本
                height: ScreenAdaper.height(45),
                padding: EdgeInsets.only(top: ScreenAdaper.height(10)),
                child: Text("第${index + 1}条"),
              ),
            ],
          );
        },
      ),
    );
  }

  // 热门推荐组件
  Widget _hotListWidget() {
    // 在商品的每侧都有宽度为10的padding，计算在宽度上就占据了手机的30
    double itemWidth = (ScreenAdaper.getScreenWidth()) / 2;
    return Container(
      //包含于图片和文本的大盒子
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
              //防止服务器返回的图片大小不一致
              aspectRatio: 1 / 1,
              child: Image.network(
                "https://www.itying.com/images/flutter/list1.jpg",
                fit: BoxFit.cover, //它可能会导致图片的剪切，拉伸且会充满盒子
              ),
            ),
          ),
          Padding(
            //标题文本
            padding: EdgeInsets.only(top: ScreenAdaper.height(20)),
            child: Text(
              "2019夏季新款气质高贵洋气阔太太有女人味中长款宽松大码",
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(color: Colors.black54),
            ),
          ),
          Padding(
            //详情文本Stack配合Align进行定位
            padding: EdgeInsets.only(top: ScreenAdaper.height(20)),
            child: Stack(
              children: <Widget>[
                Align(
                  alignment: Alignment.centerLeft,
                  child: Text(
                    "￥188.0",
                    style: TextStyle(color: Colors.red, fontSize: 16),
                  ),
                ),
                Align(
                  alignment: Alignment.centerRight,
                  child: Text(
                    "￥198",
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
    );
  }

  @override
  Widget build(BuildContext context) {
    //在屏幕配置时不要忘记在使用flutter_screenutil之前初始化一下
    ScreenAdaper.init(context);
    // 算是将组件全部抽离到外面，在这里都只是调用函数
    return ListView(
      children: <Widget>[
        _SwiperWidget(), //轮播图
        SizedBox(height: ScreenAdaper.height(20)),
        _TextWidget("猜你喜欢"), //猜你喜欢
        _likeListWidget(),
        SizedBox(height: ScreenAdaper.height(20)),
        _TextWidget("热门推荐"), //热门推荐
        Container(
          child: Wrap(
            // spacing: 10,
            children: <Widget>[
              _hotListWidget(),
              _hotListWidget(),
              _hotListWidget(),
              _hotListWidget(),
              _hotListWidget(),
              _hotListWidget(),
            ],
          ),
        ),
      ],
    );
  }
}
