import 'package:flutter_web/material.dart';
import 'package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/flutter_spinkit.dart';
import 'package:hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/flutter_webview_plugin.dart';
// import 'package:flutter_spinkit/flutter_spinkit.dart';
// import 'package:flutter_webview_plugin/flutter_webview_plugin.dart';

class Browser extends StatelessWidget {
  Browser({this.url, this.title});

  final String url;
  final String title;

  @override
  Widget build(BuildContext context) {
    print(url);
    return  Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body:WebviewScaffold(
      url: url,
      withZoom: true,
      withLocalStorage: true,
      hidden: true,
      initialChild: Container(
        color: Colors.white,
        child: const SpinKitFadingCircle(color: Colors.grey),
      ),
    )
    );
  }
}