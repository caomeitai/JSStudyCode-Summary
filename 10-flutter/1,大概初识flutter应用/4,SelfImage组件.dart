import 'package:flutter/material.dart';

class selfImage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("金泰亨")),
      body: Center(
        // 在每个组件中写子组件需要用到child
        child: Image(
          image: NetworkImage("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568781935443&di=3bdf52c5245ba4ed36826fd1aeb32439&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201710%2F01%2F20171001094241_jJMVw.jpeg"),
        ),
      ),
    );
  }
}