define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
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
  const fractional_offset = packages__flutter_web__src__animation__animation.src__painting__fractional_offset;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const spinning_circle = Object.create(dart.library);
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
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
    get C3() {
      return C3 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.58,
        [Cubic_b]: 0,
        [Cubic_a]: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C3 || CT.C3,
        [Interval_end]: 1,
        [Interval_begin]: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 60,
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
        [_Location_column]: 25,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/spinning_circle.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 9,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 58,
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
        [_Location_column]: 14,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/spinning_circle.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/spinning_circle.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 68,
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
        [_Location_column]: 9,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/spinning_circle.dart"
      });
    }
  });
  const _name = dart.privateName(box_border, "_name");
  let C0;
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C1;
  const color$ = dart.privateName(spinning_circle, "SpinKitSpinningCircle.color");
  const shape$ = dart.privateName(spinning_circle, "SpinKitSpinningCircle.shape");
  const size$ = dart.privateName(spinning_circle, "SpinKitSpinningCircle.size");
  const itemBuilder$ = dart.privateName(spinning_circle, "SpinKitSpinningCircle.itemBuilder");
  const duration$ = dart.privateName(spinning_circle, "SpinKitSpinningCircle.duration");
  const controller$ = dart.privateName(spinning_circle, "SpinKitSpinningCircle.controller");
  spinning_circle.SpinKitSpinningCircle = class SpinKitSpinningCircle extends framework.StatefulWidget {
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
      return new spinning_circle._SpinKitSpinningCircleState.new();
    }
  };
  (spinning_circle.SpinKitSpinningCircle.new = function(opts) {
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
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/spinning_circle.dart", 14, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(shape != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/spinning_circle.dart", 16, 16, "shape != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/spinning_circle.dart", 17, 16, "size != null");
    spinning_circle.SpinKitSpinningCircle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = spinning_circle.SpinKitSpinningCircle.prototype;
  dart.addTypeTests(spinning_circle.SpinKitSpinningCircle);
  dart.setMethodSignature(spinning_circle.SpinKitSpinningCircle, () => ({
    __proto__: dart.getMethods(spinning_circle.SpinKitSpinningCircle.__proto__),
    createState: dart.fnType(spinning_circle._SpinKitSpinningCircleState, [])
  }));
  dart.setLibraryUri(spinning_circle.SpinKitSpinningCircle, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/spinning_circle.dart");
  dart.setFieldSignature(spinning_circle.SpinKitSpinningCircle, () => ({
    __proto__: dart.getFields(spinning_circle.SpinKitSpinningCircle.__proto__),
    color: dart.finalFieldType(ui.Color),
    shape: dart.finalFieldType(box_border.BoxShape),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller = dart.privateName(spinning_circle, "_controller");
  const _animation = dart.privateName(spinning_circle, "_animation");
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C3;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C2;
  const _itemBuilder = dart.privateName(spinning_circle, "_itemBuilder");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
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
  let C14;
  let C13;
  let C18;
  let C17;
  let C16;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(spinning_circle.SpinKitSpinningCircle) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(spinning_circle.SpinKitSpinningCircle)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(spinning_circle.SpinKitSpinningCircle));
  spinning_circle._SpinKitSpinningCircleState = class _SpinKitSpinningCircleState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat(), t0$);
      this[_animation] = new (TweenOfdouble()).new({begin: 0.0, end: 7.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: C2 || CT.C2}));
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      return new basic.Center.new({child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.rotateY((0 - dart.notNull(this[_animation].value)) * 3.141592653589793), t0), alignment: fractional_offset.FractionalOffset.center, child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: this[_itemBuilder](0), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13});
    }
    [_itemBuilder](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: this.widget.shape}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
    }
  };
  (spinning_circle._SpinKitSpinningCircleState.new = function() {
    this[_controller] = null;
    this[_animation] = null;
    spinning_circle._SpinKitSpinningCircleState.__proto__.new.call(this);
    ;
  }).prototype = spinning_circle._SpinKitSpinningCircleState.prototype;
  dart.addTypeTests(spinning_circle._SpinKitSpinningCircleState);
  dart.setMethodSignature(spinning_circle._SpinKitSpinningCircleState, () => ({
    __proto__: dart.getMethods(spinning_circle._SpinKitSpinningCircleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(spinning_circle._SpinKitSpinningCircleState, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/spinning_circle.dart");
  dart.setFieldSignature(spinning_circle._SpinKitSpinningCircleState, () => ({
    __proto__: dart.getFields(spinning_circle._SpinKitSpinningCircleState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_animation]: dart.fieldType(animation.Animation$(core.double))
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/spinning_circle", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/spinning_circle.dart": spinning_circle
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["spinning_circle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmBc;;;;;;IACG;;;;;;IACF;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGmB;IAA6B;;;QArBpE;QACC;QACA;QACA;QACA;QACA;QACA;;IALA;IACA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAM,KAAD,IAAI;UACT,AAAK,IAAD,IAAI;AACf,yEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmBF,MAAX;AAIM,MAFZ,4BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B;AAEsG,MAD1G,mBAAa,AACR,kCADqB,UAAU,cACvB,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;;AACxB,YAAO,8BACE,0CACc,mCAAY,WAA+B,CAAtB,AAAE,iBAAE,AAAW,+DAC3B,kDACZ,mCACH,mBAAO,AAAO,0BAClB,mBAAa;IAI5B;mBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO,0BAAc,AAAO;IAAO;;;IApCnE;IACF;;;EAoCpB","file":"spinning_circle.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__spinning_circle: spinning_circle
  };
});

//# sourceMappingURL=spinning_circle.ddc.js.map
