import 'dart:developer';

import 'package:flutter_web/material.dart';
// import 'dart:io';
import 'package:flutter_web/services.dart';

import 'package:hkbook/app/app_scene.dart';
import 'package:hkbook/app/root_scene.dart';
import 'package:hkbook/provide/category.dart';
import 'package:hkbook/provide/current_index.dart';
import 'package:hkbook/provide/search_history.dart';

import 'ThridLib/provide-1.0.2/lib/provide.dart';


void main(){
  var providers = Providers();
  var currentIndexProvice = CurrentIndexProvice();
  var historyProvice = HistoryProvide();
  var childCategory = ChildCategory();

  providers
  ..provide(Provider<CurrentIndexProvice>.value(currentIndexProvice))
  ..provide(Provider<HistoryProvide>.value(historyProvice))
  ..provide(Provider<ChildCategory>.value(childCategory))
  ;

  // runApp(Container(
  //   color: Colors.red,
  // ));

  runApp(
    ProviderNode(
      child:AppScene(),
      providers: providers,
    )
  );

  // if (Platform.isAndroid) {
  //   SystemUiOverlayStyle systemUiOverlayStyle = SystemUiOverlayStyle(statusBarColor: Colors.transparent);
  //   SystemChrome.setSystemUIOverlayStyle(systemUiOverlayStyle);
  // }
}


