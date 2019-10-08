import 'package:flutter/material.dart';
import 'package:chewie/chewie.dart';
import 'package:video_player/video_player.dart';

// 播放视频的两种方案：video_player(内置)和chewie

class ChewieVideo extends StatefulWidget {
  @override
  _ChewieVideoState createState() => _ChewieVideoState();
}

class _ChewieVideoState extends State<ChewieVideo> {
  // 定义好了视频播放控制与进度条控制的类型
  VideoPlayerController videoPlayerController;
  ChewieController chewieController;
  @override
  initState() {
    super.initState();
    videoPlayerController = VideoPlayerController.network(
        'http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4');
    
    // 视频和播放控制条的定义
    // 在这里两项都存在，只需在下面渲染出来即可
    chewieController = ChewieController(
      videoPlayerController : videoPlayerController,
      aspectRatio: 3 / 2,
      autoPlay: true,
      looping: true,
    );
    
}

// 在退出视频后，销毁数据
@override
void dispose() {
  videoPlayerController.dispose();
  chewieController.dispose();
  super.dispose();
}

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Video Demo"),
      ),
      body: Center(
        child: Chewie(
		//在这里渲染带有进度条的视频
          controller: this.chewieController,
        ),
      ),
    );
  }
}
