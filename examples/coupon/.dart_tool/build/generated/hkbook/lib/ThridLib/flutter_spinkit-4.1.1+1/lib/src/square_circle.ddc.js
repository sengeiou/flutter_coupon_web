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
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const ui = packages__flutter_web_ui__ui.ui;
  const animations = packages__flutter_web__src__animation__animation.src__animation__animations;
  const curves = packages__flutter_web__src__animation__animation.src__animation__curves;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const fractional_offset = packages__flutter_web__src__animation__animation.src__painting__fractional_offset;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const square_circle = Object.create(dart.library);
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 500000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 60,
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
        [_Location_column]: 25,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/square_circle.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 9,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/square_circle.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/square_circle.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 69,
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
        [_Location_column]: 9,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/square_circle.dart"
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const color$ = dart.privateName(square_circle, "SpinKitSquareCircle.color");
  const size$ = dart.privateName(square_circle, "SpinKitSquareCircle.size");
  const itemBuilder$ = dart.privateName(square_circle, "SpinKitSquareCircle.itemBuilder");
  const duration$ = dart.privateName(square_circle, "SpinKitSquareCircle.duration");
  const controller$ = dart.privateName(square_circle, "SpinKitSquareCircle.controller");
  square_circle.SpinKitSquareCircle = class SpinKitSquareCircle extends framework.StatefulWidget {
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
      return new square_circle._SpinKitSquareCircleState.new();
    }
  };
  (square_circle.SpinKitSquareCircle.new = function(opts) {
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
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/square_circle.dart", 13, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/square_circle.dart", 15, 16, "size != null");
    square_circle.SpinKitSquareCircle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = square_circle.SpinKitSquareCircle.prototype;
  dart.addTypeTests(square_circle.SpinKitSquareCircle);
  dart.setMethodSignature(square_circle.SpinKitSquareCircle, () => ({
    __proto__: dart.getMethods(square_circle.SpinKitSquareCircle.__proto__),
    createState: dart.fnType(square_circle._SpinKitSquareCircleState, [])
  }));
  dart.setLibraryUri(square_circle.SpinKitSquareCircle, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/square_circle.dart");
  dart.setFieldSignature(square_circle.SpinKitSquareCircle, () => ({
    __proto__: dart.getFields(square_circle.SpinKitSquareCircle.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _itembuilder = dart.privateName(square_circle, "_itembuilder");
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
  let C9;
  let C6;
  let C5;
  let C12;
  let C11;
  let C10;
  let C15;
  let C14;
  let C13;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(square_circle.SpinKitSquareCircle) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(square_circle.SpinKitSquareCircle)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(square_circle.SpinKitSquareCircle));
  square_circle._SpinKitSquareCircleState = class _SpinKitSquareCircleState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0, t0$;
      super.initState();
      this.controller = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat({reverse: true}), t0$);
      let animation = new animations.CurvedAnimation.new({parent: this.controller, curve: curves.Curves.easeInOutCubic});
      this.animationCurve = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(animation);
      this.animationSize = new (TweenOfdouble()).new({begin: 0.5, end: 1.0}).animate(animation);
    }
    dispose() {
      this.controller.dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      let sizeValue = dart.notNull(this.widget.size) * dart.notNull(this.animationSize.value);
      return new basic.Center.new({child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.rotateZ(dart.notNull(this.animationCurve.value) * 3.141592653589793), t0), alignment: fractional_offset.FractionalOffset.center, child: new basic.SizedBox.fromSize({size: new ui.Size.square(sizeValue), child: this[_itembuilder](0, 0.5 * sizeValue * dart.notNull(this.animationCurve.value)), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
    }
    [_itembuilder](index, curveValue) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(curveValue))}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13});
    }
  };
  (square_circle._SpinKitSquareCircleState.new = function() {
    this.controller = null;
    this.animationCurve = null;
    this.animationSize = null;
    square_circle._SpinKitSquareCircleState.__proto__.new.call(this);
    ;
  }).prototype = square_circle._SpinKitSquareCircleState.prototype;
  dart.addTypeTests(square_circle._SpinKitSquareCircleState);
  dart.setMethodSignature(square_circle._SpinKitSquareCircleState, () => ({
    __proto__: dart.getMethods(square_circle._SpinKitSquareCircleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itembuilder]: dart.fnType(framework.Widget, [core.int, core.double])
  }));
  dart.setLibraryUri(square_circle._SpinKitSquareCircleState, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/square_circle.dart");
  dart.setFieldSignature(square_circle._SpinKitSquareCircleState, () => ({
    __proto__: dart.getFields(square_circle._SpinKitSquareCircleState.__proto__),
    controller: dart.fieldType(animation_controller.AnimationController),
    animationCurve: dart.fieldType(animation.Animation$(core.double)),
    animationSize: dart.fieldType(animation.Animation$(core.double))
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/square_circle", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/square_circle.dart": square_circle
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["square_circle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiBc;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGiB;IAA2B;;;QAlBhE;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,qEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmBF,MAAX;AAImB,MAFzB,0BAAgC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BACjF,gBAAY,cAAM,cAAS;yCAC3B,qBAAgB;AACd,sBAAY,4CAAwB,wBAA0B;AACL,MAA/D,sBAAiB,AAA4B,kCAAf,UAAU,cAAa,SAAS;AACA,MAA9D,qBAAgB,AAA4B,kCAAf,UAAU,cAAa,SAAS;IAC/D;;AAIsB,MAApB,AAAW;AACI,MAAT;IACR;UAG0B;;AAClB,sBAAwB,aAAZ,AAAO,iCAAO,AAAc;AAC9C,YAAO,8BACE,0CACc,mCAAY,WAA6B,aAArB,AAAe,iEAC1B,kDACZ,mCACH,mBAAO,SAAS,UACpB,mBAAa,GAAG,AAAI,AAAY,MAAV,SAAS,gBAAG,AAAe;IAIhE;mBAEwB,OAAc;AAAe,YAAA,AAAO,AAAY,4BAAG,OACrE,AAAO,wBAAY,cAAS,KAAK,IACjC,4CACc,6CACH,AAAO,iCACa,mCAAW,uBAAS,UAAU;IAE5D;;;IA5Ca;IACF;IACA;;;EA2CpB","file":"square_circle.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__square_circle: square_circle
  };
});

//# sourceMappingURL=square_circle.ddc.js.map
