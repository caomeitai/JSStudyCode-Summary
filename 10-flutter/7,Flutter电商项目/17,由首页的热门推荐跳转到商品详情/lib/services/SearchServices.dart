// 历史记录数据增删改查
import 'dart:convert';
import 'Storage.dart';
/* 
获取本地存储的数据；(searchList)
判断本地存储是否存在数据；
  存在数据：（1）读取本地存储的数据；（2）判断本地存储中有没有当前数据：有就不再操作；没有就将本地存储的数据和当前数据拼接后重新写入
  不存在数据：直接将当前数据放在数组中写入到本地存储
*/

class SearchServices{
  // 设置历史记录数据
  static setHistoryData(keywords)async{
   try{
     //指的是在本地存储中存放着searchList这样的数据，获取到之后将字符串转成对象，将解析后的数据存到searchListData
     //相当于设置成为了历史记录的数据 
     List searchListData = json.decode(await Storage.getString("searchList"));
    //  print(searchListData);
    
    //根据关键字来判断本地存储中是否存在当前数据 
    // searchListData是个对象List
    var hasData = searchListData.any((v){
      return v == keywords;
    });
    if(!hasData){//本地存储存在数据，但没有当前数据
      searchListData.add(keywords);//将数据以数组List的形式直接存入到本地存储，而数组中的数据就是对象
      await Storage.setString('searchList', json.encode(searchListData));//根据key值，解析出来value值
    }
   }catch(e){//本地存储不存在数据
     List tempList = new List();//创建新的数组List，将当前数据存储到List中，再添加到本地存储中
     tempList.add(keywords);
     await Storage.setString('searchList', json.encode(tempList));
   }
  }
  // 获取历史记录数据
  static getHistoryData() async {
    try {
    //直接将本地存储的数据获取到然后再返回就OK 
    List searchListData =  json.decode(await Storage.getString('searchList'));
    return searchListData;
    }catch(e){
      return [];//不存在数据就直接返回[]
    }
  }
  // 清空历史记录数据--->它也是伴随着key的
  static clearHistoryData() async {
    await Storage.remove('searchList');
  }
  // 删除历史记录数据--->将数据获取，删除，再重新设置
  static removeHistoryData(keywords) async {
    List searchListData = json.decode(await Storage.getString('searchList'));
    searchListData.remove(keywords);
    await Storage.setString('searchList', json.encode(searchListData));
  }
}