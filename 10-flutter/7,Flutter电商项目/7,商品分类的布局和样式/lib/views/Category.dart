import 'package:flutter/material.dart';
import '../services/ScreenAdaper.dart';

class Category extends StatefulWidget {
  @override
  _CategoryState createState() => _CategoryState();
}

class _CategoryState extends State<Category> {
  int _selectIndex = 0;
  @override
  Widget build(BuildContext context) {
    ScreenAdaper.init(context); //需要初始化

    // 获取右侧GridView宽高比
    // 先获取左侧宽度
    var leftWidth = ScreenAdaper.getScreenWidth() / 4;
    // 右侧每一项宽度=（总宽度-左侧宽度-GridView外侧元素左右的Padding值-GridView中间的间距）/3
    // 计算右侧每一项宽度
    var righItemWidth =
        (ScreenAdaper.getScreenWidth() - leftWidth - 20 - 20) / 3;
    // 获取右侧宽度
    righItemWidth = ScreenAdaper.width(righItemWidth);

    // 获取计算后的高度
    var rightItemHeight = righItemWidth + ScreenAdaper.height(28);
    return Row(
      children: <Widget>[
        Container(
          //左侧导航
          width: leftWidth,
          height: double.infinity,
          child: ListView.builder(
            itemCount: 28, //先写上死数据
            itemBuilder: (BuildContext context, index) {
              return Column(
                children: <Widget>[
                  // 左侧相当于导航，可点击
                  InkWell(
                    onTap: () {
                      setState(() {
                        _selectIndex = index; //点击导航的同时改变了状态
                      });
                    },
                    child: Container(
                      child: Text("第${index}条",
                          textAlign: TextAlign.center), //使得文本垂直居中
                      color: _selectIndex == index ? Colors.red : Colors.white,
                    ),
                  ),
                  Divider(), //给左右两侧加上个分界线
                ],
              );
            },
          ),
        ),
        Expanded(
          //右侧商品
          flex: 5, //仅仅有一列
          child: Container(
            padding: EdgeInsets.all(10),
            height: double.infinity, //无限的
            color: Color.fromRGBO(240, 246, 246, 0.9),
            child: GridView.builder( //九宫格的感觉
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 3, //非主轴方向有三个商品
                //每个商品宽高比设置按照右侧分配的来设置
                childAspectRatio: righItemWidth / rightItemHeight,
                crossAxisSpacing: 10,//左右方向上的间隙
                mainAxisSpacing: 10,//垂直方向上的间隙
              ),
              itemCount: 18,
              itemBuilder: (BuildContext context, index) {
                return Container(//每个商品格式
                  child: Column(
                    children: <Widget>[
                      AspectRatio(//商品图片
                        aspectRatio: 1 / 1,
                        child: Image.network(
                            "https://www.itying.com/images/flutter/list8.jpg",
                            fit: BoxFit.cover),
                      ),
                      Container(//商品文本
                        height: ScreenAdaper.height(35),
                        margin: EdgeInsets.only(top: ScreenAdaper.height(15)),
                        child: Text("女装"),
                      ),
                    ],
                  ),
                );
              },
            ),
          ),
        ),
      ],
    );
  }
}
