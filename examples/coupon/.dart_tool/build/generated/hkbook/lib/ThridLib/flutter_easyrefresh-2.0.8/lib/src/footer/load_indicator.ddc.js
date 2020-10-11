define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__foundation__assertions, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const sliver = packages__flutter_web__animation.src__rendering__sliver;
  const binding = packages__flutter_web__animation.src__scheduler__binding;
  const object = packages__flutter_web__animation.src__rendering__object;
  const layout_builder = packages__flutter_web__animation.src__widgets__layout_builder;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const container = packages__flutter_web__animation.src__widgets__container;
  const box = packages__flutter_web__animation.src__rendering__box;
  const change_notifier = packages__flutter_web__src__foundation__assertions.src__foundation__change_notifier;
  const basic_types = packages__flutter_web__src__animation__animation.src__painting__basic_types;
  const haptic_feedback = packages__flutter_web__src__animation__animation.src__services__haptic_feedback;
  const load_indicator = Object.create(dart.library);
  let DurationToNull = () => (DurationToNull = dart.constFn(dart.fnType(core.Null, [core.Duration])))();
  let ValueNotifierOfdouble = () => (ValueNotifierOfdouble = dart.constFn(change_notifier.ValueNotifier$(core.double)))();
  let ValueNotifierOfAxisDirection = () => (ValueNotifierOfAxisDirection = dart.constFn(change_notifier.ValueNotifier$(basic_types.AxisDirection)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToLoadMode = () => (VoidToLoadMode = dart.constFn(dart.fnType(load_indicator.LoadMode, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndBoxConstraintsToWidget = () => (BuildContextAndBoxConstraintsToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: load_indicator.LoadMode.prototype,
        [_name$]: "LoadMode.inactive",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: load_indicator.LoadMode.prototype,
        [_name$]: "LoadMode.drag",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: load_indicator.LoadMode.prototype,
        [_name$]: "LoadMode.armed",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: load_indicator.LoadMode.prototype,
        [_name$]: "LoadMode.load",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: load_indicator.LoadMode.prototype,
        [_name$]: "LoadMode.loaded",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: load_indicator.LoadMode.prototype,
        [_name$]: "LoadMode.done",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], load_indicator.LoadMode);
    },
    get C8() {
      return C8 = dart.constList([], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 853,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 856,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 31,
        [_Location_line]: 855,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 856,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 854,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 859,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 860,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 858,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 863,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 866,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 31,
        [_Location_line]: 865,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 866,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 864,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 851,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 850,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 873,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 876,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 31,
        [_Location_line]: 875,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 876,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 874,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 25,
        [_Location_line]: 879,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 880,
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
        [_Location_column]: 23,
        [_Location_line]: 878,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 883,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 886,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 31,
        [_Location_line]: 885,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 886,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 884,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 871,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 870,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 891,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 816,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 815,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "loadIndicatorLayoutExtent",
        [_Location_column]: 7,
        [_Location_line]: 806,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hasLayoutExtent",
        [_Location_column]: 7,
        [_Location_line]: 807,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableInfiniteLoad",
        [_Location_column]: 7,
        [_Location_line]: 808,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "infiniteLoad",
        [_Location_column]: 7,
        [_Location_line]: 809,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "extraExtentNotifier",
        [_Location_column]: 7,
        [_Location_line]: 810,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "footerFloat",
        [_Location_column]: 7,
        [_Location_line]: 811,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "axisDirectionNotifier",
        [_Location_column]: 7,
        [_Location_line]: 812,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 815,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53, C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 805,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart"
      });
    }
  });
  const loadIndicatorLayoutExtent$ = dart.privateName(load_indicator, "_EasyRefreshSliverLoad.loadIndicatorLayoutExtent");
  const hasLayoutExtent$ = dart.privateName(load_indicator, "_EasyRefreshSliverLoad.hasLayoutExtent");
  const enableInfiniteLoad$ = dart.privateName(load_indicator, "_EasyRefreshSliverLoad.enableInfiniteLoad");
  const infiniteLoad$ = dart.privateName(load_indicator, "_EasyRefreshSliverLoad.infiniteLoad");
  const footerFloat$ = dart.privateName(load_indicator, "_EasyRefreshSliverLoad.footerFloat");
  const axisDirectionNotifier$ = dart.privateName(load_indicator, "_EasyRefreshSliverLoad.axisDirectionNotifier");
  const extraExtentNotifier$ = dart.privateName(load_indicator, "_EasyRefreshSliverLoad.extraExtentNotifier");
  load_indicator._EasyRefreshSliverLoad = class _EasyRefreshSliverLoad extends framework.SingleChildRenderObjectWidget {
    get loadIndicatorLayoutExtent() {
      return this[loadIndicatorLayoutExtent$];
    }
    set loadIndicatorLayoutExtent(value) {
      super.loadIndicatorLayoutExtent = value;
    }
    get hasLayoutExtent() {
      return this[hasLayoutExtent$];
    }
    set hasLayoutExtent(value) {
      super.hasLayoutExtent = value;
    }
    get enableInfiniteLoad() {
      return this[enableInfiniteLoad$];
    }
    set enableInfiniteLoad(value) {
      super.enableInfiniteLoad = value;
    }
    get infiniteLoad() {
      return this[infiniteLoad$];
    }
    set infiniteLoad(value) {
      super.infiniteLoad = value;
    }
    get footerFloat() {
      return this[footerFloat$];
    }
    set footerFloat(value) {
      super.footerFloat = value;
    }
    get axisDirectionNotifier() {
      return this[axisDirectionNotifier$];
    }
    set axisDirectionNotifier(value) {
      super.axisDirectionNotifier = value;
    }
    get extraExtentNotifier() {
      return this[extraExtentNotifier$];
    }
    set extraExtentNotifier(value) {
      super.extraExtentNotifier = value;
    }
    createRenderObject(context) {
      return new load_indicator._RenderEasyRefreshSliverLoad.new({loadIndicatorExtent: this.loadIndicatorLayoutExtent, hasLayoutExtent: this.hasLayoutExtent, enableInfiniteLoad: this.enableInfiniteLoad, infiniteLoad: this.infiniteLoad, extraExtentNotifier: this.extraExtentNotifier, footerFloat: this.footerFloat, axisDirectionNotifier: this.axisDirectionNotifier});
    }
    updateRenderObject(context, renderObject) {
      let t0;
      load_indicator._RenderEasyRefreshSliverLoad._check(renderObject);
      t0 = renderObject;
      t0.loadIndicatorLayoutExtent = this.loadIndicatorLayoutExtent;
      t0.hasLayoutExtent = this.hasLayoutExtent;
      t0.enableInfiniteLoad = this.enableInfiniteLoad;
      t0.footerFloat = this.footerFloat;
      t0;
    }
  };
  (load_indicator._EasyRefreshSliverLoad.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let loadIndicatorLayoutExtent = opts && 'loadIndicatorLayoutExtent' in opts ? opts.loadIndicatorLayoutExtent : 0;
    let hasLayoutExtent = opts && 'hasLayoutExtent' in opts ? opts.hasLayoutExtent : false;
    let enableInfiniteLoad = opts && 'enableInfiniteLoad' in opts ? opts.enableInfiniteLoad : true;
    let footerFloat = opts && 'footerFloat' in opts ? opts.footerFloat : false;
    let axisDirectionNotifier = opts && 'axisDirectionNotifier' in opts ? opts.axisDirectionNotifier : null;
    let infiniteLoad = opts && 'infiniteLoad' in opts ? opts.infiniteLoad : null;
    let extraExtentNotifier = opts && 'extraExtentNotifier' in opts ? opts.extraExtentNotifier : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[loadIndicatorLayoutExtent$] = loadIndicatorLayoutExtent;
    this[hasLayoutExtent$] = hasLayoutExtent;
    this[enableInfiniteLoad$] = enableInfiniteLoad;
    this[footerFloat$] = footerFloat;
    this[axisDirectionNotifier$] = axisDirectionNotifier;
    this[infiniteLoad$] = infiniteLoad;
    this[extraExtentNotifier$] = extraExtentNotifier;
    if (!(loadIndicatorLayoutExtent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 23, 16, "loadIndicatorLayoutExtent != null");
    if (!(dart.notNull(loadIndicatorLayoutExtent) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 24, 16, "loadIndicatorLayoutExtent >= 0.0");
    if (!(hasLayoutExtent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 25, 16, "hasLayoutExtent != null");
    load_indicator._EasyRefreshSliverLoad.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = load_indicator._EasyRefreshSliverLoad.prototype;
  dart.addTypeTests(load_indicator._EasyRefreshSliverLoad);
  dart.setMethodSignature(load_indicator._EasyRefreshSliverLoad, () => ({
    __proto__: dart.getMethods(load_indicator._EasyRefreshSliverLoad.__proto__),
    createRenderObject: dart.fnType(load_indicator._RenderEasyRefreshSliverLoad, [framework.BuildContext])
  }));
  dart.setLibraryUri(load_indicator._EasyRefreshSliverLoad, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart");
  dart.setFieldSignature(load_indicator._EasyRefreshSliverLoad, () => ({
    __proto__: dart.getFields(load_indicator._EasyRefreshSliverLoad.__proto__),
    loadIndicatorLayoutExtent: dart.finalFieldType(core.double),
    hasLayoutExtent: dart.finalFieldType(core.bool),
    enableInfiniteLoad: dart.finalFieldType(core.bool),
    infiniteLoad: dart.finalFieldType(dart.fnType(dart.void, [])),
    footerFloat: dart.finalFieldType(core.bool),
    axisDirectionNotifier: dart.finalFieldType(change_notifier.ValueNotifier$(basic_types.AxisDirection)),
    extraExtentNotifier: dart.finalFieldType(change_notifier.ValueNotifier$(core.double))
  }));
  const _triggerInfiniteLoad = dart.privateName(load_indicator, "_triggerInfiniteLoad");
  const _loadIndicatorExtent = dart.privateName(load_indicator, "_loadIndicatorExtent");
  const _enableInfiniteLoad = dart.privateName(load_indicator, "_enableInfiniteLoad");
  const _hasLayoutExtent = dart.privateName(load_indicator, "_hasLayoutExtent");
  const _footerFloat = dart.privateName(load_indicator, "_footerFloat");
  load_indicator._RenderEasyRefreshSliverLoad = class _RenderEasyRefreshSliverLoad extends sliver.RenderSliverSingleBoxAdapter {
    get loadIndicatorLayoutExtent() {
      return this[_loadIndicatorExtent];
    }
    set loadIndicatorLayoutExtent(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 110, 12, "value != null");
      if (!(dart.notNull(value) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 111, 12, "value >= 0.0");
      if (value == this[_loadIndicatorExtent]) return;
      this[_loadIndicatorExtent] = value;
      this.markNeedsLayout();
    }
    get hasLayoutExtent() {
      return this[_hasLayoutExtent];
    }
    set hasLayoutExtent(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 123, 12, "value != null");
      if (dart.equals(value, this[_hasLayoutExtent])) return;
      this[_hasLayoutExtent] = value;
      this.markNeedsLayout();
    }
    get enableInfiniteLoad() {
      return this[_enableInfiniteLoad];
    }
    set enableInfiniteLoad(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 133, 12, "value != null");
      if (dart.equals(value, this[_enableInfiniteLoad])) return;
      this[_enableInfiniteLoad] = value;
      this.markNeedsLayout();
    }
    get footerFloat() {
      return this[_footerFloat];
    }
    set footerFloat(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 143, 12, "value != null");
      if (dart.equals(value, this[_footerFloat])) return;
      this[_footerFloat] = value;
      this.markNeedsLayout();
    }
    get childSize() {
      return dart.equals(this.constraints.axis, basic_types.Axis.vertical) ? this.child.size.height : this.child.size.width;
    }
    performLayout() {
      let extraExtent = 0.0;
      if (dart.notNull(this.constraints.precedingScrollExtent) < dart.notNull(this.constraints.viewportMainAxisExtent)) {
        extraExtent = dart.notNull(this.constraints.viewportMainAxisExtent) - dart.notNull(this.constraints.precedingScrollExtent);
      }
      this.extraExtentNotifier.value = extraExtent;
      if (!dart.equals(this.constraints.growthDirection, sliver.GrowthDirection.forward)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 182, 12, "constraints.growthDirection == GrowthDirection.forward");
      if (dart.test(this.enableInfiniteLoad) && dart.notNull(this.extraExtentNotifier.value) < dart.notNull(this.constraints.remainingPaintExtent) && dart.notNull(this.constraints.remainingPaintExtent) > 1.0) {
        if (!dart.test(this[_triggerInfiniteLoad])) {
          this[_triggerInfiniteLoad] = true;
          this.infiniteLoad();
        }
      } else {
        if (dart.notNull(this.constraints.remainingPaintExtent) <= 1.0 || extraExtent > 0.0 || dart.test(this.enableInfiniteLoad) && this.extraExtentNotifier.value == this.constraints.remainingPaintExtent) {
          if (dart.equals(binding.SchedulerBinding.instance.schedulerPhase, binding.SchedulerPhase.idle)) {
            this[_triggerInfiniteLoad] = false;
          } else {
            binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timestamp => {
              this[_triggerInfiniteLoad] = false;
            }, DurationToNull()));
          }
        }
      }
      let layoutExtent = (dart.test(this[_hasLayoutExtent]) || dart.test(this.enableInfiniteLoad) ? 1.0 : 0.0) * dart.notNull(this[_loadIndicatorExtent]);
      let active = dart.notNull(this.constraints.remainingPaintExtent) > 1.0 || layoutExtent > (dart.test(this.enableInfiniteLoad) ? 1.0 : 0.0) * dart.notNull(this[_loadIndicatorExtent]);
      let overscrolledExtent = math.max(core.double, dart.notNull(this.constraints.remainingPaintExtent) + dart.notNull(dart.notNull(this.constraints.precedingScrollExtent) < dart.notNull(this[_loadIndicatorExtent]) ? this.constraints.scrollOffset : 0.0), 0.0);
      let isReverse = dart.equals(this.constraints.axisDirection, basic_types.AxisDirection.up) || dart.equals(this.constraints.axisDirection, basic_types.AxisDirection.left);
      this.axisDirectionNotifier.value = this.constraints.axisDirection;
      this.child.layout(this.constraints.asBoxConstraints({maxExtent: isReverse ? overscrolledExtent : dart.test(this[_hasLayoutExtent]) || dart.test(this.enableInfiniteLoad) ? dart.notNull(this[_loadIndicatorExtent]) > overscrolledExtent ? this[_loadIndicatorExtent] : overscrolledExtent : overscrolledExtent}), {parentUsesSize: true});
      if (active) {
        this.geometry = new sliver.SliverGeometry.new({scrollExtent: layoutExtent, paintOrigin: -dart.notNull(this.constraints.scrollOffset), paintExtent: math.max(core.double, math.min(core.double, math.max(core.double, this.childSize, layoutExtent), this.constraints.remainingPaintExtent) - dart.notNull(this.constraints.scrollOffset), 0.0), maxPaintExtent: math.max(core.double, math.min(core.double, math.max(core.double, this.childSize, layoutExtent), this.constraints.remainingPaintExtent) - dart.notNull(this.constraints.scrollOffset), 0.0), layoutExtent: math.min(core.double, math.max(core.double, layoutExtent - dart.notNull(this.constraints.scrollOffset), 0.0), this.constraints.remainingPaintExtent)});
      } else {
        this.geometry = sliver.SliverGeometry.zero;
      }
    }
    paint(paintContext, offset) {
      if (dart.notNull(this.constraints.remainingPaintExtent) > 0.0 || dart.notNull(this.constraints.scrollOffset) + dart.notNull(this.childSize) > 0) {
        paintContext.paintChild(this.child, offset);
      }
    }
    applyPaintTransform(child, transform) {
      object.RenderObject._check(child);
    }
  };
  (load_indicator._RenderEasyRefreshSliverLoad.new = function(opts) {
    let loadIndicatorExtent = opts && 'loadIndicatorExtent' in opts ? opts.loadIndicatorExtent : null;
    let hasLayoutExtent = opts && 'hasLayoutExtent' in opts ? opts.hasLayoutExtent : null;
    let enableInfiniteLoad = opts && 'enableInfiniteLoad' in opts ? opts.enableInfiniteLoad : null;
    let infiniteLoad = opts && 'infiniteLoad' in opts ? opts.infiniteLoad : null;
    let extraExtentNotifier = opts && 'extraExtentNotifier' in opts ? opts.extraExtentNotifier : null;
    let axisDirectionNotifier = opts && 'axisDirectionNotifier' in opts ? opts.axisDirectionNotifier : null;
    let footerFloat = opts && 'footerFloat' in opts ? opts.footerFloat : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[_triggerInfiniteLoad] = false;
    this.layoutExtentOffsetCompensation = 0.0;
    this.infiniteLoad = infiniteLoad;
    this.extraExtentNotifier = extraExtentNotifier;
    this.axisDirectionNotifier = axisDirectionNotifier;
    if (!(loadIndicatorExtent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 92, 16, "loadIndicatorExtent != null");
    if (!(dart.notNull(loadIndicatorExtent) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 93, 16, "loadIndicatorExtent >= 0.0");
    if (!(hasLayoutExtent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 94, 16, "hasLayoutExtent != null");
    this[_loadIndicatorExtent] = loadIndicatorExtent;
    this[_enableInfiniteLoad] = enableInfiniteLoad;
    this[_hasLayoutExtent] = hasLayoutExtent;
    this[_footerFloat] = footerFloat;
    load_indicator._RenderEasyRefreshSliverLoad.__proto__.new.call(this);
    this.child = child;
  }).prototype = load_indicator._RenderEasyRefreshSliverLoad.prototype;
  dart.addTypeTests(load_indicator._RenderEasyRefreshSliverLoad);
  dart.setMethodSignature(load_indicator._RenderEasyRefreshSliverLoad, () => ({
    __proto__: dart.getMethods(load_indicator._RenderEasyRefreshSliverLoad.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(load_indicator._RenderEasyRefreshSliverLoad, () => ({
    __proto__: dart.getGetters(load_indicator._RenderEasyRefreshSliverLoad.__proto__),
    loadIndicatorLayoutExtent: core.double,
    hasLayoutExtent: core.bool,
    enableInfiniteLoad: core.bool,
    footerFloat: core.bool,
    childSize: core.double
  }));
  dart.setSetterSignature(load_indicator._RenderEasyRefreshSliverLoad, () => ({
    __proto__: dart.getSetters(load_indicator._RenderEasyRefreshSliverLoad.__proto__),
    loadIndicatorLayoutExtent: core.double,
    hasLayoutExtent: core.bool,
    enableInfiniteLoad: core.bool,
    footerFloat: core.bool
  }));
  dart.setLibraryUri(load_indicator._RenderEasyRefreshSliverLoad, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart");
  dart.setFieldSignature(load_indicator._RenderEasyRefreshSliverLoad, () => ({
    __proto__: dart.getFields(load_indicator._RenderEasyRefreshSliverLoad.__proto__),
    axisDirectionNotifier: dart.finalFieldType(change_notifier.ValueNotifier$(basic_types.AxisDirection)),
    [_loadIndicatorExtent]: dart.fieldType(core.double),
    [_hasLayoutExtent]: dart.fieldType(core.bool),
    [_enableInfiniteLoad]: dart.fieldType(core.bool),
    [_footerFloat]: dart.fieldType(core.bool),
    infiniteLoad: dart.finalFieldType(dart.fnType(dart.void, [])),
    extraExtentNotifier: dart.finalFieldType(change_notifier.ValueNotifier$(core.double)),
    [_triggerInfiniteLoad]: dart.fieldType(core.bool),
    layoutExtentOffsetCompensation: dart.fieldType(core.double)
  }));
  const _name$ = dart.privateName(load_indicator, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  load_indicator.LoadMode = class LoadMode extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (load_indicator.LoadMode.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = load_indicator.LoadMode.prototype;
  dart.addTypeTests(load_indicator.LoadMode);
  dart.setLibraryUri(load_indicator.LoadMode, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart");
  dart.setFieldSignature(load_indicator.LoadMode, () => ({
    __proto__: dart.getFields(load_indicator.LoadMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(load_indicator.LoadMode, ['toString']);
  load_indicator.LoadMode.inactive = C0 || CT.C0;
  load_indicator.LoadMode.drag = C1 || CT.C1;
  load_indicator.LoadMode.armed = C2 || CT.C2;
  load_indicator.LoadMode.load = C3 || CT.C3;
  load_indicator.LoadMode.loaded = C4 || CT.C4;
  load_indicator.LoadMode.done = C5 || CT.C5;
  load_indicator.LoadMode.values = C6 || CT.C6;
  const loadTriggerPullDistance$ = dart.privateName(load_indicator, "EasyRefreshSliverLoadControl.loadTriggerPullDistance");
  const loadIndicatorExtent$ = dart.privateName(load_indicator, "EasyRefreshSliverLoadControl.loadIndicatorExtent");
  const builder$ = dart.privateName(load_indicator, "EasyRefreshSliverLoadControl.builder");
  const onLoad$ = dart.privateName(load_indicator, "EasyRefreshSliverLoadControl.onLoad");
  const completeDuration$ = dart.privateName(load_indicator, "EasyRefreshSliverLoadControl.completeDuration");
  const bindLoadIndicator$ = dart.privateName(load_indicator, "EasyRefreshSliverLoadControl.bindLoadIndicator");
  const enableControlFinishLoad$ = dart.privateName(load_indicator, "EasyRefreshSliverLoadControl.enableControlFinishLoad");
  const enableInfiniteLoad$0 = dart.privateName(load_indicator, "EasyRefreshSliverLoadControl.enableInfiniteLoad");
  const enableHapticFeedback$ = dart.privateName(load_indicator, "EasyRefreshSliverLoadControl.enableHapticFeedback");
  const focusNotifier$ = dart.privateName(load_indicator, "EasyRefreshSliverLoadControl.focusNotifier");
  const taskNotifier$ = dart.privateName(load_indicator, "EasyRefreshSliverLoadControl.taskNotifier");
  const callLoadNotifier$ = dart.privateName(load_indicator, "EasyRefreshSliverLoadControl.callLoadNotifier");
  const taskIndependence$ = dart.privateName(load_indicator, "EasyRefreshSliverLoadControl.taskIndependence");
  const footerFloat$0 = dart.privateName(load_indicator, "EasyRefreshSliverLoadControl.footerFloat");
  load_indicator.EasyRefreshSliverLoadControl = class EasyRefreshSliverLoadControl extends framework.StatefulWidget {
    get loadTriggerPullDistance() {
      return this[loadTriggerPullDistance$];
    }
    set loadTriggerPullDistance(value) {
      super.loadTriggerPullDistance = value;
    }
    get loadIndicatorExtent() {
      return this[loadIndicatorExtent$];
    }
    set loadIndicatorExtent(value) {
      super.loadIndicatorExtent = value;
    }
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    get onLoad() {
      return this[onLoad$];
    }
    set onLoad(value) {
      super.onLoad = value;
    }
    get completeDuration() {
      return this[completeDuration$];
    }
    set completeDuration(value) {
      super.completeDuration = value;
    }
    get bindLoadIndicator() {
      return this[bindLoadIndicator$];
    }
    set bindLoadIndicator(value) {
      super.bindLoadIndicator = value;
    }
    get enableControlFinishLoad() {
      return this[enableControlFinishLoad$];
    }
    set enableControlFinishLoad(value) {
      super.enableControlFinishLoad = value;
    }
    get enableInfiniteLoad() {
      return this[enableInfiniteLoad$0];
    }
    set enableInfiniteLoad(value) {
      super.enableInfiniteLoad = value;
    }
    get enableHapticFeedback() {
      return this[enableHapticFeedback$];
    }
    set enableHapticFeedback(value) {
      super.enableHapticFeedback = value;
    }
    get focusNotifier() {
      return this[focusNotifier$];
    }
    set focusNotifier(value) {
      super.focusNotifier = value;
    }
    get taskNotifier() {
      return this[taskNotifier$];
    }
    set taskNotifier(value) {
      super.taskNotifier = value;
    }
    get callLoadNotifier() {
      return this[callLoadNotifier$];
    }
    set callLoadNotifier(value) {
      super.callLoadNotifier = value;
    }
    get taskIndependence() {
      return this[taskIndependence$];
    }
    set taskIndependence(value) {
      super.taskIndependence = value;
    }
    get footerFloat() {
      return this[footerFloat$0];
    }
    set footerFloat(value) {
      super.footerFloat = value;
    }
    createState() {
      return new load_indicator._EasyRefreshSliverLoadControlState.new();
    }
  };
  (load_indicator.EasyRefreshSliverLoadControl.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let loadTriggerPullDistance = opts && 'loadTriggerPullDistance' in opts ? opts.loadTriggerPullDistance : 100;
    let loadIndicatorExtent = opts && 'loadIndicatorExtent' in opts ? opts.loadIndicatorExtent : 60;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let completeDuration = opts && 'completeDuration' in opts ? opts.completeDuration : null;
    let onLoad = opts && 'onLoad' in opts ? opts.onLoad : null;
    let focusNotifier = opts && 'focusNotifier' in opts ? opts.focusNotifier : null;
    let taskNotifier = opts && 'taskNotifier' in opts ? opts.taskNotifier : null;
    let callLoadNotifier = opts && 'callLoadNotifier' in opts ? opts.callLoadNotifier : null;
    let taskIndependence = opts && 'taskIndependence' in opts ? opts.taskIndependence : null;
    let bindLoadIndicator = opts && 'bindLoadIndicator' in opts ? opts.bindLoadIndicator : null;
    let enableControlFinishLoad = opts && 'enableControlFinishLoad' in opts ? opts.enableControlFinishLoad : false;
    let enableInfiniteLoad = opts && 'enableInfiniteLoad' in opts ? opts.enableInfiniteLoad : true;
    let enableHapticFeedback = opts && 'enableHapticFeedback' in opts ? opts.enableHapticFeedback : false;
    let footerFloat = opts && 'footerFloat' in opts ? opts.footerFloat : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[loadTriggerPullDistance$] = loadTriggerPullDistance;
    this[loadIndicatorExtent$] = loadIndicatorExtent;
    this[builder$] = builder;
    this[completeDuration$] = completeDuration;
    this[onLoad$] = onLoad;
    this[focusNotifier$] = focusNotifier;
    this[taskNotifier$] = taskNotifier;
    this[callLoadNotifier$] = callLoadNotifier;
    this[taskIndependence$] = taskIndependence;
    this[bindLoadIndicator$] = bindLoadIndicator;
    this[enableControlFinishLoad$] = enableControlFinishLoad;
    this[enableInfiniteLoad$0] = enableInfiniteLoad;
    this[enableHapticFeedback$] = enableHapticFeedback;
    this[footerFloat$0] = footerFloat;
    if (!(loadTriggerPullDistance != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 429, 16, "loadTriggerPullDistance != null");
    if (!(dart.notNull(loadTriggerPullDistance) > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 430, 16, "loadTriggerPullDistance > 0.0");
    if (!(loadIndicatorExtent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 431, 16, "loadIndicatorExtent != null");
    if (!(dart.notNull(loadIndicatorExtent) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 432, 16, "loadIndicatorExtent >= 0.0");
    if (!(dart.notNull(loadTriggerPullDistance) >= dart.notNull(loadIndicatorExtent))) dart.assertFailed("The refresh indicator cannot take more space in its final state " + "than the amount initially created by overscrolling.", "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart", 434, 13, "loadTriggerPullDistance >= loadIndicatorExtent");
    load_indicator.EasyRefreshSliverLoadControl.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = load_indicator.EasyRefreshSliverLoadControl.prototype;
  dart.addTypeTests(load_indicator.EasyRefreshSliverLoadControl);
  dart.setMethodSignature(load_indicator.EasyRefreshSliverLoadControl, () => ({
    __proto__: dart.getMethods(load_indicator.EasyRefreshSliverLoadControl.__proto__),
    createState: dart.fnType(load_indicator._EasyRefreshSliverLoadControlState, [])
  }));
  dart.setLibraryUri(load_indicator.EasyRefreshSliverLoadControl, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart");
  dart.setFieldSignature(load_indicator.EasyRefreshSliverLoadControl, () => ({
    __proto__: dart.getFields(load_indicator.EasyRefreshSliverLoadControl.__proto__),
    loadTriggerPullDistance: dart.finalFieldType(core.double),
    loadIndicatorExtent: dart.finalFieldType(core.double),
    builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, load_indicator.LoadMode, core.double, core.double, core.double, basic_types.AxisDirection, core.bool, core.Duration, core.bool, core.bool, core.bool])),
    onLoad: dart.finalFieldType(dart.fnType(async.Future$(dart.void), [])),
    completeDuration: dart.finalFieldType(core.Duration),
    bindLoadIndicator: dart.finalFieldType(dart.fnType(dart.void, [dart.fnType(dart.void, [], {noMore: core.bool, success: core.bool}, {}), dart.fnType(dart.void, [])])),
    enableControlFinishLoad: dart.finalFieldType(core.bool),
    enableInfiniteLoad: dart.finalFieldType(core.bool),
    enableHapticFeedback: dart.finalFieldType(core.bool),
    focusNotifier: dart.finalFieldType(change_notifier.ValueNotifier$(core.bool)),
    taskNotifier: dart.finalFieldType(change_notifier.ValueNotifier$(core.bool)),
    callLoadNotifier: dart.finalFieldType(change_notifier.ValueNotifier$(core.bool)),
    taskIndependence: dart.finalFieldType(core.bool),
    footerFloat: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(load_indicator.EasyRefreshSliverLoadControl, {
    /*load_indicator.EasyRefreshSliverLoadControl._defaultLoadTriggerPullDistance*/get _defaultLoadTriggerPullDistance() {
      return 100;
    },
    /*load_indicator.EasyRefreshSliverLoadControl._defaultLoadIndicatorExtent*/get _defaultLoadIndicatorExtent() {
      return 60;
    }
  });
  const _loadTask = dart.privateName(load_indicator, "_loadTask");
  const _success = dart.privateName(load_indicator, "_success");
  const _noMore = dart.privateName(load_indicator, "_noMore");
  const _axisDirectionNotifier = dart.privateName(load_indicator, "_axisDirectionNotifier");
  const _focus = dart.privateName(load_indicator, "_focus");
  const _infiniteLoad = dart.privateName(load_indicator, "_infiniteLoad");
  let C8;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C7;
  let C9;
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C17;
  let C15;
  let C14;
  let C18;
  let C19;
  let C22;
  let C23;
  let C21;
  let C20;
  let C26;
  let C25;
  let C24;
  let C27;
  let C28;
  let C31;
  let C32;
  let C30;
  let C29;
  let C35;
  let C36;
  let C34;
  let C33;
  let C37;
  let C38;
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C44;
  let C43;
  let C46;
  let C49;
  let C48;
  let C47;
  let C52;
  let C53;
  let C54;
  let C55;
  let C56;
  let C57;
  let C58;
  let C59;
  let C51;
  let C50;
  load_indicator._EasyRefreshSliverLoadControlState = class _EasyRefreshSliverLoadControlState extends framework.State$(load_indicator.EasyRefreshSliverLoadControl) {
    get loadTask() {
      return this[_loadTask];
    }
    get hasTask() {
      return dart.test(this.widget.taskIndependence) ? this[_loadTask] != null : this.widget.taskNotifier.value;
    }
    set loadTask(task) {
      this[_loadTask] = task;
      if (!dart.test(this.widget.taskIndependence)) this.widget.taskNotifier.value = task != null;
    }
    get [_focus]() {
      return this.widget.focusNotifier.value;
    }
    initState() {
      super.initState();
      this.loadState = load_indicator.LoadMode.inactive;
      this.extraExtentNotifier = new (ValueNotifierOfdouble()).new(0.0);
      this[_axisDirectionNotifier] = new (ValueNotifierOfAxisDirection()).new(basic_types.AxisDirection.down);
      if (this.widget.bindLoadIndicator != null) {
        this.widget.bindLoadIndicator(dart.bind(this, 'finishLoad'), dart.bind(this, 'resetLoadState'));
      }
    }
    dispose() {
      super.dispose();
      this.extraExtentNotifier.dispose();
    }
    finishLoad(opts) {
      let success = opts && 'success' in opts ? opts.success : true;
      let noMore = opts && 'noMore' in opts ? opts.noMore : false;
      this[_success] = success;
      this[_noMore] = dart.equals(this[_success], false) ? false : noMore;
      if (dart.test(this.widget.enableControlFinishLoad) && this.loadTask != null) {
        if (dart.test(this.widget.enableInfiniteLoad)) {
          this.loadState = load_indicator.LoadMode.inactive;
        }
        this.setState(dart.fn(() => this.loadTask = null, VoidToNull()));
        this.loadState = this.transitionNextState();
      }
    }
    resetLoadState() {
      if (dart.test(this.mounted)) {
        this.setState(dart.fn(() => {
          this[_success] = true;
          this[_noMore] = false;
          this.loadState = load_indicator.LoadMode.inactive;
          this.hasSliverLayoutExtent = false;
        }, VoidToNull()));
      }
    }
    [_infiniteLoad]() {
      if (!dart.test(this.hasTask) && dart.test(this.widget.enableInfiniteLoad) && !dart.equals(this[_noMore], true) && !dart.test(this.widget.callLoadNotifier.value)) {
        if (dart.test(this.widget.enableHapticFeedback)) {
          haptic_feedback.HapticFeedback.mediumImpact();
        }
        binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timestamp => {
          let t0;
          this.loadState = load_indicator.LoadMode.load;
          this.loadTask = (t0 = this.widget.onLoad(), t0.then(core.Null, dart.fn(_ => {
            if (dart.test(this.mounted) && !dart.test(this.widget.enableControlFinishLoad)) {
              this.loadState = load_indicator.LoadMode.load;
              this.setState(dart.fn(() => this.loadTask = null, VoidToNull()));
              this.loadState = this.transitionNextState();
            }
          }, voidToNull())), t0);
          this.setState(dart.fn(() => this.hasSliverLayoutExtent = true, VoidTobool()));
        }, DurationToNull()));
      }
    }
    transitionNextState() {
      let nextState = null;
      if (dart.equals(this[_noMore], true) && dart.test(this.widget.enableInfiniteLoad)) {
        return this.loadState;
      } else if (dart.equals(this[_noMore], true) && !dart.equals(this.loadState, load_indicator.LoadMode.load) && !dart.equals(this.loadState, load_indicator.LoadMode.loaded) && !dart.equals(this.loadState, load_indicator.LoadMode.done)) {
        return this.loadState;
      } else if (dart.test(this.widget.enableInfiniteLoad) && dart.equals(this.loadState, load_indicator.LoadMode.done)) {
        return load_indicator.LoadMode.inactive;
      }
      const goToDone = () => {
        nextState = load_indicator.LoadMode.done;
        this.loadState = load_indicator.LoadMode.done;
        if (dart.equals(binding.SchedulerBinding.instance.schedulerPhase, binding.SchedulerPhase.idle)) {
          this.setState(dart.fn(() => this.hasSliverLayoutExtent = false, VoidTobool()));
        } else {
          binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timestamp => {
            this.setState(dart.fn(() => this.hasSliverLayoutExtent = false, VoidTobool()));
          }, DurationToNull()));
        }
      };
      dart.fn(goToDone, VoidTovoid());
      const goToFinish = () => {
        let state = load_indicator.LoadMode.loaded;
        if (this.widget.completeDuration == null || dart.test(this.widget.enableInfiniteLoad)) {
          goToDone();
          return null;
        } else {
          FutureOfNull().delayed(this.widget.completeDuration, dart.fn(() => {
            if (dart.test(this.mounted)) {
              goToDone();
            }
          }, VoidToNull()));
          return state;
        }
      };
      dart.fn(goToFinish, VoidToLoadMode());
      let labelState = this.loadState;
      SL0:
        while (true) {
          switch (labelState) {
            case C0 || CT.C0:
            {
              if (dart.notNull(this.latestIndicatorBoxExtent) <= 0 || !dart.test(this[_focus]) && !dart.test(this.widget.callLoadNotifier.value)) {
                return load_indicator.LoadMode.inactive;
              } else {
                nextState = load_indicator.LoadMode.drag;
              }
              labelState = C1 || CT.C1;
              continue SL0;
            }
            case C1 || CT.C1:
            {
              if (this.latestIndicatorBoxExtent === 0) {
                return load_indicator.LoadMode.inactive;
              } else if (dart.notNull(this.latestIndicatorBoxExtent) <= dart.notNull(this.widget.loadTriggerPullDistance)) {
                if (dart.test(this.hasSliverLayoutExtent) && !dart.test(this.hasTask)) {
                  binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timestamp => {
                    this.setState(dart.fn(() => this.hasSliverLayoutExtent = false, VoidTobool()));
                  }, DurationToNull()));
                }
                return load_indicator.LoadMode.drag;
              } else {
                binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timestamp => {
                  this.setState(dart.fn(() => this.hasSliverLayoutExtent = true, VoidTobool()));
                }, DurationToNull()));
                if (this.widget.onLoad != null && !dart.test(this.hasTask)) {
                  if (!dart.test(this[_focus])) {
                    if (dart.test(this.widget.callLoadNotifier.value)) {
                      this.widget.callLoadNotifier.value = false;
                    }
                    if (dart.test(this.widget.enableHapticFeedback)) {
                      haptic_feedback.HapticFeedback.mediumImpact();
                    }
                    binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timestamp => {
                      let t0;
                      this.loadTask = (t0 = this.widget.onLoad(), t0.then(core.Null, dart.fn(_ => {
                        if (dart.test(this.mounted) && !dart.test(this.widget.enableControlFinishLoad)) {
                          if (dart.test(this.widget.enableInfiniteLoad)) {
                            this.loadState = load_indicator.LoadMode.inactive;
                          }
                          this.setState(dart.fn(() => this.loadTask = null, VoidToNull()));
                          if (!dart.test(this.widget.enableInfiniteLoad)) this.loadState = this.transitionNextState();
                        }
                      }, voidToNull())), t0);
                    }, DurationToNull()));
                    return load_indicator.LoadMode.armed;
                  }
                  return load_indicator.LoadMode.drag;
                }
                return load_indicator.LoadMode.drag;
              }
              break SL0;
            }
            case C2 || CT.C2:
            {
              if (dart.equals(this.loadState, load_indicator.LoadMode.armed) && !dart.test(this.hasTask)) {
                let state = goToFinish();
                if (state != null) return state;
                labelState = C5 || CT.C5;
                continue SL0;
              }
              if (dart.notNull(this.latestIndicatorBoxExtent) > dart.notNull(this.widget.loadIndicatorExtent)) {
                return load_indicator.LoadMode.armed;
              } else {
                nextState = load_indicator.LoadMode.load;
              }
              labelState = C3 || CT.C3;
              continue SL0;
            }
            case C3 || CT.C3:
            {
              if (this.loadTask != null) {
                return load_indicator.LoadMode.load;
              } else {
                let state = goToFinish();
                if (state != null) return state;
              }
              labelState = C5 || CT.C5;
              continue SL0;
            }
            case C5 || CT.C5:
            {
              if (dart.notNull(this.latestIndicatorBoxExtent) > dart.notNull(this.widget.loadTriggerPullDistance) * 0.1) {
                return load_indicator.LoadMode.done;
              } else {
                nextState = load_indicator.LoadMode.inactive;
              }
              break SL0;
            }
            case C4 || CT.C4:
            {
              nextState = this.loadState;
              break SL0;
            }
            default:
            {
              break SL0;
              break SL0;
            }
          }
          break;
        }
      return nextState;
    }
    build(context) {
      return new load_indicator._EasyRefreshSliverLoad.new({loadIndicatorLayoutExtent: this.widget.loadIndicatorExtent, hasLayoutExtent: this.hasSliverLayoutExtent, enableInfiniteLoad: this.widget.enableInfiniteLoad, infiniteLoad: dart.bind(this, _infiniteLoad), extraExtentNotifier: this.extraExtentNotifier, footerFloat: this.widget.footerFloat, axisDirectionNotifier: this[_axisDirectionNotifier], child: new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
            let t0, t0$;
            let isVertical = dart.equals(this[_axisDirectionNotifier].value, basic_types.AxisDirection.down) || dart.equals(this[_axisDirectionNotifier].value, basic_types.AxisDirection.up);
            let isReverse = dart.equals(this[_axisDirectionNotifier].value, basic_types.AxisDirection.up) || dart.equals(this[_axisDirectionNotifier].value, basic_types.AxisDirection.left);
            this.latestIndicatorBoxExtent = dart.notNull(isVertical ? constraints.maxHeight : constraints.maxWidth) - dart.notNull(this.extraExtentNotifier.value);
            this.loadState = this.transitionNextState();
            if (dart.notNull(this.extraExtentNotifier.value) > 0.0 && dart.equals(this.loadState, load_indicator.LoadMode.loaded) && this.loadTask == null) {
              this.loadState = load_indicator.LoadMode.inactive;
            }
            if (this.widget.builder != null && dart.notNull(this.latestIndicatorBoxExtent) >= 0) {
              let child = this.widget.builder(context, this.loadState, this.latestIndicatorBoxExtent, this.widget.loadTriggerPullDistance, this.widget.loadIndicatorExtent, this[_axisDirectionNotifier].value, this.widget.footerFloat, this.widget.completeDuration, this.widget.enableInfiniteLoad, (t0 = this[_success], t0 == null ? true : t0), (t0$ = this[_noMore], t0$ == null ? false : t0$));
              return isVertical ? new basic.Column.new({children: JSArrayOfWidget().of([isReverse ? new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C7 || CT.C7}) : new basic.Expanded.new({flex: 1, child: new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), new container.Container.new({height: this.latestIndicatorBoxExtent, child: child, $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), !isReverse ? new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C18 || CT.C18}) : new basic.Expanded.new({flex: 1, child: new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20})]), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}) : new basic.Row.new({children: JSArrayOfWidget().of([isReverse ? new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C27 || CT.C27}) : new basic.Expanded.new({flex: 1, child: new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), new container.Container.new({width: this.latestIndicatorBoxExtent, child: child, $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), !isReverse ? new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C37 || CT.C37}) : new basic.Expanded.new({flex: 1, child: new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39})]), $creationLocationd_0dea112b090073317d4: C43 || CT.C43});
            }
            return new container.Container.new({$creationLocationd_0dea112b090073317d4: C46 || CT.C46});
          }, BuildContextAndBoxConstraintsToWidget()), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50});
    }
  };
  (load_indicator._EasyRefreshSliverLoadControlState.new = function() {
    this.loadState = null;
    this[_loadTask] = null;
    this.latestIndicatorBoxExtent = 0.0;
    this.hasSliverLayoutExtent = false;
    this[_success] = null;
    this[_noMore] = null;
    this.extraExtentNotifier = null;
    this[_axisDirectionNotifier] = null;
    load_indicator._EasyRefreshSliverLoadControlState.__proto__.new.call(this);
    ;
  }).prototype = load_indicator._EasyRefreshSliverLoadControlState.prototype;
  dart.addTypeTests(load_indicator._EasyRefreshSliverLoadControlState);
  dart.setMethodSignature(load_indicator._EasyRefreshSliverLoadControlState, () => ({
    __proto__: dart.getMethods(load_indicator._EasyRefreshSliverLoadControlState.__proto__),
    finishLoad: dart.fnType(dart.void, [], {noMore: core.bool, success: core.bool}, {}),
    resetLoadState: dart.fnType(dart.void, []),
    [_infiniteLoad]: dart.fnType(dart.void, []),
    transitionNextState: dart.fnType(load_indicator.LoadMode, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(load_indicator._EasyRefreshSliverLoadControlState, () => ({
    __proto__: dart.getGetters(load_indicator._EasyRefreshSliverLoadControlState.__proto__),
    loadTask: async.Future$(dart.void),
    hasTask: core.bool,
    [_focus]: core.bool
  }));
  dart.setSetterSignature(load_indicator._EasyRefreshSliverLoadControlState, () => ({
    __proto__: dart.getSetters(load_indicator._EasyRefreshSliverLoadControlState.__proto__),
    loadTask: async.Future$(dart.void)
  }));
  dart.setLibraryUri(load_indicator._EasyRefreshSliverLoadControlState, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart");
  dart.setFieldSignature(load_indicator._EasyRefreshSliverLoadControlState, () => ({
    __proto__: dart.getFields(load_indicator._EasyRefreshSliverLoadControlState.__proto__),
    loadState: dart.fieldType(load_indicator.LoadMode),
    [_loadTask]: dart.fieldType(async.Future$(dart.void)),
    latestIndicatorBoxExtent: dart.fieldType(core.double),
    hasSliverLayoutExtent: dart.fieldType(core.bool),
    [_success]: dart.fieldType(core.bool),
    [_noMore]: dart.fieldType(core.bool),
    extraExtentNotifier: dart.fieldType(change_notifier.ValueNotifier$(core.double)),
    [_axisDirectionNotifier]: dart.fieldType(change_notifier.ValueNotifier$(basic_types.AxisDirection))
  }));
  dart.defineLazy(load_indicator._EasyRefreshSliverLoadControlState, {
    /*load_indicator._EasyRefreshSliverLoadControlState._inactiveResetOverscrollFraction*/get _inactiveResetOverscrollFraction() {
      return 0.1;
    }
  });
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator", {
    "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.dart": load_indicator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["load_indicator.dart"],"names":[],"mappings":"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","file":"load_indicator.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_easyrefresh_2$460$468__lib__src__footer__load_indicator: load_indicator
  };
});

//# sourceMappingURL=load_indicator.ddc.js.map
