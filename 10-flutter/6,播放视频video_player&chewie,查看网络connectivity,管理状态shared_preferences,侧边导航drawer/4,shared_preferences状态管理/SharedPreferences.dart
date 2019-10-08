import 'package:shared_preferences/shared_preferences.dart';
// 想要通过它进行管理状态（增删改查）
// 在多个组件中操作状态：把这些操作封装成一些方法

// 它好比是浏览器中的localstorage  cookie indexDB
// 里面存放的数据也还是键值对
class Storage{
  // 设置了方法类型，无返回值，还是静态方法--->只能通过类名来调用Storage.setString("name","tanni")
 static Future<void> setString(key,value) async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  prefs.setString(key, value);//设置数据，保存到手机
 }

 static Future<String>  getString(key) async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  return prefs.getString(key);//根据key来获取数据，谁调用该函数，就将返回值给谁
 }

 static Future<void>  remove(key) async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  prefs.remove(key);//根据key来移除数据，谁调用该函数，就将返回值给谁
 }
}