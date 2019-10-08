import 'package:flutter/material.dart';
// import 'package:chewie/chewie.dart';
import 'package:video_player/video_player.dart';

// 播放视频的两种方案：video_player(内置)和chewie

class ChewieVideo extends StatefulWidget {
  @override
  _ChewieVideoState createState() => _ChewieVideoState();
}

class _ChewieVideoState extends State<ChewieVideo> {
  VideoPlayerController _controller; //视频播放器的控制条定义
  @override
  initState() {
    super.initState();
    // 在一跳转到页面就解析视频
    _controller = VideoPlayerController.network(
      // http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4
        'http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4')
      ..initialize().then((_) {
        setState(() {});
      });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Video Demo"),
      ),
      body: Center(
        child: _controller.value.initialized
            ? AspectRatio(
                aspectRatio: _controller.value.aspectRatio,
                child: VideoPlayer(_controller),
              )
            : Container(),
      ),
      // 控制视频播放还是暂停的浮动按钮
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          setState(() {
            _controller.value.isPlaying
                ? _controller.pause()
                : _controller.play();
          });
        },
        child: Icon(
          _controller.value.isPlaying ? Icons.pause : Icons.play_arrow,
        ),
      ),
    );
  }
}
