define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__foundation__assertions, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const layout_builder = packages__flutter_web__animation.src__widgets__layout_builder;
  const binding = packages__flutter_web__animation.src__scheduler__binding;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const box = packages__flutter_web__animation.src__rendering__box;
  const sliver = packages__flutter_web__animation.src__widgets__sliver;
  const container = packages__flutter_web__animation.src__widgets__container;
  const object = packages__flutter_web__animation.src__rendering__object;
  const sliver$ = packages__flutter_web__animation.src__rendering__sliver;
  const change_notifier = packages__flutter_web__src__foundation__assertions.src__foundation__change_notifier;
  const basic_types = packages__flutter_web__src__animation__animation.src__painting__basic_types;
  const ui = packages__flutter_web_ui__ui.ui;
  const empty_widget = Object.create(dart.library);
  let ValueNotifierOfAxisDirection = () => (ValueNotifierOfAxisDirection = dart.constFn(change_notifier.ValueNotifier$(basic_types.AxisDirection)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let DurationToNull = () => (DurationToNull = dart.constFn(dart.fnType(core.Null, [core.Duration])))();
  let BuildContextAndBoxConstraintsToSizedBox = () => (BuildContextAndBoxConstraintsToSizedBox = dart.constFn(dart.fnType(basic.SizedBox, [framework.BuildContext, box.BoxConstraints])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/widget/empty_widget.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 15,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/widget/empty_widget.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "axisDirectionNotifier",
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
        [_Location_column]: 11,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/widget/empty_widget.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 60,
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
        [_Location_column]: 15,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/widget/empty_widget.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 13,
        [_Location_line]: 56,
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
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/widget/empty_widget.dart"
      });
    }
  });
  const child$ = dart.privateName(empty_widget, "EmptyWidget.child");
  empty_widget.EmptyWidget = class EmptyWidget extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    createState() {
      return new empty_widget.EmptyWidgetState.new();
    }
  };
  (empty_widget.EmptyWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    empty_widget.EmptyWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = empty_widget.EmptyWidget.prototype;
  dart.addTypeTests(empty_widget.EmptyWidget);
  dart.setMethodSignature(empty_widget.EmptyWidget, () => ({
    __proto__: dart.getMethods(empty_widget.EmptyWidget.__proto__),
    createState: dart.fnType(empty_widget.EmptyWidgetState, [])
  }));
  dart.setLibraryUri(empty_widget.EmptyWidget, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/widget/empty_widget.dart");
  dart.setFieldSignature(empty_widget.EmptyWidget, () => ({
    __proto__: dart.getFields(empty_widget.EmptyWidget.__proto__),
    child: dart.finalFieldType(framework.Widget)
  }));
  const _axisDirectionNotifier = dart.privateName(empty_widget, "_axisDirectionNotifier");
  const _size = dart.privateName(empty_widget, "_size");
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C4;
  let C3;
  let C2;
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
  empty_widget.EmptyWidgetState = class EmptyWidgetState extends framework.State$(empty_widget.EmptyWidget) {
    initState() {
      super.initState();
      this[_axisDirectionNotifier] = new (ValueNotifierOfAxisDirection()).new(null);
    }
    dispose() {
      super.dispose();
      this[_axisDirectionNotifier].dispose();
    }
    build(context) {
      return this[_size] == null ? new empty_widget._SliverEmpty.new({child: new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
            binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timestamp => {
              this.setState(dart.fn(() => {
                this[_size] = new ui.Size.new(constraints.maxWidth, constraints.maxHeight);
              }, VoidToNull()));
            }, DurationToNull()));
            return new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0});
          }, BuildContextAndBoxConstraintsToSizedBox()), $creationLocationd_0dea112b090073317d4: C2 || CT.C2}), axisDirectionNotifier: this[_axisDirectionNotifier], $creationLocationd_0dea112b090073317d4: C5 || CT.C5}) : new sliver.SliverList.new({delegate: new sliver.SliverChildListDelegate.new(JSArrayOfWidget().of([new container.Container.new({width: this[_size].width, height: this[_size].height, child: this.widget.child, $creationLocationd_0dea112b090073317d4: C9 || CT.C9})])), $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
    }
  };
  (empty_widget.EmptyWidgetState.new = function() {
    this[_axisDirectionNotifier] = null;
    this[_size] = null;
    empty_widget.EmptyWidgetState.__proto__.new.call(this);
    ;
  }).prototype = empty_widget.EmptyWidgetState.prototype;
  dart.addTypeTests(empty_widget.EmptyWidgetState);
  dart.setMethodSignature(empty_widget.EmptyWidgetState, () => ({
    __proto__: dart.getMethods(empty_widget.EmptyWidgetState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(empty_widget.EmptyWidgetState, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/widget/empty_widget.dart");
  dart.setFieldSignature(empty_widget.EmptyWidgetState, () => ({
    __proto__: dart.getFields(empty_widget.EmptyWidgetState.__proto__),
    [_axisDirectionNotifier]: dart.fieldType(change_notifier.ValueNotifier$(basic_types.AxisDirection)),
    [_size]: dart.fieldType(ui.Size)
  }));
  const axisDirectionNotifier$ = dart.privateName(empty_widget, "_SliverEmpty.axisDirectionNotifier");
  empty_widget._SliverEmpty = class _SliverEmpty extends framework.SingleChildRenderObjectWidget {
    get axisDirectionNotifier() {
      return this[axisDirectionNotifier$];
    }
    set axisDirectionNotifier(value) {
      super.axisDirectionNotifier = value;
    }
    createRenderObject(context) {
      return new empty_widget._RenderSliverEmpty.new({axisDirectionNotifier: this.axisDirectionNotifier});
    }
  };
  (empty_widget._SliverEmpty.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let axisDirectionNotifier = opts && 'axisDirectionNotifier' in opts ? opts.axisDirectionNotifier : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[axisDirectionNotifier$] = axisDirectionNotifier;
    empty_widget._SliverEmpty.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = empty_widget._SliverEmpty.prototype;
  dart.addTypeTests(empty_widget._SliverEmpty);
  dart.setMethodSignature(empty_widget._SliverEmpty, () => ({
    __proto__: dart.getMethods(empty_widget._SliverEmpty.__proto__),
    createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext])
  }));
  dart.setLibraryUri(empty_widget._SliverEmpty, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/widget/empty_widget.dart");
  dart.setFieldSignature(empty_widget._SliverEmpty, () => ({
    __proto__: dart.getFields(empty_widget._SliverEmpty.__proto__),
    axisDirectionNotifier: dart.finalFieldType(change_notifier.ValueNotifier$(basic_types.AxisDirection))
  }));
  empty_widget._RenderSliverEmpty = class _RenderSliverEmpty extends sliver$.RenderSliverSingleBoxAdapter {
    get childSize() {
      return dart.equals(this.constraints.axis, basic_types.Axis.vertical) ? this.child.size.height : this.child.size.width;
    }
    performLayout() {
      this.axisDirectionNotifier.value = this.constraints.axisDirection;
      this.child.layout(this.constraints.asBoxConstraints({maxExtent: this.constraints.remainingPaintExtent}), {parentUsesSize: true});
      this.geometry = new sliver$.SliverGeometry.new({paintExtent: this.constraints.remainingPaintExtent, maxPaintExtent: this.constraints.remainingPaintExtent, layoutExtent: this.constraints.remainingPaintExtent});
    }
    paint(paintContext, offset) {
      if (dart.notNull(this.constraints.remainingPaintExtent) > 0.0 || dart.notNull(this.constraints.scrollOffset) + dart.notNull(this.childSize) > 0) {
        paintContext.paintChild(this.child, offset);
      }
    }
    applyPaintTransform(child, transform) {
      object.RenderObject._check(child);
    }
  };
  (empty_widget._RenderSliverEmpty.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let axisDirectionNotifier = opts && 'axisDirectionNotifier' in opts ? opts.axisDirectionNotifier : null;
    this.extent = null;
    this.axisDirectionNotifier = axisDirectionNotifier;
    empty_widget._RenderSliverEmpty.__proto__.new.call(this);
    this.child = child;
  }).prototype = empty_widget._RenderSliverEmpty.prototype;
  dart.addTypeTests(empty_widget._RenderSliverEmpty);
  dart.setMethodSignature(empty_widget._RenderSliverEmpty, () => ({
    __proto__: dart.getMethods(empty_widget._RenderSliverEmpty.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(empty_widget._RenderSliverEmpty, () => ({
    __proto__: dart.getGetters(empty_widget._RenderSliverEmpty.__proto__),
    childSize: core.double
  }));
  dart.setLibraryUri(empty_widget._RenderSliverEmpty, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/widget/empty_widget.dart");
  dart.setFieldSignature(empty_widget._RenderSliverEmpty, () => ({
    __proto__: dart.getFields(empty_widget._RenderSliverEmpty.__proto__),
    axisDirectionNotifier: dart.finalFieldType(change_notifier.ValueNotifier$(basic_types.AxisDirection)),
    extent: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/widget/empty_widget", {
    "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/widget/empty_widget.dart": empty_widget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["empty_widget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOe;;;;;;;AAMX,YAAO;IACT;;;QALiB;QAAU;;;AAAU,4DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiBjC,MAAX;AACqD,MAA3D,+BAAyB,yCAA6B;IACxD;;AAIiB,MAAT;AAC0B,MAAhC,AAAuB;IACzB;UAG0B;AACxB,YAAO,AAAM,gBAAG,OACV,0CACS,+CACI,SAAC,SAAS;AAOf,YALe,AACZ,uDAAqB,QAAU;AAGhC,cAFF,cAAS;AACkD,gBAAzD,cAAQ,gBAAK,AAAY,WAAD,WAAW,AAAY,WAAD;;;AAGlD,kBAAO;uIAGY,sFAEzB,qCACY,uCAAwB,sBAChC,oCACS,AAAM,2BACL,AAAM,2BACP,AAAO;IAI5B;;;IA5C6B;IAGxB;;;EA0CP;;;;;;;;;;;;;;IAKqC;;;;;;uBASU;AAC3C,YAAO,iEACkB;IAE3B;;;QAVM;QACG;QACF;;;AACF,6DAAW,GAAG,SAAS,KAAK;;EAAC;;;;;;;;;;;;;AAuB9B,YAAiB,aAAjB,AAAY,uBAAa,6BAAW,AAAM,AAAK,yBAAS,AAAM,AAAK;IAAK;;AAOnB,MAAvD,AAAsB,mCAAQ,AAAY;AAMzC,MALD,AAAM,kBACJ,AAAY,8CACC,AAAY,0DAET;AAMjB,MAJD,gBAAW,6CACI,AAAY,uDACT,AAAY,qDACd,AAAY;IAE9B;UAG2B,cAAqB;AAC9C,UAAqC,aAAjC,AAAY,yCAAuB,OACV,AAAY,aAArC,AAAY,8CAAe,kBAAY;AACH,QAAtC,AAAa,YAAD,YAAY,YAAO,MAAM;;IAEzC;wBAKsC,OAAe;;IAAY;;;QAxCrD;QACL;IAUA;IAVA;AAFP;AAIoB,IAAb,aAAQ,KAAK;EACpB","file":"empty_widget.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_easyrefresh_2$460$468__lib__src__widget__empty_widget: empty_widget
  };
});

//# sourceMappingURL=empty_widget.ddc.js.map
