define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const transitions = packages__flutter_web__animation.src__widgets__transitions;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const custom_paint = packages__flutter_web__animation.src__rendering__custom_paint;
  const ui = packages__flutter_web_ui__ui.ui;
  const animations = packages__flutter_web__src__animation__animation.src__animation__animations;
  const curves = packages__flutter_web__src__animation__animation.src__animation__curves;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const pouring_hour_glass = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 2400000
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
        [Interval_end]: 0.9,
        [Interval_begin]: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C4 || CT.C4,
        [Interval_end]: 1,
        [Interval_begin]: 0.9
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 13,
        [_Location_line]: 57,
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
        [_Location_column]: 18,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pouring_hour_glass.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pouring_hour_glass.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "turns",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 54,
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
        [_Location_column]: 14,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pouring_hour_glass.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pouring_hour_glass.dart"
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const size$ = dart.privateName(pouring_hour_glass, "SpinKitPouringHourglass.size");
  const color$ = dart.privateName(pouring_hour_glass, "SpinKitPouringHourglass.color");
  const duration$ = dart.privateName(pouring_hour_glass, "SpinKitPouringHourglass.duration");
  const controller$ = dart.privateName(pouring_hour_glass, "SpinKitPouringHourglass.controller");
  pouring_hour_glass.SpinKitPouringHourglass = class SpinKitPouringHourglass extends framework.StatefulWidget {
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
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
      return new pouring_hour_glass._SpinKitPouringHourglassState.new();
    }
  };
  (pouring_hour_glass.SpinKitPouringHourglass.new = function(opts) {
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
    if (!(color != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pouring_hour_glass.dart", 13, 16, "color != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pouring_hour_glass.dart", 14, 16, "size != null");
    pouring_hour_glass.SpinKitPouringHourglass.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pouring_hour_glass.SpinKitPouringHourglass.prototype;
  dart.addTypeTests(pouring_hour_glass.SpinKitPouringHourglass);
  dart.setMethodSignature(pouring_hour_glass.SpinKitPouringHourglass, () => ({
    __proto__: dart.getMethods(pouring_hour_glass.SpinKitPouringHourglass.__proto__),
    createState: dart.fnType(pouring_hour_glass._SpinKitPouringHourglassState, [])
  }));
  dart.setLibraryUri(pouring_hour_glass.SpinKitPouringHourglass, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pouring_hour_glass.dart");
  dart.setFieldSignature(pouring_hour_glass.SpinKitPouringHourglass, () => ({
    __proto__: dart.getFields(pouring_hour_glass.SpinKitPouringHourglass.__proto__),
    size: dart.finalFieldType(core.double),
    color: dart.finalFieldType(ui.Color),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller = dart.privateName(pouring_hour_glass, "_controller");
  const _pouringAnimation = dart.privateName(pouring_hour_glass, "_pouringAnimation");
  const _rotationAnimation = dart.privateName(pouring_hour_glass, "_rotationAnimation");
  let C2;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C1;
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C4;
  let C3;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C7;
  let C6;
  let C5;
  let C10;
  let C11;
  let C9;
  let C8;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C17;
  let C16;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(pouring_hour_glass.SpinKitPouringHourglass) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(pouring_hour_glass.SpinKitPouringHourglass)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(pouring_hour_glass.SpinKitPouringHourglass));
  pouring_hour_glass._SpinKitPouringHourglassState = class _SpinKitPouringHourglassState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0, t0$, t0$0;
      super.initState();
      this[_controller] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_pouringAnimation] = (t0$0 = new animations.CurvedAnimation.new({parent: this[_controller], curve: C1 || CT.C1}), t0$0.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$0);
      this[_rotationAnimation] = new (TweenOfdouble()).new({begin: 0.0, end: 0.5}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: C3 || CT.C3}));
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new transitions.RotationTransition.new({turns: this[_rotationAnimation], child: new basic.SizedBox.fromSize({size: new ui.Size.square(dart.notNull(this.widget.size) * 0.7071067811865476), child: new basic.CustomPaint.new({painter: new pouring_hour_glass._HourGlassPaint.new({poured: this[_pouringAnimation].value, color: this.widget.color}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
    }
  };
  (pouring_hour_glass._SpinKitPouringHourglassState.new = function() {
    this[_controller] = null;
    this[_pouringAnimation] = null;
    this[_rotationAnimation] = null;
    pouring_hour_glass._SpinKitPouringHourglassState.__proto__.new.call(this);
    ;
  }).prototype = pouring_hour_glass._SpinKitPouringHourglassState.prototype;
  dart.addTypeTests(pouring_hour_glass._SpinKitPouringHourglassState);
  dart.setMethodSignature(pouring_hour_glass._SpinKitPouringHourglassState, () => ({
    __proto__: dart.getMethods(pouring_hour_glass._SpinKitPouringHourglassState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(pouring_hour_glass._SpinKitPouringHourglassState, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pouring_hour_glass.dart");
  dart.setFieldSignature(pouring_hour_glass._SpinKitPouringHourglassState, () => ({
    __proto__: dart.getFields(pouring_hour_glass._SpinKitPouringHourglassState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_pouringAnimation]: dart.fieldType(animation.Animation$(core.double)),
    [_rotationAnimation]: dart.fieldType(animation.Animation$(core.double))
  }));
  const _paint = dart.privateName(pouring_hour_glass, "_paint");
  const _powderPaint = dart.privateName(pouring_hour_glass, "_powderPaint");
  pouring_hour_glass._HourGlassPaint = class _HourGlassPaint extends custom_paint.CustomPainter {
    paint(canvas, size) {
      let t0, t0$, t0$0, t0$1;
      let centerX = dart.notNull(size.width) / 2;
      let halfHeight = dart.notNull(size.height) / 2;
      let hourglassWidth = math.min(core.double, centerX * 0.8, halfHeight);
      let gapWidth = math.max(core.double, 3.0, hourglassWidth * 0.05);
      let yPadding = gapWidth / 2;
      let top = yPadding;
      let bottom = dart.notNull(size.height) - yPadding;
      this[_paint].strokeWidth = gapWidth;
      let hourglassPath = (t0 = ui.Path.new(), t0.moveTo(centerX - hourglassWidth, top), t0.lineTo(centerX + hourglassWidth, top), t0.lineTo(centerX + gapWidth, halfHeight), t0.lineTo(centerX + hourglassWidth, bottom), t0.lineTo(centerX - hourglassWidth, bottom), t0.lineTo(centerX - gapWidth, halfHeight), t0.close(), t0);
      canvas.drawPath(hourglassPath, this[_paint]);
      let upperPart = (t0$ = ui.Path.new(), t0$.moveTo(0.0, top), t0$.addRect(new ui.Rect.fromLTRB(0.0, halfHeight * dart.notNull(this.poured), size.width, halfHeight)), t0$);
      canvas.drawPath(ui.Path.combine(ui.PathOperation.intersect, hourglassPath, upperPart), this[_powderPaint]);
      let lowerPartPath = (t0$0 = ui.Path.new(), t0$0.moveTo(centerX, bottom), t0$0.relativeLineTo(hourglassWidth * dart.notNull(this.poured), 0.0), t0$0.lineTo(centerX, bottom - dart.notNull(this.poured) * halfHeight - gapWidth), t0$0.lineTo(centerX - hourglassWidth * dart.notNull(this.poured), bottom), t0$0.close(), t0$0);
      let lowerPart = ui.Path.combine(ui.PathOperation.intersect, lowerPartPath, (t0$1 = ui.Path.new(), t0$1.addRect(new ui.Rect.fromLTRB(0.0, halfHeight, size.width, size.height)), t0$1));
      canvas.drawPath(lowerPart, this[_powderPaint]);
      canvas.drawLine(new ui.Offset.new(centerX, halfHeight), new ui.Offset.new(centerX, bottom), this[_paint]);
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter._check(oldDelegate);
      return true;
    }
  };
  (pouring_hour_glass._HourGlassPaint.new = function(opts) {
    let t0, t0$;
    let poured = opts && 'poured' in opts ? opts.poured : null;
    let color = opts && 'color' in opts ? opts.color : null;
    this.poured = poured;
    this[_paint] = (t0 = new ui.Paint.new(), t0.style = ui.PaintingStyle.stroke, t0.color = color, t0);
    this[_powderPaint] = (t0$ = new ui.Paint.new(), t0$.style = ui.PaintingStyle.fill, t0$.color = color, t0$);
    pouring_hour_glass._HourGlassPaint.__proto__.new.call(this);
    ;
  }).prototype = pouring_hour_glass._HourGlassPaint.prototype;
  dart.addTypeTests(pouring_hour_glass._HourGlassPaint);
  dart.setMethodSignature(pouring_hour_glass._HourGlassPaint, () => ({
    __proto__: dart.getMethods(pouring_hour_glass._HourGlassPaint.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(pouring_hour_glass._HourGlassPaint, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pouring_hour_glass.dart");
  dart.setFieldSignature(pouring_hour_glass._HourGlassPaint, () => ({
    __proto__: dart.getFields(pouring_hour_glass._HourGlassPaint.__proto__),
    poured: dart.finalFieldType(core.double),
    [_paint]: dart.finalFieldType(ui.Paint),
    [_powderPaint]: dart.finalFieldType(ui.Paint)
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pouring_hour_glass", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pouring_hour_glass.dart": pouring_hour_glass
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["pouring_hour_glass.dart"],"names":[],"mappings":"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","file":"pouring_hour_glass.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__pouring_hour_glass: pouring_hour_glass
  };
});

//# sourceMappingURL=pouring_hour_glass.ddc.js.map
