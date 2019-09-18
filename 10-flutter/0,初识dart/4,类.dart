import 'Person.dart';
void main(){
  // var person = new Person();
  var person = new Person("Tom",666);
  print(person.name);
  print(person.age);
  print(person.sum(1,2));
}