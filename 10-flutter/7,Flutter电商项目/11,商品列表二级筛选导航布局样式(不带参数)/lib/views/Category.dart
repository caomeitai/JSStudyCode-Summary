import 'package:flutter/material.dart';
import '../services/ScreenAdaper.dart';
import '../config/Config.dart';
import 'package:dio/dio.dart';

import '../model/category.dart';

class Category extends StatefulWidget {
  @override
  _CategoryState createState() => _CategoryState();
}

// 在进行首页到分类页面切换时，不再重新请求数据，
// 第一步即是with  AutomaticKeepAliveClientMixin
// 第二步就是 重写函数 bool get wantKeepAlive => true;

// 继承属性的感觉，类似于vue中的keep-alive
class _CategoryState extends State<Category>
    with AutomaticKeepAliveClientMixin {
  int _selectIndex = 0;
  List _leftCateList = [];
  List _rightCateList = [];

  @override
  // TODO: implement wantKeepAlive
  bool get wantKeepAlive => true;

  @override
  void initState() {
    super.initState();
    _getLeftCateData();
  }

  // 获取左侧导航数据
  _getLeftCateData() async {
    var url = "${Config.domain}api/pcate";
    var res = await Dio().get(url);
    var leftcateList = new CateListModel.fromJson(res.data);
    setState(() {
      this._leftCateList = leftcateList.result;
    });
    _getRightCateData(leftcateList.result[0].sId);
  }

  // 获取右侧商品数据
  _getRightCateData(pid) async {
    var api = "${Config.domain}api/pcate?pid=${pid}";
    var res = await Dio().get(api);
    var rightCateList = new CateListModel.fromJson(res.data);
    // 当提示setState()出现错误，是因为异步消息未返回
    // 只需加上if(mounted){}来进行判断即可
    if (mounted) {
      setState(() {
        this._rightCateList = rightCateList.result;
      });
    }
  }

  // 左侧导航
  Widget _leftCateWidget(leftWidth) {
    if (this._leftCateList.length > 0) {
      return Container(
        width: leftWidth,
        height: double.infinity,
        child: ListView.builder(
          itemCount: this._leftCateList.length,
          itemBuilder: (BuildContext context, index) {
            return Column(
              children: <Widget>[
                InkWell(
                  onTap: () {
                    setState(() {
                      _selectIndex = index;
                      this._getRightCateData(this._leftCateList[index].pid);
                    });
                  },
                  child: Container(
                    width: double.infinity,
                    height: ScreenAdaper.height(84),
                    padding: EdgeInsets.only(top: ScreenAdaper.height(24)),
                    child: Text("${this._leftCateList[index].title}",
                        textAlign: TextAlign.center), //使得文本垂直居中
                    color: _selectIndex == index ? Colors.red : Colors.white,
                  ),
                ),
                Divider(
                  height: ScreenAdaper.height(1),
                ),
              ],
            );
          },
        ),
      );
    } else {
      return Container(
        width: leftWidth,
        height: double.infinity,
      );
    }
  }

  // 右侧商品
  Widget _rightCateWidget(righItemWidth, rightItemHeight) {
    if (this._rightCateList.length > 0) {
      return Expanded(
        //右侧商品
        flex: 1,
        child: Container(
          padding: EdgeInsets.all(10),
          height: double.infinity,
          color: Color.fromRGBO(240, 246, 246, 0.9),
          child: GridView.builder(
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 3,
              childAspectRatio: righItemWidth / rightItemHeight,
              crossAxisSpacing: 10,
              mainAxisSpacing: 10,
            ),
            itemCount: this._rightCateList.length,
            itemBuilder: (BuildContext context, index) {
              // 处理得到图片的url
              String pic = this._rightCateList[index].pic;
              pic = Config.domain + pic.replaceAll('\\', '/');
              // 完成分类页面到商品列表的跳转--->跳转还携带了参数
              return InkWell(
                onTap: (){
                  // Navigator.pushNamed(context, "/productList",arguments: {
                  //   "cid":this._rightCateList[index].sId
                  // });
                  Navigator.pushNamed(context, "/productList");
                },
                child: Container(
                  child: Column(
                    children: <Widget>[
                      AspectRatio(
                        //商品图片
                        aspectRatio: 1 / 1,
                        child: Image.network(pic, fit: BoxFit.cover),
                      ),
                      Container(
                        //商品文本
                        height: ScreenAdaper.height(35),
                        child: Text("${this._rightCateList[index].title}"),
                      ),
                    ],
                  ),
                ),
              );
            },
          ),
        ),
      );
    } else {
      return Expanded(
        flex: 1,
        child: Container(
          padding: EdgeInsets.all(10),
          height: double.infinity,
          color: Color.fromRGBO(240, 246, 246, 0.9),
          child: Text("加载中..."),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    ScreenAdaper.init(context);

    // 先获取左侧宽度
    var leftWidth = ScreenAdaper.getScreenWidth() / 4;
    // 右侧每一项宽度=（总宽度-左侧宽度-GridView外侧元素左右的Padding值-GridView中间的间距）/3
    // 计算右侧每一项宽度
    var righItemWidth =
        (ScreenAdaper.getScreenWidth() - leftWidth - 20 - 20) / 3;
    // 获取右侧宽度
    righItemWidth = ScreenAdaper.width(righItemWidth);

    // 获取计算后的高度
    var rightItemHeight = righItemWidth + ScreenAdaper.height(35);
    return Row(
      children: <Widget>[
        _leftCateWidget(leftWidth),
        _rightCateWidget(righItemWidth, rightItemHeight)
      ],
    );
  }
}
