define(['dart_sdk', 'packages/flutter_web/material', 'packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle', 'packages/flutter_web/animation'], function(dart_sdk, packages__flutter_web__material, packages__hkbook__ThridLib__flutter_spinkit_4$461$461$431__lib__src__fading_circle, packages__flutter_web__animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dialog = packages__flutter_web__material.src__material__dialog;
  const colors = packages__flutter_web__material.src__material__colors;
  const fading_circle = packages__hkbook__ThridLib__flutter_spinkit_4$461$461$431__lib__src__fading_circle.ThridLib__flutter_spinkit_4$461$461$431__lib__src__fading_circle;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const loading_page = Object.create(dart.library);
  let BuildContextToSpinKitFadingCircle = () => (BuildContextToSpinKitFadingCircle = dart.constFn(dart.fnType(fading_circle.SpinKitFadingCircle, [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 36,
        [_Location_line]: 14,
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
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/loading/loading_page.dart"
      });
    }
  });
  const _context$ = dart.privateName(loading_page, "_context");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  loading_page.LoadingPage = class LoadingPage extends core.Object {
    show(opts) {
      let onClosed = opts && 'onClosed' in opts ? opts.onClosed : null;
      dialog.showDialog(dart.dynamic, {context: this[_context$], builder: dart.fn(context => new fading_circle.SpinKitFadingCircle.new({color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextToSpinKitFadingCircle())});
    }
    close() {
      navigator.Navigator.of(this[_context$]).pop(core.Object);
    }
  };
  (loading_page.LoadingPage.new = function(_context) {
    this[_context$] = _context;
    ;
  }).prototype = loading_page.LoadingPage.prototype;
  dart.addTypeTests(loading_page.LoadingPage);
  dart.setMethodSignature(loading_page.LoadingPage, () => ({
    __proto__: dart.getMethods(loading_page.LoadingPage.__proto__),
    show: dart.fnType(dart.void, [], {onClosed: core.Function}, {}),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(loading_page.LoadingPage, "package:hkbook/widget/loading/loading_page.dart");
  dart.setFieldSignature(loading_page.LoadingPage, () => ({
    __proto__: dart.getFields(loading_page.LoadingPage.__proto__),
    [_context$]: dart.finalFieldType(framework.BuildContext)
  }));
  dart.trackLibraries("packages/hkbook/widget/loading/loading_page", {
    "package:hkbook/widget/loading/loading_page.dart": loading_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["loading_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UASsB;AAMjB,MALD,0CACW,0BACA,QAAC,WACD,kDAAkC;IAG/C;;AAI8B,MAAlB,AAAa,uBAAV;IACf;;;IAfiB;;EAAS","file":"loading_page.ddc.js"}');
  // Exports:
  return {
    widget__loading__loading_page: loading_page
  };
});

//# sourceMappingURL=loading_page.ddc.js.map
