define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const service_url = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(core.String, core.String, ["couponList", "http://154.8.200.183/router/rest", "getTpwd", "http://154.8.200.183/router/rest", "couponSearchList", "http://154.8.200.183/router/rest"]);
    }
  });
  let C0;
  dart.defineLazy(service_url, {
    /*service_url.serviceUrl*/get serviceUrl() {
      return "http://154.8.200.183";
    },
    /*service_url.servicePath*/get servicePath() {
      return C0 || CT.C0;
    }
  });
  dart.trackLibraries("packages/hkbook/service/service_url", {
    "package:hkbook/service/service_url.dart": service_url
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["service_url.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MACM,sBAAU;;;MACV,uBAAW","file":"service_url.ddc.js"}');
  // Exports:
  return {
    service__service_url: service_url
  };
});

//# sourceMappingURL=service_url.ddc.js.map
