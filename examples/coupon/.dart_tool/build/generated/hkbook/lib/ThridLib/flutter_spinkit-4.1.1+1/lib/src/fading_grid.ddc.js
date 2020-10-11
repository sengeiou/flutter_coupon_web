define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/tweens/delay_tween'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__hkbook__ThridLib__flutter_spinkit_4$461$461$431__lib__src__tweens__delay_tween) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const transitions = packages__flutter_web__animation.src__widgets__transitions;
  const container = packages__flutter_web__animation.src__widgets__container;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const ui = packages__flutter_web_ui__ui.ui;
  const delay_tween = packages__hkbook__ThridLib__flutter_spinkit_4$461$461$431__lib__src__tweens__delay_tween.ThridLib__flutter_spinkit_4$461$461$431__lib__src__tweens__delay_tween;
  const fading_grid = Object.create(dart.library);
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name]: "BoxShape.circle",
        index: 1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1200000
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 49,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 49,
        [_Location_line]: 87,
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
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 7,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart"
      });
    }
  });
  const _name = dart.privateName(box_border, "_name");
  let C0;
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C1;
  const color$ = dart.privateName(fading_grid, "SpinKitFadingGrid.color");
  const shape$ = dart.privateName(fading_grid, "SpinKitFadingGrid.shape");
  const size$ = dart.privateName(fading_grid, "SpinKitFadingGrid.size");
  const itemBuilder$ = dart.privateName(fading_grid, "SpinKitFadingGrid.itemBuilder");
  const duration$ = dart.privateName(fading_grid, "SpinKitFadingGrid.duration");
  const controller$ = dart.privateName(fading_grid, "SpinKitFadingGrid.controller");
  fading_grid.SpinKitFadingGrid = class SpinKitFadingGrid extends framework.StatefulWidget {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get itemBuilder() {
      return this[itemBuilder$];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new fading_grid._SpinKitFadingGridState.new();
    }
  };
  (fading_grid.SpinKitFadingGrid.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shape = opts && 'shape' in opts ? opts.shape : C0 || CT.C0;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C1 || CT.C1;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$] = color;
    this[shape$] = shape;
    this[size$] = size;
    this[itemBuilder$] = itemBuilder;
    this[duration$] = duration;
    this[controller$] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart", 13, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(shape != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart", 15, 16, "shape != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart", 16, 16, "size != null");
    fading_grid.SpinKitFadingGrid.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fading_grid.SpinKitFadingGrid.prototype;
  dart.addTypeTests(fading_grid.SpinKitFadingGrid);
  dart.setMethodSignature(fading_grid.SpinKitFadingGrid, () => ({
    __proto__: dart.getMethods(fading_grid.SpinKitFadingGrid.__proto__),
    createState: dart.fnType(fading_grid._SpinKitFadingGridState, [])
  }));
  dart.setLibraryUri(fading_grid.SpinKitFadingGrid, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart");
  dart.setFieldSignature(fading_grid.SpinKitFadingGrid, () => ({
    __proto__: dart.getFields(fading_grid.SpinKitFadingGrid.__proto__),
    color: dart.finalFieldType(ui.Color),
    shape: dart.finalFieldType(box_border.BoxShape),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller = dart.privateName(fading_grid, "_controller");
  const _circle = dart.privateName(fading_grid, "_circle");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C4;
  let C3;
  let C2;
  let C7;
  let C6;
  let C5;
  let C10;
  let C11;
  let C12;
  let C9;
  let C8;
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C20;
  let C21;
  let C18;
  let C17;
  let C24;
  let C23;
  let C22;
  let C27;
  let C26;
  let C25;
  let C30;
  let C31;
  let C32;
  let C29;
  let C28;
  let C35;
  let C36;
  let C34;
  let C33;
  let C39;
  let C40;
  let C41;
  let C38;
  let C37;
  let C44;
  let C43;
  let C42;
  let C47;
  let C46;
  let C45;
  let C50;
  let C51;
  let C52;
  let C49;
  let C48;
  let C55;
  let C56;
  let C57;
  let C54;
  let C53;
  let C60;
  let C61;
  let C59;
  let C58;
  const _itemBuilder = dart.privateName(fading_grid, "_itemBuilder");
  let C64;
  let C65;
  let C63;
  let C62;
  let C68;
  let C69;
  let C67;
  let C66;
  let C72;
  let C71;
  let C70;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(fading_grid.SpinKitFadingGrid) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(fading_grid.SpinKitFadingGrid)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(fading_grid.SpinKitFadingGrid));
  fading_grid._SpinKitFadingGridState = class _SpinKitFadingGridState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.repeat(), t0$);
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, mainAxisSize: flex.MainAxisSize.max, children: JSArrayOfWidget().of([new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([this[_circle](0, 1), new basic.SizedBox.new({width: dart.notNull(this.widget.size) / 8, $creationLocationd_0dea112b090073317d4: C2 || CT.C2}), this[_circle](1, 1), new basic.SizedBox.new({width: dart.notNull(this.widget.size) / 8, $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), this[_circle](2, 2)]), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: dart.notNull(this.widget.size) / 8, width: this.widget.size, $creationLocationd_0dea112b090073317d4: C13 || CT.C13})]), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([this[_circle](3, 4), new basic.SizedBox.new({width: dart.notNull(this.widget.size) / 8, $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), this[_circle](4, 1), new basic.SizedBox.new({width: dart.notNull(this.widget.size) / 8, $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), this[_circle](5, 2)]), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: dart.notNull(this.widget.size) / 8, width: this.widget.size, $creationLocationd_0dea112b090073317d4: C33 || CT.C33})]), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([this[_circle](6, 4), new basic.SizedBox.new({width: dart.notNull(this.widget.size) / 8, $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), this[_circle](7, 3), new basic.SizedBox.new({width: dart.notNull(this.widget.size) / 8, $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), this[_circle](8, 3)]), $creationLocationd_0dea112b090073317d4: C48 || CT.C48})]), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58});
    }
    [_circle](index, i) {
      return new transitions.FadeTransition.new({opacity: new delay_tween.DelayTween.new({begin: 0.4, end: 0.9, delay: 0.3 * (dart.notNull(i) - 1)}).animate(this[_controller]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(dart.notNull(this.widget.size) / 4), child: this[_itemBuilder](index), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66});
    }
    [_itemBuilder](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: this.widget.shape}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70});
    }
  };
  (fading_grid._SpinKitFadingGridState.new = function() {
    this[_controller] = null;
    fading_grid._SpinKitFadingGridState.__proto__.new.call(this);
    ;
  }).prototype = fading_grid._SpinKitFadingGridState.prototype;
  dart.addTypeTests(fading_grid._SpinKitFadingGridState);
  dart.setMethodSignature(fading_grid._SpinKitFadingGridState, () => ({
    __proto__: dart.getMethods(fading_grid._SpinKitFadingGridState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_circle]: dart.fnType(framework.Widget, [core.int, core.int]),
    [_itemBuilder]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(fading_grid._SpinKitFadingGridState, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart");
  dart.setFieldSignature(fading_grid._SpinKitFadingGridState, () => ({
    __proto__: dart.getFields(fading_grid._SpinKitFadingGridState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController)
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.dart": fading_grid
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fading_grid.dart"],"names":[],"mappings":"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","file":"fading_grid.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__fading_grid: fading_grid
  };
});

//# sourceMappingURL=fading_grid.ddc.js.map
