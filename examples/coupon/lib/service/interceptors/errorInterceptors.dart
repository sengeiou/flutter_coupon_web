// import 'package:connectivity/connectivity.dart';
// import 'package:dio/dio.dart';

import 'package:hkbook/ThridLib/connectivity-0.4.6+2/lib/connectivity.dart';
import 'package:hkbook/ThridLib/dio-3.0.8/lib/dio.dart';

import '../result_data.dart';

///是否需要弹提示
const NOT_TIP_KEY = "noTip";

/**
 * 错误拦截
 */
class ErrorInterceptors extends InterceptorsWrapper {
  final Dio _dio;

  ErrorInterceptors(this._dio);

  @override
  onRequest(RequestOptions options) async {
    //没有网络
    var connectivityResult = await (new Connectivity().checkConnectivity());
    if (connectivityResult == ConnectivityResult.none) {
       return _dio.resolve(null);
      // return _dio.resolve(new ResultData(Code.errorHandleFunction(Code.NETWORK_ERROR, "", false), false, Code.NETWORK_ERROR));
    }
    return options;
  }
}
