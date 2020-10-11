// import 'package:dio/dio.dart';

import 'package:hkbook/ThridLib/dio-3.0.8/lib/dio.dart';

/**
 * header拦截器
 */
class HeaderInterceptors extends InterceptorsWrapper {


  @override
  onRequest(RequestOptions options) async{
    ///超时
    options.connectTimeout = 15000;

    return options;
  }
}