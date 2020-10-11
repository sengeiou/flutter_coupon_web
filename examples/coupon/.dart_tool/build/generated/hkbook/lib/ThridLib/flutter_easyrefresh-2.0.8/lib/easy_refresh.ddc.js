define(['dart_sdk', 'packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator', 'packages/flutter_web/animation', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/material', 'packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/i18n/global_easy_refresh_localizations', 'packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator', 'packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/physics/scroll_physics', 'packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/widget/empty_widget', 'packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/listener/scroll_notification_listener'], function(dart_sdk, packages__hkbook__ThridLib__flutter_easyrefresh_2$460$468__lib__src__footer__load_indicator, packages__flutter_web__animation, packages__flutter_web__src__foundation__assertions, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui, packages__flutter_web__material, packages__hkbook__ThridLib__flutter_easyrefresh_2$460$468__lib__src__i18n__global_easy_refresh_localizations, packages__hkbook__ThridLib__flutter_easyrefresh_2$460$468__lib__src__header__refresh_indicator, packages__hkbook__ThridLib__flutter_easyrefresh_2$460$468__lib__src__physics__scroll_physics, packages__hkbook__ThridLib__flutter_easyrefresh_2$460$468__lib__src__widget__empty_widget, packages__hkbook__ThridLib__flutter_easyrefresh_2$460$468__lib__src__listener__scroll_notification_listener) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const load_indicator = packages__hkbook__ThridLib__flutter_easyrefresh_2$460$468__lib__src__footer__load_indicator.ThridLib__flutter_easyrefresh_2$460$468__lib__src__footer__load_indicator;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const binding = packages__flutter_web__animation.src__scheduler__binding;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const container = packages__flutter_web__animation.src__widgets__container;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const text = packages__flutter_web__animation.src__widgets__text;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const scroll_physics = packages__flutter_web__animation.src__widgets__scroll_physics;
  const scroll_controller = packages__flutter_web__animation.src__widgets__scroll_controller;
  const primary_scroll_controller = packages__flutter_web__animation.src__widgets__primary_scroll_controller;
  const sliver$ = packages__flutter_web__animation.src__widgets__sliver;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const scroll_notification = packages__flutter_web__animation.src__widgets__scroll_notification;
  const single_child_scroll_view = packages__flutter_web__animation.src__widgets__single_child_scroll_view;
  const scrollable = packages__flutter_web__animation.src__widgets__scrollable;
  const viewport$ = packages__flutter_web__animation.src__widgets__viewport;
  const viewport_offset = packages__flutter_web__animation.src__rendering__viewport_offset;
  const change_notifier = packages__flutter_web__src__foundation__assertions.src__foundation__change_notifier;
  const key = packages__flutter_web__src__foundation__assertions.src__foundation__key;
  const basic_types = packages__flutter_web__src__animation__animation.src__painting__basic_types;
  const colors = packages__flutter_web__src__animation__animation.src__painting__colors;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const animations = packages__flutter_web__src__animation__animation.src__animation__animations;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const recognizer = packages__flutter_web__src__animation__animation.src__gestures__recognizer;
  const curves = packages__flutter_web__src__animation__animation.src__animation__curves;
  const ui = packages__flutter_web_ui__ui.ui;
  const colors$ = packages__flutter_web__material.src__material__colors;
  const icons = packages__flutter_web__material.src__material__icons;
  const progress_indicator = packages__flutter_web__material.src__material__progress_indicator;
  const global_easy_refresh_localizations = packages__hkbook__ThridLib__flutter_easyrefresh_2$460$468__lib__src__i18n__global_easy_refresh_localizations.ThridLib__flutter_easyrefresh_2$460$468__lib__src__i18n__global_easy_refresh_localizations;
  const refresh_indicator = packages__hkbook__ThridLib__flutter_easyrefresh_2$460$468__lib__src__header__refresh_indicator.ThridLib__flutter_easyrefresh_2$460$468__lib__src__header__refresh_indicator;
  const scroll_physics$ = packages__hkbook__ThridLib__flutter_easyrefresh_2$460$468__lib__src__physics__scroll_physics.ThridLib__flutter_easyrefresh_2$460$468__lib__src__physics__scroll_physics;
  const empty_widget = packages__hkbook__ThridLib__flutter_easyrefresh_2$460$468__lib__src__widget__empty_widget.ThridLib__flutter_easyrefresh_2$460$468__lib__src__widget__empty_widget;
  const scroll_notification_listener = packages__hkbook__ThridLib__flutter_easyrefresh_2$460$468__lib__src__listener__scroll_notification_listener.ThridLib__flutter_easyrefresh_2$460$468__lib__src__listener__scroll_notification_listener;
  const easy_refresh = Object.create(dart.library);
  const footer$ = Object.create(dart.library);
  const header$ = Object.create(dart.library);
  const refresher = Object.create(dart.library);
  const $replaceAll = dartx.replaceAll;
  const $isEmpty = dartx.isEmpty;
  const $sublist = dartx.sublist;
  const $add = dartx.add;
  const $insert = dartx.insert;
  const $length = dartx.length;
  const $removeRange = dartx.removeRange;
  let __Tovoid = () => (__Tovoid = dart.constFn(dart.fnType(dart.void, [], {noMore: core.bool, success: core.bool}, {})))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let FnAndFnToNull = () => (FnAndFnToNull = dart.constFn(dart.fnType(core.Null, [__Tovoid(), VoidTovoid()])))();
  let DurationToNull = () => (DurationToNull = dart.constFn(dart.fnType(core.Null, [core.Duration])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let AnimationStatusToNull = () => (AnimationStatusToNull = dart.constFn(dart.fnType(core.Null, [animation.AnimationStatus])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let AlwaysStoppedAnimationOfColor = () => (AlwaysStoppedAnimationOfColor = dart.constFn(animations.AlwaysStoppedAnimation$(ui.Color)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let ValueNotifierOfbool = () => (ValueNotifierOfbool = dart.constFn(change_notifier.ValueNotifier$(core.bool)))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let ScrollNotificationTobool = () => (ScrollNotificationTobool = dart.constFn(dart.fnType(core.bool, [scroll_notification.ScrollNotification])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let BuildContextAndViewportOffsetToViewport = () => (BuildContextAndViewportOffsetToViewport = dart.constFn(dart.fnType(viewport$.Viewport, [framework.BuildContext, viewport_offset.ViewportOffset])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "loadIndicatorExtent",
        [_Location_column]: 7,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "loadTriggerPullDistance",
        [_Location_column]: 7,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "completeDuration",
        [_Location_column]: 7,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLoad",
        [_Location_column]: 7,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNotifier",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "taskNotifier",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "callLoadNotifier",
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "taskIndependence",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableControlFinishLoad",
        [_Location_column]: 7,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableInfiniteLoad",
        [_Location_column]: 7,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableHapticFeedback",
        [_Location_column]: 7,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bindLoadIndicator",
        [_Location_column]: 7,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 0
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278190080.0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4292932337.0
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4289912795.0
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4286630852.0
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4283283116.0
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4280723098.0
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278228616.0
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278225275.0
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278221163.0
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278217052.0
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278209856.0
      });
    },
    get C19() {
      return C19 = dart.constMap(core.int, ui.Color, [50, C20 || CT.C20, 100, C21 || CT.C21, 200, C22 || CT.C22, 300, C23 || CT.C23, 400, C24 || CT.C24, 500, C25 || CT.C25, 600, C26 || CT.C26, 700, C27 || CT.C27, 800, C28 || CT.C28, 900, C29 || CT.C29]);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: colors$.MaterialColor.prototype,
        [Color__value]: 4278228616.0,
        [ColorSwatch__swatch]: C19 || CT.C19
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 322,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "classicalFooter",
        [_Location_column]: 7,
        [_Location_line]: 323,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "loadState",
        [_Location_column]: 7,
        [_Location_line]: 324,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pulledExtent",
        [_Location_column]: 7,
        [_Location_line]: 325,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "loadTriggerPullDistance",
        [_Location_column]: 7,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "loadIndicatorExtent",
        [_Location_column]: 7,
        [_Location_line]: 327,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "axisDirection",
        [_Location_column]: 7,
        [_Location_line]: 328,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "float",
        [_Location_column]: 7,
        [_Location_line]: 329,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "completeDuration",
        [_Location_column]: 7,
        [_Location_line]: 330,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableInfiniteLoad",
        [_Location_column]: 7,
        [_Location_line]: 331,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "success",
        [_Location_column]: 7,
        [_Location_line]: 332,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "noMore",
        [_Location_column]: 7,
        [_Location_line]: 333,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 321,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: load_indicator.LoadMode.prototype,
        [_name]: "LoadMode.load",
        index: 3
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: load_indicator.LoadMode.prototype,
        [_name]: "LoadMode.armed",
        index: 2
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: load_indicator.LoadMode.prototype,
        [_name]: "LoadMode.loaded",
        index: 4
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: load_indicator.LoadMode.prototype,
        [_name]: "LoadMode.done",
        index: 5
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 589,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 590,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 588,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 593,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 594,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 592,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 585,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 586,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 587,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 584,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 570,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 573,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 578,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 583,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 584,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65, C66 || CT.C66, C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 569,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 11,
        [_Location_line]: 565,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 566,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 11,
        [_Location_line]: 567,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "right",
        [_Location_column]: 11,
        [_Location_line]: 568,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 569,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72, C73 || CT.C73, C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 564,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 563,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 562,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "strokeWidth",
        [_Location_column]: 27,
        [_Location_line]: 621,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueColor",
        [_Location_column]: 27,
        [_Location_line]: 622,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 620,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 25,
        [_Location_line]: 618,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 619,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 620,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 617,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 633,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 634,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 632,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 35,
        [_Location_line]: 639,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 31,
        [_Location_line]: 641,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 637,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 637,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 29,
        [_Location_line]: 643,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 636,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 17,
        [_Location_line]: 610,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 611,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 614,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102, C103 || CT.C103, C104 || CT.C104], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 609,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 15,
        [_Location_line]: 608,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 609,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107, C108 || CT.C108], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C106 || CT.C106,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 607,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 654,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 655,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 653,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 666,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 667,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115, C116 || CT.C116], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C114 || CT.C114,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 665,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 27,
        [_Location_line]: 662,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 665,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119, C120 || CT.C120], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 661,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C122() {
      return C122 = dart.constList([], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 673,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 650,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 651,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 652,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.constList([C125 || CT.C125, C126 || CT.C126, C127 || CT.C127], widget_inspector._Location);
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C124 || CT.C124,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 649,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 15,
        [_Location_line]: 648,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 649,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130, C131 || CT.C131], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 647,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 679,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 15,
        [_Location_line]: 678,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 679,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135, C136 || CT.C136], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C134 || CT.C134,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 677,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "strokeWidth",
        [_Location_column]: 25,
        [_Location_line]: 690,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueColor",
        [_Location_column]: 25,
        [_Location_line]: 691,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.constList([C139 || CT.C139, C140 || CT.C140], widget_inspector._Location);
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C138 || CT.C138,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 689,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 687,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 688,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 689,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143, C144 || CT.C144, C145 || CT.C145], widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C142 || CT.C142,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 686,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 702,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 27,
        [_Location_line]: 703,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148, C149 || CT.C149], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 701,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 40,
        [_Location_line]: 707,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 708,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.constList([C152 || CT.C152, C153 || CT.C153], widget_inspector._Location);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C151 || CT.C151,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 706,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 706,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 27,
        [_Location_line]: 710,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156, C157 || CT.C157], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C155 || CT.C155,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 705,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 684,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.constList([C160 || CT.C160], widget_inspector._Location);
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C159 || CT.C159,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 683,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "refreshIndicatorExtent",
        [_Location_column]: 7,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "refreshTriggerPullDistance",
        [_Location_column]: 7,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "completeDuration",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onRefresh",
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNotifier",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "taskNotifier",
        [_Location_column]: 7,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "callRefreshNotifier",
        [_Location_column]: 7,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "taskIndependence",
        [_Location_column]: 7,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableControlFinishRefresh",
        [_Location_column]: 7,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableInfiniteRefresh",
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableHapticFeedback",
        [_Location_column]: 7,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "headerFloat",
        [_Location_column]: 7,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bindRefreshIndicator",
        [_Location_column]: 7,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163, C164 || CT.C164, C165 || CT.C165, C166 || CT.C166, C167 || CT.C167, C168 || CT.C168, C169 || CT.C169, C170 || CT.C170, C171 || CT.C171, C172 || CT.C172, C173 || CT.C173, C174 || CT.C174, C175 || CT.C175, C176 || CT.C176], widget_inspector._Location);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C162 || CT.C162,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.constList([C179 || CT.C179, C180 || CT.C180], widget_inspector._Location);
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C178 || CT.C178,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 285,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 385,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "classicalHeader",
        [_Location_column]: 7,
        [_Location_line]: 386,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "refreshState",
        [_Location_column]: 7,
        [_Location_line]: 387,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pulledExtent",
        [_Location_column]: 7,
        [_Location_line]: 388,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "refreshTriggerPullDistance",
        [_Location_column]: 7,
        [_Location_line]: 389,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "refreshIndicatorExtent",
        [_Location_column]: 7,
        [_Location_line]: 390,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "axisDirection",
        [_Location_column]: 7,
        [_Location_line]: 391,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "float",
        [_Location_column]: 7,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "completeDuration",
        [_Location_column]: 7,
        [_Location_line]: 393,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableInfiniteRefresh",
        [_Location_column]: 7,
        [_Location_line]: 394,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "success",
        [_Location_column]: 7,
        [_Location_line]: 395,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "noMore",
        [_Location_column]: 7,
        [_Location_line]: 396,
        [_Location_file]: null
      });
    },
    get C182() {
      return C182 = dart.constList([C183 || CT.C183, C184 || CT.C184, C185 || CT.C185, C186 || CT.C186, C187 || CT.C187, C188 || CT.C188, C189 || CT.C189, C190 || CT.C190, C191 || CT.C191, C192 || CT.C192, C193 || CT.C193, C194 || CT.C194], widget_inspector._Location);
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C182 || CT.C182,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 384,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: refresh_indicator.RefreshMode.prototype,
        [_name$]: "RefreshMode.refresh",
        index: 3
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: refresh_indicator.RefreshMode.prototype,
        [_name$]: "RefreshMode.armed",
        index: 2
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: refresh_indicator.RefreshMode.prototype,
        [_name$]: "RefreshMode.refreshed",
        index: 4
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: refresh_indicator.RefreshMode.prototype,
        [_name$]: "RefreshMode.done",
        index: 5
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 733,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 734,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.constList([C202 || CT.C202, C203 || CT.C203], widget_inspector._Location);
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C201 || CT.C201,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 732,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 737,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 738,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.constList([C206 || CT.C206, C207 || CT.C207], widget_inspector._Location);
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C205 || CT.C205,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 736,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 727,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 729,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 731,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.constList([C210 || CT.C210, C211 || CT.C211, C212 || CT.C212], widget_inspector._Location);
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C209 || CT.C209,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 726,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 708,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 711,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 718,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 725,
        [_Location_file]: null
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 726,
        [_Location_file]: null
      });
    },
    get C214() {
      return C214 = dart.constList([C215 || CT.C215, C216 || CT.C216, C217 || CT.C217, C218 || CT.C218, C219 || CT.C219], widget_inspector._Location);
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C214 || CT.C214,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 707,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 11,
        [_Location_line]: 679,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 686,
        [_Location_file]: null
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 11,
        [_Location_line]: 693,
        [_Location_file]: null
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "right",
        [_Location_column]: 11,
        [_Location_line]: 700,
        [_Location_file]: null
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 707,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.constList([C222 || CT.C222, C223 || CT.C223, C224 || CT.C224, C225 || CT.C225, C226 || CT.C226], widget_inspector._Location);
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C221 || CT.C221,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 678,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 677,
        [_Location_file]: null
      });
    },
    get C228() {
      return C228 = dart.constList([C229 || CT.C229], widget_inspector._Location);
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C228 || CT.C228,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 676,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "strokeWidth",
        [_Location_column]: 27,
        [_Location_line]: 765,
        [_Location_file]: null
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueColor",
        [_Location_column]: 27,
        [_Location_line]: 766,
        [_Location_file]: null
      });
    },
    get C231() {
      return C231 = dart.constList([C232 || CT.C232, C233 || CT.C233], widget_inspector._Location);
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C231 || CT.C231,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 764,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 25,
        [_Location_line]: 762,
        [_Location_file]: null
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 763,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 764,
        [_Location_file]: null
      });
    },
    get C235() {
      return C235 = dart.constList([C236 || CT.C236, C237 || CT.C237, C238 || CT.C238], widget_inspector._Location);
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C235 || CT.C235,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 761,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 29,
        [_Location_line]: 777,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 778,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.constList([C241 || CT.C241, C242 || CT.C242], widget_inspector._Location);
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C240 || CT.C240,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 776,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 35,
        [_Location_line]: 783,
        [_Location_file]: null
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 31,
        [_Location_line]: 785,
        [_Location_file]: null
      });
    },
    get C244() {
      return C244 = dart.constList([C245 || CT.C245, C246 || CT.C246], widget_inspector._Location);
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C244 || CT.C244,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 781,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 781,
        [_Location_file]: null
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 29,
        [_Location_line]: 787,
        [_Location_file]: null
      });
    },
    get C248() {
      return C248 = dart.constList([C249 || CT.C249, C250 || CT.C250], widget_inspector._Location);
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C248 || CT.C248,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 780,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 17,
        [_Location_line]: 754,
        [_Location_file]: null
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 755,
        [_Location_file]: null
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 758,
        [_Location_file]: null
      });
    },
    get C252() {
      return C252 = dart.constList([C253 || CT.C253, C254 || CT.C254, C255 || CT.C255], widget_inspector._Location);
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C252 || CT.C252,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 753,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 15,
        [_Location_line]: 752,
        [_Location_file]: null
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 753,
        [_Location_file]: null
      });
    },
    get C257() {
      return C257 = dart.constList([C258 || CT.C258, C259 || CT.C259], widget_inspector._Location);
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C257 || CT.C257,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 751,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 798,
        [_Location_file]: null
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 799,
        [_Location_file]: null
      });
    },
    get C261() {
      return C261 = dart.constList([C262 || CT.C262, C263 || CT.C263], widget_inspector._Location);
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C261 || CT.C261,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 797,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 810,
        [_Location_file]: null
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 811,
        [_Location_file]: null
      });
    },
    get C265() {
      return C265 = dart.constList([C266 || CT.C266, C267 || CT.C267], widget_inspector._Location);
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C265 || CT.C265,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 809,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 27,
        [_Location_line]: 806,
        [_Location_file]: null
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 809,
        [_Location_file]: null
      });
    },
    get C269() {
      return C269 = dart.constList([C270 || CT.C270, C271 || CT.C271], widget_inspector._Location);
    },
    get C268() {
      return C268 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C269 || CT.C269,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 805,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 817,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 794,
        [_Location_file]: null
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 795,
        [_Location_file]: null
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 796,
        [_Location_file]: null
      });
    },
    get C274() {
      return C274 = dart.constList([C275 || CT.C275, C276 || CT.C276, C277 || CT.C277], widget_inspector._Location);
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C274 || CT.C274,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 793,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 15,
        [_Location_line]: 792,
        [_Location_file]: null
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 793,
        [_Location_file]: null
      });
    },
    get C279() {
      return C279 = dart.constList([C280 || CT.C280, C281 || CT.C281], widget_inspector._Location);
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C279 || CT.C279,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 791,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 823,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 15,
        [_Location_line]: 822,
        [_Location_file]: null
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 823,
        [_Location_file]: null
      });
    },
    get C284() {
      return C284 = dart.constList([C285 || CT.C285, C286 || CT.C286], widget_inspector._Location);
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C284 || CT.C284,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 821,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "strokeWidth",
        [_Location_column]: 25,
        [_Location_line]: 834,
        [_Location_file]: null
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueColor",
        [_Location_column]: 25,
        [_Location_line]: 835,
        [_Location_file]: null
      });
    },
    get C288() {
      return C288 = dart.constList([C289 || CT.C289, C290 || CT.C290], widget_inspector._Location);
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C288 || CT.C288,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 833,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 831,
        [_Location_file]: null
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 832,
        [_Location_file]: null
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 833,
        [_Location_file]: null
      });
    },
    get C292() {
      return C292 = dart.constList([C293 || CT.C293, C294 || CT.C294, C295 || CT.C295], widget_inspector._Location);
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C292 || CT.C292,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 830,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 846,
        [_Location_file]: null
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 27,
        [_Location_line]: 847,
        [_Location_file]: null
      });
    },
    get C297() {
      return C297 = dart.constList([C298 || CT.C298, C299 || CT.C299], widget_inspector._Location);
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C297 || CT.C297,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 845,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 39,
        [_Location_line]: 851,
        [_Location_file]: null
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 852,
        [_Location_file]: null
      });
    },
    get C301() {
      return C301 = dart.constList([C302 || CT.C302, C303 || CT.C303], widget_inspector._Location);
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C301 || CT.C301,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 850,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 850,
        [_Location_file]: null
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 27,
        [_Location_line]: 854,
        [_Location_file]: null
      });
    },
    get C305() {
      return C305 = dart.constList([C306 || CT.C306, C307 || CT.C307], widget_inspector._Location);
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C305 || CT.C305,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 849,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 828,
        [_Location_file]: null
      });
    },
    get C309() {
      return C309 = dart.constList([C310 || CT.C310], widget_inspector._Location);
    },
    get C308() {
      return C308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C309 || CT.C309,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 827,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C311() {
      return C311 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 893,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart"
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$0]: "Axis.vertical",
        index: 1
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name$1]: "DragStartBehavior.start",
        index: 1
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 46,
        [_Location_line]: 364,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 11,
        [_Location_line]: 364,
        [_Location_file]: null
      });
    },
    get C316() {
      return C316 = dart.constList([C317 || CT.C317], widget_inspector._Location);
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C316 || CT.C316,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 363,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C319() {
      return C319 = dart.constList([C320 || CT.C320], widget_inspector._Location);
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C319 || CT.C319,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 366,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 9,
        [_Location_line]: 381,
        [_Location_file]: null
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "slivers",
        [_Location_column]: 9,
        [_Location_line]: 382,
        [_Location_file]: null
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 9,
        [_Location_line]: 383,
        [_Location_file]: null
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "reverse",
        [_Location_column]: 9,
        [_Location_line]: 384,
        [_Location_file]: null
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 385,
        [_Location_file]: null
      });
    },
    get C328() {
      return C328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "primary",
        [_Location_column]: 9,
        [_Location_line]: 386,
        [_Location_file]: null
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 9,
        [_Location_line]: 387,
        [_Location_file]: null
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cacheExtent",
        [_Location_column]: 9,
        [_Location_line]: 390,
        [_Location_file]: null
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticChildCount",
        [_Location_column]: 9,
        [_Location_line]: 391,
        [_Location_file]: null
      });
    },
    get C332() {
      return C332 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dragStartBehavior",
        [_Location_column]: 9,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C322() {
      return C322 = dart.constList([C323 || CT.C323, C324 || CT.C324, C325 || CT.C325, C326 || CT.C326, C327 || CT.C327, C328 || CT.C328, C329 || CT.C329, C330 || CT.C330, C331 || CT.C331, C332 || CT.C332], widget_inspector._Location);
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C322 || CT.C322,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 380,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 397,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    },
    get C336() {
      return C336 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onNotification",
        [_Location_column]: 7,
        [_Location_line]: 400,
        [_Location_file]: null
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onFocus",
        [_Location_column]: 7,
        [_Location_line]: 403,
        [_Location_file]: null
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 406,
        [_Location_file]: null
      });
    },
    get C335() {
      return C335 = dart.constList([C336 || CT.C336, C337 || CT.C337, C338 || CT.C338], widget_inspector._Location);
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C335 || CT.C335,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 399,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sliver",
        [_Location_column]: 36,
        [_Location_line]: 420,
        [_Location_file]: null
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 52,
        [_Location_line]: 420,
        [_Location_file]: null
      });
    },
    get C340() {
      return C340 = dart.constList([C341 || CT.C341, C342 || CT.C342], widget_inspector._Location);
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C340 || CT.C340,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 420,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 13,
        [_Location_line]: 432,
        [_Location_file]: null
      });
    },
    get C344() {
      return C344 = dart.constList([C345 || CT.C345], widget_inspector._Location);
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C344 || CT.C344,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 431,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    },
    get C348() {
      return C348 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sliver",
        [_Location_column]: 11,
        [_Location_line]: 431,
        [_Location_file]: null
      });
    },
    get C349() {
      return C349 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 434,
        [_Location_file]: null
      });
    },
    get C347() {
      return C347 = dart.constList([C348 || CT.C348, C349 || CT.C349], widget_inspector._Location);
    },
    get C346() {
      return C346 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C347 || CT.C347,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 430,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    },
    get C352() {
      return C352 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 440,
        [_Location_file]: null
      });
    },
    get C351() {
      return C351 = dart.constList([C352 || CT.C352], widget_inspector._Location);
    },
    get C350() {
      return C350 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C351 || CT.C351,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 439,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 9,
        [_Location_line]: 454,
        [_Location_file]: null
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 455,
        [_Location_file]: null
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cacheExtent",
        [_Location_column]: 9,
        [_Location_line]: 456,
        [_Location_file]: null
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 457,
        [_Location_file]: null
      });
    },
    get C359() {
      return C359 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 9,
        [_Location_line]: 458,
        [_Location_file]: null
      });
    },
    get C360() {
      return C360 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticChildCount",
        [_Location_column]: 9,
        [_Location_line]: 459,
        [_Location_file]: null
      });
    },
    get C361() {
      return C361 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "slivers",
        [_Location_column]: 9,
        [_Location_line]: 460,
        [_Location_file]: null
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dragStartBehavior",
        [_Location_column]: 9,
        [_Location_line]: 461,
        [_Location_file]: null
      });
    },
    get C363() {
      return C363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "reverse",
        [_Location_column]: 9,
        [_Location_line]: 462,
        [_Location_file]: null
      });
    },
    get C354() {
      return C354 = dart.constList([C355 || CT.C355, C356 || CT.C356, C357 || CT.C357, C358 || CT.C358, C359 || CT.C359, C360 || CT.C360, C361 || CT.C361, C362 || CT.C362, C363 || CT.C363], widget_inspector._Location);
    },
    get C353() {
      return C353 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C354 || CT.C354,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 453,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    },
    get C366() {
      return C366 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 9,
        [_Location_line]: 467,
        [_Location_file]: null
      });
    },
    get C367() {
      return C367 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 468,
        [_Location_file]: null
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 9,
        [_Location_line]: 469,
        [_Location_file]: null
      });
    },
    get C369() {
      return C369 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "slivers",
        [_Location_column]: 9,
        [_Location_line]: 470,
        [_Location_file]: null
      });
    },
    get C370() {
      return C370 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dragStartBehavior",
        [_Location_column]: 9,
        [_Location_line]: 471,
        [_Location_file]: null
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "reverse",
        [_Location_column]: 9,
        [_Location_line]: 472,
        [_Location_file]: null
      });
    },
    get C365() {
      return C365 = dart.constList([C366 || CT.C366, C367 || CT.C367, C368 || CT.C368, C369 || CT.C369, C370 || CT.C370, C371 || CT.C371], widget_inspector._Location);
    },
    get C364() {
      return C364 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C365 || CT.C365,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 466,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 492,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    },
    get C375() {
      return C375 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 15,
        [_Location_line]: 492,
        [_Location_file]: null
      });
    },
    get C374() {
      return C374 = dart.constList([C375 || CT.C375], widget_inspector._Location);
    },
    get C373() {
      return C373 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C374 || CT.C374,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 491,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    },
    get C378() {
      return C378 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 495,
        [_Location_file]: null
      });
    },
    get C377() {
      return C377 = dart.constList([C378 || CT.C378], widget_inspector._Location);
    },
    get C376() {
      return C376 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C377 || CT.C377,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 494,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    },
    get C381() {
      return C381 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 9,
        [_Location_line]: 477,
        [_Location_file]: null
      });
    },
    get C382() {
      return C382 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 478,
        [_Location_file]: null
      });
    },
    get C383() {
      return C383 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "axisDirection",
        [_Location_column]: 9,
        [_Location_line]: 479,
        [_Location_file]: null
      });
    },
    get C384() {
      return C384 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticChildCount",
        [_Location_column]: 9,
        [_Location_line]: 480,
        [_Location_file]: null
      });
    },
    get C385() {
      return C385 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dragStartBehavior",
        [_Location_column]: 9,
        [_Location_line]: 481,
        [_Location_file]: null
      });
    },
    get C386() {
      return C386 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "viewportBuilder",
        [_Location_column]: 9,
        [_Location_line]: 482,
        [_Location_file]: null
      });
    },
    get C380() {
      return C380 = dart.constList([C381 || CT.C381, C382 || CT.C382, C383 || CT.C383, C384 || CT.C384, C385 || CT.C385, C386 || CT.C386], widget_inspector._Location);
    },
    get C379() {
      return C379 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C380 || CT.C380,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 476,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    },
    get C389() {
      return C389 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 9,
        [_Location_line]: 509,
        [_Location_file]: null
      });
    },
    get C390() {
      return C390 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 510,
        [_Location_file]: null
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "slivers",
        [_Location_column]: 9,
        [_Location_line]: 511,
        [_Location_file]: null
      });
    },
    get C388() {
      return C388 = dart.constList([C389 || CT.C389, C390 || CT.C390, C391 || CT.C391], widget_inspector._Location);
    },
    get C387() {
      return C387 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C388 || CT.C388,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 508,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C1;
  let C0;
  const extent$ = dart.privateName(footer$, "Footer.extent");
  const triggerDistance$ = dart.privateName(footer$, "Footer.triggerDistance");
  const float$ = dart.privateName(footer$, "Footer.float");
  const completeDuration$ = dart.privateName(footer$, "Footer.completeDuration");
  const enableInfiniteLoad$ = dart.privateName(footer$, "Footer.enableInfiniteLoad");
  const enableHapticFeedback$ = dart.privateName(footer$, "Footer.enableHapticFeedback");
  footer$.Footer = class Footer extends core.Object {
    get extent() {
      return this[extent$];
    }
    set extent(value) {
      super.extent = value;
    }
    get triggerDistance() {
      return this[triggerDistance$];
    }
    set triggerDistance(value) {
      super.triggerDistance = value;
    }
    get float() {
      return this[float$];
    }
    set float(value) {
      super.float = value;
    }
    get completeDuration() {
      return this[completeDuration$];
    }
    set completeDuration(value) {
      super.completeDuration = value;
    }
    get enableInfiniteLoad() {
      return this[enableInfiniteLoad$];
    }
    set enableInfiniteLoad(value) {
      super.enableInfiniteLoad = value;
    }
    get enableHapticFeedback() {
      return this[enableHapticFeedback$];
    }
    set enableHapticFeedback(value) {
      super.enableHapticFeedback = value;
    }
    builder(context, easyRefresh, focusNotifier, taskNotifier, callLoadNotifier) {
      return new load_indicator.EasyRefreshSliverLoadControl.new({loadIndicatorExtent: this.extent, loadTriggerPullDistance: this.triggerDistance, builder: dart.bind(this, 'contentBuilder'), completeDuration: this.completeDuration, onLoad: easyRefresh.onLoad, focusNotifier: focusNotifier, taskNotifier: taskNotifier, callLoadNotifier: callLoadNotifier, taskIndependence: easyRefresh.taskIndependence, enableControlFinishLoad: easyRefresh.enableControlFinishLoad, enableInfiniteLoad: this.enableInfiniteLoad, enableHapticFeedback: this.enableHapticFeedback, bindLoadIndicator: dart.fn((finishLoad, resetLoadState) => {
          if (easyRefresh.controller != null) {
            easyRefresh.controller.finishLoadCallBack = finishLoad;
            easyRefresh.controller.resetLoadStateCallBack = resetLoadState;
          }
        }, FnAndFnToNull()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (footer$.Footer.new = function(opts) {
    let extent = opts && 'extent' in opts ? opts.extent : 60;
    let triggerDistance = opts && 'triggerDistance' in opts ? opts.triggerDistance : 70;
    let float = opts && 'float' in opts ? opts.float : false;
    let completeDuration = opts && 'completeDuration' in opts ? opts.completeDuration : null;
    let enableInfiniteLoad = opts && 'enableInfiniteLoad' in opts ? opts.enableInfiniteLoad : true;
    let enableHapticFeedback = opts && 'enableHapticFeedback' in opts ? opts.enableHapticFeedback : false;
    this[extent$] = extent;
    this[triggerDistance$] = triggerDistance;
    this[float$] = float;
    this[completeDuration$] = completeDuration;
    this[enableInfiniteLoad$] = enableInfiniteLoad;
    this[enableHapticFeedback$] = enableHapticFeedback;
    ;
  }).prototype = footer$.Footer.prototype;
  dart.addTypeTests(footer$.Footer);
  dart.setMethodSignature(footer$.Footer, () => ({
    __proto__: dart.getMethods(footer$.Footer.__proto__),
    builder: dart.fnType(framework.Widget, [framework.BuildContext, refresher.EasyRefresh, change_notifier.ValueNotifier$(core.bool), change_notifier.ValueNotifier$(core.bool), change_notifier.ValueNotifier$(core.bool)])
  }));
  dart.setLibraryUri(footer$.Footer, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart");
  dart.setFieldSignature(footer$.Footer, () => ({
    __proto__: dart.getFields(footer$.Footer.__proto__),
    extent: dart.finalFieldType(core.double),
    triggerDistance: dart.finalFieldType(core.double),
    float: dart.finalFieldType(core.bool),
    completeDuration: dart.finalFieldType(core.Duration),
    enableInfiniteLoad: dart.finalFieldType(core.bool),
    enableHapticFeedback: dart.finalFieldType(core.bool)
  }));
  const footer$0 = dart.privateName(footer$, "NotificationFooter.footer");
  const notifier$ = dart.privateName(footer$, "NotificationFooter.notifier");
  footer$.NotificationFooter = class NotificationFooter extends footer$.Footer {
    get footer() {
      return this[footer$0];
    }
    set footer(value) {
      super.footer = value;
    }
    get notifier() {
      return this[notifier$];
    }
    set notifier(value) {
      super.notifier = value;
    }
    contentBuilder(context, loadState, pulledExtent, loadTriggerPullDistance, loadIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteLoad, success, noMore) {
      let t0;
      t0 = this.notifier;
      t0 == null ? null : t0.contentBuilder(context, loadState, pulledExtent, loadTriggerPullDistance, loadIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteLoad, success, noMore);
      return this.footer.contentBuilder(context, loadState, pulledExtent, loadTriggerPullDistance, loadIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteLoad, success, noMore);
    }
  };
  (footer$.NotificationFooter.new = function(opts) {
    let footer = opts && 'footer' in opts ? opts.footer : null;
    let notifier = opts && 'notifier' in opts ? opts.notifier : null;
    this[footer$0] = footer;
    this[notifier$] = notifier;
    if (!(footer != null)) dart.assertFailed("A non-null Footer must be provided to a NotifierFooter.", "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart", 94, 11, "footer != null");
    footer$.NotificationFooter.__proto__.new.call(this, {extent: footer.extent, triggerDistance: footer.triggerDistance, completeDuration: footer.completeDuration, enableInfiniteLoad: footer.enableInfiniteLoad, enableHapticFeedback: footer.enableHapticFeedback});
    ;
  }).prototype = footer$.NotificationFooter.prototype;
  dart.addTypeTests(footer$.NotificationFooter);
  dart.setMethodSignature(footer$.NotificationFooter, () => ({
    __proto__: dart.getMethods(footer$.NotificationFooter.__proto__),
    contentBuilder: dart.fnType(framework.Widget, [framework.BuildContext, load_indicator.LoadMode, core.double, core.double, core.double, basic_types.AxisDirection, core.bool, core.Duration, core.bool, core.bool, core.bool])
  }));
  dart.setLibraryUri(footer$.NotificationFooter, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart");
  dart.setFieldSignature(footer$.NotificationFooter, () => ({
    __proto__: dart.getFields(footer$.NotificationFooter.__proto__),
    footer: dart.finalFieldType(footer$.Footer),
    notifier: dart.finalFieldType(footer$.LinkFooterNotifier)
  }));
  const footerBuilder$ = dart.privateName(footer$, "CustomFooter.footerBuilder");
  footer$.CustomFooter = class CustomFooter extends footer$.Footer {
    get footerBuilder() {
      return this[footerBuilder$];
    }
    set footerBuilder(value) {
      super.footerBuilder = value;
    }
    contentBuilder(context, loadState, pulledExtent, loadTriggerPullDistance, loadIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteLoad, success, noMore) {
      return this.footerBuilder(context, loadState, pulledExtent, loadTriggerPullDistance, loadIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteLoad, success, noMore);
    }
  };
  (footer$.CustomFooter.new = function(opts) {
    let extent = opts && 'extent' in opts ? opts.extent : 60;
    let triggerDistance = opts && 'triggerDistance' in opts ? opts.triggerDistance : 70;
    let float = opts && 'float' in opts ? opts.float : false;
    let completeDuration = opts && 'completeDuration' in opts ? opts.completeDuration : null;
    let enableInfiniteLoad = opts && 'enableInfiniteLoad' in opts ? opts.enableInfiniteLoad : false;
    let enableHapticFeedback = opts && 'enableHapticFeedback' in opts ? opts.enableHapticFeedback : false;
    let footerBuilder = opts && 'footerBuilder' in opts ? opts.footerBuilder : null;
    this[footerBuilder$] = footerBuilder;
    footer$.CustomFooter.__proto__.new.call(this, {extent: core.double._check(extent), triggerDistance: core.double._check(triggerDistance), completeDuration: core.Duration._check(completeDuration), enableInfiniteLoad: core.bool._check(enableInfiniteLoad), enableHapticFeedback: core.bool._check(enableHapticFeedback)});
    ;
  }).prototype = footer$.CustomFooter.prototype;
  dart.addTypeTests(footer$.CustomFooter);
  dart.setMethodSignature(footer$.CustomFooter, () => ({
    __proto__: dart.getMethods(footer$.CustomFooter.__proto__),
    contentBuilder: dart.fnType(framework.Widget, [framework.BuildContext, load_indicator.LoadMode, core.double, core.double, core.double, basic_types.AxisDirection, core.bool, core.Duration, core.bool, core.bool, core.bool])
  }));
  dart.setLibraryUri(footer$.CustomFooter, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart");
  dart.setFieldSignature(footer$.CustomFooter, () => ({
    __proto__: dart.getFields(footer$.CustomFooter.__proto__),
    footerBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, load_indicator.LoadMode, core.double, core.double, core.double, basic_types.AxisDirection, core.bool, core.Duration, core.bool, core.bool, core.bool]))
  }));
  const context = dart.privateName(footer$, "LinkFooterNotifier.context");
  const loadState = dart.privateName(footer$, "LinkFooterNotifier.loadState");
  const pulledExtent = dart.privateName(footer$, "LinkFooterNotifier.pulledExtent");
  const loadTriggerPullDistance = dart.privateName(footer$, "LinkFooterNotifier.loadTriggerPullDistance");
  const loadIndicatorExtent = dart.privateName(footer$, "LinkFooterNotifier.loadIndicatorExtent");
  const axisDirection = dart.privateName(footer$, "LinkFooterNotifier.axisDirection");
  const float = dart.privateName(footer$, "LinkFooterNotifier.float");
  const completeDuration = dart.privateName(footer$, "LinkFooterNotifier.completeDuration");
  const enableInfiniteLoad = dart.privateName(footer$, "LinkFooterNotifier.enableInfiniteLoad");
  const success = dart.privateName(footer$, "LinkFooterNotifier.success");
  const noMore = dart.privateName(footer$, "LinkFooterNotifier.noMore");
  footer$.LinkFooterNotifier = class LinkFooterNotifier extends change_notifier.ChangeNotifier {
    get context() {
      return this[context];
    }
    set context(value) {
      this[context] = value;
    }
    get loadState() {
      return this[loadState];
    }
    set loadState(value) {
      this[loadState] = value;
    }
    get pulledExtent() {
      return this[pulledExtent];
    }
    set pulledExtent(value) {
      this[pulledExtent] = value;
    }
    get loadTriggerPullDistance() {
      return this[loadTriggerPullDistance];
    }
    set loadTriggerPullDistance(value) {
      this[loadTriggerPullDistance] = value;
    }
    get loadIndicatorExtent() {
      return this[loadIndicatorExtent];
    }
    set loadIndicatorExtent(value) {
      this[loadIndicatorExtent] = value;
    }
    get axisDirection() {
      return this[axisDirection];
    }
    set axisDirection(value) {
      this[axisDirection] = value;
    }
    get float() {
      return this[float];
    }
    set float(value) {
      this[float] = value;
    }
    get completeDuration() {
      return this[completeDuration];
    }
    set completeDuration(value) {
      this[completeDuration] = value;
    }
    get enableInfiniteLoad() {
      return this[enableInfiniteLoad];
    }
    set enableInfiniteLoad(value) {
      this[enableInfiniteLoad] = value;
    }
    get success() {
      return this[success];
    }
    set success(value) {
      this[success] = value;
    }
    get noMore() {
      return this[noMore];
    }
    set noMore(value) {
      this[noMore] = value;
    }
    contentBuilder(context, loadState, pulledExtent, loadTriggerPullDistance, loadIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteLoad, success, noMore) {
      this.context = context;
      this.loadState = loadState;
      this.pulledExtent = pulledExtent;
      this.loadTriggerPullDistance = loadTriggerPullDistance;
      this.loadIndicatorExtent = loadIndicatorExtent;
      this.axisDirection = axisDirection;
      this.float = float;
      this.completeDuration = completeDuration;
      this.enableInfiniteLoad = enableInfiniteLoad;
      this.success = success;
      this.noMore = noMore;
      binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timestamp => {
        this.notifyListeners();
      }, DurationToNull()));
    }
  };
  (footer$.LinkFooterNotifier.new = function() {
    this[context] = null;
    this[loadState] = load_indicator.LoadMode.inactive;
    this[pulledExtent] = 0.0;
    this[loadTriggerPullDistance] = null;
    this[loadIndicatorExtent] = null;
    this[axisDirection] = null;
    this[float] = null;
    this[completeDuration] = null;
    this[enableInfiniteLoad] = null;
    this[success] = true;
    this[noMore] = false;
    footer$.LinkFooterNotifier.__proto__.new.call(this);
    ;
  }).prototype = footer$.LinkFooterNotifier.prototype;
  dart.addTypeTests(footer$.LinkFooterNotifier);
  dart.setMethodSignature(footer$.LinkFooterNotifier, () => ({
    __proto__: dart.getMethods(footer$.LinkFooterNotifier.__proto__),
    contentBuilder: dart.fnType(dart.void, [framework.BuildContext, load_indicator.LoadMode, core.double, core.double, core.double, basic_types.AxisDirection, core.bool, core.Duration, core.bool, core.bool, core.bool])
  }));
  dart.setLibraryUri(footer$.LinkFooterNotifier, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart");
  dart.setFieldSignature(footer$.LinkFooterNotifier, () => ({
    __proto__: dart.getFields(footer$.LinkFooterNotifier.__proto__),
    context: dart.fieldType(framework.BuildContext),
    loadState: dart.fieldType(load_indicator.LoadMode),
    pulledExtent: dart.fieldType(core.double),
    loadTriggerPullDistance: dart.fieldType(core.double),
    loadIndicatorExtent: dart.fieldType(core.double),
    axisDirection: dart.fieldType(basic_types.AxisDirection),
    float: dart.fieldType(core.bool),
    completeDuration: dart.fieldType(core.Duration),
    enableInfiniteLoad: dart.fieldType(core.bool),
    success: dart.fieldType(core.bool),
    noMore: dart.fieldType(core.bool)
  }));
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C15;
  const Color__value = dart.privateName(ui, "Color._value");
  let C16;
  let C17;
  let C20;
  let C21;
  let C22;
  let C23;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C19;
  const ColorSwatch__swatch = dart.privateName(colors, "ColorSwatch._swatch");
  let C18;
  let C32;
  let C33;
  let C34;
  let C35;
  let C36;
  let C37;
  let C38;
  let C39;
  let C40;
  let C41;
  let C42;
  let C43;
  let C31;
  let C30;
  const key$ = dart.privateName(footer$, "ClassicalFooter.key");
  const alignment$ = dart.privateName(footer$, "ClassicalFooter.alignment");
  const loadText$ = dart.privateName(footer$, "ClassicalFooter.loadText");
  const loadReadyText$ = dart.privateName(footer$, "ClassicalFooter.loadReadyText");
  const loadingText$ = dart.privateName(footer$, "ClassicalFooter.loadingText");
  const loadedText$ = dart.privateName(footer$, "ClassicalFooter.loadedText");
  const loadFailedText$ = dart.privateName(footer$, "ClassicalFooter.loadFailedText");
  const noMoreText$ = dart.privateName(footer$, "ClassicalFooter.noMoreText");
  const showInfo$ = dart.privateName(footer$, "ClassicalFooter.showInfo");
  const infoText$ = dart.privateName(footer$, "ClassicalFooter.infoText");
  const bgColor$ = dart.privateName(footer$, "ClassicalFooter.bgColor");
  const textColor$ = dart.privateName(footer$, "ClassicalFooter.textColor");
  const infoColor$ = dart.privateName(footer$, "ClassicalFooter.infoColor");
  footer$.ClassicalFooter = class ClassicalFooter extends footer$.Footer {
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get loadText() {
      return this[loadText$];
    }
    set loadText(value) {
      super.loadText = value;
    }
    get loadReadyText() {
      return this[loadReadyText$];
    }
    set loadReadyText(value) {
      super.loadReadyText = value;
    }
    get loadingText() {
      return this[loadingText$];
    }
    set loadingText(value) {
      super.loadingText = value;
    }
    get loadedText() {
      return this[loadedText$];
    }
    set loadedText(value) {
      super.loadedText = value;
    }
    get loadFailedText() {
      return this[loadFailedText$];
    }
    set loadFailedText(value) {
      super.loadFailedText = value;
    }
    get noMoreText() {
      return this[noMoreText$];
    }
    set noMoreText(value) {
      super.noMoreText = value;
    }
    get showInfo() {
      return this[showInfo$];
    }
    set showInfo(value) {
      super.showInfo = value;
    }
    get infoText() {
      return this[infoText$];
    }
    set infoText(value) {
      super.infoText = value;
    }
    get bgColor() {
      return this[bgColor$];
    }
    set bgColor(value) {
      super.bgColor = value;
    }
    get textColor() {
      return this[textColor$];
    }
    set textColor(value) {
      super.textColor = value;
    }
    get infoColor() {
      return this[infoColor$];
    }
    set infoColor(value) {
      super.infoColor = value;
    }
    contentBuilder(context, loadState, pulledExtent, loadTriggerPullDistance, loadIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteLoad, success, noMore) {
      return new footer$.ClassicalFooterWidget.new({key: this.key, classicalFooter: this, loadState: loadState, pulledExtent: pulledExtent, loadTriggerPullDistance: loadTriggerPullDistance, loadIndicatorExtent: loadIndicatorExtent, axisDirection: axisDirection, float: float, completeDuration: completeDuration, enableInfiniteLoad: enableInfiniteLoad, success: success, noMore: noMore, $creationLocationd_0dea112b090073317d4: C30 || CT.C30});
    }
  };
  (footer$.ClassicalFooter.new = function(opts) {
    let extent = opts && 'extent' in opts ? opts.extent : 60;
    let triggerDistance = opts && 'triggerDistance' in opts ? opts.triggerDistance : 70;
    let float = opts && 'float' in opts ? opts.float : false;
    let completeDuration = opts && 'completeDuration' in opts ? opts.completeDuration : C15 || CT.C15;
    let enableInfiniteLoad = opts && 'enableInfiniteLoad' in opts ? opts.enableInfiniteLoad : true;
    let enableHapticFeedback = opts && 'enableHapticFeedback' in opts ? opts.enableHapticFeedback : true;
    let key = opts && 'key' in opts ? opts.key : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let loadText = opts && 'loadText' in opts ? opts.loadText : null;
    let loadReadyText = opts && 'loadReadyText' in opts ? opts.loadReadyText : null;
    let loadingText = opts && 'loadingText' in opts ? opts.loadingText : null;
    let loadedText = opts && 'loadedText' in opts ? opts.loadedText : null;
    let loadFailedText = opts && 'loadFailedText' in opts ? opts.loadFailedText : null;
    let noMoreText = opts && 'noMoreText' in opts ? opts.noMoreText : null;
    let showInfo = opts && 'showInfo' in opts ? opts.showInfo : true;
    let infoText = opts && 'infoText' in opts ? opts.infoText : null;
    let bgColor = opts && 'bgColor' in opts ? opts.bgColor : C16 || CT.C16;
    let textColor = opts && 'textColor' in opts ? opts.textColor : C17 || CT.C17;
    let infoColor = opts && 'infoColor' in opts ? opts.infoColor : C18 || CT.C18;
    this[key$] = key;
    this[alignment$] = alignment;
    this[loadText$] = loadText;
    this[loadReadyText$] = loadReadyText;
    this[loadingText$] = loadingText;
    this[loadedText$] = loadedText;
    this[loadFailedText$] = loadFailedText;
    this[noMoreText$] = noMoreText;
    this[showInfo$] = showInfo;
    this[infoText$] = infoText;
    this[bgColor$] = bgColor;
    this[textColor$] = textColor;
    this[infoColor$] = infoColor;
    footer$.ClassicalFooter.__proto__.new.call(this, {extent: extent, triggerDistance: triggerDistance, float: float, completeDuration: completeDuration, enableInfiniteLoad: enableInfiniteLoad, enableHapticFeedback: enableHapticFeedback});
    ;
  }).prototype = footer$.ClassicalFooter.prototype;
  dart.addTypeTests(footer$.ClassicalFooter);
  dart.setMethodSignature(footer$.ClassicalFooter, () => ({
    __proto__: dart.getMethods(footer$.ClassicalFooter.__proto__),
    contentBuilder: dart.fnType(framework.Widget, [framework.BuildContext, load_indicator.LoadMode, core.double, core.double, core.double, basic_types.AxisDirection, core.bool, core.Duration, core.bool, core.bool, core.bool])
  }));
  dart.setLibraryUri(footer$.ClassicalFooter, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart");
  dart.setFieldSignature(footer$.ClassicalFooter, () => ({
    __proto__: dart.getFields(footer$.ClassicalFooter.__proto__),
    key: dart.finalFieldType(key.Key),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    loadText: dart.finalFieldType(core.String),
    loadReadyText: dart.finalFieldType(core.String),
    loadingText: dart.finalFieldType(core.String),
    loadedText: dart.finalFieldType(core.String),
    loadFailedText: dart.finalFieldType(core.String),
    noMoreText: dart.finalFieldType(core.String),
    showInfo: dart.finalFieldType(core.bool),
    infoText: dart.finalFieldType(core.String),
    bgColor: dart.finalFieldType(ui.Color),
    textColor: dart.finalFieldType(ui.Color),
    infoColor: dart.finalFieldType(ui.Color)
  }));
  const classicalFooter$ = dart.privateName(footer$, "ClassicalFooterWidget.classicalFooter");
  const loadState$ = dart.privateName(footer$, "ClassicalFooterWidget.loadState");
  const pulledExtent$ = dart.privateName(footer$, "ClassicalFooterWidget.pulledExtent");
  const loadTriggerPullDistance$ = dart.privateName(footer$, "ClassicalFooterWidget.loadTriggerPullDistance");
  const loadIndicatorExtent$ = dart.privateName(footer$, "ClassicalFooterWidget.loadIndicatorExtent");
  const axisDirection$ = dart.privateName(footer$, "ClassicalFooterWidget.axisDirection");
  const float$0 = dart.privateName(footer$, "ClassicalFooterWidget.float");
  const completeDuration$0 = dart.privateName(footer$, "ClassicalFooterWidget.completeDuration");
  const enableInfiniteLoad$0 = dart.privateName(footer$, "ClassicalFooterWidget.enableInfiniteLoad");
  const success$ = dart.privateName(footer$, "ClassicalFooterWidget.success");
  const noMore$ = dart.privateName(footer$, "ClassicalFooterWidget.noMore");
  footer$.ClassicalFooterWidget = class ClassicalFooterWidget extends framework.StatefulWidget {
    get classicalFooter() {
      return this[classicalFooter$];
    }
    set classicalFooter(value) {
      super.classicalFooter = value;
    }
    get loadState() {
      return this[loadState$];
    }
    set loadState(value) {
      super.loadState = value;
    }
    get pulledExtent() {
      return this[pulledExtent$];
    }
    set pulledExtent(value) {
      super.pulledExtent = value;
    }
    get loadTriggerPullDistance() {
      return this[loadTriggerPullDistance$];
    }
    set loadTriggerPullDistance(value) {
      super.loadTriggerPullDistance = value;
    }
    get loadIndicatorExtent() {
      return this[loadIndicatorExtent$];
    }
    set loadIndicatorExtent(value) {
      super.loadIndicatorExtent = value;
    }
    get axisDirection() {
      return this[axisDirection$];
    }
    set axisDirection(value) {
      super.axisDirection = value;
    }
    get float() {
      return this[float$0];
    }
    set float(value) {
      super.float = value;
    }
    get completeDuration() {
      return this[completeDuration$0];
    }
    set completeDuration(value) {
      super.completeDuration = value;
    }
    get enableInfiniteLoad() {
      return this[enableInfiniteLoad$0];
    }
    set enableInfiniteLoad(value) {
      super.enableInfiniteLoad = value;
    }
    get success() {
      return this[success$];
    }
    set success(value) {
      super.success = value;
    }
    get noMore() {
      return this[noMore$];
    }
    set noMore(value) {
      super.noMore = value;
    }
    createState() {
      return new footer$.ClassicalFooterWidgetState.new();
    }
  };
  (footer$.ClassicalFooterWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let loadState = opts && 'loadState' in opts ? opts.loadState : null;
    let classicalFooter = opts && 'classicalFooter' in opts ? opts.classicalFooter : null;
    let pulledExtent = opts && 'pulledExtent' in opts ? opts.pulledExtent : null;
    let loadTriggerPullDistance = opts && 'loadTriggerPullDistance' in opts ? opts.loadTriggerPullDistance : null;
    let loadIndicatorExtent = opts && 'loadIndicatorExtent' in opts ? opts.loadIndicatorExtent : null;
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
    let float = opts && 'float' in opts ? opts.float : null;
    let completeDuration = opts && 'completeDuration' in opts ? opts.completeDuration : null;
    let enableInfiniteLoad = opts && 'enableInfiniteLoad' in opts ? opts.enableInfiniteLoad : null;
    let success = opts && 'success' in opts ? opts.success : null;
    let noMore = opts && 'noMore' in opts ? opts.noMore : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[loadState$] = loadState;
    this[classicalFooter$] = classicalFooter;
    this[pulledExtent$] = pulledExtent;
    this[loadTriggerPullDistance$] = loadTriggerPullDistance;
    this[loadIndicatorExtent$] = loadIndicatorExtent;
    this[axisDirection$] = axisDirection;
    this[float$0] = float;
    this[completeDuration$0] = completeDuration;
    this[enableInfiniteLoad$0] = enableInfiniteLoad;
    this[success$] = success;
    this[noMore$] = noMore;
    footer$.ClassicalFooterWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = footer$.ClassicalFooterWidget.prototype;
  dart.addTypeTests(footer$.ClassicalFooterWidget);
  dart.setMethodSignature(footer$.ClassicalFooterWidget, () => ({
    __proto__: dart.getMethods(footer$.ClassicalFooterWidget.__proto__),
    createState: dart.fnType(footer$.ClassicalFooterWidgetState, [])
  }));
  dart.setLibraryUri(footer$.ClassicalFooterWidget, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart");
  dart.setFieldSignature(footer$.ClassicalFooterWidget, () => ({
    __proto__: dart.getFields(footer$.ClassicalFooterWidget.__proto__),
    classicalFooter: dart.finalFieldType(footer$.ClassicalFooter),
    loadState: dart.finalFieldType(load_indicator.LoadMode),
    pulledExtent: dart.finalFieldType(core.double),
    loadTriggerPullDistance: dart.finalFieldType(core.double),
    loadIndicatorExtent: dart.finalFieldType(core.double),
    axisDirection: dart.finalFieldType(basic_types.AxisDirection),
    float: dart.finalFieldType(core.bool),
    completeDuration: dart.finalFieldType(core.Duration),
    enableInfiniteLoad: dart.finalFieldType(core.bool),
    success: dart.finalFieldType(core.bool),
    noMore: dart.finalFieldType(core.bool)
  }));
  const _overTriggerDistance = dart.privateName(footer$, "_overTriggerDistance");
  const _localizations = dart.privateName(footer$, "_localizations");
  const _readyController = dart.privateName(footer$, "_readyController");
  const _readyAnimation = dart.privateName(footer$, "_readyAnimation");
  const _restoreController = dart.privateName(footer$, "_restoreController");
  const _restoreAnimation = dart.privateName(footer$, "_restoreAnimation");
  const _iconRotationValue = dart.privateName(footer$, "_iconRotationValue");
  const _dateTime = dart.privateName(footer$, "_dateTime");
  const _loadText = dart.privateName(footer$, "_loadText");
  const _loadReadyText = dart.privateName(footer$, "_loadReadyText");
  const _loadingText = dart.privateName(footer$, "_loadingText");
  const _loadedText = dart.privateName(footer$, "_loadedText");
  const _loadFailedText = dart.privateName(footer$, "_loadFailedText");
  const _noMoreText = dart.privateName(footer$, "_noMoreText");
  const _infoText = dart.privateName(footer$, "_infoText");
  const _finishedText = dart.privateName(footer$, "_finishedText");
  const _name = dart.privateName(load_indicator, "_name");
  let C44;
  let C45;
  let C46;
  let C47;
  const _showText = dart.privateName(footer$, "_showText");
  const _finishedIcon = dart.privateName(footer$, "_finishedIcon");
  const _infoTextStr = dart.privateName(footer$, "_infoTextStr");
  let C48;
  const _buildContent = dart.privateName(footer$, "_buildContent");
  let C51;
  let C52;
  let C50;
  let C49;
  let C55;
  let C56;
  let C54;
  let C53;
  let C59;
  let C60;
  let C61;
  let C58;
  let C57;
  let C64;
  let C65;
  let C66;
  let C67;
  let C68;
  let C63;
  let C62;
  let C71;
  let C72;
  let C73;
  let C74;
  let C75;
  let C70;
  let C69;
  let C78;
  let C77;
  let C76;
  let C81;
  let C82;
  let C80;
  let C79;
  let C85;
  let C86;
  let C87;
  let C84;
  let C83;
  let C90;
  let C91;
  let C89;
  let C88;
  let C94;
  let C95;
  let C93;
  let C92;
  let C98;
  let C99;
  let C97;
  let C96;
  let C102;
  let C103;
  let C104;
  let C101;
  let C100;
  let C107;
  let C108;
  let C106;
  let C105;
  let C111;
  let C112;
  let C110;
  let C109;
  let C115;
  let C116;
  let C114;
  let C113;
  let C119;
  let C120;
  let C118;
  let C117;
  let C122;
  let C121;
  let C125;
  let C126;
  let C127;
  let C124;
  let C123;
  let C130;
  let C131;
  let C129;
  let C128;
  let C132;
  let C135;
  let C136;
  let C134;
  let C133;
  let C139;
  let C140;
  let C138;
  let C137;
  let C143;
  let C144;
  let C145;
  let C142;
  let C141;
  let C148;
  let C149;
  let C147;
  let C146;
  let C152;
  let C153;
  let C151;
  let C150;
  let C156;
  let C157;
  let C155;
  let C154;
  let C160;
  let C159;
  let C158;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(footer$.ClassicalFooterWidget) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(footer$.ClassicalFooterWidget)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(footer$.ClassicalFooterWidget));
  footer$.ClassicalFooterWidgetState = class ClassicalFooterWidgetState extends State_TickerProviderStateMixin$36 {
    get overTriggerDistance() {
      return this[_overTriggerDistance];
    }
    set overTriggerDistance(over) {
      if (!dart.equals(this[_overTriggerDistance], over)) {
        dart.test(this[_overTriggerDistance]) ? this[_readyController].forward() : this[_restoreController].forward();
      }
      this[_overTriggerDistance] = over;
    }
    get [_loadText]() {
      let t0;
      t0 = this.widget.classicalFooter.loadText;
      return t0 == null ? global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context) == null ? this[_localizations].pushToLoad : global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context).pushToLoad : t0;
    }
    get [_loadReadyText]() {
      let t0;
      t0 = this.widget.classicalFooter.loadReadyText;
      return t0 == null ? global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context) == null ? this[_localizations].releaseToLoad : global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context).releaseToLoad : t0;
    }
    get [_loadingText]() {
      let t0;
      t0 = this.widget.classicalFooter.loadingText;
      return t0 == null ? global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context) == null ? this[_localizations].loading : global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context).loading : t0;
    }
    get [_loadedText]() {
      let t0;
      t0 = this.widget.classicalFooter.loadedText;
      return t0 == null ? global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context) == null ? this[_localizations].loaded : global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context).loaded : t0;
    }
    get [_loadFailedText]() {
      let t0;
      t0 = this.widget.classicalFooter.loadFailedText;
      return t0 == null ? global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context) == null ? this[_localizations].loadFailed : global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context).loadFailed : t0;
    }
    get [_noMoreText]() {
      let t0;
      t0 = this.widget.classicalFooter.noMoreText;
      return t0 == null ? global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context) == null ? this[_localizations].noMore : global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context).noMore : t0;
    }
    get [_infoText]() {
      let t0;
      t0 = this.widget.classicalFooter.infoText;
      return t0 == null ? global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context) == null ? this[_localizations].updateAt : global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context).updateAt : t0;
    }
    get [_showText]() {
      if (dart.test(this.widget.noMore)) return this[_noMoreText];
      if (dart.test(this.widget.enableInfiniteLoad)) {
        if (dart.equals(this.widget.loadState, load_indicator.LoadMode.loaded) || dart.equals(this.widget.loadState, load_indicator.LoadMode.inactive) || dart.equals(this.widget.loadState, load_indicator.LoadMode.drag)) {
          return this[_finishedText];
        } else {
          return this[_loadingText];
        }
      }
      switch (this.widget.loadState) {
        case C44 || CT.C44:
        {
          return this[_loadingText];
        }
        case C45 || CT.C45:
        {
          return this[_loadingText];
        }
        case C46 || CT.C46:
        {
          return this[_finishedText];
        }
        case C47 || CT.C47:
        {
          return this[_finishedText];
        }
        default:
        {
          if (dart.test(this.overTriggerDistance)) {
            return this[_loadReadyText];
          } else {
            return this[_loadText];
          }
        }
      }
    }
    get [_finishedText]() {
      if (!dart.test(this.widget.success)) return this[_loadFailedText];
      if (dart.test(this.widget.noMore)) return this[_noMoreText];
      return this[_loadedText];
    }
    get [_finishedIcon]() {
      if (!dart.test(this.widget.success)) return icons.Icons.error_outline;
      if (dart.test(this.widget.noMore)) return icons.Icons.hourglass_empty;
      return icons.Icons.done;
    }
    get [_infoTextStr]() {
      if (dart.equals(this.widget.loadState, load_indicator.LoadMode.loaded)) {
        this[_dateTime] = new core.DateTime.now();
      }
      let fillChar = dart.notNull(this[_dateTime].minute) < 10 ? "0" : "";
      return this[_infoText][$replaceAll]("%T", dart.str(this[_dateTime].hour) + ":" + fillChar + dart.str(this[_dateTime].minute));
    }
    initState() {
      let t0, t0$;
      super.initState();
      this[_dateTime] = new core.DateTime.now();
      this[_readyController] = new animation_controller.AnimationController.new({duration: C48 || CT.C48, vsync: this});
      this[_readyAnimation] = (t0 = new (TweenOfdouble()).new({begin: 0.5, end: 1.0}).animate(this[_readyController]), t0.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
          if (!dart.equals(this[_readyAnimation].status, animation.AnimationStatus.dismissed)) {
            this[_iconRotationValue] = this[_readyAnimation].value;
          }
        }, VoidToNull()));
      }, VoidToNull())), t0);
      this[_readyAnimation].addStatusListener(dart.fn(status => {
        if (dart.equals(status, animation.AnimationStatus.completed)) {
          this[_readyController].reset();
        }
      }, AnimationStatusToNull()));
      this[_restoreController] = new animation_controller.AnimationController.new({duration: C48 || CT.C48, vsync: this});
      this[_restoreAnimation] = (t0$ = new (TweenOfdouble()).new({begin: 1.0, end: 0.5}).animate(this[_restoreController]), t0$.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
          if (!dart.equals(this[_restoreAnimation].status, animation.AnimationStatus.dismissed)) {
            this[_iconRotationValue] = this[_restoreAnimation].value;
          }
        }, VoidToNull()));
      }, VoidToNull())), t0$);
      this[_restoreAnimation].addStatusListener(dart.fn(status => {
        if (dart.equals(status, animation.AnimationStatus.completed)) {
          this[_restoreController].reset();
        }
      }, AnimationStatusToNull()));
    }
    dispose() {
      this[_readyController].dispose();
      this[_restoreController].dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      let isVertical = dart.equals(this.widget.axisDirection, basic_types.AxisDirection.down) || dart.equals(this.widget.axisDirection, basic_types.AxisDirection.up);
      let isReverse = dart.equals(this.widget.axisDirection, basic_types.AxisDirection.up) || dart.equals(this.widget.axisDirection, basic_types.AxisDirection.left);
      this.overTriggerDistance = !dart.equals(this.widget.loadState, load_indicator.LoadMode.inactive) && dart.notNull(this.widget.pulledExtent) >= dart.notNull(this.widget.loadTriggerPullDistance);
      return new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Positioned.new({top: !isVertical ? 0.0 : !isReverse ? 0.0 : null, bottom: !isVertical ? 0.0 : isReverse ? 0.0 : null, left: isVertical ? 0.0 : !isReverse ? 0.0 : null, right: isVertical ? 0.0 : isReverse ? 0.0 : null, child: new container.Container.new({alignment: dart.dtest((t0 = this.widget.classicalFooter.alignment, t0 == null ? isVertical : t0)) ? !isReverse ? alignment.Alignment.topCenter : alignment.Alignment.bottomCenter : isReverse ? alignment.Alignment.centerRight : alignment.Alignment.centerLeft, width: !isVertical ? dart.notNull(this.widget.loadIndicatorExtent) > dart.notNull(this.widget.pulledExtent) ? this.widget.loadIndicatorExtent : this.widget.pulledExtent : 1 / 0, height: isVertical ? dart.notNull(this.widget.loadIndicatorExtent) > dart.notNull(this.widget.pulledExtent) ? this.widget.loadIndicatorExtent : this.widget.pulledExtent : 1 / 0, color: this.widget.classicalFooter.bgColor, child: new basic.SizedBox.new({height: isVertical ? this.widget.loadIndicatorExtent : 1 / 0, width: !isVertical ? this.widget.loadIndicatorExtent : 1 / 0, child: isVertical ? new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: this[_buildContent](isVertical, isReverse), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}) : new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: this[_buildContent](isVertical, isReverse), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69})]), $creationLocationd_0dea112b090073317d4: C76 || CT.C76});
    }
    [_buildContent](isVertical, isReverse) {
      return dart.test(isVertical) ? JSArrayOfWidget().of([new basic.Expanded.new({flex: 2, child: new container.Container.new({alignment: alignment.Alignment.centerRight, padding: new edge_insets.EdgeInsets.only({right: 10.0}), child: (dart.equals(this.widget.loadState, load_indicator.LoadMode.load) || dart.equals(this.widget.loadState, load_indicator.LoadMode.armed)) && !dart.test(this.widget.noMore) ? new container.Container.new({width: 20.0, height: 20.0, child: new progress_indicator.CircularProgressIndicator.new({strokeWidth: 2.0, valueColor: new (AlwaysStoppedAnimationOfColor()).new(this.widget.classicalFooter.textColor), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), $creationLocationd_0dea112b090073317d4: C83 || CT.C83}) : dart.equals(this.widget.loadState, load_indicator.LoadMode.loaded) || dart.equals(this.widget.loadState, load_indicator.LoadMode.done) || dart.test(this.widget.enableInfiniteLoad) && !dart.equals(this.widget.loadState, load_indicator.LoadMode.loaded) || dart.test(this.widget.noMore) ? new icon.Icon.new(this[_finishedIcon], {color: this.widget.classicalFooter.textColor, $creationLocationd_0dea112b090073317d4: C88 || CT.C88}) : new basic.Transform.rotate({child: new icon.Icon.new(!dart.test(isReverse) ? icons.Icons.arrow_upward : icons.Icons.arrow_downward, {color: this.widget.classicalFooter.textColor, $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), angle: 2 * 3.141592653589793 * dart.notNull(this[_iconRotationValue]), $creationLocationd_0dea112b090073317d4: C96 || CT.C96}), $creationLocationd_0dea112b090073317d4: C100 || CT.C100}), $creationLocationd_0dea112b090073317d4: C105 || CT.C105}), new basic.Expanded.new({flex: 3, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new(this[_showText], {style: new text_style.TextStyle.new({fontSize: 16.0, color: this.widget.classicalFooter.textColor}), $creationLocationd_0dea112b090073317d4: C109 || CT.C109}), dart.test(this.widget.classicalFooter.showInfo) ? new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 2.0}), child: new text.Text.new(this[_infoTextStr], {style: new text_style.TextStyle.new({fontSize: 12.0, color: this.widget.classicalFooter.infoColor}), $creationLocationd_0dea112b090073317d4: C113 || CT.C113}), $creationLocationd_0dea112b090073317d4: C117 || CT.C117}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C121 || CT.C121})]), $creationLocationd_0dea112b090073317d4: C123 || CT.C123}), $creationLocationd_0dea112b090073317d4: C128 || CT.C128}), new basic.Expanded.new({flex: 2, child: new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C132 || CT.C132}), $creationLocationd_0dea112b090073317d4: C133 || CT.C133})]) : JSArrayOfWidget().of([new container.Container.new({child: dart.equals(this.widget.loadState, load_indicator.LoadMode.load) || dart.equals(this.widget.loadState, load_indicator.LoadMode.armed) ? new container.Container.new({width: 20.0, height: 20.0, child: new progress_indicator.CircularProgressIndicator.new({strokeWidth: 2.0, valueColor: new (AlwaysStoppedAnimationOfColor()).new(this.widget.classicalFooter.textColor), $creationLocationd_0dea112b090073317d4: C137 || CT.C137}), $creationLocationd_0dea112b090073317d4: C141 || CT.C141}) : dart.equals(this.widget.loadState, load_indicator.LoadMode.loaded) || dart.equals(this.widget.loadState, load_indicator.LoadMode.done) || dart.test(this.widget.enableInfiniteLoad) && !dart.equals(this.widget.loadState, load_indicator.LoadMode.loaded) || dart.test(this.widget.noMore) ? new icon.Icon.new(this[_finishedIcon], {color: this.widget.classicalFooter.textColor, $creationLocationd_0dea112b090073317d4: C146 || CT.C146}) : new basic.Transform.rotate({child: new icon.Icon.new(!dart.test(isReverse) ? icons.Icons.arrow_back : icons.Icons.arrow_forward, {color: this.widget.classicalFooter.textColor, $creationLocationd_0dea112b090073317d4: C150 || CT.C150}), angle: 2 * 3.141592653589793 * dart.notNull(this[_iconRotationValue]), $creationLocationd_0dea112b090073317d4: C154 || CT.C154}), $creationLocationd_0dea112b090073317d4: C158 || CT.C158})]);
    }
  };
  (footer$.ClassicalFooterWidgetState.new = function() {
    this[_overTriggerDistance] = false;
    this[_localizations] = new global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.new();
    this[_readyController] = null;
    this[_readyAnimation] = null;
    this[_restoreController] = null;
    this[_restoreAnimation] = null;
    this[_iconRotationValue] = 1.0;
    this[_dateTime] = null;
    footer$.ClassicalFooterWidgetState.__proto__.new.call(this);
    ;
  }).prototype = footer$.ClassicalFooterWidgetState.prototype;
  dart.addTypeTests(footer$.ClassicalFooterWidgetState);
  dart.setMethodSignature(footer$.ClassicalFooterWidgetState, () => ({
    __proto__: dart.getMethods(footer$.ClassicalFooterWidgetState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildContent]: dart.fnType(core.List$(framework.Widget), [core.bool, core.bool])
  }));
  dart.setGetterSignature(footer$.ClassicalFooterWidgetState, () => ({
    __proto__: dart.getGetters(footer$.ClassicalFooterWidgetState.__proto__),
    overTriggerDistance: core.bool,
    [_loadText]: core.String,
    [_loadReadyText]: core.String,
    [_loadingText]: core.String,
    [_loadedText]: core.String,
    [_loadFailedText]: core.String,
    [_noMoreText]: core.String,
    [_infoText]: core.String,
    [_showText]: core.String,
    [_finishedText]: core.String,
    [_finishedIcon]: icon_data.IconData,
    [_infoTextStr]: core.String
  }));
  dart.setSetterSignature(footer$.ClassicalFooterWidgetState, () => ({
    __proto__: dart.getSetters(footer$.ClassicalFooterWidgetState.__proto__),
    overTriggerDistance: core.bool
  }));
  dart.setLibraryUri(footer$.ClassicalFooterWidgetState, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart");
  dart.setFieldSignature(footer$.ClassicalFooterWidgetState, () => ({
    __proto__: dart.getFields(footer$.ClassicalFooterWidgetState.__proto__),
    [_overTriggerDistance]: dart.fieldType(core.bool),
    [_localizations]: dart.fieldType(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations),
    [_readyController]: dart.fieldType(animation_controller.AnimationController),
    [_readyAnimation]: dart.fieldType(animation.Animation$(core.double)),
    [_restoreController]: dart.fieldType(animation_controller.AnimationController),
    [_restoreAnimation]: dart.fieldType(animation.Animation$(core.double)),
    [_iconRotationValue]: dart.fieldType(core.double),
    [_dateTime]: dart.fieldType(core.DateTime)
  }));
  let C163;
  let C164;
  let C165;
  let C166;
  let C167;
  let C168;
  let C169;
  let C170;
  let C171;
  let C172;
  let C173;
  let C174;
  let C175;
  let C176;
  let C162;
  let C161;
  const extent$0 = dart.privateName(header$, "Header.extent");
  const triggerDistance$0 = dart.privateName(header$, "Header.triggerDistance");
  const float$1 = dart.privateName(header$, "Header.float");
  const completeDuration$1 = dart.privateName(header$, "Header.completeDuration");
  const enableInfiniteRefresh$ = dart.privateName(header$, "Header.enableInfiniteRefresh");
  const enableHapticFeedback$0 = dart.privateName(header$, "Header.enableHapticFeedback");
  header$.Header = class Header extends core.Object {
    get extent() {
      return this[extent$0];
    }
    set extent(value) {
      super.extent = value;
    }
    get triggerDistance() {
      return this[triggerDistance$0];
    }
    set triggerDistance(value) {
      super.triggerDistance = value;
    }
    get float() {
      return this[float$1];
    }
    set float(value) {
      super.float = value;
    }
    get completeDuration() {
      return this[completeDuration$1];
    }
    set completeDuration(value) {
      super.completeDuration = value;
    }
    get enableInfiniteRefresh() {
      return this[enableInfiniteRefresh$];
    }
    set enableInfiniteRefresh(value) {
      super.enableInfiniteRefresh = value;
    }
    get enableHapticFeedback() {
      return this[enableHapticFeedback$0];
    }
    set enableHapticFeedback(value) {
      super.enableHapticFeedback = value;
    }
    builder(context, easyRefresh, focusNotifier, taskNotifier, callRefreshNotifier) {
      return new refresh_indicator.EasyRefreshSliverRefreshControl.new({refreshIndicatorExtent: this.extent, refreshTriggerPullDistance: this.triggerDistance, builder: dart.bind(this, 'contentBuilder'), completeDuration: this.completeDuration, onRefresh: easyRefresh.onRefresh, focusNotifier: focusNotifier, taskNotifier: taskNotifier, callRefreshNotifier: callRefreshNotifier, taskIndependence: easyRefresh.taskIndependence, enableControlFinishRefresh: easyRefresh.enableControlFinishRefresh, enableInfiniteRefresh: dart.test(this.enableInfiniteRefresh) && !dart.test(this.float), enableHapticFeedback: this.enableHapticFeedback, headerFloat: this.float, bindRefreshIndicator: dart.fn((finishRefresh, resetRefreshState) => {
          if (easyRefresh.controller != null) {
            easyRefresh.controller.finishRefreshCallBack = finishRefresh;
            easyRefresh.controller.resetRefreshStateCallBack = resetRefreshState;
          }
        }, FnAndFnToNull()), $creationLocationd_0dea112b090073317d4: C161 || CT.C161});
    }
  };
  (header$.Header.new = function(opts) {
    let extent = opts && 'extent' in opts ? opts.extent : 60;
    let triggerDistance = opts && 'triggerDistance' in opts ? opts.triggerDistance : 70;
    let float = opts && 'float' in opts ? opts.float : false;
    let completeDuration = opts && 'completeDuration' in opts ? opts.completeDuration : null;
    let enableInfiniteRefresh = opts && 'enableInfiniteRefresh' in opts ? opts.enableInfiniteRefresh : false;
    let enableHapticFeedback = opts && 'enableHapticFeedback' in opts ? opts.enableHapticFeedback : false;
    this[extent$0] = extent;
    this[triggerDistance$0] = triggerDistance;
    this[float$1] = float;
    this[completeDuration$1] = completeDuration;
    this[enableInfiniteRefresh$] = enableInfiniteRefresh;
    this[enableHapticFeedback$0] = enableHapticFeedback;
    ;
  }).prototype = header$.Header.prototype;
  dart.addTypeTests(header$.Header);
  dart.setMethodSignature(header$.Header, () => ({
    __proto__: dart.getMethods(header$.Header.__proto__),
    builder: dart.fnType(framework.Widget, [framework.BuildContext, refresher.EasyRefresh, change_notifier.ValueNotifier$(core.bool), change_notifier.ValueNotifier$(core.bool), change_notifier.ValueNotifier$(core.bool)])
  }));
  dart.setLibraryUri(header$.Header, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart");
  dart.setFieldSignature(header$.Header, () => ({
    __proto__: dart.getFields(header$.Header.__proto__),
    extent: dart.finalFieldType(core.double),
    triggerDistance: dart.finalFieldType(core.double),
    float: dart.finalFieldType(core.bool),
    completeDuration: dart.finalFieldType(core.Duration),
    enableInfiniteRefresh: dart.finalFieldType(core.bool),
    enableHapticFeedback: dart.finalFieldType(core.bool)
  }));
  const header$0 = dart.privateName(header$, "NotificationHeader.header");
  const notifier$0 = dart.privateName(header$, "NotificationHeader.notifier");
  header$.NotificationHeader = class NotificationHeader extends header$.Header {
    get header() {
      return this[header$0];
    }
    set header(value) {
      super.header = value;
    }
    get notifier() {
      return this[notifier$0];
    }
    set notifier(value) {
      super.notifier = value;
    }
    contentBuilder(context, refreshState, pulledExtent, refreshTriggerPullDistance, refreshIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteRefresh, success, noMore) {
      let t0;
      t0 = this.notifier;
      t0 == null ? null : t0.contentBuilder(context, refreshState, pulledExtent, refreshTriggerPullDistance, refreshIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteRefresh, success, noMore);
      return this.header.contentBuilder(context, refreshState, pulledExtent, refreshTriggerPullDistance, refreshIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteRefresh, success, noMore);
    }
  };
  (header$.NotificationHeader.new = function(opts) {
    let header = opts && 'header' in opts ? opts.header : null;
    let notifier = opts && 'notifier' in opts ? opts.notifier : null;
    this[header$0] = header;
    this[notifier$0] = notifier;
    if (!(header != null)) dart.assertFailed("A non-null Header must be provided to a NotifierHeader.", "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart", 96, 11, "header != null");
    header$.NotificationHeader.__proto__.new.call(this, {extent: header.extent, triggerDistance: header.triggerDistance, float: header.float, completeDuration: header.completeDuration, enableInfiniteRefresh: header.enableInfiniteRefresh, enableHapticFeedback: header.enableHapticFeedback});
    ;
  }).prototype = header$.NotificationHeader.prototype;
  dart.addTypeTests(header$.NotificationHeader);
  dart.setMethodSignature(header$.NotificationHeader, () => ({
    __proto__: dart.getMethods(header$.NotificationHeader.__proto__),
    contentBuilder: dart.fnType(framework.Widget, [framework.BuildContext, refresh_indicator.RefreshMode, core.double, core.double, core.double, basic_types.AxisDirection, core.bool, core.Duration, core.bool, core.bool, core.bool])
  }));
  dart.setLibraryUri(header$.NotificationHeader, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart");
  dart.setFieldSignature(header$.NotificationHeader, () => ({
    __proto__: dart.getFields(header$.NotificationHeader.__proto__),
    header: dart.finalFieldType(header$.Header),
    notifier: dart.finalFieldType(header$.LinkHeaderNotifier)
  }));
  const headerBuilder$ = dart.privateName(header$, "CustomHeader.headerBuilder");
  header$.CustomHeader = class CustomHeader extends header$.Header {
    get headerBuilder() {
      return this[headerBuilder$];
    }
    set headerBuilder(value) {
      super.headerBuilder = value;
    }
    contentBuilder(context, refreshState, pulledExtent, refreshTriggerPullDistance, refreshIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteRefresh, success, noMore) {
      return this.headerBuilder(context, refreshState, pulledExtent, refreshTriggerPullDistance, refreshIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteRefresh, success, noMore);
    }
  };
  (header$.CustomHeader.new = function(opts) {
    let extent = opts && 'extent' in opts ? opts.extent : 60;
    let triggerDistance = opts && 'triggerDistance' in opts ? opts.triggerDistance : 70;
    let float = opts && 'float' in opts ? opts.float : false;
    let completeDuration = opts && 'completeDuration' in opts ? opts.completeDuration : null;
    let enableInfiniteRefresh = opts && 'enableInfiniteRefresh' in opts ? opts.enableInfiniteRefresh : false;
    let enableHapticFeedback = opts && 'enableHapticFeedback' in opts ? opts.enableHapticFeedback : false;
    let headerBuilder = opts && 'headerBuilder' in opts ? opts.headerBuilder : null;
    this[headerBuilder$] = headerBuilder;
    header$.CustomHeader.__proto__.new.call(this, {extent: core.double._check(extent), triggerDistance: core.double._check(triggerDistance), float: core.bool._check(float), completeDuration: core.Duration._check(completeDuration), enableInfiniteRefresh: core.bool._check(enableInfiniteRefresh), enableHapticFeedback: core.bool._check(enableHapticFeedback)});
    ;
  }).prototype = header$.CustomHeader.prototype;
  dart.addTypeTests(header$.CustomHeader);
  dart.setMethodSignature(header$.CustomHeader, () => ({
    __proto__: dart.getMethods(header$.CustomHeader.__proto__),
    contentBuilder: dart.fnType(framework.Widget, [framework.BuildContext, refresh_indicator.RefreshMode, core.double, core.double, core.double, basic_types.AxisDirection, core.bool, core.Duration, core.bool, core.bool, core.bool])
  }));
  dart.setLibraryUri(header$.CustomHeader, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart");
  dart.setFieldSignature(header$.CustomHeader, () => ({
    __proto__: dart.getFields(header$.CustomHeader.__proto__),
    headerBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, refresh_indicator.RefreshMode, core.double, core.double, core.double, basic_types.AxisDirection, core.bool, core.Duration, core.bool, core.bool, core.bool]))
  }));
  const context$ = dart.privateName(header$, "LinkHeaderNotifier.context");
  const refreshState = dart.privateName(header$, "LinkHeaderNotifier.refreshState");
  const pulledExtent$0 = dart.privateName(header$, "LinkHeaderNotifier.pulledExtent");
  const refreshTriggerPullDistance = dart.privateName(header$, "LinkHeaderNotifier.refreshTriggerPullDistance");
  const refreshIndicatorExtent = dart.privateName(header$, "LinkHeaderNotifier.refreshIndicatorExtent");
  const axisDirection$0 = dart.privateName(header$, "LinkHeaderNotifier.axisDirection");
  const float$2 = dart.privateName(header$, "LinkHeaderNotifier.float");
  const completeDuration$2 = dart.privateName(header$, "LinkHeaderNotifier.completeDuration");
  const enableInfiniteRefresh = dart.privateName(header$, "LinkHeaderNotifier.enableInfiniteRefresh");
  const success$0 = dart.privateName(header$, "LinkHeaderNotifier.success");
  const noMore$0 = dart.privateName(header$, "LinkHeaderNotifier.noMore");
  header$.LinkHeaderNotifier = class LinkHeaderNotifier extends change_notifier.ChangeNotifier {
    get context() {
      return this[context$];
    }
    set context(value) {
      this[context$] = value;
    }
    get refreshState() {
      return this[refreshState];
    }
    set refreshState(value) {
      this[refreshState] = value;
    }
    get pulledExtent() {
      return this[pulledExtent$0];
    }
    set pulledExtent(value) {
      this[pulledExtent$0] = value;
    }
    get refreshTriggerPullDistance() {
      return this[refreshTriggerPullDistance];
    }
    set refreshTriggerPullDistance(value) {
      this[refreshTriggerPullDistance] = value;
    }
    get refreshIndicatorExtent() {
      return this[refreshIndicatorExtent];
    }
    set refreshIndicatorExtent(value) {
      this[refreshIndicatorExtent] = value;
    }
    get axisDirection() {
      return this[axisDirection$0];
    }
    set axisDirection(value) {
      this[axisDirection$0] = value;
    }
    get float() {
      return this[float$2];
    }
    set float(value) {
      this[float$2] = value;
    }
    get completeDuration() {
      return this[completeDuration$2];
    }
    set completeDuration(value) {
      this[completeDuration$2] = value;
    }
    get enableInfiniteRefresh() {
      return this[enableInfiniteRefresh];
    }
    set enableInfiniteRefresh(value) {
      this[enableInfiniteRefresh] = value;
    }
    get success() {
      return this[success$0];
    }
    set success(value) {
      this[success$0] = value;
    }
    get noMore() {
      return this[noMore$0];
    }
    set noMore(value) {
      this[noMore$0] = value;
    }
    contentBuilder(context, refreshState, pulledExtent, refreshTriggerPullDistance, refreshIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteRefresh, success, noMore) {
      this.context = context;
      this.refreshState = refreshState;
      this.pulledExtent = pulledExtent;
      this.refreshTriggerPullDistance = refreshTriggerPullDistance;
      this.refreshIndicatorExtent = refreshIndicatorExtent;
      this.axisDirection = axisDirection;
      this.float = float;
      this.completeDuration = completeDuration;
      this.enableInfiniteRefresh = enableInfiniteRefresh;
      this.success = success;
      this.noMore = noMore;
      binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timestamp => {
        this.notifyListeners();
      }, DurationToNull()));
    }
  };
  (header$.LinkHeaderNotifier.new = function() {
    this[context$] = null;
    this[refreshState] = refresh_indicator.RefreshMode.inactive;
    this[pulledExtent$0] = 0.0;
    this[refreshTriggerPullDistance] = null;
    this[refreshIndicatorExtent] = null;
    this[axisDirection$0] = null;
    this[float$2] = null;
    this[completeDuration$2] = null;
    this[enableInfiniteRefresh] = null;
    this[success$0] = true;
    this[noMore$0] = false;
    header$.LinkHeaderNotifier.__proto__.new.call(this);
    ;
  }).prototype = header$.LinkHeaderNotifier.prototype;
  dart.addTypeTests(header$.LinkHeaderNotifier);
  dart.setMethodSignature(header$.LinkHeaderNotifier, () => ({
    __proto__: dart.getMethods(header$.LinkHeaderNotifier.__proto__),
    contentBuilder: dart.fnType(dart.void, [framework.BuildContext, refresh_indicator.RefreshMode, core.double, core.double, core.double, basic_types.AxisDirection, core.bool, core.Duration, core.bool, core.bool, core.bool])
  }));
  dart.setLibraryUri(header$.LinkHeaderNotifier, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart");
  dart.setFieldSignature(header$.LinkHeaderNotifier, () => ({
    __proto__: dart.getFields(header$.LinkHeaderNotifier.__proto__),
    context: dart.fieldType(framework.BuildContext),
    refreshState: dart.fieldType(refresh_indicator.RefreshMode),
    pulledExtent: dart.fieldType(core.double),
    refreshTriggerPullDistance: dart.fieldType(core.double),
    refreshIndicatorExtent: dart.fieldType(core.double),
    axisDirection: dart.fieldType(basic_types.AxisDirection),
    float: dart.fieldType(core.bool),
    completeDuration: dart.fieldType(core.Duration),
    enableInfiniteRefresh: dart.fieldType(core.bool),
    success: dart.fieldType(core.bool),
    noMore: dart.fieldType(core.bool)
  }));
  let C179;
  let C180;
  let C178;
  let C177;
  const linkNotifier$ = dart.privateName(header$, "LinkHeader.linkNotifier");
  header$.LinkHeader = class LinkHeader extends header$.Header {
    get linkNotifier() {
      return this[linkNotifier$];
    }
    set linkNotifier(value) {
      super.linkNotifier = value;
    }
    contentBuilder(context, refreshState, pulledExtent, refreshTriggerPullDistance, refreshIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteRefresh, success, noMore) {
      this.linkNotifier.contentBuilder(context, refreshState, pulledExtent, refreshTriggerPullDistance, refreshIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteRefresh, success, noMore);
      return new basic.SizedBox.new({width: 0.0, height: 0.0, $creationLocationd_0dea112b090073317d4: C177 || CT.C177});
    }
  };
  (header$.LinkHeader.new = function(linkNotifier, opts) {
    let extent = opts && 'extent' in opts ? opts.extent : 60;
    let triggerDistance = opts && 'triggerDistance' in opts ? opts.triggerDistance : 70;
    let completeDuration = opts && 'completeDuration' in opts ? opts.completeDuration : null;
    let enableHapticFeedback = opts && 'enableHapticFeedback' in opts ? opts.enableHapticFeedback : false;
    this[linkNotifier$] = linkNotifier;
    header$.LinkHeader.__proto__.new.call(this, {extent: core.double._check(extent), triggerDistance: core.double._check(triggerDistance), float: true, completeDuration: core.Duration._check(completeDuration), enableHapticFeedback: core.bool._check(enableHapticFeedback)});
    ;
  }).prototype = header$.LinkHeader.prototype;
  dart.addTypeTests(header$.LinkHeader);
  dart.setMethodSignature(header$.LinkHeader, () => ({
    __proto__: dart.getMethods(header$.LinkHeader.__proto__),
    contentBuilder: dart.fnType(framework.Widget, [framework.BuildContext, refresh_indicator.RefreshMode, core.double, core.double, core.double, basic_types.AxisDirection, core.bool, core.Duration, core.bool, core.bool, core.bool])
  }));
  dart.setLibraryUri(header$.LinkHeader, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart");
  dart.setFieldSignature(header$.LinkHeader, () => ({
    __proto__: dart.getFields(header$.LinkHeader.__proto__),
    linkNotifier: dart.finalFieldType(header$.LinkHeaderNotifier)
  }));
  let C183;
  let C184;
  let C185;
  let C186;
  let C187;
  let C188;
  let C189;
  let C190;
  let C191;
  let C192;
  let C193;
  let C194;
  let C182;
  let C181;
  const key$0 = dart.privateName(header$, "ClassicalHeader.key");
  const alignment$0 = dart.privateName(header$, "ClassicalHeader.alignment");
  const refreshText$ = dart.privateName(header$, "ClassicalHeader.refreshText");
  const refreshReadyText$ = dart.privateName(header$, "ClassicalHeader.refreshReadyText");
  const refreshingText$ = dart.privateName(header$, "ClassicalHeader.refreshingText");
  const refreshedText$ = dart.privateName(header$, "ClassicalHeader.refreshedText");
  const refreshFailedText$ = dart.privateName(header$, "ClassicalHeader.refreshFailedText");
  const noMoreText$0 = dart.privateName(header$, "ClassicalHeader.noMoreText");
  const showInfo$0 = dart.privateName(header$, "ClassicalHeader.showInfo");
  const infoText$0 = dart.privateName(header$, "ClassicalHeader.infoText");
  const bgColor$0 = dart.privateName(header$, "ClassicalHeader.bgColor");
  const textColor$0 = dart.privateName(header$, "ClassicalHeader.textColor");
  const infoColor$0 = dart.privateName(header$, "ClassicalHeader.infoColor");
  header$.ClassicalHeader = class ClassicalHeader extends header$.Header {
    get key() {
      return this[key$0];
    }
    set key(value) {
      super.key = value;
    }
    get alignment() {
      return this[alignment$0];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get refreshText() {
      return this[refreshText$];
    }
    set refreshText(value) {
      super.refreshText = value;
    }
    get refreshReadyText() {
      return this[refreshReadyText$];
    }
    set refreshReadyText(value) {
      super.refreshReadyText = value;
    }
    get refreshingText() {
      return this[refreshingText$];
    }
    set refreshingText(value) {
      super.refreshingText = value;
    }
    get refreshedText() {
      return this[refreshedText$];
    }
    set refreshedText(value) {
      super.refreshedText = value;
    }
    get refreshFailedText() {
      return this[refreshFailedText$];
    }
    set refreshFailedText(value) {
      super.refreshFailedText = value;
    }
    get noMoreText() {
      return this[noMoreText$0];
    }
    set noMoreText(value) {
      super.noMoreText = value;
    }
    get showInfo() {
      return this[showInfo$0];
    }
    set showInfo(value) {
      super.showInfo = value;
    }
    get infoText() {
      return this[infoText$0];
    }
    set infoText(value) {
      super.infoText = value;
    }
    get bgColor() {
      return this[bgColor$0];
    }
    set bgColor(value) {
      super.bgColor = value;
    }
    get textColor() {
      return this[textColor$0];
    }
    set textColor(value) {
      super.textColor = value;
    }
    get infoColor() {
      return this[infoColor$0];
    }
    set infoColor(value) {
      super.infoColor = value;
    }
    contentBuilder(context, refreshState, pulledExtent, refreshTriggerPullDistance, refreshIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteRefresh, success, noMore) {
      return new header$.ClassicalHeaderWidget.new({key: this.key, classicalHeader: this, refreshState: refreshState, pulledExtent: pulledExtent, refreshTriggerPullDistance: refreshTriggerPullDistance, refreshIndicatorExtent: refreshIndicatorExtent, axisDirection: axisDirection, float: float, completeDuration: completeDuration, enableInfiniteRefresh: enableInfiniteRefresh, success: success, noMore: noMore, $creationLocationd_0dea112b090073317d4: C181 || CT.C181});
    }
  };
  (header$.ClassicalHeader.new = function(opts) {
    let extent = opts && 'extent' in opts ? opts.extent : 60;
    let triggerDistance = opts && 'triggerDistance' in opts ? opts.triggerDistance : 70;
    let float = opts && 'float' in opts ? opts.float : false;
    let completeDuration = opts && 'completeDuration' in opts ? opts.completeDuration : C15 || CT.C15;
    let enableInfiniteRefresh = opts && 'enableInfiniteRefresh' in opts ? opts.enableInfiniteRefresh : false;
    let enableHapticFeedback = opts && 'enableHapticFeedback' in opts ? opts.enableHapticFeedback : true;
    let key = opts && 'key' in opts ? opts.key : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let refreshText = opts && 'refreshText' in opts ? opts.refreshText : null;
    let refreshReadyText = opts && 'refreshReadyText' in opts ? opts.refreshReadyText : null;
    let refreshingText = opts && 'refreshingText' in opts ? opts.refreshingText : null;
    let refreshedText = opts && 'refreshedText' in opts ? opts.refreshedText : null;
    let refreshFailedText = opts && 'refreshFailedText' in opts ? opts.refreshFailedText : null;
    let noMoreText = opts && 'noMoreText' in opts ? opts.noMoreText : null;
    let showInfo = opts && 'showInfo' in opts ? opts.showInfo : true;
    let infoText = opts && 'infoText' in opts ? opts.infoText : null;
    let bgColor = opts && 'bgColor' in opts ? opts.bgColor : C16 || CT.C16;
    let textColor = opts && 'textColor' in opts ? opts.textColor : C17 || CT.C17;
    let infoColor = opts && 'infoColor' in opts ? opts.infoColor : C18 || CT.C18;
    this[key$0] = key;
    this[alignment$0] = alignment;
    this[refreshText$] = refreshText;
    this[refreshReadyText$] = refreshReadyText;
    this[refreshingText$] = refreshingText;
    this[refreshedText$] = refreshedText;
    this[refreshFailedText$] = refreshFailedText;
    this[noMoreText$0] = noMoreText;
    this[showInfo$0] = showInfo;
    this[infoText$0] = infoText;
    this[bgColor$0] = bgColor;
    this[textColor$0] = textColor;
    this[infoColor$0] = infoColor;
    header$.ClassicalHeader.__proto__.new.call(this, {extent: extent, triggerDistance: triggerDistance, float: float, completeDuration: dart.test(float) ? completeDuration == null ? new core.Duration.new({milliseconds: 400}) : completeDuration['+'](new core.Duration.new({milliseconds: 400})) : completeDuration, enableInfiniteRefresh: enableInfiniteRefresh, enableHapticFeedback: enableHapticFeedback});
    ;
  }).prototype = header$.ClassicalHeader.prototype;
  dart.addTypeTests(header$.ClassicalHeader);
  dart.setMethodSignature(header$.ClassicalHeader, () => ({
    __proto__: dart.getMethods(header$.ClassicalHeader.__proto__),
    contentBuilder: dart.fnType(framework.Widget, [framework.BuildContext, refresh_indicator.RefreshMode, core.double, core.double, core.double, basic_types.AxisDirection, core.bool, core.Duration, core.bool, core.bool, core.bool])
  }));
  dart.setLibraryUri(header$.ClassicalHeader, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart");
  dart.setFieldSignature(header$.ClassicalHeader, () => ({
    __proto__: dart.getFields(header$.ClassicalHeader.__proto__),
    key: dart.finalFieldType(key.Key),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    refreshText: dart.finalFieldType(core.String),
    refreshReadyText: dart.finalFieldType(core.String),
    refreshingText: dart.finalFieldType(core.String),
    refreshedText: dart.finalFieldType(core.String),
    refreshFailedText: dart.finalFieldType(core.String),
    noMoreText: dart.finalFieldType(core.String),
    showInfo: dart.finalFieldType(core.bool),
    infoText: dart.finalFieldType(core.String),
    bgColor: dart.finalFieldType(ui.Color),
    textColor: dart.finalFieldType(ui.Color),
    infoColor: dart.finalFieldType(ui.Color)
  }));
  const classicalHeader$ = dart.privateName(header$, "ClassicalHeaderWidget.classicalHeader");
  const refreshState$ = dart.privateName(header$, "ClassicalHeaderWidget.refreshState");
  const pulledExtent$1 = dart.privateName(header$, "ClassicalHeaderWidget.pulledExtent");
  const refreshTriggerPullDistance$ = dart.privateName(header$, "ClassicalHeaderWidget.refreshTriggerPullDistance");
  const refreshIndicatorExtent$ = dart.privateName(header$, "ClassicalHeaderWidget.refreshIndicatorExtent");
  const axisDirection$1 = dart.privateName(header$, "ClassicalHeaderWidget.axisDirection");
  const float$3 = dart.privateName(header$, "ClassicalHeaderWidget.float");
  const completeDuration$3 = dart.privateName(header$, "ClassicalHeaderWidget.completeDuration");
  const enableInfiniteRefresh$0 = dart.privateName(header$, "ClassicalHeaderWidget.enableInfiniteRefresh");
  const success$1 = dart.privateName(header$, "ClassicalHeaderWidget.success");
  const noMore$1 = dart.privateName(header$, "ClassicalHeaderWidget.noMore");
  header$.ClassicalHeaderWidget = class ClassicalHeaderWidget extends framework.StatefulWidget {
    get classicalHeader() {
      return this[classicalHeader$];
    }
    set classicalHeader(value) {
      super.classicalHeader = value;
    }
    get refreshState() {
      return this[refreshState$];
    }
    set refreshState(value) {
      super.refreshState = value;
    }
    get pulledExtent() {
      return this[pulledExtent$1];
    }
    set pulledExtent(value) {
      super.pulledExtent = value;
    }
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
    get axisDirection() {
      return this[axisDirection$1];
    }
    set axisDirection(value) {
      super.axisDirection = value;
    }
    get float() {
      return this[float$3];
    }
    set float(value) {
      super.float = value;
    }
    get completeDuration() {
      return this[completeDuration$3];
    }
    set completeDuration(value) {
      super.completeDuration = value;
    }
    get enableInfiniteRefresh() {
      return this[enableInfiniteRefresh$0];
    }
    set enableInfiniteRefresh(value) {
      super.enableInfiniteRefresh = value;
    }
    get success() {
      return this[success$1];
    }
    set success(value) {
      super.success = value;
    }
    get noMore() {
      return this[noMore$1];
    }
    set noMore(value) {
      super.noMore = value;
    }
    createState() {
      return new header$.ClassicalHeaderWidgetState.new();
    }
  };
  (header$.ClassicalHeaderWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let refreshState = opts && 'refreshState' in opts ? opts.refreshState : null;
    let classicalHeader = opts && 'classicalHeader' in opts ? opts.classicalHeader : null;
    let pulledExtent = opts && 'pulledExtent' in opts ? opts.pulledExtent : null;
    let refreshTriggerPullDistance = opts && 'refreshTriggerPullDistance' in opts ? opts.refreshTriggerPullDistance : null;
    let refreshIndicatorExtent = opts && 'refreshIndicatorExtent' in opts ? opts.refreshIndicatorExtent : null;
    let axisDirection = opts && 'axisDirection' in opts ? opts.axisDirection : null;
    let float = opts && 'float' in opts ? opts.float : null;
    let completeDuration = opts && 'completeDuration' in opts ? opts.completeDuration : null;
    let enableInfiniteRefresh = opts && 'enableInfiniteRefresh' in opts ? opts.enableInfiniteRefresh : null;
    let success = opts && 'success' in opts ? opts.success : null;
    let noMore = opts && 'noMore' in opts ? opts.noMore : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[refreshState$] = refreshState;
    this[classicalHeader$] = classicalHeader;
    this[pulledExtent$1] = pulledExtent;
    this[refreshTriggerPullDistance$] = refreshTriggerPullDistance;
    this[refreshIndicatorExtent$] = refreshIndicatorExtent;
    this[axisDirection$1] = axisDirection;
    this[float$3] = float;
    this[completeDuration$3] = completeDuration;
    this[enableInfiniteRefresh$0] = enableInfiniteRefresh;
    this[success$1] = success;
    this[noMore$1] = noMore;
    header$.ClassicalHeaderWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = header$.ClassicalHeaderWidget.prototype;
  dart.addTypeTests(header$.ClassicalHeaderWidget);
  dart.setMethodSignature(header$.ClassicalHeaderWidget, () => ({
    __proto__: dart.getMethods(header$.ClassicalHeaderWidget.__proto__),
    createState: dart.fnType(header$.ClassicalHeaderWidgetState, [])
  }));
  dart.setLibraryUri(header$.ClassicalHeaderWidget, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart");
  dart.setFieldSignature(header$.ClassicalHeaderWidget, () => ({
    __proto__: dart.getFields(header$.ClassicalHeaderWidget.__proto__),
    classicalHeader: dart.finalFieldType(header$.ClassicalHeader),
    refreshState: dart.finalFieldType(refresh_indicator.RefreshMode),
    pulledExtent: dart.finalFieldType(core.double),
    refreshTriggerPullDistance: dart.finalFieldType(core.double),
    refreshIndicatorExtent: dart.finalFieldType(core.double),
    axisDirection: dart.finalFieldType(basic_types.AxisDirection),
    float: dart.finalFieldType(core.bool),
    completeDuration: dart.finalFieldType(core.Duration),
    enableInfiniteRefresh: dart.finalFieldType(core.bool),
    success: dart.finalFieldType(core.bool),
    noMore: dart.finalFieldType(core.bool)
  }));
  const _overTriggerDistance$ = dart.privateName(header$, "_overTriggerDistance");
  const _localizations$ = dart.privateName(header$, "_localizations");
  const _refreshFinish = dart.privateName(header$, "_refreshFinish");
  const _readyController$ = dart.privateName(header$, "_readyController");
  const _readyAnimation$ = dart.privateName(header$, "_readyAnimation");
  const _restoreController$ = dart.privateName(header$, "_restoreController");
  const _restoreAnimation$ = dart.privateName(header$, "_restoreAnimation");
  const _floatBackController = dart.privateName(header$, "_floatBackController");
  const _floatBackAnimation = dart.privateName(header$, "_floatBackAnimation");
  const _iconRotationValue$ = dart.privateName(header$, "_iconRotationValue");
  const _floatBackDistance = dart.privateName(header$, "_floatBackDistance");
  const _dateTime$ = dart.privateName(header$, "_dateTime");
  const _refreshText = dart.privateName(header$, "_refreshText");
  const _refreshReadyText = dart.privateName(header$, "_refreshReadyText");
  const _refreshingText = dart.privateName(header$, "_refreshingText");
  const _refreshedText = dart.privateName(header$, "_refreshedText");
  const _refreshFailedText = dart.privateName(header$, "_refreshFailedText");
  const _noMoreText$ = dart.privateName(header$, "_noMoreText");
  const _infoText$ = dart.privateName(header$, "_infoText");
  const _finishedText$ = dart.privateName(header$, "_finishedText");
  const _name$ = dart.privateName(refresh_indicator, "_name");
  let C195;
  let C196;
  let C197;
  let C198;
  const _showText$ = dart.privateName(header$, "_showText");
  const _finishedIcon$ = dart.privateName(header$, "_finishedIcon");
  const _infoTextStr$ = dart.privateName(header$, "_infoTextStr");
  let C199;
  const _buildContent$ = dart.privateName(header$, "_buildContent");
  let C202;
  let C203;
  let C201;
  let C200;
  let C206;
  let C207;
  let C205;
  let C204;
  let C210;
  let C211;
  let C212;
  let C209;
  let C208;
  let C215;
  let C216;
  let C217;
  let C218;
  let C219;
  let C214;
  let C213;
  let C222;
  let C223;
  let C224;
  let C225;
  let C226;
  let C221;
  let C220;
  let C229;
  let C228;
  let C227;
  let C232;
  let C233;
  let C231;
  let C230;
  let C236;
  let C237;
  let C238;
  let C235;
  let C234;
  let C241;
  let C242;
  let C240;
  let C239;
  let C245;
  let C246;
  let C244;
  let C243;
  let C249;
  let C250;
  let C248;
  let C247;
  let C253;
  let C254;
  let C255;
  let C252;
  let C251;
  let C258;
  let C259;
  let C257;
  let C256;
  let C262;
  let C263;
  let C261;
  let C260;
  let C266;
  let C267;
  let C265;
  let C264;
  let C270;
  let C271;
  let C269;
  let C268;
  let C272;
  let C275;
  let C276;
  let C277;
  let C274;
  let C273;
  let C280;
  let C281;
  let C279;
  let C278;
  let C282;
  let C285;
  let C286;
  let C284;
  let C283;
  let C289;
  let C290;
  let C288;
  let C287;
  let C293;
  let C294;
  let C295;
  let C292;
  let C291;
  let C298;
  let C299;
  let C297;
  let C296;
  let C302;
  let C303;
  let C301;
  let C300;
  let C306;
  let C307;
  let C305;
  let C304;
  let C310;
  let C309;
  let C308;
  const State_TickerProviderStateMixin$36$ = class State_TickerProviderStateMixin extends framework.State$(header$.ClassicalHeaderWidget) {};
  (State_TickerProviderStateMixin$36$.new = function() {
    ticker_provider.TickerProviderStateMixin$(header$.ClassicalHeaderWidget)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36$.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36$.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36$, ticker_provider.TickerProviderStateMixin$(header$.ClassicalHeaderWidget));
  header$.ClassicalHeaderWidgetState = class ClassicalHeaderWidgetState extends State_TickerProviderStateMixin$36$ {
    get overTriggerDistance() {
      return this[_overTriggerDistance$];
    }
    set overTriggerDistance(over) {
      if (!dart.equals(this[_overTriggerDistance$], over)) {
        dart.test(this[_overTriggerDistance$]) ? this[_readyController$].forward() : this[_restoreController$].forward();
        this[_overTriggerDistance$] = over;
      }
    }
    get [_refreshText]() {
      let t0;
      t0 = this.widget.classicalHeader.refreshText;
      return t0 == null ? global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context) == null ? this[_localizations$].pullToRefresh : global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context).pullToRefresh : t0;
    }
    get [_refreshReadyText]() {
      let t0;
      t0 = this.widget.classicalHeader.refreshReadyText;
      return t0 == null ? global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context) == null ? this[_localizations$].releaseToRefresh : global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context).releaseToRefresh : t0;
    }
    get [_refreshingText]() {
      let t0;
      t0 = this.widget.classicalHeader.refreshingText;
      return t0 == null ? global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context) == null ? this[_localizations$].refreshing : global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context).refreshing : t0;
    }
    get [_refreshedText]() {
      let t0;
      t0 = this.widget.classicalHeader.refreshedText;
      return t0 == null ? global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context) == null ? this[_localizations$].refreshed : global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context).refreshed : t0;
    }
    get [_refreshFailedText]() {
      let t0;
      t0 = this.widget.classicalHeader.refreshFailedText;
      return t0 == null ? global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context) == null ? this[_localizations$].refreshFailed : global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context).refreshFailed : t0;
    }
    get [_noMoreText$]() {
      let t0;
      t0 = this.widget.classicalHeader.noMoreText;
      return t0 == null ? global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context) == null ? this[_localizations$].noMore : global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context).noMore : t0;
    }
    get [_infoText$]() {
      let t0;
      t0 = this.widget.classicalHeader.infoText;
      return t0 == null ? global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context) == null ? this[_localizations$].updateAt : global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.of(this.context).updateAt : t0;
    }
    set refreshFinish(finish) {
      if (!dart.equals(this[_refreshFinish], finish)) {
        if (dart.test(finish) && dart.test(this.widget.float)) {
          FutureOfNull().delayed(this.widget.completeDuration['-'](new core.Duration.new({milliseconds: 400})), dart.fn(() => {
            if (dart.test(this.mounted)) {
              this[_floatBackController].forward();
            }
          }, VoidToNull()));
          FutureOfNull().delayed(this.widget.completeDuration, dart.fn(() => {
            this[_floatBackDistance] = null;
            this[_refreshFinish] = false;
          }, VoidToNull()));
        }
        this[_refreshFinish] = finish;
      }
    }
    get [_showText$]() {
      if (dart.test(this.widget.noMore)) return this[_noMoreText$];
      if (dart.test(this.widget.enableInfiniteRefresh)) {
        if (dart.equals(this.widget.refreshState, refresh_indicator.RefreshMode.refreshed) || dart.equals(this.widget.refreshState, refresh_indicator.RefreshMode.inactive) || dart.equals(this.widget.refreshState, refresh_indicator.RefreshMode.drag)) {
          return this[_finishedText$];
        } else {
          return this[_refreshingText];
        }
      }
      switch (this.widget.refreshState) {
        case C195 || CT.C195:
        {
          return this[_refreshingText];
        }
        case C196 || CT.C196:
        {
          return this[_refreshingText];
        }
        case C197 || CT.C197:
        {
          return this[_finishedText$];
        }
        case C198 || CT.C198:
        {
          return this[_finishedText$];
        }
        default:
        {
          if (dart.test(this.overTriggerDistance)) {
            return this[_refreshReadyText];
          } else {
            return this[_refreshText];
          }
        }
      }
    }
    get [_finishedText$]() {
      if (!dart.test(this.widget.success)) return this[_refreshFailedText];
      if (dart.test(this.widget.noMore)) return this[_noMoreText$];
      return this[_refreshedText];
    }
    get [_finishedIcon$]() {
      if (!dart.test(this.widget.success)) return icons.Icons.error_outline;
      if (dart.test(this.widget.noMore)) return icons.Icons.hourglass_empty;
      return icons.Icons.done;
    }
    get [_infoTextStr$]() {
      if (dart.equals(this.widget.refreshState, refresh_indicator.RefreshMode.refreshed)) {
        this[_dateTime$] = new core.DateTime.now();
      }
      let fillChar = dart.notNull(this[_dateTime$].minute) < 10 ? "0" : "";
      return this[_infoText$][$replaceAll]("%T", dart.str(this[_dateTime$].hour) + ":" + fillChar + dart.str(this[_dateTime$].minute));
    }
    initState() {
      let t0, t0$, t0$0;
      super.initState();
      this[_dateTime$] = new core.DateTime.now();
      this[_readyController$] = new animation_controller.AnimationController.new({duration: C48 || CT.C48, vsync: this});
      this[_readyAnimation$] = (t0 = new (TweenOfdouble()).new({begin: 0.5, end: 1.0}).animate(this[_readyController$]), t0.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
          if (!dart.equals(this[_readyAnimation$].status, animation.AnimationStatus.dismissed)) {
            this[_iconRotationValue$] = this[_readyAnimation$].value;
          }
        }, VoidToNull()));
      }, VoidToNull())), t0);
      this[_readyAnimation$].addStatusListener(dart.fn(status => {
        if (dart.equals(status, animation.AnimationStatus.completed)) {
          this[_readyController$].reset();
        }
      }, AnimationStatusToNull()));
      this[_restoreController$] = new animation_controller.AnimationController.new({duration: C48 || CT.C48, vsync: this});
      this[_restoreAnimation$] = (t0$ = new (TweenOfdouble()).new({begin: 1.0, end: 0.5}).animate(this[_restoreController$]), t0$.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
          if (!dart.equals(this[_restoreAnimation$].status, animation.AnimationStatus.dismissed)) {
            this[_iconRotationValue$] = this[_restoreAnimation$].value;
          }
        }, VoidToNull()));
      }, VoidToNull())), t0$);
      this[_restoreAnimation$].addStatusListener(dart.fn(status => {
        if (dart.equals(status, animation.AnimationStatus.completed)) {
          this[_restoreController$].reset();
        }
      }, AnimationStatusToNull()));
      this[_floatBackController] = new animation_controller.AnimationController.new({duration: C199 || CT.C199, vsync: this});
      this[_floatBackAnimation] = (t0$0 = new (TweenOfdouble()).new({begin: this.widget.refreshIndicatorExtent, end: 0.0}).animate(this[_floatBackController]), t0$0.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
          if (!dart.equals(this[_floatBackAnimation].status, animation.AnimationStatus.dismissed)) {
            this[_floatBackDistance] = this[_floatBackAnimation].value;
          }
        }, VoidToNull()));
      }, VoidToNull())), t0$0);
      this[_floatBackAnimation].addStatusListener(dart.fn(status => {
        if (dart.equals(status, animation.AnimationStatus.completed)) {
          this[_floatBackController].reset();
        }
      }, AnimationStatusToNull()));
    }
    dispose() {
      this[_readyController$].dispose();
      this[_restoreController$].dispose();
      this[_floatBackController].dispose();
      super.dispose();
    }
    build(context) {
      let t0;
      let isVertical = dart.equals(this.widget.axisDirection, basic_types.AxisDirection.down) || dart.equals(this.widget.axisDirection, basic_types.AxisDirection.up);
      let isReverse = dart.equals(this.widget.axisDirection, basic_types.AxisDirection.up) || dart.equals(this.widget.axisDirection, basic_types.AxisDirection.left);
      this.overTriggerDistance = !dart.equals(this.widget.refreshState, refresh_indicator.RefreshMode.inactive) && dart.notNull(this.widget.pulledExtent) >= dart.notNull(this.widget.refreshTriggerPullDistance);
      if (dart.equals(this.widget.refreshState, refresh_indicator.RefreshMode.refreshed)) {
        this.refreshFinish = true;
      }
      return new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Positioned.new({top: !isVertical ? 0.0 : isReverse ? this[_floatBackDistance] == null ? 0.0 : dart.notNull(this.widget.refreshIndicatorExtent) - dart.notNull(this[_floatBackDistance]) : null, bottom: !isVertical ? 0.0 : !isReverse ? this[_floatBackDistance] == null ? 0.0 : dart.notNull(this.widget.refreshIndicatorExtent) - dart.notNull(this[_floatBackDistance]) : null, left: isVertical ? 0.0 : isReverse ? this[_floatBackDistance] == null ? 0.0 : dart.notNull(this.widget.refreshIndicatorExtent) - dart.notNull(this[_floatBackDistance]) : null, right: isVertical ? 0.0 : !isReverse ? this[_floatBackDistance] == null ? 0.0 : dart.notNull(this.widget.refreshIndicatorExtent) - dart.notNull(this[_floatBackDistance]) : null, child: new container.Container.new({alignment: dart.dtest((t0 = this.widget.classicalHeader.alignment, t0 == null ? isVertical : t0)) ? isReverse ? alignment.Alignment.topCenter : alignment.Alignment.bottomCenter : !isReverse ? alignment.Alignment.centerRight : alignment.Alignment.centerLeft, width: isVertical ? 1 / 0 : this[_floatBackDistance] == null ? dart.notNull(this.widget.refreshIndicatorExtent) > dart.notNull(this.widget.pulledExtent) ? this.widget.refreshIndicatorExtent : this.widget.pulledExtent : this.widget.refreshIndicatorExtent, height: isVertical ? this[_floatBackDistance] == null ? dart.notNull(this.widget.refreshIndicatorExtent) > dart.notNull(this.widget.pulledExtent) ? this.widget.refreshIndicatorExtent : this.widget.pulledExtent : this.widget.refreshIndicatorExtent : 1 / 0, color: this.widget.classicalHeader.bgColor, child: new basic.SizedBox.new({height: isVertical ? this.widget.refreshIndicatorExtent : 1 / 0, width: !isVertical ? this.widget.refreshIndicatorExtent : 1 / 0, child: isVertical ? new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: this[_buildContent$](isVertical, isReverse), $creationLocationd_0dea112b090073317d4: C200 || CT.C200}) : new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: this[_buildContent$](isVertical, isReverse), $creationLocationd_0dea112b090073317d4: C204 || CT.C204}), $creationLocationd_0dea112b090073317d4: C208 || CT.C208}), $creationLocationd_0dea112b090073317d4: C213 || CT.C213}), $creationLocationd_0dea112b090073317d4: C220 || CT.C220})]), $creationLocationd_0dea112b090073317d4: C227 || CT.C227});
    }
    [_buildContent$](isVertical, isReverse) {
      return dart.test(isVertical) ? JSArrayOfWidget().of([new basic.Expanded.new({flex: 2, child: new container.Container.new({alignment: alignment.Alignment.centerRight, padding: new edge_insets.EdgeInsets.only({right: 10.0}), child: (dart.equals(this.widget.refreshState, refresh_indicator.RefreshMode.refresh) || dart.equals(this.widget.refreshState, refresh_indicator.RefreshMode.armed)) && !dart.test(this.widget.noMore) ? new container.Container.new({width: 20.0, height: 20.0, child: new progress_indicator.CircularProgressIndicator.new({strokeWidth: 2.0, valueColor: new (AlwaysStoppedAnimationOfColor()).new(this.widget.classicalHeader.textColor), $creationLocationd_0dea112b090073317d4: C230 || CT.C230}), $creationLocationd_0dea112b090073317d4: C234 || CT.C234}) : dart.equals(this.widget.refreshState, refresh_indicator.RefreshMode.refreshed) || dart.equals(this.widget.refreshState, refresh_indicator.RefreshMode.done) || dart.test(this.widget.enableInfiniteRefresh) && !dart.equals(this.widget.refreshState, refresh_indicator.RefreshMode.refreshed) || dart.test(this.widget.noMore) ? new icon.Icon.new(this[_finishedIcon$], {color: this.widget.classicalHeader.textColor, $creationLocationd_0dea112b090073317d4: C239 || CT.C239}) : new basic.Transform.rotate({child: new icon.Icon.new(dart.test(isReverse) ? icons.Icons.arrow_upward : icons.Icons.arrow_downward, {color: this.widget.classicalHeader.textColor, $creationLocationd_0dea112b090073317d4: C243 || CT.C243}), angle: 2 * 3.141592653589793 * dart.notNull(this[_iconRotationValue$]), $creationLocationd_0dea112b090073317d4: C247 || CT.C247}), $creationLocationd_0dea112b090073317d4: C251 || CT.C251}), $creationLocationd_0dea112b090073317d4: C256 || CT.C256}), new basic.Expanded.new({flex: 3, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new(this[_showText$], {style: new text_style.TextStyle.new({fontSize: 16.0, color: this.widget.classicalHeader.textColor}), $creationLocationd_0dea112b090073317d4: C260 || CT.C260}), dart.test(this.widget.classicalHeader.showInfo) ? new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: 2.0}), child: new text.Text.new(this[_infoTextStr$], {style: new text_style.TextStyle.new({fontSize: 12.0, color: this.widget.classicalHeader.infoColor}), $creationLocationd_0dea112b090073317d4: C264 || CT.C264}), $creationLocationd_0dea112b090073317d4: C268 || CT.C268}) : new container.Container.new({$creationLocationd_0dea112b090073317d4: C272 || CT.C272})]), $creationLocationd_0dea112b090073317d4: C273 || CT.C273}), $creationLocationd_0dea112b090073317d4: C278 || CT.C278}), new basic.Expanded.new({flex: 2, child: new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C282 || CT.C282}), $creationLocationd_0dea112b090073317d4: C283 || CT.C283})]) : JSArrayOfWidget().of([new container.Container.new({child: dart.equals(this.widget.refreshState, refresh_indicator.RefreshMode.refresh) || dart.equals(this.widget.refreshState, refresh_indicator.RefreshMode.armed) ? new container.Container.new({width: 20.0, height: 20.0, child: new progress_indicator.CircularProgressIndicator.new({strokeWidth: 2.0, valueColor: new (AlwaysStoppedAnimationOfColor()).new(this.widget.classicalHeader.textColor), $creationLocationd_0dea112b090073317d4: C287 || CT.C287}), $creationLocationd_0dea112b090073317d4: C291 || CT.C291}) : dart.equals(this.widget.refreshState, refresh_indicator.RefreshMode.refreshed) || dart.equals(this.widget.refreshState, refresh_indicator.RefreshMode.done) || dart.test(this.widget.enableInfiniteRefresh) && !dart.equals(this.widget.refreshState, refresh_indicator.RefreshMode.refreshed) || dart.test(this.widget.noMore) ? new icon.Icon.new(this[_finishedIcon$], {color: this.widget.classicalHeader.textColor, $creationLocationd_0dea112b090073317d4: C296 || CT.C296}) : new basic.Transform.rotate({child: new icon.Icon.new(dart.test(isReverse) ? icons.Icons.arrow_back : icons.Icons.arrow_forward, {color: this.widget.classicalHeader.textColor, $creationLocationd_0dea112b090073317d4: C300 || CT.C300}), angle: 2 * 3.141592653589793 * dart.notNull(this[_iconRotationValue$]), $creationLocationd_0dea112b090073317d4: C304 || CT.C304}), $creationLocationd_0dea112b090073317d4: C308 || CT.C308})]);
    }
  };
  (header$.ClassicalHeaderWidgetState.new = function() {
    this[_overTriggerDistance$] = false;
    this[_localizations$] = new global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.new();
    this[_refreshFinish] = false;
    this[_readyController$] = null;
    this[_readyAnimation$] = null;
    this[_restoreController$] = null;
    this[_restoreAnimation$] = null;
    this[_floatBackController] = null;
    this[_floatBackAnimation] = null;
    this[_iconRotationValue$] = 1.0;
    this[_floatBackDistance] = null;
    this[_dateTime$] = null;
    header$.ClassicalHeaderWidgetState.__proto__.new.call(this);
    ;
  }).prototype = header$.ClassicalHeaderWidgetState.prototype;
  dart.addTypeTests(header$.ClassicalHeaderWidgetState);
  dart.setMethodSignature(header$.ClassicalHeaderWidgetState, () => ({
    __proto__: dart.getMethods(header$.ClassicalHeaderWidgetState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildContent$]: dart.fnType(core.List$(framework.Widget), [core.bool, core.bool])
  }));
  dart.setGetterSignature(header$.ClassicalHeaderWidgetState, () => ({
    __proto__: dart.getGetters(header$.ClassicalHeaderWidgetState.__proto__),
    overTriggerDistance: core.bool,
    [_refreshText]: core.String,
    [_refreshReadyText]: core.String,
    [_refreshingText]: core.String,
    [_refreshedText]: core.String,
    [_refreshFailedText]: core.String,
    [_noMoreText$]: core.String,
    [_infoText$]: core.String,
    [_showText$]: core.String,
    [_finishedText$]: core.String,
    [_finishedIcon$]: icon_data.IconData,
    [_infoTextStr$]: core.String
  }));
  dart.setSetterSignature(header$.ClassicalHeaderWidgetState, () => ({
    __proto__: dart.getSetters(header$.ClassicalHeaderWidgetState.__proto__),
    overTriggerDistance: core.bool,
    refreshFinish: core.bool
  }));
  dart.setLibraryUri(header$.ClassicalHeaderWidgetState, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart");
  dart.setFieldSignature(header$.ClassicalHeaderWidgetState, () => ({
    __proto__: dart.getFields(header$.ClassicalHeaderWidgetState.__proto__),
    [_overTriggerDistance$]: dart.fieldType(core.bool),
    [_localizations$]: dart.fieldType(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations),
    [_refreshFinish]: dart.fieldType(core.bool),
    [_readyController$]: dart.fieldType(animation_controller.AnimationController),
    [_readyAnimation$]: dart.fieldType(animation.Animation$(core.double)),
    [_restoreController$]: dart.fieldType(animation_controller.AnimationController),
    [_restoreAnimation$]: dart.fieldType(animation.Animation$(core.double)),
    [_floatBackController]: dart.fieldType(animation_controller.AnimationController),
    [_floatBackAnimation]: dart.fieldType(animation.Animation$(core.double)),
    [_iconRotationValue$]: dart.fieldType(core.double),
    [_floatBackDistance]: dart.fieldType(core.double),
    [_dateTime$]: dart.fieldType(core.DateTime)
  }));
  let C311;
  const child$ = dart.privateName(header$, "FirstRefreshHeader.child");
  header$.FirstRefreshHeader = class FirstRefreshHeader extends header$.Header {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    contentBuilder(context, refreshState, pulledExtent, refreshTriggerPullDistance, refreshIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteRefresh, success, noMore) {
      return (dart.equals(refreshState, refresh_indicator.RefreshMode.armed) || dart.equals(refreshState, refresh_indicator.RefreshMode.refresh)) && dart.notNull(pulledExtent) > dart.notNull(refreshTriggerPullDistance) + dart.notNull(refresher.EasyRefresh.callOverExtent) ? this.child : new container.Container.new({$creationLocationd_0dea112b090073317d4: C311 || CT.C311});
    }
  };
  (header$.FirstRefreshHeader.new = function(child) {
    this[child$] = child;
    header$.FirstRefreshHeader.__proto__.new.call(this, {extent: 1 / 0, triggerDistance: 60.0, float: true, enableInfiniteRefresh: false, enableHapticFeedback: false});
    ;
  }).prototype = header$.FirstRefreshHeader.prototype;
  dart.addTypeTests(header$.FirstRefreshHeader);
  dart.setMethodSignature(header$.FirstRefreshHeader, () => ({
    __proto__: dart.getMethods(header$.FirstRefreshHeader.__proto__),
    contentBuilder: dart.fnType(framework.Widget, [framework.BuildContext, refresh_indicator.RefreshMode, core.double, core.double, core.double, basic_types.AxisDirection, core.bool, core.Duration, core.bool, core.bool, core.bool])
  }));
  dart.setLibraryUri(header$.FirstRefreshHeader, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart");
  dart.setFieldSignature(header$.FirstRefreshHeader, () => ({
    __proto__: dart.getFields(header$.FirstRefreshHeader.__proto__),
    child: dart.finalFieldType(framework.Widget)
  }));
  const _name$0 = dart.privateName(basic_types, "_name");
  let C312;
  const _name$1 = dart.privateName(recognizer, "_name");
  let C313;
  const controller$ = dart.privateName(refresher, "EasyRefresh.controller");
  const onRefresh$ = dart.privateName(refresher, "EasyRefresh.onRefresh");
  const onLoad$ = dart.privateName(refresher, "EasyRefresh.onLoad");
  const enableControlFinishRefresh$ = dart.privateName(refresher, "EasyRefresh.enableControlFinishRefresh");
  const enableControlFinishLoad$ = dart.privateName(refresher, "EasyRefresh.enableControlFinishLoad");
  const taskIndependence$ = dart.privateName(refresher, "EasyRefresh.taskIndependence");
  const header$1 = dart.privateName(refresher, "EasyRefresh.header");
  const headerIndex$ = dart.privateName(refresher, "EasyRefresh.headerIndex");
  const footer$1 = dart.privateName(refresher, "EasyRefresh.footer");
  const builder$ = dart.privateName(refresher, "EasyRefresh.builder");
  const child$0 = dart.privateName(refresher, "EasyRefresh.child");
  const firstRefresh$ = dart.privateName(refresher, "EasyRefresh.firstRefresh");
  const firstRefreshWidget$ = dart.privateName(refresher, "EasyRefresh.firstRefreshWidget");
  const emptyWidget$ = dart.privateName(refresher, "EasyRefresh.emptyWidget");
  const topBouncing$ = dart.privateName(refresher, "EasyRefresh.topBouncing");
  const bottomBouncing$ = dart.privateName(refresher, "EasyRefresh.bottomBouncing");
  const slivers$ = dart.privateName(refresher, "EasyRefresh.slivers");
  const scrollDirection$ = dart.privateName(refresher, "EasyRefresh.scrollDirection");
  const reverse$ = dart.privateName(refresher, "EasyRefresh.reverse");
  const scrollController$ = dart.privateName(refresher, "EasyRefresh.scrollController");
  const primary$ = dart.privateName(refresher, "EasyRefresh.primary");
  const shrinkWrap$ = dart.privateName(refresher, "EasyRefresh.shrinkWrap");
  const center$ = dart.privateName(refresher, "EasyRefresh.center");
  const anchor$ = dart.privateName(refresher, "EasyRefresh.anchor");
  const cacheExtent$ = dart.privateName(refresher, "EasyRefresh.cacheExtent");
  const semanticChildCount$ = dart.privateName(refresher, "EasyRefresh.semanticChildCount");
  const dragStartBehavior$ = dart.privateName(refresher, "EasyRefresh.dragStartBehavior");
  refresher.EasyRefresh = class EasyRefresh extends framework.StatefulWidget {
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get onRefresh() {
      return this[onRefresh$];
    }
    set onRefresh(value) {
      super.onRefresh = value;
    }
    get onLoad() {
      return this[onLoad$];
    }
    set onLoad(value) {
      super.onLoad = value;
    }
    get enableControlFinishRefresh() {
      return this[enableControlFinishRefresh$];
    }
    set enableControlFinishRefresh(value) {
      super.enableControlFinishRefresh = value;
    }
    get enableControlFinishLoad() {
      return this[enableControlFinishLoad$];
    }
    set enableControlFinishLoad(value) {
      super.enableControlFinishLoad = value;
    }
    get taskIndependence() {
      return this[taskIndependence$];
    }
    set taskIndependence(value) {
      super.taskIndependence = value;
    }
    get header() {
      return this[header$1];
    }
    set header(value) {
      super.header = value;
    }
    get headerIndex() {
      return this[headerIndex$];
    }
    set headerIndex(value) {
      super.headerIndex = value;
    }
    get footer() {
      return this[footer$1];
    }
    set footer(value) {
      super.footer = value;
    }
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    get firstRefresh() {
      return this[firstRefresh$];
    }
    set firstRefresh(value) {
      super.firstRefresh = value;
    }
    get firstRefreshWidget() {
      return this[firstRefreshWidget$];
    }
    set firstRefreshWidget(value) {
      super.firstRefreshWidget = value;
    }
    get emptyWidget() {
      return this[emptyWidget$];
    }
    set emptyWidget(value) {
      super.emptyWidget = value;
    }
    get topBouncing() {
      return this[topBouncing$];
    }
    set topBouncing(value) {
      super.topBouncing = value;
    }
    get bottomBouncing() {
      return this[bottomBouncing$];
    }
    set bottomBouncing(value) {
      super.bottomBouncing = value;
    }
    get slivers() {
      return this[slivers$];
    }
    set slivers(value) {
      super.slivers = value;
    }
    get scrollDirection() {
      return this[scrollDirection$];
    }
    set scrollDirection(value) {
      super.scrollDirection = value;
    }
    get reverse() {
      return this[reverse$];
    }
    set reverse(value) {
      super.reverse = value;
    }
    get scrollController() {
      return this[scrollController$];
    }
    set scrollController(value) {
      super.scrollController = value;
    }
    get primary() {
      return this[primary$];
    }
    set primary(value) {
      super.primary = value;
    }
    get shrinkWrap() {
      return this[shrinkWrap$];
    }
    set shrinkWrap(value) {
      super.shrinkWrap = value;
    }
    get center() {
      return this[center$];
    }
    set center(value) {
      super.center = value;
    }
    get anchor() {
      return this[anchor$];
    }
    set anchor(value) {
      super.anchor = value;
    }
    get cacheExtent() {
      return this[cacheExtent$];
    }
    set cacheExtent(value) {
      super.cacheExtent = value;
    }
    get semanticChildCount() {
      return this[semanticChildCount$];
    }
    set semanticChildCount(value) {
      super.semanticChildCount = value;
    }
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      super.dragStartBehavior = value;
    }
    static set defaultHeader(header) {
      if (header != null) {
        refresher.EasyRefresh._defaultHeader = header;
      }
    }
    static set defaultFooter(footer) {
      if (footer != null) {
        refresher.EasyRefresh._defaultFooter = footer;
      }
    }
    createState() {
      return new refresher._EasyRefreshState.new();
    }
  };
  (refresher.EasyRefresh.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let onRefresh = opts && 'onRefresh' in opts ? opts.onRefresh : null;
    let onLoad = opts && 'onLoad' in opts ? opts.onLoad : null;
    let enableControlFinishRefresh = opts && 'enableControlFinishRefresh' in opts ? opts.enableControlFinishRefresh : false;
    let enableControlFinishLoad = opts && 'enableControlFinishLoad' in opts ? opts.enableControlFinishLoad : false;
    let taskIndependence = opts && 'taskIndependence' in opts ? opts.taskIndependence : false;
    let scrollController = opts && 'scrollController' in opts ? opts.scrollController : null;
    let header = opts && 'header' in opts ? opts.header : null;
    let footer = opts && 'footer' in opts ? opts.footer : null;
    let firstRefresh = opts && 'firstRefresh' in opts ? opts.firstRefresh : null;
    let firstRefreshWidget = opts && 'firstRefreshWidget' in opts ? opts.firstRefreshWidget : null;
    let headerIndex = opts && 'headerIndex' in opts ? opts.headerIndex : null;
    let emptyWidget = opts && 'emptyWidget' in opts ? opts.emptyWidget : null;
    let topBouncing = opts && 'topBouncing' in opts ? opts.topBouncing : true;
    let bottomBouncing = opts && 'bottomBouncing' in opts ? opts.bottomBouncing : true;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    this[onRefresh$] = onRefresh;
    this[onLoad$] = onLoad;
    this[enableControlFinishRefresh$] = enableControlFinishRefresh;
    this[enableControlFinishLoad$] = enableControlFinishLoad;
    this[taskIndependence$] = taskIndependence;
    this[scrollController$] = scrollController;
    this[header$1] = header;
    this[footer$1] = footer;
    this[firstRefresh$] = firstRefresh;
    this[firstRefreshWidget$] = firstRefreshWidget;
    this[headerIndex$] = headerIndex;
    this[emptyWidget$] = emptyWidget;
    this[topBouncing$] = topBouncing;
    this[bottomBouncing$] = bottomBouncing;
    this[child$0] = child;
    this[scrollDirection$] = null;
    this[reverse$] = null;
    this[builder$] = null;
    this[primary$] = null;
    this[shrinkWrap$] = null;
    this[center$] = null;
    this[anchor$] = null;
    this[cacheExtent$] = null;
    this[slivers$] = null;
    this[semanticChildCount$] = null;
    this[dragStartBehavior$] = null;
    refresher.EasyRefresh.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = refresher.EasyRefresh.prototype;
  (refresher.EasyRefresh.custom = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let onRefresh = opts && 'onRefresh' in opts ? opts.onRefresh : null;
    let onLoad = opts && 'onLoad' in opts ? opts.onLoad : null;
    let enableControlFinishRefresh = opts && 'enableControlFinishRefresh' in opts ? opts.enableControlFinishRefresh : false;
    let enableControlFinishLoad = opts && 'enableControlFinishLoad' in opts ? opts.enableControlFinishLoad : false;
    let taskIndependence = opts && 'taskIndependence' in opts ? opts.taskIndependence : false;
    let header = opts && 'header' in opts ? opts.header : null;
    let headerIndex = opts && 'headerIndex' in opts ? opts.headerIndex : null;
    let footer = opts && 'footer' in opts ? opts.footer : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C312 || CT.C312;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let scrollController = opts && 'scrollController' in opts ? opts.scrollController : null;
    let primary = opts && 'primary' in opts ? opts.primary : null;
    let shrinkWrap = opts && 'shrinkWrap' in opts ? opts.shrinkWrap : false;
    let center = opts && 'center' in opts ? opts.center : null;
    let anchor = opts && 'anchor' in opts ? opts.anchor : 0;
    let cacheExtent = opts && 'cacheExtent' in opts ? opts.cacheExtent : null;
    let semanticChildCount = opts && 'semanticChildCount' in opts ? opts.semanticChildCount : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C313 || CT.C313;
    let firstRefresh = opts && 'firstRefresh' in opts ? opts.firstRefresh : null;
    let firstRefreshWidget = opts && 'firstRefreshWidget' in opts ? opts.firstRefreshWidget : null;
    let emptyWidget = opts && 'emptyWidget' in opts ? opts.emptyWidget : null;
    let topBouncing = opts && 'topBouncing' in opts ? opts.topBouncing : true;
    let bottomBouncing = opts && 'bottomBouncing' in opts ? opts.bottomBouncing : true;
    let slivers = opts && 'slivers' in opts ? opts.slivers : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    this[onRefresh$] = onRefresh;
    this[onLoad$] = onLoad;
    this[enableControlFinishRefresh$] = enableControlFinishRefresh;
    this[enableControlFinishLoad$] = enableControlFinishLoad;
    this[taskIndependence$] = taskIndependence;
    this[header$1] = header;
    this[headerIndex$] = headerIndex;
    this[footer$1] = footer;
    this[scrollDirection$] = scrollDirection;
    this[reverse$] = reverse;
    this[scrollController$] = scrollController;
    this[primary$] = primary;
    this[shrinkWrap$] = shrinkWrap;
    this[center$] = center;
    this[anchor$] = anchor;
    this[cacheExtent$] = cacheExtent;
    this[semanticChildCount$] = semanticChildCount;
    this[dragStartBehavior$] = dragStartBehavior;
    this[firstRefresh$] = firstRefresh;
    this[firstRefreshWidget$] = firstRefreshWidget;
    this[emptyWidget$] = emptyWidget;
    this[topBouncing$] = topBouncing;
    this[bottomBouncing$] = bottomBouncing;
    this[slivers$] = slivers;
    this[builder$] = null;
    this[child$0] = null;
    refresher.EasyRefresh.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = refresher.EasyRefresh.prototype;
  (refresher.EasyRefresh.builder = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let onRefresh = opts && 'onRefresh' in opts ? opts.onRefresh : null;
    let onLoad = opts && 'onLoad' in opts ? opts.onLoad : null;
    let enableControlFinishRefresh = opts && 'enableControlFinishRefresh' in opts ? opts.enableControlFinishRefresh : false;
    let enableControlFinishLoad = opts && 'enableControlFinishLoad' in opts ? opts.enableControlFinishLoad : false;
    let taskIndependence = opts && 'taskIndependence' in opts ? opts.taskIndependence : false;
    let scrollController = opts && 'scrollController' in opts ? opts.scrollController : null;
    let header = opts && 'header' in opts ? opts.header : null;
    let footer = opts && 'footer' in opts ? opts.footer : null;
    let firstRefresh = opts && 'firstRefresh' in opts ? opts.firstRefresh : null;
    let topBouncing = opts && 'topBouncing' in opts ? opts.topBouncing : true;
    let bottomBouncing = opts && 'bottomBouncing' in opts ? opts.bottomBouncing : true;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    this[onRefresh$] = onRefresh;
    this[onLoad$] = onLoad;
    this[enableControlFinishRefresh$] = enableControlFinishRefresh;
    this[enableControlFinishLoad$] = enableControlFinishLoad;
    this[taskIndependence$] = taskIndependence;
    this[scrollController$] = scrollController;
    this[header$1] = header;
    this[footer$1] = footer;
    this[firstRefresh$] = firstRefresh;
    this[topBouncing$] = topBouncing;
    this[bottomBouncing$] = bottomBouncing;
    this[builder$] = builder;
    this[scrollDirection$] = null;
    this[reverse$] = null;
    this[child$0] = null;
    this[primary$] = null;
    this[shrinkWrap$] = null;
    this[center$] = null;
    this[anchor$] = null;
    this[cacheExtent$] = null;
    this[slivers$] = null;
    this[semanticChildCount$] = null;
    this[dragStartBehavior$] = null;
    this[headerIndex$] = null;
    this[firstRefreshWidget$] = null;
    this[emptyWidget$] = null;
    refresher.EasyRefresh.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = refresher.EasyRefresh.prototype;
  dart.addTypeTests(refresher.EasyRefresh);
  dart.setMethodSignature(refresher.EasyRefresh, () => ({
    __proto__: dart.getMethods(refresher.EasyRefresh.__proto__),
    createState: dart.fnType(refresher._EasyRefreshState, [])
  }));
  dart.setLibraryUri(refresher.EasyRefresh, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart");
  dart.setFieldSignature(refresher.EasyRefresh, () => ({
    __proto__: dart.getFields(refresher.EasyRefresh.__proto__),
    controller: dart.finalFieldType(refresher.EasyRefreshController),
    onRefresh: dart.finalFieldType(dart.fnType(async.Future$(dart.void), [])),
    onLoad: dart.finalFieldType(dart.fnType(async.Future$(dart.void), [])),
    enableControlFinishRefresh: dart.finalFieldType(core.bool),
    enableControlFinishLoad: dart.finalFieldType(core.bool),
    taskIndependence: dart.finalFieldType(core.bool),
    header: dart.finalFieldType(header$.Header),
    headerIndex: dart.finalFieldType(core.int),
    footer: dart.finalFieldType(footer$.Footer),
    builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, scroll_physics.ScrollPhysics, framework.Widget, framework.Widget])),
    child: dart.finalFieldType(framework.Widget),
    firstRefresh: dart.finalFieldType(core.bool),
    firstRefreshWidget: dart.finalFieldType(framework.Widget),
    emptyWidget: dart.finalFieldType(dart.dynamic),
    topBouncing: dart.finalFieldType(core.bool),
    bottomBouncing: dart.finalFieldType(core.bool),
    slivers: dart.finalFieldType(core.List$(framework.Widget)),
    scrollDirection: dart.finalFieldType(basic_types.Axis),
    reverse: dart.finalFieldType(core.bool),
    scrollController: dart.finalFieldType(scroll_controller.ScrollController),
    primary: dart.finalFieldType(core.bool),
    shrinkWrap: dart.finalFieldType(core.bool),
    center: dart.finalFieldType(key.Key),
    anchor: dart.finalFieldType(core.double),
    cacheExtent: dart.finalFieldType(core.double),
    semanticChildCount: dart.finalFieldType(core.int),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior)
  }));
  dart.defineLazy(refresher.EasyRefresh, {
    /*refresher.EasyRefresh._defaultHeader*/get _defaultHeader() {
      return new header$.ClassicalHeader.new();
    },
    set _defaultHeader(_) {},
    /*refresher.EasyRefresh._defaultFooter*/get _defaultFooter() {
      return new footer$.ClassicalFooter.new();
    },
    set _defaultFooter(_) {},
    /*refresher.EasyRefresh.callOverExtent*/get callOverExtent() {
      return 30.0;
    },
    set callOverExtent(_) {}
  });
  const _physics = dart.privateName(refresher, "_physics");
  const _enableFirstRefresh = dart.privateName(refresher, "_enableFirstRefresh");
  const _firstRefreshHeader = dart.privateName(refresher, "_firstRefreshHeader");
  const _childScrollController = dart.privateName(refresher, "_childScrollController");
  const _focusNotifier = dart.privateName(refresher, "_focusNotifier");
  const _taskNotifier = dart.privateName(refresher, "_taskNotifier");
  const _callRefreshNotifier = dart.privateName(refresher, "_callRefreshNotifier");
  const _callLoadNotifier = dart.privateName(refresher, "_callLoadNotifier");
  const _header = dart.privateName(refresher, "_header");
  const _footer = dart.privateName(refresher, "_footer");
  const _scrollerController = dart.privateName(refresher, "_scrollerController");
  const _bindEasyRefreshState = dart.privateName(refresher, "_bindEasyRefreshState");
  const _buildSliversByChild = dart.privateName(refresher, "_buildSliversByChild");
  let C314;
  let C317;
  let C316;
  let C315;
  let C320;
  let C319;
  let C318;
  let C323;
  let C324;
  let C325;
  let C326;
  let C327;
  let C328;
  let C329;
  let C330;
  let C331;
  let C332;
  let C322;
  let C321;
  const _buildListBodyByChild = dart.privateName(refresher, "_buildListBodyByChild");
  let C333;
  let C336;
  let C337;
  let C338;
  let C335;
  let C334;
  let C341;
  let C342;
  let C340;
  let C339;
  let C345;
  let C344;
  let C343;
  let C348;
  let C349;
  let C347;
  let C346;
  let C352;
  let C351;
  let C350;
  let C355;
  let C356;
  let C357;
  let C358;
  let C359;
  let C360;
  let C361;
  let C362;
  let C363;
  let C354;
  let C353;
  let C366;
  let C367;
  let C368;
  let C369;
  let C370;
  let C371;
  let C365;
  let C364;
  let C372;
  let C375;
  let C374;
  let C373;
  let C378;
  let C377;
  let C376;
  let C381;
  let C382;
  let C383;
  let C384;
  let C385;
  let C386;
  let C380;
  let C379;
  let C389;
  let C390;
  let C391;
  let C388;
  let C387;
  refresher._EasyRefreshState = class _EasyRefreshState extends framework.State$(refresher.EasyRefresh) {
    get [_header]() {
      let t0;
      if (dart.test(this[_enableFirstRefresh]) && this.widget.firstRefreshWidget != null) return this[_firstRefreshHeader];
      t0 = this.widget.header;
      return t0 == null ? refresher.EasyRefresh._defaultHeader : t0;
    }
    get [_footer]() {
      let t0;
      t0 = this.widget.footer;
      return t0 == null ? refresher.EasyRefresh._defaultFooter : t0;
    }
    get [_scrollerController]() {
      let t0, t0$;
      t0$ = (t0 = this.widget.scrollController, t0 == null ? this[_childScrollController] : t0);
      return t0$ == null ? primary_scroll_controller.PrimaryScrollController.of(this.context) : t0$;
    }
    initState() {
      let t0;
      super.initState();
      this[_focusNotifier] = new (ValueNotifierOfbool()).new(false);
      this[_taskNotifier] = new (ValueNotifierOfbool()).new(false);
      this[_callRefreshNotifier] = new (ValueNotifierOfbool()).new(false);
      this[_callLoadNotifier] = new (ValueNotifierOfbool()).new(false);
      this[_taskNotifier].addListener(dart.fn(() => {
        if (dart.test(this[_enableFirstRefresh]) && !dart.test(this[_taskNotifier].value)) {
          this[_scrollerController].jumpTo(0.0);
          this.setState(dart.fn(() => {
            this[_enableFirstRefresh] = false;
          }, VoidToNull()));
        }
      }, VoidToNull()));
      this[_enableFirstRefresh] = (t0 = this.widget.firstRefresh, t0 == null ? false : t0);
      if (dart.test(this[_enableFirstRefresh])) {
        this[_firstRefreshHeader] = new header$.FirstRefreshHeader.new(this.widget.firstRefreshWidget);
        binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(timestamp => {
          this.callRefresh();
        }, DurationToNull()));
      }
    }
    didChangeDependencies() {
      super.didChangeDependencies();
      if (this.widget.controller != null) this.widget.controller[_bindEasyRefreshState](this);
      this[_physics] = new scroll_physics$.EasyRefreshPhysics.new({topBouncing: this.widget.onRefresh == null ? this.widget.topBouncing : true, bottomBouncing: this.widget.onLoad == null ? this.widget.bottomBouncing : true});
    }
    dispose() {
      super.dispose();
      this[_focusNotifier].dispose();
      this[_taskNotifier].dispose();
      this[_callRefreshNotifier].dispose();
      this[_callLoadNotifier].dispose();
    }
    callRefresh(opts) {
      let duration = opts && 'duration' in opts ? opts.duration : C199 || CT.C199;
      if (this[_scrollerController] == null || dart.test(this[_scrollerController].positions[$isEmpty])) return;
      this[_callRefreshNotifier].value = true;
      this[_scrollerController].animateTo(0.0, {duration: duration, curve: curves.Curves.linear}).whenComplete(dart.fn(() => {
        this[_scrollerController].animateTo(-(dart.notNull(this[_header].triggerDistance) + dart.notNull(refresher.EasyRefresh.callOverExtent)), {duration: new core.Duration.new({milliseconds: 100}), curve: curves.Curves.linear});
      }, VoidToNull()));
    }
    callLoad(opts) {
      let duration = opts && 'duration' in opts ? opts.duration : C199 || CT.C199;
      if (this[_scrollerController] == null || dart.test(this[_scrollerController].positions[$isEmpty])) return;
      this[_callLoadNotifier].value = true;
      this[_scrollerController].animateTo(this[_scrollerController].position.maxScrollExtent, {duration: duration, curve: curves.Curves.linear}).whenComplete(dart.fn(() => {
        this[_scrollerController].animateTo(dart.notNull(this[_scrollerController].position.maxScrollExtent) + dart.notNull(this[_footer].triggerDistance) + dart.notNull(refresher.EasyRefresh.callOverExtent), {duration: new core.Duration.new({milliseconds: 100}), curve: curves.Curves.linear});
      }, VoidToNull()));
    }
    build(context) {
      let t0, t0$;
      let topBouncing = this.widget.onRefresh == null ? this.widget.topBouncing : true;
      let bottomBouncing = this.widget.onLoad == null ? this.widget.bottomBouncing : true;
      if (!dart.equals(topBouncing, this[_physics].topBouncing) || !dart.equals(bottomBouncing, this[_physics].bottomBouncing)) {
        this[_physics] = new scroll_physics$.EasyRefreshPhysics.new({topBouncing: topBouncing, bottomBouncing: bottomBouncing});
      }
      let header = this.widget.onRefresh == null ? null : this[_header].builder(context, this.widget, this[_focusNotifier], this[_taskNotifier], this[_callRefreshNotifier]);
      let footer = this.widget.onLoad == null ? null : this[_footer].builder(context, this.widget, this[_focusNotifier], this[_taskNotifier], this[_callLoadNotifier]);
      let slivers = null;
      if (this.widget.builder == null) {
        if (this.widget.slivers != null)
          slivers = ListOfWidget().from(this.widget.slivers, {growable: true});
        else if (this.widget.child != null) slivers = this[_buildSliversByChild]();
        if (this.widget.emptyWidget != null && slivers != null) {
          slivers = slivers[$sublist](0, (t0 = this.widget.headerIndex, t0 == null ? 0 : t0));
          slivers[$add](new sliver$.SliverList.new({delegate: new sliver$.SliverChildListDelegate.new(JSArrayOfWidget().of([new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C314 || CT.C314})])), $creationLocationd_0dea112b090073317d4: C315 || CT.C315}));
          slivers[$add](new empty_widget.EmptyWidget.new({child: framework.Widget._check(this.widget.emptyWidget), $creationLocationd_0dea112b090073317d4: C318 || CT.C318}));
        }
        if (header != null && slivers != null) slivers[$insert]((t0$ = this.widget.headerIndex, t0$ == null ? 0 : t0$), header);
        if (footer != null && slivers != null) slivers[$add](footer);
      }
      let listBody = null;
      if (this.widget.builder != null) {
        listBody = this.widget.builder(context, this[_physics], header, footer);
      } else if (this.widget.slivers != null) {
        listBody = new scroll_view.CustomScrollView.new({physics: this[_physics], slivers: slivers, scrollDirection: this.widget.scrollDirection, reverse: this.widget.reverse, controller: this.widget.scrollController, primary: this.widget.primary, shrinkWrap: this.widget.shrinkWrap, cacheExtent: this.widget.cacheExtent, semanticChildCount: this.widget.semanticChildCount, dragStartBehavior: this.widget.dragStartBehavior, $creationLocationd_0dea112b090073317d4: C321 || CT.C321});
      } else if (this.widget.child != null) {
        listBody = this[_buildListBodyByChild](slivers, header, footer);
      } else {
        listBody = new container.Container.new({$creationLocationd_0dea112b090073317d4: C333 || CT.C333});
      }
      return new scroll_notification_listener.ScrollNotificationListener.new({onNotification: dart.fn(notification => false, ScrollNotificationTobool()), onFocus: dart.fn(focus => {
          this[_focusNotifier].value = focus;
        }, boolToNull()), child: listBody, $creationLocationd_0dea112b090073317d4: C334 || CT.C334});
    }
    [_buildSliversByChild]() {
      let t0;
      let child = this.widget.child;
      let slivers = null;
      if (child == null) return slivers;
      if (scroll_view.ScrollView.is(child)) {
        if (scroll_view.BoxScrollView.is(child)) {
          let sliver = child.buildChildLayout(this.context);
          if (child.padding != null) {
            slivers = JSArrayOfWidget().of([new basic.SliverPadding.new({sliver: sliver, padding: child.padding, $creationLocationd_0dea112b090073317d4: C339 || CT.C339})]);
          } else {
            slivers = JSArrayOfWidget().of([sliver]);
          }
        } else {
          slivers = ListOfWidget().from(child.buildSlivers(this.context), {growable: true});
        }
      } else if (single_child_scroll_view.SingleChildScrollView.is(child)) {
        slivers = JSArrayOfWidget().of([new basic.SliverPadding.new({sliver: new sliver$.SliverList.new({delegate: new sliver$.SliverChildListDelegate.new(JSArrayOfWidget().of([child.child])), $creationLocationd_0dea112b090073317d4: C343 || CT.C343}), padding: (t0 = child.padding, t0 == null ? new edge_insets.EdgeInsets.all(0.0) : t0), $creationLocationd_0dea112b090073317d4: C346 || CT.C346})]);
      } else if (!scrollable.Scrollable.is(child)) {
        slivers = JSArrayOfWidget().of([new basic.SliverToBoxAdapter.new({child: child, $creationLocationd_0dea112b090073317d4: C350 || CT.C350})]);
      }
      return slivers;
    }
    [_buildListBodyByChild](slivers, header, footer) {
      let t0, t0$, t0$0;
      let child = this.widget.child;
      if (scroll_view.ScrollView.is(child)) {
        this[_childScrollController] = child.controller;
        return new scroll_view.CustomScrollView.new({physics: this[_physics], controller: (t0 = child.controller, t0 == null ? this.widget.scrollController : t0), cacheExtent: child.cacheExtent, key: child.key, scrollDirection: child.scrollDirection, semanticChildCount: child.semanticChildCount, slivers: slivers, dragStartBehavior: child.dragStartBehavior, reverse: child.reverse, $creationLocationd_0dea112b090073317d4: C353 || CT.C353});
      } else if (single_child_scroll_view.SingleChildScrollView.is(child)) {
        this[_childScrollController] = child.controller;
        return new scroll_view.CustomScrollView.new({physics: this[_physics], controller: (t0$ = child.controller, t0$ == null ? this.widget.scrollController : t0$), scrollDirection: child.scrollDirection, slivers: slivers, dragStartBehavior: child.dragStartBehavior, reverse: child.reverse, $creationLocationd_0dea112b090073317d4: C364 || CT.C364});
      } else if (scrollable.Scrollable.is(child)) {
        this[_childScrollController] = child.controller;
        return new scrollable.Scrollable.new({physics: this[_physics], controller: (t0$0 = child.controller, t0$0 == null ? this.widget.scrollController : t0$0), axisDirection: child.axisDirection, semanticChildCount: child.semanticChildCount, dragStartBehavior: child.dragStartBehavior, viewportBuilder: dart.fn((context, position) => {
            let t0, t0$;
            let viewport = viewport$.Viewport._check(child.viewportBuilder(context, position));
            if (this.widget.emptyWidget != null) {
              if (dart.notNull(viewport.children[$length]) > dart.notNull((t0 = this.widget.headerIndex, t0 == null ? 0 : t0)) + 1) {
                viewport.children[$removeRange](this.widget.headerIndex, dart.notNull(viewport.children[$length]) - 1);
              }
              viewport.children[$add](new sliver$.SliverList.new({delegate: new sliver$.SliverChildListDelegate.new(JSArrayOfWidget().of([new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C372 || CT.C372})])), $creationLocationd_0dea112b090073317d4: C373 || CT.C373}));
              viewport.children[$add](new empty_widget.EmptyWidget.new({child: framework.Widget._check(this.widget.emptyWidget), $creationLocationd_0dea112b090073317d4: C376 || CT.C376}));
            }
            if (header != null) {
              viewport.children[$insert]((t0$ = this.widget.headerIndex, t0$ == null ? 0 : t0$), header);
            }
            if (footer != null) {
              viewport.children[$add](footer);
            }
            return viewport;
          }, BuildContextAndViewportOffsetToViewport()), $creationLocationd_0dea112b090073317d4: C379 || CT.C379});
      } else {
        return new scroll_view.CustomScrollView.new({physics: this[_physics], controller: this.widget.scrollController, slivers: slivers, $creationLocationd_0dea112b090073317d4: C387 || CT.C387});
      }
    }
  };
  (refresher._EasyRefreshState.new = function() {
    this[_physics] = null;
    this[_enableFirstRefresh] = false;
    this[_firstRefreshHeader] = null;
    this[_childScrollController] = null;
    this[_focusNotifier] = null;
    this[_taskNotifier] = null;
    this[_callRefreshNotifier] = null;
    this[_callLoadNotifier] = null;
    refresher._EasyRefreshState.__proto__.new.call(this);
    ;
  }).prototype = refresher._EasyRefreshState.prototype;
  dart.addTypeTests(refresher._EasyRefreshState);
  dart.setMethodSignature(refresher._EasyRefreshState, () => ({
    __proto__: dart.getMethods(refresher._EasyRefreshState.__proto__),
    callRefresh: dart.fnType(dart.void, [], {duration: core.Duration}, {}),
    callLoad: dart.fnType(dart.void, [], {duration: core.Duration}, {}),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildSliversByChild]: dart.fnType(core.List$(framework.Widget), []),
    [_buildListBodyByChild]: dart.fnType(framework.Widget, [core.List$(framework.Widget), framework.Widget, framework.Widget])
  }));
  dart.setGetterSignature(refresher._EasyRefreshState, () => ({
    __proto__: dart.getGetters(refresher._EasyRefreshState.__proto__),
    [_header]: header$.Header,
    [_footer]: footer$.Footer,
    [_scrollerController]: scroll_controller.ScrollController
  }));
  dart.setLibraryUri(refresher._EasyRefreshState, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart");
  dart.setFieldSignature(refresher._EasyRefreshState, () => ({
    __proto__: dart.getFields(refresher._EasyRefreshState.__proto__),
    [_physics]: dart.fieldType(scroll_physics$.EasyRefreshPhysics),
    [_enableFirstRefresh]: dart.fieldType(core.bool),
    [_firstRefreshHeader]: dart.fieldType(header$.Header),
    [_childScrollController]: dart.fieldType(scroll_controller.ScrollController),
    [_focusNotifier]: dart.fieldType(change_notifier.ValueNotifier$(core.bool)),
    [_taskNotifier]: dart.fieldType(change_notifier.ValueNotifier$(core.bool)),
    [_callRefreshNotifier]: dart.fieldType(change_notifier.ValueNotifier$(core.bool)),
    [_callLoadNotifier]: dart.fieldType(change_notifier.ValueNotifier$(core.bool))
  }));
  const _easyRefreshState = dart.privateName(refresher, "_easyRefreshState");
  const finishRefreshCallBack = dart.privateName(refresher, "EasyRefreshController.finishRefreshCallBack");
  const finishLoadCallBack = dart.privateName(refresher, "EasyRefreshController.finishLoadCallBack");
  const resetRefreshStateCallBack = dart.privateName(refresher, "EasyRefreshController.resetRefreshStateCallBack");
  const resetLoadStateCallBack = dart.privateName(refresher, "EasyRefreshController.resetLoadStateCallBack");
  refresher.EasyRefreshController = class EasyRefreshController extends core.Object {
    get finishRefreshCallBack() {
      return this[finishRefreshCallBack];
    }
    set finishRefreshCallBack(value) {
      this[finishRefreshCallBack] = value;
    }
    get finishLoadCallBack() {
      return this[finishLoadCallBack];
    }
    set finishLoadCallBack(value) {
      this[finishLoadCallBack] = value;
    }
    get resetRefreshStateCallBack() {
      return this[resetRefreshStateCallBack];
    }
    set resetRefreshStateCallBack(value) {
      this[resetRefreshStateCallBack] = value;
    }
    get resetLoadStateCallBack() {
      return this[resetLoadStateCallBack];
    }
    set resetLoadStateCallBack(value) {
      this[resetLoadStateCallBack] = value;
    }
    callRefresh(opts) {
      let duration = opts && 'duration' in opts ? opts.duration : C199 || CT.C199;
      if (this[_easyRefreshState] != null) {
        this[_easyRefreshState].callRefresh({duration: duration});
      }
    }
    callLoad(opts) {
      let duration = opts && 'duration' in opts ? opts.duration : C199 || CT.C199;
      if (this[_easyRefreshState] != null) {
        this[_easyRefreshState].callLoad({duration: duration});
      }
    }
    finishRefresh(opts) {
      let success = opts && 'success' in opts ? opts.success : null;
      let noMore = opts && 'noMore' in opts ? opts.noMore : null;
      if (this.finishRefreshCallBack != null) {
        this.finishRefreshCallBack({success: success, noMore: noMore});
      }
    }
    finishLoad(opts) {
      let success = opts && 'success' in opts ? opts.success : null;
      let noMore = opts && 'noMore' in opts ? opts.noMore : null;
      if (this.finishLoadCallBack != null) {
        this.finishLoadCallBack({success: success, noMore: noMore});
      }
    }
    resetRefreshState() {
      if (this.resetRefreshStateCallBack != null) {
        this.resetRefreshStateCallBack();
      }
    }
    resetLoadState() {
      if (this.resetLoadStateCallBack != null) {
        this.resetLoadStateCallBack();
      }
    }
    [_bindEasyRefreshState](state) {
      this[_easyRefreshState] = state;
    }
    dispose() {
      this[_easyRefreshState] = null;
      this.finishRefreshCallBack = null;
      this.finishLoadCallBack = null;
      this.resetLoadStateCallBack = null;
      this.resetRefreshStateCallBack = null;
    }
  };
  (refresher.EasyRefreshController.new = function() {
    this[finishRefreshCallBack] = null;
    this[finishLoadCallBack] = null;
    this[resetRefreshStateCallBack] = null;
    this[resetLoadStateCallBack] = null;
    this[_easyRefreshState] = null;
    ;
  }).prototype = refresher.EasyRefreshController.prototype;
  dart.addTypeTests(refresher.EasyRefreshController);
  dart.setMethodSignature(refresher.EasyRefreshController, () => ({
    __proto__: dart.getMethods(refresher.EasyRefreshController.__proto__),
    callRefresh: dart.fnType(dart.void, [], {duration: core.Duration}, {}),
    callLoad: dart.fnType(dart.void, [], {duration: core.Duration}, {}),
    finishRefresh: dart.fnType(dart.void, [], {noMore: core.bool, success: core.bool}, {}),
    finishLoad: dart.fnType(dart.void, [], {noMore: core.bool, success: core.bool}, {}),
    resetRefreshState: dart.fnType(dart.void, []),
    resetLoadState: dart.fnType(dart.void, []),
    [_bindEasyRefreshState]: dart.fnType(dart.void, [refresher._EasyRefreshState]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(refresher.EasyRefreshController, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart");
  dart.setFieldSignature(refresher.EasyRefreshController, () => ({
    __proto__: dart.getFields(refresher.EasyRefreshController.__proto__),
    finishRefreshCallBack: dart.fieldType(dart.fnType(dart.void, [], {noMore: core.bool, success: core.bool}, {})),
    finishLoadCallBack: dart.fieldType(dart.fnType(dart.void, [], {noMore: core.bool, success: core.bool}, {})),
    resetRefreshStateCallBack: dart.fieldType(dart.fnType(dart.void, [])),
    resetLoadStateCallBack: dart.fieldType(dart.fnType(dart.void, [])),
    [_easyRefreshState]: dart.fieldType(refresher._EasyRefreshState)
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/easy_refresh", {
    "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/easy_refresh.dart": easy_refresh,
    "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/footer.dart": footer$,
    "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/header.dart": header$,
    "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/refresher.dart": refresher
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/footer/footer.dart","src/header/header.dart","src/refresher.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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,2CACnB,aAAb,YAAY,IACmB,aAA3B,0BAA0B,iBAAe,wCAC/C,aACA;IACR;;;IA5BwB;AAClB,yFAEmB,aACV,6BACgB,6BACD;;EACvB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICr1BqB;;;;;;IAGJ;;;;;;IAGH;;;;;;IAGV;;;;;;IAGA;;;;;;IAGA;;;;;;IAGE;;;;;;IACH;;;;;;IAGG;;;;;;IAGiB;;;;;;IAGjB;;;;;;IAGF;;;;;;IAIE;;;;;;IAKP;;;;;;IAGK;;;;;;IAGA;;;;;;IAGQ;;;;;;IAGR;;;;;;IAGA;;;;;;IACY;;;;;;IACZ;;;;;;IACA;;;;;;IACD;;;;;;IACG;;;;;;IACA;;;;;;IACH;;;;;;IACc;;;;;;6BAIQ;AAC9B,UAAI,MAAM,IAAI;AACW,QAAvB,uCAAiB,MAAM;;IAE3B;6BAIgC;AAC9B,UAAI,MAAM,IAAI;AACW,QAAvB,uCAAiB,MAAM;;IAE3B;;AAuGE,YAAO;IACT;;;QAhGE;QACK;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACU;;IAfV;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACU;IACU,yBAAE;IACV,iBAAE;IACF,iBAAE;IACF,iBAAE;IACC,oBAAE;IACN,gBAAE;IACF,gBAAE;IACG,qBAAE;IACN,iBAAE;IACS,4BAAE;IACH,2BAAE;AA5B/B;;EA4BmC;;QAKjC;QACK;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACU;;IAxBV;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACU;IACE,iBAAE;IACJ,gBAAE;AA5BnB;;EA4BuB;;QAKrB;QACK;QACA;QACA;QACA;QACA;QACA;QACA;Q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","file":"easy_refresh.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_easyrefresh_2$460$468__lib__easy_refresh: easy_refresh,
    ThridLib__flutter_easyrefresh_2$460$468__lib__src__footer__footer: footer$,
    ThridLib__flutter_easyrefresh_2$460$468__lib__src__header__header: header$,
    ThridLib__flutter_easyrefresh_2$460$468__lib__src__refresher: refresher
  };
});

//# sourceMappingURL=easy_refresh.ddc.js.map
