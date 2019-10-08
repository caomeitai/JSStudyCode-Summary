// 完成屏幕适配，原本可在所配置处引入，再使用即可
// 先将其抽离出一个组件，到时直接引入就OK
import 'package:flutter_screenutil/flutter_screenutil.dart';

// 抽离出来的就是个类，使用时直接用.运算符
class ScreenAdaper{
 static init(context){
  // 默认的适配手机屏幕的初始值
  ScreenUtil.instance = ScreenUtil(width: 750, height: 1334, allowFontScaling: true)..init(context);
 }
 // 适配高度
 static height(double value){
  return ScreenUtil.getInstance().setHeight(value);
 }
 // 适配宽度
 static width(double value){
  return ScreenUtil.getInstance().setWidth(value);
 }
 //获取手机屏幕宽度
 static getScreenWidth(){
   return ScreenUtil.screenWidthDp;
 }
}