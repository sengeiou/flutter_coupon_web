define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__foundation__assertions, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const viewport = packages__flutter_web__animation.src__rendering__viewport;
  const object = packages__flutter_web__animation.src__rendering__object;
  const sliver = packages__flutter_web__animation.src__rendering__sliver;
  const viewport_offset = packages__flutter_web__animation.src__rendering__viewport_offset;
  const binding = packages__flutter_web__animation.src__scheduler__binding;
  const layout_builder = packages__flutter_web__animation.src__widgets__layout_builder;
  const container = packages__flutter_web__animation.src__widgets__container;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const box = packages__flutter_web__animation.src__rendering__box;
  const change_notifier = packages__flutter_web__src__foundation__assertions.src__foundation__change_notifier;
  const basic_types = packages__flutter_web__src__animation__animation.src__painting__basic_types;
  const haptic_feedback = packages__flutter_web__src__animation__animation.src__services__haptic_feedback;
  const refresh_indicator = Object.create(dart.library);
  const $abs = dartx.abs;
  let ContainerParentDataMixinOfRenderSliver = () => (ContainerParentDataMixinOfRenderSliver = dart.constFn(object.ContainerParentDataMixin$(sliver.RenderSliver)))();
  let RenderViewportBaseOfContainerParentDataMixinOfRenderSliver = () => (RenderViewportBaseOfContainerParentDataMixinOfRenderSliver = dart.constFn(viewport.RenderViewportBase$(ContainerParentDataMixinOfRenderSliver())))();
  let DurationToNull = () => (DurationToNull = dart.constFn(dart.fnType(core.Null, [core.Duration])))();
  let ValueNotifierOfAxisDirection = () => (ValueNotifierOfAxisDirection = dart.constFn(change_notifier.ValueNotifier$(basic_types.AxisDirection)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToRefreshMode = () => (VoidToRefreshMode = dart.constFn(dart.fnType(refresh_indicator.RefreshMode, [])))();
  let BuildContextAndBoxConstraintsToWidget = () => (BuildContextAndBoxConstraintsToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: refresh_indicator.RefreshMode.prototype,
        [_name$]: "RefreshMode.inactive",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: refresh_indicator.RefreshMode.prototype,
        [_name$]: "RefreshMode.drag",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: refresh_indicator.RefreshMode.prototype,
        [_name$]: "RefreshMode.armed",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: refresh_indicator.RefreshMode.prototype,
        [_name$]: "RefreshMode.refresh",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: refresh_indicator.RefreshMode.prototype,
        [_name$]: "RefreshMode.refreshed",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: refresh_indicator.RefreshMode.prototype,
        [_name$]: "RefreshMode.done",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], refresh_indicator.RefreshMode);
    },
    get C8() {
      return C8 = dart.constList([], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 865,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 842,
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
        [_Location_line]: 841,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "refreshIndicatorLayoutExtent",
        [_Location_column]: 7,
        [_Location_line]: 833,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hasLayoutExtent",
        [_Location_column]: 7,
        [_Location_line]: 834,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableInfiniteRefresh",
        [_Location_column]: 7,
        [_Location_line]: 835,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "infiniteRefresh",
        [_Location_column]: 7,
        [_Location_line]: 836,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "headerFloat",
        [_Location_column]: 7,
        [_Location_line]: 837,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "axisDirectionNotifier",
        [_Location_column]: 7,
        [_Location_line]: 838,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 841,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 832,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart"
      });
    }
  });
  const refreshIndicatorLayoutExtent$ = dart.privateName(refresh_indicator, "_EasyRefreshSliverRefresh.refreshIndicatorLayoutExtent");
  const hasLayoutExtent$ = dart.privateName(refresh_indicator, "_EasyRefreshSliverRefresh.hasLayoutExtent");
  const enableInfiniteRefresh$ = dart.privateName(refresh_indicator, "_EasyRefreshSliverRefresh.enableInfiniteRefresh");
  const infiniteRefresh$ = dart.privateName(refresh_indicator, "_EasyRefreshSliverRefresh.infiniteRefresh");
  const headerFloat$ = dart.privateName(refresh_indicator, "_EasyRefreshSliverRefresh.headerFloat");
  const axisDirectionNotifier$ = dart.privateName(refresh_indicator, "_EasyRefreshSliverRefresh.axisDirectionNotifier");
  refresh_indicator._EasyRefreshSliverRefresh = class _EasyRefreshSliverRefresh extends framework.SingleChildRenderObjectWidget {
    get refreshIndicatorLayoutExtent() {
      return this[refreshIndicatorLayoutExtent$];
    }
    set refreshIndicatorLayoutExtent(value) {
      super.refreshIndicatorLayoutExtent = value;
    }
    get hasLayoutExtent() {
      return this[hasLayoutExtent$];
    }
    set hasLayoutExtent(value) {
      super.hasLayoutExtent = value;
    }
    get enableInfiniteRefresh() {
      return this[enableInfiniteRefresh$];
    }
    set enableInfiniteRefresh(value) {
      super.enableInfiniteRefresh = value;
    }
    get infiniteRefresh() {
      return this[infiniteRefresh$];
    }
    set infiniteRefresh(value) {
      super.infiniteRefresh = value;
    }
    get headerFloat() {
      return this[headerFloat$];
    }
    set headerFloat(value) {
      super.headerFloat = value;
    }
    get axisDirectionNotifier() {
      return this[axisDirectionNotifier$];
    }
    set axisDirectionNotifier(value) {
      super.axisDirectionNotifier = value;
    }
    createRenderObject(context) {
      return new refresh_indicator._RenderEasyRefreshSliverRefresh.new({refreshIndicatorExtent: this.refreshIndicatorLayoutExtent, hasLayoutExtent: this.hasLayoutExtent, enableInfiniteRefresh: this.enableInfiniteRefresh, infiniteRefresh: this.infiniteRefresh, headerFloat: this.headerFloat, axisDirectionNotifier: this.axisDirectionNotifier});
    }
    updateRenderObject(context, renderObject) {
      let t0;
      refresh_indicator._RenderEasyRefreshSliverRefresh._check(renderObject);
      t0 = renderObject;
      t0.refreshIndicatorLayoutExtent = this.refreshIndicatorLayoutExtent;
      t0.hasLayoutExtent = this.hasLayoutExtent;
      t0.enableInfiniteRefresh = this.enableInfiniteRefresh;
      t0.headerFloat = this.headerFloat;
      t0;
    }
  };
  (refresh_indicator._EasyRefreshSliverRefresh.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let refreshIndicatorLayoutExtent = opts && 'refreshIndicatorLayoutExtent' in opts ? opts.refreshIndicatorLayoutExtent : 0;
    let hasLayoutExtent = opts && 'hasLayoutExtent' in opts ? opts.hasLayoutExtent : false;
    let enableInfiniteRefresh = opts && 'enableInfiniteRefresh' in opts ? opts.enableInfiniteRefresh : false;
    let headerFloat = opts && 'headerFloat' in opts ? opts.headerFloat : false;
    let axisDirectionNotifier = opts && 'axisDirectionNotifier' in opts ? opts.axisDirectionNotifier : null;
    let infiniteRefresh = opts && 'infiniteRefresh' in opts ? opts.infiniteRefresh : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[refreshIndicatorLayoutExtent$] = refreshIndicatorLayoutExtent;
    this[hasLayoutExtent$] = hasLayoutExtent;
    this[enableInfiniteRefresh$] = enableInfiniteRefresh;
    this[headerFloat$] = headerFloat;
    this[axisDirectionNotifier$] = axisDirectionNotifier;
    this[infiniteRefresh$] = infiniteRefresh;
    if (!(refreshIndicatorLayoutExtent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 22, 16, "refreshIndicatorLayoutExtent != null");
    if (!(dart.notNull(refreshIndicatorLayoutExtent) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 23, 16, "refreshIndicatorLayoutExtent >= 0.0");
    if (!(hasLayoutExtent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 24, 16, "hasLayoutExtent != null");
    refresh_indicator._EasyRefreshSliverRefresh.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = refresh_indicator._EasyRefreshSliverRefresh.prototype;
  dart.addTypeTests(refresh_indicator._EasyRefreshSliverRefresh);
  dart.setMethodSignature(refresh_indicator._EasyRefreshSliverRefresh, () => ({
    __proto__: dart.getMethods(refresh_indicator._EasyRefreshSliverRefresh.__proto__),
    createRenderObject: dart.fnType(refresh_indicator._RenderEasyRefreshSliverRefresh, [framework.BuildContext])
  }));
  dart.setLibraryUri(refresh_indicator._EasyRefreshSliverRefresh, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart");
  dart.setFieldSignature(refresh_indicator._EasyRefreshSliverRefresh, () => ({
    __proto__: dart.getFields(refresh_indicator._EasyRefreshSliverRefresh.__proto__),
    refreshIndicatorLayoutExtent: dart.finalFieldType(core.double),
    hasLayoutExtent: dart.finalFieldType(core.bool),
    enableInfiniteRefresh: dart.finalFieldType(core.bool),
    infiniteRefresh: dart.finalFieldType(dart.fnType(dart.void, [])),
    headerFloat: dart.finalFieldType(core.bool),
    axisDirectionNotifier: dart.finalFieldType(change_notifier.ValueNotifier$(basic_types.AxisDirection))
  }));
  const _triggerInfiniteRefresh = dart.privateName(refresh_indicator, "_triggerInfiniteRefresh");
  const _refreshIndicatorExtent = dart.privateName(refresh_indicator, "_refreshIndicatorExtent");
  const _enableInfiniteRefresh = dart.privateName(refresh_indicator, "_enableInfiniteRefresh");
  const _hasLayoutExtent = dart.privateName(refresh_indicator, "_hasLayoutExtent");
  const _headerFloat = dart.privateName(refresh_indicator, "_headerFloat");
  refresh_indicator._RenderEasyRefreshSliverRefresh = class _RenderEasyRefreshSliverRefresh extends sliver.RenderSliverSingleBoxAdapter {
    get refreshIndicatorLayoutExtent() {
      return this[_refreshIndicatorExtent];
    }
    set refreshIndicatorLayoutExtent(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 101, 12, "value != null");
      if (!(dart.notNull(value) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 102, 12, "value >= 0.0");
      if (value == this[_refreshIndicatorExtent]) return;
      this[_refreshIndicatorExtent] = value;
      this.markNeedsLayout();
    }
    get hasLayoutExtent() {
      return this[_hasLayoutExtent];
    }
    set hasLayoutExtent(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 117, 12, "value != null");
      if (dart.equals(value, this[_hasLayoutExtent])) return;
      this[_hasLayoutExtent] = value;
      this.markNeedsLayout();
    }
    get enableInfiniteRefresh() {
      return this[_enableInfiniteRefresh];
    }
    set enableInfiniteRefresh(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 127, 12, "value != null");
      if (dart.equals(value, this[_enableInfiniteRefresh])) return;
      this[_enableInfiniteRefresh] = value;
      this.markNeedsLayout();
    }
    get headerFloat() {
      return this[_headerFloat];
    }
    set headerFloat(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 137, 12, "value != null");
      if (dart.equals(value, this[_headerFloat])) return;
      this[_headerFloat] = value;
      this.markNeedsLayout();
    }
    get childSize() {
      return dart.equals(this.constraints.axis, basic_types.Axis.vertical) ? this.child.size.height : this.child.size.width;
    }
    get centerOffsetAdjustment() {
      if (dart.test(this.headerFloat)) {
        let renderViewport = RenderViewportBaseOfContainerParentDataMixinOfRenderSliver()._check(this.parent);
        return math.max(core.double, 0.0, -dart.notNull(renderViewport.offset.pixels));
      }
      return super.centerOffsetAdjustment;
    }
    layout(constraints, opts) {
      let parentUsesSize = opts && 'parentUsesSize' in opts ? opts.parentUsesSize : false;
      if (dart.test(this.headerFloat)) {
        let renderViewport = RenderViewportBaseOfContainerParentDataMixinOfRenderSliver()._check(this.parent);
        super.layout(sliver.SliverConstraints.as(constraints).copyWith({overlap: math.min(core.double, 0.0, renderViewport.offset.pixels)}), {parentUsesSize: true});
      } else {
        super.layout(constraints, {parentUsesSize: parentUsesSize});
      }
    }
    performLayout() {
      this.axisDirectionNotifier.value = this.constraints.axisDirection;
      if (!dart.equals(this.constraints.growthDirection, sliver.GrowthDirection.forward)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 187, 12, "constraints.growthDirection == GrowthDirection.forward");
      if (dart.test(this.enableInfiniteRefresh) && dart.notNull(this.constraints.scrollOffset) < dart.notNull(this[_refreshIndicatorExtent]) && !dart.equals(this.constraints.userScrollDirection, viewport_offset.ScrollDirection.idle)) {
        if (!dart.test(this[_triggerInfiniteRefresh])) {
          this[_triggerInfiniteRefresh] = true;
          this.infiniteRefresh();
        }
      } else {
        if (dart.notNull(this.constraints.scrollOffset) > dart.notNull(this[_refreshIndicatorExtent])) {
          if (dart.equals(binding.SchedulerBinding.instance.schedulerPhase, binding.SchedulerPhase.idle)) {
            this[_triggerInfiniteRefresh] = false;
          } else {
            binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timestamp => {
              this[_triggerInfiniteRefresh] = false;
            }, DurationToNull()));
          }
        }
      }
      let layoutExtent = (dart.test(this[_hasLayoutExtent]) || dart.test(this.enableInfiniteRefresh) ? 1.0 : 0.0) * dart.notNull(this[_refreshIndicatorExtent]);
      if (!dart.test(this.headerFloat)) {
        if (layoutExtent !== this.layoutExtentOffsetCompensation) {
          this.geometry = new sliver.SliverGeometry.new({scrollOffsetCorrection: layoutExtent - dart.notNull(this.layoutExtentOffsetCompensation)});
          this.layoutExtentOffsetCompensation = layoutExtent;
          return;
        }
      }
      let active = dart.notNull(this.constraints.overlap) < 0.0 || layoutExtent > 0.0;
      let overscrolledExtent = dart.notNull(this.constraints.overlap) < 0.0 ? this.constraints.overlap[$abs]() : 0.0;
      if (dart.test(this.headerFloat)) {
        this.child.layout(this.constraints.asBoxConstraints({maxExtent: dart.test(this[_hasLayoutExtent]) ? overscrolledExtent > dart.notNull(this[_refreshIndicatorExtent]) ? overscrolledExtent : this[_refreshIndicatorExtent] === 1 / 0 ? this.constraints.viewportMainAxisExtent : this[_refreshIndicatorExtent] : overscrolledExtent}), {parentUsesSize: true});
      } else {
        this.child.layout(this.constraints.asBoxConstraints({maxExtent: layoutExtent + overscrolledExtent}), {parentUsesSize: true});
      }
      if (active) {
        if (dart.test(this.headerFloat)) {
          this.geometry = new sliver.SliverGeometry.new({scrollExtent: 0.0, paintOrigin: 0.0, paintExtent: this.childSize, maxPaintExtent: this.childSize, layoutExtent: math.max(core.double, -dart.notNull(this.constraints.scrollOffset), 0.0), visible: true, hasVisualOverflow: true});
        } else {
          this.geometry = new sliver.SliverGeometry.new({scrollExtent: layoutExtent, paintOrigin: -overscrolledExtent - dart.notNull(this.constraints.scrollOffset), paintExtent: math.min(core.double, math.max(core.double, math.max(core.double, this.childSize, layoutExtent) - dart.notNull(this.constraints.scrollOffset), 0.0), this.constraints.remainingPaintExtent), maxPaintExtent: math.max(core.double, math.max(core.double, this.childSize, layoutExtent) - dart.notNull(this.constraints.scrollOffset), 0.0), layoutExtent: math.max(core.double, layoutExtent - dart.notNull(this.constraints.scrollOffset), 0.0)});
        }
      } else {
        this.geometry = sliver.SliverGeometry.zero;
      }
    }
    paint(paintContext, offset) {
      if (dart.notNull(this.constraints.overlap) < 0.0 || dart.notNull(this.constraints.scrollOffset) + dart.notNull(this.childSize) > 0) {
        paintContext.paintChild(this.child, offset);
      }
    }
    applyPaintTransform(child, transform) {
      object.RenderObject._check(child);
    }
  };
  (refresh_indicator._RenderEasyRefreshSliverRefresh.new = function(opts) {
    let refreshIndicatorExtent = opts && 'refreshIndicatorExtent' in opts ? opts.refreshIndicatorExtent : null;
    let hasLayoutExtent = opts && 'hasLayoutExtent' in opts ? opts.hasLayoutExtent : null;
    let enableInfiniteRefresh = opts && 'enableInfiniteRefresh' in opts ? opts.enableInfiniteRefresh : null;
    let infiniteRefresh = opts && 'infiniteRefresh' in opts ? opts.infiniteRefresh : null;
    let headerFloat = opts && 'headerFloat' in opts ? opts.headerFloat : null;
    let axisDirectionNotifier = opts && 'axisDirectionNotifier' in opts ? opts.axisDirectionNotifier : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[_triggerInfiniteRefresh] = false;
    this.layoutExtentOffsetCompensation = 0.0;
    this.infiniteRefresh = infiniteRefresh;
    this.axisDirectionNotifier = axisDirectionNotifier;
    if (!(refreshIndicatorExtent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 86, 16, "refreshIndicatorExtent != null");
    if (!(dart.notNull(refreshIndicatorExtent) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 87, 16, "refreshIndicatorExtent >= 0.0");
    if (!(hasLayoutExtent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 88, 16, "hasLayoutExtent != null");
    this[_refreshIndicatorExtent] = refreshIndicatorExtent;
    this[_enableInfiniteRefresh] = enableInfiniteRefresh;
    this[_hasLayoutExtent] = hasLayoutExtent;
    this[_headerFloat] = headerFloat;
    refresh_indicator._RenderEasyRefreshSliverRefresh.__proto__.new.call(this);
    this.child = child;
  }).prototype = refresh_indicator._RenderEasyRefreshSliverRefresh.prototype;
  dart.addTypeTests(refresh_indicator._RenderEasyRefreshSliverRefresh);
  dart.setMethodSignature(refresh_indicator._RenderEasyRefreshSliverRefresh, () => ({
    __proto__: dart.getMethods(refresh_indicator._RenderEasyRefreshSliverRefresh.__proto__),
    performLayout: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(refresh_indicator._RenderEasyRefreshSliverRefresh, () => ({
    __proto__: dart.getGetters(refresh_indicator._RenderEasyRefreshSliverRefresh.__proto__),
    refreshIndicatorLayoutExtent: core.double,
    hasLayoutExtent: core.bool,
    enableInfiniteRefresh: core.bool,
    headerFloat: core.bool,
    childSize: core.double
  }));
  dart.setSetterSignature(refresh_indicator._RenderEasyRefreshSliverRefresh, () => ({
    __proto__: dart.getSetters(refresh_indicator._RenderEasyRefreshSliverRefresh.__proto__),
    refreshIndicatorLayoutExtent: core.double,
    hasLayoutExtent: core.bool,
    enableInfiniteRefresh: core.bool,
    headerFloat: core.bool
  }));
  dart.setLibraryUri(refresh_indicator._RenderEasyRefreshSliverRefresh, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart");
  dart.setFieldSignature(refresh_indicator._RenderEasyRefreshSliverRefresh, () => ({
    __proto__: dart.getFields(refresh_indicator._RenderEasyRefreshSliverRefresh.__proto__),
    [_refreshIndicatorExtent]: dart.fieldType(core.double),
    axisDirectionNotifier: dart.finalFieldType(change_notifier.ValueNotifier$(basic_types.AxisDirection)),
    [_hasLayoutExtent]: dart.fieldType(core.bool),
    [_enableInfiniteRefresh]: dart.fieldType(core.bool),
    [_headerFloat]: dart.fieldType(core.bool),
    infiniteRefresh: dart.finalFieldType(dart.fnType(dart.void, [])),
    [_triggerInfiniteRefresh]: dart.fieldType(core.bool),
    layoutExtentOffsetCompensation: dart.fieldType(core.double)
  }));
  const _name$ = dart.privateName(refresh_indicator, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  refresh_indicator.RefreshMode = class RefreshMode extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (refresh_indicator.RefreshMode.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = refresh_indicator.RefreshMode.prototype;
  dart.addTypeTests(refresh_indicator.RefreshMode);
  dart.setLibraryUri(refresh_indicator.RefreshMode, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart");
  dart.setFieldSignature(refresh_indicator.RefreshMode, () => ({
    __proto__: dart.getFields(refresh_indicator.RefreshMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(refresh_indicator.RefreshMode, ['toString']);
  refresh_indicator.RefreshMode.inactive = C0 || CT.C0;
  refresh_indicator.RefreshMode.drag = C1 || CT.C1;
  refresh_indicator.RefreshMode.armed = C2 || CT.C2;
  refresh_indicator.RefreshMode.refresh = C3 || CT.C3;
  refresh_indicator.RefreshMode.refreshed = C4 || CT.C4;
  refresh_indicator.RefreshMode.done = C5 || CT.C5;
  refresh_indicator.RefreshMode.values = C6 || CT.C6;
  const refreshTriggerPullDistance$ = dart.privateName(refresh_indicator, "EasyRefreshSliverRefreshControl.refreshTriggerPullDistance");
  const refreshIndicatorExtent$ = dart.privateName(refresh_indicator, "EasyRefreshSliverRefreshControl.refreshIndicatorExtent");
  const builder$ = dart.privateName(refresh_indicator, "EasyRefreshSliverRefreshControl.builder");
  const onRefresh$ = dart.privateName(refresh_indicator, "EasyRefreshSliverRefreshControl.onRefresh");
  const completeDuration$ = dart.privateName(refresh_indicator, "EasyRefreshSliverRefreshControl.completeDuration");
  const bindRefreshIndicator$ = dart.privateName(refresh_indicator, "EasyRefreshSliverRefreshControl.bindRefreshIndicator");
  const enableControlFinishRefresh$ = dart.privateName(refresh_indicator, "EasyRefreshSliverRefreshControl.enableControlFinishRefresh");
  const enableInfiniteRefresh$0 = dart.privateName(refresh_indicator, "EasyRefreshSliverRefreshControl.enableInfiniteRefresh");
  const enableHapticFeedback$ = dart.privateName(refresh_indicator, "EasyRefreshSliverRefreshControl.enableHapticFeedback");
  const focusNotifier$ = dart.privateName(refresh_indicator, "EasyRefreshSliverRefreshControl.focusNotifier");
  const callRefreshNotifier$ = dart.privateName(refresh_indicator, "EasyRefreshSliverRefreshControl.callRefreshNotifier");
  const taskNotifier$ = dart.privateName(refresh_indicator, "EasyRefreshSliverRefreshControl.taskNotifier");
  const taskIndependence$ = dart.privateName(refresh_indicator, "EasyRefreshSliverRefreshControl.taskIndependence");
  const headerFloat$0 = dart.privateName(refresh_indicator, "EasyRefreshSliverRefreshControl.headerFloat");
  refresh_indicator.EasyRefreshSliverRefreshControl = class EasyRefreshSliverRefreshControl extends framework.StatefulWidget {
    get refreshTriggerPullDistance() {
      return this[refreshTriggerPullDistance$];
    }
    set refreshTriggerPullDistance(value) {
      super.refreshTriggerPullDistance = value;
    }
    get refreshIndicatorExtent() {
      return this[refreshIndicatorExtent$];
    }
    set refreshIndicatorExtent(value) {
      super.refreshIndicatorExtent = value;
    }
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    get onRefresh() {
      return this[onRefresh$];
    }
    set onRefresh(value) {
      super.onRefresh = value;
    }
    get completeDuration() {
      return this[completeDuration$];
    }
    set completeDuration(value) {
      super.completeDuration = value;
    }
    get bindRefreshIndicator() {
      return this[bindRefreshIndicator$];
    }
    set bindRefreshIndicator(value) {
      super.bindRefreshIndicator = value;
    }
    get enableControlFinishRefresh() {
      return this[enableControlFinishRefresh$];
    }
    set enableControlFinishRefresh(value) {
      super.enableControlFinishRefresh = value;
    }
    get enableInfiniteRefresh() {
      return this[enableInfiniteRefresh$0];
    }
    set enableInfiniteRefresh(value) {
      super.enableInfiniteRefresh = value;
    }
    get enableHapticFeedback() {
      return this[enableHapticFeedback$];
    }
    set enableHapticFeedback(value) {
      super.enableHapticFeedback = value;
    }
    get focusNotifier() {
      return this[focusNotifier$];
    }
    set focusNotifier(value) {
      super.focusNotifier = value;
    }
    get callRefreshNotifier() {
      return this[callRefreshNotifier$];
    }
    set callRefreshNotifier(value) {
      super.callRefreshNotifier = value;
    }
    get taskNotifier() {
      return this[taskNotifier$];
    }
    set taskNotifier(value) {
      super.taskNotifier = value;
    }
    get taskIndependence() {
      return this[taskIndependence$];
    }
    set taskIndependence(value) {
      super.taskIndependence = value;
    }
    get headerFloat() {
      return this[headerFloat$0];
    }
    set headerFloat(value) {
      super.headerFloat = value;
    }
    createState() {
      return new refresh_indicator._EasyRefreshSliverRefreshControlState.new();
    }
  };
  (refresh_indicator.EasyRefreshSliverRefreshControl.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let refreshTriggerPullDistance = opts && 'refreshTriggerPullDistance' in opts ? opts.refreshTriggerPullDistance : 100;
    let refreshIndicatorExtent = opts && 'refreshIndicatorExtent' in opts ? opts.refreshIndicatorExtent : 60;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let completeDuration = opts && 'completeDuration' in opts ? opts.completeDuration : null;
    let onRefresh = opts && 'onRefresh' in opts ? opts.onRefresh : null;
    let focusNotifier = opts && 'focusNotifier' in opts ? opts.focusNotifier : null;
    let taskNotifier = opts && 'taskNotifier' in opts ? opts.taskNotifier : null;
    let callRefreshNotifier = opts && 'callRefreshNotifier' in opts ? opts.callRefreshNotifier : null;
    let taskIndependence = opts && 'taskIndependence' in opts ? opts.taskIndependence : null;
    let bindRefreshIndicator = opts && 'bindRefreshIndicator' in opts ? opts.bindRefreshIndicator : null;
    let enableControlFinishRefresh = opts && 'enableControlFinishRefresh' in opts ? opts.enableControlFinishRefresh : false;
    let enableInfiniteRefresh = opts && 'enableInfiniteRefresh' in opts ? opts.enableInfiniteRefresh : false;
    let enableHapticFeedback = opts && 'enableHapticFeedback' in opts ? opts.enableHapticFeedback : false;
    let headerFloat = opts && 'headerFloat' in opts ? opts.headerFloat : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[refreshTriggerPullDistance$] = refreshTriggerPullDistance;
    this[refreshIndicatorExtent$] = refreshIndicatorExtent;
    this[builder$] = builder;
    this[completeDuration$] = completeDuration;
    this[onRefresh$] = onRefresh;
    this[focusNotifier$] = focusNotifier;
    this[taskNotifier$] = taskNotifier;
    this[callRefreshNotifier$] = callRefreshNotifier;
    this[taskIndependence$] = taskIndependence;
    this[bindRefreshIndicator$] = bindRefreshIndicator;
    this[enableControlFinishRefresh$] = enableControlFinishRefresh;
    this[enableInfiniteRefresh$0] = enableInfiniteRefresh;
    this[enableHapticFeedback$] = enableHapticFeedback;
    this[headerFloat$0] = headerFloat;
    if (!(refreshTriggerPullDistance != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 450, 16, "refreshTriggerPullDistance != null");
    if (!(dart.notNull(refreshTriggerPullDistance) > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 451, 16, "refreshTriggerPullDistance > 0.0");
    if (!(refreshIndicatorExtent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 452, 16, "refreshIndicatorExtent != null");
    if (!(dart.notNull(refreshIndicatorExtent) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 453, 16, "refreshIndicatorExtent >= 0.0");
    if (!(dart.test(headerFloat) || dart.notNull(refreshTriggerPullDistance) >= dart.notNull(refreshIndicatorExtent))) dart.assertFailed("The refresh indicator cannot take more space in its final state " + "than the amount initially created by overscrolling.", "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart", 455, 13, "headerFloat || refreshTriggerPullDistance >= refreshIndicatorExtent");
    refresh_indicator.EasyRefreshSliverRefreshControl.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = refresh_indicator.EasyRefreshSliverRefreshControl.prototype;
  dart.addTypeTests(refresh_indicator.EasyRefreshSliverRefreshControl);
  dart.setMethodSignature(refresh_indicator.EasyRefreshSliverRefreshControl, () => ({
    __proto__: dart.getMethods(refresh_indicator.EasyRefreshSliverRefreshControl.__proto__),
    createState: dart.fnType(refresh_indicator._EasyRefreshSliverRefreshControlState, [])
  }));
  dart.setLibraryUri(refresh_indicator.EasyRefreshSliverRefreshControl, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart");
  dart.setFieldSignature(refresh_indicator.EasyRefreshSliverRefreshControl, () => ({
    __proto__: dart.getFields(refresh_indicator.EasyRefreshSliverRefreshControl.__proto__),
    refreshTriggerPullDistance: dart.finalFieldType(core.double),
    refreshIndicatorExtent: dart.finalFieldType(core.double),
    builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, refresh_indicator.RefreshMode, core.double, core.double, core.double, basic_types.AxisDirection, core.bool, core.Duration, core.bool, core.bool, core.bool])),
    onRefresh: dart.finalFieldType(dart.fnType(async.Future$(dart.void), [])),
    completeDuration: dart.finalFieldType(core.Duration),
    bindRefreshIndicator: dart.finalFieldType(dart.fnType(dart.void, [dart.fnType(dart.void, [], {noMore: core.bool, success: core.bool}, {}), dart.fnType(dart.void, [])])),
    enableControlFinishRefresh: dart.finalFieldType(core.bool),
    enableInfiniteRefresh: dart.finalFieldType(core.bool),
    enableHapticFeedback: dart.finalFieldType(core.bool),
    focusNotifier: dart.finalFieldType(change_notifier.ValueNotifier$(core.bool)),
    callRefreshNotifier: dart.finalFieldType(change_notifier.ValueNotifier$(core.bool)),
    taskNotifier: dart.finalFieldType(change_notifier.ValueNotifier$(core.bool)),
    taskIndependence: dart.finalFieldType(core.bool),
    headerFloat: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(refresh_indicator.EasyRefreshSliverRefreshControl, {
    /*refresh_indicator.EasyRefreshSliverRefreshControl._defaultRefreshTriggerPullDistance*/get _defaultRefreshTriggerPullDistance() {
      return 100;
    },
    /*refresh_indicator.EasyRefreshSliverRefreshControl._defaultRefreshIndicatorExtent*/get _defaultRefreshIndicatorExtent() {
      return 60;
    }
  });
  const _refreshTask = dart.privateName(refresh_indicator, "_refreshTask");
  const _success = dart.privateName(refresh_indicator, "_success");
  const _noMore = dart.privateName(refresh_indicator, "_noMore");
  const _axisDirectionNotifier = dart.privateName(refresh_indicator, "_axisDirectionNotifier");
  const _focus = dart.privateName(refresh_indicator, "_focus");
  const _infiniteRefresh = dart.privateName(refresh_indicator, "_infiniteRefresh");
  let C8;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C7;
  let C11;
  let C10;
  let C9;
  let C14;
  let C15;
  let C16;
  let C17;
  let C18;
  let C19;
  let C20;
  let C13;
  let C12;
  refresh_indicator._EasyRefreshSliverRefreshControlState = class _EasyRefreshSliverRefreshControlState extends framework.State$(refresh_indicator.EasyRefreshSliverRefreshControl) {
    get refreshTask() {
      return this[_refreshTask];
    }
    get hasTask() {
      return dart.test(this.widget.taskIndependence) ? this[_refreshTask] != null : this.widget.taskNotifier.value;
    }
    set refreshTask(task) {
      this[_refreshTask] = task;
      if (!dart.test(this.widget.taskIndependence)) this.widget.taskNotifier.value = task != null;
    }
    get [_focus]() {
      return this.widget.focusNotifier.value;
    }
    initState() {
      super.initState();
      this.refreshState = refresh_indicator.RefreshMode.inactive;
      this[_axisDirectionNotifier] = new (ValueNotifierOfAxisDirection()).new(basic_types.AxisDirection.down);
      if (this.widget.bindRefreshIndicator != null) {
        this.widget.bindRefreshIndicator(dart.bind(this, 'finishRefresh'), dart.bind(this, 'resetRefreshState'));
      }
    }
    dispose() {
      super.dispose();
    }
    finishRefresh(opts) {
      let success = opts && 'success' in opts ? opts.success : null;
      let noMore = opts && 'noMore' in opts ? opts.noMore : null;
      this[_success] = success;
      this[_noMore] = dart.equals(this[_success], false) ? false : noMore;
      if (dart.test(this.widget.enableControlFinishRefresh) && this.refreshTask != null) {
        if (dart.test(this.widget.enableInfiniteRefresh)) {
          this.refreshState = refresh_indicator.RefreshMode.inactive;
        }
        this.setState(dart.fn(() => this.refreshTask = null, VoidToNull()));
        this.refreshState = this.transitionNextState();
      }
    }
    resetRefreshState() {
      if (dart.test(this.mounted)) {
        this.setState(dart.fn(() => {
          this[_success] = true;
          this[_noMore] = false;
          this.refreshState = refresh_indicator.RefreshMode.inactive;
          this.hasSliverLayoutExtent = false;
        }, VoidToNull()));
      }
    }
    [_infiniteRefresh]() {
      if (!dart.test(this.hasTask) && dart.test(this.widget.enableInfiniteRefresh) && !dart.equals(this[_noMore], true) && !dart.test(this.widget.callRefreshNotifier.value)) {
        if (dart.test(this.widget.enableHapticFeedback)) {
          haptic_feedback.HapticFeedback.mediumImpact();
        }
        binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timestamp => {
          let t0;
          this.refreshState = refresh_indicator.RefreshMode.refresh;
          this.refreshTask = (t0 = this.widget.onRefresh(), t0.then(core.Null, dart.fn(_ => {
            if (dart.test(this.mounted) && !dart.test(this.widget.enableControlFinishRefresh)) {
              this.refreshState = refresh_indicator.RefreshMode.refresh;
              this.setState(dart.fn(() => this.refreshTask = null, VoidToNull()));
              this.refreshState = this.transitionNextState();
            }
          }, voidToNull())), t0);
          this.setState(dart.fn(() => this.hasSliverLayoutExtent = true, VoidTobool()));
        }, DurationToNull()));
      }
    }
    transitionNextState() {
      let nextState = null;
      if (dart.equals(this[_noMore], true) && dart.test(this.widget.enableInfiniteRefresh)) {
        return this.refreshState;
      } else if (dart.equals(this[_noMore], true) && !dart.equals(this.refreshState, refresh_indicator.RefreshMode.refresh) && !dart.equals(this.refreshState, refresh_indicator.RefreshMode.refreshed) && !dart.equals(this.refreshState, refresh_indicator.RefreshMode.done)) {
        return this.refreshState;
      } else if (dart.test(this.widget.enableInfiniteRefresh) && dart.equals(this.refreshState, refresh_indicator.RefreshMode.done)) {
        return refresh_indicator.RefreshMode.inactive;
      }
      const goToDone = () => {
        nextState = refresh_indicator.RefreshMode.done;
        this.refreshState = refresh_indicator.RefreshMode.done;
        if (dart.equals(binding.SchedulerBinding.instance.schedulerPhase, binding.SchedulerPhase.idle)) {
          this.setState(dart.fn(() => this.hasSliverLayoutExtent = false, VoidTobool()));
        } else {
          binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timestamp => {
            this.setState(dart.fn(() => this.hasSliverLayoutExtent = false, VoidTobool()));
          }, DurationToNull()));
        }
      };
      dart.fn(goToDone, VoidTovoid());
      const goToFinish = () => {
        let state = refresh_indicator.RefreshMode.refreshed;
        if (this.widget.completeDuration == null || dart.test(this.widget.enableInfiniteRefresh)) {
          goToDone();
          return null;
        } else {
          FutureOfNull().delayed(this.widget.completeDuration, dart.fn(() => {
            if (dart.test(this.mounted)) {
              goToDone();
            }
          }, VoidToNull()));
          return state;
        }
      };
      dart.fn(goToFinish, VoidToRefreshMode());
      let labelState = this.refreshState;
      SL0:
        while (true) {
          switch (labelState) {
            case C0 || CT.C0:
            {
              if (dart.notNull(this.latestIndicatorBoxExtent) <= 0 || !dart.test(this[_focus]) && !dart.test(this.widget.callRefreshNotifier.value)) {
                return refresh_indicator.RefreshMode.inactive;
              } else {
                if (dart.test(this.widget.callRefreshNotifier.value)) {
                  this.widget.callRefreshNotifier.value = false;
                }
                nextState = refresh_indicator.RefreshMode.drag;
              }
              labelState = C1 || CT.C1;
              continue SL0;
            }
            case C1 || CT.C1:
            {
              if (this.latestIndicatorBoxExtent === 0) {
                return refresh_indicator.RefreshMode.inactive;
              } else if (dart.notNull(this.latestIndicatorBoxExtent) <= dart.notNull(this.widget.refreshTriggerPullDistance)) {
                if (dart.test(this.hasSliverLayoutExtent) && !dart.test(this.hasTask)) {
                  binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timestamp => {
                    this.setState(dart.fn(() => this.hasSliverLayoutExtent = false, VoidTobool()));
                  }, DurationToNull()));
                }
                return refresh_indicator.RefreshMode.drag;
              } else {
                binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timestamp => {
                  if (!dart.test(this.hasSliverLayoutExtent)) {
                    this.setState(dart.fn(() => this.hasSliverLayoutExtent = true, VoidTobool()));
                  }
                }, DurationToNull()));
                if (this.widget.onRefresh != null && !dart.test(this.hasTask)) {
                  if (!dart.test(this[_focus])) {
                    if (dart.test(this.widget.callRefreshNotifier.value)) {
                      this.widget.callRefreshNotifier.value = false;
                    }
                    if (dart.test(this.widget.enableHapticFeedback)) {
                      haptic_feedback.HapticFeedback.mediumImpact();
                    }
                    binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timestamp => {
                      let t0;
                      this.refreshTask = (t0 = this.widget.onRefresh(), t0.then(core.Null, dart.fn(_ => {
                        if (dart.test(this.mounted) && !dart.test(this.widget.enableControlFinishRefresh)) {
                          if (dart.test(this.widget.enableInfiniteRefresh)) {
                            this.refreshState = refresh_indicator.RefreshMode.inactive;
                          }
                          this.setState(dart.fn(() => this.refreshTask = null, VoidToNull()));
                          if (!dart.test(this.widget.enableInfiniteRefresh)) this.refreshState = this.transitionNextState();
                        }
                      }, voidToNull())), t0);
                    }, DurationToNull()));
                    return refresh_indicator.RefreshMode.armed;
                  }
                  return refresh_indicator.RefreshMode.drag;
                }
                return refresh_indicator.RefreshMode.drag;
              }
              break SL0;
            }
            case C2 || CT.C2:
            {
              if (dart.equals(this.refreshState, refresh_indicator.RefreshMode.armed) && !dart.test(this.hasTask)) {
                let state = goToFinish();
                if (state != null) return state;
                labelState = C5 || CT.C5;
                continue SL0;
              }
              if (this.latestIndicatorBoxExtent != this.widget.refreshIndicatorExtent) {
                return refresh_indicator.RefreshMode.armed;
              } else {
                nextState = refresh_indicator.RefreshMode.refresh;
              }
              labelState = C3 || CT.C3;
              continue SL0;
            }
            case C3 || CT.C3:
            {
              if (this.refreshTask != null) {
                return refresh_indicator.RefreshMode.refresh;
              } else {
                let state = goToFinish();
                if (state != null) return state;
              }
              labelState = C5 || CT.C5;
              continue SL0;
            }
            case C5 || CT.C5:
            {
              if (dart.notNull(this.latestIndicatorBoxExtent) > dart.notNull(this.widget.refreshTriggerPullDistance) * 0.1) {
                return refresh_indicator.RefreshMode.done;
              } else {
                nextState = refresh_indicator.RefreshMode.inactive;
              }
              break SL0;
            }
            case C4 || CT.C4:
            {
              nextState = this.refreshState;
              break SL0;
            }
            default:
            {
              break SL0;
              break SL0;
            }
          }
          break;
        }
      return nextState;
    }
    build(context) {
      return new refresh_indicator._EasyRefreshSliverRefresh.new({refreshIndicatorLayoutExtent: this.widget.refreshIndicatorExtent, hasLayoutExtent: this.hasSliverLayoutExtent, enableInfiniteRefresh: this.widget.enableInfiniteRefresh, infiniteRefresh: dart.bind(this, _infiniteRefresh), headerFloat: this.widget.headerFloat, axisDirectionNotifier: this[_axisDirectionNotifier], child: new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
            let t0, t0$;
            let isVertical = dart.equals(this[_axisDirectionNotifier].value, basic_types.AxisDirection.down) || dart.equals(this[_axisDirectionNotifier].value, basic_types.AxisDirection.up);
            this.latestIndicatorBoxExtent = isVertical ? constraints.maxHeight : constraints.maxWidth;
            this.refreshState = this.transitionNextState();
            if (this.widget.builder != null && dart.notNull(this.latestIndicatorBoxExtent) >= 0) {
              return this.widget.builder(context, this.refreshState, this.latestIndicatorBoxExtent, this.widget.refreshTriggerPullDistance, this.widget.refreshIndicatorExtent, this[_axisDirectionNotifier].value, this.widget.headerFloat, this.widget.completeDuration, this.widget.enableInfiniteRefresh, (t0 = this[_success], t0 == null ? true : t0), (t0$ = this[_noMore], t0$ == null ? false : t0$));
            }
            return new container.Container.new({$creationLocationd_0dea112b090073317d4: C7 || CT.C7});
          }, BuildContextAndBoxConstraintsToWidget()), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12});
    }
  };
  (refresh_indicator._EasyRefreshSliverRefreshControlState.new = function() {
    this.refreshState = null;
    this[_refreshTask] = null;
    this.latestIndicatorBoxExtent = 0.0;
    this.hasSliverLayoutExtent = false;
    this[_success] = null;
    this[_noMore] = null;
    this[_axisDirectionNotifier] = null;
    refresh_indicator._EasyRefreshSliverRefreshControlState.__proto__.new.call(this);
    ;
  }).prototype = refresh_indicator._EasyRefreshSliverRefreshControlState.prototype;
  dart.addTypeTests(refresh_indicator._EasyRefreshSliverRefreshControlState);
  dart.setMethodSignature(refresh_indicator._EasyRefreshSliverRefreshControlState, () => ({
    __proto__: dart.getMethods(refresh_indicator._EasyRefreshSliverRefreshControlState.__proto__),
    finishRefresh: dart.fnType(dart.void, [], {noMore: core.bool, success: core.bool}, {}),
    resetRefreshState: dart.fnType(dart.void, []),
    [_infiniteRefresh]: dart.fnType(dart.void, []),
    transitionNextState: dart.fnType(refresh_indicator.RefreshMode, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(refresh_indicator._EasyRefreshSliverRefreshControlState, () => ({
    __proto__: dart.getGetters(refresh_indicator._EasyRefreshSliverRefreshControlState.__proto__),
    refreshTask: async.Future$(dart.void),
    hasTask: core.bool,
    [_focus]: core.bool
  }));
  dart.setSetterSignature(refresh_indicator._EasyRefreshSliverRefreshControlState, () => ({
    __proto__: dart.getSetters(refresh_indicator._EasyRefreshSliverRefreshControlState.__proto__),
    refreshTask: async.Future$(dart.void)
  }));
  dart.setLibraryUri(refresh_indicator._EasyRefreshSliverRefreshControlState, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart");
  dart.setFieldSignature(refresh_indicator._EasyRefreshSliverRefreshControlState, () => ({
    __proto__: dart.getFields(refresh_indicator._EasyRefreshSliverRefreshControlState.__proto__),
    refreshState: dart.fieldType(refresh_indicator.RefreshMode),
    [_refreshTask]: dart.fieldType(async.Future$(dart.void)),
    latestIndicatorBoxExtent: dart.fieldType(core.double),
    hasSliverLayoutExtent: dart.fieldType(core.bool),
    [_success]: dart.fieldType(core.bool),
    [_noMore]: dart.fieldType(core.bool),
    [_axisDirectionNotifier]: dart.fieldType(change_notifier.ValueNotifier$(basic_types.AxisDirection))
  }));
  dart.defineLazy(refresh_indicator._EasyRefreshSliverRefreshControlState, {
    /*refresh_indicator._EasyRefreshSliverRefreshControlState._inactiveResetOverscrollFraction*/get _inactiveResetOverscrollFraction() {
      return 0.1;
    }
  });
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator", {
    "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.dart": refresh_indicator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["refresh_indicator.dart"],"names":[],"mappings":"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","file":"refresh_indicator.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_easyrefresh_2$460$468__lib__src__header__refresh_indicator: refresh_indicator
  };
});

//# sourceMappingURL=refresh_indicator.ddc.js.map
