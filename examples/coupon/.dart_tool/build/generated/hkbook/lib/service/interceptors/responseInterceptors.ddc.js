define(['dart_sdk', 'packages/hkbook/service/result_data', 'packages/hkbook/ThridLib/dio-3.0.8/lib/src/interceptor'], function(dart_sdk, packages__hkbook__service__result_data, packages__hkbook__ThridLib__dio_3$460$468__lib__src__interceptor) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const result_data = packages__hkbook__service__result_data.service__result_data;
  const interceptor = packages__hkbook__ThridLib__dio_3$460$468__lib__src__interceptor.ThridLib__dio_3$460$468__lib__src__interceptor;
  const responseInterceptors = Object.create(dart.library);
  const $toString = dartx.toString;
  const CT = Object.create(null);
  responseInterceptors.ResponseInterceptors = class ResponseInterceptors extends interceptor.InterceptorsWrapper {
    onResponse(response) {
      return async.async(dart.dynamic, function* onResponse() {
        let option = response.request;
        try {
          if (option.contentType != null) {
            return new result_data.ResultData.new(response, true, 200);
          }
          if (response.statusCode === 200 || response.statusCode === 201) {
            return new result_data.ResultData.new(response, true, 200, {headers: response.headers});
          }
        } catch (e$) {
          let e = dart.getThrown(e$);
          core.print(dart.notNull(dart.toString(e)) + dart.notNull(option.path));
          return new result_data.ResultData.new(response, false, response.statusCode, {headers: response.headers});
        }
      });
    }
  };
  (responseInterceptors.ResponseInterceptors.new = function() {
    responseInterceptors.ResponseInterceptors.__proto__.new.call(this);
    ;
  }).prototype = responseInterceptors.ResponseInterceptors.prototype;
  dart.addTypeTests(responseInterceptors.ResponseInterceptors);
  dart.setLibraryUri(responseInterceptors.ResponseInterceptors, "package:hkbook/service/interceptors/responseInterceptors.dart");
  dart.trackLibraries("packages/hkbook/service/interceptors/responseInterceptors", {
    "package:hkbook/service/interceptors/responseInterceptors.dart": responseInterceptors
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["responseInterceptors.dart"],"names":[],"mappings":";;;;;;;;;;;;eAUsB;AAAV;AACO,qBAAS,AAAS,QAAD;AAChC;AACE,cAAI,AAAO,MAAD,gBAAgB;AAExB,kBAAW,gCAAW,QAAQ,EAAE;;AAElC,cAAI,AAAS,AAAW,QAAZ,gBAAe,OAAO,AAAS,AAAW,QAAZ,gBAAe;AAErD,kBAAW,gCAAW,QAAQ,EAAE,qBAA6B,AAAS,QAAD;;;cAElE;AAC0B,UAAjC,WAAmB,aAAX,cAAF,CAAC,kBAAc,AAAO,MAAD;AAE3B,gBAAW,gCAAW,QAAQ,EAAE,OAAO,AAAS,QAAD,uBAAsB,AAAS,QAAD;;MAEjF;;;;;;EACF","file":"responseInterceptors.ddc.js"}');
  // Exports:
  return {
    service__interceptors__responseInterceptors: responseInterceptors
  };
});

//# sourceMappingURL=responseInterceptors.ddc.js.map
