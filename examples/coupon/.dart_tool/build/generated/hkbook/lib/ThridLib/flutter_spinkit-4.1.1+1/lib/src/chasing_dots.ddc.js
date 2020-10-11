define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const container = packages__flutter_web__animation.src__widgets__container;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const ui = packages__flutter_web_ui__ui.ui;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const animations = packages__flutter_web__src__animation__animation.src__animation__animations;
  const curves = packages__flutter_web__src__animation__animation.src__animation__curves;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const chasing_dots = Object.create(dart.library);
  const $abs = dartx.abs;
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 2000000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 26,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 36,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 26,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 39,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 28,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots.dart"
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const color$ = dart.privateName(chasing_dots, "SpinKitChasingDots.color");
  const size$ = dart.privateName(chasing_dots, "SpinKitChasingDots.size");
  const itemBuilder$ = dart.privateName(chasing_dots, "SpinKitChasingDots.itemBuilder");
  const duration$ = dart.privateName(chasing_dots, "SpinKitChasingDots.duration");
  chasing_dots.SpinKitChasingDots = class SpinKitChasingDots extends framework.StatefulWidget {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
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
    createState() {
      return new chasing_dots._SpinKitChasingDotsState.new();
    }
  };
  (chasing_dots.SpinKitChasingDots.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C0 || CT.C0;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$] = color;
    this[size$] = size;
    this[itemBuilder$] = itemBuilder;
    this[duration$] = duration;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots.dart", 10, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots.dart", 12, 16, "size != null");
    chasing_dots.SpinKitChasingDots.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = chasing_dots.SpinKitChasingDots.prototype;
  dart.addTypeTests(chasing_dots.SpinKitChasingDots);
  dart.setMethodSignature(chasing_dots.SpinKitChasingDots, () => ({
    __proto__: dart.getMethods(chasing_dots.SpinKitChasingDots.__proto__),
    createState: dart.fnType(chasing_dots._SpinKitChasingDotsState, [])
  }));
  dart.setLibraryUri(chasing_dots.SpinKitChasingDots, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots.dart");
  dart.setFieldSignature(chasing_dots.SpinKitChasingDots, () => ({
    __proto__: dart.getFields(chasing_dots.SpinKitChasingDots.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration)
  }));
  const _scaleCtrl = dart.privateName(chasing_dots, "_scaleCtrl");
  const _rotateCtrl = dart.privateName(chasing_dots, "_rotateCtrl");
  const _scale = dart.privateName(chasing_dots, "_scale");
  const _rotate = dart.privateName(chasing_dots, "_rotate");
  const _circle = dart.privateName(chasing_dots, "_circle");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C4;
  let C2;
  let C1;
  let C7;
  let C8;
  let C6;
  let C5;
  let C11;
  let C10;
  let C9;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C19;
  let C17;
  let C16;
  let C22;
  let C21;
  let C20;
  let C25;
  let C24;
  let C23;
  let C28;
  let C29;
  let C27;
  let C26;
  let C32;
  let C33;
  let C31;
  let C30;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(chasing_dots.SpinKitChasingDots) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(chasing_dots.SpinKitChasingDots)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(chasing_dots.SpinKitChasingDots));
  chasing_dots._SpinKitChasingDotsState = class _SpinKitChasingDotsState extends State_TickerProviderStateMixin$36 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_scaleCtrl] = (t0 = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}), t0.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0.repeat({reverse: true}), t0);
      this[_scale] = new (TweenOfdouble()).new({begin: -1.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_scaleCtrl], curve: curves.Curves.easeInOut}));
      this[_rotateCtrl] = (t0$ = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_rotate] = new (TweenOfdouble()).new({begin: 0.0, end: 360.0}).animate(new animations.CurvedAnimation.new({parent: this[_rotateCtrl], curve: curves.Curves.linear}));
    }
    dispose() {
      this[_scaleCtrl].dispose();
      this[_rotateCtrl].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Transform.rotate({angle: dart.notNull(this[_rotate].value) * 0.0174533, child: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Positioned.new({top: 0.0, child: this[_circle](1.0 - this[_scale].value[$abs](), 0), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), new basic.Positioned.new({bottom: 0.0, child: this[_circle](this[_scale].value[$abs](), 1), $creationLocationd_0dea112b090073317d4: C5 || CT.C5})]), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20});
    }
    [_circle](scale, index) {
      return new basic.Transform.scale({scale: scale, child: new basic.SizedBox.fromSize({size: new ui.Size.square(dart.notNull(this.widget.size) * 0.6), child: this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, color: this.widget.color}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30});
    }
  };
  (chasing_dots._SpinKitChasingDotsState.new = function() {
    this[_scaleCtrl] = null;
    this[_rotateCtrl] = null;
    this[_scale] = null;
    this[_rotate] = null;
    chasing_dots._SpinKitChasingDotsState.__proto__.new.call(this);
    ;
  }).prototype = chasing_dots._SpinKitChasingDotsState.prototype;
  dart.addTypeTests(chasing_dots._SpinKitChasingDotsState);
  dart.setMethodSignature(chasing_dots._SpinKitChasingDotsState, () => ({
    __proto__: dart.getMethods(chasing_dots._SpinKitChasingDotsState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_circle]: dart.fnType(framework.Widget, [core.double, core.int])
  }));
  dart.setLibraryUri(chasing_dots._SpinKitChasingDotsState, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots.dart");
  dart.setFieldSignature(chasing_dots._SpinKitChasingDotsState, () => ({
    __proto__: dart.getFields(chasing_dots._SpinKitChasingDotsState.__proto__),
    [_scaleCtrl]: dart.fieldType(animation_controller.AnimationController),
    [_rotateCtrl]: dart.fieldType(animation_controller.AnimationController),
    [_scale]: dart.fieldType(animation.Animation$(core.double)),
    [_rotate]: dart.fieldType(animation.Animation$(core.double))
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots.dart": chasing_dots
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["chasing_dots.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAcc;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;;AAG2B;IAA0B;;;QAhB9D;QACC;QACA;QACA;QACA;;IAHA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,mEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiBF,MAAX;AAImB,MAFzB,yBAAa,yDAA2B,gBAAgB,AAAO,wBAC3D,eAAY,cAAM,cAAS;yCAC3B,oBAAgB;AACuF,MAA3G,eAAS,AAA6B,kCAAhB,CAAC,UAAU,cAAa,4CAAwB,yBAA0B;AAIpF,MAFZ,2BAAc,yDAA2B,gBAAgB,AAAO,wBAC5D,gBAAY,cAAM,cAAS;yCAC3B;AACuG,MAA3G,gBAAU,AAA8B,kCAAjB,UAAU,gBAAe,4CAAwB,0BAA2B;IACrG;;AAIsB,MAApB,AAAW;AACU,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,8BACW,mCACH,mBAAO,AAAO,0BACR,mCACM,aAAd,AAAQ,uBAAQ,kBAChB,+BACa,sBAChB,+BAAgB,YAAY,cAAQ,AAAI,MAAE,AAAO,AAAM,4BAAO,2DAC9D,kCAAmB,YAAY,cAAQ,AAAO,AAAM,4BAAO;IAMvE;cAEsB,OAAW;AAC/B,YAAiB,mCACR,KAAK,SACI,mCACH,mBAAmB,aAAZ,AAAO,oBAAO,aACzB,AAAO,AAAY,2BAAG,OACvB,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAA8B,mCAAe,AAAO;IAGzF;;;IArDoB;IAAY;IACd;IAAQ;;;EAqD5B","file":"chasing_dots.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__chasing_dots: chasing_dots
  };
});

//# sourceMappingURL=chasing_dots.ddc.js.map
