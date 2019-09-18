/*
----------------------------------------------
// 1，两者对比可知，var声明变量在这里不存在变量的提升
void main(){
  var a  = 110;
  print(a);
}
-----------------
void main(){
  print(a);
  var a  = 110;//Getter not found: 'a'.
}
--------------------------------------------------
//2，var不可重复声明
void main(){
  var a = 10;
  var a = 2;//Error: 'a' is already declared in this scope.
  print(a);
}
----------------------------------------------------
// 3，未初始化，值为null
void main(){
  var a ;
  print(a);//null
}
--------------------------------------------------
// 4，后面可跟任何数据类型
void main(){
  // var a = "hello" ;//hello
  // var a = true ;//true
  var a = 110;//110
  print(a);
}
------------------------------------------------------
// 5，当var上一个变量时，它的类型就固定了，不可更改
void main(){
  var a = 110;//110
  // a = "hello"//不OK
  // a = 100;//ok
  print(a);
}

============================================================
// 1，final中定义的常量，也不存在重复声明
final b =110;
final b =100;
void main(){
  print(b);//Error: 'b' is already declared in this scope.
}
-----------------------------------------------------------
// 2，final声明常量要求立马赋值
final b ;
 b =100;
void main(){
  print(b);
}
-------------------------------------------------
void main(){
 final b = {"name":"wangcai"};
 b["name"] = "tanni";
  print(b);
}



================================================
// 1，const声明常量要求立马赋值
const c ;
 c =100;
void main(){
  print(c);
}
// 2，声明之后不可修改
void main(){
 const b = {"name":"wangcai"};
 b["name"] = "tanni";
  print(b);
}
------------------------------------------------
*/
/*
---------------------------------------------------------
// var和final可以写函数返回值，const是不存在的

int sum(m,n)=>m+n;
void main(){
  var r = sum(1,2);
  print(r);
}
========================================================
// final
int sum(m,n)=>m+n;
void main(){
  final r = sum(1,2);
  print(r);
}
=============================================================
// const
int sum(m,n)=>m+n;
void main(){
  const r = sum(1,2);
  print(r);
}

 */
/*
// ??  类似于JS中的三元运算符--->判断非空
void main(){
  // var a ;//666
  var a = 110;// 110
  //判断a是否为空，为空就是666，否则就是110
  var r = a ?? 666;
  print(r);
}
*/
/*
// 数值（int类型）：Number  整数，小数
  int b = 110;//一旦定义类型就固定死了
  b = 12.5;//高进制可向低进制转化，反过来不可以
  b = "hello";//不OK
  void main(){
  print(b);
  }
-------------------------------
  double b = 3.14;//一旦定义类型就固定死了
  b = 12;//高进制可向低进制转化，会转成小数形式
  void main(){
  print(b);
  }
===============================================================================
//字符串：String 
// 1，存放一个字符串
String str ="hello";
void main(){
 print(str);
}
---------------------------------
//2，同时存在多行字符串
String str ='''
hello
NiHao
BTS
''';
void main(){
 print(str);
}
=======================================================
布尔型：Boolean 
=============================================================
（列表型）数组：List 
  void main(){
  List list = [1, 2, 3, "hello", true];
  print(list);  // [1, 2, 3, hello, true]
 }
 ---------------------------------------------------------
 // 1，声明一个不可以改变的数组
 void main(){
  List list2 = const[1,2,3];
  list2[0] = 111;  
  print(list2);
 }
-------------------------------------------------------------
// 2，创建固定类型的数组
void main(){
   List list3 = <int>[1, 2, 3];
   print(list3);
}
---------------------------------------------------------
// 3，创建新数组[]
void main(){
   List list4 = new List();
   print(list4);
}
  
  
==============================================================
键值对：Map 与上面List特别相似
*/
/*
// 插值表达式插入变量${变量值} 
void main(){
  int a = 110; 
  // String str = "hello  world";
  String str = "hello ${a} world";
  print(str);
}
  
*/

/* 
// 字符串拼接 
void main(){
  // 乘法 *
  // String str = "hello";
  // print(str*3);

  //加法 +
  String str1 = "hello";
  String str2 = "BTS";
  print(str1+str2);
}
*/

  














