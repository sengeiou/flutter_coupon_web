define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const custom_paint = packages__flutter_web__animation.src__rendering__custom_paint;
  const ui = packages__flutter_web_ui__ui.ui;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const animations = packages__flutter_web__src__animation__animation.src__animation__animations;
  const curves = packages__flutter_web__src__animation__animation.src__animation__curves;
  const fractional_offset = packages__flutter_web__src__animation__animation.src__painting__fractional_offset;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const hour_glass = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1200000
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.58,
        [Cubic_b]: 0,
        [Cubic_a]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C2 || CT.C2,
        [Interval_end]: 1,
        [Interval_begin]: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 36,
        [_Location_line]: 53,
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
        [_Location_column]: 27,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/hour_glass.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/hour_glass.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/hour_glass.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/hour_glass.dart"
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const color$ = dart.privateName(hour_glass, "SpinKitHourGlass.color");
  const size$ = dart.privateName(hour_glass, "SpinKitHourGlass.size");
  const duration$ = dart.privateName(hour_glass, "SpinKitHourGlass.duration");
  const controller$ = dart.privateName(hour_glass, "SpinKitHourGlass.controller");
  hour_glass.SpinKitHourGlass = class SpinKitHourGlass extends framework.StatefulWidget {
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
      return new hour_glass._SpinKitHourGlassState.new();
    }
  };
  (hour_glass.SpinKitHourGlass.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let duration = opts && 'duration' in opts ? opts.duration : C0 || CT.C0;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$] = color;
    this[size$] = size;
    this[duration$] = duration;
    this[controller$] = controller;
    if (!(color != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/hour_glass.dart", 12, 16, "color != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/hour_glass.dart", 13, 16, "size != null");
    hour_glass.SpinKitHourGlass.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = hour_glass.SpinKitHourGlass.prototype;
  dart.addTypeTests(hour_glass.SpinKitHourGlass);
  dart.setMethodSignature(hour_glass.SpinKitHourGlass, () => ({
    __proto__: dart.getMethods(hour_glass.SpinKitHourGlass.__proto__),
    createState: dart.fnType(hour_glass._SpinKitHourGlassState, [])
  }));
  dart.setLibraryUri(hour_glass.SpinKitHourGlass, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/hour_glass.dart");
  dart.setFieldSignature(hour_glass.SpinKitHourGlass, () => ({
    __proto__: dart.getFields(hour_glass.SpinKitHourGlass.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller = dart.privateName(hour_glass, "_controller");
  const _animation = dart.privateName(hour_glass, "_animation");
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C2;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C5;
  let C4;
  let C3;
  let C8;
  let C9;
  let C7;
  let C6;
  let C12;
  let C13;
  let C14;
  let C11;
  let C10;
  let C17;
  let C16;
  let C15;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(hour_glass.SpinKitHourGlass) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(hour_glass.SpinKitHourGlass)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(hour_glass.SpinKitHourGlass));
  hour_glass._SpinKitHourGlassState = class _SpinKitHourGlassState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_animation] = new (TweenOfdouble()).new({begin: 0.0, end: 8.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: C1 || CT.C1}));
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.rotateZ(dart.notNull(this[_animation].value) * 3.141592653589793), t0), alignment: fractional_offset.FractionalOffset.center, child: new basic.CustomPaint.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), painter: new hour_glass._HourGlassPainter.new({color: this.widget.color}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
    }
  };
  (hour_glass._SpinKitHourGlassState.new = function() {
    this[_controller] = null;
    this[_animation] = null;
    hour_glass._SpinKitHourGlassState.__proto__.new.call(this);
    ;
  }).prototype = hour_glass._SpinKitHourGlassState.prototype;
  dart.addTypeTests(hour_glass._SpinKitHourGlassState);
  dart.setMethodSignature(hour_glass._SpinKitHourGlassState, () => ({
    __proto__: dart.getMethods(hour_glass._SpinKitHourGlassState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(hour_glass._SpinKitHourGlassState, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/hour_glass.dart");
  dart.setFieldSignature(hour_glass._SpinKitHourGlassState, () => ({
    __proto__: dart.getFields(hour_glass._SpinKitHourGlassState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_animation]: dart.fieldType(animation.Animation$(core.double))
  }));
  const _paint = dart.privateName(hour_glass, "_paint");
  hour_glass._HourGlassPainter = class _HourGlassPainter extends custom_paint.CustomPainter {
    paint(canvas, size) {
      let rect = new ui.Rect.fromPoints(ui.Offset.zero, new ui.Offset.new(size.width, size.height));
      canvas.drawArc(rect, 0.0, this.getRadian(this.weight), true, this[_paint]);
      canvas.drawArc(rect, this.getRadian(180.0), this.getRadian(this.weight), true, this[_paint]);
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter._check(oldDelegate);
      return true;
    }
    getRadian(angle) {
      return 3.141592653589793 / 180 * dart.notNull(angle);
    }
  };
  (hour_glass._HourGlassPainter.new = function(opts) {
    let t0;
    let weight = opts && 'weight' in opts ? opts.weight : 90;
    let color = opts && 'color' in opts ? opts.color : null;
    this.weight = weight;
    this[_paint] = (t0 = new ui.Paint.new(), t0.color = color, t0.strokeWidth = 1.0, t0);
    hour_glass._HourGlassPainter.__proto__.new.call(this);
    ;
  }).prototype = hour_glass._HourGlassPainter.prototype;
  dart.addTypeTests(hour_glass._HourGlassPainter);
  dart.setMethodSignature(hour_glass._HourGlassPainter, () => ({
    __proto__: dart.getMethods(hour_glass._HourGlassPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object]),
    getRadian: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(hour_glass._HourGlassPainter, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/hour_glass.dart");
  dart.setFieldSignature(hour_glass._HourGlassPainter, () => ({
    __proto__: dart.getFields(hour_glass._HourGlassPainter.__proto__),
    [_paint]: dart.finalFieldType(ui.Paint),
    weight: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/hour_glass", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/hour_glass.dart": hour_glass
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hour_glass.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAec;;;;;;IACC;;;;;;IACE;;;;;;IACW;;;;;;;AAGc;IAAwB;;;QAf1D;QACW;QACV;QACA;QACA;;IAHU;IACV;IACA;IACA;UACM,AAAM,KAAD,IAAI;UACT,AAAK,IAAD,IAAI;AACf,+DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiBF,MAAX;AAIM,MAFZ,4BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B;AAEsG,MAD1G,mBAAa,AACR,kCADqB,UAAU,cACvB,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;;AACxB,YAAO,8BACE,0CACc,mCAAY,WAA2B,aAAlB,AAAW,8DACvB,kDACrB,kCACW,mCAAoB,mBAAO,AAAO,mFACzC,6CAAyB,AAAO;IAIjD;;;IAhCoB;IACF;;;EAgCpB;;;;;;;;;;;;;;UAYoB,QAAa;AACvB,iBAAY,uBAAkB,gBAAM,kBAAO,AAAK,IAAD,QAAQ,AAAK,IAAD;AACP,MAA1D,AAAO,MAAD,SAAS,IAAI,EAAE,KAAK,eAAU,cAAS,MAAM;AACoB,MAAvE,AAAO,MAAD,SAAS,IAAI,EAAE,eAAU,QAAQ,eAAU,cAAS,MAAM;IAClE;kBAGiC;;AAAgB;IAAI;cAE7B;AAAU,YAAQ,AAAM,qBAAJ,mBAAM,KAAK;;;;;QAlB/B;QAAqB;IAArB;IACX,qBAAE,oBACL,WAAQ,KAAK,EACb,iBAAc;AAHxB;;EAG2B","file":"hour_glass.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__hour_glass: hour_glass
  };
});

//# sourceMappingURL=hour_glass.ddc.js.map
