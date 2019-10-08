import 'dart:io';
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:dio/dio.dart';
// 拍照调用相机使用到模块image_picker


class ImagePicker extends StatefulWidget {
  @override
  _ImagePickerState createState() => _ImagePickerState();
}

class _ImagePickerState extends State<ImagePicker> {
  File _image;
  // 拍照
  Future _takePhoto() async {
   var image = await ImagePicker.pickImage(source: ImageSource.camera,maxWidth:400);//相机拍照，获取图片
   setState(() {
    this._image = image; 
   });
   this._uploadImage(image);
  }
  // 相册选图
  Future _openGallery() async {
    var image = await ImagePicker.pickImage(source: ImageSource.gallery,maxWidth:400);
    setState(() {
    this._image = image; 
   });
  }

  // 定义组件显示图片
  Widget _buildImage(){
  // 判断有图片就显示图片，否则就是文本请选择图片
   if(this._image == null){
     return Text("请选择图片....");
   }
   return Image.file(this._image);
  }

  // 上传图片
  _uploadImage(_imageDir)async{
    FormData formData = new FormData.from({
      "name":"tanni",
      "age":12,
      "sex":"男",
      "file":new UploadFileInfo(_imageDir,"xxx.jpg")
    });
    var response = await Dio().post("http://jd.itying.com/imgupload", data: formData);
      print(response);
  }

  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("ImagePicker"),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            RaisedButton(
              onPressed: _takePhoto,
              child: Text("拍照"),
            ),
            RaisedButton(
              onPressed: _openGallery,
              child: Text("选择图库照片"),
            ),
            _buildImage(),//在选择图片之后显示图片
          ],
        ),
      ),
    );
  }
  
  
}
