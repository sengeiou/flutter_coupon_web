define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const javascript_message = Object.create(dart.library);
  const CT = Object.create(null);
  const message$ = dart.privateName(javascript_message, "JavascriptMessage.message");
  javascript_message.JavascriptMessage = class JavascriptMessage extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
  };
  (javascript_message.JavascriptMessage.new = function(message) {
    this[message$] = message;
    if (!(message != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/javascript_message.dart", 7, 50, "message != null");
    ;
  }).prototype = javascript_message.JavascriptMessage.prototype;
  dart.addTypeTests(javascript_message.JavascriptMessage);
  dart.setLibraryUri(javascript_message.JavascriptMessage, "package:hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/javascript_message.dart");
  dart.setFieldSignature(javascript_message.JavascriptMessage, () => ({
    __proto__: dart.getFields(javascript_message.JavascriptMessage.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/javascript_message", {
    "package:hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/javascript_message.dart": javascript_message
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["javascript_message.dart"],"names":[],"mappings":";;;;;;;;;IASe;;;;;;;;IAHgB;UAAkB,AAAQ,OAAD,IAAI;;EAAK","file":"javascript_message.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_webview_plugin_0$463$4610$431__lib__src__javascript_message: javascript_message
  };
});

//# sourceMappingURL=javascript_message.ddc.js.map
