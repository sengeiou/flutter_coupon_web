define(['dart_sdk', 'packages/hkbook/ThridLib/plugin_platform_interface-1.0.2/lib/plugin_platform_interface', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__hkbook__ThridLib__plugin_platform_interface_1$460$462__lib__plugin_platform_interface, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const plugin_platform_interface = packages__hkbook__ThridLib__plugin_platform_interface_1$460$462__lib__plugin_platform_interface.ThridLib__plugin_platform_interface_1$460$462__lib__plugin_platform_interface;
  const platform_channel = packages__flutter_web__src__animation__animation.src__services__platform_channel;
  const message_codecs = packages__flutter_web__src__animation__animation.src__services__message_codecs;
  const url_launcher_platform_interface = Object.create(dart.library);
  const method_channel_url_launcher = Object.create(dart.library);
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C2 || CT.C2
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "plugins.flutter.io/url_launcher"
      });
    }
  });
  url_launcher_platform_interface.UrlLauncherPlatform = class UrlLauncherPlatform extends plugin_platform_interface.PlatformInterface {
    static get instance() {
      return url_launcher_platform_interface.UrlLauncherPlatform._instance;
    }
    static set instance(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, url_launcher_platform_interface.UrlLauncherPlatform._token);
      url_launcher_platform_interface.UrlLauncherPlatform._instance = instance;
    }
    canLaunch(url) {
      dart.throw(new core.UnimplementedError.new("canLaunch() has not been implemented."));
    }
    launch(url, opts) {
      let useSafariVC = opts && 'useSafariVC' in opts ? opts.useSafariVC : null;
      let useWebView = opts && 'useWebView' in opts ? opts.useWebView : null;
      let enableJavaScript = opts && 'enableJavaScript' in opts ? opts.enableJavaScript : null;
      let enableDomStorage = opts && 'enableDomStorage' in opts ? opts.enableDomStorage : null;
      let universalLinksOnly = opts && 'universalLinksOnly' in opts ? opts.universalLinksOnly : null;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      dart.throw(new core.UnimplementedError.new("launch() has not been implemented."));
    }
    closeWebView() {
      dart.throw(new core.UnimplementedError.new("closeWebView() has not been implemented."));
    }
  };
  (url_launcher_platform_interface.UrlLauncherPlatform.new = function() {
    url_launcher_platform_interface.UrlLauncherPlatform.__proto__.new.call(this, {token: url_launcher_platform_interface.UrlLauncherPlatform._token});
    ;
  }).prototype = url_launcher_platform_interface.UrlLauncherPlatform.prototype;
  dart.addTypeTests(url_launcher_platform_interface.UrlLauncherPlatform);
  dart.setMethodSignature(url_launcher_platform_interface.UrlLauncherPlatform, () => ({
    __proto__: dart.getMethods(url_launcher_platform_interface.UrlLauncherPlatform.__proto__),
    canLaunch: dart.fnType(async.Future$(core.bool), [core.String]),
    launch: dart.fnType(async.Future$(core.bool), [core.String], {enableDomStorage: core.bool, enableJavaScript: core.bool, headers: core.Map$(core.String, core.String), universalLinksOnly: core.bool, useSafariVC: core.bool, useWebView: core.bool}, {}),
    closeWebView: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setLibraryUri(url_launcher_platform_interface.UrlLauncherPlatform, "package:hkbook/ThridLib/url_launcher_platform_interface-1.0.6/lib/url_launcher_platform_interface.dart");
  dart.defineLazy(url_launcher_platform_interface.UrlLauncherPlatform, {
    /*url_launcher_platform_interface.UrlLauncherPlatform._token*/get _token() {
      return new core.Object.new();
    },
    /*url_launcher_platform_interface.UrlLauncherPlatform._instance*/get _instance() {
      return new method_channel_url_launcher.MethodChannelUrlLauncher.new();
    },
    set _instance(_) {}
  });
  method_channel_url_launcher.MethodChannelUrlLauncher = class MethodChannelUrlLauncher extends url_launcher_platform_interface.UrlLauncherPlatform {
    canLaunch(url) {
      return method_channel_url_launcher._channel.invokeMethod(core.bool, "canLaunch", new (IdentityMapOfString$Object()).from(["url", url]));
    }
    closeWebView() {
      return method_channel_url_launcher._channel.invokeMethod(dart.void, "closeWebView");
    }
    launch(url, opts) {
      let useSafariVC = opts && 'useSafariVC' in opts ? opts.useSafariVC : null;
      let useWebView = opts && 'useWebView' in opts ? opts.useWebView : null;
      let enableJavaScript = opts && 'enableJavaScript' in opts ? opts.enableJavaScript : null;
      let enableDomStorage = opts && 'enableDomStorage' in opts ? opts.enableDomStorage : null;
      let universalLinksOnly = opts && 'universalLinksOnly' in opts ? opts.universalLinksOnly : null;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return method_channel_url_launcher._channel.invokeMethod(core.bool, "launch", new (IdentityMapOfString$Object()).from(["url", url, "useSafariVC", useSafariVC, "useWebView", useWebView, "enableJavaScript", enableJavaScript, "enableDomStorage", enableDomStorage, "universalLinksOnly", universalLinksOnly, "headers", headers]));
    }
  };
  (method_channel_url_launcher.MethodChannelUrlLauncher.new = function() {
    method_channel_url_launcher.MethodChannelUrlLauncher.__proto__.new.call(this);
    ;
  }).prototype = method_channel_url_launcher.MethodChannelUrlLauncher.prototype;
  dart.addTypeTests(method_channel_url_launcher.MethodChannelUrlLauncher);
  dart.setLibraryUri(method_channel_url_launcher.MethodChannelUrlLauncher, "package:hkbook/ThridLib/url_launcher_platform_interface-1.0.6/lib/method_channel_url_launcher.dart");
  let C2;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C1;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C0;
  dart.defineLazy(method_channel_url_launcher, {
    /*method_channel_url_launcher._channel*/get _channel() {
      return C0 || CT.C0;
    }
  });
  dart.trackLibraries("packages/hkbook/ThridLib/url_launcher_platform_interface-1.0.6/lib/method_channel_url_launcher", {
    "package:hkbook/ThridLib/url_launcher_platform_interface-1.0.6/lib/url_launcher_platform_interface.dart": url_launcher_platform_interface,
    "package:hkbook/ThridLib/url_launcher_platform_interface-1.0.6/lib/method_channel_url_launcher.dart": method_channel_url_launcher
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["url_launcher_platform_interface.dart","method_channel_url_launcher.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6B6C;IAAS;wBAMZ;AACS,MAA7B,wDAAY,QAAQ,EAAE;AACpB,MAApB,gEAAY,QAAQ;IACtB;cAG8B;AACqC,MAAjE,WAAM,gCAAmB;IAC3B;WAOS;UACQ;UACA;UACA;UACA;UACA;UACe;AAEgC,MAA9D,WAAM,gCAAmB;IAC3B;;AAIsE,MAApE,WAAM,gCAAmB;IAC3B;;;AA5CwB,yFAAa;;EAAO;;;;;;;;;;MAExB,0DAAM;YAAG;;MAEF,6DAAS;YAAG;;;;;cCRT;AAC5B,YAAO,AAAS,8DACd,aACgB,yCAAC,OAAO,GAAG;IAE/B;;AAIE,YAAO,AAAS,8DAAmB;IACrC;WAIS;UACQ;UACA;UACA;UACA;UACA;UACe;AAE9B,YAAO,AAAS,8DACd,UACgB,yCACd,OAAO,GAAG,EACV,eAAe,WAAW,EAC1B,cAAc,UAAU,EACxB,oBAAoB,gBAAgB,EACpC,oBAAoB,gBAAgB,EACpC,sBAAsB,kBAAkB,EACxC,WAAW,OAAO;IAGxB;;;;;EACF;;;;;;;;;;MAxCoB,oCAAQ","file":"method_channel_url_launcher.ddc.js"}');
  // Exports:
  return {
    ThridLib__url_launcher_platform_interface_1$460$466__lib__url_launcher_platform_interface: url_launcher_platform_interface,
    ThridLib__url_launcher_platform_interface_1$460$466__lib__method_channel_url_launcher: method_channel_url_launcher
  };
});

//# sourceMappingURL=method_channel_url_launcher.ddc.js.map
