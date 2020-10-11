define(['dart_sdk', 'packages/hkbook/ThridLib/connectivity-0.4.6+2/lib/connectivity', 'packages/hkbook/ThridLib/dio-3.0.8/lib/src/interceptor', 'packages/hkbook/ThridLib/dio-3.0.8/lib/src/dio'], function(dart_sdk, packages__hkbook__ThridLib__connectivity_0$464$466$432__lib__connectivity, packages__hkbook__ThridLib__dio_3$460$468__lib__src__interceptor, packages__hkbook__ThridLib__dio_3$460$468__lib__src__dio) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const connectivity = packages__hkbook__ThridLib__connectivity_0$464$466$432__lib__connectivity.ThridLib__connectivity_0$464$466$432__lib__connectivity;
  const interceptor = packages__hkbook__ThridLib__dio_3$460$468__lib__src__interceptor.ThridLib__dio_3$460$468__lib__src__interceptor;
  const dio = packages__hkbook__ThridLib__dio_3$460$468__lib__src__dio.ThridLib__dio_3$460$468__lib__src__dio;
  const errorInterceptors = Object.create(dart.library);
  const CT = Object.create(null);
  const _dio$ = dart.privateName(errorInterceptors, "_dio");
  errorInterceptors.ErrorInterceptors = class ErrorInterceptors extends interceptor.InterceptorsWrapper {
    onRequest(options) {
      return async.async(dart.dynamic, (function* onRequest() {
        let connectivityResult = (yield connectivity.Connectivity.new().checkConnectivity());
        if (dart.equals(connectivityResult, connectivity.ConnectivityResult.none)) {
          return this[_dio$].resolve(dart.dynamic, null);
        }
        return options;
      }).bind(this));
    }
  };
  (errorInterceptors.ErrorInterceptors.new = function(_dio) {
    this[_dio$] = _dio;
    errorInterceptors.ErrorInterceptors.__proto__.new.call(this);
    ;
  }).prototype = errorInterceptors.ErrorInterceptors.prototype;
  dart.addTypeTests(errorInterceptors.ErrorInterceptors);
  dart.setLibraryUri(errorInterceptors.ErrorInterceptors, "package:hkbook/service/interceptors/errorInterceptors.dart");
  dart.setFieldSignature(errorInterceptors.ErrorInterceptors, () => ({
    __proto__: dart.getFields(errorInterceptors.ErrorInterceptors.__proto__),
    [_dio$]: dart.finalFieldType(dio.Dio)
  }));
  dart.defineLazy(errorInterceptors, {
    /*errorInterceptors.NOT_TIP_KEY*/get NOT_TIP_KEY() {
      return "noTip";
    }
  });
  dart.trackLibraries("packages/hkbook/service/interceptors/errorInterceptors", {
    "package:hkbook/service/interceptors/errorInterceptors.dart": errorInterceptors
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["errorInterceptors.dart"],"names":[],"mappings":";;;;;;;;;;;;;cAoB2B;AAAhB;AAEH,kCAAqB,MAAW,AAAe;AACnD,YAAuB,YAAnB,kBAAkB,EAAuB;AAC1C,gBAAO,AAAK,mCAAQ;;AAGvB,cAAO,QAAO;MAChB;;;;IAXuB;AAAvB;;EAA4B;;;;;;;;MARxB,6BAAW","file":"errorInterceptors.ddc.js"}');
  // Exports:
  return {
    service__interceptors__errorInterceptors: errorInterceptors
  };
});

//# sourceMappingURL=errorInterceptors.ddc.js.map
