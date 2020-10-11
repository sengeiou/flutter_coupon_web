define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__animation__animation) {
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
  const transitions = packages__flutter_web__animation.src__widgets__transitions;
  const container = packages__flutter_web__animation.src__widgets__container;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const ui = packages__flutter_web_ui__ui.ui;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const animations = packages__flutter_web__src__animation__animation.src__animation__animations;
  const curves = packages__flutter_web__src__animation__animation.src__animation__curves;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const cube_grid = Object.create(dart.library);
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
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
        [Interval_end]: 0.6,
        [Interval_begin]: 0.1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C2 || CT.C2,
        [Interval_end]: 0.7,
        [Interval_begin]: 0.2
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C2 || CT.C2,
        [Interval_end]: 0.8,
        [Interval_begin]: 0.3
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C2 || CT.C2,
        [Interval_end]: 0.9,
        [Interval_begin]: 0.4
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: curves.Interval.prototype,
        [Interval_curve]: C2 || CT.C2,
        [Interval_end]: 1,
        [Interval_begin]: 0.5
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 65,
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
        [_Location_column]: 11,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/cube_grid.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/cube_grid.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 83,
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
        [_Location_column]: 11,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/cube_grid.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/cube_grid.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/cube_grid.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 32,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 68,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/cube_grid.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 7,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/cube_grid.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 22,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/cube_grid.dart"
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const color$ = dart.privateName(cube_grid, "SpinKitCubeGrid.color");
  const size$ = dart.privateName(cube_grid, "SpinKitCubeGrid.size");
  const itemBuilder$ = dart.privateName(cube_grid, "SpinKitCubeGrid.itemBuilder");
  const duration$ = dart.privateName(cube_grid, "SpinKitCubeGrid.duration");
  const controller$ = dart.privateName(cube_grid, "SpinKitCubeGrid.controller");
  cube_grid.SpinKitCubeGrid = class SpinKitCubeGrid extends framework.StatefulWidget {
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
      return new cube_grid._SpinKitCubeGridState.new();
    }
  };
  (cube_grid.SpinKitCubeGrid.new = function(opts) {
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
    if (!(!(BuildContextAndintToWidget().is(itemBuilder) && ui.Color.is(color)) && !(itemBuilder == null && color == null))) dart.assertFailed("You should specify either a itemBuilder or a color", "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/cube_grid.dart", 11, 16, "!(itemBuilder is IndexedWidgetBuilder && color is Color) && !(itemBuilder == null && color == null)");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/cube_grid.dart", 13, 16, "size != null");
    cube_grid.SpinKitCubeGrid.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = cube_grid.SpinKitCubeGrid.prototype;
  dart.addTypeTests(cube_grid.SpinKitCubeGrid);
  dart.setMethodSignature(cube_grid.SpinKitCubeGrid, () => ({
    __proto__: dart.getMethods(cube_grid.SpinKitCubeGrid.__proto__),
    createState: dart.fnType(cube_grid._SpinKitCubeGridState, [])
  }));
  dart.setLibraryUri(cube_grid.SpinKitCubeGrid, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/cube_grid.dart");
  dart.setFieldSignature(cube_grid.SpinKitCubeGrid, () => ({
    __proto__: dart.getFields(cube_grid.SpinKitCubeGrid.__proto__),
    color: dart.finalFieldType(ui.Color),
    size: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.int])),
    duration: dart.finalFieldType(core.Duration),
    controller: dart.finalFieldType(animation_controller.AnimationController)
  }));
  const _controller = dart.privateName(cube_grid, "_controller");
  const _anim1 = dart.privateName(cube_grid, "_anim1");
  const _anim2 = dart.privateName(cube_grid, "_anim2");
  const _anim3 = dart.privateName(cube_grid, "_anim3");
  const _anim4 = dart.privateName(cube_grid, "_anim4");
  const _anim5 = dart.privateName(cube_grid, "_anim5");
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C2;
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  let C1;
  let C3;
  let C4;
  let C5;
  let C6;
  const _square = dart.privateName(cube_grid, "_square");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C9;
  let C10;
  let C11;
  let C8;
  let C7;
  let C14;
  let C15;
  let C16;
  let C13;
  let C12;
  let C19;
  let C20;
  let C21;
  let C18;
  let C17;
  let C24;
  let C25;
  let C26;
  let C23;
  let C22;
  let C29;
  let C30;
  let C28;
  let C27;
  const _itemBuilder = dart.privateName(cube_grid, "_itemBuilder");
  let C33;
  let C34;
  let C32;
  let C31;
  let C37;
  let C38;
  let C36;
  let C35;
  let C41;
  let C40;
  let C39;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(cube_grid.SpinKitCubeGrid) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(cube_grid.SpinKitCubeGrid)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(cube_grid.SpinKitCubeGrid));
  cube_grid._SpinKitCubeGridState = class _SpinKitCubeGridState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller] = (t0$ = (t0 = this.widget.controller, t0 == null ? new animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}) : t0), t0$.repeat({reverse: true}), t0$);
      this[_anim1] = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: C1 || CT.C1}));
      this[_anim2] = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: C3 || CT.C3}));
      this[_anim3] = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: C4 || CT.C4}));
      this[_anim4] = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: C5 || CT.C5}));
      this[_anim5] = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: C6 || CT.C6}));
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      return new basic.SizedBox.fromSize({size: new ui.Size.square(this.widget.size), child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, mainAxisSize: flex.MainAxisSize.max, children: JSArrayOfWidget().of([new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([this[_square](this[_anim3], 0), this[_square](this[_anim4], 1), this[_square](this[_anim5], 2)]), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([this[_square](this[_anim2], 3), this[_square](this[_anim3], 4), this[_square](this[_anim4], 5)]), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([this[_square](this[_anim1], 6), this[_square](this[_anim2], 7), this[_square](this[_anim3], 8)]), $creationLocationd_0dea112b090073317d4: C17 || CT.C17})]), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27});
    }
    [_square](animation, index) {
      return new transitions.ScaleTransition.new({scale: animation, child: new basic.SizedBox.fromSize({size: new ui.Size.square(dart.notNull(this.widget.size) / 3), child: this[_itemBuilder](index), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35});
    }
    [_itemBuilder](index) {
      return this.widget.itemBuilder != null ? this.widget.itemBuilder(this.context, index) : new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: this.widget.color}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39});
    }
  };
  (cube_grid._SpinKitCubeGridState.new = function() {
    this[_controller] = null;
    this[_anim1] = null;
    this[_anim2] = null;
    this[_anim3] = null;
    this[_anim4] = null;
    this[_anim5] = null;
    cube_grid._SpinKitCubeGridState.__proto__.new.call(this);
    ;
  }).prototype = cube_grid._SpinKitCubeGridState.prototype;
  dart.addTypeTests(cube_grid._SpinKitCubeGridState);
  dart.setMethodSignature(cube_grid._SpinKitCubeGridState, () => ({
    __proto__: dart.getMethods(cube_grid._SpinKitCubeGridState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_square]: dart.fnType(framework.Widget, [animation.Animation$(core.double), core.int]),
    [_itemBuilder]: dart.fnType(framework.Widget, [core.int])
  }));
  dart.setLibraryUri(cube_grid._SpinKitCubeGridState, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/cube_grid.dart");
  dart.setFieldSignature(cube_grid._SpinKitCubeGridState, () => ({
    __proto__: dart.getFields(cube_grid._SpinKitCubeGridState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_anim1]: dart.fieldType(animation.Animation$(core.double)),
    [_anim2]: dart.fieldType(animation.Animation$(core.double)),
    [_anim3]: dart.fieldType(animation.Animation$(core.double)),
    [_anim4]: dart.fieldType(animation.Animation$(core.double)),
    [_anim5]: dart.fieldType(animation.Animation$(core.double))
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/cube_grid", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/cube_grid.dart": cube_grid
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["cube_grid.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAec;;;;;;IACC;;;;;;IACc;;;;;;IACZ;;;;;;IACW;;;;;;;AAGa;IAAuB;;;QAlBxD;QACC;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;UAC+D,EAA3C,gCAAZ,WAAW,KAAkC,YAAN,KAAK,QAAgB,AAAY,WAAD,IAAI,QAAQ,AAAM,KAAD,IAAI,0BACjG;UACG,AAAK,IAAD,IAAI;AACf,6DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBF,MAAX;AAGmB,MADzB,4BAAiC,KAAlB,AAAO,8BAAA,OAAc,yDAA2B,gBAAgB,AAAO,8BAClF,qBAAgB;AAEqF,MADzG,eAAS,AACJ,kCADiB,UAAU,cACnB,4CAAwB;AAEoE,MADzG,eAAS,AACJ,kCADiB,UAAU,cACnB,4CAAwB;AAEoE,MADzG,eAAS,AACJ,kCADiB,UAAU,cACnB,4CAAwB;AAEoE,MADzG,eAAS,AACJ,kCADiB,UAAU,cACnB,4CAAwB;AAEoE,MADzG,eAAS,AACJ,kCADiB,UAAU,cACnB,4CAAwB;IACvC;;AAIuB,MAArB,AAAY;AACG,MAAT;IACR;UAG0B;AACxB,YAAgB,oCACH,mBAAO,AAAO,0BAClB,yCACgC,6CACV,iCACT,sBAChB,iCAC6B,0CACU,yCACnB,sBAChB,cAAQ,cAAQ,IAChB,cAAQ,cAAQ,IAChB,cAAQ,cAAQ,6DAGpB,iCAC6B,0CACU,yCACnB,sBAChB,cAAQ,cAAQ,IAChB,cAAQ,cAAQ,IAChB,cAAQ,cAAQ,+DAGpB,iCAC6B,0CACU,yCACnB,sBAChB,cAAQ,cAAQ,IAChB,cAAQ,cAAQ,IAChB,cAAQ,cAAQ;IAM5B;cAEiC,WAAe;AAC9C,YAAO,6CACE,SAAS,SACA,mCAAoB,mBAAmB,aAAZ,AAAO,oBAAO,WAAW,mBAAa,KAAK;IAE1F;mBAEwB;AAAU,YAAA,AAAO,AAAY,4BAAG,OAClD,AAAO,wBAAY,cAAS,KAAK,IACjC,4CAAyB,6CAAqB,AAAO;IAAO;;;IA5E9C;IACF;IAAQ;IAAQ;IAAQ;IAAQ;;;EA4EpD","file":"cube_grid.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__cube_grid: cube_grid
  };
});

//# sourceMappingURL=cube_grid.ddc.js.map
