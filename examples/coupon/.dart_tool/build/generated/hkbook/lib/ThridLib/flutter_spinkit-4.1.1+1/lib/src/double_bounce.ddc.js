define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation) {
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
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const double_bounce = Object.create(dart.library);
  const $abs = dartx.abs;
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let intToTransform = () => (intToTransform = dart.constFn(dart.fnType(basic.Transform, [core.int])))();
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
        [_Location_name]: "size",
        [_Location_column]: 38,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 70,
        [_Location_line]: 53,
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
        [_Location_column]: 29,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/double_bounce.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 13,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 53,
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
        [_Location_column]: 28,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/double_bounce.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 50,
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
        [_Location_column]: 14,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/double_bounce.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/double_bounce.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 62,
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
        [_Location_column]: 9,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/double_bounce.dart"
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const color$ = dart.privateName(double_bounce, "SpinKitDoubleBounce.color");
  const size$ = dart.privateName(double_bounce, "SpinKitDoubleBounce.size");
  const itemBuilder$ = dart.privateName(double_bounce, "SpinKitDoubleBounce.itemBuilder");
  const duration$ = dart.privateName(double_bounce, "SpinKitDoubleBounce.duration");
  const controller$ = dart.privateName(double_bounce, "SpinKitDoubleBounce.controller");
  double_bounce.SpinKitDoubleBounce = class SpinKitDoubleBounce extends framework.StatefulWidget {
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
      return new double_bounce._SpinKitDoubleBounceState.new();
    }
  };
  (double_bounce.SpinKitDoubleBounce.new = function(opts) {
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
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/double_bounce.dart", 11, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/double_bounce.dart", 13, 16, "size != null");
    double_bounce.SpinKitDoubleBounce.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = double_bounce.SpinKitDoubleBounce.prototype;
  dart.addTypeTests(double_bounce.SpinKitDoubleBounce);
  dart.setMethodSignature(double_bounce.SpinKitDoubleBounce, () => ({
    __proto__: dart.getMethods(double_bounce.SpinKitDoubleBounce.__proto__),
    createState: dart.fnType(double_bounce._SpinKitDoubleBounceState, [])
  }));
  dart.setLibraryUri(double_bounce.SpinKitDoubleBounce, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/double_bounce.dart");
  dart.setFieldSignature(double_bounce.SpinKitDoubleBounce, () => ({
    __proto__: dart.getFields(double_bounce.SpinKitDoubleBounce.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller = dart.privateName(double_bounce, "_controller");
  const _animation = dart.privateName(double_bounce, "_animation");
  const _itemBuilder = dart.privateName(double_bounce, "_itemBuilder");
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
  let C13;
  let C12;
  let C17;
  let C16;
  let C15;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(double_bounce.SpinKitDoubleBounce) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(double_bounce.SpinKitDoubleBounce)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(double_bounce.SpinKitDoubleBounce));
  double_bounce._SpinKitDoubleBounceState = class _SpinKitDoubleBounceState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.addListener(dart.fn(() => this.setState(dart.fn(() => {
      }, VoidToNull())), VoidTovoid())), t0$.repeat({reverse: true}), t0$);
      this[_animation] = new (TweenOfdouble()).new({begin: -1.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: curves.Curves.easeInOut}));
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.Stack.new({children: ListOfWidget().generate(2, dart.fn(i => new basic.Transform.scale({scale: (1.0 - dart.notNull(i) - dart.notNull(this[_animation].value))[$abs](), child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: this[_itemBuilder](i), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), intToTransform())), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12});
    }
    [_itemBuilder](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, color: this.widget.color.withOpacity(0.6)}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
    }
  };
  (double_bounce._SpinKitDoubleBounceState.new = function() {
    this[_controller] = null;
    this[_animation] = null;
    double_bounce._SpinKitDoubleBounceState.__proto__.new.call(this);
    ;
  }).prototype = double_bounce._SpinKitDoubleBounceState.prototype;
  dart.addTypeTests(double_bounce._SpinKitDoubleBounceState);
  dart.setMethodSignature(double_bounce._SpinKitDoubleBounceState, () => ({
    __proto__: dart.getMethods(double_bounce._SpinKitDoubleBounceState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(double_bounce._SpinKitDoubleBounceState, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/double_bounce.dart");
  dart.setFieldSignature(double_bounce._SpinKitDoubleBounceState, () => ({
    __proto__: dart.getFields(double_bounce._SpinKitDoubleBounceState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_animation]: dart.fieldType(animation.Animation$(core.double))
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/double_bounce", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/double_bounce.dart": double_bounce
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["double_bounce.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAec;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGiB;IAA2B;;;QAlBhE;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,qEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAImB,MAFzB,4BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,gBAAY,cAAM,cAAS;yCAC3B,qBAAgB;AAC4F,MAAhH,mBAAa,AAA6B,kCAAhB,CAAC,UAAU,cAAa,4CAAwB,0BAA2B;IACvG;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,8BACE,+BACU,wBAAS,GAAG,QAAC,KACT,kCACqB,CAA5B,AAAI,AAAI,mBAAF,CAAC,iBAAG,AAAW,yCACb,mCAAoB,mBAAO,AAAO,0BAAc,mBAAa,CAAC;IAKxF;mBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAA8B,mCAAe,AAAO,AAAM,8BAAY;IAAM;;;IAnCvF;IACF;;;EAmCpB","file":"double_bounce.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__double_bounce: double_bounce
  };
});

//# sourceMappingURL=double_bounce.ddc.js.map
