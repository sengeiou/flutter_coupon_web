define(['dart_sdk', 'packages/hkbook/ThridLib/dio-3.0.8/lib/src/interceptor'], function(dart_sdk, packages__hkbook__ThridLib__dio_3$460$468__lib__src__interceptor) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const interceptor = packages__hkbook__ThridLib__dio_3$460$468__lib__src__interceptor.ThridLib__dio_3$460$468__lib__src__interceptor;
  const headerInterceptors = Object.create(dart.library);
  const CT = Object.create(null);
  headerInterceptors.HeaderInterceptors = class HeaderInterceptors extends interceptor.InterceptorsWrapper {
    onRequest(options) {
      return async.async(dart.dynamic, function* onRequest() {
        options.connectTimeout = 15000;
        return options;
      });
    }
  };
  (headerInterceptors.HeaderInterceptors.new = function() {
    headerInterceptors.HeaderInterceptors.__proto__.new.call(this);
    ;
  }).prototype = headerInterceptors.HeaderInterceptors.prototype;
  dart.addTypeTests(headerInterceptors.HeaderInterceptors);
  dart.setLibraryUri(headerInterceptors.HeaderInterceptors, "package:hkbook/service/interceptors/headerInterceptors.dart");
  dart.trackLibraries("packages/hkbook/service/interceptors/headerInterceptors", {
    "package:hkbook/service/interceptors/headerInterceptors.dart": headerInterceptors
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["headerInterceptors.dart"],"names":[],"mappings":";;;;;;;;;;cAW2B;AAAhB;AAEuB,QAA9B,AAAQ,OAAD,kBAAkB;AAEzB,cAAO,QAAO;MAChB;;;;;;EACF","file":"headerInterceptors.ddc.js"}');
  // Exports:
  return {
    service__interceptors__headerInterceptors: headerInterceptors
  };
});

//# sourceMappingURL=headerInterceptors.ddc.js.map
