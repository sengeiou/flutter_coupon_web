define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/flutter_webview_plugin', 'packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__hkbook__ThridLib__flutter_webview_plugin_0$463$4610$431__lib__flutter_webview_plugin, packages__hkbook__ThridLib__flutter_spinkit_4$461$461$431__lib__src__fading_circle, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const colors = packages__flutter_web__material.src__material__colors;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const container = packages__flutter_web__animation.src__widgets__container;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const webview_scaffold = packages__hkbook__ThridLib__flutter_webview_plugin_0$463$4610$431__lib__flutter_webview_plugin.ThridLib__flutter_webview_plugin_0$463$4610$431__lib__src__webview_scaffold;
  const fading_circle = packages__hkbook__ThridLib__flutter_spinkit_4$461$461$431__lib__src__fading_circle.ThridLib__flutter_spinkit_4$461$461$431__lib__src__fading_circle;
  const ui = packages__flutter_web_ui__ui.ui;
  const colors$ = packages__flutter_web__src__animation__animation.src__painting__colors;
  const browser = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/browser/browser.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/browser/browser.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1200000
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294638330.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294309365.0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4293848814.0
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4292927712.0
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4292269782.0
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4290624957.0
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4288585374.0
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4285887861.0
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4284572001.0
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4282532418.0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4281348144.0
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4280361249.0
      });
    },
    get C9() {
      return C9 = dart.constMap(core.int, ui.Color, [50, C10 || CT.C10, 100, C11 || CT.C11, 200, C12 || CT.C12, 300, C13 || CT.C13, 350, C14 || CT.C14, 400, C15 || CT.C15, 500, C16 || CT.C16, 600, C17 || CT.C17, 700, C18 || CT.C18, 800, C19 || CT.C19, 850, C20 || CT.C20, 900, C21 || CT.C21]);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color__value]: 4288585374.0,
        [ColorSwatch__swatch]: C9 || CT.C9
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: fading_circle.SpinKitFadingCircle.prototype,
        [Widget_key]: null,
        [SpinKitFadingCircle_controller]: null,
        [SpinKitFadingCircle_duration]: C7 || CT.C7,
        [SpinKitFadingCircle_itemBuilder]: null,
        [SpinKitFadingCircle_size]: 50,
        [SpinKitFadingCircle_color]: C8 || CT.C8
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/browser/browser.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "url",
        [_Location_column]: 7,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "withZoom",
        [_Location_column]: 7,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "withLocalStorage",
        [_Location_column]: 7,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hidden",
        [_Location_column]: 7,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialChild",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/browser/browser.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/browser/browser.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const SpinKitFadingCircle_controller = dart.privateName(fading_circle, "SpinKitFadingCircle.controller");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C7;
  const SpinKitFadingCircle_duration = dart.privateName(fading_circle, "SpinKitFadingCircle.duration");
  const SpinKitFadingCircle_itemBuilder = dart.privateName(fading_circle, "SpinKitFadingCircle.itemBuilder");
  const SpinKitFadingCircle_size = dart.privateName(fading_circle, "SpinKitFadingCircle.size");
  const Color__value = dart.privateName(ui, "Color._value");
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C15;
  let C16;
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C9;
  const ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  let C8;
  const SpinKitFadingCircle_color = dart.privateName(fading_circle, "SpinKitFadingCircle.color");
  let C6;
  let C24;
  let C25;
  let C23;
  let C22;
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C27;
  let C26;
  let C35;
  let C36;
  let C34;
  let C33;
  const url$ = dart.privateName(browser, "Browser.url");
  const title$ = dart.privateName(browser, "Browser.title");
  browser.Browser = class Browser extends framework.StatelessWidget {
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    build(context) {
      core.print(this.url);
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(this.title, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: new webview_scaffold.WebviewScaffold.new({url: this.url, withZoom: true, withLocalStorage: true, hidden: true, initialChild: new container.Container.new({color: colors.Colors.white, child: C6 || CT.C6, $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33});
    }
  };
  (browser.Browser.new = function(opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[url$] = url;
    this[title$] = title;
    browser.Browser.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = browser.Browser.prototype;
  dart.addTypeTests(browser.Browser);
  dart.setMethodSignature(browser.Browser, () => ({
    __proto__: dart.getMethods(browser.Browser.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(browser.Browser, "package:hkbook/widget/browser/browser.dart");
  dart.setFieldSignature(browser.Browser, () => ({
    __proto__: dart.getFields(browser.Browser.__proto__),
    url: dart.finalFieldType(core.String),
    title: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/hkbook/widget/browser/browser", {
    "package:hkbook/widget/browser/browser.dart": browser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["browser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASe;;;;;;IACA;;;;;;UAGa;AACd,MAAV,WAAM;AACN,YAAQ,oCACE,+BACC,kBAAK,iIAET,+CACA,oBACK,wBACQ,cACV,oBACM,oCACE;IAKpB;;;QAvBc;QAAU;;IAAV;IAAU;AAAxB;;EAA+B","file":"browser.ddc.js"}');
  // Exports:
  return {
    widget__browser__browser: browser
  };
});

//# sourceMappingURL=browser.ddc.js.map
