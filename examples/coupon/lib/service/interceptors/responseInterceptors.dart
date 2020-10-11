import 'package:hkbook/ThridLib/dio-3.0.8/lib/dio.dart';

import '../result_data.dart';

/**
 * Token拦截器
 */
class ResponseInterceptors extends InterceptorsWrapper {

  @override
  onResponse(Response response) async{
    RequestOptions option = response.request;
    try {
      if (option.contentType != null) {
        // return new ResultData(response.data, true, Code.SUCCESS);
        return new ResultData(response, true, Code.SUCCESS);
      }
      if (response.statusCode == 200 || response.statusCode == 201) {
        // return new ResultData(response.data, true, Code.SUCCESS, headers: response.headers);
          return new ResultData(response, true, Code.SUCCESS ,headers: response.headers);
      }
    } catch (e) {
      print(e.toString() + option.path);
      // return new ResultData(response.data, false, response.statusCode, headers: response.headers);
      return new ResultData(response, false, response.statusCode, headers: response.headers);
    }
  }
}