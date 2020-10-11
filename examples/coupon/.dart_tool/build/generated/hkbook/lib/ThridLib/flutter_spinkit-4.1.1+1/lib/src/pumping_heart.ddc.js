define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation, packages__flutter_web__material) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const transitions = packages__flutter_web__animation.src__widgets__transitions;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const ui = packages__flutter_web_ui__ui.ui;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const animations = packages__flutter_web__src__animation__animation.src__animation__animations;
  const curves = packages__flutter_web__src__animation__animation.src__animation__curves;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const icons = packages__flutter_web__material.src__material__icons;
  const pumping_heart = Object.create(dart.library);
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
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
        __proto__: pumping_heart.SpinKitPumpCurve.prototype
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
        [_Location_name]: "scale",
        [_Location_column]: 28,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 47,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pumping_heart.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 20,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 30,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 51,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pumping_heart.dart"
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const color$ = dart.privateName(pumping_heart, "SpinKitPumpingHeart.color");
  const size$ = dart.privateName(pumping_heart, "SpinKitPumpingHeart.size");
  const itemBuilder$ = dart.privateName(pumping_heart, "SpinKitPumpingHeart.itemBuilder");
  const duration$ = dart.privateName(pumping_heart, "SpinKitPumpingHeart.duration");
  const controller$ = dart.privateName(pumping_heart, "SpinKitPumpingHeart.controller");
  pumping_heart.SpinKitPumpingHeart = class SpinKitPumpingHeart extends framework.StatefulWidget {
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
      return new pumping_heart._SpinKitPumpingHeartState.new();
    }
  };
  (pumping_heart.SpinKitPumpingHeart.new = function(opts) {
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
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pumping_heart.dart", 14, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pumping_heart.dart", 16, 16, "size != null");
    pumping_heart.SpinKitPumpingHeart.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pumping_heart.SpinKitPumpingHeart.prototype;
  dart.addTypeTests(pumping_heart.SpinKitPumpingHeart);
  dart.setMethodSignature(pumping_heart.SpinKitPumpingHeart, () => ({
    __proto__: dart.getMethods(pumping_heart.SpinKitPumpingHeart.__proto__),
    createState: dart.fnType(pumping_heart._SpinKitPumpingHeartState, [])
  }));
  dart.setLibraryUri(pumping_heart.SpinKitPumpingHeart, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pumping_heart.dart");
  dart.setFieldSignature(pumping_heart.SpinKitPumpingHeart, () => ({
    __proto__: dart.getFields(pumping_heart.SpinKitPumpingHeart.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller = dart.privateName(pumping_heart, "_controller");
  const _animation = dart.privateName(pumping_heart, "_animation");
  let C2;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C1;
  const _itemBuilder = dart.privateName(pumping_heart, "_itemBuilder");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C5;
  let C6;
  let C4;
  let C3;
  let C9;
  let C10;
  let C11;
  let C8;
  let C7;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(pumping_heart.SpinKitPumpingHeart) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(pumping_heart.SpinKitPumpingHeart)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(pumping_heart.SpinKitPumpingHeart));
  pumping_heart._SpinKitPumpingHeartState = class _SpinKitPumpingHeartState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.repeat(), t0$);
      this[_animation] = new (TweenOfdouble()).new({begin: 1.0, end: 1.25}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: C1 || CT.C1}));
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      return new transitions.ScaleTransition.new({scale: this[_animation], child: this[_itemBuilder](0), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
    [_itemBuilder](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new icon.Icon.new(icons.Icons.favorite, {color: this.widget.color, size: this.widget.size, $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
  };
  (pumping_heart._SpinKitPumpingHeartState.new = function() {
    this[_controller] = null;
    this[_animation] = null;
    pumping_heart._SpinKitPumpingHeartState.__proto__.new.call(this);
    ;
  }).prototype = pumping_heart._SpinKitPumpingHeartState.prototype;
  dart.addTypeTests(pumping_heart._SpinKitPumpingHeartState);
  dart.setMethodSignature(pumping_heart._SpinKitPumpingHeartState, () => ({
    __proto__: dart.getMethods(pumping_heart._SpinKitPumpingHeartState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(pumping_heart._SpinKitPumpingHeartState, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pumping_heart.dart");
  dart.setFieldSignature(pumping_heart._SpinKitPumpingHeartState, () => ({
    __proto__: dart.getFields(pumping_heart._SpinKitPumpingHeartState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_animation]: dart.fieldType(animation.Animation$(core.double))
  }));
  pumping_heart.SpinKitPumpCurve = class SpinKitPumpCurve extends curves.Curve {
    transform(t) {
      if (dart.notNull(t) >= 0.0 && dart.notNull(t) < 0.22) {
        return math.pow(t, 1.0) * 4.54545454;
      } else if (dart.notNull(t) >= 0.22 && dart.notNull(t) < 0.44) {
        return 1.0 - math.pow(dart.notNull(t) - 0.22, 1.0) * 4.54545454;
      } else if (dart.notNull(t) >= 0.44 && dart.notNull(t) < 0.5) {
        return 0.0;
      } else if (dart.notNull(t) >= 0.5 && dart.notNull(t) < 0.72) {
        return math.pow(dart.notNull(t) - 0.5, 1.0) * (4.54545454 / 2);
      } else if (dart.notNull(t) >= 0.72 && dart.notNull(t) < 0.94) {
        return 0.5 - math.pow(dart.notNull(t) - 0.72, 1.0) * (4.54545454 / 2);
      }
      return 0.0;
    }
  };
  (pumping_heart.SpinKitPumpCurve.new = function() {
    pumping_heart.SpinKitPumpCurve.__proto__.new.call(this);
    ;
  }).prototype = pumping_heart.SpinKitPumpCurve.prototype;
  dart.addTypeTests(pumping_heart.SpinKitPumpCurve);
  dart.setLibraryUri(pumping_heart.SpinKitPumpCurve, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pumping_heart.dart");
  dart.defineLazy(pumping_heart.SpinKitPumpCurve, {
    /*pumping_heart.SpinKitPumpCurve.magicNumber*/get magicNumber() {
      return 4.54545454;
    }
  });
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pumping_heart", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pumping_heart.dart": pumping_heart
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["pumping_heart.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkBc;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGiB;IAA2B;;;QAlBhE;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,qEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAEoG,MAA1G,4BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAAY;AAEY,MAD9G,mBAAa,AACR,kCADqB,UAAU,eACvB,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,6CAAuB,yBAAmB,mBAAa;IAChE;mBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,kBAAW,8BAAiB,AAAO,yBAAa,AAAO;IAAK;;;IAzB9C;IACF;;;EAyBpB;;;;;;;;;;;;;;cAQ0B;AACtB,UAAM,aAAF,CAAC,KAAI,OAAS,aAAF,CAAC,IAAG;AAClB,cAAO,AAAiB,UAAR,CAAC,EAAE;YACd,KAAM,aAAF,CAAC,KAAI,QAAU,aAAF,CAAC,IAAG;AAC1B,cAAO,AAAI,OAAG,AAAwB,SAAb,aAAF,CAAC,IAAG,MAAM;YAC5B,KAAM,aAAF,CAAC,KAAI,QAAU,aAAF,CAAC,IAAG;AAC1B,cAAO;YACF,KAAM,aAAF,CAAC,KAAI,OAAS,aAAF,CAAC,IAAG;AACzB,cAAO,AAAuB,UAAZ,aAAF,CAAC,IAAG,KAAK,QAAoB,aAAE;YAC1C,KAAM,aAAF,CAAC,KAAI,QAAU,aAAF,CAAC,IAAG;AAC1B,cAAO,AAAI,OAAG,AAAwB,SAAb,aAAF,CAAC,IAAG,MAAM,QAAoB,aAAE;;AAEzD,YAAO;IACT;;;AAlBM;;EAAkB;;;;MAEX,0CAAW","file":"pumping_heart.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__pumping_heart: pumping_heart
  };
});

//# sourceMappingURL=pumping_heart.ddc.js.map
