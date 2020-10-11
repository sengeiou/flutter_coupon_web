define(['dart_sdk', 'packages/hkbook/ThridLib/provide-1.0.2/lib/provide', 'packages/hkbook/provide/current_index', 'packages/hkbook/provide/search_history', 'packages/hkbook/provide/category', 'packages/flutter_web/animation', 'packages/hkbook/app/app_navigator'], function(dart_sdk, packages__hkbook__ThridLib__provide_1$460$462__lib__provide, packages__hkbook__provide__current_index, packages__hkbook__provide__search_history, packages__hkbook__provide__category, packages__flutter_web__animation, packages__hkbook__app__app_navigator) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const provide = packages__hkbook__ThridLib__provide_1$460$462__lib__provide.ThridLib__provide_1$460$462__lib__provide;
  const current_index = packages__hkbook__provide__current_index.provide__current_index;
  const search_history = packages__hkbook__provide__search_history.provide__search_history;
  const category = packages__hkbook__provide__category.provide__category;
  const binding = packages__flutter_web__animation.src__widgets__binding;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const app_scene = packages__hkbook__app__app_navigator.app__app_scene;
  const main = Object.create(dart.library);
  let ProviderOfCurrentIndexProvice = () => (ProviderOfCurrentIndexProvice = dart.constFn(provide.Provider$(current_index.CurrentIndexProvice)))();
  let ProviderOfHistoryProvide = () => (ProviderOfHistoryProvide = dart.constFn(provide.Provider$(search_history.HistoryProvide)))();
  let ProviderOfChildCategory = () => (ProviderOfChildCategory = dart.constFn(provide.Provider$(category.ChildCategory)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/main.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "providers",
        [_Location_column]: 7,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/main.dart"
      });
    }
  });
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C4;
  let C5;
  let C3;
  let C2;
  main.main = function main$() {
    let t0;
    let providers = new provide.Providers.new();
    let currentIndexProvice = new current_index.CurrentIndexProvice.new();
    let historyProvice = new search_history.HistoryProvide.new();
    let childCategory = new category.ChildCategory.new();
    t0 = providers;
    t0.provide(current_index.CurrentIndexProvice, ProviderOfCurrentIndexProvice().value(currentIndexProvice));
    t0.provide(search_history.HistoryProvide, ProviderOfHistoryProvide().value(historyProvice));
    t0.provide(category.ChildCategory, ProviderOfChildCategory().value(childCategory));
    t0;
    binding.runApp(new provide.ProviderNode.new({child: new app_scene.AppScene.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), providers: providers, $creationLocationd_0dea112b090073317d4: C2 || CT.C2}));
  };
  dart.trackLibraries("packages/hkbook/main", {
    "package:hkbook/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgBM,oBAAY;AACZ,8BAAsB;AACtB,yBAAiB;AACjB,wBAAgB;AAMpB,SAJA,SAAS;IACP,8CAAO,sCAAqC,mBAAmB;IAC/D,0CAAO,iCAAgC,cAAc;IACrD,mCAAO,gCAA+B,aAAa;;AAYpD,IALD,eACE,qCACQ,8FACK,SAAS;EAQ1B","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
