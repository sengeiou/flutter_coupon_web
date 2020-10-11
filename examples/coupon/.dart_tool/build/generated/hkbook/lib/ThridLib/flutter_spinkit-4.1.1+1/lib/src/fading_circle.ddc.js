define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/vector_math/vector_math_64', 'packages/flutter_web/src/animation/animation', 'packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/tweens/delay_tween'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__vector_math__vector_math_64, packages__flutter_web__src__animation__animation, packages__hkbook__ThridLib__flutter_spinkit_4$461$461$431__lib__src__tweens__delay_tween) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const transitions = packages__flutter_web__animation.src__widgets__transitions;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const container = packages__flutter_web__animation.src__widgets__container;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const ui = packages__flutter_web_ui__ui.ui;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const delay_tween = packages__hkbook__ThridLib__flutter_spinkit_4$461$461$431__lib__src__tweens__delay_tween.ThridLib__flutter_spinkit_4$461$461$431__lib__src__tweens__delay_tween;
  const fading_circle = Object.create(dart.library);
  const $_get = dartx._get;
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let intToPositioned = () => (intToPositioned = dart.constFn(dart.fnType(basic.Positioned, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1200000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 46,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 85,
        [_Location_line]: 61,
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
        [_Location_column]: 37,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 21,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 61,
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
        [_Location_column]: 26,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 19,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 59,
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
        [_Location_column]: 24,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 17,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 15,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 15,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 49,
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
        [_Location_column]: 23,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle.dart"
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const color$ = dart.privateName(fading_circle, "SpinKitFadingCircle.color");
  const size$ = dart.privateName(fading_circle, "SpinKitFadingCircle.size");
  const itemBuilder$ = dart.privateName(fading_circle, "SpinKitFadingCircle.itemBuilder");
  const duration$ = dart.privateName(fading_circle, "SpinKitFadingCircle.duration");
  const controller$ = dart.privateName(fading_circle, "SpinKitFadingCircle.controller");
  fading_circle.SpinKitFadingCircle = class SpinKitFadingCircle extends framework.StatefulWidget {
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
      return new fading_circle._SpinKitFadingCircleState.new();
    }
  };
  (fading_circle.SpinKitFadingCircle.new = function(opts) {
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
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle.dart", 12, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle.dart", 14, 16, "size != null");
    fading_circle.SpinKitFadingCircle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fading_circle.SpinKitFadingCircle.prototype;
  dart.addTypeTests(fading_circle.SpinKitFadingCircle);
  dart.setMethodSignature(fading_circle.SpinKitFadingCircle, () => ({
    __proto__: dart.getMethods(fading_circle.SpinKitFadingCircle.__proto__),
    createState: dart.fnType(fading_circle._SpinKitFadingCircleState, [])
  }));
  dart.setLibraryUri(fading_circle.SpinKitFadingCircle, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle.dart");
  dart.setFieldSignature(fading_circle.SpinKitFadingCircle, () => ({
    __proto__: dart.getFields(fading_circle.SpinKitFadingCircle.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller = dart.privateName(fading_circle, "_controller");
  const _itemBuilder = dart.privateName(fading_circle, "_itemBuilder");
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
  let C12;
  let C10;
  let C9;
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C20;
  let C21;
  let C18;
  let C17;
  let C24;
  let C23;
  let C22;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C30;
  let C29;
  let C34;
  let C33;
  let C32;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(fading_circle.SpinKitFadingCircle) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(fading_circle.SpinKitFadingCircle)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(fading_circle.SpinKitFadingCircle));
  fading_circle._SpinKitFadingCircleState = class _SpinKitFadingCircleState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.repeat(), t0$);
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Stack.new({children: ListOfWidget().generate(12, dart.fn(i => {
              let _position = dart.notNull(this.widget.size) * 0.5;
              return new basic.Positioned.fill({left: _position, top: _position, child: new basic.Transform.new({transform: vector_math_64.Matrix4.rotationZ(30.0 * dart.notNull(i) * 0.0174533), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new transitions.FadeTransition.new({opacity: new delay_tween.DelayTween.new({begin: 0.0, end: 1.0, delay: this.delays[$_get](i)}).animate(this[_controller]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(dart.notNull(this.widget.size) * 0.15), child: this[_itemBuilder](i), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
            }, intToPositioned())), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
    [_itemBuilder](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: box_border.BoxShape.circle}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32});
    }
  };
  (fading_circle._SpinKitFadingCircleState.new = function() {
    this.delays = JSArrayOfdouble().of([0.0, -1.1, -1.0, -0.9, -0.8, -0.7, -0.6, -0.5, -0.4, -0.3, -0.2, -0.1]);
    this[_controller] = null;
    fading_circle._SpinKitFadingCircleState.__proto__.new.call(this);
    ;
  }).prototype = fading_circle._SpinKitFadingCircleState.prototype;
  dart.addTypeTests(fading_circle._SpinKitFadingCircleState);
  dart.setMethodSignature(fading_circle._SpinKitFadingCircleState, () => ({
    __proto__: dart.getMethods(fading_circle._SpinKitFadingCircleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(fading_circle._SpinKitFadingCircleState, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle.dart");
  dart.setFieldSignature(fading_circle._SpinKitFadingCircleState, () => ({
    __proto__: dart.getFields(fading_circle._SpinKitFadingCircleState.__proto__),
    delays: dart.finalFieldType(core.List$(core.double)),
    [_controller]: dart.fieldType(animation_controller.AnimationController)
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle.dart": fading_circle
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fading_circle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgBc;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGiB;IAA2B;;;QAlBhE;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,qEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAEoG,MAA1G,4BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAAY;IACpG;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,8BACW,mCACH,mBAAO,AAAO,0BAClB,+BACU,wBAAS,IAAI,QAAC;AACrB,8BAAwB,aAAZ,AAAO,oBAAO;AAChC,oBAAkB,kCACV,SAAS,OACV,SAAS,SACP,oCACc,iCAAU,AAAK,AAAI,oBAAF,CAAC,IAAG,mBACjC,gCACgB,mCACd,6CACI,AAAmD,uCAAjC,UAAU,YAAY,AAAM,mBAAC,CAAC,YAAW,2BACpD,mCAAoB,mBAAmB,aAAZ,AAAO,oBAAO,cAAc,mBAAa,CAAC;;IASvG;mBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO,0BAAuB;IAAQ;;;IA9CvE,cAAS,sBAAC,KAAI,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC;IAC1E;;;EA8CtB","file":"fading_circle.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__fading_circle: fading_circle
  };
});

//# sourceMappingURL=fading_circle.ddc.js.map
