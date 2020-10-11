define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/tweens/delay_tween', 'packages/flutter_web/src/animation/animation', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__hkbook__ThridLib__flutter_spinkit_4$461$461$431__lib__src__tweens__delay_tween, packages__flutter_web__src__animation__animation, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const container = packages__flutter_web__animation.src__widgets__container;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const transitions = packages__flutter_web__animation.src__widgets__transitions;
  const ui = packages__flutter_web_ui__ui.ui;
  const delay_tween = packages__hkbook__ThridLib__flutter_spinkit_4$461$461$431__lib__src__tweens__delay_tween.ThridLib__flutter_spinkit_4$461$461$431__lib__src__tweens__delay_tween;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const wave = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let intToScaleYWidget = () => (intToScaleYWidget = dart.constFn(dart.fnType(wave.ScaleYWidget, [core.int])))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: wave.SpinKitWaveType.prototype,
        [_name$]: "SpinKitWaveType.start",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: wave.SpinKitWaveType.prototype,
        [_name$]: "SpinKitWaveType.end",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: wave.SpinKitWaveType.prototype,
        [_name$]: "SpinKitWaveType.center",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], wave.SpinKitWaveType);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1200000
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 40,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 84,
        [_Location_line]: 59,
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
        [_Location_column]: 31,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scaleY",
        [_Location_column]: 15,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
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
        [_Location_column]: 20,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 56,
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
        [_Location_column]: 16,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 54,
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
        [_Location_column]: 23,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 22,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 83,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 105,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave.dart"
      });
    }
  });
  const _name$ = dart.privateName(wave, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  wave.SpinKitWaveType = class SpinKitWaveType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (wave.SpinKitWaveType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = wave.SpinKitWaveType.prototype;
  dart.addTypeTests(wave.SpinKitWaveType);
  dart.setLibraryUri(wave.SpinKitWaveType, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave.dart");
  dart.setFieldSignature(wave.SpinKitWaveType, () => ({
    __proto__: dart.getFields(wave.SpinKitWaveType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(wave.SpinKitWaveType, ['toString']);
  wave.SpinKitWaveType.start = C0 || CT.C0;
  wave.SpinKitWaveType.end = C1 || CT.C1;
  wave.SpinKitWaveType.center = C2 || CT.C2;
  wave.SpinKitWaveType.values = C3 || CT.C3;
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C4;
  const color$ = dart.privateName(wave, "SpinKitWave.color");
  const size$ = dart.privateName(wave, "SpinKitWave.size");
  const type$ = dart.privateName(wave, "SpinKitWave.type");
  const itemBuilder$ = dart.privateName(wave, "SpinKitWave.itemBuilder");
  const duration$ = dart.privateName(wave, "SpinKitWave.duration");
  const controller$ = dart.privateName(wave, "SpinKitWave.controller");
  wave.SpinKitWave = class SpinKitWave extends framework.StatefulWidget {
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
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
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
      return new wave._SpinKitWaveState.new();
    }
  };
  (wave.SpinKitWave.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let type = opts && 'type' in opts ? opts.type : C0 || CT.C0;
    let size = opts && 'size' in opts ? opts.size : 50;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let duration = opts && 'duration' in opts ? opts.duration : C4 || CT.C4;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$] = color;
    this[type$] = type;
    this[size$] = size;
    this[itemBuilder$] = itemBuilder;
    this[duration$] = duration;
    this[controller$] = controller;
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave.dart", 15, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(type != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave.dart", 17, 16, "type != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave.dart", 18, 16, "size != null");
    wave.SpinKitWave.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = wave.SpinKitWave.prototype;
  dart.addTypeTests(wave.SpinKitWave);
  dart.setMethodSignature(wave.SpinKitWave, () => ({
    __proto__: dart.getMethods(wave.SpinKitWave.__proto__),
    createState: dart.fnType(wave._SpinKitWaveState, [])
  }));
  dart.setLibraryUri(wave.SpinKitWave, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave.dart");
  dart.setFieldSignature(wave.SpinKitWave, () => ({
    __proto__: dart.getFields(wave.SpinKitWave.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    type: dart.finalFieldType(wave.SpinKitWaveType),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller = dart.privateName(wave, "_controller");
  const _itemBuilder = dart.privateName(wave, "_itemBuilder");
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
  let C10;
  let C9;
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C22;
  let C21;
  let C26;
  let C25;
  let C24;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(wave.SpinKitWave) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(wave.SpinKitWave)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(wave.SpinKitWave));
  wave._SpinKitWaveState = class _SpinKitWaveState extends State_SingleTickerProviderStateMixin$36 {
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
      let _bars = this.getAnimationDelay();
      return new basic.Center.new({child: new basic.SizedBox.fromSize({size: new ui.Size.new(dart.notNull(this.widget.size) * 1.25, this.widget.size), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: ListOfWidget().generate(_bars[$length], dart.fn(i => new wave.ScaleYWidget.new({scaleY: new delay_tween.DelayTween.new({begin: 0.4, end: 1.0, delay: _bars[$_get](i)}).animate(this[_controller]), child: new basic.SizedBox.fromSize({size: new ui.Size.new(dart.notNull(this.widget.size) * 0.2, this.widget.size), child: this[_itemBuilder](i), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), intToScaleYWidget())), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21});
    }
    getAnimationDelay() {
      switch (this.widget.type) {
        case C0 || CT.C0:
        {
          return JSArrayOfdouble().of([-1.2, -1.1, -1.0, -0.9, -0.8]);
        }
        case C1 || CT.C1:
        {
          return JSArrayOfdouble().of([-0.8, -0.9, -1.0, -1.1, -1.2]);
        }
        case C2 || CT.C2:
        default:
        {
          return JSArrayOfdouble().of([-0.75, -0.95, -1.2, -0.95, -0.75]);
        }
      }
    }
    [_itemBuilder](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24});
    }
  };
  (wave._SpinKitWaveState.new = function() {
    this[_controller] = null;
    wave._SpinKitWaveState.__proto__.new.call(this);
    ;
  }).prototype = wave._SpinKitWaveState.prototype;
  dart.addTypeTests(wave._SpinKitWaveState);
  dart.setMethodSignature(wave._SpinKitWaveState, () => ({
    __proto__: dart.getMethods(wave._SpinKitWaveState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    getAnimationDelay: dart.fnType(core.List$(core.double), []),
    [_itemBuilder]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(wave._SpinKitWaveState, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave.dart");
  dart.setFieldSignature(wave._SpinKitWaveState, () => ({
    __proto__: dart.getFields(wave._SpinKitWaveState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController)
  }));
  const Alignment_y = dart.privateName(alignment, "Alignment.y");
  const Alignment_x = dart.privateName(alignment, "Alignment.x");
  let C27;
  let C30;
  let C31;
  let C32;
  let C29;
  let C28;
  const child$ = dart.privateName(wave, "ScaleYWidget.child");
  const alignment$ = dart.privateName(wave, "ScaleYWidget.alignment");
  wave.ScaleYWidget = class ScaleYWidget extends transitions.AnimatedWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get scale() {
      return AnimationOfdouble()._check(this.listenable);
    }
    build(context) {
      let t0;
      return new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.scale(1.0, this.scale.value, 1.0), t0), alignment: this.alignment, child: this.child, $creationLocationd_0dea112b090073317d4: C28 || CT.C28});
    }
  };
  (wave.ScaleYWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scaleY = opts && 'scaleY' in opts ? opts.scaleY : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C27 || CT.C27;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[alignment$] = alignment;
    wave.ScaleYWidget.__proto__.new.call(this, {key: key, listenable: scaleY, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = wave.ScaleYWidget.prototype;
  dart.addTypeTests(wave.ScaleYWidget);
  dart.setMethodSignature(wave.ScaleYWidget, () => ({
    __proto__: dart.getMethods(wave.ScaleYWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(wave.ScaleYWidget, () => ({
    __proto__: dart.getGetters(wave.ScaleYWidget.__proto__),
    scale: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(wave.ScaleYWidget, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave.dart");
  dart.setFieldSignature(wave.ScaleYWidget, () => ({
    __proto__: dart.getFields(wave.ScaleYWidget.__proto__),
    child: dart.finalFieldType(framework.Widget),
    alignment: dart.finalFieldType(alignment.Alignment)
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave.dart": wave
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["wave.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAG0C;;8CAArC;;;;EAAqC;;;;;;;;;;;;;;;;;;;;;;IAiB5B;;;;;;IACC;;;;;;IACS;;;;;;IACK;;;;;;IACZ;;;;;;IACW;;;;;;;AAGS;IAAmB;;;QArBhD;QACC;QACA;QACA;QACA;QACA;QACA;;IALA;IACA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;UACR,AAAK,IAAD,IAAI;AACf,oDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAEoG,MAA1G,4BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAAY;IACpG;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACL,kBAAQ;AAC3B,YAAO,8BACW,mCACR,gBAAiB,aAAZ,AAAO,oBAAO,MAAM,AAAO,0BAC/B,sCACgC,+CACtB,wBAAS,AAAM,KAAD,WAAS,QAAC,KAC9B,mCACG,AAAiD,uCAA/B,UAAS,YAAY,AAAK,KAAA,QAAC,CAAC,YAAW,2BACjD,mCAAe,gBAAiB,aAAZ,AAAO,oBAAO,KAAK,AAAO,0BAAc,mBAAa,CAAC;IAMtG;;AAGE,cAAQ,AAAO;;;AAEX,gBAAO,uBAAC,CAAC,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,KAAI,CAAC;;;;AAEhC,gBAAO,uBAAC,CAAC,KAAI,CAAC,KAAI,CAAC,KAAK,CAAC,KAAK,CAAC;;;;;AAG/B,gBAAO,uBAAC,CAAC,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC,MAAM,CAAC;;;IAE1C;mBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO;IAAO;;;IAhD9C;;;EAiDtB;;;;;;;;;;;;;;;;;;;;;;;;IAUe;;;;;;IACG;;;;;;;AAEe;IAAU;UAGf;;AACxB,YAAO,2CAA6B,mCAAY,SAAM,KAAK,AAAM,kBAAO,sBAAiB,uBAAkB;IAC7G;;;QAdM;QACwB;QACb;QACV;;IADU;IACV;AACF,qDAAW,GAAG,cAAc,MAAM;;EAAC","file":"wave.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__wave: wave
  };
});

//# sourceMappingURL=wave.ddc.js.map
