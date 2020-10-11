define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/vector_math/vector_math_64', 'packages/flutter_web/src/animation/animation', 'packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/tweens/delay_tween'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__vector_math__vector_math_64, packages__flutter_web__src__animation__animation, packages__hkbook__ThridLib__flutter_spinkit_4$461$461$431__lib__src__tweens__delay_tween) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const transitions = packages__flutter_web__animation.src__widgets__transitions;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const container = packages__flutter_web__animation.src__widgets__container;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const ui = packages__flutter_web_ui__ui.ui;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const delay_tween = packages__hkbook__ThridLib__flutter_spinkit_4$461$461$431__lib__src__tweens__delay_tween.ThridLib__flutter_spinkit_4$461$461$431__lib__src__tweens__delay_tween;
  const fading_four = Object.create(dart.library);
  const $_get = dartx._get;
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let intToPositioned = () => (intToPositioned = dart.constFn(dart.fnType(basic.Positioned, [core.int])))();
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
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 46,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 85,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 21,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 64,
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
        [_Location_column]: 26,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 19,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 62,
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
        [_Location_column]: 24,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 17,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 15,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 15,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four.dart"
      });
    }
  });
  const _name = dart.privateName(box_border, "_name");
  let C0;
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C1;
  const color$ = dart.privateName(fading_four, "SpinKitFadingFour.color");
  const shape$ = dart.privateName(fading_four, "SpinKitFadingFour.shape");
  const size$ = dart.privateName(fading_four, "SpinKitFadingFour.size");
  const itemBuilder$ = dart.privateName(fading_four, "SpinKitFadingFour.itemBuilder");
  const duration$ = dart.privateName(fading_four, "SpinKitFadingFour.duration");
  const controller$ = dart.privateName(fading_four, "SpinKitFadingFour.controller");
  fading_four.SpinKitFadingFour = class SpinKitFadingFour extends framework.StatefulWidget {
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
      return new fading_four._SpinKitFadingFourState.new();
    }
  };
  (fading_four.SpinKitFadingFour.new = function(opts) {
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
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four.dart", 13, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(shape != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four.dart", 15, 16, "shape != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four.dart", 16, 16, "size != null");
    fading_four.SpinKitFadingFour.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fading_four.SpinKitFadingFour.prototype;
  dart.addTypeTests(fading_four.SpinKitFadingFour);
  dart.setMethodSignature(fading_four.SpinKitFadingFour, () => ({
    __proto__: dart.getMethods(fading_four.SpinKitFadingFour.__proto__),
    createState: dart.fnType(fading_four._SpinKitFadingFourState, [])
  }));
  dart.setLibraryUri(fading_four.SpinKitFadingFour, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four.dart");
  dart.setFieldSignature(fading_four.SpinKitFadingFour, () => ({
    __proto__: dart.getFields(fading_four.SpinKitFadingFour.__proto__),
    color: dart.finalFieldType(ui.Color),
    shape: dart.finalFieldType(box_border.BoxShape),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller = dart.privateName(fading_four, "_controller");
  const _itemBuilder = dart.privateName(fading_four, "_itemBuilder");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C4;
  let C5;
  let C3;
  let C2;
  let C8;
  let C9;
  let C7;
  let C6;
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C21;
  let C22;
  let C19;
  let C18;
  let C25;
  let C24;
  let C23;
  let C28;
  let C29;
  let C27;
  let C26;
  let C32;
  let C31;
  let C30;
  let C35;
  let C34;
  let C33;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(fading_four.SpinKitFadingFour) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(fading_four.SpinKitFadingFour)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(fading_four.SpinKitFadingFour));
  fading_four._SpinKitFadingFourState = class _SpinKitFadingFourState extends State_SingleTickerProviderStateMixin$36 {
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
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Stack.new({children: ListOfWidget().generate(4, dart.fn(i => {
              let _position = dart.notNull(this.widget.size) * 0.5;
              return new basic.Positioned.fill({left: _position, top: _position, child: new basic.Transform.new({transform: vector_math_64.Matrix4.rotationZ(30.0 * (dart.notNull(i) * 2) * 0.0174533), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new transitions.FadeTransition.new({opacity: new delay_tween.DelayTween.new({begin: 0.0, end: 1.0, delay: this.delays[$_get](i)}).animate(this[_controller]), child: new basic.SizedBox.fromSize({size: new ui.Size.square(dart.notNull(this.widget.size) * 0.25), child: this[_itemBuilder](i), $creationLocationd_0dea112b090073317d4: C2 || CT.C2}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18});
            }, intToPositioned())), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30});
    }
    [_itemBuilder](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color, shape: this.widget.shape}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33});
    }
  };
  (fading_four._SpinKitFadingFourState.new = function() {
    this.delays = JSArrayOfdouble().of([0.0, -0.9, -0.6, -0.3]);
    this[_controller] = null;
    fading_four._SpinKitFadingFourState.__proto__.new.call(this);
    ;
  }).prototype = fading_four._SpinKitFadingFourState.prototype;
  dart.addTypeTests(fading_four._SpinKitFadingFourState);
  dart.setMethodSignature(fading_four._SpinKitFadingFourState, () => ({
    __proto__: dart.getMethods(fading_four._SpinKitFadingFourState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_itemBuilder]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(fading_four._SpinKitFadingFourState, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four.dart");
  dart.setFieldSignature(fading_four._SpinKitFadingFourState, () => ({
    __proto__: dart.getFields(fading_four._SpinKitFadingFourState.__proto__),
    delays: dart.finalFieldType(core.List$(core.double)),
    [_controller]: dart.fieldType(animation_controller.AnimationController)
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four.dart": fading_four
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fading_four.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkBc;;;;;;IACG;;;;;;IACF;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGe;IAAyB;;;QArB5D;QACC;QACA;QACA;QACA;QACA;QACA;;IALA;IACA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAM,KAAD,IAAI;UACT,AAAK,IAAD,IAAI;AACf,iEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmBF,MAAX;AAEoG,MAA1G,4BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAAY;IACpG;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAO,8BACW,mCACH,mBAAO,AAAO,0BAClB,+BACU,wBAAS,GAAG,QAAC;AACpB,8BAAwB,aAAZ,AAAO,oBAAO;AAChC,oBAAkB,kCACV,SAAS,OACV,SAAS,SACP,oCACc,iCAAU,AAAK,AAAU,QAAL,aAAF,CAAC,IAAG,KAAK,mBACvC,gCACgB,mCACd,6CACI,AAAmD,uCAAjC,UAAU,YAAY,AAAM,mBAAC,CAAC,YAAW,2BACpD,mCAAoB,mBAAmB,aAAZ,AAAO,oBAAO,cAAc,mBAAa,CAAC;;IASvG;mBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO,0BAAc,AAAO;IAAO;;;IA9CpE,cAAS,sBAAC,KAAI,CAAC,KAAK,CAAC,KAAK,CAAC;IAC1B;;;EA8CtB","file":"fading_four.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__fading_four: fading_four
  };
});

//# sourceMappingURL=fading_four.ddc.js.map
