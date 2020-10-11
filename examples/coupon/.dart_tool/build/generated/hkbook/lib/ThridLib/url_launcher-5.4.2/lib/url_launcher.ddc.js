define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/hkbook/ThridLib/url_launcher_platform_interface-1.0.6/lib/method_channel_url_launcher'], function(dart_sdk, packages__flutter_web__src__animation__animation, packages__flutter_web__src__foundation__assertions, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__hkbook__ThridLib__url_launcher_platform_interface_1$460$466__lib__method_channel_url_launcher) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const message_codec = packages__flutter_web__src__animation__animation.src__services__message_codec;
  const system_chrome = packages__flutter_web__src__animation__animation.src__services__system_chrome;
  const platform = packages__flutter_web__src__foundation__assertions.src__foundation__platform;
  const binding = packages__flutter_web__animation.src__widgets__binding;
  const ui = packages__flutter_web_ui__ui.ui;
  const url_launcher_platform_interface = packages__hkbook__ThridLib__url_launcher_platform_interface_1$460$466__lib__method_channel_url_launcher.ThridLib__url_launcher_platform_interface_1$460$466__lib__url_launcher_platform_interface;
  const url_launcher = Object.create(dart.library);
  const $trimLeft = dartx.trimLeft;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  const CT = Object.create(null);
  url_launcher.launch = function launch(urlString, opts) {
    let forceSafariVC = opts && 'forceSafariVC' in opts ? opts.forceSafariVC : null;
    let forceWebView = opts && 'forceWebView' in opts ? opts.forceWebView : null;
    let enableJavaScript = opts && 'enableJavaScript' in opts ? opts.enableJavaScript : null;
    let enableDomStorage = opts && 'enableDomStorage' in opts ? opts.enableDomStorage : null;
    let universalLinksOnly = opts && 'universalLinksOnly' in opts ? opts.universalLinksOnly : null;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
    return async.async(core.bool, function* launch() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      if (!(urlString != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/url_launcher-5.4.2/lib/url_launcher.dart", 68, 10, "urlString != null");
      let url = core.Uri.parse(urlString[$trimLeft]());
      let isWebURL = url.scheme === "http" || url.scheme === "https";
      if ((dart.equals(forceSafariVC, true) || dart.equals(forceWebView, true)) && !isWebURL) {
        dart.throw(new message_codec.PlatformException.new({code: "NOT_A_WEB_SCHEME", message: "To use webview or safariVC, you need to pass" + "in a web URL. This " + dart.str(urlString) + " is not a web URL."}));
      }
      let previousAutomaticSystemUiAdjustment = null;
      if (statusBarBrightness != null && dart.equals(platform.defaultTargetPlatform, platform.TargetPlatform.iOS)) {
        previousAutomaticSystemUiAdjustment = binding.WidgetsBinding.instance.renderView.automaticSystemUiAdjustment;
        binding.WidgetsBinding.instance.renderView.automaticSystemUiAdjustment = false;
        system_chrome.SystemChrome.setSystemUIOverlayStyle(dart.equals(statusBarBrightness, ui.Brightness.light) ? system_chrome.SystemUiOverlayStyle.dark : system_chrome.SystemUiOverlayStyle.light);
      }
      let result = (yield url_launcher_platform_interface.UrlLauncherPlatform.instance.launch(urlString, {useSafariVC: (t0 = forceSafariVC, t0 == null ? isWebURL : t0), useWebView: (t0$ = forceWebView, t0$ == null ? false : t0$), enableJavaScript: (t0$0 = enableJavaScript, t0$0 == null ? false : t0$0), enableDomStorage: (t0$1 = enableDomStorage, t0$1 == null ? false : t0$1), universalLinksOnly: (t0$2 = universalLinksOnly, t0$2 == null ? false : t0$2), headers: (t0$3 = headers, t0$3 == null ? new (IdentityMapOfString$String()).new() : t0$3)}));
      if (statusBarBrightness != null) {
        binding.WidgetsBinding.instance.renderView.automaticSystemUiAdjustment = previousAutomaticSystemUiAdjustment;
      }
      return result;
    });
  };
  url_launcher.canLaunch = function canLaunch(urlString) {
    return async.async(core.bool, function* canLaunch() {
      if (urlString == null) {
        return false;
      }
      return yield url_launcher_platform_interface.UrlLauncherPlatform.instance.canLaunch(urlString);
    });
  };
  url_launcher.closeWebView = function closeWebView() {
    return async.async(dart.void, function* closeWebView() {
      return yield url_launcher_platform_interface.UrlLauncherPlatform.instance.closeWebView();
    });
  };
  dart.trackLibraries("packages/hkbook/ThridLib/url_launcher-5.4.2/lib/url_launcher", {
    "package:hkbook/ThridLib/url_launcher-5.4.2/lib/url_launcher.dart": url_launcher
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["url_launcher.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;wCA0DS;QACF;QACA;QACA;QACA;QACA;QACe;QACT;AARM;;AAUjB,YAAO,AAAU,SAAD,IAAI;AACV,gBAAU,eAAM,AAAU,SAAD;AACxB,qBAAW,AAAI,AAAO,AAAU,GAAlB,YAAW,UAAU,AAAI,AAAO,GAAR,YAAW;AAC5D,WAAmB,YAAd,aAAa,EAAI,SAAqB,YAAb,YAAY,EAAI,WAAU,QAAQ;AAIJ,QAH1D,WAAM,+CACI,6BACG,iDACL,iCAAqB,SAAS;;AAEnC;AACL,UAAI,mBAAmB,IAAI,QACD,YAAtB,gCAAwC;AAEwB,QADlE,sCACmB,AAAS,AAAW;AAC+B,QAAvD,AAAS,AAAW,yEAA8B;AAGhC,QAFpB,mDAA4C,YAApB,mBAAmB,EAAe,uBAC5C,0CACA;;AAElB,oBAAS,MAA0B,AAAS,oEACrD,SAAS,iBACkB,KAAd,aAAa,QAAb,OAAiB,QAAQ,qBACb,MAAb,YAAY,SAAZ,OAAgB,iCACO,OAAjB,gBAAgB,UAAhB,OAAoB,kCACH,OAAjB,gBAAgB,UAAhB,OAAoB,oCACC,OAAnB,kBAAkB,UAAlB,OAAsB,yBACzB,OAAR,OAAO,UAAP,OAA2B;AAEtC,UAAI,mBAAmB,IAAI;AAEc,QADxB,AAAS,AAAW,yEAC/B,mCAAmC;;AAEzC,YAAO,OAAM;IACf;;8CAI8B;AAAR;AACpB,UAAI,AAAU,SAAD,IAAI;AACf,cAAO;;AAET,YAAO,OAA0B,AAAS,uEAAU,SAAS;IAC/D;;;AAayB;AACvB,YAAO,OAA0B,AAAS;IAC5C","file":"url_launcher.ddc.js"}');
  // Exports:
  return {
    ThridLib__url_launcher_5$464$462__lib__url_launcher: url_launcher
  };
});

//# sourceMappingURL=url_launcher.ddc.js.map
