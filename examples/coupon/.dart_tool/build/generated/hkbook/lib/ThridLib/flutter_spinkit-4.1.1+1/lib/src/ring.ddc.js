define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
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
  const ring = Object.create(dart.library);
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
        __proto__: curves._Linear.prototype
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
    get C3() {
      return C3 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C2 || CT.C2,
        [Interval_end]: 1,
        [Interval_begin]: 0.5
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ring.SpinKitRingCurve.prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C5 || CT.C5,
        [Interval_end]: 1,
        [Interval_begin]: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "foregroundPainter",
        [_Location_column]: 13,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ring.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 11,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ring.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 59,
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
        [_Location_column]: 14,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ring.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 56,
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
        [_Location_column]: 12,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ring.dart"
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const color$ = dart.privateName(ring, "SpinKitRing.color");
  const size$ = dart.privateName(ring, "SpinKitRing.size");
  const lineWidth$ = dart.privateName(ring, "SpinKitRing.lineWidth");
  const duration$ = dart.privateName(ring, "SpinKitRing.duration");
  const controller$ = dart.privateName(ring, "SpinKitRing.controller");
  ring.SpinKitRing = class SpinKitRing extends framework.StatefulWidget {
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
    get lineWidth() {
      return this[lineWidth$];
    }
    set lineWidth(value) {
      super.lineWidth = value;
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
      return new ring._SpinKitRingState.new();
    }
  };
  (ring.SpinKitRing.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let lineWidth = opts && 'lineWidth' in opts ? opts.lineWidth : 7;
    let size = opts && 'size' in opts ? opts.size : 50;
    let duration = opts && 'duration' in opts ? opts.duration : C0 || CT.C0;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$] = color;
    this[lineWidth$] = lineWidth;
    this[size$] = size;
    this[duration$] = duration;
    this[controller$] = controller;
    if (!(color != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ring.dart", 13, 16, "color != null");
    if (!(lineWidth != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ring.dart", 14, 16, "lineWidth != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ring.dart", 15, 16, "size != null");
    ring.SpinKitRing.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ring.SpinKitRing.prototype;
  dart.addTypeTests(ring.SpinKitRing);
  dart.setMethodSignature(ring.SpinKitRing, () => ({
    __proto__: dart.getMethods(ring.SpinKitRing.__proto__),
    createState: dart.fnType(ring._SpinKitRingState, [])
  }));
  dart.setLibraryUri(ring.SpinKitRing, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ring.dart");
  dart.setFieldSignature(ring.SpinKitRing, () => ({
    __proto__: dart.getFields(ring.SpinKitRing.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    lineWidth: dart.finalFieldType(core.double),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller = dart.privateName(ring, "_controller");
  const _animation1 = dart.privateName(ring, "_animation1");
  const _animation2 = dart.privateName(ring, "_animation2");
  const _animation3 = dart.privateName(ring, "_animation3");
  let C2;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C1;
  let C3;
  let C5;
  let C4;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C8;
  let C7;
  let C6;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C16;
  let C17;
  let C14;
  let C13;
  let C20;
  let C19;
  let C18;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(ring.SpinKitRing) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(ring.SpinKitRing)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(ring.SpinKitRing));
  ring._SpinKitRingState = class _SpinKitRingState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_animation1] = new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: C1 || CT.C1}));
      this[_animation2] = new (TweenOfdouble()).new({begin: -2 / 3, end: 1 / 2}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: C3 || CT.C3}));
      this[_animation3] = new (TweenOfdouble()).new({begin: 0.25, end: 5 / 6}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: C4 || CT.C4}));
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.rotateZ(dart.notNull(this[_animation1].value) * 5 * 3.141592653589793 / 6), t0), alignment: fractional_offset.FractionalOffset.center, child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.CustomPaint.new({foregroundPainter: new ring.RingPainter.new({paintWidth: this.widget.lineWidth, trackColor: this.widget.color, progressPercent: this[_animation3].value, startAngle: 3.141592653589793 * dart.notNull(this[_animation2].value)}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18});
    }
  };
  (ring._SpinKitRingState.new = function() {
    this[_controller] = null;
    this[_animation1] = null;
    this[_animation2] = null;
    this[_animation3] = null;
    ring._SpinKitRingState.__proto__.new.call(this);
    ;
  }).prototype = ring._SpinKitRingState.prototype;
  dart.addTypeTests(ring._SpinKitRingState);
  dart.setMethodSignature(ring._SpinKitRingState, () => ({
    __proto__: dart.getMethods(ring._SpinKitRingState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(ring._SpinKitRingState, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ring.dart");
  dart.setFieldSignature(ring._SpinKitRingState, () => ({
    __proto__: dart.getFields(ring._SpinKitRingState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_animation1]: dart.fieldType(animation.Animation$(core.double)),
    [_animation2]: dart.fieldType(animation.Animation$(core.double)),
    [_animation3]: dart.fieldType(animation.Animation$(core.double))
  }));
  const paintWidth$ = dart.privateName(ring, "RingPainter.paintWidth");
  const trackPaint = dart.privateName(ring, "RingPainter.trackPaint");
  const trackColor$ = dart.privateName(ring, "RingPainter.trackColor");
  const progressPercent$ = dart.privateName(ring, "RingPainter.progressPercent");
  const startAngle$ = dart.privateName(ring, "RingPainter.startAngle");
  ring.RingPainter = class RingPainter extends custom_paint.CustomPainter {
    get paintWidth() {
      return this[paintWidth$];
    }
    set paintWidth(value) {
      super.paintWidth = value;
    }
    get trackPaint() {
      return this[trackPaint];
    }
    set trackPaint(value) {
      super.trackPaint = value;
    }
    get trackColor() {
      return this[trackColor$];
    }
    set trackColor(value) {
      super.trackColor = value;
    }
    get progressPercent() {
      return this[progressPercent$];
    }
    set progressPercent(value) {
      super.progressPercent = value;
    }
    get startAngle() {
      return this[startAngle$];
    }
    set startAngle(value) {
      super.startAngle = value;
    }
    paint(canvas, size) {
      let center = new ui.Offset.new(dart.notNull(size.width) / 2, dart.notNull(size.height) / 2);
      let radius = (math.min(core.double, size.width, size.height) - dart.notNull(this.paintWidth)) / 2;
      canvas.drawArc(new ui.Rect.fromCircle({center: center, radius: radius}), this.startAngle, 2 * 3.141592653589793 * dart.notNull(this.progressPercent), false, this.trackPaint);
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter._check(oldDelegate);
      return true;
    }
  };
  (ring.RingPainter.new = function(opts) {
    let t0;
    let paintWidth = opts && 'paintWidth' in opts ? opts.paintWidth : null;
    let progressPercent = opts && 'progressPercent' in opts ? opts.progressPercent : null;
    let startAngle = opts && 'startAngle' in opts ? opts.startAngle : null;
    let trackColor = opts && 'trackColor' in opts ? opts.trackColor : null;
    this[paintWidth$] = paintWidth;
    this[progressPercent$] = progressPercent;
    this[startAngle$] = startAngle;
    this[trackColor$] = trackColor;
    this[trackPaint] = (t0 = new ui.Paint.new(), t0.color = trackColor, t0.style = ui.PaintingStyle.stroke, t0.strokeWidth = paintWidth, t0.strokeCap = ui.StrokeCap.square, t0);
    ring.RingPainter.__proto__.new.call(this);
    ;
  }).prototype = ring.RingPainter.prototype;
  dart.addTypeTests(ring.RingPainter);
  dart.setMethodSignature(ring.RingPainter, () => ({
    __proto__: dart.getMethods(ring.RingPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(ring.RingPainter, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ring.dart");
  dart.setFieldSignature(ring.RingPainter, () => ({
    __proto__: dart.getFields(ring.RingPainter.__proto__),
    paintWidth: dart.finalFieldType(core.double),
    trackPaint: dart.finalFieldType(ui.Paint),
    trackColor: dart.finalFieldType(ui.Color),
    progressPercent: dart.finalFieldType(core.double),
    startAngle: dart.finalFieldType(core.double)
  }));
  ring.SpinKitRingCurve = class SpinKitRingCurve extends curves.Curve {
    transform(t) {
      return dart.notNull(t) <= 0.5 ? 2 * dart.notNull(t) : 2 * (1 - dart.notNull(t));
    }
  };
  (ring.SpinKitRingCurve.new = function() {
    ring.SpinKitRingCurve.__proto__.new.call(this);
    ;
  }).prototype = ring.SpinKitRingCurve.prototype;
  dart.addTypeTests(ring.SpinKitRingCurve);
  dart.setLibraryUri(ring.SpinKitRingCurve, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ring.dart");
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ring", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ring.dart": ring
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ring.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiBc;;;;;;IACC;;;;;;IACA;;;;;;IACE;;;;;;IACW;;;;;;;AAGS;IAAmB;;;QAlBhD;QACW;QACV;QACA;QACA;QACA;;IAJU;IACV;IACA;IACA;IACA;UACM,AAAM,KAAD,IAAI;UACT,AAAU,SAAD,IAAI;UACb,AAAK,IAAD,IAAI;AACf,oDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAIM,MAFZ,4BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B;AAEqG,MADzG,oBAAc,AACT,kCADsB,UAAU,cACxB,4CAAwB;AAEoE,MADzG,oBAAc,AACT,kCADsB,AAAG,CAAF,IAAI,QAAQ,AAAE,IAAE,YAC/B,4CAAwB;AAEyE,MAD9G,oBAAc,AACT,kCADsB,WAAW,AAAE,IAAE,YAC7B,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;;AACxB,YAAO,8BACE,0CACc,mCAAY,WAA4B,AAAI,AAAK,aAA5B,AAAY,2BAAS,wBAAS,oBAC1C,kDACZ,mCACH,mBAAO,AAAO,0BAClB,8CACc,sCACL,AAAO,mCACP,AAAO,oCACF,AAAY,qCACd,iCAAE,AAAY;IAMzC;;;IA3CoB;IACF;IAAa;IAAa;;;EA2C9C;;;;;;;;;;;;;;;;;;;;IAce;;;;;;IACD;;;;;;IACA;;;;;;IACC;;;;;;IACA;;;;;;UAGK,QAAa;AACvB,mBAAS,kBAAkB,aAAX,AAAK,IAAD,UAAS,GAAe,aAAZ,AAAK,IAAD,WAAU;AAC9C,mBAAqD,CAA3C,AAA6B,sBAAzB,AAAK,IAAD,QAAQ,AAAK,IAAD,wBAAW,oBAAc;AAO5D,MAND,AAAO,MAAD,SACC,gCAAmB,MAAM,UAAU,MAAM,IAC9C,iBACA,AAAE,AAAK,qCAAE,uBACT,OACA;IAEJ;kBAGiC;;AAAgB;IAAI;;;;QA9B9C;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;IACS,yBAAE,oBACR,WAAQ,UAAU,EAClB,WAAsB,yBACtB,iBAAc,UAAU,EACxB,eAAsB;AAThC;;EASsC;;;;;;;;;;;;;;;;;cA6Bd;AAAM,YAAG,cAAF,CAAC,KAAI,MAAO,AAAE,iBAAE,CAAC,IAAG,AAAE,KAAG,AAAE,iBAAE,CAAC;IAAC;;;AAHxD;;EAAkB","file":"ring.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__ring: ring
  };
});

//# sourceMappingURL=ring.ddc.js.map
