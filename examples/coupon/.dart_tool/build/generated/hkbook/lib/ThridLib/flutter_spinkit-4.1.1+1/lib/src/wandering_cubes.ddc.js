define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const container = packages__flutter_web__animation.src__widgets__container;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const ui = packages__flutter_web_ui__ui.ui;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const animations = packages__flutter_web__src__animation__animation.src__animation__animations;
  const curves = packages__flutter_web__src__animation__animation.src__animation__curves;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const wandering_cubes = Object.create(dart.library);
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1800000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.58,
        [Cubic_b]: 0,
        [Cubic_a]: 0.42
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C3 || CT.C3,
        [Interval_end]: 0.25,
        [Interval_begin]: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C3 || CT.C3,
        [Interval_end]: 0.5,
        [Interval_begin]: 0.25
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C3 || CT.C3,
        [Interval_end]: 0.75,
        [Interval_begin]: 0.5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C3 || CT.C3,
        [Interval_end]: 1,
        [Interval_begin]: 0.75
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 81,
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
        [_Location_column]: 23,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 15,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 13,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 120,
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
        [_Location_column]: 18,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 11,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 9,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 112,
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
        [_Location_column]: 14,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 7,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 7,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes.dart"
      });
    }
  });
  const _name = dart.privateName(box_border, "_name");
  let C0;
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C1;
  const color$ = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.color");
  const shape$ = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.shape");
  const offset = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.offset");
  const size$ = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.size");
  const itemBuilder$ = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.itemBuilder");
  const duration$ = dart.privateName(wandering_cubes, "SpinKitWanderingCubes.duration");
  wandering_cubes.SpinKitWanderingCubes = class SpinKitWanderingCubes extends framework.StatefulWidget {
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
    get offset() {
      return this[offset];
    }
    set offset(value) {
      super.offset = value;
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
      return new wandering_cubes._SpinKitWanderingCubesState.new();
    }
  };
  (wandering_cubes.SpinKitWanderingCubes.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shape = opts && 'shape' in opts ? opts.shape : C0 || CT.C0;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C1 || CT.C1;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$] = color;
    this[shape$] = shape;
    this[size$] = size;
    this[itemBuilder$] = itemBuilder;
    this[duration$] = duration;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes.dart", 11, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(shape != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes.dart", 13, 16, "shape != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes.dart", 14, 16, "size != null");
    this[offset] = dart.notNull(size) * 0.75;
    wandering_cubes.SpinKitWanderingCubes.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = wandering_cubes.SpinKitWanderingCubes.prototype;
  dart.addTypeTests(wandering_cubes.SpinKitWanderingCubes);
  dart.setMethodSignature(wandering_cubes.SpinKitWanderingCubes, () => ({
    __proto__: dart.getMethods(wandering_cubes.SpinKitWanderingCubes.__proto__),
    createState: dart.fnType(wandering_cubes._SpinKitWanderingCubesState, [])
  }));
  dart.setLibraryUri(wandering_cubes.SpinKitWanderingCubes, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes.dart");
  dart.setFieldSignature(wandering_cubes.SpinKitWanderingCubes, () => ({
    __proto__: dart.getFields(wandering_cubes.SpinKitWanderingCubes.__proto__),
    color: dart.finalFieldType(ui.Color),
    shape: dart.finalFieldType(box_border.BoxShape),
    offset: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration)
  }));
  const _scaleCtrl = dart.privateName(wandering_cubes, "_scaleCtrl");
  const _rotateCtrl = dart.privateName(wandering_cubes, "_rotateCtrl");
  const _translateCtrl = dart.privateName(wandering_cubes, "_translateCtrl");
  const _scale1 = dart.privateName(wandering_cubes, "_scale1");
  const _scale2 = dart.privateName(wandering_cubes, "_scale2");
  const _scale3 = dart.privateName(wandering_cubes, "_scale3");
  const _scale4 = dart.privateName(wandering_cubes, "_scale4");
  const _rotate = dart.privateName(wandering_cubes, "_rotate");
  const _translate1 = dart.privateName(wandering_cubes, "_translate1");
  const _translate2 = dart.privateName(wandering_cubes, "_translate2");
  const _translate3 = dart.privateName(wandering_cubes, "_translate3");
  const _translate4 = dart.privateName(wandering_cubes, "_translate4");
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C3;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C2;
  let C4;
  let C5;
  let C6;
  const _cube = dart.privateName(wandering_cubes, "_cube");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C9;
  let C8;
  let C7;
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C15;
  let C14;
  const _itemBuilder = dart.privateName(wandering_cubes, "_itemBuilder");
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C32;
  let C30;
  let C29;
  let C35;
  let C36;
  let C37;
  let C34;
  let C33;
  let C40;
  let C39;
  let C38;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(wandering_cubes.SpinKitWanderingCubes) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(wandering_cubes.SpinKitWanderingCubes)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(wandering_cubes.SpinKitWanderingCubes));
  wandering_cubes._SpinKitWanderingCubesState = class _SpinKitWanderingCubesState extends State_TickerProviderStateMixin$36 {
    initState() {
      let t0, t0$, t0$0;
      super.initState();
      this[_translateCtrl] = (t0 = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}), t0.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0.repeat(), t0);
      this[_translate1] = new (TweenOfdouble()).new({begin: 0.0, end: this.widget.offset}).animate(new animations.CurvedAnimation.new({parent: this[_translateCtrl], curve: C2 || CT.C2}));
      this[_translate2] = new (TweenOfdouble()).new({begin: 0.0, end: this.widget.offset}).animate(new animations.CurvedAnimation.new({parent: this[_translateCtrl], curve: C4 || CT.C4}));
      this[_translate3] = new (TweenOfdouble()).new({begin: 0.0, end: -dart.notNull(this.widget.offset)}).animate(new animations.CurvedAnimation.new({parent: this[_translateCtrl], curve: C5 || CT.C5}));
      this[_translate4] = new (TweenOfdouble()).new({begin: 0.0, end: -dart.notNull(this.widget.offset)}).animate(new animations.CurvedAnimation.new({parent: this[_translateCtrl], curve: C6 || CT.C6}));
      this[_scaleCtrl] = (t0$ = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_scale1] = new (TweenOfdouble()).new({begin: 1.0, end: 0.5}).animate(new animations.CurvedAnimation.new({parent: this[_scaleCtrl], curve: C2 || CT.C2}));
      this[_scale2] = new (TweenOfdouble()).new({begin: 1.0, end: 2.0}).animate(new animations.CurvedAnimation.new({parent: this[_scaleCtrl], curve: C4 || CT.C4}));
      this[_scale3] = new (TweenOfdouble()).new({begin: 1.0, end: 0.5}).animate(new animations.CurvedAnimation.new({parent: this[_scaleCtrl], curve: C5 || CT.C5}));
      this[_scale4] = new (TweenOfdouble()).new({begin: 1.0, end: 2.0}).animate(new animations.CurvedAnimation.new({parent: this[_scaleCtrl], curve: C6 || CT.C6}));
      this[_rotateCtrl] = (t0$0 = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}), t0$0.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$0.repeat(), t0$0);
      this[_rotate] = new (TweenOfdouble()).new({begin: 0.0, end: 360.0}).animate(new animations.CurvedAnimation.new({parent: this[_translateCtrl], curve: curves.Curves.linear}));
    }
    dispose() {
      this[_translateCtrl].dispose();
      this[_scaleCtrl].dispose();
      this[_rotateCtrl].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Stack.new({children: JSArrayOfWidget().of([this[_cube](0), this[_cube](1, true)]), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
    }
    [_cube](index, offset) {
      let t0, t0$, t0$0;
      if (offset === void 0) offset = false;
      let _tTranslate = null;
      if (dart.equals(offset, true)) {
        _tTranslate = (t0 = vector_math_64.Matrix4.identity(), t0.translate(this[_translate3].value, 0.0), t0.translate(0.0, this[_translate2].value), t0.translate(0.0, this[_translate4].value), t0.translate(this[_translate1].value, 0.0), t0);
      } else {
        _tTranslate = (t0$ = vector_math_64.Matrix4.identity(), t0$.translate(0.0, this[_translate3].value), t0$.translate(-dart.notNull(this[_translate2].value), 0.0), t0$.translate(-dart.notNull(this[_translate4].value), 0.0), t0$.translate(0.0, this[_translate1].value), t0$);
      }
      return new basic.Positioned.new({top: 0.0, left: dart.equals(offset, true) ? 0.0 : this.widget.offset, child: new basic.Transform.new({transform: _tTranslate, child: new basic.Transform.rotate({angle: dart.notNull(this[_rotate].value) * 0.0174533, child: new basic.Transform.new({transform: (t0$0 = vector_math_64.Matrix4.identity(), t0$0.scale(this[_scale2].value), t0$0.scale(this[_scale3].value), t0$0.scale(this[_scale4].value), t0$0.scale(this[_scale1].value), t0$0), child: new basic.SizedBox.fromSize({size: new ui.Size.square(dart.notNull(this.widget.size) * 0.25), child: this[_itemBuilder](index), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33});
    }
    [_itemBuilder](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: this.widget.shape}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38});
    }
  };
  (wandering_cubes._SpinKitWanderingCubesState.new = function() {
    this[_scaleCtrl] = null;
    this[_rotateCtrl] = null;
    this[_translateCtrl] = null;
    this[_scale1] = null;
    this[_scale2] = null;
    this[_scale3] = null;
    this[_scale4] = null;
    this[_rotate] = null;
    this[_translate1] = null;
    this[_translate2] = null;
    this[_translate3] = null;
    this[_translate4] = null;
    wandering_cubes._SpinKitWanderingCubesState.__proto__.new.call(this);
    ;
  }).prototype = wandering_cubes._SpinKitWanderingCubesState.prototype;
  dart.addTypeTests(wandering_cubes._SpinKitWanderingCubesState);
  dart.setMethodSignature(wandering_cubes._SpinKitWanderingCubesState, () => ({
    __proto__: dart.getMethods(wandering_cubes._SpinKitWanderingCubesState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_cube]: dart.fnType(framework.Widget, [core.int], [core.bool]),
    [_itemBuilder]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(wandering_cubes._SpinKitWanderingCubesState, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes.dart");
  dart.setFieldSignature(wandering_cubes._SpinKitWanderingCubesState, () => ({
    __proto__: dart.getFields(wandering_cubes._SpinKitWanderingCubesState.__proto__),
    [_scaleCtrl]: dart.fieldType(animation_controller.AnimationController),
    [_rotateCtrl]: dart.fieldType(animation_controller.AnimationController),
    [_translateCtrl]: dart.fieldType(animation_controller.AnimationController),
    [_scale1]: dart.fieldType(animation.Animation$(core.double)),
    [_scale2]: dart.fieldType(animation.Animation$(core.double)),
    [_scale3]: dart.fieldType(animation.Animation$(core.double)),
    [_scale4]: dart.fieldType(animation.Animation$(core.double)),
    [_rotate]: dart.fieldType(animation.Animation$(core.double)),
    [_translate1]: dart.fieldType(animation.Animation$(core.double)),
    [_translate2]: dart.fieldType(animation.Animation$(core.double)),
    [_translate3]: dart.fieldType(animation.Animation$(core.double)),
    [_translate4]: dart.fieldType(animation.Animation$(core.double))
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes.dart": wandering_cubes
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["wandering_cubes.dart"],"names":[],"mappings":"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","file":"wandering_cubes.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__wandering_cubes: wandering_cubes
  };
});

//# sourceMappingURL=wandering_cubes.ddc.js.map
