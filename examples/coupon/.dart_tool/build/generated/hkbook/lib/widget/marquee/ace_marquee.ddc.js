define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web_ui/ui', 'packages/hkbook/widget/marquee/ace_marquee_transition'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web__src__foundation__assertions, packages__flutter_web_ui__ui, packages__hkbook__widget__marquee__ace_marquee_transition) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const container = packages__flutter_web__animation.src__widgets__container;
  const gesture_detector = packages__flutter_web__animation.src__widgets__gesture_detector;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const animated_switcher = packages__flutter_web__animation.src__widgets__animated_switcher;
  const basic_types = packages__flutter_web__src__animation__animation.src__painting__basic_types;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const key = packages__flutter_web__src__foundation__assertions.src__foundation__key;
  const ui = packages__flutter_web_ui__ui.ui;
  const ace_marquee_transition = packages__hkbook__widget__marquee__ace_marquee_transition.widget__marquee__ace_marquee_transition;
  const ace_marquee = Object.create(dart.library);
  const $modulo = dartx['%'];
  const $length = dartx.length;
  const $clear = dartx.clear;
  const $_get = dartx._get;
  const $add = dartx.add;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let TimerTovoid = () => (TimerTovoid = dart.constFn(dart.fnType(dart.void, [async.Timer])))();
  let ValueKeyOfint = () => (ValueKeyOfint = dart.constFn(key.ValueKey$(core.int)))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  let WidgetAndAnimationOfdoubleToACEMarqueeTransition = () => (WidgetAndAnimationOfdoubleToACEMarqueeTransition = dart.constFn(dart.fnType(ace_marquee_transition.ACEMarqueeTransition, [framework.Widget, AnimationOfdouble()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/marquee/ace_marquee.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 11,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 61,
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
        [_Location_column]: 21,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/marquee/ace_marquee.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "direction",
        [_Location_column]: 23,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 23,
        [_Location_line]: 76,
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
        [_Location_column]: 26,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/marquee/ace_marquee.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 17,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transitionBuilder",
        [_Location_column]: 17,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/marquee/ace_marquee.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/marquee/ace_marquee.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 9,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/marquee/ace_marquee.dart"
      });
    }
  });
  const children$ = dart.privateName(ace_marquee, "ACEMarquee.children");
  const duration$ = dart.privateName(ace_marquee, "ACEMarquee.duration");
  const direction$ = dart.privateName(ace_marquee, "ACEMarquee.direction");
  const onItemTap$ = dart.privateName(ace_marquee, "ACEMarquee.onItemTap");
  ace_marquee.ACEMarquee = class ACEMarquee extends framework.StatefulWidget {
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get direction() {
      return this[direction$];
    }
    set direction(value) {
      super.direction = value;
    }
    get onItemTap() {
      return this[onItemTap$];
    }
    set onItemTap(value) {
      this[onItemTap$] = value;
    }
    createState() {
      return new ace_marquee._ACEMarqueeState.new();
    }
  };
  (ace_marquee.ACEMarquee.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let direction = opts && 'direction' in opts ? opts.direction : null;
    let onItemTap = opts && 'onItemTap' in opts ? opts.onItemTap : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[children$] = children;
    this[duration$] = duration;
    this[direction$] = direction;
    this[onItemTap$] = onItemTap;
    ace_marquee.ACEMarquee.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ace_marquee.ACEMarquee.prototype;
  dart.addTypeTests(ace_marquee.ACEMarquee);
  dart.setMethodSignature(ace_marquee.ACEMarquee, () => ({
    __proto__: dart.getMethods(ace_marquee.ACEMarquee.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(ace_marquee.ACEMarquee, "package:hkbook/widget/marquee/ace_marquee.dart");
  dart.setFieldSignature(ace_marquee.ACEMarquee, () => ({
    __proto__: dart.getFields(ace_marquee.ACEMarquee.__proto__),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    duration: dart.finalFieldType(core.Duration),
    direction: dart.finalFieldType(basic_types.AxisDirection),
    onItemTap: dart.fieldType(core.Function)
  }));
  const _timer = dart.privateName(ace_marquee, "_timer");
  const _index = dart.privateName(ace_marquee, "_index");
  const _children = dart.privateName(ace_marquee, "_children");
  const _itemWid = dart.privateName(ace_marquee, "_itemWid");
  const _indexFun = dart.privateName(ace_marquee, "_indexFun");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C5;
  let C4;
  let C10;
  let C11;
  let C12;
  let C9;
  let C8;
  let C15;
  let C16;
  let C17;
  let C14;
  let C13;
  let C20;
  let C19;
  let C18;
  let C23;
  let C24;
  let C22;
  let C21;
  ace_marquee._ACEMarqueeState = class _ACEMarqueeState extends framework.State$(ace_marquee.ACEMarquee) {
    build(context) {
      let t0;
      return this[_itemWid]((t0 = this.widget.direction, t0 == null ? basic_types.AxisDirection.left : t0));
    }
    initState() {
      let t0;
      super.initState();
      this[_timer] = async.Timer.periodic((t0 = this.widget.duration, t0 == null ? new core.Duration.new({milliseconds: 1500}) : t0), dart.fn(time => this.setState(dart.fn(() => this[_indexFun](), VoidTodynamic())), TimerTovoid()));
    }
    [_indexFun]() {
      this[_index] = dart.notNull(this[_index]) + 1;
      this[_index] = this[_index][$modulo](this.widget.children[$length]);
    }
    dispose() {
      super.dispose();
      if (this[_timer] != null) {
        this[_timer].cancel();
      }
    }
    [_itemWid](direction) {
      let t0;
      if (this[_children] != null) {
        this[_children][$clear]();
      }
      for (let i = 0; i < dart.notNull(this.widget.children[$length]); i = i + 1) {
        this[_children][$add](new container.Container.new({key: new (ValueKeyOfint()).new(i), child: new gesture_detector.GestureDetector.new({child: this.widget.children[$_get](i), onTap: dart.fn(() => this.widget.onItemTap != null ? dart.dsend(this.widget, 'onItemTap', [i]) : null, VoidTodynamic()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}));
      }
      return new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(1.0)), child: new basic.SizedBox.new({child: new animated_switcher.AnimatedSwitcher.new({duration: (t0 = this.widget.duration, t0 == null ? new core.Duration.new({milliseconds: 1500}) : t0), child: this[_children][$_get](this[_index]), transitionBuilder: dart.fn((child, animation) => new ace_marquee_transition.ACEMarqueeTransition.new({child: child, direction: this.widget.direction, position: animation, $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), WidgetAndAnimationOfdoubleToACEMarqueeTransition()), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21});
    }
  };
  (ace_marquee._ACEMarqueeState.new = function() {
    this[_timer] = null;
    this[_index] = 0;
    this[_children] = JSArrayOfWidget().of([]);
    ace_marquee._ACEMarqueeState.__proto__.new.call(this);
    ;
  }).prototype = ace_marquee._ACEMarqueeState.prototype;
  dart.addTypeTests(ace_marquee._ACEMarqueeState);
  dart.setMethodSignature(ace_marquee._ACEMarqueeState, () => ({
    __proto__: dart.getMethods(ace_marquee._ACEMarqueeState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_indexFun]: dart.fnType(dart.dynamic, []),
    [_itemWid]: dart.fnType(framework.Widget, [dart.dynamic])
  }));
  dart.setLibraryUri(ace_marquee._ACEMarqueeState, "package:hkbook/widget/marquee/ace_marquee.dart");
  dart.setFieldSignature(ace_marquee._ACEMarqueeState, () => ({
    __proto__: dart.getFields(ace_marquee._ACEMarqueeState.__proto__),
    [_timer]: dart.fieldType(async.Timer),
    [_index]: dart.fieldType(core.int),
    [_children]: dart.fieldType(core.List$(framework.Widget))
  }));
  dart.trackLibraries("packages/hkbook/widget/marquee/ace_marquee", {
    "package:hkbook/widget/marquee/ace_marquee.dart": ace_marquee
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ace_marquee.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOqB;;;;;;IACJ;;;;;;IACK;;;;;;IACX;;;;;;;AAU8B;IAAkB;;;QAPhD;QACU;QACV;QACA;QACA;;IAHU;IACV;IACA;IACA;AALT;;EAKoB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAYM;;AACxB,YAAO,iBAA0B,KAAjB,AAAO,6BAAA,OAA2B;IACpD;;;AAImB,MAAX;AAEoC,MAD1C,eAAe,sBAAyB,KAAhB,AAAO,4BAAA,OAAY,qCAAuB,cAC9D,QAAC,QAAS,cAAS,cAAM;IAC/B;;AAGU,MAAN,eAAF,aAAE,gBAAF;AACwC,MAAxC,eAAS,AAAO,sBAAE,AAAO,AAAS;IACpC;;AAIiB,MAAT;AACN,UAAI,gBAAU;AACG,QAAf,AAAO;;IAEX;eAEgB;;AACd,UAAI,mBAAa;AACE,QAAjB,AAAU;;AAEZ,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAO,AAAS,gCAAQ,IAAA,AAAC,CAAA;AAMyB,QALpE,AAAU,sBAAI,kCACL,0BAAc,CAAC,UACb,iDACI,AAAO,AAAQ,4BAAC,CAAC,UACjB,cACH,AAAO,AAAU,yBAAG,OAAc,WAAP,2BAAiB,CAAC,KAAI;;AAE/D,YAAO,wCACwB,mCAAW,uBAAS,cACxC,+BACI,uDACuB,KAAhB,AAAO,4BAAA,OAAY,qCAAuB,qBAC7C,AAAS,uBAAC,kCACE,SAAQ,OAAyB,cAC3C,4DACI,KAAK,aACD,AAAO,iCACR,SAAS;IAEvC;;;IArDM;IACF,eAAS;IACA,kBAAY;;;EAoD3B","file":"ace_marquee.ddc.js"}');
  // Exports:
  return {
    widget__marquee__ace_marquee: ace_marquee
  };
});

//# sourceMappingURL=ace_marquee.ddc.js.map
