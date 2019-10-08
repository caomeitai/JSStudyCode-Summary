// 历史记录数据存储在本地仓库Storage中
// 在这里面存放数据就只能是键值对，是对象
import 'package:shared_preferences/shared_preferences.dart';
class Storage{
 //设置历史记录 
 static Future<void> setString(key,value) async{
   SharedPreferences sp = await SharedPreferences.getInstance();
   sp.setString(key, value);
 }
 static Future<String> getString(key) async{
   SharedPreferences sp = await SharedPreferences.getInstance();
   return sp.getString(key);
 }
 static Future<void> remove(key) async{
   SharedPreferences sp = await SharedPreferences.getInstance();
   sp.remove(key);
 }
 static Future<void> clear() async{
   SharedPreferences sp = await SharedPreferences.getInstance();
   sp.clear();
 }
}