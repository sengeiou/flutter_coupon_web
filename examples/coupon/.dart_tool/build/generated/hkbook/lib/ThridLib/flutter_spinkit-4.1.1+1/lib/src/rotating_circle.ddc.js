define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
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
  const fractional_offset = packages__flutter_web__src__animation__animation.src__painting__fractional_offset;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const rotating_circle = Object.create(dart.library);
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
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
        [Cubic_c]: 1,
        [Cubic_b]: 0,
        [Cubic_a]: 0.42
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C2 || CT.C2,
        [Interval_end]: 0.5,
        [Interval_begin]: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.58,
        [Cubic_b]: 0,
        [Cubic_a]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C4 || CT.C4,
        [Interval_end]: 1,
        [Interval_begin]: 0.5
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 34,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 66,
        [_Location_line]: 57,
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
        [_Location_column]: 25,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/rotating_circle.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/rotating_circle.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 52,
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
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/rotating_circle.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/rotating_circle.dart"
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const color$ = dart.privateName(rotating_circle, "SpinKitRotatingCircle.color");
  const size$ = dart.privateName(rotating_circle, "SpinKitRotatingCircle.size");
  const itemBuilder$ = dart.privateName(rotating_circle, "SpinKitRotatingCircle.itemBuilder");
  const duration$ = dart.privateName(rotating_circle, "SpinKitRotatingCircle.duration");
  const controller$ = dart.privateName(rotating_circle, "SpinKitRotatingCircle.controller");
  rotating_circle.SpinKitRotatingCircle = class SpinKitRotatingCircle extends framework.StatefulWidget {
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
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new rotating_circle._SpinKitRotatingCircleState.new();
    }
  };
  (rotating_circle.SpinKitRotatingCircle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C0 || CT.C0;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$] = color;
    this[size$] = size;
    this[itemBuilder$] = itemBuilder;
    this[duration$] = duration;
    this[controller$] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/rotating_circle.dart", 11, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/rotating_circle.dart", 13, 16, "size != null");
    rotating_circle.SpinKitRotatingCircle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = rotating_circle.SpinKitRotatingCircle.prototype;
  dart.addTypeTests(rotating_circle.SpinKitRotatingCircle);
  dart.setMethodSignature(rotating_circle.SpinKitRotatingCircle, () => ({
    __proto__: dart.getMethods(rotating_circle.SpinKitRotatingCircle.__proto__),
    createState: dart.fnType(rotating_circle._SpinKitRotatingCircleState, [])
  }));
  dart.setLibraryUri(rotating_circle.SpinKitRotatingCircle, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/rotating_circle.dart");
  dart.setFieldSignature(rotating_circle.SpinKitRotatingCircle, () => ({
    __proto__: dart.getFields(rotating_circle.SpinKitRotatingCircle.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller = dart.privateName(rotating_circle, "_controller");
  const _animation1 = dart.privateName(rotating_circle, "_animation1");
  const _animation2 = dart.privateName(rotating_circle, "_animation2");
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C2;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C1;
  let C4;
  let C3;
  const _itemBuilder = dart.privateName(rotating_circle, "_itemBuilder");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C7;
  let C8;
  let C6;
  let C5;
  let C11;
  let C12;
  let C13;
  let C10;
  let C9;
  let C16;
  let C15;
  let C14;
  let C19;
  let C18;
  let C17;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(rotating_circle.SpinKitRotatingCircle) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(rotating_circle.SpinKitRotatingCircle)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(rotating_circle.SpinKitRotatingCircle));
  rotating_circle._SpinKitRotatingCircleState = class _SpinKitRotatingCircleState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_animation1] = new (TweenOfdouble()).new({begin: 0.0, end: 180.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: C1 || CT.C1}));
      this[_animation2] = new (TweenOfdouble()).new({begin: 0.0, end: 180.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: C3 || CT.C3}));
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.rotateX((0 - dart.notNull(this[_animation1].value)) * 0.0174533), t0.rotateY((0 - dart.notNull(this[_animation2].value)) * 0.0174533), t0), alignment: fractional_offset.FractionalOffset.center, child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: this[_itemBuilder](0), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
    }
    [_itemBuilder](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: box_border.BoxShape.circle}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
    }
  };
  (rotating_circle._SpinKitRotatingCircleState.new = function() {
    this[_controller] = null;
    this[_animation1] = null;
    this[_animation2] = null;
    rotating_circle._SpinKitRotatingCircleState.__proto__.new.call(this);
    ;
  }).prototype = rotating_circle._SpinKitRotatingCircleState.prototype;
  dart.addTypeTests(rotating_circle._SpinKitRotatingCircleState);
  dart.setMethodSignature(rotating_circle._SpinKitRotatingCircleState, () => ({
    __proto__: dart.getMethods(rotating_circle._SpinKitRotatingCircleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(rotating_circle._SpinKitRotatingCircleState, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/rotating_circle.dart");
  dart.setFieldSignature(rotating_circle._SpinKitRotatingCircleState, () => ({
    __proto__: dart.getFields(rotating_circle._SpinKitRotatingCircleState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_animation1]: dart.fieldType(animation.Animation$(core.double)),
    [_animation2]: dart.fieldType(animation.Animation$(core.double))
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/rotating_circle", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/rotating_circle.dart": rotating_circle
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["rotating_circle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAec;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGmB;IAA6B;;;QAlBpE;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,yEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAIM,MAFZ,4BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B;AAEqG,MADzG,oBAAc,AACT,kCADsB,UAAU,gBACxB,4CAAwB;AAEqE,MAD1G,oBAAc,AACT,kCADsB,UAAU,gBACxB,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;;AACxB,YAAO,8BACE,0CACc,mCACf,WAAgC,CAAvB,AAAE,iBAAE,AAAY,4BAAS,YAClC,WAAgC,CAAvB,AAAE,iBAAE,AAAY,4BAAS,4BACV,kDACZ,mCAAoB,mBAAO,AAAO,0BAAc,mBAAa;IAGnF;mBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO,0BAAuB;IAAQ;;;IArCtE;IACF;IAAa;;;EAqCjC","file":"rotating_circle.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__rotating_circle: rotating_circle
  };
});

//# sourceMappingURL=rotating_circle.ddc.js.map
