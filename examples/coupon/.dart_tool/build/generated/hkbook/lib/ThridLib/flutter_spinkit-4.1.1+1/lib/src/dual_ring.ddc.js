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
  const dual_ring = Object.create(dart.library);
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
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 36,
        [_Location_line]: 55,
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
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/dual_ring.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 11,
        [_Location_line]: 56,
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
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/dual_ring.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 54,
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
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/dual_ring.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 51,
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
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/dual_ring.dart"
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const color$ = dart.privateName(dual_ring, "SpinKitDualRing.color");
  const lineWidth$ = dart.privateName(dual_ring, "SpinKitDualRing.lineWidth");
  const size$ = dart.privateName(dual_ring, "SpinKitDualRing.size");
  const duration$ = dart.privateName(dual_ring, "SpinKitDualRing.duration");
  const controller$ = dart.privateName(dual_ring, "SpinKitDualRing.controller");
  dual_ring.SpinKitDualRing = class SpinKitDualRing extends framework.StatefulWidget {
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get lineWidth() {
      return this[lineWidth$];
    }
    set lineWidth(value) {
      super.lineWidth = value;
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
      return new dual_ring._SpinKitDualRingState.new();
    }
  };
  (dual_ring.SpinKitDualRing.new = function(opts) {
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
    if (!(color != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/dual_ring.dart", 13, 16, "color != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/dual_ring.dart", 14, 16, "size != null");
    dual_ring.SpinKitDualRing.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dual_ring.SpinKitDualRing.prototype;
  dart.addTypeTests(dual_ring.SpinKitDualRing);
  dart.setMethodSignature(dual_ring.SpinKitDualRing, () => ({
    __proto__: dart.getMethods(dual_ring.SpinKitDualRing.__proto__),
    createState: dart.fnType(dual_ring._SpinKitDualRingState, [])
  }));
  dart.setLibraryUri(dual_ring.SpinKitDualRing, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/dual_ring.dart");
  dart.setFieldSignature(dual_ring.SpinKitDualRing, () => ({
    __proto__: dart.getFields(dual_ring.SpinKitDualRing.__proto__),
    color: dart.finalFieldType(ui.Color),
    lineWidth: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller = dart.privateName(dual_ring, "_controller");
  const _animation = dart.privateName(dual_ring, "_animation");
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
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(dual_ring.SpinKitDualRing) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(dual_ring.SpinKitDualRing)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(dual_ring.SpinKitDualRing));
  dual_ring._SpinKitDualRingState = class _SpinKitDualRingState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_animation] = new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: C1 || CT.C1}));
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.rotateZ(dart.notNull(this[_animation].value) * 3.141592653589793 * 2), t0), alignment: fractional_offset.FractionalOffset.center, child: new basic.CustomPaint.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), painter: new dual_ring._DualRingPainter.new({paintWidth: this.widget.lineWidth, color: this.widget.color}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
    }
  };
  (dual_ring._SpinKitDualRingState.new = function() {
    this[_controller] = null;
    this[_animation] = null;
    dual_ring._SpinKitDualRingState.__proto__.new.call(this);
    ;
  }).prototype = dual_ring._SpinKitDualRingState.prototype;
  dart.addTypeTests(dual_ring._SpinKitDualRingState);
  dart.setMethodSignature(dual_ring._SpinKitDualRingState, () => ({
    __proto__: dart.getMethods(dual_ring._SpinKitDualRingState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(dual_ring._SpinKitDualRingState, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/dual_ring.dart");
  dart.setFieldSignature(dual_ring._SpinKitDualRingState, () => ({
    __proto__: dart.getFields(dual_ring._SpinKitDualRingState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_animation]: dart.fieldType(animation.Animation$(core.double))
  }));
  dual_ring._DualRingPainter = class _DualRingPainter extends custom_paint.CustomPainter {
    paint(canvas, size) {
      let rect = new ui.Rect.fromPoints(ui.Offset.zero, new ui.Offset.new(size.width, size.height));
      canvas.drawArc(rect, 0.0, this.getRadian(this.angle), false, this.ringPaint);
      canvas.drawArc(rect, this.getRadian(180.0), this.getRadian(this.angle), false, this.ringPaint);
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter._check(oldDelegate);
      return true;
    }
    getRadian(angle) {
      return 3.141592653589793 / 180 * dart.notNull(angle);
    }
  };
  (dual_ring._DualRingPainter.new = function(opts) {
    let t0;
    let angle = opts && 'angle' in opts ? opts.angle : 90;
    let paintWidth = opts && 'paintWidth' in opts ? opts.paintWidth : null;
    let color = opts && 'color' in opts ? opts.color : null;
    this.angle = angle;
    this.ringPaint = (t0 = new ui.Paint.new(), t0.color = color, t0.strokeWidth = paintWidth, t0.style = ui.PaintingStyle.stroke, t0);
    dual_ring._DualRingPainter.__proto__.new.call(this);
    ;
  }).prototype = dual_ring._DualRingPainter.prototype;
  dart.addTypeTests(dual_ring._DualRingPainter);
  dart.setMethodSignature(dual_ring._DualRingPainter, () => ({
    __proto__: dart.getMethods(dual_ring._DualRingPainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object]),
    getRadian: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(dual_ring._DualRingPainter, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/dual_ring.dart");
  dart.setFieldSignature(dual_ring._DualRingPainter, () => ({
    __proto__: dart.getFields(dual_ring._DualRingPainter.__proto__),
    ringPaint: dart.finalFieldType(ui.Paint),
    angle: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/dual_ring", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/dual_ring.dart": dual_ring
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dual_ring.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgBc;;;;;;IACC;;;;;;IACA;;;;;;IACE;;;;;;IACW;;;;;;;AAGa;IAAuB;;;QAjBxD;QACW;QACV;QACA;QACA;QACA;;IAJU;IACV;IACA;IACA;IACA;UACM,AAAM,KAAD,IAAI;UACT,AAAK,IAAD,IAAI;AACf,6DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAIM,MAFZ,4BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B;AAEqG,MADzG,mBAAa,AACR,kCADqB,UAAU,cACvB,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;;AACxB,YAAO,8BACE,0CACc,mCAAY,WAA2B,AAAU,aAA5B,AAAW,8CAAmB,oBAC1C,kDACrB,kCACW,mCAAoB,mBAAO,AAAO,mFACzC,gDAA6B,AAAO,8BAAkB,AAAO;IAI9E;;;IAhCoB;IACF;;;EAgCpB;;;;;;;;;;;;;UAaoB,QAAa;AACvB,iBAAY,uBAAkB,gBAAM,kBAAO,AAAK,IAAD,QAAQ,AAAK,IAAD;AACJ,MAA7D,AAAO,MAAD,SAAS,IAAI,EAAE,KAAK,eAAU,aAAQ,OAAO;AACuB,MAA1E,AAAO,MAAD,SAAS,IAAI,EAAE,eAAU,QAAQ,eAAU,aAAQ,OAAO;IAClE;kBAGiC;;AAAgB;IAAI;cAE7B;AAAU,YAAQ,AAAM,qBAAJ,mBAAM,KAAK;;;;;QAnBhC;QAAqB;QAAkB;IAAvC;IACP,uBAAE,oBACR,WAAQ,KAAK,EACb,iBAAc,UAAU,EACxB,WAAsB;AAJhC;;EAIsC","file":"dual_ring.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__dual_ring: dual_ring
  };
});

//# sourceMappingURL=dual_ring.ddc.js.map
