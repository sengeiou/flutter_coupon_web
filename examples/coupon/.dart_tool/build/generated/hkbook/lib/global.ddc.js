define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const global = Object.create(dart.library);
  const CT = Object.create(null);
  global.Config = class Config extends core.Object {};
  (global.Config.new = function() {
    ;
  }).prototype = global.Config.prototype;
  dart.addTypeTests(global.Config);
  dart.setLibraryUri(global.Config, "package:hkbook/global.dart");
  dart.defineLazy(global.Config, {
    /*global.Config.DEBUG*/get DEBUG() {
      return false;
    }
  });
  dart.defineLazy(global, {
    /*global.preferences*/get preferences() {
      return null;
    },
    set preferences(_) {},
    /*global.TAOKAO_APPKEY*/get TAOKAO_APPKEY() {
      return "27675850";
    },
    /*global.TAOKAO_APPSECRET*/get TAOKAO_APPSECRET() {
      return "e11b2004e8dca70283f3e9d64776cfe1";
    },
    /*global.TAOKAO_ADZONEID*/get TAOKAO_ADZONEID() {
      return "109164900192";
    },
    /*global.TAOKAO_PID*/get TAOKAO_PID() {
      return "mm_44147704_597500233_109164900192";
    },
    /*global.APPID*/get APPID() {
      return "1480384659";
    },
    /*global.YSURL*/get YSURL() {
      return "https://136951866.github.io/coupon/";
    }
  });
  dart.trackLibraries("packages/hkbook/global", {
    "package:hkbook/global.dart": global
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["global.dart"],"names":[],"mappings":";;;;;;;;;;EA6BA;;;;MADe,mBAAK;;;;;MAxBF,kBAAW;;;;MAEvB,oBAAa;;;MACb,uBAAgB;;;MAChB,sBAAe;;;MACf,iBAAU;;;MACV,YAAK;;;MAML,YAAK","file":"global.ddc.js"}');
  // Exports:
  return {
    global: global
  };
});

//# sourceMappingURL=global.ddc.js.map
