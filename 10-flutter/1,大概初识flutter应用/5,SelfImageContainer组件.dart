import 'package:flutter/material.dart';

class selfImageContainer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("金泰亨"),
      ),
      body: Center(//使得内容居于中间
       child: Container(
         width: 2000,
         height: 3000,
         decoration: BoxDecoration(
           color: Colors.purple
         ),
         child:Image(//给其设置子组件需要child
           image: NetworkImage("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568781935443&di=3bdf52c5245ba4ed36826fd1aeb32439&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201710%2F01%2F20171001094241_jJMVw.jpeg"),
          //  图片的展开方式
          // fit: BoxFit.cover,//全面展开，各面都占满整个div
          // fit:BoxFit.fill,//仅仅是纵向占满div
          // fit: BoxFit.fitWidth,//宽度撑满
          // fit: BoxFit.fitHeight,//高度撑满
         )

       ),
      ),
    );
  }
}