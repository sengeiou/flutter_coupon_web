define(['dart_sdk', 'packages/hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/javascript_message', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__hkbook__ThridLib__flutter_webview_plugin_0$463$4610$431__lib__src__javascript_message, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const javascript_message = packages__hkbook__ThridLib__flutter_webview_plugin_0$463$4610$431__lib__src__javascript_message.ThridLib__flutter_webview_plugin_0$463$4610$431__lib__src__javascript_message;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const preferred_size = packages__flutter_web__animation.src__widgets__preferred_size;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const routes = packages__flutter_web__animation.src__widgets__routes;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const object = packages__flutter_web__animation.src__rendering__object;
  const proxy_box = packages__flutter_web__animation.src__rendering__proxy_box;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const progress_indicator = packages__flutter_web__material.src__material__progress_indicator;
  const ui = packages__flutter_web_ui__ui.ui;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const platform_channel = packages__flutter_web__src__animation__animation.src__services__platform_channel;
  const message_codecs = packages__flutter_web__src__animation__animation.src__services__message_codecs;
  const message_codec = packages__flutter_web__src__animation__animation.src__services__message_codec;
  const javascript_channel = Object.create(dart.library);
  const flutter_webview_plugin = Object.create(dart.library);
  const webview_scaffold = Object.create(dart.library);
  const base = Object.create(dart.library);
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $isNotEmpty = dartx.isNotEmpty;
  const $clear = dartx.clear;
  const $toList = dartx.toList;
  const $split = dartx.split;
  const $_get = dartx._get;
  const $map = dartx.map;
  const $toSet = dartx.toSet;
  const $isEmpty = dartx.isEmpty;
  const $length = dartx.length;
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let ObjectToFutureOfNull = () => (ObjectToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [core.Object])))();
  let WebViewStateChangedToNull = () => (WebViewStateChangedToNull = dart.constFn(dart.fnType(core.Null, [base.WebViewStateChanged])))();
  let RouteTobool = () => (RouteTobool = dart.constFn(dart.fnType(core.bool, [navigator.Route])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let RectToNull = () => (RectToNull = dart.constFn(dart.fnType(core.Null, [ui.Rect])))();
  let StreamControllerOfNull = () => (StreamControllerOfNull = dart.constFn(async.StreamController$(core.Null)))();
  let StreamControllerOfString = () => (StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))();
  let StreamControllerOfWebViewStateChanged = () => (StreamControllerOfWebViewStateChanged = dart.constFn(async.StreamController$(base.WebViewStateChanged)))();
  let StreamControllerOfdouble = () => (StreamControllerOfdouble = dart.constFn(async.StreamController$(core.double)))();
  let StreamControllerOfWebViewHttpError = () => (StreamControllerOfWebViewHttpError = dart.constFn(async.StreamController$(base.WebViewHttpError)))();
  let StreamControllerOfJavascriptMessage = () => (StreamControllerOfJavascriptMessage = dart.constFn(async.StreamController$(javascript_message.JavascriptMessage)))();
  let LinkedMapOfString$JavascriptChannel = () => (LinkedMapOfString$JavascriptChannel = dart.constFn(_js_helper.LinkedMap$(core.String, javascript_channel.JavascriptChannel)))();
  let LinkedHashMapOfString$dynamic = () => (LinkedHashMapOfString$dynamic = dart.constFn(collection.LinkedHashMap$(core.String, dart.dynamic)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JavascriptChannelToNull = () => (JavascriptChannelToNull = dart.constFn(dart.fnType(core.Null, [javascript_channel.JavascriptChannel])))();
  let IdentityMapOfString$double = () => (IdentityMapOfString$double = dart.constFn(_js_helper.IdentityMap$(core.String, core.double)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let FutureOrOfString = () => (FutureOrOfString = dart.constFn(async.FutureOr$(core.String)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let _IdentityHashSetOfString = () => (_IdentityHashSetOfString = dart.constFn(collection._IdentityHashSet$(core.String)))();
  let JavascriptChannelToString = () => (JavascriptChannelToString = dart.constFn(dart.fnType(core.String, [javascript_channel.JavascriptChannel])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 250000
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: progress_indicator.CircularProgressIndicator.prototype,
        [Widget_key]: null,
        [ProgressIndicator_semanticsValue]: null,
        [ProgressIndicator_semanticsLabel]: null,
        [ProgressIndicator_valueColor]: null,
        [ProgressIndicator_backgroundColor]: null,
        [ProgressIndicator_value]: null,
        [CircularProgressIndicator_strokeWidth]: 4
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: basic.Center.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C2 || CT.C2,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C3 || CT.C3
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onRectChanged",
        [_Location_column]: 9,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/webview_scaffold.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeToAvoidBottomInset",
        [_Location_column]: 7,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "persistentFooterButtons",
        [_Location_column]: 7,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottomNavigationBar",
        [_Location_column]: 7,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/webview_scaffold.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: base.WebViewState.prototype,
        [_name$]: "WebViewState.shouldStart",
        index: 0
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: base.WebViewState.prototype,
        [_name$]: "WebViewState.startLoad",
        index: 1
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: base.WebViewState.prototype,
        [_name$]: "WebViewState.finishLoad",
        index: 2
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: base.WebViewState.prototype,
        [_name$]: "WebViewState.abortLoad",
        index: 3
      });
    },
    get C19() {
      return C19 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], base.WebViewState);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C22 || CT.C22
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel_codec]: C21 || CT.C21,
        [MethodChannel_name]: "flutter_webview_plugin"
      });
    }
  });
  const name$ = dart.privateName(javascript_channel, "JavascriptChannel.name");
  const onMessageReceived$ = dart.privateName(javascript_channel, "JavascriptChannel.onMessageReceived");
  javascript_channel.JavascriptChannel = class JavascriptChannel extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get onMessageReceived() {
      return this[onMessageReceived$];
    }
    set onMessageReceived(value) {
      super.onMessageReceived = value;
    }
  };
  (javascript_channel.JavascriptChannel.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let onMessageReceived = opts && 'onMessageReceived' in opts ? opts.onMessageReceived : null;
    this[name$] = name;
    this[onMessageReceived$] = onMessageReceived;
    if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/javascript_channel.dart", 14, 16, "name != null");
    if (!(onMessageReceived != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/javascript_channel.dart", 15, 16, "onMessageReceived != null");
    if (!dart.test(javascript_channel._validChannelNames.hasMatch(name))) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/javascript_channel.dart", 16, 16, "_validChannelNames.hasMatch(name)");
    ;
  }).prototype = javascript_channel.JavascriptChannel.prototype;
  dart.addTypeTests(javascript_channel.JavascriptChannel);
  dart.setLibraryUri(javascript_channel.JavascriptChannel, "package:hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/javascript_channel.dart");
  dart.setFieldSignature(javascript_channel.JavascriptChannel, () => ({
    __proto__: dart.getFields(javascript_channel.JavascriptChannel.__proto__),
    name: dart.finalFieldType(core.String),
    onMessageReceived: dart.finalFieldType(dart.fnType(dart.void, [javascript_message.JavascriptMessage]))
  }));
  dart.defineLazy(javascript_channel, {
    /*javascript_channel._validChannelNames*/get _validChannelNames() {
      return core.RegExp.new("^[a-zA-Z_][a-zA-Z0-9]*$");
    }
  });
  const appBar$ = dart.privateName(webview_scaffold, "WebviewScaffold.appBar");
  const url$ = dart.privateName(webview_scaffold, "WebviewScaffold.url");
  const headers$ = dart.privateName(webview_scaffold, "WebviewScaffold.headers");
  const javascriptChannels$ = dart.privateName(webview_scaffold, "WebviewScaffold.javascriptChannels");
  const withJavascript$ = dart.privateName(webview_scaffold, "WebviewScaffold.withJavascript");
  const clearCache$ = dart.privateName(webview_scaffold, "WebviewScaffold.clearCache");
  const clearCookies$ = dart.privateName(webview_scaffold, "WebviewScaffold.clearCookies");
  const mediaPlaybackRequiresUserGesture$ = dart.privateName(webview_scaffold, "WebviewScaffold.mediaPlaybackRequiresUserGesture");
  const enableAppScheme$ = dart.privateName(webview_scaffold, "WebviewScaffold.enableAppScheme");
  const userAgent$ = dart.privateName(webview_scaffold, "WebviewScaffold.userAgent");
  const primary$ = dart.privateName(webview_scaffold, "WebviewScaffold.primary");
  const persistentFooterButtons$ = dart.privateName(webview_scaffold, "WebviewScaffold.persistentFooterButtons");
  const bottomNavigationBar$ = dart.privateName(webview_scaffold, "WebviewScaffold.bottomNavigationBar");
  const withZoom$ = dart.privateName(webview_scaffold, "WebviewScaffold.withZoom");
  const displayZoomControls$ = dart.privateName(webview_scaffold, "WebviewScaffold.displayZoomControls");
  const withLocalStorage$ = dart.privateName(webview_scaffold, "WebviewScaffold.withLocalStorage");
  const withLocalUrl$ = dart.privateName(webview_scaffold, "WebviewScaffold.withLocalUrl");
  const localUrlScope$ = dart.privateName(webview_scaffold, "WebviewScaffold.localUrlScope");
  const scrollBar$ = dart.privateName(webview_scaffold, "WebviewScaffold.scrollBar");
  const supportMultipleWindows$ = dart.privateName(webview_scaffold, "WebviewScaffold.supportMultipleWindows");
  const appCacheEnabled$ = dart.privateName(webview_scaffold, "WebviewScaffold.appCacheEnabled");
  const hidden$ = dart.privateName(webview_scaffold, "WebviewScaffold.hidden");
  const initialChild$ = dart.privateName(webview_scaffold, "WebviewScaffold.initialChild");
  const allowFileURLs$ = dart.privateName(webview_scaffold, "WebviewScaffold.allowFileURLs");
  const resizeToAvoidBottomInset$ = dart.privateName(webview_scaffold, "WebviewScaffold.resizeToAvoidBottomInset");
  const invalidUrlRegex$ = dart.privateName(webview_scaffold, "WebviewScaffold.invalidUrlRegex");
  const geolocationEnabled$ = dart.privateName(webview_scaffold, "WebviewScaffold.geolocationEnabled");
  const withOverviewMode$ = dart.privateName(webview_scaffold, "WebviewScaffold.withOverviewMode");
  const useWideViewPort$ = dart.privateName(webview_scaffold, "WebviewScaffold.useWideViewPort");
  const debuggingEnabled$ = dart.privateName(webview_scaffold, "WebviewScaffold.debuggingEnabled");
  const ignoreSSLErrors$ = dart.privateName(webview_scaffold, "WebviewScaffold.ignoreSSLErrors");
  webview_scaffold.WebviewScaffold = class WebviewScaffold extends framework.StatefulWidget {
    get appBar() {
      return this[appBar$];
    }
    set appBar(value) {
      super.appBar = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    get javascriptChannels() {
      return this[javascriptChannels$];
    }
    set javascriptChannels(value) {
      super.javascriptChannels = value;
    }
    get withJavascript() {
      return this[withJavascript$];
    }
    set withJavascript(value) {
      super.withJavascript = value;
    }
    get clearCache() {
      return this[clearCache$];
    }
    set clearCache(value) {
      super.clearCache = value;
    }
    get clearCookies() {
      return this[clearCookies$];
    }
    set clearCookies(value) {
      super.clearCookies = value;
    }
    get mediaPlaybackRequiresUserGesture() {
      return this[mediaPlaybackRequiresUserGesture$];
    }
    set mediaPlaybackRequiresUserGesture(value) {
      super.mediaPlaybackRequiresUserGesture = value;
    }
    get enableAppScheme() {
      return this[enableAppScheme$];
    }
    set enableAppScheme(value) {
      super.enableAppScheme = value;
    }
    get userAgent() {
      return this[userAgent$];
    }
    set userAgent(value) {
      super.userAgent = value;
    }
    get primary() {
      return this[primary$];
    }
    set primary(value) {
      super.primary = value;
    }
    get persistentFooterButtons() {
      return this[persistentFooterButtons$];
    }
    set persistentFooterButtons(value) {
      super.persistentFooterButtons = value;
    }
    get bottomNavigationBar() {
      return this[bottomNavigationBar$];
    }
    set bottomNavigationBar(value) {
      super.bottomNavigationBar = value;
    }
    get withZoom() {
      return this[withZoom$];
    }
    set withZoom(value) {
      super.withZoom = value;
    }
    get displayZoomControls() {
      return this[displayZoomControls$];
    }
    set displayZoomControls(value) {
      super.displayZoomControls = value;
    }
    get withLocalStorage() {
      return this[withLocalStorage$];
    }
    set withLocalStorage(value) {
      super.withLocalStorage = value;
    }
    get withLocalUrl() {
      return this[withLocalUrl$];
    }
    set withLocalUrl(value) {
      super.withLocalUrl = value;
    }
    get localUrlScope() {
      return this[localUrlScope$];
    }
    set localUrlScope(value) {
      super.localUrlScope = value;
    }
    get scrollBar() {
      return this[scrollBar$];
    }
    set scrollBar(value) {
      super.scrollBar = value;
    }
    get supportMultipleWindows() {
      return this[supportMultipleWindows$];
    }
    set supportMultipleWindows(value) {
      super.supportMultipleWindows = value;
    }
    get appCacheEnabled() {
      return this[appCacheEnabled$];
    }
    set appCacheEnabled(value) {
      super.appCacheEnabled = value;
    }
    get hidden() {
      return this[hidden$];
    }
    set hidden(value) {
      super.hidden = value;
    }
    get initialChild() {
      return this[initialChild$];
    }
    set initialChild(value) {
      super.initialChild = value;
    }
    get allowFileURLs() {
      return this[allowFileURLs$];
    }
    set allowFileURLs(value) {
      super.allowFileURLs = value;
    }
    get resizeToAvoidBottomInset() {
      return this[resizeToAvoidBottomInset$];
    }
    set resizeToAvoidBottomInset(value) {
      super.resizeToAvoidBottomInset = value;
    }
    get invalidUrlRegex() {
      return this[invalidUrlRegex$];
    }
    set invalidUrlRegex(value) {
      super.invalidUrlRegex = value;
    }
    get geolocationEnabled() {
      return this[geolocationEnabled$];
    }
    set geolocationEnabled(value) {
      super.geolocationEnabled = value;
    }
    get withOverviewMode() {
      return this[withOverviewMode$];
    }
    set withOverviewMode(value) {
      super.withOverviewMode = value;
    }
    get useWideViewPort() {
      return this[useWideViewPort$];
    }
    set useWideViewPort(value) {
      super.useWideViewPort = value;
    }
    get debuggingEnabled() {
      return this[debuggingEnabled$];
    }
    set debuggingEnabled(value) {
      super.debuggingEnabled = value;
    }
    get ignoreSSLErrors() {
      return this[ignoreSSLErrors$];
    }
    set ignoreSSLErrors(value) {
      super.ignoreSSLErrors = value;
    }
    createState() {
      return new webview_scaffold._WebviewScaffoldState.new();
    }
  };
  (webview_scaffold.WebviewScaffold.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let appBar = opts && 'appBar' in opts ? opts.appBar : null;
    let url = opts && 'url' in opts ? opts.url : null;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let javascriptChannels = opts && 'javascriptChannels' in opts ? opts.javascriptChannels : null;
    let withJavascript = opts && 'withJavascript' in opts ? opts.withJavascript : null;
    let clearCache = opts && 'clearCache' in opts ? opts.clearCache : null;
    let clearCookies = opts && 'clearCookies' in opts ? opts.clearCookies : null;
    let mediaPlaybackRequiresUserGesture = opts && 'mediaPlaybackRequiresUserGesture' in opts ? opts.mediaPlaybackRequiresUserGesture : true;
    let enableAppScheme = opts && 'enableAppScheme' in opts ? opts.enableAppScheme : null;
    let userAgent = opts && 'userAgent' in opts ? opts.userAgent : null;
    let primary = opts && 'primary' in opts ? opts.primary : true;
    let persistentFooterButtons = opts && 'persistentFooterButtons' in opts ? opts.persistentFooterButtons : null;
    let bottomNavigationBar = opts && 'bottomNavigationBar' in opts ? opts.bottomNavigationBar : null;
    let withZoom = opts && 'withZoom' in opts ? opts.withZoom : null;
    let displayZoomControls = opts && 'displayZoomControls' in opts ? opts.displayZoomControls : null;
    let withLocalStorage = opts && 'withLocalStorage' in opts ? opts.withLocalStorage : null;
    let withLocalUrl = opts && 'withLocalUrl' in opts ? opts.withLocalUrl : null;
    let localUrlScope = opts && 'localUrlScope' in opts ? opts.localUrlScope : null;
    let withOverviewMode = opts && 'withOverviewMode' in opts ? opts.withOverviewMode : null;
    let useWideViewPort = opts && 'useWideViewPort' in opts ? opts.useWideViewPort : null;
    let scrollBar = opts && 'scrollBar' in opts ? opts.scrollBar : null;
    let supportMultipleWindows = opts && 'supportMultipleWindows' in opts ? opts.supportMultipleWindows : null;
    let appCacheEnabled = opts && 'appCacheEnabled' in opts ? opts.appCacheEnabled : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : false;
    let initialChild = opts && 'initialChild' in opts ? opts.initialChild : null;
    let allowFileURLs = opts && 'allowFileURLs' in opts ? opts.allowFileURLs : null;
    let resizeToAvoidBottomInset = opts && 'resizeToAvoidBottomInset' in opts ? opts.resizeToAvoidBottomInset : false;
    let invalidUrlRegex = opts && 'invalidUrlRegex' in opts ? opts.invalidUrlRegex : null;
    let geolocationEnabled = opts && 'geolocationEnabled' in opts ? opts.geolocationEnabled : null;
    let debuggingEnabled = opts && 'debuggingEnabled' in opts ? opts.debuggingEnabled : false;
    let ignoreSSLErrors = opts && 'ignoreSSLErrors' in opts ? opts.ignoreSSLErrors : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[appBar$] = appBar;
    this[url$] = url;
    this[headers$] = headers;
    this[javascriptChannels$] = javascriptChannels;
    this[withJavascript$] = withJavascript;
    this[clearCache$] = clearCache;
    this[clearCookies$] = clearCookies;
    this[mediaPlaybackRequiresUserGesture$] = mediaPlaybackRequiresUserGesture;
    this[enableAppScheme$] = enableAppScheme;
    this[userAgent$] = userAgent;
    this[primary$] = primary;
    this[persistentFooterButtons$] = persistentFooterButtons;
    this[bottomNavigationBar$] = bottomNavigationBar;
    this[withZoom$] = withZoom;
    this[displayZoomControls$] = displayZoomControls;
    this[withLocalStorage$] = withLocalStorage;
    this[withLocalUrl$] = withLocalUrl;
    this[localUrlScope$] = localUrlScope;
    this[withOverviewMode$] = withOverviewMode;
    this[useWideViewPort$] = useWideViewPort;
    this[scrollBar$] = scrollBar;
    this[supportMultipleWindows$] = supportMultipleWindows;
    this[appCacheEnabled$] = appCacheEnabled;
    this[hidden$] = hidden;
    this[initialChild$] = initialChild;
    this[allowFileURLs$] = allowFileURLs;
    this[resizeToAvoidBottomInset$] = resizeToAvoidBottomInset;
    this[invalidUrlRegex$] = invalidUrlRegex;
    this[geolocationEnabled$] = geolocationEnabled;
    this[debuggingEnabled$] = debuggingEnabled;
    this[ignoreSSLErrors$] = ignoreSSLErrors;
    webview_scaffold.WebviewScaffold.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = webview_scaffold.WebviewScaffold.prototype;
  dart.addTypeTests(webview_scaffold.WebviewScaffold);
  dart.setMethodSignature(webview_scaffold.WebviewScaffold, () => ({
    __proto__: dart.getMethods(webview_scaffold.WebviewScaffold.__proto__),
    createState: dart.fnType(webview_scaffold._WebviewScaffoldState, [])
  }));
  dart.setLibraryUri(webview_scaffold.WebviewScaffold, "package:hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/webview_scaffold.dart");
  dart.setFieldSignature(webview_scaffold.WebviewScaffold, () => ({
    __proto__: dart.getFields(webview_scaffold.WebviewScaffold.__proto__),
    appBar: dart.finalFieldType(preferred_size.PreferredSizeWidget),
    url: dart.finalFieldType(core.String),
    headers: dart.finalFieldType(core.Map$(core.String, core.String)),
    javascriptChannels: dart.finalFieldType(core.Set$(javascript_channel.JavascriptChannel)),
    withJavascript: dart.finalFieldType(core.bool),
    clearCache: dart.finalFieldType(core.bool),
    clearCookies: dart.finalFieldType(core.bool),
    mediaPlaybackRequiresUserGesture: dart.finalFieldType(core.bool),
    enableAppScheme: dart.finalFieldType(core.bool),
    userAgent: dart.finalFieldType(core.String),
    primary: dart.finalFieldType(core.bool),
    persistentFooterButtons: dart.finalFieldType(core.List$(framework.Widget)),
    bottomNavigationBar: dart.finalFieldType(framework.Widget),
    withZoom: dart.finalFieldType(core.bool),
    displayZoomControls: dart.finalFieldType(core.bool),
    withLocalStorage: dart.finalFieldType(core.bool),
    withLocalUrl: dart.finalFieldType(core.bool),
    localUrlScope: dart.finalFieldType(core.String),
    scrollBar: dart.finalFieldType(core.bool),
    supportMultipleWindows: dart.finalFieldType(core.bool),
    appCacheEnabled: dart.finalFieldType(core.bool),
    hidden: dart.finalFieldType(core.bool),
    initialChild: dart.finalFieldType(framework.Widget),
    allowFileURLs: dart.finalFieldType(core.bool),
    resizeToAvoidBottomInset: dart.finalFieldType(core.bool),
    invalidUrlRegex: dart.finalFieldType(core.String),
    geolocationEnabled: dart.finalFieldType(core.bool),
    withOverviewMode: dart.finalFieldType(core.bool),
    useWideViewPort: dart.finalFieldType(core.bool),
    debuggingEnabled: dart.finalFieldType(core.bool),
    ignoreSSLErrors: dart.finalFieldType(core.bool)
  }));
  const _rect = dart.privateName(webview_scaffold, "_rect");
  const _resizeTimer = dart.privateName(webview_scaffold, "_resizeTimer");
  const _onStateChanged = dart.privateName(webview_scaffold, "_onStateChanged");
  const _onBack = dart.privateName(webview_scaffold, "_onBack");
  const _topMostRoute = dart.privateName(webview_scaffold, "_topMostRoute");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const ProgressIndicator_semanticsValue = dart.privateName(progress_indicator, "ProgressIndicator.semanticsValue");
  const ProgressIndicator_semanticsLabel = dart.privateName(progress_indicator, "ProgressIndicator.semanticsLabel");
  const ProgressIndicator_valueColor = dart.privateName(progress_indicator, "ProgressIndicator.valueColor");
  const ProgressIndicator_backgroundColor = dart.privateName(progress_indicator, "ProgressIndicator.backgroundColor");
  const ProgressIndicator_value = dart.privateName(progress_indicator, "ProgressIndicator.value");
  const CircularProgressIndicator_strokeWidth = dart.privateName(progress_indicator, "CircularProgressIndicator.strokeWidth");
  let C2;
  const SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  const Align_heightFactor = dart.privateName(basic, "Align.heightFactor");
  const Align_widthFactor = dart.privateName(basic, "Align.widthFactor");
  const Alignment_y = dart.privateName(alignment, "Alignment.y");
  const Alignment_x = dart.privateName(alignment, "Alignment.x");
  let C3;
  const Align_alignment = dart.privateName(basic, "Align.alignment");
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C6;
  let C7;
  let C5;
  let C4;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C9;
  let C8;
  webview_scaffold._WebviewScaffoldState = class _WebviewScaffoldState extends framework.State$(webview_scaffold.WebviewScaffold) {
    initState() {
      super.initState();
      this.webviewReference.close();
      this[_onBack] = this.webviewReference.onBack.listen(dart.fn(_ => async.async(core.Null, (function*() {
        if (!dart.test(this.mounted)) {
          return;
        }
        let pop = (yield this[_topMostRoute].willPop());
        if (dart.equals(pop, navigator.RoutePopDisposition.pop)) {
          let isOnTopMostRoute = dart.equals(this[_topMostRoute], routes.ModalRoute.of(core.Object, this.context));
          if (isOnTopMostRoute) {
            this.webviewReference.close();
          }
          navigator.Navigator.pop(core.Object, this.context);
        }
      }).bind(this)), ObjectToFutureOfNull()));
      if (dart.test(this.widget.hidden)) {
        this[_onStateChanged] = this.webviewReference.onStateChanged.listen(dart.fn(state => {
          if (dart.equals(state.type, base.WebViewState.finishLoad)) {
            this.webviewReference.show();
          }
        }, WebViewStateChangedToNull()));
      }
    }
    get [_topMostRoute]() {
      let topMost = null;
      navigator.Navigator.popUntil(this.context, dart.fn(route => {
        topMost = route;
        return true;
      }, RouteTobool()));
      return navigator.Route._check(topMost);
    }
    dispose() {
      let t0, t0$;
      super.dispose();
      t0 = this[_onBack];
      t0 == null ? null : dart.dsend(t0, 'cancel', []);
      t0$ = this[_resizeTimer];
      t0$ == null ? null : t0$.cancel();
      this.webviewReference.close();
      if (dart.test(this.widget.hidden)) {
        this[_onStateChanged].cancel();
      }
      this.webviewReference.dispose();
    }
    build(context) {
      let t0;
      return new scaffold.Scaffold.new({appBar: this.widget.appBar, resizeToAvoidBottomInset: this.widget.resizeToAvoidBottomInset, persistentFooterButtons: this.widget.persistentFooterButtons, bottomNavigationBar: this.widget.bottomNavigationBar, body: new webview_scaffold._WebviewPlaceholder.new({onRectChanged: dart.fn(value => {
            let t0;
            if (this[_rect] == null) {
              this[_rect] = value;
              this.webviewReference.launch(this.widget.url, {headers: this.widget.headers, javascriptChannels: this.widget.javascriptChannels, withJavascript: this.widget.withJavascript, clearCache: this.widget.clearCache, clearCookies: this.widget.clearCookies, mediaPlaybackRequiresUserGesture: this.widget.mediaPlaybackRequiresUserGesture, hidden: this.widget.hidden, enableAppScheme: this.widget.enableAppScheme, userAgent: this.widget.userAgent, rect: this[_rect], withZoom: this.widget.withZoom, displayZoomControls: this.widget.displayZoomControls, withLocalStorage: this.widget.withLocalStorage, withLocalUrl: this.widget.withLocalUrl, localUrlScope: this.widget.localUrlScope, withOverviewMode: this.widget.withOverviewMode, useWideViewPort: this.widget.useWideViewPort, scrollBar: this.widget.scrollBar, supportMultipleWindows: this.widget.supportMultipleWindows, appCacheEnabled: this.widget.appCacheEnabled, allowFileURLs: this.widget.allowFileURLs, invalidUrlRegex: this.widget.invalidUrlRegex, geolocationEnabled: this.widget.geolocationEnabled, debuggingEnabled: this.widget.debuggingEnabled, ignoreSSLErrors: this.widget.ignoreSSLErrors});
            } else {
              if (!dart.equals(this[_rect], value)) {
                this[_rect] = value;
                t0 = this[_resizeTimer];
                t0 == null ? null : t0.cancel();
                this[_resizeTimer] = async.Timer.new(C0 || CT.C0, dart.fn(() => {
                  this.webviewReference.resize(this[_rect]);
                }, VoidToNull()));
              }
            }
          }, RectToNull()), child: (t0 = this.widget.initialChild, t0 == null ? C1 || CT.C1 : t0), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
    }
  };
  (webview_scaffold._WebviewScaffoldState.new = function() {
    this.webviewReference = base.FlutterWebviewPlugin.new();
    this[_rect] = null;
    this[_resizeTimer] = null;
    this[_onStateChanged] = null;
    this[_onBack] = null;
    webview_scaffold._WebviewScaffoldState.__proto__.new.call(this);
    ;
  }).prototype = webview_scaffold._WebviewScaffoldState.prototype;
  dart.addTypeTests(webview_scaffold._WebviewScaffoldState);
  dart.setMethodSignature(webview_scaffold._WebviewScaffoldState, () => ({
    __proto__: dart.getMethods(webview_scaffold._WebviewScaffoldState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(webview_scaffold._WebviewScaffoldState, () => ({
    __proto__: dart.getGetters(webview_scaffold._WebviewScaffoldState.__proto__),
    [_topMostRoute]: navigator.Route
  }));
  dart.setLibraryUri(webview_scaffold._WebviewScaffoldState, "package:hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/webview_scaffold.dart");
  dart.setFieldSignature(webview_scaffold._WebviewScaffoldState, () => ({
    __proto__: dart.getFields(webview_scaffold._WebviewScaffoldState.__proto__),
    webviewReference: dart.finalFieldType(base.FlutterWebviewPlugin),
    [_rect]: dart.fieldType(ui.Rect),
    [_resizeTimer]: dart.fieldType(async.Timer),
    [_onStateChanged]: dart.fieldType(async.StreamSubscription$(base.WebViewStateChanged)),
    [_onBack]: dart.fieldType(dart.dynamic)
  }));
  const onRectChanged$ = dart.privateName(webview_scaffold, "_WebviewPlaceholder.onRectChanged");
  webview_scaffold._WebviewPlaceholder = class _WebviewPlaceholder extends framework.SingleChildRenderObjectWidget {
    get onRectChanged() {
      return this[onRectChanged$];
    }
    set onRectChanged(value) {
      super.onRectChanged = value;
    }
    createRenderObject(context) {
      return new webview_scaffold._WebviewPlaceholderRender.new({onRectChanged: this.onRectChanged});
    }
    updateRenderObject(context, renderObject) {
      let t0;
      webview_scaffold._WebviewPlaceholderRender._check(renderObject);
      t0 = renderObject;
      t0.onRectChanged = this.onRectChanged;
      t0;
    }
  };
  (webview_scaffold._WebviewPlaceholder.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let onRectChanged = opts && 'onRectChanged' in opts ? opts.onRectChanged : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onRectChanged$] = onRectChanged;
    webview_scaffold._WebviewPlaceholder.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = webview_scaffold._WebviewPlaceholder.prototype;
  dart.addTypeTests(webview_scaffold._WebviewPlaceholder);
  dart.setMethodSignature(webview_scaffold._WebviewPlaceholder, () => ({
    __proto__: dart.getMethods(webview_scaffold._WebviewPlaceholder.__proto__),
    createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext])
  }));
  dart.setLibraryUri(webview_scaffold._WebviewPlaceholder, "package:hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/webview_scaffold.dart");
  dart.setFieldSignature(webview_scaffold._WebviewPlaceholder, () => ({
    __proto__: dart.getFields(webview_scaffold._WebviewPlaceholder.__proto__),
    onRectChanged: dart.finalFieldType(dart.fnType(dart.void, [ui.Rect]))
  }));
  const _callback = dart.privateName(webview_scaffold, "_callback");
  webview_scaffold._WebviewPlaceholderRender = class _WebviewPlaceholderRender extends proxy_box.RenderProxyBox {
    get rect() {
      return this[_rect];
    }
    set onRectChanged(callback) {
      if (!dart.equals(callback, this[_callback])) {
        this[_callback] = callback;
        this.notifyRect();
      }
    }
    notifyRect() {
      if (this[_callback] != null && this[_rect] != null) {
        this[_callback](this[_rect]);
      }
    }
    paint(context, offset) {
      super.paint(context, offset);
      let rect = offset['&'](this.size);
      if (!dart.equals(this[_rect], rect)) {
        this[_rect] = rect;
        this.notifyRect();
      }
    }
  };
  (webview_scaffold._WebviewPlaceholderRender.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let onRectChanged = opts && 'onRectChanged' in opts ? opts.onRectChanged : null;
    this[_rect] = null;
    this[_callback] = onRectChanged;
    webview_scaffold._WebviewPlaceholderRender.__proto__.new.call(this, child);
    ;
  }).prototype = webview_scaffold._WebviewPlaceholderRender.prototype;
  dart.addTypeTests(webview_scaffold._WebviewPlaceholderRender);
  dart.setMethodSignature(webview_scaffold._WebviewPlaceholderRender, () => ({
    __proto__: dart.getMethods(webview_scaffold._WebviewPlaceholderRender.__proto__),
    notifyRect: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(webview_scaffold._WebviewPlaceholderRender, () => ({
    __proto__: dart.getGetters(webview_scaffold._WebviewPlaceholderRender.__proto__),
    rect: ui.Rect
  }));
  dart.setSetterSignature(webview_scaffold._WebviewPlaceholderRender, () => ({
    __proto__: dart.getSetters(webview_scaffold._WebviewPlaceholderRender.__proto__),
    onRectChanged: dart.fnType(dart.void, [ui.Rect])
  }));
  dart.setLibraryUri(webview_scaffold._WebviewPlaceholderRender, "package:hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/webview_scaffold.dart");
  dart.setFieldSignature(webview_scaffold._WebviewPlaceholderRender, () => ({
    __proto__: dart.getFields(webview_scaffold._WebviewPlaceholderRender.__proto__),
    [_callback]: dart.fieldType(dart.fnType(dart.void, [ui.Rect])),
    [_rect]: dart.fieldType(ui.Rect)
  }));
  const _name$ = dart.privateName(base, "_name");
  let C15;
  let C16;
  let C17;
  let C18;
  let C19;
  base.WebViewState = class WebViewState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (base.WebViewState.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = base.WebViewState.prototype;
  dart.addTypeTests(base.WebViewState);
  dart.setLibraryUri(base.WebViewState, "package:hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/base.dart");
  dart.setFieldSignature(base.WebViewState, () => ({
    __proto__: dart.getFields(base.WebViewState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(base.WebViewState, ['toString']);
  base.WebViewState.shouldStart = C15 || CT.C15;
  base.WebViewState.startLoad = C16 || CT.C16;
  base.WebViewState.finishLoad = C17 || CT.C17;
  base.WebViewState.abortLoad = C18 || CT.C18;
  base.WebViewState.values = C19 || CT.C19;
  const _onBack$ = dart.privateName(base, "_onBack");
  const _onDestroy = dart.privateName(base, "_onDestroy");
  const _onUrlChanged = dart.privateName(base, "_onUrlChanged");
  const _onStateChanged$ = dart.privateName(base, "_onStateChanged");
  const _onScrollXChanged = dart.privateName(base, "_onScrollXChanged");
  const _onScrollYChanged = dart.privateName(base, "_onScrollYChanged");
  const _onProgressChanged = dart.privateName(base, "_onProgressChanged");
  const _onHttpError = dart.privateName(base, "_onHttpError");
  const _onPostMessage = dart.privateName(base, "_onPostMessage");
  const _javascriptChannels = dart.privateName(base, "_javascriptChannels");
  const _channel$ = dart.privateName(base, "_channel");
  const _handleMessages = dart.privateName(base, "_handleMessages");
  let C22;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C21;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C20;
  const _handleJavascriptChannelMessage = dart.privateName(base, "_handleJavascriptChannelMessage");
  const _assertJavascriptChannelNamesAreUnique = dart.privateName(base, "_assertJavascriptChannelNamesAreUnique");
  const _extractJavascriptChannelNames = dart.privateName(base, "_extractJavascriptChannelNames");
  base.FlutterWebviewPlugin = class FlutterWebviewPlugin extends core.Object {
    static new() {
      if (base.FlutterWebviewPlugin._instance == null) {
        let methodChannel = C20 || CT.C20;
        base.FlutterWebviewPlugin._instance = new base.FlutterWebviewPlugin.private(methodChannel);
      }
      return base.FlutterWebviewPlugin._instance;
    }
    [_handleMessages](call) {
      return async.async(core.Null, (function* _handleMessages() {
        switch (call.method) {
          case "onBack":
          {
            this[_onBack$].add(null);
            break;
          }
          case "onDestroy":
          {
            this[_onDestroy].add(null);
            break;
          }
          case "onUrlChanged":
          {
            this[_onUrlChanged].add(core.String._check(dart.dsend(call.arguments, '_get', ["url"])));
            break;
          }
          case "onScrollXChanged":
          {
            this[_onScrollXChanged].add(core.double._check(dart.dsend(call.arguments, '_get', ["xDirection"])));
            break;
          }
          case "onScrollYChanged":
          {
            this[_onScrollYChanged].add(core.double._check(dart.dsend(call.arguments, '_get', ["yDirection"])));
            break;
          }
          case "onProgressChanged":
          {
            this[_onProgressChanged].add(core.double._check(dart.dsend(call.arguments, '_get', ["progress"])));
            break;
          }
          case "onState":
          {
            this[_onStateChanged$].add(base.WebViewStateChanged.fromMap(LinkedHashMapOfString$dynamic().from(core.Map._check(call.arguments))));
            break;
          }
          case "onHttpError":
          {
            this[_onHttpError].add(new base.WebViewHttpError.new(core.String._check(dart.dsend(call.arguments, '_get', ["code"])), core.String._check(dart.dsend(call.arguments, '_get', ["url"]))));
            break;
          }
          case "javascriptChannelMessage":
          {
            this[_handleJavascriptChannelMessage](core.String._check(dart.dsend(call.arguments, '_get', ["channel"])), core.String._check(dart.dsend(call.arguments, '_get', ["message"])));
            break;
          }
        }
      }).bind(this));
    }
    get onDestroy() {
      return this[_onDestroy].stream;
    }
    get onBack() {
      return this[_onBack$].stream;
    }
    get onUrlChanged() {
      return this[_onUrlChanged].stream;
    }
    get onStateChanged() {
      return this[_onStateChanged$].stream;
    }
    get onProgressChanged() {
      return this[_onProgressChanged].stream;
    }
    get onScrollYChanged() {
      return this[_onScrollYChanged].stream;
    }
    get onScrollXChanged() {
      return this[_onScrollXChanged].stream;
    }
    get onHttpError() {
      return this[_onHttpError].stream;
    }
    launch(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let javascriptChannels = opts && 'javascriptChannels' in opts ? opts.javascriptChannels : null;
      let withJavascript = opts && 'withJavascript' in opts ? opts.withJavascript : null;
      let clearCache = opts && 'clearCache' in opts ? opts.clearCache : null;
      let clearCookies = opts && 'clearCookies' in opts ? opts.clearCookies : null;
      let mediaPlaybackRequiresUserGesture = opts && 'mediaPlaybackRequiresUserGesture' in opts ? opts.mediaPlaybackRequiresUserGesture : null;
      let hidden = opts && 'hidden' in opts ? opts.hidden : null;
      let enableAppScheme = opts && 'enableAppScheme' in opts ? opts.enableAppScheme : null;
      let rect = opts && 'rect' in opts ? opts.rect : null;
      let userAgent = opts && 'userAgent' in opts ? opts.userAgent : null;
      let withZoom = opts && 'withZoom' in opts ? opts.withZoom : null;
      let displayZoomControls = opts && 'displayZoomControls' in opts ? opts.displayZoomControls : null;
      let withLocalStorage = opts && 'withLocalStorage' in opts ? opts.withLocalStorage : null;
      let withLocalUrl = opts && 'withLocalUrl' in opts ? opts.withLocalUrl : null;
      let localUrlScope = opts && 'localUrlScope' in opts ? opts.localUrlScope : null;
      let withOverviewMode = opts && 'withOverviewMode' in opts ? opts.withOverviewMode : null;
      let scrollBar = opts && 'scrollBar' in opts ? opts.scrollBar : null;
      let supportMultipleWindows = opts && 'supportMultipleWindows' in opts ? opts.supportMultipleWindows : null;
      let appCacheEnabled = opts && 'appCacheEnabled' in opts ? opts.appCacheEnabled : null;
      let allowFileURLs = opts && 'allowFileURLs' in opts ? opts.allowFileURLs : null;
      let useWideViewPort = opts && 'useWideViewPort' in opts ? opts.useWideViewPort : null;
      let invalidUrlRegex = opts && 'invalidUrlRegex' in opts ? opts.invalidUrlRegex : null;
      let geolocationEnabled = opts && 'geolocationEnabled' in opts ? opts.geolocationEnabled : null;
      let debuggingEnabled = opts && 'debuggingEnabled' in opts ? opts.debuggingEnabled : null;
      let ignoreSSLErrors = opts && 'ignoreSSLErrors' in opts ? opts.ignoreSSLErrors : null;
      return async.async(core.Null, (function* launch() {
        let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16;
        let args = new (IdentityMapOfString$dynamic()).from(["url", url, "withJavascript", (t0 = withJavascript, t0 == null ? true : t0), "clearCache", (t0$ = clearCache, t0$ == null ? false : t0$), "hidden", (t0$0 = hidden, t0$0 == null ? false : t0$0), "clearCookies", (t0$1 = clearCookies, t0$1 == null ? false : t0$1), "mediaPlaybackRequiresUserGesture", (t0$2 = mediaPlaybackRequiresUserGesture, t0$2 == null ? true : t0$2), "enableAppScheme", (t0$3 = enableAppScheme, t0$3 == null ? true : t0$3), "userAgent", userAgent, "withZoom", (t0$4 = withZoom, t0$4 == null ? false : t0$4), "displayZoomControls", (t0$5 = displayZoomControls, t0$5 == null ? false : t0$5), "withLocalStorage", (t0$6 = withLocalStorage, t0$6 == null ? true : t0$6), "withLocalUrl", (t0$7 = withLocalUrl, t0$7 == null ? false : t0$7), "localUrlScope", localUrlScope, "scrollBar", (t0$8 = scrollBar, t0$8 == null ? true : t0$8), "supportMultipleWindows", (t0$9 = supportMultipleWindows, t0$9 == null ? false : t0$9), "appCacheEnabled", (t0$10 = appCacheEnabled, t0$10 == null ? false : t0$10), "allowFileURLs", (t0$11 = allowFileURLs, t0$11 == null ? false : t0$11), "useWideViewPort", (t0$12 = useWideViewPort, t0$12 == null ? false : t0$12), "invalidUrlRegex", invalidUrlRegex, "geolocationEnabled", (t0$13 = geolocationEnabled, t0$13 == null ? false : t0$13), "withOverviewMode", (t0$14 = withOverviewMode, t0$14 == null ? false : t0$14), "debuggingEnabled", (t0$15 = debuggingEnabled, t0$15 == null ? false : t0$15), "ignoreSSLErrors", (t0$16 = ignoreSSLErrors, t0$16 == null ? false : t0$16)]);
        if (headers != null) {
          args[$_set]("headers", headers);
        }
        this[_assertJavascriptChannelNamesAreUnique](javascriptChannels);
        if (javascriptChannels != null) {
          javascriptChannels[$forEach](dart.fn(channel => {
            this[_javascriptChannels][$_set](channel.name, channel);
          }, JavascriptChannelToNull()));
        } else {
          if (dart.test(this[_javascriptChannels][$isNotEmpty])) {
            this[_javascriptChannels][$clear]();
          }
        }
        args[$_set]("javascriptChannelNames", this[_extractJavascriptChannelNames](javascriptChannels)[$toList]());
        if (rect != null) {
          args[$_set]("rect", new (IdentityMapOfString$double()).from(["left", rect.left, "top", rect.top, "width", rect.width, "height", rect.height]));
        }
        yield this[_channel$].invokeMethod(dart.dynamic, "launch", args);
      }).bind(this));
    }
    evalJavascript(code) {
      return async.async(core.String, (function* evalJavascript() {
        let res = (yield this[_channel$].invokeMethod(dart.dynamic, "eval", new (IdentityMapOfString$String()).from(["code", code])));
        return FutureOrOfString()._check(res);
      }).bind(this));
    }
    close() {
      return async.async(core.Null, (function* close() {
        this[_javascriptChannels][$clear]();
        yield this[_channel$].invokeMethod(dart.dynamic, "close");
      }).bind(this));
    }
    reload() {
      return async.async(core.Null, (function* reload() {
        return yield this[_channel$].invokeMethod(core.Null, "reload");
      }).bind(this));
    }
    goBack() {
      return async.async(core.Null, (function* goBack() {
        return yield this[_channel$].invokeMethod(core.Null, "back");
      }).bind(this));
    }
    canGoBack() {
      return async.async(core.bool, (function* canGoBack() {
        return yield this[_channel$].invokeMethod(core.bool, "canGoBack");
      }).bind(this));
    }
    canGoForward() {
      return async.async(core.bool, (function* canGoForward() {
        return yield this[_channel$].invokeMethod(core.bool, "canGoForward");
      }).bind(this));
    }
    goForward() {
      return async.async(core.Null, (function* goForward() {
        return yield this[_channel$].invokeMethod(core.Null, "forward");
      }).bind(this));
    }
    hide() {
      return async.async(core.Null, (function* hide() {
        return yield this[_channel$].invokeMethod(core.Null, "hide");
      }).bind(this));
    }
    show() {
      return async.async(core.Null, (function* show() {
        return yield this[_channel$].invokeMethod(core.Null, "show");
      }).bind(this));
    }
    clearCache() {
      return async.async(core.Null, (function* clearCache() {
        return yield this[_channel$].invokeMethod(core.Null, "cleanCache");
      }).bind(this));
    }
    reloadUrl(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return async.async(core.Null, (function* reloadUrl() {
        let args = new (IdentityMapOfString$dynamic()).from(["url", url]);
        if (headers != null) {
          args[$_set]("headers", headers);
        }
        yield this[_channel$].invokeMethod(dart.dynamic, "reloadUrl", args);
      }).bind(this));
    }
    cleanCookies() {
      return async.async(core.Null, (function* cleanCookies() {
        yield this.evalJavascript("document.cookie.split(\";\").forEach(function(c) { document.cookie = c.replace(/^ +/, \"\").replace(/=.*/, \"=;expires=\" + new Date().toUTCString() + \";path=/\"); });");
        return yield this[_channel$].invokeMethod(core.Null, "cleanCookies");
      }).bind(this));
    }
    stopLoading() {
      return async.async(core.Null, (function* stopLoading() {
        return yield this[_channel$].invokeMethod(core.Null, "stopLoading");
      }).bind(this));
    }
    dispose() {
      this[_onDestroy].close();
      this[_onUrlChanged].close();
      this[_onStateChanged$].close();
      this[_onProgressChanged].close();
      this[_onScrollXChanged].close();
      this[_onScrollYChanged].close();
      this[_onHttpError].close();
      this[_onPostMessage].close();
      base.FlutterWebviewPlugin._instance = null;
    }
    getCookies() {
      return async.async(MapOfString$String(), (function* getCookies() {
        let t0;
        let cookiesString = (yield this.evalJavascript("document.cookie"));
        let cookies = new (IdentityMapOfString$String()).new();
        if (dart.equals((t0 = cookiesString, t0 == null ? null : t0[$isNotEmpty]), true)) {
          cookiesString[$split](";")[$forEach](dart.fn(cookie => {
            let split = cookie[$split]("=");
            cookies[$_set](split[$_get](0), split[$_get](1));
          }, StringToNull()));
        }
        return cookies;
      }).bind(this));
    }
    resize(rect) {
      return async.async(core.Null, (function* resize() {
        let args = new _js_helper.LinkedMap.new();
        args[$_set]("rect", new (IdentityMapOfString$double()).from(["left", rect.left, "top", rect.top, "width", rect.width, "height", rect.height]));
        yield this[_channel$].invokeMethod(dart.dynamic, "resize", args);
      }).bind(this));
    }
    [_extractJavascriptChannelNames](channels) {
      let channelNames = channels == null ? new (_IdentityHashSetOfString()).new() : channels[$map](core.String, dart.fn(channel => channel.name, JavascriptChannelToString()))[$toSet]();
      return channelNames;
    }
    [_handleJavascriptChannelMessage](channelName, message) {
      this[_javascriptChannels][$_get](channelName).onMessageReceived(new javascript_message.JavascriptMessage.new(message));
    }
    [_assertJavascriptChannelNamesAreUnique](channels) {
      if (channels == null || dart.test(channels[$isEmpty])) {
        return;
      }
      if (!(this[_extractJavascriptChannelNames](channels)[$length] == channels[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/base.dart", 344, 12, "_extractJavascriptChannelNames(channels).length == channels.length");
    }
  };
  (base.FlutterWebviewPlugin.private = function(_channel) {
    this[_onBack$] = StreamControllerOfNull().broadcast();
    this[_onDestroy] = StreamControllerOfNull().broadcast();
    this[_onUrlChanged] = StreamControllerOfString().broadcast();
    this[_onStateChanged$] = StreamControllerOfWebViewStateChanged().broadcast();
    this[_onScrollXChanged] = StreamControllerOfdouble().broadcast();
    this[_onScrollYChanged] = StreamControllerOfdouble().broadcast();
    this[_onProgressChanged] = StreamControllerOfdouble().broadcast();
    this[_onHttpError] = StreamControllerOfWebViewHttpError().broadcast();
    this[_onPostMessage] = StreamControllerOfJavascriptMessage().broadcast();
    this[_javascriptChannels] = new (LinkedMapOfString$JavascriptChannel()).new();
    this[_channel$] = _channel;
    this[_channel$].setMethodCallHandler(dart.bind(this, _handleMessages));
  }).prototype = base.FlutterWebviewPlugin.prototype;
  dart.addTypeTests(base.FlutterWebviewPlugin);
  dart.setMethodSignature(base.FlutterWebviewPlugin, () => ({
    __proto__: dart.getMethods(base.FlutterWebviewPlugin.__proto__),
    [_handleMessages]: dart.fnType(async.Future$(core.Null), [message_codec.MethodCall]),
    launch: dart.fnType(async.Future$(core.Null), [core.String], {allowFileURLs: core.bool, appCacheEnabled: core.bool, clearCache: core.bool, clearCookies: core.bool, debuggingEnabled: core.bool, displayZoomControls: core.bool, enableAppScheme: core.bool, geolocationEnabled: core.bool, headers: core.Map$(core.String, core.String), hidden: core.bool, ignoreSSLErrors: core.bool, invalidUrlRegex: core.String, javascriptChannels: core.Set$(javascript_channel.JavascriptChannel), localUrlScope: core.String, mediaPlaybackRequiresUserGesture: core.bool, rect: ui.Rect, scrollBar: core.bool, supportMultipleWindows: core.bool, useWideViewPort: core.bool, userAgent: core.String, withJavascript: core.bool, withLocalStorage: core.bool, withLocalUrl: core.bool, withOverviewMode: core.bool, withZoom: core.bool}, {}),
    evalJavascript: dart.fnType(async.Future$(core.String), [core.String]),
    close: dart.fnType(async.Future$(core.Null), []),
    reload: dart.fnType(async.Future$(core.Null), []),
    goBack: dart.fnType(async.Future$(core.Null), []),
    canGoBack: dart.fnType(async.Future$(core.bool), []),
    canGoForward: dart.fnType(async.Future$(core.bool), []),
    goForward: dart.fnType(async.Future$(core.Null), []),
    hide: dart.fnType(async.Future$(core.Null), []),
    show: dart.fnType(async.Future$(core.Null), []),
    clearCache: dart.fnType(async.Future$(core.Null), []),
    reloadUrl: dart.fnType(async.Future$(core.Null), [core.String], {headers: core.Map$(core.String, core.String)}, {}),
    cleanCookies: dart.fnType(async.Future$(core.Null), []),
    stopLoading: dart.fnType(async.Future$(core.Null), []),
    dispose: dart.fnType(dart.void, []),
    getCookies: dart.fnType(async.Future$(core.Map$(core.String, core.String)), []),
    resize: dart.fnType(async.Future$(core.Null), [ui.Rect]),
    [_extractJavascriptChannelNames]: dart.fnType(core.Set$(core.String), [core.Set$(javascript_channel.JavascriptChannel)]),
    [_handleJavascriptChannelMessage]: dart.fnType(dart.void, [core.String, core.String]),
    [_assertJavascriptChannelNamesAreUnique]: dart.fnType(dart.void, [core.Set$(javascript_channel.JavascriptChannel)])
  }));
  dart.setGetterSignature(base.FlutterWebviewPlugin, () => ({
    __proto__: dart.getGetters(base.FlutterWebviewPlugin.__proto__),
    onDestroy: async.Stream$(core.Null),
    onBack: async.Stream$(core.Null),
    onUrlChanged: async.Stream$(core.String),
    onStateChanged: async.Stream$(base.WebViewStateChanged),
    onProgressChanged: async.Stream$(core.double),
    onScrollYChanged: async.Stream$(core.double),
    onScrollXChanged: async.Stream$(core.double),
    onHttpError: async.Stream$(base.WebViewHttpError)
  }));
  dart.setLibraryUri(base.FlutterWebviewPlugin, "package:hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/base.dart");
  dart.setFieldSignature(base.FlutterWebviewPlugin, () => ({
    __proto__: dart.getFields(base.FlutterWebviewPlugin.__proto__),
    [_channel$]: dart.finalFieldType(platform_channel.MethodChannel),
    [_onBack$]: dart.finalFieldType(async.StreamController$(core.Null)),
    [_onDestroy]: dart.finalFieldType(async.StreamController$(core.Null)),
    [_onUrlChanged]: dart.finalFieldType(async.StreamController$(core.String)),
    [_onStateChanged$]: dart.finalFieldType(async.StreamController$(base.WebViewStateChanged)),
    [_onScrollXChanged]: dart.finalFieldType(async.StreamController$(core.double)),
    [_onScrollYChanged]: dart.finalFieldType(async.StreamController$(core.double)),
    [_onProgressChanged]: dart.finalFieldType(async.StreamController$(core.double)),
    [_onHttpError]: dart.finalFieldType(async.StreamController$(base.WebViewHttpError)),
    [_onPostMessage]: dart.finalFieldType(async.StreamController$(javascript_message.JavascriptMessage)),
    [_javascriptChannels]: dart.finalFieldType(core.Map$(core.String, javascript_channel.JavascriptChannel))
  }));
  dart.defineLazy(base.FlutterWebviewPlugin, {
    /*base.FlutterWebviewPlugin._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  const type$ = dart.privateName(base, "WebViewStateChanged.type");
  const url$0 = dart.privateName(base, "WebViewStateChanged.url");
  const navigationType$ = dart.privateName(base, "WebViewStateChanged.navigationType");
  base.WebViewStateChanged = class WebViewStateChanged extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get url() {
      return this[url$0];
    }
    set url(value) {
      super.url = value;
    }
    get navigationType() {
      return this[navigationType$];
    }
    set navigationType(value) {
      super.navigationType = value;
    }
    static fromMap(map) {
      let t = null;
      switch (map[$_get]("type")) {
        case "shouldStart":
        {
          t = base.WebViewState.shouldStart;
          break;
        }
        case "startLoad":
        {
          t = base.WebViewState.startLoad;
          break;
        }
        case "finishLoad":
        {
          t = base.WebViewState.finishLoad;
          break;
        }
        case "abortLoad":
        {
          t = base.WebViewState.abortLoad;
          break;
        }
      }
      return new base.WebViewStateChanged.new(t, core.String._check(map[$_get]("url")), core.int._check(map[$_get]("navigationType")));
    }
  };
  (base.WebViewStateChanged.new = function(type, url, navigationType) {
    this[type$] = type;
    this[url$0] = url;
    this[navigationType$] = navigationType;
    ;
  }).prototype = base.WebViewStateChanged.prototype;
  dart.addTypeTests(base.WebViewStateChanged);
  dart.setLibraryUri(base.WebViewStateChanged, "package:hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/base.dart");
  dart.setFieldSignature(base.WebViewStateChanged, () => ({
    __proto__: dart.getFields(base.WebViewStateChanged.__proto__),
    type: dart.finalFieldType(base.WebViewState),
    url: dart.finalFieldType(core.String),
    navigationType: dart.finalFieldType(core.int)
  }));
  const url$1 = dart.privateName(base, "WebViewHttpError.url");
  const code$ = dart.privateName(base, "WebViewHttpError.code");
  base.WebViewHttpError = class WebViewHttpError extends core.Object {
    get url() {
      return this[url$1];
    }
    set url(value) {
      super.url = value;
    }
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
  };
  (base.WebViewHttpError.new = function(code, url) {
    this[code$] = code;
    this[url$1] = url;
    ;
  }).prototype = base.WebViewHttpError.prototype;
  dart.addTypeTests(base.WebViewHttpError);
  dart.setLibraryUri(base.WebViewHttpError, "package:hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/base.dart");
  dart.setFieldSignature(base.WebViewHttpError, () => ({
    __proto__: dart.getFields(base.WebViewHttpError.__proto__),
    url: dart.finalFieldType(core.String),
    code: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(base, {
    /*base._kChannel*/get _kChannel() {
      return "flutter_webview_plugin";
    }
  });
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/flutter_webview_plugin", {
    "package:hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/javascript_channel.dart": javascript_channel,
    "package:hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/flutter_webview_plugin.dart": flutter_webview_plugin,
    "package:hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/webview_scaffold.dart": webview_scaffold,
    "package:hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/base.dart": base
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/javascript_channel.dart","src/webview_scaffold.dart","src/base.dart"],"names":[],"mappings":"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","file":"flutter_webview_plugin.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_webview_plugin_0$463$4610$431__lib__src__javascript_channel: javascript_channel,
    ThridLib__flutter_webview_plugin_0$463$4610$431__lib__flutter_webview_plugin: flutter_webview_plugin,
    ThridLib__flutter_webview_plugin_0$463$4610$431__lib__src__webview_scaffold: webview_scaffold,
    ThridLib__flutter_webview_plugin_0$463$4610$431__lib__src__base: base
  };
});

//# sourceMappingURL=flutter_webview_plugin.ddc.js.map
