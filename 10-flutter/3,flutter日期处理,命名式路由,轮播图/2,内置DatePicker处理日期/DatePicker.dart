import 'package:flutter/material.dart';
import 'package:date_format/date_format.dart'; //时间格式化依赖

class DatePicker extends StatefulWidget {
  @override
  _DatePickerState createState() => _DatePickerState();
}

class _DatePickerState extends State<DatePicker> {
  // 内置的datepicker
  // 处理日期
  DateTime _nowDate = DateTime.now(); //定义变量来接收数据
  _showdatepicker() async {
    //showDatePicker 它表示调用flutter内置的datepicker
    //  该内置函数是Future类型的，类似于promise可以解决异步
    //  showDatePicker(//配置的所有参数都是必传的
    //    context: context,//必传参数
    //    initialDate:DateTime.now(),//初始化的时间
    //    firstDate: DateTime(1999),
    //    lastDate: DateTime(2022),
    //  ).then((res){//可拿到点击时间确定之后的结果
    //    print(res);//2019-09-30 00:00:00.000
    //  });

    // 最好的解决异步方法async和await
    var res = await showDatePicker(
      //配置的所有参数都是必传的
      context: context, //必传参数
      initialDate: DateTime.now(), //初始化的时间
      firstDate: DateTime(1999),
      lastDate: DateTime(2022),
    );
    //  修改时间 改变状态
    setState(() {
      this._nowDate = res;
    });
    //  print(res);//2019-09-30 00:00:00.000
  }
  // 处理时间
  var _nowTime = TimeOfDay(hour: 12,minute: 20);//定义的变量是初始化时间
  _showtimepicker() async {
    var res =  await showTimePicker(
      context: context,
      initialTime: _nowTime
    );
    setState(() {
     this._nowTime = res; 
    });
   }

  @override
  void initState() {
    // DateTime _nowDate =DateTime.now();//拿到当前时间
    // print(_nowDate);//2019-09-22 16:33:05.946871

    // DateTime _nowDate = DateTime(2019-09-22);//1988-01-01 00:00:00.000
    // DateTime _nowDate = DateTime(2019,9,22);//2019-09-22 00:00:00.000

    // 格式化日期
    // DateTime _nowDate = DateTime(2019,9,22);//2019-09-22 00:00:00.000
    // String r = formatDate(_nowDate,[yyyy,'-',mm,'-',dd]);//首参是时间，二参是格式
    // print(r);//2019-09-22

    // 格式化时间
    // DateTime _nowDate = DateTime(2019, 09, 22, 16, 44, 10);
    // String r = formatDate(_nowDate,[HH,':',nn,':',ss]);//首参是时间，二参是格式
    // print(r);//16:44:10

    // 拿到时间戳
    // DateTime _nowDate = DateTime.now();//这是当前时间
    // print(_nowDate.millisecondsSinceEpoch);//1569142112625

    // 从服务器得到的一般都是时间戳
    // 将时间戳格式化正常时间  fromMicrosecondsSinceEpoch
    // String r = formatDate(DateTime.fromMicrosecondsSinceEpoch(1569142112625),[yyyy,"年",mm,"月",dd,"日"]);
    // print(r);
    super.initState(); //1970年01月19日
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("处理日期"),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          // 用内置DatePicker处理日期
          InkWell(
            //可以让不能点击的组件变成点击的
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                // 在渲染数据是将时间进行格式化处理
                Text(
                  "${formatDate(_nowDate, [yyyy, '年', mm, '月', dd, '日'])}",
                  style: TextStyle(
                    fontSize: 16,
                  ),
                ),
                Icon(Icons.arrow_drop_down), //在文本后加上向下箭头
              ],
            ),
            onTap: _showdatepicker,
          ),
          // 用内置DatePicker处理时间
          InkWell(
            //可以让不能点击的组件变成点击的
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                // 在渲染数据是将时间进行格式化处理
                Text("${_nowTime.format(context)}"),
                Icon(Icons.arrow_drop_down), //在文本后加上向下箭头
              ],
            ),
            onTap: _showtimepicker,
          ),
        ],
      ),
    );
  }
}
