// import 'dart:io';

import 'package:flutter_web/material.dart';

import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';
import 'package:hkbook/widget/toast.dart';

import '../../public.dart';

class ClearCPage extends StatefulWidget {
  @override
  _ClearCPageState createState() => _ClearCPageState();
}

class _ClearCPageState extends State<ClearCPage> {

  String _cacheSizeStr = "0MB";

  @override
  void initState() { 
    super.initState();
    loadCache();
  }

  @override
  Widget build(BuildContext context) {
    var margin = ScreenUtil().setWidth(20);
    return Scaffold(
      appBar: AppBar(
        title: Text("设置"),
      ),
      body: ListView(
        children: <Widget>[
            InkWell(
              onTap: (){
                _clearCache(context);
              },
              child: Container(
                margin: EdgeInsets.only(bottom: ScreenUtil().setHeight(20)),
                color: Colors.white,
                child: Row(
                  children: <Widget>[
                    Container(
                      margin: EdgeInsets.only(top: margin),
                      padding: EdgeInsets.all(margin),
                      child: Text('清除缓存',style: TextStyle(color: Colors.black87)),
                    ),
                    Expanded(
                    child:Container(
                            margin: EdgeInsets.only(top: margin),
                            padding: EdgeInsets.all(margin),
                            child: Text('${_cacheSizeStr}',style: TextStyle(color: Colors.black54),textAlign: TextAlign.right),
                          )
                      //   }else{
                      //     return SpinKitFadingCircle(color: Colors.white);
                      //   }
                      // }
                    // ),
                    )
                  ],
                ),
              ),
            ),
            Container(
              color: Colors.white,
              child: Row(
                children: <Widget>[
                  Container(
                    margin: EdgeInsets.only(top: margin),
                    padding: EdgeInsets.all(margin),
                    child: Text('版本号',style: TextStyle(color: Colors.black87)),
                  ),
                  Expanded(
                    child:FutureBuilder(
                      future: _getVersion(),
                      builder: (context,snapshot){
                        if (snapshot.hasData){
                          return Container(
                            margin: EdgeInsets.only(top: margin),
                            padding: EdgeInsets.all(margin),
                            child: Text('v${snapshot.data}',style: TextStyle(color: Colors.black54),textAlign: TextAlign.right),
                          );
                        }else{
                          return Container();
                        }
                      }
                    ),
                  )
                ],
              ),
            )
        ],
      ),
    );
  }

  Future<String> _getVersion() async{
    // PackageInfo packageInfo = await PackageInfo.fromPlatform();
    // String version = packageInfo.version;
    return  '1.0.0';
  }

  Future<void> loadCache() async {
    // Directory tempDir = await getTemporaryDirectory();
    //   double value = await _getTotalSizeOfFilesInDir(tempDir);
    //   /*tempDir.list(followLinks: false,recursive: true).listen((file){
    //       //打印每个缓存文件的路径
    //     print(file.path);
    //   });*/
    //   print('临时目录大小: ' + value.toString());

    // 1.获取ImageCache 缓存对象
    ImageCache imageCache = PaintingBinding.instance.imageCache;
    // // 2.设置缓存图片的个数（根据情况自己设置，default = 1000）
    //   imageCache.maximumSize = 1000;
    // // 3.获取缓存图片个数
    // int num = imageCache.currentSize;
    // // 4.设置缓存大小（根据情况自己设置，default = 50M）
    // imageCache.maximumSizeBytes=50<<20;
    // // 5.获取图片缓存大小(单位是byte,需自行转换到 M)
    int byte =imageCache.currentSizeBytes;

      setState(() {
        _cacheSizeStr = _renderSize(byte.toDouble());  // _cacheSizeStr用来存储大小的值
      });
      // return "${_renderSize(value)}";
  }

  //  Future<double> _getTotalSizeOfFilesInDir(final FileSystemEntity file) async {
  // //   if (file is File) {
  // //        int length = await file.length();
  // //        return double.parse(length.toString());
  // //   }
  // //  if (file is Directory) {
  // //        final List<FileSystemEntity> children = file.listSync();
  // //        double total = 0;
  // //        if (children != null)
  // //             for (final FileSystemEntity child in children)
  // //               total += await _getTotalSizeOfFilesInDir(child);
  // //        return total;
  // //     }
  //     return 0;
  // }

_renderSize(double value) {
    if (null == value) {
      return 0;
    }
    List<String> unitArr = List()
      ..add('B')
      ..add('K')
      ..add('M')
      ..add('G');
    int index = 0;
    while (value > 1024) {
      index++;
      value = value / 1024;
    }
    String size = value.toStringAsFixed(2);
    return size + unitArr[index];
  }

  void _clearCache(BuildContext c) async {
      // LoadingPage l = LoadingPage(c);
      // l.show();
      // Directory tempDir = await getTemporaryDirectory();
      // //删除缓存目录
      // await delDir(tempDir);
      ImageCache imageCache = PaintingBinding.instance.imageCache;
      imageCache.clear();
       setState(() {
        _cacheSizeStr = "0MB";  // _cacheSizeStr用来存储大小的值
      });
      ToastHelper.showToast(context, "清除成功");

      // Fluttertoast.showToast(
      //     msg: "清除成功",
      //     toastLength: Toast.LENGTH_SHORT,
      //     gravity: ToastGravity.CENTER,
      //     timeInSecForIos: 1,
      //     backgroundColor: SQColor.primary,
      //     textColor: Colors.white,
      //     fontSize: 16.0
      // );
      // loadCache();
      // l.close();
      // setState(() {
        
      // });
  }
  ///递归方式删除目录
  // Future<Null> delDir(FileSystemEntity file) async {
  //   if (file is Directory) {
  //           final List<FileSystemEntity> children = file.listSync();
  //           for (final FileSystemEntity child in children) {
  //             await delDir(child);
  //           }
  //         }
  //     await file.delete();
  // }


}