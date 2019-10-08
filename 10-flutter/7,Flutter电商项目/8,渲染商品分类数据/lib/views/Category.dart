import 'package:flutter/material.dart';
import '../services/ScreenAdaper.dart';
import '../config/Config.dart';
import 'package:dio/dio.dart';

import '../model/category.dart';

class Category extends StatefulWidget {
  @override
  _CategoryState createState() => _CategoryState();
}

class _CategoryState extends State<Category> {
  int _selectIndex = 0;
  List _leftCateList = [];
  List _rightCateList = [];
  @override
  void initState() {
    super.initState();
    _getLeftCateData();
  }

  // 获取左侧导航数据
  _getLeftCateData() async {
    var url = "${Config.domain}api/pcate";
    var res = await Dio().get(url); //记住异步操作，别忘记await
    var leftcateList = new CateListModel.fromJson(res.data);
    // print(leftcateList);
    // print(leftcateList.result);//数组
    setState(() {
      this._leftCateList = leftcateList.result;
    });
    _getRightCateData(leftcateList.result[0].sId);
  }

  // 获取右侧商品数据--->根据商品pid
  _getRightCateData(pid) async {
    var api = "${Config.domain}api/pcate?pid=${pid}";
    var res = await Dio().get(api);
    var rightCateList = new CateListModel.fromJson(res.data);
    setState(() {
      this._rightCateList = rightCateList.result;
    });
  }

  // 左侧导航--->左侧导航宽度需要传递过来
  Widget _leftCateWidget(leftWidth) {
    if (this._leftCateList.length > 0) {
      return Container(
        //左侧导航
        width: leftWidth,
        height: double.infinity,
        child: ListView.builder(
          itemCount: this._leftCateList.length,
          itemBuilder: (BuildContext context, index) {
            return Column(
              children: <Widget>[
                // 左侧相当于导航，可点击，点击它除了会使其控制导航索引以外，
                // 还会通过函数来控制右侧商品展示
                InkWell(
                  onTap: () {
                    setState(() {
                      _selectIndex = index; //点击导航的同时改变了状态
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
                ), //给左右两侧加上个分界线
              ],
            );
          },
        ),
      );
    } else {
      // 没数据时也就不存在文本数据渲染这一说
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
        flex: 1, //仅仅有一列
        child: Container(
          padding: EdgeInsets.all(10),
          height: double.infinity, //无限的
          color: Color.fromRGBO(240, 246, 246, 0.9),
          child: GridView.builder(
            //九宫格的感觉
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 3, //非主轴方向有三个商品
              //每个商品宽高比设置按照右侧分配的来设置
              childAspectRatio: righItemWidth / rightItemHeight,
              crossAxisSpacing: 10, //左右方向上的间隙
              mainAxisSpacing: 10, //垂直方向上的间隙
            ),
            itemCount: this._rightCateList.length,
            itemBuilder: (BuildContext context, index) {
              // 处理得到图片的url
              String pic = this._rightCateList[index].pic;
              pic = Config.domain + pic.replaceAll('\\', '/');
              return Container(
                //每个商品格式
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
              );
            },
          ),
        ),
      );
    }else{
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
    ScreenAdaper.init(context); //需要初始化

    // 获取右侧GridView宽高比
    // 先获取左侧宽度
    var leftWidth = ScreenAdaper.getScreenWidth() / 4;
    // 右侧每一项宽度=（总宽度-左侧宽度-GridView外侧元素左右的Padding值-GridView中间的间距）/3
    // 计算右侧每一项宽度
    var righItemWidth =
        (ScreenAdaper.getScreenWidth() - leftWidth-20-20) / 3;
    // 获取右侧宽度
    righItemWidth = ScreenAdaper.width(righItemWidth);

    // 获取计算后的高度
    var rightItemHeight = righItemWidth + ScreenAdaper.height(35);
    return Row(
      children: <Widget>[
        _leftCateWidget(leftWidth),
        _rightCateWidget(righItemWidth,rightItemHeight)
      ],
    );
  }
}
