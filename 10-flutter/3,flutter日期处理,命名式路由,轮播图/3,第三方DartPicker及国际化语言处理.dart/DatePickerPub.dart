import 'package:flutter/material.dart';
import 'package:flutter_cupertino_date_picker/flutter_cupertino_date_picker.dart';
import 'package:date_format/date_format.dart';

class DatePickerPub extends StatefulWidget {
  @override
  _DatePickerPubState createState() => _DatePickerPubState();
}

class _DatePickerPubState extends State<DatePickerPub> {
  DateTime _dateTime =DateTime.now();
 
  void _showDatePicker(){
     DatePicker.showDatePicker(
      context,
      pickerTheme: DateTimePickerTheme(
        showTitle: true,
        confirm: Text('确定', style: TextStyle(color: Colors.red)),
        cancel: Text('取消', style: TextStyle(color: Colors.cyan)),
      ),
      minDateTime: DateTime.parse("1999-01-01"),
      maxDateTime: DateTime.parse("2022-12-20"),
      initialDateTime: _dateTime,
      dateFormat: "yyyy-MMMM-dd",
      locale: DateTimePickerLocale.zh_cn,
      onClose: () => print("----- onClose -----"),
      onCancel: () => print('onCancel'),
      onConfirm: (dateTime, List<int> index) {
        // 点击按钮改变状态
      setState(() {
        _dateTime = dateTime;
      });
    },
  );

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
          InkWell(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  "${formatDate(_dateTime,[yyyy,'-',mm,'-',dd])}",
                  style: TextStyle(
                    fontSize: 16,
                  ),
                ),
                Icon(Icons.arrow_drop_down), //在文本后加上向下箭头
              ],
            ),
            onTap: _showDatePicker,
          ),
        ],
      ),
    );
  }
}
