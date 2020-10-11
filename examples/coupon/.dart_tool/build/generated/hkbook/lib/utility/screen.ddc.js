define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const ui = packages__flutter_web_ui__ui.ui;
  const system_chrome = packages__flutter_web__src__animation__animation.src__services__system_chrome;
  const screen = Object.create(dart.library);
  const CT = Object.create(null);
  screen.Screen = class Screen extends core.Object {
    static get width() {
      let mediaQuery = new media_query.MediaQueryData.fromWindow(ui.window);
      return mediaQuery.size.width;
    }
    static get height() {
      let mediaQuery = new media_query.MediaQueryData.fromWindow(ui.window);
      return mediaQuery.size.height;
    }
    static get scale() {
      let mediaQuery = new media_query.MediaQueryData.fromWindow(ui.window);
      return mediaQuery.devicePixelRatio;
    }
    static get textScaleFactor() {
      let mediaQuery = new media_query.MediaQueryData.fromWindow(ui.window);
      return mediaQuery.textScaleFactor;
    }
    static get navigationBarHeight() {
      let mediaQuery = new media_query.MediaQueryData.fromWindow(ui.window);
      return dart.notNull(mediaQuery.padding.top) + 56;
    }
    static get topSafeHeight() {
      let mediaQuery = new media_query.MediaQueryData.fromWindow(ui.window);
      return mediaQuery.padding.top;
    }
    static get bottomSafeHeight() {
      let mediaQuery = new media_query.MediaQueryData.fromWindow(ui.window);
      return mediaQuery.padding.bottom;
    }
    static updateStatusBarStyle(style) {
      system_chrome.SystemChrome.setSystemUIOverlayStyle(style);
    }
  };
  (screen.Screen.new = function() {
    ;
  }).prototype = screen.Screen.prototype;
  dart.addTypeTests(screen.Screen);
  dart.setLibraryUri(screen.Screen, "package:hkbook/utility/screen.dart");
  dart.trackLibraries("packages/hkbook/utility/screen", {
    "package:hkbook/utility/screen.dart": screen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["screen.dart"],"names":[],"mappings":";;;;;;;;;;;;AAMmB,uBAA4B,0CAAc;AACzD,YAAO,AAAW,AAAK,WAAN;IACnB;;AAGiB,uBAA4B,0CAAc;AACzD,YAAO,AAAW,AAAK,WAAN;IACnB;;AAGiB,uBAA4B,0CAAc;AACzD,YAAO,AAAW,WAAD;IACnB;;AAGiB,uBAA4B,0CAAc;AACzD,YAAO,AAAW,WAAD;IACnB;;AAGiB,uBAA4B,0CAAc;AACzD,YAA8B,cAAvB,AAAW,AAAQ,UAAT;IACnB;;AAGiB,uBAA4B,0CAAc;AACzD,YAAO,AAAW,AAAQ,WAAT;IACnB;;AAGiB,uBAA4B,0CAAc;AACzD,YAAO,AAAW,AAAQ,WAAT;IACnB;gCAEiD;AACJ,MAA9B,mDAAwB,KAAK;IAC5C;;;;EACF","file":"screen.ddc.js"}');
  // Exports:
  return {
    utility__screen: screen
  };
});

//# sourceMappingURL=screen.ddc.js.map
