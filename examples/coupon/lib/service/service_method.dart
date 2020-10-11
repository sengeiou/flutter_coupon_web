import 'dart:convert';
import 'package:convert/convert.dart';
import 'package:crypto/crypto.dart';
import 'package:hkbook/ThridLib/dio-3.0.8/lib/dio.dart';
// import 'package:dio/dio.dart';
import 'package:flutter_web/material.dart';
// import 'package:fluttertoast/fluttertoast.dart';
import 'package:hkbook/app/sq_color.dart';
import 'package:hkbook/public.dart';
import 'package:hkbook/service/api.dart';
import 'dart:async';

import 'package:hkbook/service/service_url.dart';
import 'package:hkbook/widget/toast.dart';
import 'package:intl/intl.dart';

import 'interceptors/errorInterceptors.dart';
import 'interceptors/headerInterceptors.dart';
import 'interceptors/logInterceptors.dart';
import 'interceptors/responseInterceptors.dart';




const httpHeaders = {
    'Accept':"application/json, */*",
    "clientversion":"100.0.0",
    "content-type": "application/json",
    // "Access-Control-Allow-Origin": '*',
    // 'Access-Control-Allow-Credentials': true
};

String createSign(formdata){
  var sign = TAOKAO_APPSECRET;
  var sortedKeys = formdata.keys.toList()..sort();
  sortedKeys.forEach((String key){
    var value = formdata[key];
    if (value.isEmpty == false) {
        sign = sign + key + value;
    }
  });
  sign = sign + TAOKAO_APPSECRET;
  // print(sign);
  return generateMd5(sign);
}

String generateMd5(String data) {
  var content = new Utf8Encoder().convert(data);
  var digest = md5.convert(content);
  var h = hex.encode(digest.bytes).toUpperCase();
  // print("加密:"+h);
  return h;
}

String getTime() {
  DateTime date = DateTime.now();
  var format = new DateFormat('yyyy-MM-dd HH:mm:ss');
  return format.format(date);
}


Future request(url,formdata) async{
    try{
    Response response;
    Dio dio = new Dio();
    dio.interceptors.add(new HeaderInterceptors());
    dio.interceptors.add(new LogsInterceptors());
    // dio.interceptors.add(new ErrorInterceptors(dio));
    // dio.interceptors.add(new ResponseInterceptors());
    dio.options.headers = httpHeaders;
    var p = formdata;
    var s =  createSign(formdata);
    p['sign'] = s;
    // print(servicePath[url]);
    // print(p);
    // response.headers.add('Access-Control-Allow-Origin', 'http://127.0.0.1:8080/#/');
    response = await dio.get(servicePath[url],queryParameters: p);
    // response = await dio.get(servicePath[url],formdata);
    return  response;  
  }catch(e){
    // ToastHelper.showToast(context, "网络错误,点击重新加载");

    // // Fluttertoast.showToast(
    // //       msg: "网络错误,点击重新加载",
    // //       toastLength: Toast.LENGTH_SHORT,
    // //       gravity: ToastGravity.CENTER,
    // //       timeInSecForIos: 1,
    // //       backgroundColor: SQColor.primary,
    // //       textColor: Colors.white,
    // //       fontSize: 16.0
    // // );
    return null;
  }
}

Future normalRequest(url,formdata) async{
  try{
    Response response;
    Dio dio = new Dio();
    dio.interceptors.add(new HeaderInterceptors());
    dio.interceptors.add(new LogsInterceptors());
    // dio.interceptors.add(new ErrorInterceptors(dio));
    // dio.interceptors.add(new ResponseInterceptors());
    dio.options.headers = httpHeaders;
    // response.headers.add('Access-Control-Allow-Origin', 'http://127.0.0.1:8080/#/');
    response = await dio.get(url,queryParameters: formdata);
    return  response;  
  }catch(e){
    // ToastHelper.showToast(context, "网络错误,点击重新加载");

    // Fluttertoast.showToast(
    //       msg: "网络错误,点击重新加载",
    //       toastLength: Toast.LENGTH_SHORT,
    //       gravity: ToastGravity.CENTER,
    //       timeInSecForIos: 1,
    //       backgroundColor: SQColor.primary,
    //       textColor: Colors.white,
    //       fontSize: 16.0
    // );
    return null;
  }

  
}

// class AppDao {
//   static getRepositoryReleaseDao(userName, reposName, page, {needHtml = true, release = true}) async {
//     String url = release
//         ? Address.getReposRelease(userName, reposName) + Address.getPageParams("?", page)
//         : Address.getReposTag(userName, reposName) + Address.getPageParams("?", page);

//     var res = await httpManager.netFetch(url, null,
//         {"Accept": (needHtml ? 'application/vnd.github.html,application/vnd.github.VERSION.raw' : "")}, null);
//     if (res != null && res.result && res.data.length > 0) {
//       List<Release> list = new List();
//       var dataList = res.data;
//       if (dataList == null || dataList.length == 0) {
//         return new DataResult(null, false);
//       }
//       for (int i = 0; i < dataList.length; i++) {
//         var data = dataList[i];
//         list.add(Release.fromJson(data));
//       }
//       return new DataResult(list, true);
//     } else {
//       return new DataResult(null, false);
//     }
//   }
// }