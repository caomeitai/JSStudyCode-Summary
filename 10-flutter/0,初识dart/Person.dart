class Person{
  // 在类中定义变量的类型
  String name = "tanni";
  int age = 12;
  Function sum = (a,b){
    return a+b;
  };
  // 传递参数，想要接收数据，需要重写类
  Person(this.name,this.age);//数据就会覆盖掉
}

// 书写的类无需导出，只需使用即可