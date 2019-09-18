// 函数定义放在main函数上面

// 它和JS中的函数相比，限定了形参的类型，和函数返回值类型

// String代表函数的返回值是String类型
String getPerson(String name,int age){//定义形参的类型
  // 在字符串中想要使用变量需要${}来使用，而{}可以省略不写
  return "name=$name,age=$age";
}

void main(){
  String str = getPerson("tanni", 12);//函数返回值为String类型
  print(str);
}



// String get(String name, int age){
//   return "name=${name},age=${age}";
// }
// void main(){
//   String str = get("tanni",12);
//   print(str);
// }