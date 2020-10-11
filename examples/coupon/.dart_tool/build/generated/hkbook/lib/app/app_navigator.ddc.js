define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/hkbook/app/sq_color', 'packages/flutter_web_ui/ui', 'packages/hkbook/page/category/search_card', 'packages/hkbook/ThridLib/provide-1.0.2/lib/provide', 'packages/hkbook/provide/search_history', 'packages/flutter_web/src/animation/animation', 'packages/hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil', 'packages/hkbook/page/category/recomend', 'packages/hkbook/model/coupon_model', 'packages/hkbook/ThridLib/shared_preferences-0.5.6/lib/shared_preferences', 'packages/hkbook/global', 'packages/flutter_web/src/cupertino/action_sheet', 'packages/hkbook/service/result_data', 'packages/hkbook/widget/toast', 'packages/crypto/crypto', 'packages/convert/convert', 'packages/intl/intl', 'packages/hkbook/ThridLib/dio-3.0.8/lib/src/dio', 'packages/hkbook/service/interceptors/headerInterceptors', 'packages/hkbook/service/service_url', 'packages/hkbook/ThridLib/dio-3.0.8/lib/src/interceptor', 'packages/hkbook/service/interceptors/errorInterceptors', 'packages/hkbook/service/interceptors/responseInterceptors', 'packages/hkbook/ThridLib/dio-3.0.8/lib/src/adapter', 'packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/easy_refresh', 'packages/hkbook/page/home/tabbar', 'packages/hkbook/utility/screen', 'packages/flutter_web/src/foundation/assertions', 'packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle', 'packages/hkbook/widget/marquee/ace_marquee', 'packages/hkbook/ThridLib/carousel_slider-1.4.1/lib/carousel_slider', 'packages/hkbook/app/constant', 'packages/hkbook/model/category_model', 'packages/hkbook/provide/category', 'packages/hkbook/widget/browser/browser', 'packages/hkbook/widget/loading/loading_page', 'packages/hkbook/model/counpntbk_model'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__hkbook__app__sq_color, packages__flutter_web_ui__ui, packages__hkbook__page__category__search_card, packages__hkbook__ThridLib__provide_1$460$462__lib__provide, packages__hkbook__provide__search_history, packages__flutter_web__src__animation__animation, packages__hkbook__ThridLib__flutter_screenutil_0$467$460__lib__flutter_screenutil, packages__hkbook__page__category__recomend, packages__hkbook__model__coupon_model, packages__hkbook__ThridLib__shared_preferences_0$465$466__lib__shared_preferences, packages__hkbook__global, packages__flutter_web__src__cupertino__action_sheet, packages__hkbook__service__result_data, packages__hkbook__widget__toast, packages__crypto__crypto, packages__convert__convert, packages__intl__intl, packages__hkbook__ThridLib__dio_3$460$468__lib__src__dio, packages__hkbook__service__interceptors__headerInterceptors, packages__hkbook__service__service_url, packages__hkbook__ThridLib__dio_3$460$468__lib__src__interceptor, packages__hkbook__service__interceptors__errorInterceptors, packages__hkbook__service__interceptors__responseInterceptors, packages__hkbook__ThridLib__dio_3$460$468__lib__src__adapter, packages__hkbook__ThridLib__flutter_easyrefresh_2$460$468__lib__easy_refresh, packages__hkbook__page__home__tabbar, packages__hkbook__utility__screen, packages__flutter_web__src__foundation__assertions, packages__hkbook__ThridLib__flutter_spinkit_4$461$461$431__lib__src__fading_circle, packages__hkbook__widget__marquee__ace_marquee, packages__hkbook__ThridLib__carousel_slider_1$464$461__lib__carousel_slider, packages__hkbook__app__constant, packages__hkbook__model__category_model, packages__hkbook__provide__category, packages__hkbook__widget__browser__browser, packages__hkbook__widget__loading__loading_page, packages__hkbook__model__counpntbk_model) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const editable_text = packages__flutter_web__animation.src__widgets__editable_text;
  const preferred_size = packages__flutter_web__animation.src__widgets__preferred_size;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const container = packages__flutter_web__animation.src__widgets__container;
  const gesture_detector = packages__flutter_web__animation.src__widgets__gesture_detector;
  const text = packages__flutter_web__animation.src__widgets__text;
  const navigator = packages__flutter_web__animation.src__widgets__navigator;
  const routes = packages__flutter_web__animation.src__widgets__routes;
  const pages = packages__flutter_web__animation.src__widgets__pages;
  const image = packages__flutter_web__animation.src__widgets__image;
  const page_view = packages__flutter_web__animation.src__widgets__page_view;
  const scroll_physics = packages__flutter_web__animation.src__widgets__scroll_physics;
  const bottom_navigation_bar_item = packages__flutter_web__animation.src__widgets__bottom_navigation_bar_item;
  const annotated_region = packages__flutter_web__animation.src__widgets__annotated_region;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const automatic_keep_alive = packages__flutter_web__animation.src__widgets__automatic_keep_alive;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const image_resolution = packages__flutter_web__animation.src__painting__image_resolution;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const box = packages__flutter_web__animation.src__rendering__box;
  const scroll_controller = packages__flutter_web__animation.src__widgets__scroll_controller;
  const binding = packages__flutter_web__animation.src__widgets__binding;
  const nested_scroll_view = packages__flutter_web__animation.src__widgets__nested_scroll_view;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const scroll_notification = packages__flutter_web__animation.src__widgets__scroll_notification;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const notification_listener = packages__flutter_web__animation.src__widgets__notification_listener;
  const paragraph = packages__flutter_web__animation.src__rendering__paragraph;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const borders = packages__flutter_web__animation.src__painting__borders;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const async$ = packages__flutter_web__animation.src__widgets__async;
  const single_child_scroll_view = packages__flutter_web__animation.src__widgets__single_child_scroll_view;
  const wrap = packages__flutter_web__animation.src__rendering__wrap;
  const sliver_grid = packages__flutter_web__animation.src__rendering__sliver_grid;
  const binding$ = packages__flutter_web__animation.src__painting__binding;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const app = packages__flutter_web__material.src__material__app;
  const theme_data = packages__flutter_web__material.src__material__theme_data;
  const colors = packages__flutter_web__material.src__material__colors;
  const text_theme = packages__flutter_web__material.src__material__text_theme;
  const circle_avatar = packages__flutter_web__material.src__material__circle_avatar;
  const tab_controller = packages__flutter_web__material.src__material__tab_controller;
  const flexible_space_bar = packages__flutter_web__material.src__material__flexible_space_bar;
  const tabs = packages__flutter_web__material.src__material__tabs;
  const ink_well = packages__flutter_web__material.src__material__ink_well;
  const page = packages__flutter_web__material.src__material__page;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const icons = packages__flutter_web__material.src__material__icons;
  const sq_color = packages__hkbook__app__sq_color.app__sq_color;
  const ui = packages__flutter_web_ui__ui.ui;
  const search_card = packages__hkbook__page__category__search_card.page__category__search_card;
  const provide = packages__hkbook__ThridLib__provide_1$460$462__lib__provide.ThridLib__provide_1$460$462__lib__provide;
  const search_history = packages__hkbook__provide__search_history.provide__search_history;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const system_chrome = packages__flutter_web__src__animation__animation.src__services__system_chrome;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const basic_types = packages__flutter_web__src__animation__animation.src__painting__basic_types;
  const box_fit = packages__flutter_web__src__animation__animation.src__painting__box_fit;
  const tap = packages__flutter_web__src__animation__animation.src__gestures__tap;
  const clipboard = packages__flutter_web__src__animation__animation.src__services__clipboard;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const flutter_screenutil = packages__hkbook__ThridLib__flutter_screenutil_0$467$460__lib__flutter_screenutil.ThridLib__flutter_screenutil_0$467$460__lib__flutter_screenutil;
  const recomend = packages__hkbook__page__category__recomend.page__category__recomend;
  const coupon_model = packages__hkbook__model__coupon_model.model__coupon_model;
  const shared_preferences = packages__hkbook__ThridLib__shared_preferences_0$465$466__lib__shared_preferences.ThridLib__shared_preferences_0$465$466__lib__shared_preferences;
  const global = packages__hkbook__global.global;
  const bottom_tab_bar = packages__flutter_web__src__cupertino__action_sheet.src__cupertino__bottom_tab_bar;
  const activity_indicator = packages__flutter_web__src__cupertino__action_sheet.src__cupertino__activity_indicator;
  const result_data = packages__hkbook__service__result_data.service__result_data;
  const toast = packages__hkbook__widget__toast.widget__toast;
  const md5 = packages__crypto__crypto.src__md5;
  const hex = packages__convert__convert.src__hex;
  const intl = packages__intl__intl.intl;
  const dio$ = packages__hkbook__ThridLib__dio_3$460$468__lib__src__dio.ThridLib__dio_3$460$468__lib__src__dio;
  const headerInterceptors = packages__hkbook__service__interceptors__headerInterceptors.service__interceptors__headerInterceptors;
  const service_url = packages__hkbook__service__service_url.service__service_url;
  const interceptor = packages__hkbook__ThridLib__dio_3$460$468__lib__src__interceptor.ThridLib__dio_3$460$468__lib__src__interceptor;
  const errorInterceptors = packages__hkbook__service__interceptors__errorInterceptors.service__interceptors__errorInterceptors;
  const responseInterceptors = packages__hkbook__service__interceptors__responseInterceptors.service__interceptors__responseInterceptors;
  const options = packages__hkbook__ThridLib__dio_3$460$468__lib__src__adapter.ThridLib__dio_3$460$468__lib__src__options;
  const response$ = packages__hkbook__ThridLib__dio_3$460$468__lib__src__adapter.ThridLib__dio_3$460$468__lib__src__response;
  const dio_error = packages__hkbook__ThridLib__dio_3$460$468__lib__src__adapter.ThridLib__dio_3$460$468__lib__src__dio_error;
  const refresher = packages__hkbook__ThridLib__flutter_easyrefresh_2$460$468__lib__easy_refresh.ThridLib__flutter_easyrefresh_2$460$468__lib__src__refresher;
  const footer = packages__hkbook__ThridLib__flutter_easyrefresh_2$460$468__lib__easy_refresh.ThridLib__flutter_easyrefresh_2$460$468__lib__src__footer__footer;
  const tabbar = packages__hkbook__page__home__tabbar.page__home__tabbar;
  const screen = packages__hkbook__utility__screen.utility__screen;
  const key = packages__flutter_web__src__foundation__assertions.src__foundation__key;
  const fading_circle = packages__hkbook__ThridLib__flutter_spinkit_4$461$461$431__lib__src__fading_circle.ThridLib__flutter_spinkit_4$461$461$431__lib__src__fading_circle;
  const ace_marquee = packages__hkbook__widget__marquee__ace_marquee.widget__marquee__ace_marquee;
  const carousel_slider = packages__hkbook__ThridLib__carousel_slider_1$464$461__lib__carousel_slider.ThridLib__carousel_slider_1$464$461__lib__carousel_slider;
  const constant = packages__hkbook__app__constant.app__constant;
  const category_model = packages__hkbook__model__category_model.model__category_model;
  const category = packages__hkbook__provide__category.provide__category;
  const browser = packages__hkbook__widget__browser__browser.widget__browser__browser;
  const loading_page = packages__hkbook__widget__loading__loading_page.widget__loading__loading_page;
  const counpntbk_model = packages__hkbook__model__counpntbk_model.model__counpntbk_model;
  const search_goods_page = Object.create(dart.library);
  const $public = Object.create(dart.library);
  const app_scene = Object.create(dart.library);
  const root_scene = Object.create(dart.library);
  const service_method = Object.create(dart.library);
  const logInterceptors = Object.create(dart.library);
  const api = Object.create(dart.library);
  const mine_page = Object.create(dart.library);
  const me_header = Object.create(dart.library);
  const mine_cell = Object.create(dart.library);
  const home_main = Object.create(dart.library);
  const home_sort = Object.create(dart.library);
  const home_header = Object.create(dart.library);
  const home_banner = Object.create(dart.library);
  const category_page = Object.create(dart.library);
  const cricel_page = Object.create(dart.library);
  const app_navigator = Object.create(dart.library);
  const help_page = Object.create(dart.library);
  const clearCache_page = Object.create(dart.library);
  const aboutWe_page = Object.create(dart.library);
  const details_page = Object.create(dart.library);
  const details_share = Object.create(dart.library);
  const details_header = Object.create(dart.library);
  const search_result = Object.create(dart.library);
  const search_mater_page = Object.create(dart.library);
  const circel_more_page = Object.create(dart.library);
  const novel_cover_view = Object.create(dart.library);
  const search_suggest_page = Object.create(dart.library);
  const $length = dartx.length;
  const $toString = dartx.toString;
  const $_get = dartx._get;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $addAll = dartx.addAll;
  const $toUpperCase = dartx.toUpperCase;
  const $add = dartx.add;
  const $toDouble = dartx.toDouble;
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $_set = dartx._set;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let JSArrayOfNavigatorObserver = () => (JSArrayOfNavigatorObserver = dart.constFn(_interceptors.JSArray$(navigator.NavigatorObserver)))();
  let RouteObserverOfPageRoute = () => (RouteObserverOfPageRoute = dart.constFn(routes.RouteObserver$(pages.PageRoute)))();
  let JSArrayOfImage = () => (JSArrayOfImage = dart.constFn(_interceptors.JSArray$(image.Image)))();
  let JSArrayOfMapData = () => (JSArrayOfMapData = dart.constFn(_interceptors.JSArray$(coupon_model.MapData)))();
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
  let JSArrayOfBottomNavigationBarItem = () => (JSArrayOfBottomNavigationBarItem = dart.constFn(_interceptors.JSArray$(bottom_navigation_bar_item.BottomNavigationBarItem)))();
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let DioErrorToResultData = () => (DioErrorToResultData = dart.constFn(dart.fnType(result_data.ResultData, [dio_error.DioError])))();
  let AnnotatedRegionOfSystemUiOverlayStyle = () => (AnnotatedRegionOfSystemUiOverlayStyle = dart.constFn(annotated_region.AnnotatedRegion$(system_chrome.SystemUiOverlayStyle)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let StateOfStatefulWidget = () => (StateOfStatefulWidget = dart.constFn(framework.State$(framework.StatefulWidget)))();
  let GlobalKeyOfStateOfStatefulWidget = () => (GlobalKeyOfStateOfStatefulWidget = dart.constFn(framework.GlobalKey$(StateOfStatefulWidget())))();
  let JSArrayOfTabModel = () => (JSArrayOfTabModel = dart.constFn(_interceptors.JSArray$(tabbar.TabModel)))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let BuildContextAndboolToListOfWidget = () => (BuildContextAndboolToListOfWidget = dart.constFn(dart.fnType(ListOfWidget(), [framework.BuildContext, core.bool])))();
  let SearchSortResultOfScrollNotification = () => (SearchSortResultOfScrollNotification = dart.constFn(home_sort.SearchSortResult$(scroll_notification.ScrollNotification)))();
  let ValueKeyOfString = () => (ValueKeyOfString = dart.constFn(key.ValueKey$(core.String)))();
  let NotificationListenerOfScrollNotification = () => (NotificationListenerOfScrollNotification = dart.constFn(notification_listener.NotificationListener$(scroll_notification.ScrollNotification)))();
  let ScrollNotificationTobool = () => (ScrollNotificationTobool = dart.constFn(dart.fnType(core.bool, [scroll_notification.ScrollNotification])))();
  let MapDataToInkWell = () => (MapDataToInkWell = dart.constFn(dart.fnType(ink_well.InkWell, [coupon_model.MapData])))();
  let JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))();
  let BuildContextAndintToInkWell = () => (BuildContextAndintToInkWell = dart.constFn(dart.fnType(ink_well.InkWell, [framework.BuildContext, core.int])))();
  let BuildContextToContainer = () => (BuildContextToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext])))();
  let StringToBuilder = () => (StringToBuilder = dart.constFn(dart.fnType(basic.Builder, [core.String])))();
  let BuildContextAndAsyncSnapshotToWidget = () => (BuildContextAndAsyncSnapshotToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, async$.AsyncSnapshot])))();
  let ProvideOfChildCategory = () => (ProvideOfChildCategory = dart.constFn(provide.Provide$(category.ChildCategory)))();
  let SubcategoriesToInkWell = () => (SubcategoriesToInkWell = dart.constFn(dart.fnType(ink_well.InkWell, [category_model.Subcategories])))();
  let BuildContextAndWidgetAndChildCategoryToWidget = () => (BuildContextAndWidgetAndChildCategoryToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, category.ChildCategory])))();
  let MapDataToWidget = () => (MapDataToWidget = dart.constFn(dart.fnType(framework.Widget, [coupon_model.MapData])))();
  let JSArrayOfMap = () => (JSArrayOfMap = dart.constFn(_interceptors.JSArray$(core.Map)))();
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  let FutureBuilderOfString = () => (FutureBuilderOfString = dart.constFn(async$.FutureBuilder$(core.String)))();
  let BuildContextAndAsyncSnapshotToContainer = () => (BuildContextAndAsyncSnapshotToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext, async$.AsyncSnapshot])))();
  let TapUpDetailsToNull = () => (TapUpDetailsToNull = dart.constFn(dart.fnType(core.Null, [tap.TapUpDetails])))();
  let StringToImage = () => (StringToImage = dart.constFn(dart.fnType(image.Image, [core.String])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  let TapDownDetailsToNull = () => (TapDownDetailsToNull = dart.constFn(dart.fnType(core.Null, [tap.TapDownDetails])))();
  let ProvideOfHistoryProvide = () => (ProvideOfHistoryProvide = dart.constFn(provide.Provide$(search_history.HistoryProvide)))();
  let StringToGestureDetector = () => (StringToGestureDetector = dart.constFn(dart.fnType(gesture_detector.GestureDetector, [core.String])))();
  let BuildContextAndWidgetAndHistoryProvideToWrap = () => (BuildContextAndWidgetAndHistoryProvideToWrap = dart.constFn(dart.fnType(basic.Wrap, [framework.BuildContext, framework.Widget, search_history.HistoryProvide])))();
  let BuildContextAndAsyncSnapshotToStatelessWidget = () => (BuildContextAndAsyncSnapshotToStatelessWidget = dart.constFn(dart.fnType(framework.StatelessWidget, [framework.BuildContext, async$.AsyncSnapshot])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "brightness",
        [_Location_column]: 13,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 13,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 13,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "preferredSize",
        [_Location_column]: 11,
        [_Location_line]: 58,
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
        [_Location_column]: 15,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 64,
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
        [_Location_column]: 19,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 23,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 23,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textEditingController",
        [_Location_column]: 23,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isShowLeading",
        [_Location_column]: 23,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hintText",
        [_Location_column]: 23,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSubmitted",
        [_Location_column]: 23,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 23,
        [_Location_line]: 78,
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
        [_Location_column]: 28,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 21,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 89,
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
        [_Location_column]: 30,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 23,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 21,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 44,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onItemTap",
        [_Location_column]: 59,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C63() {
      return C63 = dart.constList([], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_goods_page.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/app_scene.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "navigatorObservers",
        [_Location_column]: 7,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "debugShowCheckedModeBanner",
        [_Location_column]: 7,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 7,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74, C75 || CT.C75, C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/app_scene.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 17,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 17,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 17,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 17,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 17,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 17,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 17,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "toSort",
        [_Location_column]: 24,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "couponList",
        [_Location_column]: 7,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 55,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 13,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 13,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 13,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111, C112 || CT.C112, C113 || CT.C113, C114 || CT.C114], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 68,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 63,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 68,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 63,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 68,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 63,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 68,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.constList([C126 || CT.C126], widget_inspector._Location);
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C125 || CT.C125,
        [_Location_name]: null,
        [_Location_column]: 63,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "activeColor",
        [_Location_column]: 9,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 9,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "currentIndex",
        [_Location_column]: 9,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129, C130 || CT.C130, C131 || CT.C131, C132 || CT.C132, C133 || CT.C133], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottomNavigationBar",
        [_Location_column]: 7,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.constList([C136 || CT.C136, C137 || CT.C137], widget_inspector._Location);
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C135 || CT.C135,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/root_scene.dart"
      });
    },
    get C138() {
      return C138 = dart.constMap(core.String, core.String, ["Accept", "application/json, */*", "clientversion", "100.0.0", "content-type", "application/json"]);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "iconName",
        [_Location_column]: 19,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141, C142 || CT.C142, C143 || CT.C143], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_page.dart"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "iconName",
        [_Location_column]: 19,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.constList([C146 || CT.C146, C147 || CT.C147, C148 || CT.C148], widget_inspector._Location);
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C145 || CT.C145,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_page.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "iconName",
        [_Location_column]: 19,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151, C152 || CT.C152, C153 || CT.C153], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_page.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C155 || CT.C155,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_page.dart"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.constList([C159 || CT.C159], widget_inspector._Location);
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C158 || CT.C158,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_page.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 18,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162], widget_inspector._Location);
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C161 || CT.C161,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_page.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_page.dart"
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.constList([C166 || CT.C166], widget_inspector._Location);
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C165 || CT.C165,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_page.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.constList([C169 || CT.C169], widget_inspector._Location);
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C168 || CT.C168,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_page.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onRefresh",
        [_Location_column]: 11,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLoad",
        [_Location_column]: 11,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.constList([C172 || CT.C172, C173 || CT.C173, C174 || CT.C174], widget_inspector._Location);
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C171 || CT.C171,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_page.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.constList([C177 || CT.C177, C178 || CT.C178], widget_inspector._Location);
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C176 || CT.C176,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_page.dart"
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 22,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.constList([C181 || CT.C181], widget_inspector._Location);
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C180 || CT.C180,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_page.dart"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184, C185 || CT.C185], widget_inspector._Location);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C183 || CT.C183,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_page.dart"
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "radius",
        [_Location_column]: 17,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundImage",
        [_Location_column]: 17,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.constList([C188 || CT.C188, C189 || CT.C189], widget_inspector._Location);
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C187 || CT.C187,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/me_header.dart"
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.constList([C192 || CT.C192, C193 || CT.C193], widget_inspector._Location);
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C191 || CT.C191,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/me_header.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 22,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.constList([C196 || CT.C196], widget_inspector._Location);
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C195 || CT.C195,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/me_header.dart"
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.constList([C199 || CT.C199, C200 || CT.C200], widget_inspector._Location);
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C198 || CT.C198,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/me_header.dart"
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 28,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.constList([C203 || CT.C203], widget_inspector._Location);
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C202 || CT.C202,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/me_header.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 37,
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
        [_Location_column]: 22,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/me_header.dart"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.constList([C210 || CT.C210], widget_inspector._Location);
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C209 || CT.C209,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/me_header.dart"
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.constList([C213 || CT.C213], widget_inspector._Location);
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C212 || CT.C212,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/me_header.dart"
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.constList([C216 || CT.C216, C217 || CT.C217, C218 || CT.C218], widget_inspector._Location);
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C215 || CT.C215,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/me_header.dart"
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C220() {
      return C220 = dart.constList([C221 || CT.C221, C222 || CT.C222], widget_inspector._Location);
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C220 || CT.C220,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/me_header.dart"
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 40,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C224() {
      return C224 = dart.constList([C225 || CT.C225], widget_inspector._Location);
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C224 || CT.C224,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_cell.dart"
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C227() {
      return C227 = dart.constList([C228 || CT.C228, C229 || CT.C229], widget_inspector._Location);
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C227 || CT.C227,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_cell.dart"
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 28,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C231() {
      return C231 = dart.constList([C232 || CT.C232], widget_inspector._Location);
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C231 || CT.C231,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_cell.dart"
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 24,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C234() {
      return C234 = dart.constList([C235 || CT.C235, C236 || CT.C236], widget_inspector._Location);
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C234 || CT.C234,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_cell.dart"
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_cell.dart"
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 28,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C239() {
      return C239 = dart.constList([C240 || CT.C240], widget_inspector._Location);
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C239 || CT.C239,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_cell.dart"
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.constList([C243 || CT.C243], widget_inspector._Location);
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C242 || CT.C242,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_cell.dart"
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C245() {
      return C245 = dart.constList([C246 || CT.C246, C247 || CT.C247, C248 || CT.C248, C249 || CT.C249], widget_inspector._Location);
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C245 || CT.C245,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_cell.dart"
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C251() {
      return C251 = dart.constList([C252 || CT.C252, C253 || CT.C253, C254 || CT.C254], widget_inspector._Location);
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C251 || CT.C251,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_cell.dart"
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C256() {
      return C256 = dart.constList([C257 || CT.C257], widget_inspector._Location);
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C256 || CT.C256,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_cell.dart"
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C259() {
      return C259 = dart.constList([C260 || CT.C260, C261 || CT.C261], widget_inspector._Location);
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C259 || CT.C259,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_cell.dart"
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C263() {
      return C263 = dart.constList([C264 || CT.C264, C265 || CT.C265], widget_inspector._Location);
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C263 || CT.C263,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/mine_cell.dart"
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "couponList",
        [_Location_column]: 27,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C268() {
      return C268 = dart.constList([C269 || CT.C269], widget_inspector._Location);
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C268 || CT.C268,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C271() {
      return C271 = dart.constList([C272 || CT.C272], widget_inspector._Location);
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C271 || CT.C271,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: scroll_physics.NeverScrollableScrollPhysics.prototype,
        [ScrollPhysics_parent]: null
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 27,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 27,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C275() {
      return C275 = dart.constList([C276 || CT.C276, C277 || CT.C277, C278 || CT.C278], widget_inspector._Location);
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C275 || CT.C275,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "removeTop",
        [_Location_column]: 21,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "context",
        [_Location_column]: 21,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C280() {
      return C280 = dart.constList([C281 || CT.C281, C282 || CT.C282, C283 || CT.C283], widget_inspector._Location);
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C280 || CT.C280,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "collapseMode",
        [_Location_column]: 17,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "background",
        [_Location_column]: 17,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C285() {
      return C285 = dart.constList([C286 || CT.C286, C287 || CT.C287], widget_inspector._Location);
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C285 || CT.C285,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tabController",
        [_Location_column]: 19,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tabModels",
        [_Location_column]: 19,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "currentIndex",
        [_Location_column]: 19,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C289() {
      return C289 = dart.constList([C290 || CT.C290, C291 || CT.C291, C292 || CT.C292], widget_inspector._Location);
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C289 || CT.C289,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "preferredSize",
        [_Location_column]: 17,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C294() {
      return C294 = dart.constList([C295 || CT.C295, C296 || CT.C296], widget_inspector._Location);
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C294 || CT.C294,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pinned",
        [_Location_column]: 15,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floating",
        [_Location_column]: 15,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "forceElevated",
        [_Location_column]: 15,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 15,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flexibleSpace",
        [_Location_column]: 15,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "expandedHeight",
        [_Location_column]: 15,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 15,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C298() {
      return C298 = dart.constList([C299 || CT.C299, C300 || CT.C300, C301 || CT.C301, C302 || CT.C302, C303 || CT.C303, C304 || CT.C304, C305 || CT.C305], widget_inspector._Location);
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C298 || CT.C298,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 26,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 51,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C307() {
      return C307 = dart.constList([C308 || CT.C308, C309 || CT.C309], widget_inspector._Location);
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C307 || CT.C307,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 163,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "headerSliverBuilder",
        [_Location_column]: 9,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C311() {
      return C311 = dart.constList([C312 || CT.C312, C313 || CT.C313, C314 || CT.C314], widget_inspector._Location);
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C311 || CT.C311,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 44,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 73,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C316() {
      return C316 = dart.constList([C317 || CT.C317, C318 || CT.C318], widget_inspector._Location);
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C316 || CT.C316,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 25,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C320() {
      return C320 = dart.constList([C321 || CT.C321, C322 || CT.C322], widget_inspector._Location);
    },
    get C319() {
      return C319 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C320 || CT.C320,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 29,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C324() {
      return C324 = dart.constList([C325 || CT.C325, C326 || CT.C326, C327 || CT.C327], widget_inspector._Location);
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C324 || CT.C324,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 187,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 25,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C329() {
      return C329 = dart.constList([C330 || CT.C330, C331 || CT.C331], widget_inspector._Location);
    },
    get C328() {
      return C328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C329 || CT.C329,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C333() {
      return C333 = dart.constList([C334 || CT.C334], widget_inspector._Location);
    },
    get C332() {
      return C332 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C333 || CT.C333,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 19,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C336() {
      return C336 = dart.constList([C337 || CT.C337, C338 || CT.C338], widget_inspector._Location);
    },
    get C335() {
      return C335 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C336 || CT.C336,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 52,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C340() {
      return C340 = dart.constList([C341 || CT.C341], widget_inspector._Location);
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C340 || CT.C340,
        [_Location_name]: null,
        [_Location_column]: 46,
        [_Location_line]: 215,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C344() {
      return C344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 33,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 33,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C343() {
      return C343 = dart.constList([C344 || CT.C344, C345 || CT.C345, C346 || CT.C346], widget_inspector._Location);
    },
    get C342() {
      return C342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C343 || CT.C343,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 212,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C349() {
      return C349 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 36,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 49,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C348() {
      return C348 = dart.constList([C349 || CT.C349, C350 || CT.C350], widget_inspector._Location);
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C348 || CT.C348,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 217,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C353() {
      return C353 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 29,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C352() {
      return C352 = dart.constList([C353 || CT.C353], widget_inspector._Location);
    },
    get C351() {
      return C351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C352 || CT.C352,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 210,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 27,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C355() {
      return C355 = dart.constList([C356 || CT.C356, C357 || CT.C357, C358 || CT.C358], widget_inspector._Location);
    },
    get C354() {
      return C354 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C355 || CT.C355,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 202,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C361() {
      return C361 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 25,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C360() {
      return C360 = dart.constList([C361 || CT.C361, C362 || CT.C362], widget_inspector._Location);
    },
    get C359() {
      return C359 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C360 || CT.C360,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 198,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 15,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C366() {
      return C366 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 15,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C367() {
      return C367 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 15,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C364() {
      return C364 = dart.constList([C365 || CT.C365, C366 || CT.C366, C367 || CT.C367, C368 || CT.C368], widget_inspector._Location);
    },
    get C363() {
      return C363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C364 || CT.C364,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 43,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 15,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C370() {
      return C370 = dart.constList([C371 || CT.C371, C372 || CT.C372], widget_inspector._Location);
    },
    get C369() {
      return C369 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C370 || CT.C370,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C375() {
      return C375 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C376() {
      return C376 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "offstage",
        [_Location_column]: 35,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C374() {
      return C374 = dart.constList([C375 || CT.C375, C376 || CT.C376], widget_inspector._Location);
    },
    get C373() {
      return C373 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C374 || CT.C374,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C379() {
      return C379 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C380() {
      return C380 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "preferredSize",
        [_Location_column]: 13,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C378() {
      return C378 = dart.constList([C379 || CT.C379, C380 || CT.C380], widget_inspector._Location);
    },
    get C377() {
      return C377 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C378 || CT.C378,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C383() {
      return C383 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C384() {
      return C384 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 17,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C382() {
      return C382 = dart.constList([C383 || CT.C383, C384 || CT.C384], widget_inspector._Location);
    },
    get C381() {
      return C381 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C382 || CT.C382,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 232,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C387() {
      return C387 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "offstage",
        [_Location_column]: 15,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C388() {
      return C388 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C386() {
      return C386 = dart.constList([C387 || CT.C387, C388 || CT.C388], widget_inspector._Location);
    },
    get C385() {
      return C385 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C386 || CT.C386,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 230,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 22,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C390() {
      return C390 = dart.constList([C391 || CT.C391], widget_inspector._Location);
    },
    get C389() {
      return C389 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C390 || CT.C390,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 237,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C394() {
      return C394 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C393() {
      return C393 = dart.constList([C394 || CT.C394], widget_inspector._Location);
    },
    get C392() {
      return C392 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C393 || CT.C393,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 228,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C397() {
      return C397 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C398() {
      return C398 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C399() {
      return C399 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C396() {
      return C396 = dart.constList([C397 || CT.C397, C398 || CT.C398, C399 || CT.C399], widget_inspector._Location);
    },
    get C395() {
      return C395 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C396 || CT.C396,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C402() {
      return C402 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 9,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C403() {
      return C403 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C401() {
      return C401 = dart.constList([C402 || CT.C402, C403 || CT.C403], widget_inspector._Location);
    },
    get C400() {
      return C400 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C401 || CT.C401,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C406() {
      return C406 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keywrod",
        [_Location_column]: 39,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C405() {
      return C405 = dart.constList([C406 || CT.C406], widget_inspector._Location);
    },
    get C404() {
      return C404 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C405 || CT.C405,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 251,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_main.dart"
      });
    },
    get C409() {
      return C409 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C410() {
      return C410 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onNotification",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C408() {
      return C408 = dart.constList([C409 || CT.C409, C410 || CT.C410], widget_inspector._Location);
    },
    get C407() {
      return C407 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C408 || CT.C408,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C413() {
      return C413 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C412() {
      return C412 = dart.constList([C413 || CT.C413], widget_inspector._Location);
    },
    get C411() {
      return C411 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C412 || CT.C412,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C416() {
      return C416 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 9,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C417() {
      return C417 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C415() {
      return C415 = dart.constList([C416 || CT.C416, C417 || CT.C417], widget_inspector._Location);
    },
    get C414() {
      return C414 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C415 || CT.C415,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C420() {
      return C420 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 36,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C419() {
      return C419 = dart.constList([C420 || CT.C420], widget_inspector._Location);
    },
    get C418() {
      return C418 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C419 || CT.C419,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C423() {
      return C423 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C424() {
      return C424 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C422() {
      return C422 = dart.constList([C423 || CT.C423, C424 || CT.C424], widget_inspector._Location);
    },
    get C421() {
      return C421 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C422 || CT.C422,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C427() {
      return C427 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C428() {
      return C428 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C426() {
      return C426 = dart.constList([C427 || CT.C427, C428 || CT.C428], widget_inspector._Location);
    },
    get C425() {
      return C425 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C426 || CT.C426,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C431() {
      return C431 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 21,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C432() {
      return C432 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C430() {
      return C430 = dart.constList([C431 || CT.C431, C432 || CT.C432], widget_inspector._Location);
    },
    get C429() {
      return C429 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C430 || CT.C430,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C435() {
      return C435 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C436() {
      return C436 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLoad",
        [_Location_column]: 19,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C437() {
      return C437 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "footer",
        [_Location_column]: 19,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C434() {
      return C434 = dart.constList([C435 || CT.C435, C436 || CT.C436, C437 || CT.C437], widget_inspector._Location);
    },
    get C433() {
      return C433 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C434 || CT.C434,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C440() {
      return C440 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 43,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C441() {
      return C441 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C439() {
      return C439 = dart.constList([C440 || CT.C440, C441 || CT.C441], widget_inspector._Location);
    },
    get C438() {
      return C438 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C439 || CT.C439,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C444() {
      return C444 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C445() {
      return C445 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 21,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C446() {
      return C446 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 21,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C447() {
      return C447 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C443() {
      return C443 = dart.constList([C444 || CT.C444, C445 || CT.C445, C446 || CT.C446, C447 || CT.C447], widget_inspector._Location);
    },
    get C442() {
      return C442 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C443 || CT.C443,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C450() {
      return C450 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 48,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C449() {
      return C449 = dart.constList([C450 || CT.C450], widget_inspector._Location);
    },
    get C448() {
      return C448 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C449 || CT.C449,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C453() {
      return C453 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 49,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C454() {
      return C454 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C452() {
      return C452 = dart.constList([C453 || CT.C453, C454 || CT.C454], widget_inspector._Location);
    },
    get C451() {
      return C451 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C452 || CT.C452,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 156,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C457() {
      return C457 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C458() {
      return C458 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 25,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C459() {
      return C459 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 25,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C460() {
      return C460 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 25,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C461() {
      return C461 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C456() {
      return C456 = dart.constList([C457 || CT.C457, C458 || CT.C458, C459 || CT.C459, C460 || CT.C460, C461 || CT.C461], widget_inspector._Location);
    },
    get C455() {
      return C455 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C456 || CT.C456,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C464() {
      return C464 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C463() {
      return C463 = dart.constList([C464 || CT.C464], widget_inspector._Location);
    },
    get C462() {
      return C462 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C463 || CT.C463,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C467() {
      return C467 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C466() {
      return C466 = dart.constList([C467 || CT.C467], widget_inspector._Location);
    },
    get C465() {
      return C465 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C466 || CT.C466,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C470() {
      return C470 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C471() {
      return C471 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C472() {
      return C472 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C473() {
      return C473 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C474() {
      return C474 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C469() {
      return C469 = dart.constList([C470 || CT.C470, C471 || CT.C471, C472 || CT.C472, C473 || CT.C473, C474 || CT.C474], widget_inspector._Location);
    },
    get C468() {
      return C468 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C469 || CT.C469,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C477() {
      return C477 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C478() {
      return C478 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C476() {
      return C476 = dart.constList([C477 || CT.C477, C478 || CT.C478], widget_inspector._Location);
    },
    get C475() {
      return C475 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C476 || CT.C476,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C481() {
      return C481 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "spacing",
        [_Location_column]: 11,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C482() {
      return C482 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C480() {
      return C480 = dart.constList([C481 || CT.C481, C482 || CT.C482], widget_inspector._Location);
    },
    get C479() {
      return C479 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C480 || CT.C480,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C485() {
      return C485 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 11,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C484() {
      return C484 = dart.constList([C485 || CT.C485], widget_inspector._Location);
    },
    get C483() {
      return C483 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C484 || CT.C484,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_sort.dart"
      });
    },
    get C488() {
      return C488 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C487() {
      return C487 = dart.constList([C488 || CT.C488], widget_inspector._Location);
    },
    get C486() {
      return C486 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C487 || CT.C487,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C491() {
      return C491 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C492() {
      return C492 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C490() {
      return C490 = dart.constList([C491 || CT.C491, C492 || CT.C492], widget_inspector._Location);
    },
    get C489() {
      return C489 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C490 || CT.C490,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C495() {
      return C495 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C496() {
      return C496 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 23,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C497() {
      return C497 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C494() {
      return C494 = dart.constList([C495 || CT.C495, C496 || CT.C496, C497 || CT.C497], widget_inspector._Location);
    },
    get C493() {
      return C493 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C494 || CT.C494,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C500() {
      return C500 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C501() {
      return C501 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 46,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C502() {
      return C502 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 74,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C499() {
      return C499 = dart.constList([C500 || CT.C500, C501 || CT.C501, C502 || CT.C502], widget_inspector._Location);
    },
    get C498() {
      return C498 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C499 || CT.C499,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C505() {
      return C505 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 23,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C506() {
      return C506 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C504() {
      return C504 = dart.constList([C505 || CT.C505, C506 || CT.C506], widget_inspector._Location);
    },
    get C503() {
      return C503 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C504 || CT.C504,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C509() {
      return C509 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C508() {
      return C508 = dart.constList([C509 || CT.C509], widget_inspector._Location);
    },
    get C507() {
      return C507 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C508 || CT.C508,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C512() {
      return C512 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 17,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C513() {
      return C513 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C514() {
      return C514 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C515() {
      return C515 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C516() {
      return C516 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C517() {
      return C517 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C511() {
      return C511 = dart.constList([C512 || CT.C512, C513 || CT.C513, C514 || CT.C514, C515 || CT.C515, C516 || CT.C516, C517 || CT.C517], widget_inspector._Location);
    },
    get C510() {
      return C510 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C511 || CT.C511,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C520() {
      return C520 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 75,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C521() {
      return C521 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 81,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C522() {
      return C522 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 99,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C523() {
      return C523 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 134,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C519() {
      return C519 = dart.constList([C520 || CT.C520, C521 || CT.C521, C522 || CT.C522, C523 || CT.C523], widget_inspector._Location);
    },
    get C518() {
      return C518 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C519 || CT.C519,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C526() {
      return C526 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C525() {
      return C525 = dart.constList([C526 || CT.C526], widget_inspector._Location);
    },
    get C524() {
      return C524 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C525 || CT.C525,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C529() {
      return C529 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 55,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C530() {
      return C530 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 35,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C531() {
      return C531 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 35,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C528() {
      return C528 = dart.constList([C529 || CT.C529, C530 || CT.C530, C531 || CT.C531], widget_inspector._Location);
    },
    get C527() {
      return C527 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C528 || CT.C528,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C534() {
      return C534 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 33,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C535() {
      return C535 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 33,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C536() {
      return C536 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 33,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C537() {
      return C537 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C533() {
      return C533 = dart.constList([C534 || CT.C534, C535 || CT.C535, C536 || CT.C536, C537 || CT.C537], widget_inspector._Location);
    },
    get C532() {
      return C532 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C533 || CT.C533,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C540() {
      return C540 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 70,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C541() {
      return C541 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 35,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C542() {
      return C542 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 35,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C539() {
      return C539 = dart.constList([C540 || CT.C540, C541 || CT.C541, C542 || CT.C542], widget_inspector._Location);
    },
    get C538() {
      return C538 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C539 || CT.C539,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C545() {
      return C545 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 33,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C546() {
      return C546 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 33,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C547() {
      return C547 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 33,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C548() {
      return C548 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C544() {
      return C544 = dart.constList([C545 || CT.C545, C546 || CT.C546, C547 || CT.C547, C548 || CT.C548], widget_inspector._Location);
    },
    get C543() {
      return C543 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C544 || CT.C544,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C551() {
      return C551 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 69,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C552() {
      return C552 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C550() {
      return C550 = dart.constList([C551 || CT.C551, C552 || CT.C552], widget_inspector._Location);
    },
    get C549() {
      return C549 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C550 || CT.C550,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C555() {
      return C555 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 33,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C556() {
      return C556 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 33,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C557() {
      return C557 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 33,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C558() {
      return C558 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C554() {
      return C554 = dart.constList([C555 || CT.C555, C556 || CT.C556, C557 || CT.C557, C558 || CT.C558], widget_inspector._Location);
    },
    get C553() {
      return C553 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C554 || CT.C554,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C561() {
      return C561 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 29,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C560() {
      return C560 = dart.constList([C561 || CT.C561], widget_inspector._Location);
    },
    get C559() {
      return C559 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C560 || CT.C560,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C564() {
      return C564 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C565() {
      return C565 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C563() {
      return C563 = dart.constList([C564 || CT.C564, C565 || CT.C565], widget_inspector._Location);
    },
    get C562() {
      return C562 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C563 || CT.C563,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C568() {
      return C568 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 25,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C569() {
      return C569 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C567() {
      return C567 = dart.constList([C568 || CT.C568, C569 || CT.C569], widget_inspector._Location);
    },
    get C566() {
      return C566 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C567 || CT.C567,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C572() {
      return C572 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 19,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C573() {
      return C573 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 19,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C574() {
      return C574 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 19,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C575() {
      return C575 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 19,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C571() {
      return C571 = dart.constList([C572 || CT.C572, C573 || CT.C573, C574 || CT.C574, C575 || CT.C575], widget_inspector._Location);
    },
    get C570() {
      return C570 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C571 || CT.C571,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C578() {
      return C578 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C579() {
      return C579 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C580() {
      return C580 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C581() {
      return C581 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C577() {
      return C577 = dart.constList([C578 || CT.C578, C579 || CT.C579, C580 || CT.C580, C581 || CT.C581], widget_inspector._Location);
    },
    get C576() {
      return C576 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C577 || CT.C577,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C582() {
      return C582 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C585() {
      return C585 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C584() {
      return C584 = dart.constList([C585 || CT.C585], widget_inspector._Location);
    },
    get C583() {
      return C583 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C584 || CT.C584,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C588() {
      return C588 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C589() {
      return C589 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C590() {
      return C590 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C591() {
      return C591 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C592() {
      return C592 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C587() {
      return C587 = dart.constList([C588 || CT.C588, C589 || CT.C589, C590 || CT.C590, C591 || CT.C591, C592 || CT.C592], widget_inspector._Location);
    },
    get C586() {
      return C586 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C587 || CT.C587,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C595() {
      return C595 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C594() {
      return C594 = dart.constList([C595 || CT.C595], widget_inspector._Location);
    },
    get C593() {
      return C593 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C594 || CT.C594,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 193,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C598() {
      return C598 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C599() {
      return C599 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C600() {
      return C600 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C601() {
      return C601 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C597() {
      return C597 = dart.constList([C598 || CT.C598, C599 || CT.C599, C600 || CT.C600, C601 || CT.C601], widget_inspector._Location);
    },
    get C596() {
      return C596 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C597 || CT.C597,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 189,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C604() {
      return C604 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C603() {
      return C603 = dart.constList([C604 || CT.C604], widget_inspector._Location);
    },
    get C602() {
      return C602 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C603 || CT.C603,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C607() {
      return C607 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C608() {
      return C608 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C609() {
      return C609 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C610() {
      return C610 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C606() {
      return C606 = dart.constList([C607 || CT.C607, C608 || CT.C608, C609 || CT.C609, C610 || CT.C610], widget_inspector._Location);
    },
    get C605() {
      return C605 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C606 || CT.C606,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 203,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C613() {
      return C613 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 45,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C612() {
      return C612 = dart.constList([C613 || CT.C613], widget_inspector._Location);
    },
    get C611() {
      return C611 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C612 || CT.C612,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 234,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C616() {
      return C616 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C617() {
      return C617 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C615() {
      return C615 = dart.constList([C616 || CT.C616, C617 || CT.C617], widget_inspector._Location);
    },
    get C614() {
      return C614 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C615 || CT.C615,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 232,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C620() {
      return C620 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C621() {
      return C621 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C619() {
      return C619 = dart.constList([C620 || CT.C620, C621 || CT.C621], widget_inspector._Location);
    },
    get C618() {
      return C618 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C619 || CT.C619,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 238,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C624() {
      return C624 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C625() {
      return C625 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C623() {
      return C623 = dart.constList([C624 || CT.C624, C625 || CT.C625], widget_inspector._Location);
    },
    get C622() {
      return C622 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C623 || CT.C623,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 236,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C628() {
      return C628 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C627() {
      return C627 = dart.constList([C628 || CT.C628], widget_inspector._Location);
    },
    get C626() {
      return C626 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C627 || CT.C627,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 230,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C631() {
      return C631 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 30,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C632() {
      return C632 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 21,
        [_Location_line]: 252,
        [_Location_file]: null
      });
    },
    get C633() {
      return C633 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C630() {
      return C630 = dart.constList([C631 || CT.C631, C632 || CT.C632, C633 || CT.C633], widget_inspector._Location);
    },
    get C629() {
      return C629 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C630 || CT.C630,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 250,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C636() {
      return C636 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 15,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C637() {
      return C637 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C635() {
      return C635 = dart.constList([C636 || CT.C636, C637 || CT.C637], widget_inspector._Location);
    },
    get C634() {
      return C634 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C635 || CT.C635,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 248,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C640() {
      return C640 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 56,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C641() {
      return C641 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 62,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C642() {
      return C642 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 80,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C639() {
      return C639 = dart.constList([C640 || CT.C640, C641 || CT.C641, C642 || CT.C642], widget_inspector._Location);
    },
    get C638() {
      return C638 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C639 || CT.C639,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 267,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C645() {
      return C645 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C646() {
      return C646 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C644() {
      return C644 = dart.constList([C645 || CT.C645, C646 || CT.C646], widget_inspector._Location);
    },
    get C643() {
      return C643 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C644 || CT.C644,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 262,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C649() {
      return C649 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 56,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C650() {
      return C650 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 62,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C651() {
      return C651 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 80,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C648() {
      return C648 = dart.constList([C649 || CT.C649, C650 || CT.C650, C651 || CT.C651], widget_inspector._Location);
    },
    get C647() {
      return C647 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C648 || CT.C648,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 285,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C654() {
      return C654 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 21,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C655() {
      return C655 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 281,
        [_Location_file]: null
      });
    },
    get C656() {
      return C656 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C653() {
      return C653 = dart.constList([C654 || CT.C654, C655 || CT.C655, C656 || CT.C656], widget_inspector._Location);
    },
    get C652() {
      return C652 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C653 || CT.C653,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 279,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C659() {
      return C659 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C658() {
      return C658 = dart.constList([C659 || CT.C659], widget_inspector._Location);
    },
    get C657() {
      return C657 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C658 || CT.C658,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 260,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C662() {
      return C662 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 260,
        [_Location_file]: null
      });
    },
    get C661() {
      return C661 = dart.constList([C662 || CT.C662], widget_inspector._Location);
    },
    get C660() {
      return C660 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C661 || CT.C661,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 259,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C665() {
      return C665 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C664() {
      return C664 = dart.constList([C665 || CT.C665], widget_inspector._Location);
    },
    get C663() {
      return C663 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C664 || CT.C664,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 228,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C668() {
      return C668 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C669() {
      return C669 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 300,
        [_Location_file]: null
      });
    },
    get C667() {
      return C667 = dart.constList([C668 || CT.C668, C669 || CT.C669], widget_inspector._Location);
    },
    get C666() {
      return C666 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C667 || CT.C667,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 227,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C672() {
      return C672 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C673() {
      return C673 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C674() {
      return C674 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C675() {
      return C675 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C676() {
      return C676 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C677() {
      return C677 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C671() {
      return C671 = dart.constList([C672 || CT.C672, C673 || CT.C673, C674 || CT.C674, C675 || CT.C675, C676 || CT.C676, C677 || CT.C677], widget_inspector._Location);
    },
    get C670() {
      return C670 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C671 || CT.C671,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 217,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C680() {
      return C680 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 317,
        [_Location_file]: null
      });
    },
    get C679() {
      return C679 = dart.constList([C680 || CT.C680], widget_inspector._Location);
    },
    get C678() {
      return C678 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C679 || CT.C679,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 316,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C683() {
      return C683 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 309,
        [_Location_file]: null
      });
    },
    get C684() {
      return C684 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 310,
        [_Location_file]: null
      });
    },
    get C685() {
      return C685 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 311,
        [_Location_file]: null
      });
    },
    get C686() {
      return C686 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 312,
        [_Location_file]: null
      });
    },
    get C687() {
      return C687 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 316,
        [_Location_file]: null
      });
    },
    get C682() {
      return C682 = dart.constList([C683 || CT.C683, C684 || CT.C684, C685 || CT.C685, C686 || CT.C686, C687 || CT.C687], widget_inspector._Location);
    },
    get C681() {
      return C681 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C682 || CT.C682,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 308,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C690() {
      return C690 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 332,
        [_Location_file]: null
      });
    },
    get C689() {
      return C689 = dart.constList([C690 || CT.C690], widget_inspector._Location);
    },
    get C688() {
      return C688 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C689 || CT.C689,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 332,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C693() {
      return C693 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 329,
        [_Location_file]: null
      });
    },
    get C694() {
      return C694 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 330,
        [_Location_file]: null
      });
    },
    get C695() {
      return C695 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 331,
        [_Location_file]: null
      });
    },
    get C696() {
      return C696 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 332,
        [_Location_file]: null
      });
    },
    get C692() {
      return C692 = dart.constList([C693 || CT.C693, C694 || CT.C694, C695 || CT.C695, C696 || CT.C696], widget_inspector._Location);
    },
    get C691() {
      return C691 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C692 || CT.C692,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 328,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C699() {
      return C699 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 34,
        [_Location_line]: 340,
        [_Location_file]: null
      });
    },
    get C698() {
      return C698 = dart.constList([C699 || CT.C699], widget_inspector._Location);
    },
    get C697() {
      return C697 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C698 || CT.C698,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 340,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C702() {
      return C702 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 338,
        [_Location_file]: null
      });
    },
    get C703() {
      return C703 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 339,
        [_Location_file]: null
      });
    },
    get C704() {
      return C704 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 340,
        [_Location_file]: null
      });
    },
    get C701() {
      return C701 = dart.constList([C702 || CT.C702, C703 || CT.C703, C704 || CT.C704], widget_inspector._Location);
    },
    get C700() {
      return C700 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C701 || CT.C701,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 337,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C707() {
      return C707 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 343,
        [_Location_file]: null
      });
    },
    get C708() {
      return C708 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 344,
        [_Location_file]: null
      });
    },
    get C709() {
      return C709 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 345,
        [_Location_file]: null
      });
    },
    get C710() {
      return C710 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C706() {
      return C706 = dart.constList([C707 || CT.C707, C708 || CT.C708, C709 || CT.C709, C710 || CT.C710], widget_inspector._Location);
    },
    get C705() {
      return C705 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C706 || CT.C706,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 342,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C713() {
      return C713 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 348,
        [_Location_file]: null
      });
    },
    get C714() {
      return C714 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "direction",
        [_Location_column]: 15,
        [_Location_line]: 349,
        [_Location_file]: null
      });
    },
    get C715() {
      return C715 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 15,
        [_Location_line]: 350,
        [_Location_file]: null
      });
    },
    get C716() {
      return C716 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onItemTap",
        [_Location_column]: 15,
        [_Location_line]: 351,
        [_Location_file]: null
      });
    },
    get C712() {
      return C712 = dart.constList([C713 || CT.C713, C714 || CT.C714, C715 || CT.C715, C716 || CT.C716], widget_inspector._Location);
    },
    get C711() {
      return C711 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C712 || CT.C712,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 347,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C719() {
      return C719 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 20,
        [_Location_line]: 336,
        [_Location_file]: null
      });
    },
    get C718() {
      return C718 = dart.constList([C719 || CT.C719], widget_inspector._Location);
    },
    get C717() {
      return C717 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C718 || CT.C718,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 336,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C722() {
      return C722 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 335,
        [_Location_file]: null
      });
    },
    get C723() {
      return C723 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 336,
        [_Location_file]: null
      });
    },
    get C721() {
      return C721 = dart.constList([C722 || CT.C722, C723 || CT.C723], widget_inspector._Location);
    },
    get C720() {
      return C720 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C721 || CT.C721,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 334,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C726() {
      return C726 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 48,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C727() {
      return C727 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 54,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C728() {
      return C728 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 72,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C729() {
      return C729 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 107,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C725() {
      return C725 = dart.constList([C726 || CT.C726, C727 || CT.C727, C728 || CT.C728, C729 || CT.C729], widget_inspector._Location);
    },
    get C724() {
      return C724 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C725 || CT.C725,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 375,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C732() {
      return C732 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C731() {
      return C731 = dart.constList([C732 || CT.C732], widget_inspector._Location);
    },
    get C730() {
      return C730 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C731 || CT.C731,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 374,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C735() {
      return C735 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 389,
        [_Location_file]: null
      });
    },
    get C736() {
      return C736 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 390,
        [_Location_file]: null
      });
    },
    get C734() {
      return C734 = dart.constList([C735 || CT.C735, C736 || CT.C736], widget_inspector._Location);
    },
    get C733() {
      return C733 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C734 || CT.C734,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 388,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C739() {
      return C739 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 23,
        [_Location_line]: 387,
        [_Location_file]: null
      });
    },
    get C740() {
      return C740 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 388,
        [_Location_file]: null
      });
    },
    get C738() {
      return C738 = dart.constList([C739 || CT.C739, C740 || CT.C740], widget_inspector._Location);
    },
    get C737() {
      return C737 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C738 || CT.C738,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 386,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C743() {
      return C743 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 373,
        [_Location_file]: null
      });
    },
    get C742() {
      return C742 = dart.constList([C743 || CT.C743], widget_inspector._Location);
    },
    get C741() {
      return C741 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C742 || CT.C742,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 372,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C746() {
      return C746 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 17,
        [_Location_line]: 371,
        [_Location_file]: null
      });
    },
    get C747() {
      return C747 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 372,
        [_Location_file]: null
      });
    },
    get C745() {
      return C745 = dart.constList([C746 || CT.C746, C747 || CT.C747], widget_inspector._Location);
    },
    get C744() {
      return C744 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C745 || CT.C745,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 370,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C750() {
      return C750 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C751() {
      return C751 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 370,
        [_Location_file]: null
      });
    },
    get C749() {
      return C749 = dart.constList([C750 || CT.C750, C751 || CT.C751], widget_inspector._Location);
    },
    get C748() {
      return C748 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C749 || CT.C749,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 366,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C754() {
      return C754 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 9,
        [_Location_line]: 363,
        [_Location_file]: null
      });
    },
    get C755() {
      return C755 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 9,
        [_Location_line]: 364,
        [_Location_file]: null
      });
    },
    get C756() {
      return C756 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 9,
        [_Location_line]: 365,
        [_Location_file]: null
      });
    },
    get C753() {
      return C753 = dart.constList([C754 || CT.C754, C755 || CT.C755, C756 || CT.C756], widget_inspector._Location);
    },
    get C752() {
      return C752 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C753 || CT.C753,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 362,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C759() {
      return C759 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 361,
        [_Location_file]: null
      });
    },
    get C760() {
      return C760 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 362,
        [_Location_file]: null
      });
    },
    get C758() {
      return C758 = dart.constList([C759 || CT.C759, C760 || CT.C760], widget_inspector._Location);
    },
    get C757() {
      return C757 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C758 || CT.C758,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 360,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_header.dart"
      });
    },
    get C761() {
      return C761 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_banner.dart"
      });
    },
    get C764() {
      return C764 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 24,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C765() {
      return C765 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 19,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C763() {
      return C763 = dart.constList([C764 || CT.C764, C765 || CT.C765], widget_inspector._Location);
    },
    get C762() {
      return C762 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C763 || CT.C763,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_banner.dart"
      });
    },
    get C768() {
      return C768 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C769() {
      return C769 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C767() {
      return C767 = dart.constList([C768 || CT.C768, C769 || CT.C769], widget_inspector._Location);
    },
    get C766() {
      return C766 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C767 || CT.C767,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_banner.dart"
      });
    },
    get C772() {
      return C772 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C771() {
      return C771 = dart.constList([C772 || CT.C772], widget_inspector._Location);
    },
    get C770() {
      return C770 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C771 || CT.C771,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_banner.dart"
      });
    },
    get C775() {
      return C775 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C776() {
      return C776 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "viewportFraction",
        [_Location_column]: 9,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C777() {
      return C777 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "aspectRatio",
        [_Location_column]: 9,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C778() {
      return C778 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autoPlay",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C774() {
      return C774 = dart.constList([C775 || CT.C775, C776 || CT.C776, C777 || CT.C777, C778 || CT.C778], widget_inspector._Location);
    },
    get C773() {
      return C773 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C774 || CT.C774,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_banner.dart"
      });
    },
    get C781() {
      return C781 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C780() {
      return C780 = dart.constList([C781 || CT.C781, C265 || CT.C265], widget_inspector._Location);
    },
    get C779() {
      return C779 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C780 || CT.C780,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_banner.dart"
      });
    },
    get C784() {
      return C784 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 9,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C785() {
      return C785 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C783() {
      return C783 = dart.constList([C784 || CT.C784, C785 || CT.C785], widget_inspector._Location);
    },
    get C782() {
      return C782 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C783 || CT.C783,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C788() {
      return C788 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C789() {
      return C789 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C787() {
      return C787 = dart.constList([C788 || CT.C788, C789 || CT.C789], widget_inspector._Location);
    },
    get C786() {
      return C786 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C787 || CT.C787,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C792() {
      return C792 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 50,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C791() {
      return C791 = dart.constList([C792 || CT.C792], widget_inspector._Location);
    },
    get C790() {
      return C790 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C791 || CT.C791,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C795() {
      return C795 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C796() {
      return C796 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 31,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C797() {
      return C797 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C794() {
      return C794 = dart.constList([C795 || CT.C795, C796 || CT.C796, C797 || CT.C797], widget_inspector._Location);
    },
    get C793() {
      return C793 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C794 || CT.C794,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C800() {
      return C800 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 34,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C801() {
      return C801 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 47,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C799() {
      return C799 = dart.constList([C800 || CT.C800, C801 || CT.C801], widget_inspector._Location);
    },
    get C798() {
      return C798 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C799 || CT.C799,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C804() {
      return C804 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C803() {
      return C803 = dart.constList([C804 || CT.C804], widget_inspector._Location);
    },
    get C802() {
      return C802 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C803 || CT.C803,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C807() {
      return C807 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 25,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C808() {
      return C808 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C809() {
      return C809 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 25,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C810() {
      return C810 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C806() {
      return C806 = dart.constList([C807 || CT.C807, C808 || CT.C808, C809 || CT.C809, C810 || CT.C810], widget_inspector._Location);
    },
    get C805() {
      return C805 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C806 || CT.C806,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C813() {
      return C813 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 23,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C814() {
      return C814 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C812() {
      return C812 = dart.constList([C813 || CT.C813, C814 || CT.C814], widget_inspector._Location);
    },
    get C811() {
      return C811 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C812 || CT.C812,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C817() {
      return C817 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C816() {
      return C816 = dart.constList([C817 || CT.C817], widget_inspector._Location);
    },
    get C815() {
      return C815 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C816 || CT.C816,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C820() {
      return C820 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "contentHeight",
        [_Location_column]: 13,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C821() {
      return C821 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "statusBarColor",
        [_Location_column]: 13,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C822() {
      return C822 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "contentChild",
        [_Location_column]: 13,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C819() {
      return C819 = dart.constList([C820 || CT.C820, C821 || CT.C821, C822 || CT.C822], widget_inspector._Location);
    },
    get C818() {
      return C818 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C819 || CT.C819,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C825() {
      return C825 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 46,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C824() {
      return C824 = dart.constList([C825 || CT.C825], widget_inspector._Location);
    },
    get C823() {
      return C823 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C824 || CT.C824,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C828() {
      return C828 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 15,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C829() {
      return C829 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 15,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C827() {
      return C827 = dart.constList([C828 || CT.C828, C829 || CT.C829], widget_inspector._Location);
    },
    get C826() {
      return C826 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C827 || CT.C827,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C832() {
      return C832 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 11,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C833() {
      return C833 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 11,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C831() {
      return C831 = dart.constList([C832 || CT.C832, C833 || CT.C833], widget_inspector._Location);
    },
    get C830() {
      return C830 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C831 || CT.C831,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C836() {
      return C836 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C835() {
      return C835 = dart.constList([C836 || CT.C836], widget_inspector._Location);
    },
    get C834() {
      return C834 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C835 || CT.C835,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C839() {
      return C839 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C840() {
      return C840 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 25,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C838() {
      return C838 = dart.constList([C458 || CT.C458, C839 || CT.C839, C840 || CT.C840], widget_inspector._Location);
    },
    get C837() {
      return C837 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C838 || CT.C838,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C843() {
      return C843 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 23,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C844() {
      return C844 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C842() {
      return C842 = dart.constList([C843 || CT.C843, C844 || CT.C844], widget_inspector._Location);
    },
    get C841() {
      return C841 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C842 || CT.C842,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C847() {
      return C847 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C848() {
      return C848 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C846() {
      return C846 = dart.constList([C847 || CT.C847, C848 || CT.C848], widget_inspector._Location);
    },
    get C845() {
      return C845 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C846 || CT.C846,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C851() {
      return C851 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C852() {
      return C852 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C853() {
      return C853 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C854() {
      return C854 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C850() {
      return C850 = dart.constList([C851 || CT.C851, C852 || CT.C852, C853 || CT.C853, C854 || CT.C854], widget_inspector._Location);
    },
    get C849() {
      return C849 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C850 || CT.C850,
        [_Location_name]: null,
        [_Location_column]: 10,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C857() {
      return C857 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C856() {
      return C856 = dart.constList([C857 || CT.C857], widget_inspector._Location);
    },
    get C855() {
      return C855 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C856 || CT.C856,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C858() {
      return C858 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C861() {
      return C861 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "list",
        [_Location_column]: 29,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C860() {
      return C860 = dart.constList([C861 || CT.C861], widget_inspector._Location);
    },
    get C859() {
      return C859 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C860 || CT.C860,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C862() {
      return C862 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C865() {
      return C865 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C864() {
      return C864 = dart.constList([C865 || CT.C865], widget_inspector._Location);
    },
    get C863() {
      return C863 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C864 || CT.C864,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C868() {
      return C868 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C867() {
      return C867 = dart.constList([C868 || CT.C868], widget_inspector._Location);
    },
    get C866() {
      return C866 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C867 || CT.C867,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C871() {
      return C871 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C872() {
      return C872 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C873() {
      return C873 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C870() {
      return C870 = dart.constList([C871 || CT.C871, C872 || CT.C872, C873 || CT.C873], widget_inspector._Location);
    },
    get C869() {
      return C869 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C870 || CT.C870,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 210,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C874() {
      return C874 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 222,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C877() {
      return C877 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 33,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C878() {
      return C878 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 23,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C879() {
      return C879 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C876() {
      return C876 = dart.constList([C877 || CT.C877, C878 || CT.C878, C879 || CT.C879], widget_inspector._Location);
    },
    get C875() {
      return C875 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C876 || CT.C876,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 236,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C882() {
      return C882 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 242,
        [_Location_file]: null
      });
    },
    get C883() {
      return C883 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 23,
        [_Location_line]: 243,
        [_Location_file]: null
      });
    },
    get C884() {
      return C884 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 23,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C885() {
      return C885 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C881() {
      return C881 = dart.constList([C882 || CT.C882, C883 || CT.C883, C884 || CT.C884, C885 || CT.C885], widget_inspector._Location);
    },
    get C880() {
      return C880 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C881 || CT.C881,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 241,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C888() {
      return C888 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C887() {
      return C887 = dart.constList([C888 || CT.C888], widget_inspector._Location);
    },
    get C886() {
      return C886 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C887 || CT.C887,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 234,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C891() {
      return C891 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C892() {
      return C892 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C893() {
      return C893 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C894() {
      return C894 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 17,
        [_Location_line]: 233,
        [_Location_file]: null
      });
    },
    get C895() {
      return C895 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C890() {
      return C890 = dart.constList([C891 || CT.C891, C892 || CT.C892, C893 || CT.C893, C894 || CT.C894, C895 || CT.C895], widget_inspector._Location);
    },
    get C889() {
      return C889 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C890 || CT.C890,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 229,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C898() {
      return C898 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C899() {
      return C899 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C897() {
      return C897 = dart.constList([C898 || CT.C898, C899 || CT.C899], widget_inspector._Location);
    },
    get C896() {
      return C896 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C897 || CT.C897,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 225,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C902() {
      return C902 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C903() {
      return C903 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C904() {
      return C904 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 260,
        [_Location_file]: null
      });
    },
    get C901() {
      return C901 = dart.constList([C902 || CT.C902, C903 || CT.C903, C904 || CT.C904], widget_inspector._Location);
    },
    get C900() {
      return C900 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C901 || CT.C901,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 257,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C907() {
      return C907 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C906() {
      return C906 = dart.constList([C907 || CT.C907], widget_inspector._Location);
    },
    get C905() {
      return C905 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C906 || CT.C906,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C910() {
      return C910 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 9,
        [_Location_line]: 298,
        [_Location_file]: null
      });
    },
    get C911() {
      return C911 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 9,
        [_Location_line]: 299,
        [_Location_file]: null
      });
    },
    get C909() {
      return C909 = dart.constList([C910 || CT.C910, C911 || CT.C911], widget_inspector._Location);
    },
    get C908() {
      return C908 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C909 || CT.C909,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 297,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C914() {
      return C914 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C915() {
      return C915 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C916() {
      return C916 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 297,
        [_Location_file]: null
      });
    },
    get C913() {
      return C913 = dart.constList([C914 || CT.C914, C915 || CT.C915, C916 || CT.C916], widget_inspector._Location);
    },
    get C912() {
      return C912 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C913 || CT.C913,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 290,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C919() {
      return C919 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C920() {
      return C920 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 50,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C918() {
      return C918 = dart.constList([C919 || CT.C919, C920 || CT.C920], widget_inspector._Location);
    },
    get C917() {
      return C917 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C918 || CT.C918,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 326,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C923() {
      return C923 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 318,
        [_Location_file]: null
      });
    },
    get C924() {
      return C924 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 319,
        [_Location_file]: null
      });
    },
    get C925() {
      return C925 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 320,
        [_Location_file]: null
      });
    },
    get C926() {
      return C926 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C922() {
      return C922 = dart.constList([C923 || CT.C923, C924 || CT.C924, C925 || CT.C925, C926 || CT.C926], widget_inspector._Location);
    },
    get C921() {
      return C921 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C922 || CT.C922,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 317,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C929() {
      return C929 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 310,
        [_Location_file]: null
      });
    },
    get C930() {
      return C930 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 317,
        [_Location_file]: null
      });
    },
    get C928() {
      return C928 = dart.constList([C929 || CT.C929, C930 || CT.C930], widget_inspector._Location);
    },
    get C927() {
      return C927 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C928 || CT.C928,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 309,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/category_page.dart"
      });
    },
    get C933() {
      return C933 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C932() {
      return C932 = dart.constList([C933 || CT.C933], widget_inspector._Location);
    },
    get C931() {
      return C931 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C932 || CT.C932,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C936() {
      return C936 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C935() {
      return C935 = dart.constList([C936 || CT.C936], widget_inspector._Location);
    },
    get C934() {
      return C934 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C935 || CT.C935,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C939() {
      return C939 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C940() {
      return C940 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C941() {
      return C941 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C942() {
      return C942 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeToAvoidBottomInset",
        [_Location_column]: 7,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C938() {
      return C938 = dart.constList([C939 || CT.C939, C940 || CT.C940, C941 || CT.C941, C942 || CT.C942], widget_inspector._Location);
    },
    get C937() {
      return C937 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C938 || CT.C938,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C945() {
      return C945 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 13,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C944() {
      return C944 = dart.constList([C945 || CT.C945], widget_inspector._Location);
    },
    get C943() {
      return C943 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C944 || CT.C944,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C948() {
      return C948 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C949() {
      return C949 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C950() {
      return C950 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C947() {
      return C947 = dart.constList([C948 || CT.C948, C949 || CT.C949, C950 || CT.C950], widget_inspector._Location);
    },
    get C946() {
      return C946 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C947 || CT.C947,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C953() {
      return C953 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C954() {
      return C954 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C952() {
      return C952 = dart.constList([C953 || CT.C953, C954 || CT.C954], widget_inspector._Location);
    },
    get C951() {
      return C951 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C952 || CT.C952,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C957() {
      return C957 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C956() {
      return C956 = dart.constList([C957 || CT.C957, C417 || CT.C417], widget_inspector._Location);
    },
    get C955() {
      return C955 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C956 || CT.C956,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C960() {
      return C960 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C959() {
      return C959 = dart.constList([C960 || CT.C960], widget_inspector._Location);
    },
    get C958() {
      return C958 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C959 || CT.C959,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C963() {
      return C963 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C964() {
      return C964 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onRefresh",
        [_Location_column]: 19,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C965() {
      return C965 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLoad",
        [_Location_column]: 19,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C966() {
      return C966 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "footer",
        [_Location_column]: 19,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C962() {
      return C962 = dart.constList([C963 || CT.C963, C964 || CT.C964, C965 || CT.C965, C966 || CT.C966], widget_inspector._Location);
    },
    get C961() {
      return C961 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C962 || CT.C962,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C969() {
      return C969 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C968() {
      return C968 = dart.constList([C969 || CT.C969], widget_inspector._Location);
    },
    get C967() {
      return C967 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C968 || CT.C968,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C972() {
      return C972 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 11,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C971() {
      return C971 = dart.constList([C972 || CT.C972], widget_inspector._Location);
    },
    get C970() {
      return C970 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C971 || CT.C971,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C975() {
      return C975 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 53,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C974() {
      return C974 = dart.constList([C975 || CT.C975], widget_inspector._Location);
    },
    get C973() {
      return C973 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C974 || CT.C974,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C978() {
      return C978 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C979() {
      return C979 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 57,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C977() {
      return C977 = dart.constList([C978 || CT.C978, C979 || CT.C979], widget_inspector._Location);
    },
    get C976() {
      return C976 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C977 || CT.C977,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C982() {
      return C982 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C981() {
      return C981 = dart.constList([C982 || CT.C982], widget_inspector._Location);
    },
    get C980() {
      return C980 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C981 || CT.C981,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C985() {
      return C985 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C986() {
      return C986 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 33,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C987() {
      return C987 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 35,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C984() {
      return C984 = dart.constList([C985 || CT.C985, C986 || CT.C986, C987 || CT.C987], widget_inspector._Location);
    },
    get C983() {
      return C983 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C984 || CT.C984,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C990() {
      return C990 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C989() {
      return C989 = dart.constList([C990 || CT.C990], widget_inspector._Location);
    },
    get C988() {
      return C988 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C989 || CT.C989,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C993() {
      return C993 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 29,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C994() {
      return C994 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 29,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C992() {
      return C992 = dart.constList([C993 || CT.C993, C994 || CT.C994], widget_inspector._Location);
    },
    get C991() {
      return C991 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C992 || CT.C992,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C997() {
      return C997 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 27,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C998() {
      return C998 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 27,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C999() {
      return C999 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C996() {
      return C996 = dart.constList([C997 || CT.C997, C998 || CT.C998, C999 || CT.C999], widget_inspector._Location);
    },
    get C995() {
      return C995 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C996 || CT.C996,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1002() {
      return C1002 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C1001() {
      return C1001 = dart.constList([C1002 || CT.C1002], widget_inspector._Location);
    },
    get C1000() {
      return C1000 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1001 || CT.C1001,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1005() {
      return C1005 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C1004() {
      return C1004 = dart.constList([C1005 || CT.C1005], widget_inspector._Location);
    },
    get C1003() {
      return C1003 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1004 || CT.C1004,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1008() {
      return C1008 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C1009() {
      return C1009 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 21,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C1010() {
      return C1010 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 21,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C1011() {
      return C1011 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 21,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C1012() {
      return C1012 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 35,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C1007() {
      return C1007 = dart.constList([C1008 || CT.C1008, C1009 || CT.C1009, C1010 || CT.C1010, C1011 || CT.C1011, C1012 || CT.C1012], widget_inspector._Location);
    },
    get C1006() {
      return C1006 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1007 || CT.C1007,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1015() {
      return C1015 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 21,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C1016() {
      return C1016 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C1017() {
      return C1017 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C1014() {
      return C1014 = dart.constList([C1015 || CT.C1015, C1016 || CT.C1016, C1017 || CT.C1017], widget_inspector._Location);
    },
    get C1013() {
      return C1013 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1014 || CT.C1014,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1020() {
      return C1020 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 57,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C1021() {
      return C1021 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 21,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C1022() {
      return C1022 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 21,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C1023() {
      return C1023 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 21,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C1024() {
      return C1024 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 35,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C1019() {
      return C1019 = dart.constList([C1020 || CT.C1020, C1021 || CT.C1021, C1022 || CT.C1022, C1023 || CT.C1023, C1024 || CT.C1024], widget_inspector._Location);
    },
    get C1018() {
      return C1018 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1019 || CT.C1019,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1027() {
      return C1027 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 21,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C1028() {
      return C1028 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C1029() {
      return C1029 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C1026() {
      return C1026 = dart.constList([C1027 || CT.C1027, C1028 || CT.C1028, C1029 || CT.C1029], widget_inspector._Location);
    },
    get C1025() {
      return C1025 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1026 || CT.C1026,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1032() {
      return C1032 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 58,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C1033() {
      return C1033 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 21,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C1034() {
      return C1034 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 21,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C1035() {
      return C1035 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 21,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C1036() {
      return C1036 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 35,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C1031() {
      return C1031 = dart.constList([C1032 || CT.C1032, C1033 || CT.C1033, C1034 || CT.C1034, C1035 || CT.C1035, C1036 || CT.C1036], widget_inspector._Location);
    },
    get C1030() {
      return C1030 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1031 || CT.C1031,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 186,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1039() {
      return C1039 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 21,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C1040() {
      return C1040 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C1041() {
      return C1041 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C1038() {
      return C1038 = dart.constList([C1039 || CT.C1039, C1040 || CT.C1040, C1041 || CT.C1041], widget_inspector._Location);
    },
    get C1037() {
      return C1037 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1038 || CT.C1038,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1044() {
      return C1044 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 50,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C1045() {
      return C1045 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 27,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C1046() {
      return C1046 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 27,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C1047() {
      return C1047 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 27,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C1048() {
      return C1048 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 41,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C1043() {
      return C1043 = dart.constList([C1044 || CT.C1044, C1045 || CT.C1045, C1046 || CT.C1046, C1047 || CT.C1047, C1048 || CT.C1048], widget_inspector._Location);
    },
    get C1042() {
      return C1042 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1043 || CT.C1043,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1051() {
      return C1051 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 27,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C1052() {
      return C1052 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C1053() {
      return C1053 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C1050() {
      return C1050 = dart.constList([C1051 || CT.C1051, C1052 || CT.C1052, C1053 || CT.C1053], widget_inspector._Location);
    },
    get C1049() {
      return C1049 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1050 || CT.C1050,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 203,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1056() {
      return C1056 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 23,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C1057() {
      return C1057 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C1055() {
      return C1055 = dart.constList([C1056 || CT.C1056, C1057 || CT.C1057], widget_inspector._Location);
    },
    get C1054() {
      return C1054 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1055 || CT.C1055,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 197,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1060() {
      return C1060 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C1059() {
      return C1059 = dart.constList([C1060 || CT.C1060], widget_inspector._Location);
    },
    get C1058() {
      return C1058 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1059 || CT.C1059,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 196,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1063() {
      return C1063 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 59,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C1064() {
      return C1064 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C1062() {
      return C1062 = dart.constList([C1063 || CT.C1063, C1064 || CT.C1064], widget_inspector._Location);
    },
    get C1061() {
      return C1061 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1062 || CT.C1062,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 223,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1067() {
      return C1067 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C1066() {
      return C1066 = dart.constList([C1067 || CT.C1067], widget_inspector._Location);
    },
    get C1065() {
      return C1065 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1066 || CT.C1066,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 222,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1070() {
      return C1070 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C1071() {
      return C1071 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C1069() {
      return C1069 = dart.constList([C1070 || CT.C1070, C1071 || CT.C1071], widget_inspector._Location);
    },
    get C1068() {
      return C1068 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1069 || CT.C1069,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 233,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1074() {
      return C1074 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 43,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C1075() {
      return C1075 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 56,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C1073() {
      return C1073 = dart.constList([C1074 || CT.C1074, C1075 || CT.C1075], widget_inspector._Location);
    },
    get C1072() {
      return C1072 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1073 || CT.C1073,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 240,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1078() {
      return C1078 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C1077() {
      return C1077 = dart.constList([C1078 || CT.C1078], widget_inspector._Location);
    },
    get C1076() {
      return C1076 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1077 || CT.C1077,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 231,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1081() {
      return C1081 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C1080() {
      return C1080 = dart.constList([C1081 || CT.C1081], widget_inspector._Location);
    },
    get C1079() {
      return C1079 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1080 || CT.C1080,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1084() {
      return C1084 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C1085() {
      return C1085 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C1083() {
      return C1083 = dart.constList([C1084 || CT.C1084, C1085 || CT.C1085], widget_inspector._Location);
    },
    get C1082() {
      return C1082 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1083 || CT.C1083,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 217,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1088() {
      return C1088 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C1087() {
      return C1087 = dart.constList([C1088 || CT.C1088], widget_inspector._Location);
    },
    get C1086() {
      return C1086 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1087 || CT.C1087,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1091() {
      return C1091 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C1092() {
      return C1092 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C1093() {
      return C1093 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C1090() {
      return C1090 = dart.constList([C1091 || CT.C1091, C1092 || CT.C1092, C1093 || CT.C1093], widget_inspector._Location);
    },
    get C1089() {
      return C1089 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1090 || CT.C1090,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1096() {
      return C1096 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C1097() {
      return C1097 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C1095() {
      return C1095 = dart.constList([C1096 || CT.C1096, C1097 || CT.C1097], widget_inspector._Location);
    },
    get C1094() {
      return C1094 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1095 || CT.C1095,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1098() {
      return C1098 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 254,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1101() {
      return C1101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 43,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C1102() {
      return C1102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 15,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C1100() {
      return C1100 = dart.constList([C1101 || CT.C1101, C1102 || CT.C1102], widget_inspector._Location);
    },
    get C1099() {
      return C1099 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1100 || CT.C1100,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 272,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1105() {
      return C1105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 24,
        [_Location_line]: 272,
        [_Location_file]: null
      });
    },
    get C1106() {
      return C1106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C1104() {
      return C1104 = dart.constList([C1105 || CT.C1105, C1106 || CT.C1106], widget_inspector._Location);
    },
    get C1103() {
      return C1103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1104 || CT.C1104,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 271,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1109() {
      return C1109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 11,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C1110() {
      return C1110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 11,
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C1111() {
      return C1111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C1112() {
      return C1112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "gridDelegate",
        [_Location_column]: 11,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C1113() {
      return C1113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 11,
        [_Location_line]: 270,
        [_Location_file]: null
      });
    },
    get C1114() {
      return C1114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 9,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C1108() {
      return C1108 = dart.constList([C1109 || CT.C1109, C1110 || CT.C1110, C1111 || CT.C1111, C1112 || CT.C1112, C1113 || CT.C1113, C1114 || CT.C1114], widget_inspector._Location);
    },
    get C1107() {
      return C1107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1108 || CT.C1108,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 261,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1117() {
      return C1117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C1116() {
      return C1116 = dart.constList([C1117 || CT.C1117], widget_inspector._Location);
    },
    get C1115() {
      return C1115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1116 || CT.C1116,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 260,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1120() {
      return C1120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 315,
        [_Location_file]: null
      });
    },
    get C1121() {
      return C1121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 15,
        [_Location_line]: 318,
        [_Location_file]: null
      });
    },
    get C1122() {
      return C1122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 319,
        [_Location_file]: null
      });
    },
    get C1119() {
      return C1119 = dart.constList([C1120 || CT.C1120, C1121 || CT.C1121, C1122 || CT.C1122], widget_inspector._Location);
    },
    get C1118() {
      return C1118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1119 || CT.C1119,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 315,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1125() {
      return C1125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 15,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C1126() {
      return C1126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 315,
        [_Location_file]: null
      });
    },
    get C1124() {
      return C1124 = dart.constList([C1125 || CT.C1125, C1126 || CT.C1126], widget_inspector._Location);
    },
    get C1123() {
      return C1123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1124 || CT.C1124,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 312,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1129() {
      return C1129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 329,
        [_Location_file]: null
      });
    },
    get C1130() {
      return C1130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 15,
        [_Location_line]: 332,
        [_Location_file]: null
      });
    },
    get C1131() {
      return C1131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 333,
        [_Location_file]: null
      });
    },
    get C1128() {
      return C1128 = dart.constList([C1129 || CT.C1129, C1130 || CT.C1130, C1131 || CT.C1131], widget_inspector._Location);
    },
    get C1127() {
      return C1127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1128 || CT.C1128,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 329,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1134() {
      return C1134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 15,
        [_Location_line]: 327,
        [_Location_file]: null
      });
    },
    get C1135() {
      return C1135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 329,
        [_Location_file]: null
      });
    },
    get C1133() {
      return C1133 = dart.constList([C1134 || CT.C1134, C1135 || CT.C1135], widget_inspector._Location);
    },
    get C1132() {
      return C1132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1133 || CT.C1133,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 326,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1138() {
      return C1138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 342,
        [_Location_file]: null
      });
    },
    get C1139() {
      return C1139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 15,
        [_Location_line]: 344,
        [_Location_file]: null
      });
    },
    get C1140() {
      return C1140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 15,
        [_Location_line]: 345,
        [_Location_file]: null
      });
    },
    get C1141() {
      return C1141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C1137() {
      return C1137 = dart.constList([C1138 || CT.C1138, C1139 || CT.C1139, C1140 || CT.C1140, C1141 || CT.C1141], widget_inspector._Location);
    },
    get C1136() {
      return C1136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1137 || CT.C1137,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 342,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1144() {
      return C1144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 339,
        [_Location_file]: null
      });
    },
    get C1145() {
      return C1145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 342,
        [_Location_file]: null
      });
    },
    get C1143() {
      return C1143 = dart.constList([C1144 || CT.C1144, C1145 || CT.C1145], widget_inspector._Location);
    },
    get C1142() {
      return C1142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1143 || CT.C1143,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 338,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1148() {
      return C1148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 325,
        [_Location_file]: null
      });
    },
    get C1147() {
      return C1147 = dart.constList([C1148 || CT.C1148], widget_inspector._Location);
    },
    get C1146() {
      return C1146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1147 || CT.C1147,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 324,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1149() {
      return C1149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 355,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/cricel_page.dart"
      });
    },
    get C1152() {
      return C1152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "model",
        [_Location_column]: 44,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C1151() {
      return C1151 = dart.constList([C1152 || CT.C1152], widget_inspector._Location);
    },
    get C1150() {
      return C1150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1151 || CT.C1151,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/app_navigator.dart"
      });
    },
    get C1153() {
      return C1153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/app_navigator.dart"
      });
    },
    get C1156() {
      return C1156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keywrod",
        [_Location_column]: 50,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C1157() {
      return C1157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 54,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C1155() {
      return C1155 = dart.constList([C1156 || CT.C1156, C1157 || CT.C1157], widget_inspector._Location);
    },
    get C1154() {
      return C1154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1155 || CT.C1155,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/app_navigator.dart"
      });
    },
    get C1158() {
      return C1158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/app_navigator.dart"
      });
    },
    get C1159() {
      return C1159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/app_navigator.dart"
      });
    },
    get C1160() {
      return C1160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/app_navigator.dart"
      });
    },
    get C1163() {
      return C1163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "url",
        [_Location_column]: 40,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C1164() {
      return C1164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 48,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C1162() {
      return C1162 = dart.constList([C1163 || CT.C1163, C1164 || CT.C1164], widget_inspector._Location);
    },
    get C1161() {
      return C1161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1162 || CT.C1162,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/app_navigator.dart"
      });
    },
    get C1165() {
      return C1165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/app_navigator.dart"
      });
    },
    get C1168() {
      return C1168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keywrod",
        [_Location_column]: 45,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C1167() {
      return C1167 = dart.constList([C1168 || CT.C1168], widget_inspector._Location);
    },
    get C1166() {
      return C1166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1167 || CT.C1167,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/app/app_navigator.dart"
      });
    },
    get C1171() {
      return C1171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 9,
        [_Location_file]: null
      });
    },
    get C1170() {
      return C1170 = dart.constList([C1171 || CT.C1171], widget_inspector._Location);
    },
    get C1169() {
      return C1169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1170 || CT.C1170,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/help_page.dart"
      });
    },
    get C1174() {
      return C1174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 9,
        [_Location_file]: null
      });
    },
    get C1175() {
      return C1175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 9,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C1173() {
      return C1173 = dart.constList([C1174 || CT.C1174, C1175 || CT.C1175], widget_inspector._Location);
    },
    get C1172() {
      return C1172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1173 || CT.C1173,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 8,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/help_page.dart"
      });
    },
    get C1178() {
      return C1178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 29,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C1177() {
      return C1177 = dart.constList([C1178 || CT.C1178], widget_inspector._Location);
    },
    get C1176() {
      return C1176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1177 || CT.C1177,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/help_page.dart"
      });
    },
    get C1181() {
      return C1181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C1182() {
      return C1182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C1183() {
      return C1183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C1180() {
      return C1180 = dart.constList([C1181 || CT.C1181, C1182 || CT.C1182, C1183 || CT.C1183], widget_inspector._Location);
    },
    get C1179() {
      return C1179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1180 || CT.C1180,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/help_page.dart"
      });
    },
    get C1186() {
      return C1186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C1185() {
      return C1185 = dart.constList([C1186 || CT.C1186], widget_inspector._Location);
    },
    get C1184() {
      return C1184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1185 || CT.C1185,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/help_page.dart"
      });
    },
    get C1189() {
      return C1189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 8,
        [_Location_file]: null
      });
    },
    get C1190() {
      return C1190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C1188() {
      return C1188 = dart.constList([C1189 || CT.C1189, C1190 || CT.C1190], widget_inspector._Location);
    },
    get C1187() {
      return C1187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1188 || CT.C1188,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 7,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/help_page.dart"
      });
    },
    get C1193() {
      return C1193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C1192() {
      return C1192 = dart.constList([C1193 || CT.C1193], widget_inspector._Location);
    },
    get C1191() {
      return C1191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1192 || CT.C1192,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1196() {
      return C1196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C1195() {
      return C1195 = dart.constList([C1196 || CT.C1196], widget_inspector._Location);
    },
    get C1194() {
      return C1194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1195 || CT.C1195,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1199() {
      return C1199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C1200() {
      return C1200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 42,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C1198() {
      return C1198 = dart.constList([C1199 || CT.C1199, C1200 || CT.C1200], widget_inspector._Location);
    },
    get C1197() {
      return C1197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1198 || CT.C1198,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1203() {
      return C1203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 23,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C1204() {
      return C1204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C1205() {
      return C1205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C1202() {
      return C1202 = dart.constList([C1203 || CT.C1203, C1204 || CT.C1204, C1205 || CT.C1205], widget_inspector._Location);
    },
    get C1201() {
      return C1201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1202 || CT.C1202,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1208() {
      return C1208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 59,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C1209() {
      return C1209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 60,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C1210() {
      return C1210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 100,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C1207() {
      return C1207 = dart.constList([C1208 || CT.C1208, C1209 || CT.C1209, C1210 || CT.C1210], widget_inspector._Location);
    },
    get C1206() {
      return C1206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1207 || CT.C1207,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1213() {
      return C1213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 29,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C1214() {
      return C1214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 29,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C1215() {
      return C1215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C1212() {
      return C1212 = dart.constList([C1213 || CT.C1213, C1214 || CT.C1214, C1215 || CT.C1215], widget_inspector._Location);
    },
    get C1211() {
      return C1211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1212 || CT.C1212,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1218() {
      return C1218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C1217() {
      return C1217 = dart.constList([C1218 || CT.C1218], widget_inspector._Location);
    },
    get C1216() {
      return C1216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1217 || CT.C1217,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1221() {
      return C1221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C1220() {
      return C1220 = dart.constList([C1221 || CT.C1221], widget_inspector._Location);
    },
    get C1219() {
      return C1219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1220 || CT.C1220,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1224() {
      return C1224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 17,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C1225() {
      return C1225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C1226() {
      return C1226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C1223() {
      return C1223 = dart.constList([C1224 || CT.C1224, C1225 || CT.C1225, C1226 || CT.C1226], widget_inspector._Location);
    },
    get C1222() {
      return C1222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1223 || CT.C1223,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1229() {
      return C1229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C1230() {
      return C1230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C1228() {
      return C1228 = dart.constList([C1229 || CT.C1229, C1230 || CT.C1230], widget_inspector._Location);
    },
    get C1227() {
      return C1227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1228 || CT.C1228,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1233() {
      return C1233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C1234() {
      return C1234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 39,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C1232() {
      return C1232 = dart.constList([C1233 || CT.C1233, C1234 || CT.C1234], widget_inspector._Location);
    },
    get C1231() {
      return C1231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1232 || CT.C1232,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1237() {
      return C1237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 21,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C1238() {
      return C1238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C1239() {
      return C1239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C1236() {
      return C1236 = dart.constList([C1237 || CT.C1237, C1238 || CT.C1238, C1239 || CT.C1239], widget_inspector._Location);
    },
    get C1235() {
      return C1235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1236 || CT.C1236,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1242() {
      return C1242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 60,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C1243() {
      return C1243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 61,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C1244() {
      return C1244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 101,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C1241() {
      return C1241 = dart.constList([C1242 || CT.C1242, C1243 || CT.C1243, C1244 || CT.C1244], widget_inspector._Location);
    },
    get C1240() {
      return C1240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1241 || CT.C1241,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1247() {
      return C1247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 29,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C1248() {
      return C1248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 29,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C1249() {
      return C1249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C1246() {
      return C1246 = dart.constList([C1247 || CT.C1247, C1248 || CT.C1248, C1249 || CT.C1249], widget_inspector._Location);
    },
    get C1245() {
      return C1245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1246 || CT.C1246,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1250() {
      return C1250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1253() {
      return C1253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 23,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C1254() {
      return C1254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 23,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C1252() {
      return C1252 = dart.constList([C1253 || CT.C1253, C1254 || CT.C1254], widget_inspector._Location);
    },
    get C1251() {
      return C1251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1252 || CT.C1252,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1257() {
      return C1257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C1256() {
      return C1256 = dart.constList([C1257 || CT.C1257], widget_inspector._Location);
    },
    get C1255() {
      return C1255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1256 || CT.C1256,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1260() {
      return C1260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C1259() {
      return C1259 = dart.constList([C1260 || CT.C1260], widget_inspector._Location);
    },
    get C1258() {
      return C1258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1259 || CT.C1259,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1263() {
      return C1263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C1264() {
      return C1264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C1262() {
      return C1262 = dart.constList([C1263 || CT.C1263, C1264 || CT.C1264], widget_inspector._Location);
    },
    get C1261() {
      return C1261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1262 || CT.C1262,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1267() {
      return C1267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C1266() {
      return C1266 = dart.constList([C1267 || CT.C1267], widget_inspector._Location);
    },
    get C1265() {
      return C1265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1266 || CT.C1266,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1270() {
      return C1270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C1271() {
      return C1271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C1269() {
      return C1269 = dart.constList([C1270 || CT.C1270, C1271 || CT.C1271], widget_inspector._Location);
    },
    get C1268() {
      return C1268 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1269 || CT.C1269,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/clearCache_page.dart"
      });
    },
    get C1274() {
      return C1274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C1273() {
      return C1273 = dart.constList([C1274 || CT.C1274], widget_inspector._Location);
    },
    get C1272() {
      return C1272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1273 || CT.C1273,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1277() {
      return C1277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C1276() {
      return C1276 = dart.constList([C1277 || CT.C1277], widget_inspector._Location);
    },
    get C1275() {
      return C1275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1276 || CT.C1276,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1280() {
      return C1280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C1281() {
      return C1281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 50,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C1282() {
      return C1282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 123,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C1279() {
      return C1279 = dart.constList([C1280 || CT.C1280, C1281 || CT.C1281, C1282 || CT.C1282], widget_inspector._Location);
    },
    get C1278() {
      return C1278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1279 || CT.C1279,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1285() {
      return C1285 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C1286() {
      return C1286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 21,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C1287() {
      return C1287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C1288() {
      return C1288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C1284() {
      return C1284 = dart.constList([C1285 || CT.C1285, C1286 || CT.C1286, C1287 || CT.C1287, C1288 || CT.C1288], widget_inspector._Location);
    },
    get C1283() {
      return C1283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1284 || CT.C1284,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1291() {
      return C1291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 19,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C1292() {
      return C1292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 19,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C1293() {
      return C1293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C1290() {
      return C1290 = dart.constList([C1291 || CT.C1291, C1292 || CT.C1292, C1293 || CT.C1293], widget_inspector._Location);
    },
    get C1289() {
      return C1289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1290 || CT.C1290,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1296() {
      return C1296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C1295() {
      return C1295 = dart.constList([C1296 || CT.C1296], widget_inspector._Location);
    },
    get C1294() {
      return C1294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1295 || CT.C1295,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1299() {
      return C1299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C1300() {
      return C1300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C1298() {
      return C1298 = dart.constList([C1299 || CT.C1299, C1300 || CT.C1300], widget_inspector._Location);
    },
    get C1297() {
      return C1297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1298 || CT.C1298,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1303() {
      return C1303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 38,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C1302() {
      return C1302 = dart.constList([C1303 || CT.C1303], widget_inspector._Location);
    },
    get C1301() {
      return C1301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1302 || CT.C1302,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1306() {
      return C1306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C1307() {
      return C1307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C1308() {
      return C1308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C1309() {
      return C1309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C1305() {
      return C1305 = dart.constList([C1306 || CT.C1306, C1307 || CT.C1307, C1308 || CT.C1308, C1309 || CT.C1309], widget_inspector._Location);
    },
    get C1304() {
      return C1304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1305 || CT.C1305,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1312() {
      return C1312 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 56,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C1313() {
      return C1313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 57,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C1314() {
      return C1314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 27,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C1311() {
      return C1311 = dart.constList([C1312 || CT.C1312, C1313 || CT.C1313, C1314 || CT.C1314], widget_inspector._Location);
    },
    get C1310() {
      return C1310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1311 || CT.C1311,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1317() {
      return C1317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C1318() {
      return C1318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 25,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C1319() {
      return C1319 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C1316() {
      return C1316 = dart.constList([C1317 || CT.C1317, C1318 || CT.C1318, C1319 || CT.C1319], widget_inspector._Location);
    },
    get C1315() {
      return C1315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1316 || CT.C1316,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1320() {
      return C1320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1323() {
      return C1323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 19,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C1324() {
      return C1324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 19,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C1322() {
      return C1322 = dart.constList([C1323 || CT.C1323, C1324 || CT.C1324], widget_inspector._Location);
    },
    get C1321() {
      return C1321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1322 || CT.C1322,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1327() {
      return C1327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C1326() {
      return C1326 = dart.constList([C1327 || CT.C1327], widget_inspector._Location);
    },
    get C1325() {
      return C1325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1326 || CT.C1326,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1330() {
      return C1330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C1331() {
      return C1331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C1332() {
      return C1332 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C1329() {
      return C1329 = dart.constList([C1330 || CT.C1330, C1331 || CT.C1331, C1332 || CT.C1332], widget_inspector._Location);
    },
    get C1328() {
      return C1328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1329 || CT.C1329,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1335() {
      return C1335 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C1334() {
      return C1334 = dart.constList([C1335 || CT.C1335], widget_inspector._Location);
    },
    get C1333() {
      return C1333 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1334 || CT.C1334,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1338() {
      return C1338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C1339() {
      return C1339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C1337() {
      return C1337 = dart.constList([C1338 || CT.C1338, C1339 || CT.C1339], widget_inspector._Location);
    },
    get C1336() {
      return C1336 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1337 || CT.C1337,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1342() {
      return C1342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C1343() {
      return C1343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 43,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C1344() {
      return C1344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 84,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C1341() {
      return C1341 = dart.constList([C1342 || CT.C1342, C1343 || CT.C1343, C1344 || CT.C1344], widget_inspector._Location);
    },
    get C1340() {
      return C1340 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1341 || CT.C1341,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1347() {
      return C1347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C1348() {
      return C1348 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C1346() {
      return C1346 = dart.constList([C1347 || CT.C1347, C1348 || CT.C1348], widget_inspector._Location);
    },
    get C1345() {
      return C1345 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1346 || CT.C1346,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1351() {
      return C1351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C1350() {
      return C1350 = dart.constList([C1351 || CT.C1351], widget_inspector._Location);
    },
    get C1349() {
      return C1349 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1350 || CT.C1350,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1354() {
      return C1354 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C1353() {
      return C1353 = dart.constList([C1354 || CT.C1354], widget_inspector._Location);
    },
    get C1352() {
      return C1352 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1353 || CT.C1353,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1357() {
      return C1357 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C1356() {
      return C1356 = dart.constList([C1357 || CT.C1357], widget_inspector._Location);
    },
    get C1355() {
      return C1355 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1356 || CT.C1356,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1360() {
      return C1360 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C1359() {
      return C1359 = dart.constList([C1360 || CT.C1360], widget_inspector._Location);
    },
    get C1358() {
      return C1358 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1359 || CT.C1359,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1363() {
      return C1363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C1364() {
      return C1364 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C1362() {
      return C1362 = dart.constList([C1363 || CT.C1363, C1364 || CT.C1364], widget_inspector._Location);
    },
    get C1361() {
      return C1361 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1362 || CT.C1362,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1367() {
      return C1367 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C1368() {
      return C1368 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 58,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C1369() {
      return C1369 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 101,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C1366() {
      return C1366 = dart.constList([C1367 || CT.C1367, C1368 || CT.C1368, C1369 || CT.C1369], widget_inspector._Location);
    },
    get C1365() {
      return C1365 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1366 || CT.C1366,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1372() {
      return C1372 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C1373() {
      return C1373 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C1371() {
      return C1371 = dart.constList([C1372 || CT.C1372, C1373 || CT.C1373], widget_inspector._Location);
    },
    get C1370() {
      return C1370 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1371 || CT.C1371,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1376() {
      return C1376 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C1375() {
      return C1375 = dart.constList([C1376 || CT.C1376], widget_inspector._Location);
    },
    get C1374() {
      return C1374 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1375 || CT.C1375,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1379() {
      return C1379 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C1378() {
      return C1378 = dart.constList([C1379 || CT.C1379], widget_inspector._Location);
    },
    get C1377() {
      return C1377 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1378 || CT.C1378,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1382() {
      return C1382 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C1381() {
      return C1381 = dart.constList([C1382 || CT.C1382], widget_inspector._Location);
    },
    get C1380() {
      return C1380 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1381 || CT.C1381,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1385() {
      return C1385 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C1384() {
      return C1384 = dart.constList([C1385 || CT.C1385], widget_inspector._Location);
    },
    get C1383() {
      return C1383 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1384 || CT.C1384,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/mine/aboutWe_page.dart"
      });
    },
    get C1386() {
      return C1386 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 100000
      });
    },
    get C1389() {
      return C1389 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C1388() {
      return C1388 = dart.constList([C1389 || CT.C1389], widget_inspector._Location);
    },
    get C1387() {
      return C1387 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1388 || CT.C1388,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1392() {
      return C1392 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C1393() {
      return C1393 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C1391() {
      return C1391 = dart.constList([C1392 || CT.C1392, C1393 || CT.C1393], widget_inspector._Location);
    },
    get C1390() {
      return C1390 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1391 || CT.C1391,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1396() {
      return C1396 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C1395() {
      return C1395 = dart.constList([C1396 || CT.C1396], widget_inspector._Location);
    },
    get C1394() {
      return C1394 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1395 || CT.C1395,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1399() {
      return C1399 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C1400() {
      return C1400 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C1398() {
      return C1398 = dart.constList([C1399 || CT.C1399, C1400 || CT.C1400], widget_inspector._Location);
    },
    get C1397() {
      return C1397 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1398 || CT.C1398,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1403() {
      return C1403 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapUp",
        [_Location_column]: 19,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C1402() {
      return C1402 = dart.constList([C1403 || CT.C1403], widget_inspector._Location);
    },
    get C1401() {
      return C1401 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1402 || CT.C1402,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1406() {
      return C1406 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C1405() {
      return C1405 = dart.constList([C1406 || CT.C1406], widget_inspector._Location);
    },
    get C1404() {
      return C1404 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1405 || CT.C1405,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1409() {
      return C1409 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 19,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C1410() {
      return C1410 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 19,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C1411() {
      return C1411 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C1408() {
      return C1408 = dart.constList([C1409 || CT.C1409, C1410 || CT.C1410, C1411 || CT.C1411], widget_inspector._Location);
    },
    get C1407() {
      return C1407 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1408 || CT.C1408,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1414() {
      return C1414 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C1413() {
      return C1413 = dart.constList([C1414 || CT.C1414], widget_inspector._Location);
    },
    get C1412() {
      return C1412 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1413 || CT.C1413,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1417() {
      return C1417 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C1418() {
      return C1418 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C1416() {
      return C1416 = dart.constList([C1417 || CT.C1417, C1418 || CT.C1418], widget_inspector._Location);
    },
    get C1415() {
      return C1415 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1416 || CT.C1416,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1421() {
      return C1421 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "model",
        [_Location_column]: 45,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C1422() {
      return C1422 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 51,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C1420() {
      return C1420 = dart.constList([C1421 || CT.C1421, C1422 || CT.C1422], widget_inspector._Location);
    },
    get C1419() {
      return C1419 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1420 || CT.C1420,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1425() {
      return C1425 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 16,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C1426() {
      return C1426 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 15,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C1424() {
      return C1424 = dart.constList([C1425 || CT.C1425, C1426 || CT.C1426], widget_inspector._Location);
    },
    get C1423() {
      return C1423 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1424 || CT.C1424,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1429() {
      return C1429 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C1430() {
      return C1430 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C1431() {
      return C1431 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C1428() {
      return C1428 = dart.constList([C1429 || CT.C1429, C1430 || CT.C1430, C1431 || CT.C1431], widget_inspector._Location);
    },
    get C1427() {
      return C1427 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1428 || CT.C1428,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1432() {
      return C1432 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1435() {
      return C1435 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "model",
        [_Location_column]: 7,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C1436() {
      return C1436 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C1434() {
      return C1434 = dart.constList([C1435 || CT.C1435, C1436 || CT.C1436], widget_inspector._Location);
    },
    get C1433() {
      return C1433 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1434 || CT.C1434,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1439() {
      return C1439 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C1440() {
      return C1440 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C1438() {
      return C1438 = dart.constList([C1439 || CT.C1439, C1440 || CT.C1440], widget_inspector._Location);
    },
    get C1437() {
      return C1437 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1438 || CT.C1438,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1443() {
      return C1443 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C1444() {
      return C1444 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C1445() {
      return C1445 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C1446() {
      return C1446 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C1442() {
      return C1442 = dart.constList([C1443 || CT.C1443, C1444 || CT.C1444, C1445 || CT.C1445, C1446 || CT.C1446], widget_inspector._Location);
    },
    get C1441() {
      return C1441 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1442 || CT.C1442,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1449() {
      return C1449 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C1450() {
      return C1450 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C1448() {
      return C1448 = dart.constList([C1449 || CT.C1449, C1450 || CT.C1450], widget_inspector._Location);
    },
    get C1447() {
      return C1447 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1448 || CT.C1448,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1453() {
      return C1453 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C1454() {
      return C1454 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C1455() {
      return C1455 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C1456() {
      return C1456 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C1452() {
      return C1452 = dart.constList([C1453 || CT.C1453, C1454 || CT.C1454, C1455 || CT.C1455, C1456 || CT.C1456], widget_inspector._Location);
    },
    get C1451() {
      return C1451 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1452 || CT.C1452,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_page.dart"
      });
    },
    get C1457() {
      return C1457 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    },
    get C1460() {
      return C1460 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 32,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C1459() {
      return C1459 = dart.constList([C1460 || CT.C1460], widget_inspector._Location);
    },
    get C1458() {
      return C1458 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1459 || CT.C1459,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_share.dart"
      });
    },
    get C1463() {
      return C1463 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTapDown",
        [_Location_column]: 15,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C1464() {
      return C1464 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C1462() {
      return C1462 = dart.constList([C1463 || CT.C1463, C1464 || CT.C1464], widget_inspector._Location);
    },
    get C1461() {
      return C1461 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1462 || CT.C1462,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_share.dart"
      });
    },
    get C1467() {
      return C1467 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C1466() {
      return C1466 = dart.constList([C1467 || CT.C1467], widget_inspector._Location);
    },
    get C1465() {
      return C1465 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1466 || CT.C1466,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_share.dart"
      });
    },
    get C1470() {
      return C1470 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C1469() {
      return C1469 = dart.constList([C1470 || CT.C1470], widget_inspector._Location);
    },
    get C1468() {
      return C1468 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1469 || CT.C1469,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_share.dart"
      });
    },
    get C1473() {
      return C1473 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C1472() {
      return C1472 = dart.constList([C1473 || CT.C1473], widget_inspector._Location);
    },
    get C1471() {
      return C1471 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1472 || CT.C1472,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_share.dart"
      });
    },
    get C1476() {
      return C1476 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 20,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C1477() {
      return C1477 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 20,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C1475() {
      return C1475 = dart.constList([C1476 || CT.C1476, C1477 || CT.C1477], widget_inspector._Location);
    },
    get C1474() {
      return C1474 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1475 || CT.C1475,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_share.dart"
      });
    },
    get C1480() {
      return C1480 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C1479() {
      return C1479 = dart.constList([C1480 || CT.C1480], widget_inspector._Location);
    },
    get C1478() {
      return C1478 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1479 || CT.C1479,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_share.dart"
      });
    },
    get C1483() {
      return C1483 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C1484() {
      return C1484 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C1485() {
      return C1485 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C1482() {
      return C1482 = dart.constList([C1483 || CT.C1483, C1484 || CT.C1484, C1485 || CT.C1485], widget_inspector._Location);
    },
    get C1481() {
      return C1481 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1482 || CT.C1482,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_share.dart"
      });
    },
    get C1488() {
      return C1488 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C1489() {
      return C1489 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 38,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C1490() {
      return C1490 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 23,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C1487() {
      return C1487 = dart.constList([C1488 || CT.C1488, C1489 || CT.C1489, C1490 || CT.C1490], widget_inspector._Location);
    },
    get C1486() {
      return C1486 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1487 || CT.C1487,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_share.dart"
      });
    },
    get C1493() {
      return C1493 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C1492() {
      return C1492 = dart.constList([C1493 || CT.C1493], widget_inspector._Location);
    },
    get C1491() {
      return C1491 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1492 || CT.C1492,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_share.dart"
      });
    },
    get C1496() {
      return C1496 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 17,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C1497() {
      return C1497 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C1498() {
      return C1498 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C1499() {
      return C1499 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 17,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C1500() {
      return C1500 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C1495() {
      return C1495 = dart.constList([C1496 || CT.C1496, C1497 || CT.C1497, C1498 || CT.C1498, C1499 || CT.C1499, C1500 || CT.C1500], widget_inspector._Location);
    },
    get C1494() {
      return C1494 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1495 || CT.C1495,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_share.dart"
      });
    },
    get C1503() {
      return C1503 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C1504() {
      return C1504 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C1502() {
      return C1502 = dart.constList([C1503 || CT.C1503, C1504 || CT.C1504], widget_inspector._Location);
    },
    get C1501() {
      return C1501 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1502 || CT.C1502,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_share.dart"
      });
    },
    get C1507() {
      return C1507 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C1506() {
      return C1506 = dart.constList([C1507 || CT.C1507], widget_inspector._Location);
    },
    get C1505() {
      return C1505 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1506 || CT.C1506,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_share.dart"
      });
    },
    get C1510() {
      return C1510 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C1511() {
      return C1511 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C1512() {
      return C1512 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C1513() {
      return C1513 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C1514() {
      return C1514 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C1509() {
      return C1509 = dart.constList([C1510 || CT.C1510, C1511 || CT.C1511, C1512 || CT.C1512, C1513 || CT.C1513, C1514 || CT.C1514], widget_inspector._Location);
    },
    get C1508() {
      return C1508 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1509 || CT.C1509,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_share.dart"
      });
    },
    get C1517() {
      return C1517 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C1518() {
      return C1518 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 7,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C1519() {
      return C1519 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "right",
        [_Location_column]: 7,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C1520() {
      return C1520 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C1516() {
      return C1516 = dart.constList([C1517 || CT.C1517, C1518 || CT.C1518, C1519 || CT.C1519, C1520 || CT.C1520], widget_inspector._Location);
    },
    get C1515() {
      return C1515 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1516 || CT.C1516,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_share.dart"
      });
    },
    get C1523() {
      return C1523 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 35,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C1524() {
      return C1524 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 23,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C1522() {
      return C1522 = dart.constList([C1523 || CT.C1523, C1524 || CT.C1524], widget_inspector._Location);
    },
    get C1521() {
      return C1521 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1522 || CT.C1522,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1527() {
      return C1527 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C1528() {
      return C1528 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C1529() {
      return C1529 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C1526() {
      return C1526 = dart.constList([C1527 || CT.C1527, C1528 || CT.C1528, C1529 || CT.C1529], widget_inspector._Location);
    },
    get C1525() {
      return C1525 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1526 || CT.C1526,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1532() {
      return C1532 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C1533() {
      return C1533 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C1531() {
      return C1531 = dart.constList([C1532 || CT.C1532, C1533 || CT.C1533], widget_inspector._Location);
    },
    get C1530() {
      return C1530 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1531 || CT.C1531,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1536() {
      return C1536 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C1537() {
      return C1537 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C1535() {
      return C1535 = dart.constList([C1536 || CT.C1536, C1537 || CT.C1537], widget_inspector._Location);
    },
    get C1534() {
      return C1534 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1535 || CT.C1535,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1540() {
      return C1540 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 49,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C1539() {
      return C1539 = dart.constList([C1540 || CT.C1540], widget_inspector._Location);
    },
    get C1538() {
      return C1538 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1539 || CT.C1539,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1543() {
      return C1543 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C1544() {
      return C1544 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C1542() {
      return C1542 = dart.constList([C1543 || CT.C1543, C1544 || CT.C1544], widget_inspector._Location);
    },
    get C1541() {
      return C1541 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1542 || CT.C1542,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1547() {
      return C1547 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C1546() {
      return C1546 = dart.constList([C1547 || CT.C1547, C1308 || CT.C1308], widget_inspector._Location);
    },
    get C1545() {
      return C1545 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1546 || CT.C1546,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1548() {
      return C1548 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1326 || CT.C1326,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1551() {
      return C1551 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C1550() {
      return C1550 = dart.constList([C1551 || CT.C1551, C1332 || CT.C1332], widget_inspector._Location);
    },
    get C1549() {
      return C1549 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1550 || CT.C1550,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1554() {
      return C1554 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 31,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C1553() {
      return C1553 = dart.constList([C1554 || CT.C1554], widget_inspector._Location);
    },
    get C1552() {
      return C1552 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1553 || CT.C1553,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1557() {
      return C1557 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 68,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C1558() {
      return C1558 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C1556() {
      return C1556 = dart.constList([C1557 || CT.C1557, C1558 || CT.C1558], widget_inspector._Location);
    },
    get C1555() {
      return C1555 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1556 || CT.C1556,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1561() {
      return C1561 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 31,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C1562() {
      return C1562 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 31,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C1563() {
      return C1563 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 31,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C1564() {
      return C1564 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C1560() {
      return C1560 = dart.constList([C1561 || CT.C1561, C1562 || CT.C1562, C1563 || CT.C1563, C1564 || CT.C1564], widget_inspector._Location);
    },
    get C1559() {
      return C1559 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1560 || CT.C1560,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1567() {
      return C1567 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 96,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C1568() {
      return C1568 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C1566() {
      return C1566 = dart.constList([C1567 || CT.C1567, C1568 || CT.C1568], widget_inspector._Location);
    },
    get C1565() {
      return C1565 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1566 || CT.C1566,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1571() {
      return C1571 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 31,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C1572() {
      return C1572 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 31,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C1573() {
      return C1573 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 31,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C1574() {
      return C1574 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C1570() {
      return C1570 = dart.constList([C1571 || CT.C1571, C1572 || CT.C1572, C1573 || CT.C1573, C1574 || CT.C1574], widget_inspector._Location);
    },
    get C1569() {
      return C1569 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1570 || CT.C1570,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1577() {
      return C1577 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C1576() {
      return C1576 = dart.constList([C1577 || CT.C1577], widget_inspector._Location);
    },
    get C1575() {
      return C1575 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1576 || CT.C1576,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1580() {
      return C1580 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C1581() {
      return C1581 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C1579() {
      return C1579 = dart.constList([C1580 || CT.C1580, C1581 || CT.C1581], widget_inspector._Location);
    },
    get C1578() {
      return C1578 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1579 || CT.C1579,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1584() {
      return C1584 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 27,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C1585() {
      return C1585 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C1586() {
      return C1586 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 29,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C1583() {
      return C1583 = dart.constList([C1584 || CT.C1584, C1585 || CT.C1585, C1586 || CT.C1586], widget_inspector._Location);
    },
    get C1582() {
      return C1582 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1583 || CT.C1583,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1589() {
      return C1589 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C1590() {
      return C1590 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 27,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C1588() {
      return C1588 = dart.constList([C1589 || CT.C1589, C1590 || CT.C1590], widget_inspector._Location);
    },
    get C1587() {
      return C1587 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1588 || CT.C1588,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1593() {
      return C1593 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C1592() {
      return C1592 = dart.constList([C1593 || CT.C1593], widget_inspector._Location);
    },
    get C1591() {
      return C1591 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1592 || CT.C1592,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1596() {
      return C1596 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 21,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C1597() {
      return C1597 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 21,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C1598() {
      return C1598 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C1595() {
      return C1595 = dart.constList([C1596 || CT.C1596, C1597 || CT.C1597, C1598 || CT.C1598], widget_inspector._Location);
    },
    get C1594() {
      return C1594 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1595 || CT.C1595,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1601() {
      return C1601 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C1600() {
      return C1600 = dart.constList([C1601 || CT.C1601], widget_inspector._Location);
    },
    get C1599() {
      return C1599 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1600 || CT.C1600,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1604() {
      return C1604 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C1605() {
      return C1605 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C1606() {
      return C1606 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C1603() {
      return C1603 = dart.constList([C1604 || CT.C1604, C1605 || CT.C1605, C1606 || CT.C1606], widget_inspector._Location);
    },
    get C1602() {
      return C1602 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1603 || CT.C1603,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1609() {
      return C1609 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C1610() {
      return C1610 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C1611() {
      return C1611 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C1608() {
      return C1608 = dart.constList([C1609 || CT.C1609, C1610 || CT.C1610, C1611 || CT.C1611], widget_inspector._Location);
    },
    get C1607() {
      return C1607 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1608 || CT.C1608,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1614() {
      return C1614 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C1615() {
      return C1615 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C1616() {
      return C1616 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C1617() {
      return C1617 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C1613() {
      return C1613 = dart.constList([C1614 || CT.C1614, C1615 || CT.C1615, C1616 || CT.C1616, C1617 || CT.C1617], widget_inspector._Location);
    },
    get C1612() {
      return C1612 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1613 || CT.C1613,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1620() {
      return C1620 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C1619() {
      return C1619 = dart.constList([C1620 || CT.C1620], widget_inspector._Location);
    },
    get C1618() {
      return C1618 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1619 || CT.C1619,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1623() {
      return C1623 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C1622() {
      return C1622 = dart.constList([C1623 || CT.C1623], widget_inspector._Location);
    },
    get C1621() {
      return C1621 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1622 || CT.C1622,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/details/details_header.dart"
      });
    },
    get C1626() {
      return C1626 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C1625() {
      return C1625 = dart.constList([C1626 || CT.C1626], widget_inspector._Location);
    },
    get C1624() {
      return C1624 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1625 || CT.C1625,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1629() {
      return C1629 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C1628() {
      return C1628 = dart.constList([C1629 || CT.C1629], widget_inspector._Location);
    },
    get C1627() {
      return C1627 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1628 || CT.C1628,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1632() {
      return C1632 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C1633() {
      return C1633 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C1631() {
      return C1631 = dart.constList([C1632 || CT.C1632, C1633 || CT.C1633], widget_inspector._Location);
    },
    get C1630() {
      return C1630 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1631 || CT.C1631,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1636() {
      return C1636 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C1635() {
      return C1635 = dart.constList([C1636 || CT.C1636], widget_inspector._Location);
    },
    get C1634() {
      return C1634 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1635 || CT.C1635,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1639() {
      return C1639 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C1640() {
      return C1640 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C1638() {
      return C1638 = dart.constList([C1639 || CT.C1639, C1640 || CT.C1640], widget_inspector._Location);
    },
    get C1637() {
      return C1637 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1638 || CT.C1638,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1643() {
      return C1643 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C1644() {
      return C1644 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C1642() {
      return C1642 = dart.constList([C1643 || CT.C1643, C1644 || CT.C1644], widget_inspector._Location);
    },
    get C1641() {
      return C1641 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1642 || CT.C1642,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1647() {
      return C1647 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C1646() {
      return C1646 = dart.constList([C1647 || CT.C1647], widget_inspector._Location);
    },
    get C1645() {
      return C1645 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1646 || CT.C1646,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1650() {
      return C1650 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C1651() {
      return C1651 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onRefresh",
        [_Location_column]: 19,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C1652() {
      return C1652 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLoad",
        [_Location_column]: 19,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C1653() {
      return C1653 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "footer",
        [_Location_column]: 19,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C1649() {
      return C1649 = dart.constList([C1650 || CT.C1650, C1651 || CT.C1651, C1652 || CT.C1652, C1653 || CT.C1653], widget_inspector._Location);
    },
    get C1648() {
      return C1648 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1649 || CT.C1649,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1656() {
      return C1656 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 33,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C1657() {
      return C1657 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C1655() {
      return C1655 = dart.constList([C1656 || CT.C1656, C1657 || CT.C1657], widget_inspector._Location);
    },
    get C1654() {
      return C1654 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1655 || CT.C1655,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1660() {
      return C1660 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C1661() {
      return C1661 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 21,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C1662() {
      return C1662 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 21,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C1663() {
      return C1663 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C1659() {
      return C1659 = dart.constList([C1660 || CT.C1660, C1661 || CT.C1661, C1662 || CT.C1662, C1663 || CT.C1663], widget_inspector._Location);
    },
    get C1658() {
      return C1658 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1659 || CT.C1659,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1666() {
      return C1666 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 48,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C1665() {
      return C1665 = dart.constList([C1666 || CT.C1666], widget_inspector._Location);
    },
    get C1664() {
      return C1664 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1665 || CT.C1665,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1669() {
      return C1669 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 49,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C1670() {
      return C1670 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C1668() {
      return C1668 = dart.constList([C1669 || CT.C1669, C1670 || CT.C1670], widget_inspector._Location);
    },
    get C1667() {
      return C1667 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1668 || CT.C1668,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1673() {
      return C1673 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C1674() {
      return C1674 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 25,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C1675() {
      return C1675 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 25,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C1676() {
      return C1676 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 25,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C1677() {
      return C1677 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C1672() {
      return C1672 = dart.constList([C1673 || CT.C1673, C1674 || CT.C1674, C1675 || CT.C1675, C1676 || CT.C1676, C1677 || CT.C1677], widget_inspector._Location);
    },
    get C1671() {
      return C1671 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1672 || CT.C1672,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1680() {
      return C1680 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C1679() {
      return C1679 = dart.constList([C1680 || CT.C1680], widget_inspector._Location);
    },
    get C1678() {
      return C1678 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1679 || CT.C1679,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1683() {
      return C1683 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C1682() {
      return C1682 = dart.constList([C1683 || CT.C1683], widget_inspector._Location);
    },
    get C1681() {
      return C1681 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1682 || CT.C1682,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1686() {
      return C1686 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C1687() {
      return C1687 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C1688() {
      return C1688 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C1689() {
      return C1689 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C1690() {
      return C1690 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C1685() {
      return C1685 = dart.constList([C1686 || CT.C1686, C1687 || CT.C1687, C1688 || CT.C1688, C1689 || CT.C1689, C1690 || CT.C1690], widget_inspector._Location);
    },
    get C1684() {
      return C1684 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1685 || CT.C1685,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1693() {
      return C1693 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C1694() {
      return C1694 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C1692() {
      return C1692 = dart.constList([C1693 || CT.C1693, C1694 || CT.C1694], widget_inspector._Location);
    },
    get C1691() {
      return C1691 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1692 || CT.C1692,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1697() {
      return C1697 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "spacing",
        [_Location_column]: 11,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C1698() {
      return C1698 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C1696() {
      return C1696 = dart.constList([C1697 || CT.C1697, C1698 || CT.C1698], widget_inspector._Location);
    },
    get C1695() {
      return C1695 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1696 || CT.C1696,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1701() {
      return C1701 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 11,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C1700() {
      return C1700 = dart.constList([C1701 || CT.C1701], widget_inspector._Location);
    },
    get C1699() {
      return C1699 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1700 || CT.C1700,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_result.dart"
      });
    },
    get C1704() {
      return C1704 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C1703() {
      return C1703 = dart.constList([C1704 || CT.C1704], widget_inspector._Location);
    },
    get C1702() {
      return C1702 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1703 || CT.C1703,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1707() {
      return C1707 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C1706() {
      return C1706 = dart.constList([C1707 || CT.C1707], widget_inspector._Location);
    },
    get C1705() {
      return C1705 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1706 || CT.C1706,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1710() {
      return C1710 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C1711() {
      return C1711 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C1709() {
      return C1709 = dart.constList([C1710 || CT.C1710, C1711 || CT.C1711], widget_inspector._Location);
    },
    get C1708() {
      return C1708 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1709 || CT.C1709,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1714() {
      return C1714 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C1713() {
      return C1713 = dart.constList([C1714 || CT.C1714], widget_inspector._Location);
    },
    get C1712() {
      return C1712 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1713 || CT.C1713,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1717() {
      return C1717 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C1716() {
      return C1716 = dart.constList([C1717 || CT.C1717, C954 || CT.C954], widget_inspector._Location);
    },
    get C1715() {
      return C1715 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1716 || CT.C1716,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1720() {
      return C1720 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C1721() {
      return C1721 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C1719() {
      return C1719 = dart.constList([C1720 || CT.C1720, C1721 || CT.C1721], widget_inspector._Location);
    },
    get C1718() {
      return C1718 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1719 || CT.C1719,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1724() {
      return C1724 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C1723() {
      return C1723 = dart.constList([C1724 || CT.C1724], widget_inspector._Location);
    },
    get C1722() {
      return C1722 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1723 || CT.C1723,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1727() {
      return C1727 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C1728() {
      return C1728 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onRefresh",
        [_Location_column]: 19,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C1729() {
      return C1729 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLoad",
        [_Location_column]: 19,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C1730() {
      return C1730 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "footer",
        [_Location_column]: 19,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C1726() {
      return C1726 = dart.constList([C1727 || CT.C1727, C1728 || CT.C1728, C1729 || CT.C1729, C1730 || CT.C1730], widget_inspector._Location);
    },
    get C1725() {
      return C1725 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1726 || CT.C1726,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1733() {
      return C1733 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 33,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C1734() {
      return C1734 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 25,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C1732() {
      return C1732 = dart.constList([C1733 || CT.C1733, C1734 || CT.C1734], widget_inspector._Location);
    },
    get C1731() {
      return C1731 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1732 || CT.C1732,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1737() {
      return C1737 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C1738() {
      return C1738 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 21,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C1739() {
      return C1739 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 21,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C1740() {
      return C1740 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C1736() {
      return C1736 = dart.constList([C1737 || CT.C1737, C1738 || CT.C1738, C1739 || CT.C1739, C1740 || CT.C1740], widget_inspector._Location);
    },
    get C1735() {
      return C1735 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1736 || CT.C1736,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1743() {
      return C1743 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 48,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C1742() {
      return C1742 = dart.constList([C1743 || CT.C1743], widget_inspector._Location);
    },
    get C1741() {
      return C1741 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1742 || CT.C1742,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1746() {
      return C1746 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 49,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C1747() {
      return C1747 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C1745() {
      return C1745 = dart.constList([C1746 || CT.C1746, C1747 || CT.C1747], widget_inspector._Location);
    },
    get C1744() {
      return C1744 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1745 || CT.C1745,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1750() {
      return C1750 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C1751() {
      return C1751 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 25,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C1752() {
      return C1752 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 25,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C1753() {
      return C1753 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 25,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C1754() {
      return C1754 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C1749() {
      return C1749 = dart.constList([C1750 || CT.C1750, C1751 || CT.C1751, C1752 || CT.C1752, C1753 || CT.C1753, C1754 || CT.C1754], widget_inspector._Location);
    },
    get C1748() {
      return C1748 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1749 || CT.C1749,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1757() {
      return C1757 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C1756() {
      return C1756 = dart.constList([C1757 || CT.C1757], widget_inspector._Location);
    },
    get C1755() {
      return C1755 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1756 || CT.C1756,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1760() {
      return C1760 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C1759() {
      return C1759 = dart.constList([C1760 || CT.C1760], widget_inspector._Location);
    },
    get C1758() {
      return C1758 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1759 || CT.C1759,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1763() {
      return C1763 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C1764() {
      return C1764 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C1765() {
      return C1765 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C1766() {
      return C1766 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C1767() {
      return C1767 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C1762() {
      return C1762 = dart.constList([C1763 || CT.C1763, C1764 || CT.C1764, C1765 || CT.C1765, C1766 || CT.C1766, C1767 || CT.C1767], widget_inspector._Location);
    },
    get C1761() {
      return C1761 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1762 || CT.C1762,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1770() {
      return C1770 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C1771() {
      return C1771 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C1769() {
      return C1769 = dart.constList([C1770 || CT.C1770, C1771 || CT.C1771], widget_inspector._Location);
    },
    get C1768() {
      return C1768 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1769 || CT.C1769,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1774() {
      return C1774 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "spacing",
        [_Location_column]: 11,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C1775() {
      return C1775 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C1773() {
      return C1773 = dart.constList([C1774 || CT.C1774, C1775 || CT.C1775], widget_inspector._Location);
    },
    get C1772() {
      return C1772 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1773 || CT.C1773,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1778() {
      return C1778 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 11,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C1777() {
      return C1777 = dart.constList([C1778 || CT.C1778], widget_inspector._Location);
    },
    get C1776() {
      return C1776 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1777 || CT.C1777,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_mater_page.dart"
      });
    },
    get C1781() {
      return C1781 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C1780() {
      return C1780 = dart.constList([C1781 || CT.C1781], widget_inspector._Location);
    },
    get C1779() {
      return C1779 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1780 || CT.C1780,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1782() {
      return C1782 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1628 || CT.C1628,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1785() {
      return C1785 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C1786() {
      return C1786 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeToAvoidBottomInset",
        [_Location_column]: 7,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C1784() {
      return C1784 = dart.constList([C1632 || CT.C1632, C1633 || CT.C1633, C1785 || CT.C1785, C1786 || CT.C1786], widget_inspector._Location);
    },
    get C1783() {
      return C1783 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1784 || CT.C1784,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1789() {
      return C1789 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 13,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C1788() {
      return C1788 = dart.constList([C1789 || CT.C1789], widget_inspector._Location);
    },
    get C1787() {
      return C1787 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1788 || CT.C1788,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1792() {
      return C1792 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C1793() {
      return C1793 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C1794() {
      return C1794 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C1791() {
      return C1791 = dart.constList([C1792 || CT.C1792, C1793 || CT.C1793, C1794 || CT.C1794], widget_inspector._Location);
    },
    get C1790() {
      return C1790 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1791 || CT.C1791,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1797() {
      return C1797 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C1796() {
      return C1796 = dart.constList([C417 || CT.C417, C1797 || CT.C1797], widget_inspector._Location);
    },
    get C1795() {
      return C1795 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1796 || CT.C1796,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1800() {
      return C1800 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C1801() {
      return C1801 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C1799() {
      return C1799 = dart.constList([C1800 || CT.C1800, C1801 || CT.C1801], widget_inspector._Location);
    },
    get C1798() {
      return C1798 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1799 || CT.C1799,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1804() {
      return C1804 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C1803() {
      return C1803 = dart.constList([C1804 || CT.C1804], widget_inspector._Location);
    },
    get C1802() {
      return C1802 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1803 || CT.C1803,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1807() {
      return C1807 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C1808() {
      return C1808 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onRefresh",
        [_Location_column]: 19,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C1809() {
      return C1809 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLoad",
        [_Location_column]: 19,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C1810() {
      return C1810 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "footer",
        [_Location_column]: 19,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C1806() {
      return C1806 = dart.constList([C1807 || CT.C1807, C1808 || CT.C1808, C1809 || CT.C1809, C1810 || CT.C1810], widget_inspector._Location);
    },
    get C1805() {
      return C1805 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1806 || CT.C1806,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1813() {
      return C1813 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C1812() {
      return C1812 = dart.constList([C1813 || CT.C1813], widget_inspector._Location);
    },
    get C1811() {
      return C1811 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1812 || CT.C1812,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1816() {
      return C1816 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 11,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C1815() {
      return C1815 = dart.constList([C1816 || CT.C1816], widget_inspector._Location);
    },
    get C1814() {
      return C1814 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1815 || CT.C1815,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1819() {
      return C1819 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 53,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C1818() {
      return C1818 = dart.constList([C1819 || CT.C1819], widget_inspector._Location);
    },
    get C1817() {
      return C1817 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1818 || CT.C1818,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1822() {
      return C1822 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C1823() {
      return C1823 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 57,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C1821() {
      return C1821 = dart.constList([C1822 || CT.C1822, C1823 || CT.C1823], widget_inspector._Location);
    },
    get C1820() {
      return C1820 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1821 || CT.C1821,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1826() {
      return C1826 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C1825() {
      return C1825 = dart.constList([C1826 || CT.C1826], widget_inspector._Location);
    },
    get C1824() {
      return C1824 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1825 || CT.C1825,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1829() {
      return C1829 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 33,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C1830() {
      return C1830 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 35,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C1828() {
      return C1828 = dart.constList([C978 || CT.C978, C1829 || CT.C1829, C1830 || CT.C1830], widget_inspector._Location);
    },
    get C1827() {
      return C1827 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1828 || CT.C1828,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1831() {
      return C1831 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C981 || CT.C981,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1834() {
      return C1834 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 29,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C1835() {
      return C1835 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 29,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C1833() {
      return C1833 = dart.constList([C1834 || CT.C1834, C1835 || CT.C1835], widget_inspector._Location);
    },
    get C1832() {
      return C1832 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1833 || CT.C1833,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1838() {
      return C1838 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 27,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C1839() {
      return C1839 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 27,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C1840() {
      return C1840 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C1837() {
      return C1837 = dart.constList([C1838 || CT.C1838, C1839 || CT.C1839, C1840 || CT.C1840], widget_inspector._Location);
    },
    get C1836() {
      return C1836 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1837 || CT.C1837,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1843() {
      return C1843 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C1842() {
      return C1842 = dart.constList([C1843 || CT.C1843], widget_inspector._Location);
    },
    get C1841() {
      return C1841 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1842 || CT.C1842,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1846() {
      return C1846 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C1845() {
      return C1845 = dart.constList([C1846 || CT.C1846], widget_inspector._Location);
    },
    get C1844() {
      return C1844 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1845 || CT.C1845,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1849() {
      return C1849 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C1850() {
      return C1850 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 21,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C1851() {
      return C1851 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 21,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C1852() {
      return C1852 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 21,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C1853() {
      return C1853 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 35,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C1848() {
      return C1848 = dart.constList([C1849 || CT.C1849, C1850 || CT.C1850, C1851 || CT.C1851, C1852 || CT.C1852, C1853 || CT.C1853], widget_inspector._Location);
    },
    get C1847() {
      return C1847 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1848 || CT.C1848,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1856() {
      return C1856 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 21,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C1857() {
      return C1857 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C1858() {
      return C1858 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C1855() {
      return C1855 = dart.constList([C1856 || CT.C1856, C1857 || CT.C1857, C1858 || CT.C1858], widget_inspector._Location);
    },
    get C1854() {
      return C1854 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1855 || CT.C1855,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1861() {
      return C1861 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 57,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C1862() {
      return C1862 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 21,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C1863() {
      return C1863 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 21,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C1864() {
      return C1864 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 21,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C1865() {
      return C1865 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 35,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C1860() {
      return C1860 = dart.constList([C1861 || CT.C1861, C1862 || CT.C1862, C1863 || CT.C1863, C1864 || CT.C1864, C1865 || CT.C1865], widget_inspector._Location);
    },
    get C1859() {
      return C1859 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1860 || CT.C1860,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1868() {
      return C1868 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 21,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C1869() {
      return C1869 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C1870() {
      return C1870 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C1867() {
      return C1867 = dart.constList([C1868 || CT.C1868, C1869 || CT.C1869, C1870 || CT.C1870], widget_inspector._Location);
    },
    get C1866() {
      return C1866 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1867 || CT.C1867,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 168,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1873() {
      return C1873 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 58,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C1874() {
      return C1874 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 21,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C1875() {
      return C1875 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 21,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C1876() {
      return C1876 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 21,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C1877() {
      return C1877 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 35,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C1872() {
      return C1872 = dart.constList([C1873 || CT.C1873, C1874 || CT.C1874, C1875 || CT.C1875, C1876 || CT.C1876, C1877 || CT.C1877], widget_inspector._Location);
    },
    get C1871() {
      return C1871 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1872 || CT.C1872,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1880() {
      return C1880 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 21,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C1881() {
      return C1881 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C1882() {
      return C1882 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C1879() {
      return C1879 = dart.constList([C1880 || CT.C1880, C1881 || CT.C1881, C1882 || CT.C1882], widget_inspector._Location);
    },
    get C1878() {
      return C1878 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1879 || CT.C1879,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 180,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1885() {
      return C1885 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 50,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C1886() {
      return C1886 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 27,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C1887() {
      return C1887 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 27,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C1888() {
      return C1888 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 27,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C1889() {
      return C1889 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 41,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C1884() {
      return C1884 = dart.constList([C1885 || CT.C1885, C1886 || CT.C1886, C1887 || CT.C1887, C1888 || CT.C1888, C1889 || CT.C1889], widget_inspector._Location);
    },
    get C1883() {
      return C1883 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1884 || CT.C1884,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 203,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1892() {
      return C1892 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 27,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C1893() {
      return C1893 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C1894() {
      return C1894 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C1891() {
      return C1891 = dart.constList([C1892 || CT.C1892, C1893 || CT.C1893, C1894 || CT.C1894], widget_inspector._Location);
    },
    get C1890() {
      return C1890 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1891 || CT.C1891,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 200,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1897() {
      return C1897 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 23,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C1898() {
      return C1898 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C1896() {
      return C1896 = dart.constList([C1897 || CT.C1897, C1898 || CT.C1898], widget_inspector._Location);
    },
    get C1895() {
      return C1895 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1896 || CT.C1896,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 194,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1901() {
      return C1901 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C1900() {
      return C1900 = dart.constList([C1901 || CT.C1901], widget_inspector._Location);
    },
    get C1899() {
      return C1899 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1900 || CT.C1900,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 193,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1904() {
      return C1904 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 59,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C1905() {
      return C1905 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C1903() {
      return C1903 = dart.constList([C1904 || CT.C1904, C1905 || CT.C1905], widget_inspector._Location);
    },
    get C1902() {
      return C1902 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1903 || CT.C1903,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 220,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1908() {
      return C1908 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C1907() {
      return C1907 = dart.constList([C1908 || CT.C1908], widget_inspector._Location);
    },
    get C1906() {
      return C1906 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1907 || CT.C1907,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1911() {
      return C1911 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 231,
        [_Location_file]: null
      });
    },
    get C1912() {
      return C1912 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C1910() {
      return C1910 = dart.constList([C1911 || CT.C1911, C1912 || CT.C1912], widget_inspector._Location);
    },
    get C1909() {
      return C1909 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1910 || CT.C1910,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 230,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1915() {
      return C1915 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 43,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C1916() {
      return C1916 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 56,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C1914() {
      return C1914 = dart.constList([C1915 || CT.C1915, C1916 || CT.C1916], widget_inspector._Location);
    },
    get C1913() {
      return C1913 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1914 || CT.C1914,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 237,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1919() {
      return C1919 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C1918() {
      return C1918 = dart.constList([C1919 || CT.C1919], widget_inspector._Location);
    },
    get C1917() {
      return C1917 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1918 || CT.C1918,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 228,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1922() {
      return C1922 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C1921() {
      return C1921 = dart.constList([C1922 || CT.C1922], widget_inspector._Location);
    },
    get C1920() {
      return C1920 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1921 || CT.C1921,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 216,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1925() {
      return C1925 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C1926() {
      return C1926 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C1924() {
      return C1924 = dart.constList([C1925 || CT.C1925, C1926 || CT.C1926], widget_inspector._Location);
    },
    get C1923() {
      return C1923 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1924 || CT.C1924,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1929() {
      return C1929 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C1928() {
      return C1928 = dart.constList([C1929 || CT.C1929], widget_inspector._Location);
    },
    get C1927() {
      return C1927 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1928 || CT.C1928,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1932() {
      return C1932 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C1933() {
      return C1933 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C1934() {
      return C1934 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C1931() {
      return C1931 = dart.constList([C1932 || CT.C1932, C1933 || CT.C1933, C1934 || CT.C1934], widget_inspector._Location);
    },
    get C1930() {
      return C1930 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1931 || CT.C1931,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1937() {
      return C1937 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C1938() {
      return C1938 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C1936() {
      return C1936 = dart.constList([C1937 || CT.C1937, C1938 || CT.C1938], widget_inspector._Location);
    },
    get C1935() {
      return C1935 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1936 || CT.C1936,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1939() {
      return C1939 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 251,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1942() {
      return C1942 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 43,
        [_Location_line]: 270,
        [_Location_file]: null
      });
    },
    get C1943() {
      return C1943 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 15,
        [_Location_line]: 271,
        [_Location_file]: null
      });
    },
    get C1941() {
      return C1941 = dart.constList([C1942 || CT.C1942, C1943 || CT.C1943], widget_inspector._Location);
    },
    get C1940() {
      return C1940 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1941 || CT.C1941,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 269,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1946() {
      return C1946 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C1947() {
      return C1947 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 281,
        [_Location_file]: null
      });
    },
    get C1945() {
      return C1945 = dart.constList([C1946 || CT.C1946, C1947 || CT.C1947], widget_inspector._Location);
    },
    get C1944() {
      return C1944 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1945 || CT.C1945,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 268,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1950() {
      return C1950 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 11,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C1951() {
      return C1951 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 11,
        [_Location_line]: 260,
        [_Location_file]: null
      });
    },
    get C1952() {
      return C1952 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C1953() {
      return C1953 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "gridDelegate",
        [_Location_column]: 11,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C1954() {
      return C1954 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 11,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C1955() {
      return C1955 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 9,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C1949() {
      return C1949 = dart.constList([C1950 || CT.C1950, C1951 || CT.C1951, C1952 || CT.C1952, C1953 || CT.C1953, C1954 || CT.C1954, C1955 || CT.C1955], widget_inspector._Location);
    },
    get C1948() {
      return C1948 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1949 || CT.C1949,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 258,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1958() {
      return C1958 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C1957() {
      return C1957 = dart.constList([C1958 || CT.C1958], widget_inspector._Location);
    },
    get C1956() {
      return C1956 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1957 || CT.C1957,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 257,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1961() {
      return C1961 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 312,
        [_Location_file]: null
      });
    },
    get C1962() {
      return C1962 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 15,
        [_Location_line]: 315,
        [_Location_file]: null
      });
    },
    get C1963() {
      return C1963 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 316,
        [_Location_file]: null
      });
    },
    get C1960() {
      return C1960 = dart.constList([C1961 || CT.C1961, C1962 || CT.C1962, C1963 || CT.C1963], widget_inspector._Location);
    },
    get C1959() {
      return C1959 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1960 || CT.C1960,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 312,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1966() {
      return C1966 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 15,
        [_Location_line]: 310,
        [_Location_file]: null
      });
    },
    get C1967() {
      return C1967 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 312,
        [_Location_file]: null
      });
    },
    get C1965() {
      return C1965 = dart.constList([C1966 || CT.C1966, C1967 || CT.C1967], widget_inspector._Location);
    },
    get C1964() {
      return C1964 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1965 || CT.C1965,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 309,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1970() {
      return C1970 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C1971() {
      return C1971 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 15,
        [_Location_line]: 329,
        [_Location_file]: null
      });
    },
    get C1972() {
      return C1972 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 330,
        [_Location_file]: null
      });
    },
    get C1969() {
      return C1969 = dart.constList([C1970 || CT.C1970, C1971 || CT.C1971, C1972 || CT.C1972], widget_inspector._Location);
    },
    get C1968() {
      return C1968 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1969 || CT.C1969,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 326,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1975() {
      return C1975 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 15,
        [_Location_line]: 324,
        [_Location_file]: null
      });
    },
    get C1976() {
      return C1976 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C1974() {
      return C1974 = dart.constList([C1975 || CT.C1975, C1976 || CT.C1976], widget_inspector._Location);
    },
    get C1973() {
      return C1973 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1974 || CT.C1974,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 323,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1979() {
      return C1979 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 339,
        [_Location_file]: null
      });
    },
    get C1980() {
      return C1980 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 15,
        [_Location_line]: 341,
        [_Location_file]: null
      });
    },
    get C1981() {
      return C1981 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 15,
        [_Location_line]: 342,
        [_Location_file]: null
      });
    },
    get C1982() {
      return C1982 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 343,
        [_Location_file]: null
      });
    },
    get C1978() {
      return C1978 = dart.constList([C1979 || CT.C1979, C1980 || CT.C1980, C1981 || CT.C1981, C1982 || CT.C1982], widget_inspector._Location);
    },
    get C1977() {
      return C1977 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1978 || CT.C1978,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 339,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1985() {
      return C1985 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 336,
        [_Location_file]: null
      });
    },
    get C1986() {
      return C1986 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 339,
        [_Location_file]: null
      });
    },
    get C1984() {
      return C1984 = dart.constList([C1985 || CT.C1985, C1986 || CT.C1986], widget_inspector._Location);
    },
    get C1983() {
      return C1983 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1984 || CT.C1984,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 335,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1989() {
      return C1989 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 322,
        [_Location_file]: null
      });
    },
    get C1988() {
      return C1988 = dart.constList([C1989 || CT.C1989], widget_inspector._Location);
    },
    get C1987() {
      return C1987 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1988 || CT.C1988,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 321,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1990() {
      return C1990 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 352,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/Cricle/circel_more_page.dart"
      });
    },
    get C1991() {
      return C1991 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/novel_cover_view.dart"
      });
    },
    get C1994() {
      return C1994 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C1993() {
      return C1993 = dart.constList([C1994 || CT.C1994, C1623 || CT.C1623], widget_inspector._Location);
    },
    get C1992() {
      return C1992 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1993 || CT.C1993,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/novel_cover_view.dart"
      });
    },
    get C1997() {
      return C1997 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C1996() {
      return C1996 = dart.constList([C1997 || CT.C1997], widget_inspector._Location);
    },
    get C1995() {
      return C1995 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1996 || CT.C1996,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2000() {
      return C2000 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C1999() {
      return C1999 = dart.constList([C2000 || CT.C2000], widget_inspector._Location);
    },
    get C1998() {
      return C1998 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1999 || CT.C1999,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2003() {
      return C2003 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C2004() {
      return C2004 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C2002() {
      return C2002 = dart.constList([C2003 || CT.C2003, C2004 || CT.C2004], widget_inspector._Location);
    },
    get C2001() {
      return C2001 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2002 || CT.C2002,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2007() {
      return C2007 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C2006() {
      return C2006 = dart.constList([C2007 || CT.C2007], widget_inspector._Location);
    },
    get C2005() {
      return C2005 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2006 || CT.C2006,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2010() {
      return C2010 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 31,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C2011() {
      return C2011 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 25,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C2012() {
      return C2012 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 25,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C2009() {
      return C2009 = dart.constList([C2010 || CT.C2010, C2011 || CT.C2011, C2012 || CT.C2012], widget_inspector._Location);
    },
    get C2008() {
      return C2008 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2009 || CT.C2009,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2015() {
      return C2015 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C2016() {
      return C2016 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C2014() {
      return C2014 = dart.constList([C2015 || CT.C2015, C2016 || CT.C2016], widget_inspector._Location);
    },
    get C2013() {
      return C2013 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2014 || CT.C2014,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2019() {
      return C2019 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C2018() {
      return C2018 = dart.constList([C2019 || CT.C2019], widget_inspector._Location);
    },
    get C2017() {
      return C2017 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2018 || CT.C2018,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2022() {
      return C2022 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C2023() {
      return C2023 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 19,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C2021() {
      return C2021 = dart.constList([C2022 || CT.C2022, C2023 || CT.C2023], widget_inspector._Location);
    },
    get C2020() {
      return C2020 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2021 || CT.C2021,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2026() {
      return C2026 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C2025() {
      return C2025 = dart.constList([C2026 || CT.C2026], widget_inspector._Location);
    },
    get C2024() {
      return C2024 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2025 || CT.C2025,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2029() {
      return C2029 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C2028() {
      return C2028 = dart.constList([C2029 || CT.C2029], widget_inspector._Location);
    },
    get C2027() {
      return C2027 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2028 || CT.C2028,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2032() {
      return C2032 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C2031() {
      return C2031 = dart.constList([C2032 || CT.C2032], widget_inspector._Location);
    },
    get C2030() {
      return C2030 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2031 || CT.C2031,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2035() {
      return C2035 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C2034() {
      return C2034 = dart.constList([C2035 || CT.C2035], widget_inspector._Location);
    },
    get C2033() {
      return C2033 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2034 || CT.C2034,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2038() {
      return C2038 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 43,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C2039() {
      return C2039 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 43,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C2037() {
      return C2037 = dart.constList([C2038 || CT.C2038, C2039 || CT.C2039], widget_inspector._Location);
    },
    get C2036() {
      return C2036 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2037 || CT.C2037,
        [_Location_name]: null,
        [_Location_column]: 48,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2042() {
      return C2042 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 41,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C2043() {
      return C2043 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 41,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C2044() {
      return C2044 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 41,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C2041() {
      return C2041 = dart.constList([C2042 || CT.C2042, C2043 || CT.C2043, C2044 || CT.C2044], widget_inspector._Location);
    },
    get C2040() {
      return C2040 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2041 || CT.C2041,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2047() {
      return C2047 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 37,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C2048() {
      return C2048 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C2046() {
      return C2046 = dart.constList([C2047 || CT.C2047, C2048 || CT.C2048], widget_inspector._Location);
    },
    get C2045() {
      return C2045 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2046 || CT.C2046,
        [_Location_name]: null,
        [_Location_column]: 43,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2051() {
      return C2051 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "direction",
        [_Location_column]: 27,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C2052() {
      return C2052 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 27,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C2053() {
      return C2053 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "spacing",
        [_Location_column]: 27,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C2054() {
      return C2054 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "runSpacing",
        [_Location_column]: 27,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C2055() {
      return C2055 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C2050() {
      return C2050 = dart.constList([C2051 || CT.C2051, C2052 || CT.C2052, C2053 || CT.C2053, C2054 || CT.C2054, C2055 || CT.C2055], widget_inspector._Location);
    },
    get C2049() {
      return C2049 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2050 || CT.C2050,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2058() {
      return C2058 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 21,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C2057() {
      return C2057 = dart.constList([C2058 || CT.C2058], widget_inspector._Location);
    },
    get C2056() {
      return C2056 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2057 || CT.C2057,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2059() {
      return C2059 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2062() {
      return C2062 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 14,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C2063() {
      return C2063 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 14,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C2061() {
      return C2061 = dart.constList([C2062 || CT.C2062, C2063 || CT.C2063], widget_inspector._Location);
    },
    get C2060() {
      return C2060 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2061 || CT.C2061,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2066() {
      return C2066 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C2065() {
      return C2065 = dart.constList([C2066 || CT.C2066], widget_inspector._Location);
    },
    get C2064() {
      return C2064 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2065 || CT.C2065,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2069() {
      return C2069 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C2068() {
      return C2068 = dart.constList([C2069 || CT.C2069], widget_inspector._Location);
    },
    get C2067() {
      return C2067 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2068 || CT.C2068,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    },
    get C2072() {
      return C2072 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C2073() {
      return C2073 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C2071() {
      return C2071 = dart.constList([C2072 || CT.C2072, C2073 || CT.C2073], widget_inspector._Location);
    },
    get C2070() {
      return C2070 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2071 || CT.C2071,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_suggest_page.dart"
      });
    }
  });
  const keywords$ = dart.privateName(search_goods_page, "SearchGoodsPage.keywords");
  search_goods_page.SearchGoodsPage = class SearchGoodsPage extends framework.StatefulWidget {
    get keywords() {
      return this[keywords$];
    }
    set keywords(value) {
      super.keywords = value;
    }
    createState() {
      return new search_goods_page._SearchGoodsPageState.new();
    }
  };
  (search_goods_page.SearchGoodsPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let keywords = opts && 'keywords' in opts ? opts.keywords : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[keywords$] = keywords;
    search_goods_page.SearchGoodsPage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_goods_page.SearchGoodsPage.prototype;
  dart.addTypeTests(search_goods_page.SearchGoodsPage);
  dart.setMethodSignature(search_goods_page.SearchGoodsPage, () => ({
    __proto__: dart.getMethods(search_goods_page.SearchGoodsPage.__proto__),
    createState: dart.fnType(search_goods_page._SearchGoodsPageState, [])
  }));
  dart.setLibraryUri(search_goods_page.SearchGoodsPage, "package:hkbook/page/category/search_goods_page.dart");
  dart.setFieldSignature(search_goods_page.SearchGoodsPage, () => ({
    __proto__: dart.getFields(search_goods_page.SearchGoodsPage.__proto__),
    keywords: dart.finalFieldType(core.String)
  }));
  const _keywordsTextEditingController = dart.privateName(search_goods_page, "_keywordsTextEditingController");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  let C7;
  let C8;
  let C6;
  let C5;
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
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C32;
  let C30;
  let C29;
  let C35;
  let C36;
  let C37;
  let C34;
  let C33;
  let C40;
  let C39;
  let C38;
  let C43;
  let C42;
  let C41;
  const _buildContentWidget = dart.privateName(search_goods_page, "_buildContentWidget");
  let C46;
  let C47;
  let C45;
  let C44;
  let C50;
  let C49;
  let C48;
  let C53;
  let C52;
  let C51;
  let C56;
  let C57;
  let C58;
  let C55;
  let C54;
  let C61;
  let C60;
  let C59;
  let C63;
  let C62;
  let C66;
  let C65;
  let C64;
  let C69;
  let C68;
  let C67;
  search_goods_page._SearchGoodsPageState = class _SearchGoodsPageState extends framework.State$(search_goods_page.SearchGoodsPage) {
    initState() {
      super.initState();
      this[_keywordsTextEditingController].text = this.widget.keywords;
      if (this.widget.keywords != null) {
        this.seachTxtChanged(this.widget.keywords);
      }
    }
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: sq_color.SQColor.mainBackgroundColor, appBar: new preferred_size.PreferredSize.new({child: new app_bar.AppBar.new({brightness: ui.Brightness.light, backgroundColor: sq_color.SQColor.mainBackgroundColor, elevation: 0.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), preferredSize: new ui.Size.fromHeight(0.0), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), body: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Row.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({width: 8.0, $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new basic.Expanded.new({flex: 1, child: new search_card.SearchCardWidget.new({elevation: 0.0, autofocus: true, textEditingController: this[_keywordsTextEditingController], isShowLeading: false, hintText: "请输入您要搜索的商品", onSubmitted: dart.fn(value => {
                      provide.Provide.value(search_history.HistoryProvide, context).save(value);
                      app_navigator.AppNavigator.pushSearchResult(context, value);
                    }, StringToNull()), onChanged: dart.fn(value => {
                      this.seachTxtChanged(value);
                    }, StringToNull()), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new container.Container.new({alignment: alignment.Alignment.center, width: new flutter_screenutil.ScreenUtil.new().setWidth(80), child: new gesture_detector.GestureDetector.new({child: new text.Text.new("取消", {style: new text_style.TextStyle.new({fontSize: new flutter_screenutil.ScreenUtil.new().setSp(30)}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), onTap: dart.fn(() => {
                      navigator.Navigator.pop(core.Object, context);
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), new basic.SizedBox.new({width: 8.0, $creationLocationd_0dea112b090073317d4: C38 || CT.C38})]), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), new basic.Expanded.new({child: this.recomendWords[$length] === 0 ? this[_buildContentWidget]() : new recomend.RecomendListWidget.new(this.recomendWords, {onItemTap: dart.fn(value => {
                  provide.Provide.value(search_history.HistoryProvide, context).save(value);
                  app_navigator.AppNavigator.pushSearchResult(context, value);
                }, StringToNull()), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48})]), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54});
    }
    [_buildContentWidget]() {
      return new basic.Column.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 8.0, $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), new basic.Expanded.new({child: new search_suggest_page.SearchSuggestPage.new({$creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64})]), $creationLocationd_0dea112b090073317d4: C67 || CT.C67});
    }
    seachTxtChanged(q) {
      return async.async(dart.void, (function* seachTxtChanged() {
        core.print(q);
        let url = "https://suggest.taobao.com/sug";
        yield service_method.normalRequest(url, new (IdentityMapOfString$String()).from(["code", "utf-8", "area", "c2c", "q", q])).then(core.Null, dart.fn(res => {
          if (res == null) return;
          let datajson = convert.json.decode(dart.toString(res));
          let data = core.List.as(dart.dsend(datajson, '_get', ["result"]));
          this.recomendWords = data[$map](core.String, dart.fn(i => {
            let item = core.List.as(i);
            return core.String.as(item[$_get](0));
          }, dynamicToString()))[$toList]();
          this.setState(dart.fn(() => {
          }, VoidToNull()));
        }, dynamicToNull()));
      }).bind(this));
    }
  };
  (search_goods_page._SearchGoodsPageState.new = function() {
    this.recomendWords = JSArrayOfString().of([]);
    this[_keywordsTextEditingController] = new editable_text.TextEditingController.new();
    search_goods_page._SearchGoodsPageState.__proto__.new.call(this);
    ;
  }).prototype = search_goods_page._SearchGoodsPageState.prototype;
  dart.addTypeTests(search_goods_page._SearchGoodsPageState);
  dart.setMethodSignature(search_goods_page._SearchGoodsPageState, () => ({
    __proto__: dart.getMethods(search_goods_page._SearchGoodsPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildContentWidget]: dart.fnType(framework.Widget, []),
    seachTxtChanged: dart.fnType(dart.void, [core.String])
  }));
  dart.setLibraryUri(search_goods_page._SearchGoodsPageState, "package:hkbook/page/category/search_goods_page.dart");
  dart.setFieldSignature(search_goods_page._SearchGoodsPageState, () => ({
    __proto__: dart.getFields(search_goods_page._SearchGoodsPageState.__proto__),
    recomendWords: dart.fieldType(core.List$(core.String)),
    [_keywordsTextEditingController]: dart.fieldType(editable_text.TextEditingController)
  }));
  let C70;
  let C73;
  let C74;
  let C75;
  let C76;
  let C77;
  let C72;
  let C71;
  app_scene.AppScene = class AppScene extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({title: "淘优惠券", navigatorObservers: JSArrayOfNavigatorObserver().of([app_scene.routeObserver]), debugShowCheckedModeBanner: false, theme: theme_data.ThemeData.new({primaryColor: colors.Colors.white, dividerColor: new ui.Color.new(4293848814), scaffoldBackgroundColor: sq_color.SQColor.paper, textTheme: new text_theme.TextTheme.new({body1: new text_style.TextStyle.new({color: sq_color.SQColor.darkGray})})}), home: new root_scene.RootScene.new({$creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C71 || CT.C71});
    }
  };
  (app_scene.AppScene.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    app_scene.AppScene.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = app_scene.AppScene.prototype;
  dart.addTypeTests(app_scene.AppScene);
  dart.setMethodSignature(app_scene.AppScene, () => ({
    __proto__: dart.getMethods(app_scene.AppScene.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(app_scene.AppScene, "package:hkbook/app/app_scene.dart");
  dart.defineLazy(app_scene, {
    /*app_scene.routeObserver*/get routeObserver() {
      return new (RouteObserverOfPageRoute()).new();
    }
  });
  root_scene.RootScene = class RootScene extends framework.StatefulWidget {
    createState() {
      return new root_scene.RootSceneState.new();
    }
  };
  (root_scene.RootScene.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    root_scene.RootScene.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = root_scene.RootScene.prototype;
  dart.addTypeTests(root_scene.RootScene);
  dart.setMethodSignature(root_scene.RootScene, () => ({
    __proto__: dart.getMethods(root_scene.RootScene.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(root_scene.RootScene, "package:hkbook/app/root_scene.dart");
  const _tabIndex = dart.privateName(root_scene, "_tabIndex");
  const _tabImages = dart.privateName(root_scene, "_tabImages");
  let C80;
  let C79;
  let C78;
  let C83;
  let C82;
  let C81;
  let C86;
  let C85;
  let C84;
  let C89;
  let C88;
  let C87;
  const _tabSelectedImages = dart.privateName(root_scene, "_tabSelectedImages");
  let C92;
  let C91;
  let C90;
  let C95;
  let C94;
  let C93;
  let C98;
  let C97;
  let C96;
  let C101;
  let C100;
  let C99;
  const _pages = dart.privateName(root_scene, "_pages");
  const _controller = dart.privateName(root_scene, "_controller");
  const _couponList = dart.privateName(root_scene, "_couponList");
  let C104;
  let C105;
  let C103;
  let C102;
  let C106;
  let C107;
  let C108;
  const _mainView = dart.privateName(root_scene, "_mainView");
  let C111;
  let C112;
  let C113;
  let C114;
  let C110;
  let C109;
  let C117;
  let C116;
  let C115;
  let C120;
  let C119;
  let C118;
  let C123;
  let C122;
  let C121;
  let C126;
  let C125;
  let C124;
  let C129;
  let C130;
  let C131;
  let C132;
  let C133;
  let C128;
  let C127;
  let C136;
  let C137;
  let C135;
  let C134;
  const isFinishSetup = dart.privateName(root_scene, "RootSceneState.isFinishSetup");
  const homeVC = dart.privateName(root_scene, "RootSceneState.homeVC");
  root_scene.RootSceneState = class RootSceneState extends framework.State$(root_scene.RootScene) {
    get isFinishSetup() {
      return this[isFinishSetup];
    }
    set isFinishSetup(value) {
      this[isFinishSetup] = value;
    }
    get homeVC() {
      return this[homeVC];
    }
    set homeVC(value) {
      this[homeVC] = value;
    }
    initState() {
      super.initState();
      this[_couponList](1, "3756", "");
      this.homeVC = new home_main.HomeMain.new(dart.fn(() => {
        this.onTap(1);
      }, VoidToNull()), JSArrayOfMapData().of([]), {$creationLocationd_0dea112b090073317d4: C102 || CT.C102});
      this[_pages][$addAll](JSArrayOfWidget().of([this.homeVC, new category_page.CategoryPage.new({$creationLocationd_0dea112b090073317d4: C106 || CT.C106}), new cricel_page.CricelPage.new({$creationLocationd_0dea112b090073317d4: C107 || CT.C107}), new mine_page.MeScene.new({$creationLocationd_0dea112b090073317d4: C108 || CT.C108})]));
      this[_controller] = new page_view.PageController.new({initialPage: 0});
      this.setupApp();
    }
    dispose() {
      super.dispose();
    }
    setupApp() {
      return async.async(dart.dynamic, (function* setupApp() {
        global.preferences = (yield shared_preferences.SharedPreferences.getInstance());
        this.setState(dart.fn(() => {
          this.isFinishSetup = true;
        }, VoidToNull()));
      }).bind(this));
    }
    build(context) {
      let t0;
      flutter_screenutil.ScreenUtil.instance = (t0 = new flutter_screenutil.ScreenUtil.new({width: 750.0, height: 1334.0}), t0.init(context), t0);
      return this[_mainView]();
    }
    [_mainView]() {
      return new scaffold.Scaffold.new({body: new page_view.PageView.builder({physics: new scroll_physics.NeverScrollableScrollPhysics.new(), controller: this[_controller], itemCount: this[_pages][$length], itemBuilder: dart.fn((context, index) => this[_pages][$_get](index), BuildContextAndintToWidget()), $creationLocationd_0dea112b090073317d4: C109 || CT.C109}), bottomNavigationBar: new bottom_tab_bar.CupertinoTabBar.new({backgroundColor: colors.Colors.white, activeColor: sq_color.SQColor.primary, items: JSArrayOfBottomNavigationBarItem().of([new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: this.getTabIcon(0), title: new text.Text.new("首页", {$creationLocationd_0dea112b090073317d4: C115 || CT.C115})}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: this.getTabIcon(1), title: new text.Text.new("分类", {$creationLocationd_0dea112b090073317d4: C118 || CT.C118})}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: this.getTabIcon(2), title: new text.Text.new("看看", {$creationLocationd_0dea112b090073317d4: C121 || CT.C121})}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: this.getTabIcon(3), title: new text.Text.new("我的", {$creationLocationd_0dea112b090073317d4: C124 || CT.C124})})]), currentIndex: this[_tabIndex], onTap: dart.fn(index => {
            this.onTap(index);
          }, intToNull()), $creationLocationd_0dea112b090073317d4: C127 || CT.C127}), $creationLocationd_0dea112b090073317d4: C134 || CT.C134});
    }
    onTap(index) {
      core.print(index);
      if (index == this[_tabIndex]) {
        return;
      }
      this[_tabIndex] = index;
      this[_controller].jumpToPage(this[_tabIndex]);
      this.setState(dart.fn(() => {
      }, VoidToNull()));
    }
    getTabIcon(index) {
      if (index == this[_tabIndex]) {
        return this[_tabSelectedImages][$_get](index);
      } else {
        return this[_tabImages][$_get](index);
      }
    }
    [_couponList](page, materiaqlId, sort) {
      return async.async(dart.void, (function* _couponList() {
        let formdata = new (IdentityMapOfString$dynamic()).from(["app_key", "27675850", "session_key", "hank", "method", "taobao.tbk.dg.material.optional", "partner_id", "top-apitools", "format", "json", "v", "2.0", "sign_method", "md5", "timestamp", service_method.getTime(), "adzone_id", "109164900192", "force_sensitive_param_fuzzy", "true", "page_no", dart.str(page), "has_coupon", "true", "cat", "0", "page_size", "10", "material_id", materiaqlId]);
        yield service_method.request("couponList", formdata).then(core.Null, dart.fn(value => {
          let result = result_data.ResultData._check(value);
          let data = convert.json.decode(dart.toString(result.data));
          let cdata = new coupon_model.CounponModel.fromJson(MapOfString$dynamic()._check(data));
          if (cdata === null) {
            toast.ToastHelper.showToast(this.context, "网络错误,点击重新加载");
            this.homeVC.couponList = JSArrayOfMapData().of([]);
          } else {
            this.homeVC.couponList = cdata.tbkDgMaterialOptionalResponse.resultList.mapData;
          }
        }, dynamicToNull()));
      }).bind(this));
    }
  };
  (root_scene.RootSceneState.new = function() {
    this[_tabIndex] = 0;
    this[isFinishSetup] = false;
    this[_tabImages] = JSArrayOfImage().of([new image.Image.asset("home.png", {$creationLocationd_0dea112b090073317d4: C78 || CT.C78}), new image.Image.asset("fenlei.png", {$creationLocationd_0dea112b090073317d4: C81 || CT.C81}), new image.Image.asset("kankan.png", {$creationLocationd_0dea112b090073317d4: C84 || CT.C84}), new image.Image.asset("me.png", {$creationLocationd_0dea112b090073317d4: C87 || CT.C87})]);
    this[_tabSelectedImages] = JSArrayOfImage().of([new image.Image.asset("home_1.png", {$creationLocationd_0dea112b090073317d4: C90 || CT.C90}), new image.Image.asset("fenlei_1.png", {$creationLocationd_0dea112b090073317d4: C93 || CT.C93}), new image.Image.asset("kankan_1.png", {$creationLocationd_0dea112b090073317d4: C96 || CT.C96}), new image.Image.asset("me_1.png", {$creationLocationd_0dea112b090073317d4: C99 || CT.C99})]);
    this[homeVC] = null;
    this[_pages] = JSArrayOfWidget().of([]);
    this[_controller] = null;
    root_scene.RootSceneState.__proto__.new.call(this);
    ;
  }).prototype = root_scene.RootSceneState.prototype;
  dart.addTypeTests(root_scene.RootSceneState);
  dart.setMethodSignature(root_scene.RootSceneState, () => ({
    __proto__: dart.getMethods(root_scene.RootSceneState.__proto__),
    setupApp: dart.fnType(dart.dynamic, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_mainView]: dart.fnType(framework.Widget, []),
    onTap: dart.fnType(dart.void, [core.int]),
    getTabIcon: dart.fnType(image.Image, [core.int]),
    [_couponList]: dart.fnType(async.Future$(dart.void), [dart.dynamic, dart.dynamic, dart.dynamic])
  }));
  dart.setLibraryUri(root_scene.RootSceneState, "package:hkbook/app/root_scene.dart");
  dart.setFieldSignature(root_scene.RootSceneState, () => ({
    __proto__: dart.getFields(root_scene.RootSceneState.__proto__),
    [_tabIndex]: dart.fieldType(core.int),
    isFinishSetup: dart.fieldType(core.bool),
    [_tabImages]: dart.fieldType(core.List$(image.Image)),
    [_tabSelectedImages]: dart.fieldType(core.List$(image.Image)),
    homeVC: dart.fieldType(home_main.HomeMain),
    [_pages]: dart.fieldType(core.List$(framework.Widget)),
    [_controller]: dart.fieldType(page_view.PageController)
  }));
  service_method.createSign = function createSign(formdata) {
    let t0;
    let sign = global.TAOKAO_APPSECRET;
    let sortedKeys = (t0 = dart.dsend(dart.dload(formdata, 'keys'), 'toList', []), dart.dsend(t0, 'sort', []), t0);
    dart.dsend(sortedKeys, 'forEach', [dart.fn(key => {
        let value = dart.dsend(formdata, '_get', [key]);
        if (dart.equals(dart.dload(value, 'isEmpty'), false)) {
          sign = dart.notNull(sign) + dart.notNull(key) + dart.notNull(core.String._check(value));
        }
      }, StringToNull())]);
    sign = dart.notNull(sign) + dart.notNull(global.TAOKAO_APPSECRET);
    return service_method.generateMd5(sign);
  };
  service_method.generateMd5 = function generateMd5(data) {
    let content = new convert.Utf8Encoder.new().convert(data);
    let digest = md5.md5.convert(content);
    let h = hex.hex.encode(digest.bytes)[$toUpperCase]();
    return h;
  };
  service_method.getTime = function getTime() {
    let date = new core.DateTime.now();
    let format = new intl.DateFormat.new("yyyy-MM-dd HH:mm:ss");
    return format.format(date);
  };
  service_method.request = function request(url, formdata) {
    return async.async(dart.dynamic, function* request() {
      try {
        let response = null;
        let dio = dio$.Dio.new();
        dio.interceptors[$add](new headerInterceptors.HeaderInterceptors.new());
        dio.interceptors[$add](new logInterceptors.LogsInterceptors.new());
        dio.options.headers = service_method.httpHeaders;
        let p = formdata;
        let s = service_method.createSign(formdata);
        dart.dsend(p, '_set', ["sign", s]);
        response = (yield dio.get(dart.dynamic, service_url.servicePath[$_get](url), {queryParameters: MapOfString$dynamic()._check(p)}));
        return response;
      } catch (e$) {
        let e = dart.getThrown(e$);
        return null;
      }
    });
  };
  service_method.normalRequest = function normalRequest(url, formdata) {
    return async.async(dart.dynamic, function* normalRequest() {
      try {
        let response = null;
        let dio = dio$.Dio.new();
        dio.interceptors[$add](new headerInterceptors.HeaderInterceptors.new());
        dio.interceptors[$add](new logInterceptors.LogsInterceptors.new());
        dio.options.headers = service_method.httpHeaders;
        response = (yield dio.get(dart.dynamic, core.String._check(url), {queryParameters: MapOfString$dynamic()._check(formdata)}));
        return response;
      } catch (e$) {
        let e = dart.getThrown(e$);
        return null;
      }
    });
  };
  let C138;
  dart.defineLazy(service_method, {
    /*service_method.httpHeaders*/get httpHeaders() {
      return C138 || CT.C138;
    }
  });
  logInterceptors.LogsInterceptors = class LogsInterceptors extends interceptor.InterceptorsWrapper {
    onRequest(options) {
      return async.async(dart.dynamic, function* onRequest() {
        if (false) {
          core.print("请求url：" + dart.str(options.path));
          core.print("请求头: " + dart.notNull(dart.toString(options.headers)));
          if (options.data != null) {
            core.print("请求参数: " + dart.notNull(dart.toString(options.data)));
          }
        }
        return options;
      });
    }
    onResponse(response) {
      return async.async(dart.dynamic, function* onResponse() {
        if (false) {
          if (response != null) {
            core.print("返回参数: " + dart.notNull(dart.toString(response)));
          }
        }
        return response;
      });
    }
    onError(err) {
      return async.async(dart.dynamic, function* onError() {
        let t2, t2$;
        if (false) {
          core.print("请求异常: " + dart.notNull(dart.toString(err)));
          core.print((t2$ = "请求异常信息: " + dart.notNull((t2 = err.response, t2 == null ? null : dart.toString(t2))), t2$ === null ? "" : t2$));
        }
        return err;
      });
    }
  };
  (logInterceptors.LogsInterceptors.new = function() {
    logInterceptors.LogsInterceptors.__proto__.new.call(this);
    ;
  }).prototype = logInterceptors.LogsInterceptors.prototype;
  dart.addTypeTests(logInterceptors.LogsInterceptors);
  dart.setLibraryUri(logInterceptors.LogsInterceptors, "package:hkbook/service/interceptors/logInterceptors.dart");
  const _dio = dart.privateName(api, "_dio");
  api.HttpManager = class HttpManager extends core.Object {
    netFetch(url, params, header, option, opts) {
      let noTip = opts && 'noTip' in opts ? opts.noTip : false;
      return async.async(dart.dynamic, (function* netFetch() {
        let headers = new (IdentityMapOfString$dynamic()).new();
        if (header != null) {
          headers[$addAll](header);
        }
        if (option != null) {
          option.headers = headers;
        } else {
          option = new options.Options.new({method: "get"});
          option.headers = headers;
        }
        function resultError(e) {
          let errorResponse = null;
          if (e.response != null) {
            errorResponse = e.response;
          } else {
            errorResponse = new response$.Response.new({statusCode: 666});
          }
          if (dart.equals(e.type, dio_error.DioErrorType.CONNECT_TIMEOUT) || dart.equals(e.type, dio_error.DioErrorType.RECEIVE_TIMEOUT)) {
            errorResponse.statusCode = -2;
          }
          return new result_data.ResultData.new(result_data.Code.errorHandleFunction(errorResponse.statusCode, e.message, noTip), false, errorResponse.statusCode);
        }
        dart.fn(resultError, DioErrorToResultData());
        let response = null;
        try {
          response = (yield this[_dio].request(dart.dynamic, core.String._check(url), {data: params, options: option}));
        } catch (e$) {
          let e = dart.getThrown(e$);
          if (dio_error.DioError.is(e)) {
            return resultError(e);
          } else
            throw e$;
        }
        if (dio_error.DioError.is(response.data)) {
          return resultError(dio_error.DioError._check(response.data));
        }
        return response.data;
      }).bind(this));
    }
  };
  (api.HttpManager.new = function() {
    this[_dio] = dio$.Dio.new();
    this[_dio].interceptors[$add](new headerInterceptors.HeaderInterceptors.new());
    this[_dio].interceptors[$add](new logInterceptors.LogsInterceptors.new());
    this[_dio].interceptors[$add](new errorInterceptors.ErrorInterceptors.new(this[_dio]));
    this[_dio].interceptors[$add](new responseInterceptors.ResponseInterceptors.new());
  }).prototype = api.HttpManager.prototype;
  dart.addTypeTests(api.HttpManager);
  dart.setMethodSignature(api.HttpManager, () => ({
    __proto__: dart.getMethods(api.HttpManager.__proto__),
    netFetch: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic, core.Map$(core.String, dart.dynamic), options.Options], {noTip: dart.dynamic}, {})
  }));
  dart.setLibraryUri(api.HttpManager, "package:hkbook/service/api.dart");
  dart.setFieldSignature(api.HttpManager, () => ({
    __proto__: dart.getFields(api.HttpManager.__proto__),
    [_dio]: dart.fieldType(dio$.Dio)
  }));
  dart.defineLazy(api.HttpManager, {
    /*api.HttpManager.CONTENT_TYPE_JSON*/get CONTENT_TYPE_JSON() {
      return "application/json";
    },
    /*api.HttpManager.CONTENT_TYPE_FORM*/get CONTENT_TYPE_FORM() {
      return "application/x-www-form-urlencoded";
    }
  });
  dart.defineLazy(api, {
    /*api.httpManager*/get httpManager() {
      return new api.HttpManager.new();
    }
  });
  mine_page.MeScene = class MeScene extends framework.StatefulWidget {
    createState() {
      return new mine_page._MeSceneMainState.new();
    }
  };
  (mine_page.MeScene.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    mine_page.MeScene.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = mine_page.MeScene.prototype;
  dart.addTypeTests(mine_page.MeScene);
  dart.setMethodSignature(mine_page.MeScene, () => ({
    __proto__: dart.getMethods(mine_page.MeScene.__proto__),
    createState: dart.fnType(mine_page._MeSceneMainState, [])
  }));
  dart.setLibraryUri(mine_page.MeScene, "package:hkbook/page/mine/mine_page.dart");
  let C141;
  let C142;
  let C143;
  let C140;
  let C139;
  let C146;
  let C147;
  let C148;
  let C145;
  let C144;
  let C151;
  let C152;
  let C153;
  let C150;
  let C149;
  let C156;
  let C155;
  let C154;
  let C159;
  let C158;
  let C157;
  let C162;
  let C161;
  let C160;
  let C163;
  let C166;
  let C165;
  let C164;
  let C169;
  let C168;
  let C167;
  let C172;
  let C173;
  let C174;
  let C171;
  let C170;
  let C177;
  let C178;
  let C176;
  let C175;
  let C181;
  let C180;
  let C179;
  let C184;
  let C185;
  let C183;
  let C182;
  const State_AutomaticKeepAliveClientMixin$36 = class State_AutomaticKeepAliveClientMixin extends framework.State$(mine_page.MeScene) {};
  (State_AutomaticKeepAliveClientMixin$36.new = function() {
    automatic_keep_alive.AutomaticKeepAliveClientMixin$(mine_page.MeScene)[dart.mixinNew].call(this);
    State_AutomaticKeepAliveClientMixin$36.__proto__.new.call(this);
  }).prototype = State_AutomaticKeepAliveClientMixin$36.prototype;
  dart.applyMixin(State_AutomaticKeepAliveClientMixin$36, automatic_keep_alive.AutomaticKeepAliveClientMixin$(mine_page.MeScene));
  mine_page._MeSceneMainState = class _MeSceneMainState extends State_AutomaticKeepAliveClientMixin$36 {
    buildCells(context) {
      return new basic.Stack.new({children: JSArrayOfWidget().of([new container.Container.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new mine_cell.MeCell.new({title: "设置", iconName: "weibiaoti.png", onPressed: dart.fn(() => {
                    app_navigator.AppNavigator.pushClearCPage(context);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C139 || CT.C139}), new mine_cell.MeCell.new({title: "下载APP", iconName: "zhengcejiedu.png", onPressed: dart.fn(() => {
                    core.print("window.open(\"https://136951866.github.io/coupon/\");");
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C144 || CT.C144}), new mine_cell.MeCell.new({title: "关于我们", iconName: "guanyuwomen.png", onPressed: dart.fn(() => {
                    app_navigator.AppNavigator.pushAboutWePage(context);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C149 || CT.C149})]), $creationLocationd_0dea112b090073317d4: C154 || CT.C154}), $creationLocationd_0dea112b090073317d4: C157 || CT.C157})]), $creationLocationd_0dea112b090073317d4: C160 || CT.C160});
    }
    build(context) {
      super.build(context);
      return new (AnnotatedRegionOfSystemUiOverlayStyle()).new({value: system_chrome.SystemUiOverlayStyle.light, child: new basic.Stack.new({children: JSArrayOfWidget().of([new container.Container.new({color: colors.Colors.white, child: new refresher.EasyRefresh.new({child: new scroll_view.ListView.new({children: JSArrayOfWidget().of([new me_header.MeHeader.new({$creationLocationd_0dea112b090073317d4: C163 || CT.C163}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C164 || CT.C164}), this.buildCells(context)]), $creationLocationd_0dea112b090073317d4: C167 || CT.C167}), onRefresh: dart.fn(() => async.async(core.Null, function*() {
                }), VoidToFutureOfNull()), onLoad: dart.fn(() => async.async(core.Null, function*() {
                }), VoidToFutureOfNull()), $creationLocationd_0dea112b090073317d4: C170 || CT.C170}), $creationLocationd_0dea112b090073317d4: C175 || CT.C175})]), $creationLocationd_0dea112b090073317d4: C179 || CT.C179}), $creationLocationd_0dea112b090073317d4: C182 || CT.C182});
    }
    get wantKeepAlive() {
      return true;
    }
  };
  (mine_page._MeSceneMainState.new = function() {
    mine_page._MeSceneMainState.__proto__.new.call(this);
    ;
  }).prototype = mine_page._MeSceneMainState.prototype;
  dart.addTypeTests(mine_page._MeSceneMainState);
  dart.setMethodSignature(mine_page._MeSceneMainState, () => ({
    __proto__: dart.getMethods(mine_page._MeSceneMainState.__proto__),
    buildCells: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(mine_page._MeSceneMainState, () => ({
    __proto__: dart.getGetters(mine_page._MeSceneMainState.__proto__),
    wantKeepAlive: core.bool
  }));
  dart.setLibraryUri(mine_page._MeSceneMainState, "package:hkbook/page/mine/mine_page.dart");
  let C188;
  let C189;
  let C187;
  let C186;
  let C192;
  let C193;
  let C191;
  let C190;
  let C196;
  let C195;
  let C194;
  let C199;
  let C200;
  let C198;
  let C197;
  let C203;
  let C202;
  let C201;
  let C206;
  let C207;
  let C205;
  let C204;
  let C210;
  let C209;
  let C208;
  let C213;
  let C212;
  let C211;
  let C216;
  let C217;
  let C218;
  let C215;
  let C214;
  let C221;
  let C222;
  let C220;
  let C219;
  me_header.MeHeader = class MeHeader extends framework.StatelessWidget {
    build(context) {
      core.print("build 3");
      return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
        }, VoidToNull()), child: new container.Container.new({color: sq_color.SQColor.primary, padding: new edge_insets.EdgeInsets.fromLTRB(20.0, 30.0, 15.0, 15.0), child: new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({width: new flutter_screenutil.ScreenUtil.new().setWidth(140), child: new circle_avatar.CircleAvatar.new({radius: dart.notNull(new flutter_screenutil.ScreenUtil.new().setWidth(140)) / 2, backgroundImage: new image_resolution.AssetImage.new("login_logo.png"), $creationLocationd_0dea112b090073317d4: C186 || CT.C186}), $creationLocationd_0dea112b090073317d4: C190 || CT.C190}), new basic.SizedBox.new({width: 25.0, $creationLocationd_0dea112b090073317d4: C194 || CT.C194}), new basic.Expanded.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new text.Text.new("淘宝优惠券", {style: new text_style.TextStyle.new({fontSize: 18.0, color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C197 || CT.C197}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C201 || CT.C201})]), $creationLocationd_0dea112b090073317d4: C204 || CT.C204}), $creationLocationd_0dea112b090073317d4: C208 || CT.C208})]), $creationLocationd_0dea112b090073317d4: C211 || CT.C211}), $creationLocationd_0dea112b090073317d4: C214 || CT.C214}), $creationLocationd_0dea112b090073317d4: C219 || CT.C219});
    }
  };
  (me_header.MeHeader.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    me_header.MeHeader.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = me_header.MeHeader.prototype;
  dart.addTypeTests(me_header.MeHeader);
  dart.setMethodSignature(me_header.MeHeader, () => ({
    __proto__: dart.getMethods(me_header.MeHeader.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(me_header.MeHeader, "package:hkbook/page/mine/me_header.dart");
  let C225;
  let C224;
  let C223;
  let C228;
  let C229;
  let C227;
  let C226;
  let C232;
  let C231;
  let C230;
  let C235;
  let C236;
  let C234;
  let C233;
  let C237;
  let C240;
  let C239;
  let C238;
  let C243;
  let C242;
  let C241;
  let C246;
  let C247;
  let C248;
  let C249;
  let C245;
  let C244;
  let C252;
  let C253;
  let C254;
  let C251;
  let C250;
  let C257;
  let C256;
  let C255;
  let C260;
  let C261;
  let C259;
  let C258;
  let C264;
  let C265;
  let C263;
  let C262;
  const onPressed$ = dart.privateName(mine_cell, "MeCell.onPressed");
  const iconName$ = dart.privateName(mine_cell, "MeCell.iconName");
  const title$ = dart.privateName(mine_cell, "MeCell.title");
  mine_cell.MeCell = class MeCell extends framework.StatelessWidget {
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get iconName() {
      return this[iconName$];
    }
    set iconName(value) {
      super.iconName = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    build(context) {
      return new gesture_detector.GestureDetector.new({onTap: this.onPressed, child: new container.Container.new({color: colors.Colors.white, child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({color: sq_color.SQColor.white, height: new flutter_screenutil.ScreenUtil.new().setHeight(100), padding: new edge_insets.EdgeInsets.symmetric({horizontal: new flutter_screenutil.ScreenUtil.new().setWidth(20)}), child: new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({width: new flutter_screenutil.ScreenUtil.new().setHeight(45), child: new image.Image.asset(this.iconName, {$creationLocationd_0dea112b090073317d4: C223 || CT.C223}), $creationLocationd_0dea112b090073317d4: C226 || CT.C226}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C230 || CT.C230}), new text.Text.new(this.title, {style: new text_style.TextStyle.new({fontSize: new flutter_screenutil.ScreenUtil.new().setSp(28)}), $creationLocationd_0dea112b090073317d4: C233 || CT.C233}), new basic.Expanded.new({child: new container.Container.new({$creationLocationd_0dea112b090073317d4: C237 || CT.C237}), $creationLocationd_0dea112b090073317d4: C238 || CT.C238})]), $creationLocationd_0dea112b090073317d4: C241 || CT.C241}), $creationLocationd_0dea112b090073317d4: C244 || CT.C244}), new container.Container.new({height: 1.0, color: sq_color.SQColor.lightGray, margin: new edge_insets.EdgeInsets.only({left: 60.0}), $creationLocationd_0dea112b090073317d4: C250 || CT.C250})]), $creationLocationd_0dea112b090073317d4: C255 || CT.C255}), $creationLocationd_0dea112b090073317d4: C258 || CT.C258}), $creationLocationd_0dea112b090073317d4: C262 || CT.C262});
    }
  };
  (mine_cell.MeCell.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let iconName = opts && 'iconName' in opts ? opts.iconName : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    this[iconName$] = iconName;
    this[onPressed$] = onPressed;
    mine_cell.MeCell.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = mine_cell.MeCell.prototype;
  dart.addTypeTests(mine_cell.MeCell);
  dart.setMethodSignature(mine_cell.MeCell, () => ({
    __proto__: dart.getMethods(mine_cell.MeCell.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(mine_cell.MeCell, "package:hkbook/page/mine/mine_cell.dart");
  dart.setFieldSignature(mine_cell.MeCell, () => ({
    __proto__: dart.getFields(mine_cell.MeCell.__proto__),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    iconName: dart.finalFieldType(core.String),
    title: dart.finalFieldType(core.String)
  }));
  const toSort$ = dart.privateName(home_main, "HomeMain.toSort");
  const couponList$ = dart.privateName(home_main, "HomeMain.couponList");
  home_main.HomeMain = class HomeMain extends framework.StatefulWidget {
    get toSort() {
      return this[toSort$];
    }
    set toSort(value) {
      super.toSort = value;
    }
    get couponList() {
      return this[couponList$];
    }
    set couponList(value) {
      this[couponList$] = value;
    }
    createState() {
      return new home_main._HomeMainState.new();
    }
  };
  (home_main.HomeMain.new = function(toSort, couponList, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[toSort$] = toSort;
    this[couponList$] = couponList;
    home_main.HomeMain.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home_main.HomeMain.prototype;
  dart.addTypeTests(home_main.HomeMain);
  dart.setMethodSignature(home_main.HomeMain, () => ({
    __proto__: dart.getMethods(home_main.HomeMain.__proto__),
    createState: dart.fnType(home_main._HomeMainState, [])
  }));
  dart.setLibraryUri(home_main.HomeMain, "package:hkbook/page/home/home_main.dart");
  dart.setFieldSignature(home_main.HomeMain, () => ({
    __proto__: dart.getFields(home_main.HomeMain.__proto__),
    toSort: dart.finalFieldType(dart.fnType(dart.void, [])),
    couponList: dart.fieldType(core.List$(coupon_model.MapData))
  }));
  const _scrollViewController = dart.privateName(home_main, "_scrollViewController");
  const _keyFilter = dart.privateName(home_main, "_keyFilter");
  const _tabModels = dart.privateName(home_main, "_tabModels");
  const _controller$ = dart.privateName(home_main, "_controller");
  const _currentIndex = dart.privateName(home_main, "_currentIndex");
  const _sizeRed = dart.privateName(home_main, "_sizeRed");
  const _getSizes = dart.privateName(home_main, "_getSizes");
  const _getPositions = dart.privateName(home_main, "_getPositions");
  const _afterLayout = dart.privateName(home_main, "_afterLayout");
  const _handleTabSelection = dart.privateName(home_main, "_handleTabSelection");
  let C266;
  let C269;
  let C268;
  let C267;
  let C272;
  let C271;
  let C270;
  const ScrollPhysics_parent = dart.privateName(scroll_physics, "ScrollPhysics.parent");
  let C273;
  let C276;
  let C277;
  let C278;
  let C275;
  let C274;
  let C281;
  let C282;
  let C283;
  let C280;
  let C279;
  let C286;
  let C287;
  let C285;
  let C284;
  let C290;
  let C291;
  let C292;
  let C289;
  let C288;
  let C295;
  let C296;
  let C294;
  let C293;
  let C299;
  let C300;
  let C301;
  let C302;
  let C303;
  let C304;
  let C305;
  let C298;
  let C297;
  const _searchResultListPages = dart.privateName(home_main, "_searchResultListPages");
  let C308;
  let C309;
  let C307;
  let C306;
  let C312;
  let C313;
  let C314;
  let C311;
  let C310;
  let C317;
  let C318;
  let C316;
  let C315;
  let C321;
  let C322;
  let C320;
  let C319;
  let C325;
  let C326;
  let C327;
  let C324;
  let C323;
  let C330;
  let C331;
  let C329;
  let C328;
  let C334;
  let C333;
  let C332;
  let C337;
  let C338;
  let C336;
  let C335;
  let C341;
  let C340;
  let C339;
  let C344;
  let C345;
  let C346;
  let C343;
  let C342;
  let C349;
  let C350;
  let C348;
  let C347;
  let C353;
  let C352;
  let C351;
  let C356;
  let C357;
  let C358;
  let C355;
  let C354;
  let C361;
  let C362;
  let C360;
  let C359;
  let C365;
  let C366;
  let C367;
  let C368;
  let C364;
  let C363;
  let C371;
  let C372;
  let C370;
  let C369;
  let C375;
  let C376;
  let C374;
  let C373;
  let C379;
  let C380;
  let C378;
  let C377;
  let C383;
  let C384;
  let C382;
  let C381;
  let C387;
  let C388;
  let C386;
  let C385;
  let C391;
  let C390;
  let C389;
  let C394;
  let C393;
  let C392;
  let C397;
  let C398;
  let C399;
  let C396;
  let C395;
  let C402;
  let C403;
  let C401;
  let C400;
  let C406;
  let C405;
  let C404;
  const State_AutomaticKeepAliveClientMixin$36$ = class State_AutomaticKeepAliveClientMixin extends framework.State$(home_main.HomeMain) {};
  (State_AutomaticKeepAliveClientMixin$36$.new = function() {
    automatic_keep_alive.AutomaticKeepAliveClientMixin$(home_main.HomeMain)[dart.mixinNew].call(this);
    State_AutomaticKeepAliveClientMixin$36$.__proto__.new.call(this);
  }).prototype = State_AutomaticKeepAliveClientMixin$36$.prototype;
  dart.applyMixin(State_AutomaticKeepAliveClientMixin$36$, automatic_keep_alive.AutomaticKeepAliveClientMixin$(home_main.HomeMain));
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends State_AutomaticKeepAliveClientMixin$36$ {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(home_main.HomeMain)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(home_main.HomeMain));
  home_main._HomeMainState = class _HomeMainState extends State_TickerProviderStateMixin$36 {
    get wantKeepAlive() {
      return true;
    }
    [_afterLayout](_) {
      this[_getSizes]("_keyFilter", this[_keyFilter]);
      this[_getPositions]("_keyFilter", this[_keyFilter]);
    }
    [_getSizes](log, globalKey) {
      let renderBoxRed = box.RenderBox._check(globalKey.currentContext.findRenderObject());
      this[_sizeRed] = renderBoxRed.size;
      this.setState(dart.fn(() => {
      }, VoidToNull()));
    }
    [_getPositions](log, globalKey) {
      let renderBoxRed = box.RenderBox._check(globalKey.currentContext.findRenderObject());
      let positionRed = renderBoxRed.localToGlobal(ui.Offset.zero);
    }
    initState() {
      super.initState();
      system_chrome.SystemChrome.setSystemUIOverlayStyle(new system_chrome.SystemUiOverlayStyle.new({statusBarBrightness: ui.Brightness.light, statusBarIconBrightness: ui.Brightness.light}));
      this[_tabModels][$add](new tabbar.TabModel.new({title: "精选", subtitle: "猜你喜欢", keyId: "3756"}));
      this[_tabModels][$add](new tabbar.TabModel.new({title: "家电", subtitle: "居家好手", keyId: "3759"}));
      this[_tabModels][$add](new tabbar.TabModel.new({title: "女装", subtitle: "清新靓丽", keyId: "3767"}));
      this[_tabModels][$add](new tabbar.TabModel.new({title: "美妆", subtitle: "每日美哒", keyId: "3763"}));
      this[_tabModels][$add](new tabbar.TabModel.new({title: "母婴", subtitle: "宝妈必备", keyId: "3760"}));
      this[_tabModels][$add](new tabbar.TabModel.new({title: "食品", subtitle: "好吃推荐", keyId: "3761"}));
      this[_controller$] = new tab_controller.TabController.new({vsync: this, length: this[_tabModels][$length]});
      this[_controller$].addListener(dart.bind(this, _handleTabSelection));
      this[_scrollViewController] = new scroll_controller.ScrollController.new({initialScrollOffset: 0.0});
      binding.WidgetsBinding.instance.addPostFrameCallback(dart.bind(this, _afterLayout));
      this[_scrollViewController].addListener(dart.fn(() => {
        let offset = this[_scrollViewController].offset;
        if (dart.notNull(offset) < 0) {
          if (this.navAlpha !== 0) {
            this.setState(dart.fn(() => {
              this.navAlpha = 0.0;
            }, VoidToNull()));
          }
        } else if (dart.notNull(offset) < 150) {
          this.setState(dart.fn(() => {
            this.navAlpha = 1 - (150 - dart.notNull(offset)) / 150;
          }, VoidToNull()));
        } else if (this.navAlpha !== 1) {
          this.setState(dart.fn(() => {
            this.navAlpha = 1.0;
          }, VoidToNull()));
        }
        if (dart.notNull(offset) > 56) {
          this.setState(dart.fn(() => {
            this.navShow = 56;
          }, VoidToNull()));
        } else {
          this.setState(dart.fn(() => {
            this.navShow = -dart.notNull(screen.Screen.topSafeHeight);
          }, VoidToNull()));
        }
      }, VoidToNull()));
    }
    [_handleTabSelection]() {
      this.setState(dart.fn(() => {
        this[_currentIndex] = this[_controller$].index;
      }, VoidToNull()));
    }
    dispose() {
      this[_scrollViewController].dispose();
      super.dispose();
    }
    build(context) {
      super.build(context);
      let v = new basic.Column.new({children: JSArrayOfWidget().of([new home_banner.HomeBanner.new({$creationLocationd_0dea112b090073317d4: C266 || CT.C266}), new home_header.HomeHeader.new(this.widget.couponList, {$creationLocationd_0dea112b090073317d4: C267 || CT.C267})]), $creationLocationd_0dea112b090073317d4: C270 || CT.C270});
      let body = new nested_scroll_view.NestedScrollView.new({controller: this[_scrollViewController], headerSliverBuilder: dart.fn((context, boxIsScrolled) => JSArrayOfWidget().of([new app_bar.SliverAppBar.new({pinned: true, floating: true, forceElevated: boxIsScrolled, backgroundColor: new ui.Color.new(4293848814), flexibleSpace: new flexible_space_bar.FlexibleSpaceBar.new({collapseMode: flexible_space_bar.CollapseMode.pin, background: media_query.MediaQuery.removePadding({removeTop: true, context: context, child: new scroll_view.ListView.new({shrinkWrap: true, physics: C273 || CT.C273, children: JSArrayOfWidget().of([v]), $creationLocationd_0dea112b090073317d4: C274 || CT.C274}), $creationLocationd_0dea112b090073317d4: C279 || CT.C279}), $creationLocationd_0dea112b090073317d4: C284 || CT.C284}), expandedHeight: dart.notNull(this[_sizeRed] == null ? screen.Screen.height : this[_sizeRed].height) + dart.notNull(new flutter_screenutil.ScreenUtil.new().setHeight(100.0)), bottom: new preferred_size.PreferredSize.new({preferredSize: new ui.Size.new(1 / 0, new flutter_screenutil.ScreenUtil.new().setHeight(100)), child: new tabbar.GZXTabBarWidget.new({tabController: this[_controller$], tabModels: this[_tabModels], currentIndex: this[_currentIndex], $creationLocationd_0dea112b090073317d4: C288 || CT.C288}), $creationLocationd_0dea112b090073317d4: C293 || CT.C293}), $creationLocationd_0dea112b090073317d4: C297 || CT.C297})]), BuildContextAndboolToListOfWidget()), body: new tabs.TabBarView.new({controller: this[_controller$], children: this[_searchResultListPages](), $creationLocationd_0dea112b090073317d4: C306 || CT.C306}), $creationLocationd_0dea112b090073317d4: C310 || CT.C310});
      return new (AnnotatedRegionOfSystemUiOverlayStyle()).new({value: system_chrome.SystemUiOverlayStyle.light, child: new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, appBar: new preferred_size.PreferredSize.new({child: new basic.Offstage.new({child: new basic.Opacity.new({child: new app_bar.AppBar.new({backgroundColor: sq_color.SQColor.primary, elevation: 0.5, leading: new ink_well.InkWell.new({onTap: dart.fn(() => {
                      this.widget.toSort();
                    }, VoidToNull()), child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({margin: new edge_insets.EdgeInsets.fromLTRB(15.0, 10.0, 0.0, 0.0), child: new image.Image.asset("home_nav_icon_category.png", {height: new flutter_screenutil.ScreenUtil.new().setHeight(45), $creationLocationd_0dea112b090073317d4: C315 || CT.C315}), $creationLocationd_0dea112b090073317d4: C319 || CT.C319}), new container.Container.new({margin: new edge_insets.EdgeInsets.fromLTRB(15.0, 2.0, 0.0, 0.0), child: new text.Text.new("分类", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(20)}), $creationLocationd_0dea112b090073317d4: C323 || CT.C323}), $creationLocationd_0dea112b090073317d4: C328 || CT.C328})]), $creationLocationd_0dea112b090073317d4: C332 || CT.C332}), $creationLocationd_0dea112b090073317d4: C335 || CT.C335}), title: new ink_well.InkWell.new({onTap: dart.fn(() => {
                      app_navigator.AppNavigator.pushSearch(context);
                    }, VoidToNull()), child: new container.Container.new({height: new flutter_screenutil.ScreenUtil.new().setHeight(60), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(dart.notNull(new flutter_screenutil.ScreenUtil.new().setHeight(60)) / 2), color: new ui.Color.new(4293980400)}), child: new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(new flutter_screenutil.ScreenUtil.new().setWidth(30), 0.0, new flutter_screenutil.ScreenUtil.new().setWidth(15), 0.0), height: new flutter_screenutil.ScreenUtil.new().setHeight(40), child: new image.Image.asset("icon_search_gray.png", {$creationLocationd_0dea112b090073317d4: C339 || CT.C339}), $creationLocationd_0dea112b090073317d4: C342 || CT.C342}), new text.Text.new("请输入您要搜索的商品", {style: new text_style.TextStyle.new({color: colors.Colors.black54, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(28)}), $creationLocationd_0dea112b090073317d4: C347 || CT.C347})]), $creationLocationd_0dea112b090073317d4: C351 || CT.C351}), $creationLocationd_0dea112b090073317d4: C354 || CT.C354}), $creationLocationd_0dea112b090073317d4: C359 || CT.C359}), $creationLocationd_0dea112b090073317d4: C363 || CT.C363}), opacity: this.navAlpha, $creationLocationd_0dea112b090073317d4: C369 || CT.C369}), offstage: dart.notNull(this.navShow) > 56, $creationLocationd_0dea112b090073317d4: C373 || CT.C373}), preferredSize: new ui.Size.fromHeight(this.navShow), $creationLocationd_0dea112b090073317d4: C377 || CT.C377}), body: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Offstage.new({offstage: true, child: new container.Container.new({child: v, key: this[_keyFilter], $creationLocationd_0dea112b090073317d4: C381 || CT.C381}), $creationLocationd_0dea112b090073317d4: C385 || CT.C385}), new basic.Expanded.new({child: body, $creationLocationd_0dea112b090073317d4: C389 || CT.C389})]), $creationLocationd_0dea112b090073317d4: C392 || CT.C392}), $creationLocationd_0dea112b090073317d4: C395 || CT.C395}), $creationLocationd_0dea112b090073317d4: C400 || CT.C400});
    }
    [_searchResultListPages]() {
      let pages = JSArrayOfWidget().of([]);
      for (let i = 0; i < dart.notNull(this[_tabModels][$length]); i = i + 1) {
        let m = this[_tabModels][$_get](i);
        let page = new (SearchSortResultOfScrollNotification()).new(m.keyId, {$creationLocationd_0dea112b090073317d4: C404 || CT.C404});
        pages[$add](page);
      }
      return pages;
    }
  };
  (home_main._HomeMainState.new = function() {
    this[_scrollViewController] = null;
    this[_keyFilter] = GlobalKeyOfStateOfStatefulWidget().new();
    this.page = 1;
    this[_tabModels] = JSArrayOfTabModel().of([]);
    this[_controller$] = null;
    this[_currentIndex] = 0;
    this[_sizeRed] = null;
    this.navAlpha = 0.0;
    this.navShow = -dart.notNull(screen.Screen.topSafeHeight);
    home_main._HomeMainState.__proto__.new.call(this);
    ;
  }).prototype = home_main._HomeMainState.prototype;
  dart.addTypeTests(home_main._HomeMainState);
  dart.setMethodSignature(home_main._HomeMainState, () => ({
    __proto__: dart.getMethods(home_main._HomeMainState.__proto__),
    [_afterLayout]: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_getSizes]: dart.fnType(dart.dynamic, [dart.dynamic, framework.GlobalKey$(framework.State$(framework.StatefulWidget))]),
    [_getPositions]: dart.fnType(dart.dynamic, [dart.dynamic, framework.GlobalKey$(framework.State$(framework.StatefulWidget))]),
    [_handleTabSelection]: dart.fnType(dart.dynamic, []),
    [_searchResultListPages]: dart.fnType(core.List$(framework.Widget), [])
  }));
  dart.setGetterSignature(home_main._HomeMainState, () => ({
    __proto__: dart.getGetters(home_main._HomeMainState.__proto__),
    wantKeepAlive: core.bool
  }));
  dart.setLibraryUri(home_main._HomeMainState, "package:hkbook/page/home/home_main.dart");
  dart.setFieldSignature(home_main._HomeMainState, () => ({
    __proto__: dart.getFields(home_main._HomeMainState.__proto__),
    [_scrollViewController]: dart.fieldType(scroll_controller.ScrollController),
    [_keyFilter]: dart.fieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget))),
    page: dart.fieldType(core.int),
    [_tabModels]: dart.fieldType(core.List$(tabbar.TabModel)),
    [_controller$]: dart.fieldType(tab_controller.TabController),
    [_currentIndex]: dart.fieldType(core.int),
    [_sizeRed]: dart.fieldType(ui.Size),
    navAlpha: dart.fieldType(core.double),
    navShow: dart.fieldType(core.double)
  }));
  const _is_SearchSortResult_default = Symbol('_is_SearchSortResult_default');
  const keywrod$ = dart.privateName(home_sort, "SearchSortResult.keywrod");
  home_sort.SearchSortResult$ = dart.generic(T => {
    class SearchSortResult extends framework.StatefulWidget {
      get keywrod() {
        return this[keywrod$];
      }
      set keywrod(value) {
        super.keywrod = value;
      }
      createState() {
        return new home_sort._SearchMasterSortResultState.new();
      }
    }
    (SearchSortResult.new = function(keywrod, opts) {
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[keywrod$] = keywrod;
      SearchSortResult.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = SearchSortResult.prototype;
    dart.addTypeTests(SearchSortResult);
    SearchSortResult.prototype[_is_SearchSortResult_default] = true;
    dart.setMethodSignature(SearchSortResult, () => ({
      __proto__: dart.getMethods(SearchSortResult.__proto__),
      createState: dart.fnType(home_sort._SearchMasterSortResultState, [])
    }));
    dart.setLibraryUri(SearchSortResult, "package:hkbook/page/home/home_sort.dart");
    dart.setFieldSignature(SearchSortResult, () => ({
      __proto__: dart.getFields(SearchSortResult.__proto__),
      keywrod: dart.finalFieldType(dart.dynamic)
    }));
    return SearchSortResult;
  });
  home_sort.SearchSortResult = home_sort.SearchSortResult$();
  dart.addTypeTests(home_sort.SearchSortResult, _is_SearchSortResult_default);
  const _couponNIneList = dart.privateName(home_sort, "_couponNIneList");
  const _couponList$ = dart.privateName(home_sort, "_couponList");
  const _getMain = dart.privateName(home_sort, "_getMain");
  const _onScrollNotification = dart.privateName(home_sort, "_onScrollNotification");
  let C409;
  let C410;
  let C408;
  let C407;
  let C413;
  let C412;
  let C411;
  let C416;
  let C417;
  let C415;
  let C414;
  let C420;
  let C419;
  let C418;
  let C423;
  let C424;
  let C422;
  let C421;
  let C427;
  let C428;
  let C426;
  let C425;
  const _warpList = dart.privateName(home_sort, "_warpList");
  let C431;
  let C432;
  let C430;
  let C429;
  let C435;
  let C436;
  let C437;
  let C434;
  let C433;
  let C440;
  let C441;
  let C439;
  let C438;
  let C444;
  let C445;
  let C446;
  let C447;
  let C443;
  let C442;
  let C450;
  let C449;
  let C448;
  let C453;
  let C454;
  let C452;
  let C451;
  let C457;
  let C458;
  let C459;
  let C460;
  let C461;
  let C456;
  let C455;
  let C464;
  let C463;
  let C462;
  let C467;
  let C466;
  let C465;
  let C470;
  let C471;
  let C472;
  let C473;
  let C474;
  let C469;
  let C468;
  let C477;
  let C478;
  let C476;
  let C475;
  let C481;
  let C482;
  let C480;
  let C479;
  let C485;
  let C484;
  let C483;
  const State_AutomaticKeepAliveClientMixin$36$0 = class State_AutomaticKeepAliveClientMixin extends framework.State$(home_sort.SearchSortResult$(scroll_notification.ScrollNotification)) {};
  (State_AutomaticKeepAliveClientMixin$36$0.new = function() {
    automatic_keep_alive.AutomaticKeepAliveClientMixin$(home_sort.SearchSortResult$(scroll_notification.ScrollNotification))[dart.mixinNew].call(this);
    State_AutomaticKeepAliveClientMixin$36$0.__proto__.new.call(this);
  }).prototype = State_AutomaticKeepAliveClientMixin$36$0.prototype;
  dart.applyMixin(State_AutomaticKeepAliveClientMixin$36$0, automatic_keep_alive.AutomaticKeepAliveClientMixin$(home_sort.SearchSortResult$(scroll_notification.ScrollNotification)));
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends State_AutomaticKeepAliveClientMixin$36$0 {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(home_sort.SearchSortResult$(scroll_notification.ScrollNotification))[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(home_sort.SearchSortResult$(scroll_notification.ScrollNotification)));
  home_sort._SearchMasterSortResultState = class _SearchMasterSortResultState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this.page = 1;
      this.couponList = JSArrayOfMapData().of([]);
      if (dart.equals(this.widget.keywrod, "0000")) {
        this[_couponNIneList](this.page, this.widget.keywrod, "");
      } else {
        this[_couponList$](this.page, this.widget.keywrod, "");
      }
    }
    build(context) {
      super.build(context);
      return new (AnnotatedRegionOfSystemUiOverlayStyle()).new({value: system_chrome.SystemUiOverlayStyle.light, child: new basic.Center.new({child: new (NotificationListenerOfScrollNotification()).new({child: this[_getMain](), onNotification: dart.fn(scrollInfo => core.bool._check(this[_onScrollNotification](scrollInfo)), ScrollNotificationTobool()), $creationLocationd_0dea112b090073317d4: C407 || CT.C407}), $creationLocationd_0dea112b090073317d4: C411 || CT.C411}), $creationLocationd_0dea112b090073317d4: C414 || CT.C414});
    }
    [_onScrollNotification](scrollInfo) {
    }
    [_getMain]() {
      if (this.couponList[$length] === 0) {
        return new container.Container.new({alignment: alignment.Alignment.center, child: new ink_well.InkWell.new({child: new fading_circle.SpinKitFadingCircle.new({color: sq_color.SQColor.primary, $creationLocationd_0dea112b090073317d4: C418 || CT.C418}), onTap: dart.fn(() => {
              this.page = 1;
              this.couponList = JSArrayOfMapData().of([]);
              if (dart.equals(this.widget.keywrod, "0000")) {
                this[_couponNIneList](this.page, this.widget.keywrod, "");
              } else {
                this[_couponList$](this.page, this.widget.keywrod, "");
              }
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C421 || CT.C421}), $creationLocationd_0dea112b090073317d4: C425 || CT.C425});
      } else {
        return new refresher.EasyRefresh.new({child: new scroll_view.ListView.new({shrinkWrap: true, children: JSArrayOfWidget().of([this[_warpList]()]), $creationLocationd_0dea112b090073317d4: C429 || CT.C429}), onLoad: dart.fn(() => async.async(core.Null, (function*() {
            this.page = dart.notNull(this.page) + 1;
            if (dart.equals(this.widget.keywrod, "0000")) {
              this[_couponNIneList](this.page, this.widget.keywrod, "");
            } else {
              this[_couponList$](this.page, this.widget.keywrod, "");
            }
          }).bind(this)), VoidToFutureOfNull()), footer: new footer.ClassicalFooter.new({bgColor: colors.Colors.white, textColor: colors.Colors.pink, infoColor: colors.Colors.pink, noMoreText: "", key: this.fotterKey}), $creationLocationd_0dea112b090073317d4: C433 || CT.C433});
      }
    }
    [_warpList]() {
      if (dart.notNull(this.couponList[$length]) > 0) {
        let list = this.couponList[$map](ink_well.InkWell, dart.fn(v => {
          let t3;
          return new ink_well.InkWell.new({onTap: dart.fn(() => {
              app_navigator.AppNavigator.pushNovelDetail(this.context, v);
            }, VoidToNull()), child: new container.Container.new({width: new flutter_screenutil.ScreenUtil.new().setWidth(372), color: colors.Colors.white, padding: new edge_insets.EdgeInsets.all(5.0), margin: new edge_insets.EdgeInsets.only({bottom: 3.0}), child: new basic.Column.new({children: JSArrayOfWidget().of([new image.Image.network((t3 = v.pictUrl, t3 == null ? "" : t3), {height: 372 / 2, $creationLocationd_0dea112b090073317d4: C438 || CT.C438}), new text.Text.new(v.title, {maxLines: 1, overflow: paragraph.TextOverflow.ellipsis, style: new text_style.TextStyle.new({color: colors.Colors.red, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(26)}), $creationLocationd_0dea112b090073317d4: C442 || CT.C442}), new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("¥" + dart.str(v.zkFinalPrice), {$creationLocationd_0dea112b090073317d4: C448 || CT.C448}), new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(8.0, 0.0, 8.0, 0.0), margin: new edge_insets.EdgeInsets.fromLTRB(5.0, 0.0, 5.0, 0.0), alignment: alignment.Alignment.center, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(3.0), color: colors.Colors.red}), child: new text.Text.new("¥" + dart.str(v.couponAmount) + "元券", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C451 || CT.C451}), $creationLocationd_0dea112b090073317d4: C455 || CT.C455})]), $creationLocationd_0dea112b090073317d4: C462 || CT.C462})]), $creationLocationd_0dea112b090073317d4: C465 || CT.C465}), $creationLocationd_0dea112b090073317d4: C468 || CT.C468}), $creationLocationd_0dea112b090073317d4: C475 || CT.C475});
        }, MapDataToInkWell()))[$toList]();
        return new basic.Wrap.new({spacing: new flutter_screenutil.ScreenUtil.new().setHeight(3), children: list, $creationLocationd_0dea112b090073317d4: C479 || CT.C479});
      } else {
        return new image.Image.asset("img/empty.png", {$creationLocationd_0dea112b090073317d4: C483 || CT.C483});
      }
    }
    [_couponList$](page, materiaqlId, sort) {
      return async.async(dart.void, (function* _couponList() {
        let formdata = new (IdentityMapOfString$dynamic()).from(["app_key", "27675850", "session_key", "hank", "method", "taobao.tbk.dg.material.optional", "partner_id", "top-apitools", "format", "json", "v", "2.0", "sign_method", "md5", "timestamp", service_method.getTime(), "adzone_id", "109164900192", "force_sensitive_param_fuzzy", "true", "page_no", dart.str(page), "has_coupon", "true", "cat", "0", "page_size", "10", "material_id", materiaqlId]);
        yield service_method.request("couponList", formdata).then(core.Null, dart.fn(value => {
          if (value == null) return;
          let data = convert.json.decode(dart.toString(value));
          core.print(dart.toString(value));
          let cdata = new coupon_model.CounponModel.fromJson(MapOfString$dynamic()._check(data));
          core.print(cdata.tbkDgMaterialOptionalResponse.resultList);
          if (cdata === null) {
            toast.ToastHelper.showToast(this.context, "网络错误,点击重新加载");
          } else {
            this.setState(dart.fn(() => {
              this.couponList[$addAll](cdata.tbkDgMaterialOptionalResponse.resultList.mapData);
            }, VoidToNull()));
          }
        }, dynamicToNull()));
      }).bind(this));
    }
    [_couponNIneList](page, materiaqlId, sort) {
      return async.async(dart.void, (function* _couponNIneList() {
        let formdata = new (IdentityMapOfString$String()).from(["app_key", "27675850", "session_key", "hank", "method", "taobao.tbk.dg.material.optional", "partner_id", "top-apitools", "format", "json", "v", "2.0", "sign_method", "md5", "timestamp", service_method.getTime(), "adzone_id", "109164900192", "force_sensitive_param_fuzzy", "true", "page_no", dart.str(page), "has_coupon", "true", "cat", "10,13,16,19,20", "page_size", "10", "end_price", "10", "need_free_shipment", "true"]);
        yield service_method.request("couponList", formdata).then(core.Null, dart.fn(value => {
          let result = result_data.ResultData._check(value);
          let data = convert.json.decode(dart.toString(result.data));
          let cdata = new coupon_model.CounponModel.fromJson(MapOfString$dynamic()._check(data));
          if (cdata === null) {
            toast.ToastHelper.showToast(this.context, "网络错误,点击重新加载");
          } else {
            this.setState(dart.fn(() => {
              this.couponList[$addAll](cdata.tbkDgMaterialOptionalResponse.resultList.mapData);
            }, VoidToNull()));
          }
        }, dynamicToNull()));
      }).bind(this));
    }
    get wantKeepAlive() {
      return true;
    }
  };
  (home_sort._SearchMasterSortResultState.new = function() {
    this.page = 1;
    this.couponList = JSArrayOfMapData().of([]);
    this.fotterKey = new (ValueKeyOfString()).new("fotterKey");
    home_sort._SearchMasterSortResultState.__proto__.new.call(this);
    ;
  }).prototype = home_sort._SearchMasterSortResultState.prototype;
  dart.addTypeTests(home_sort._SearchMasterSortResultState);
  dart.setMethodSignature(home_sort._SearchMasterSortResultState, () => ({
    __proto__: dart.getMethods(home_sort._SearchMasterSortResultState.__proto__),
    [_onScrollNotification]: dart.fnType(dart.dynamic, [scroll_notification.ScrollNotification]),
    [_getMain]: dart.fnType(framework.Widget, []),
    [_warpList]: dart.fnType(framework.Widget, []),
    [_couponList$]: dart.fnType(async.Future$(dart.void), [dart.dynamic, dart.dynamic, dart.dynamic]),
    [_couponNIneList]: dart.fnType(async.Future$(dart.void), [dart.dynamic, dart.dynamic, dart.dynamic])
  }));
  dart.setGetterSignature(home_sort._SearchMasterSortResultState, () => ({
    __proto__: dart.getGetters(home_sort._SearchMasterSortResultState.__proto__),
    wantKeepAlive: core.bool
  }));
  dart.setLibraryUri(home_sort._SearchMasterSortResultState, "package:hkbook/page/home/home_sort.dart");
  dart.setFieldSignature(home_sort._SearchMasterSortResultState, () => ({
    __proto__: dart.getFields(home_sort._SearchMasterSortResultState.__proto__),
    page: dart.fieldType(core.int),
    couponList: dart.fieldType(core.List$(coupon_model.MapData)),
    fotterKey: dart.fieldType(key.Key)
  }));
  const _fliterView = dart.privateName(home_header, "_fliterView");
  const _announView = dart.privateName(home_header, "_announView");
  const _gridOneView = dart.privateName(home_header, "_gridOneView");
  const _gridTowView = dart.privateName(home_header, "_gridTowView");
  const _chuxiaoView = dart.privateName(home_header, "_chuxiaoView");
  let C488;
  let C487;
  let C486;
  let C491;
  let C492;
  let C490;
  let C489;
  let C495;
  let C496;
  let C497;
  let C494;
  let C493;
  let C500;
  let C501;
  let C502;
  let C499;
  let C498;
  let C505;
  let C506;
  let C504;
  let C503;
  let C509;
  let C508;
  let C507;
  let C512;
  let C513;
  let C514;
  let C515;
  let C516;
  let C517;
  let C511;
  let C510;
  let C520;
  let C521;
  let C522;
  let C523;
  let C519;
  let C518;
  let C526;
  let C525;
  let C524;
  let C529;
  let C530;
  let C531;
  let C528;
  let C527;
  let C534;
  let C535;
  let C536;
  let C537;
  let C533;
  let C532;
  let C540;
  let C541;
  let C542;
  let C539;
  let C538;
  let C545;
  let C546;
  let C547;
  let C548;
  let C544;
  let C543;
  let C551;
  let C552;
  let C550;
  let C549;
  let C555;
  let C556;
  let C557;
  let C558;
  let C554;
  let C553;
  let C561;
  let C560;
  let C559;
  let C564;
  let C565;
  let C563;
  let C562;
  let C568;
  let C569;
  let C567;
  let C566;
  let C572;
  let C573;
  let C574;
  let C575;
  let C571;
  let C570;
  let C578;
  let C579;
  let C580;
  let C581;
  let C577;
  let C576;
  let C582;
  let C585;
  let C584;
  let C583;
  let C588;
  let C589;
  let C590;
  let C591;
  let C592;
  let C587;
  let C586;
  const _gridContentView = dart.privateName(home_header, "_gridContentView");
  let C595;
  let C594;
  let C593;
  let C598;
  let C599;
  let C600;
  let C601;
  let C597;
  let C596;
  let C604;
  let C603;
  let C602;
  let C607;
  let C608;
  let C609;
  let C610;
  let C606;
  let C605;
  let C613;
  let C612;
  let C611;
  let C616;
  let C617;
  let C615;
  let C614;
  let C620;
  let C621;
  let C619;
  let C618;
  let C624;
  let C625;
  let C623;
  let C622;
  let C628;
  let C627;
  let C626;
  let C631;
  let C632;
  let C633;
  let C630;
  let C629;
  let C636;
  let C637;
  let C635;
  let C634;
  let C640;
  let C641;
  let C642;
  let C639;
  let C638;
  let C645;
  let C646;
  let C644;
  let C643;
  let C649;
  let C650;
  let C651;
  let C648;
  let C647;
  let C654;
  let C655;
  let C656;
  let C653;
  let C652;
  let C659;
  let C658;
  let C657;
  let C662;
  let C661;
  let C660;
  let C665;
  let C664;
  let C663;
  let C668;
  let C669;
  let C667;
  let C666;
  let C672;
  let C673;
  let C674;
  let C675;
  let C676;
  let C677;
  let C671;
  let C670;
  const _marqueeWid02 = dart.privateName(home_header, "_marqueeWid02");
  let C680;
  let C679;
  let C678;
  let C683;
  let C684;
  let C685;
  let C686;
  let C687;
  let C682;
  let C681;
  let C690;
  let C689;
  let C688;
  let C693;
  let C694;
  let C695;
  let C696;
  let C692;
  let C691;
  let C699;
  let C698;
  let C697;
  let C702;
  let C703;
  let C704;
  let C701;
  let C700;
  let C707;
  let C708;
  let C709;
  let C710;
  let C706;
  let C705;
  let C713;
  let C714;
  let C715;
  let C716;
  let C712;
  let C711;
  let C719;
  let C718;
  let C717;
  let C722;
  let C723;
  let C721;
  let C720;
  let C726;
  let C727;
  let C728;
  let C729;
  let C725;
  let C724;
  let C732;
  let C731;
  let C730;
  let C735;
  let C736;
  let C734;
  let C733;
  let C739;
  let C740;
  let C738;
  let C737;
  let C743;
  let C742;
  let C741;
  let C746;
  let C747;
  let C745;
  let C744;
  let C750;
  let C751;
  let C749;
  let C748;
  let C754;
  let C755;
  let C756;
  let C753;
  let C752;
  let C759;
  let C760;
  let C758;
  let C757;
  const couponList$0 = dart.privateName(home_header, "HomeHeader.couponList");
  const funcImageA = dart.privateName(home_header, "HomeHeader.funcImageA");
  const funcTitieA = dart.privateName(home_header, "HomeHeader.funcTitieA");
  const announceMentArr = dart.privateName(home_header, "HomeHeader.announceMentArr");
  const titleC = dart.privateName(home_header, "HomeHeader.titleC");
  const subTitleA = dart.privateName(home_header, "HomeHeader.subTitleA");
  const image1A = dart.privateName(home_header, "HomeHeader.image1A");
  const image2A = dart.privateName(home_header, "HomeHeader.image2A");
  const url = dart.privateName(home_header, "HomeHeader.url");
  const urlIcom = dart.privateName(home_header, "HomeHeader.urlIcom");
  const urlTitle = dart.privateName(home_header, "HomeHeader.urlTitle");
  const masterKey = dart.privateName(home_header, "HomeHeader.masterKey");
  home_header.HomeHeader = class HomeHeader extends framework.StatelessWidget {
    get couponList() {
      return this[couponList$0];
    }
    set couponList(value) {
      super.couponList = value;
    }
    get funcImageA() {
      return this[funcImageA];
    }
    set funcImageA(value) {
      this[funcImageA] = value;
    }
    get funcTitieA() {
      return this[funcTitieA];
    }
    set funcTitieA(value) {
      this[funcTitieA] = value;
    }
    get announceMentArr() {
      return this[announceMentArr];
    }
    set announceMentArr(value) {
      this[announceMentArr] = value;
    }
    get titleC() {
      return this[titleC];
    }
    set titleC(value) {
      this[titleC] = value;
    }
    get subTitleA() {
      return this[subTitleA];
    }
    set subTitleA(value) {
      this[subTitleA] = value;
    }
    get image1A() {
      return this[image1A];
    }
    set image1A(value) {
      this[image1A] = value;
    }
    get image2A() {
      return this[image2A];
    }
    set image2A(value) {
      this[image2A] = value;
    }
    get url() {
      return this[url];
    }
    set url(value) {
      this[url] = value;
    }
    get urlIcom() {
      return this[urlIcom];
    }
    set urlIcom(value) {
      this[urlIcom] = value;
    }
    get urlTitle() {
      return this[urlTitle];
    }
    set urlTitle(value) {
      this[urlTitle] = value;
    }
    get masterKey() {
      return this[masterKey];
    }
    set masterKey(value) {
      this[masterKey] = value;
    }
    build(context) {
      return new basic.Column.new({children: JSArrayOfWidget().of([this[_fliterView](context), this[_announView](), this[_gridOneView](context), this[_gridTowView](context), this[_chuxiaoView](context)]), $creationLocationd_0dea112b090073317d4: C486 || CT.C486});
    }
    [_chuxiaoView](context) {
      if (this.couponList[$length] === 0) {
        return new container.Container.new({height: new flutter_screenutil.ScreenUtil.new().setHeight(10), width: screen.Screen.width, $creationLocationd_0dea112b090073317d4: C489 || CT.C489});
      }
      return new container.Container.new({height: new flutter_screenutil.ScreenUtil.new().setHeight(380), margin: new edge_insets.EdgeInsets.fromLTRB(new flutter_screenutil.ScreenUtil.new().setWidth(15), new flutter_screenutil.ScreenUtil.new().setHeight(10), new flutter_screenutil.ScreenUtil.new().setWidth(15), new flutter_screenutil.ScreenUtil.new().setHeight(10)), width: new flutter_screenutil.ScreenUtil.new().setWidth(750), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(4.0), color: colors.Colors.white}), child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({alignment: alignment.Alignment.centerLeft, width: new flutter_screenutil.ScreenUtil.new().setWidth(750 - 30), height: new flutter_screenutil.ScreenUtil.new().setHeight(80), padding: new edge_insets.EdgeInsets.only({left: new flutter_screenutil.ScreenUtil.new().setWidth(15)}), child: new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("促销惠", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({fontSize: new flutter_screenutil.ScreenUtil.new().setSp(33), fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C493 || CT.C493}), new container.Container.new({margin: new edge_insets.EdgeInsets.only({left: 5.0}), child: new text.Text.new("特惠商品精品不断", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({fontSize: new flutter_screenutil.ScreenUtil.new().setSp(25), color: colors.Colors.black54}), $creationLocationd_0dea112b090073317d4: C498 || CT.C498}), $creationLocationd_0dea112b090073317d4: C503 || CT.C503})]), $creationLocationd_0dea112b090073317d4: C507 || CT.C507}), decoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({bottom: new borders.BorderSide.new({width: 1.0, color: colors.Colors.black12})})}), $creationLocationd_0dea112b090073317d4: C510 || CT.C510}), new container.Container.new({width: new flutter_screenutil.ScreenUtil.new().setWidth(750 - 30), height: new flutter_screenutil.ScreenUtil.new().setHeight(300), decoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({bottom: new borders.BorderSide.new({width: 1.0, color: colors.Colors.black12})})}), child: new scroll_view.ListView.builder({shrinkWrap: true, scrollDirection: basic_types.Axis.horizontal, itemCount: this.url[$length], itemBuilder: dart.fn((context, i) => {
                      let t3, t3$;
                      return new ink_well.InkWell.new({onTap: dart.fn(() => {
                          app_navigator.AppNavigator.pushNovelDetail(context, this.couponList[$_get](i));
                        }, VoidToNull()), child: new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(10.0, new flutter_screenutil.ScreenUtil.new().setHeight(15), 10.0, new flutter_screenutil.ScreenUtil.new().setHeight(10)), child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.ClipOval.new({child: new image.Image.network((t3 = this.couponList[$_get](i).pictUrl, t3 == null ? "" : t3), {fit: box_fit.BoxFit.cover, width: new flutter_screenutil.ScreenUtil.new().setHeight(150), height: new flutter_screenutil.ScreenUtil.new().setHeight(150), $creationLocationd_0dea112b090073317d4: C518 || CT.C518}), $creationLocationd_0dea112b090073317d4: C524 || CT.C524}), new container.Container.new({padding: new edge_insets.EdgeInsets.only({top: new flutter_screenutil.ScreenUtil.new().setHeight(2)}), width: new flutter_screenutil.ScreenUtil.new().setHeight(150), height: new flutter_screenutil.ScreenUtil.new().setHeight(40), child: new text.Text.new((t3$ = this.couponList[$_get](i).title, t3$ == null ? "" : t3$), {maxLines: 1, style: new text_style.TextStyle.new({color: new ui.Color.new(4281545523), fontSize: new flutter_screenutil.ScreenUtil.new().setSp(26)}), $creationLocationd_0dea112b090073317d4: C527 || CT.C527}), $creationLocationd_0dea112b090073317d4: C532 || CT.C532}), new container.Container.new({padding: new edge_insets.EdgeInsets.only({top: new flutter_screenutil.ScreenUtil.new().setHeight(2)}), width: new flutter_screenutil.ScreenUtil.new().setHeight(150), height: new flutter_screenutil.ScreenUtil.new().setHeight(40), child: new text.Text.new("原价:¥" + dart.str(this.couponList[$_get](i).zkFinalPrice), {maxLines: 1, style: new text_style.TextStyle.new({color: sq_color.SQColor.primary, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(26)}), $creationLocationd_0dea112b090073317d4: C538 || CT.C538}), $creationLocationd_0dea112b090073317d4: C543 || CT.C543}), new container.Container.new({width: new flutter_screenutil.ScreenUtil.new().setHeight(150), alignment: alignment.Alignment.center, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(3.0), border: box_border.Border.all({width: 1.0, color: sq_color.SQColor.primary})}), child: new text.Text.new("¥" + dart.str(this.couponList[$_get](i).couponAmount) + "元券", {style: new text_style.TextStyle.new({color: sq_color.SQColor.primary, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(25)}), $creationLocationd_0dea112b090073317d4: C549 || CT.C549}), $creationLocationd_0dea112b090073317d4: C553 || CT.C553})]), $creationLocationd_0dea112b090073317d4: C559 || CT.C559}), $creationLocationd_0dea112b090073317d4: C562 || CT.C562}), $creationLocationd_0dea112b090073317d4: C566 || CT.C566});
                    }, BuildContextAndintToInkWell()), $creationLocationd_0dea112b090073317d4: C570 || CT.C570}), $creationLocationd_0dea112b090073317d4: C576 || CT.C576})]), $creationLocationd_0dea112b090073317d4: C582 || CT.C582})]), $creationLocationd_0dea112b090073317d4: C583 || CT.C583}), $creationLocationd_0dea112b090073317d4: C586 || CT.C586});
    }
    [_gridOneView](context) {
      return new container.Container.new({color: new ui.Color.new(4294177779), margin: new edge_insets.EdgeInsets.fromLTRB(new flutter_screenutil.ScreenUtil.new().setWidth(15), 0.0, new flutter_screenutil.ScreenUtil.new().setWidth(15), 5.0), width: new flutter_screenutil.ScreenUtil.new().setWidth(750), child: new basic.Row.new({children: JSArrayOfWidget().of([this[_gridContentView](0, context), this[_gridContentView](1, context)]), $creationLocationd_0dea112b090073317d4: C593 || CT.C593}), $creationLocationd_0dea112b090073317d4: C596 || CT.C596});
    }
    [_gridTowView](context) {
      return new container.Container.new({color: new ui.Color.new(4294177779), margin: new edge_insets.EdgeInsets.fromLTRB(new flutter_screenutil.ScreenUtil.new().setWidth(15), 0.0, new flutter_screenutil.ScreenUtil.new().setWidth(15), 5.0), width: new flutter_screenutil.ScreenUtil.new().setWidth(750), child: new basic.Row.new({children: JSArrayOfWidget().of([this[_gridContentView](2, context), this[_gridContentView](3, context)]), $creationLocationd_0dea112b090073317d4: C602 || CT.C602}), $creationLocationd_0dea112b090073317d4: C605 || CT.C605});
    }
    [_gridContentView](index, c) {
      let t3, t3$;
      return new container.Container.new({height: new flutter_screenutil.ScreenUtil.new().setHeight(240), width: new flutter_screenutil.ScreenUtil.new().setWidth((750 - 35) / 2), margin: !dart.equals(dart.dsend(index, '%', [2]), 0) ? new edge_insets.EdgeInsets.only({left: new flutter_screenutil.ScreenUtil.new().setWidth(5)}) : new edge_insets.EdgeInsets.only({left: 0.0}), padding: new edge_insets.EdgeInsets.all(5.0), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(4.0), color: colors.Colors.white}), child: new ink_well.InkWell.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({width: new flutter_screenutil.ScreenUtil.new().setWidth(30), child: new image.Image.asset(this.urlIcom[$_get](core.int._check(index)), {$creationLocationd_0dea112b090073317d4: C611 || CT.C611}), $creationLocationd_0dea112b090073317d4: C614 || CT.C614}), new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(5.0, 5.0, 0.0, 0.0), child: new text.Text.new(this.urlTitle[$_get](core.int._check(index)), {style: new text_style.TextStyle.new({color: this.titleC[$_get](core.int._check(index)), fontSize: new flutter_screenutil.ScreenUtil.new().setSp(30)}), $creationLocationd_0dea112b090073317d4: C618 || CT.C618}), $creationLocationd_0dea112b090073317d4: C622 || CT.C622})]), $creationLocationd_0dea112b090073317d4: C626 || CT.C626}), new container.Container.new({alignment: alignment.Alignment.topLeft, child: new text.Text.new(this.subTitleA[$_get](core.int._check(index)), {textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: colors.Colors.black54, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(20)}), $creationLocationd_0dea112b090073317d4: C629 || CT.C629}), $creationLocationd_0dea112b090073317d4: C634 || CT.C634}), new container.Container.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(4.0), color: colors.Colors.white}), child: new image.Image.network((t3 = this.image1A[$_get](core.int._check(index)), t3 == null ? "" : t3), {fit: box_fit.BoxFit.cover, width: new flutter_screenutil.ScreenUtil.new().setHeight(130), $creationLocationd_0dea112b090073317d4: C638 || CT.C638}), $creationLocationd_0dea112b090073317d4: C643 || CT.C643}), new container.Container.new({margin: new edge_insets.EdgeInsets.only({left: new flutter_screenutil.ScreenUtil.new().setWidth(30)}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(4.0), color: colors.Colors.white}), child: new image.Image.network((t3$ = this.image2A[$_get](core.int._check(index)), t3$ == null ? "" : t3$), {fit: box_fit.BoxFit.cover, width: new flutter_screenutil.ScreenUtil.new().setHeight(130), $creationLocationd_0dea112b090073317d4: C647 || CT.C647}), $creationLocationd_0dea112b090073317d4: C652 || CT.C652})]), $creationLocationd_0dea112b090073317d4: C657 || CT.C657}), $creationLocationd_0dea112b090073317d4: C660 || CT.C660})]), $creationLocationd_0dea112b090073317d4: C663 || CT.C663}), onTap: dart.fn(() => {
            let t3, t3$;
            app_navigator.AppNavigator.pushMaterPage(c, (t3 = this.masterKey[$_get](core.int._check(index)), t3 == null ? "" : t3), (t3$ = this.urlTitle[$_get](core.int._check(index)), t3$ == null ? "" : t3$));
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C666 || CT.C666}), $creationLocationd_0dea112b090073317d4: C670 || CT.C670});
    }
    [_announView]() {
      return new container.Container.new({width: new flutter_screenutil.ScreenUtil.new().setWidth(750), height: new flutter_screenutil.ScreenUtil.new().setHeight(60), margin: new edge_insets.EdgeInsets.fromLTRB(10.0, 10.0, 10.0, 10.0), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(new flutter_screenutil.ScreenUtil.new().setHeight(55 / 2)), color: colors.Colors.white}), child: new basic.Row.new({children: JSArrayOfWidget().of([this[_marqueeWid02]("推荐", this.announceMentArr, basic_types.AxisDirection.down)]), $creationLocationd_0dea112b090073317d4: C678 || CT.C678}), $creationLocationd_0dea112b090073317d4: C681 || CT.C681});
    }
    [_marqueeWid02](recStr, list, direction) {
      let _wList = JSArrayOfWidget().of([]);
      for (let i = 0; i < dart.notNull(core.num._check(dart.dload(list, 'length'))); i = i + 1) {
        _wList[$add](new container.Container.new({width: new flutter_screenutil.ScreenUtil.new().setWidth(750 - 30 - 150 - 10 - 110), height: new flutter_screenutil.ScreenUtil.new().setHeight(50), alignment: alignment.Alignment.centerLeft, child: new text.Text.new(core.String._check(dart.dsend(list, '_get', [i])), {$creationLocationd_0dea112b090073317d4: C688 || CT.C688}), $creationLocationd_0dea112b090073317d4: C691 || CT.C691}));
      }
      return new container.Container.new({height: new flutter_screenutil.ScreenUtil.new().setHeight(60), child: new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 10.0}), width: new flutter_screenutil.ScreenUtil.new().setWidth(150), child: new image.Image.asset("home_gg_t.png", {$creationLocationd_0dea112b090073317d4: C697 || CT.C697}), $creationLocationd_0dea112b090073317d4: C700 || CT.C700}), new container.Container.new({width: 1.0, height: new flutter_screenutil.ScreenUtil.new().setHeight(20), color: colors.Colors.grey, margin: new edge_insets.EdgeInsets.symmetric({horizontal: 20.0}), $creationLocationd_0dea112b090073317d4: C705 || CT.C705}), new ace_marquee.ACEMarquee.new({children: _wList, direction: basic_types.AxisDirection._check(direction), duration: new core.Duration.new({milliseconds: 2000}), onItemTap: dart.fn(index => {
              }, dynamicToNull()), $creationLocationd_0dea112b090073317d4: C711 || CT.C711})]), $creationLocationd_0dea112b090073317d4: C717 || CT.C717}), $creationLocationd_0dea112b090073317d4: C720 || CT.C720});
    }
    [_fliterView](context) {
      return new container.Container.new({height: new flutter_screenutil.ScreenUtil.new().setHeight(150), child: new scroll_view.ListView.builder({scrollDirection: basic_types.Axis.horizontal, itemCount: this.url[$length], itemBuilder: dart.fn((c, i) => {
            let t3, t3$;
            return new ink_well.InkWell.new({onTap: dart.fn(() => {
                let t3;
                app_navigator.AppNavigator.pushSearchResult(context, (t3 = this.funcTitieA[$_get](i), t3 == null ? "" : t3));
              }, VoidToNull()), child: new container.Container.new({margin: new edge_insets.EdgeInsets.fromLTRB(10.0, new flutter_screenutil.ScreenUtil.new().setHeight(15), 10.0, new flutter_screenutil.ScreenUtil.new().setHeight(10)), child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.ClipOval.new({child: new image.Image.network((t3 = this.url[$_get](i), t3 == null ? "" : t3), {fit: box_fit.BoxFit.cover, width: new flutter_screenutil.ScreenUtil.new().setHeight(80), height: new flutter_screenutil.ScreenUtil.new().setHeight(80), $creationLocationd_0dea112b090073317d4: C724 || CT.C724}), $creationLocationd_0dea112b090073317d4: C730 || CT.C730}), new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: new flutter_screenutil.ScreenUtil.new().setHeight(2)}), child: new text.Text.new((t3$ = this.funcTitieA[$_get](i), t3$ == null ? "" : t3$), {style: new text_style.TextStyle.new({color: new ui.Color.new(4281545523), fontSize: new flutter_screenutil.ScreenUtil.new().setSp(26)}), $creationLocationd_0dea112b090073317d4: C733 || CT.C733}), $creationLocationd_0dea112b090073317d4: C737 || CT.C737})]), $creationLocationd_0dea112b090073317d4: C741 || CT.C741}), $creationLocationd_0dea112b090073317d4: C744 || CT.C744}), $creationLocationd_0dea112b090073317d4: C748 || CT.C748});
          }, BuildContextAndintToInkWell()), $creationLocationd_0dea112b090073317d4: C752 || CT.C752}), $creationLocationd_0dea112b090073317d4: C757 || CT.C757});
    }
  };
  (home_header.HomeHeader.new = function(couponList, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[funcImageA] = JSArrayOfString().of(["http://img01.liwushuo.com/image/150626/4q7omzsaj.png-pw144", "http://img03.liwushuo.com/image/150615/qzd06srrt.png-pw144", "http://img01.liwushuo.com/image/150615/r8ck3dd11.png-pw144", "http://img02.liwushuo.com/image/150615/cjx5ewf8a.png-pw144", "http://img02.liwushuo.com/image/150615/mwblar564.png-pw144", "http://img02.liwushuo.com/image/150615/3twtwf7a5.png-pw144", "http://img03.liwushuo.com/image/150615/np4eyslm9.png-pw144", "http://img02.liwushuo.com/image/150615/jq6zajwvy.png-pw144"]);
    this[funcTitieA] = JSArrayOfString().of(["底妆", "美妆工具", "美甲", "彩妆套装", "洁面", "乳液/面霜", "精华", "防晒"]);
    this[announceMentArr] = JSArrayOfString().of(["好多人不知道的淘宝购物秘诀", "精选好物尽在淘优惠券", "领劵即可在淘宝下单,购买省钱"]);
    this[titleC] = JSArrayOfColor().of([new ui.Color.new(4288163583), new ui.Color.new(4294522936), new ui.Color.new(4294928402), new ui.Color.new(4279155120)]);
    this[subTitleA] = JSArrayOfString().of(["即时好货疯狂抢", "白菜价格买好货", "流行势力最前沿", "低价享受高品质生活"]);
    this[image1A] = JSArrayOfString().of(["http://hank.image.alimmdn.com/tbCoupon/b1.png", "http://hank.image.alimmdn.com/tbCoupon/t1.png", "http://hank.image.alimmdn.com/tbCoupon/c1.png", "http://hank.image.alimmdn.com/tbCoupon/91.png"]);
    this[image2A] = JSArrayOfString().of(["http://hank.image.alimmdn.com/tbCoupon/b2.png", "http://hank.image.alimmdn.com/tbCoupon/t2.png", "http://hank.image.alimmdn.com/tbCoupon/c2.png", "http://hank.image.alimmdn.com/tbCoupon/92.png"]);
    this[url] = JSArrayOfString().of(["http://img02.liwushuo.com/image/150615/v65bdnets.png-pw144", "http://img02.liwushuo.com/image/150615/1mlvwwz03.png-pw144", "http://img02.liwushuo.com/image/150615/w01wjnzql.png-pw144", "http://img03.liwushuo.com/image/150615/gc3d24sx9.png-pw144", "http://img03.liwushuo.com/image/150615/cw21m8c10.png-pw144", "http://img01.liwushuo.com/image/150312/ouiup1wr8.png-pw144"]);
    this[urlIcom] = JSArrayOfString().of(["home_adv_icon_ziying.png", "home_adv_icon_remai.png", "home_adv_icon_haohuo.png", "home_adv_icon_youhuiquan.png"]);
    this[urlTitle] = JSArrayOfString().of(["人气爆款", "超值特惠", "时尚潮流", "9块9包邮"]);
    this[masterKey] = JSArrayOfString().of(["4092", "4094", "4093", "0000"]);
    this[couponList$0] = couponList;
    home_header.HomeHeader.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home_header.HomeHeader.prototype;
  dart.addTypeTests(home_header.HomeHeader);
  dart.setMethodSignature(home_header.HomeHeader, () => ({
    __proto__: dart.getMethods(home_header.HomeHeader.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_chuxiaoView]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_gridOneView]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_gridTowView]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_gridContentView]: dart.fnType(framework.Widget, [dart.dynamic, framework.BuildContext]),
    [_announView]: dart.fnType(framework.Widget, []),
    [_marqueeWid02]: dart.fnType(framework.Widget, [dart.dynamic, dart.dynamic, dart.dynamic]),
    [_fliterView]: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home_header.HomeHeader, "package:hkbook/page/home/home_header.dart");
  dart.setFieldSignature(home_header.HomeHeader, () => ({
    __proto__: dart.getFields(home_header.HomeHeader.__proto__),
    couponList: dart.finalFieldType(core.List$(coupon_model.MapData)),
    funcImageA: dart.fieldType(core.List$(core.String)),
    funcTitieA: dart.fieldType(core.List$(core.String)),
    announceMentArr: dart.fieldType(core.List$(core.String)),
    titleC: dart.fieldType(core.List$(ui.Color)),
    subTitleA: dart.fieldType(core.List$(core.String)),
    image1A: dart.fieldType(core.List$(core.String)),
    image2A: dart.fieldType(core.List$(core.String)),
    url: dart.fieldType(core.List$(core.String)),
    urlIcom: dart.fieldType(core.List$(core.String)),
    urlTitle: dart.fieldType(core.List$(core.String)),
    masterKey: dart.fieldType(core.List$(core.String))
  }));
  let C761;
  let C764;
  let C765;
  let C763;
  let C762;
  let C768;
  let C769;
  let C767;
  let C766;
  let C772;
  let C771;
  let C770;
  let C775;
  let C776;
  let C777;
  let C778;
  let C774;
  let C773;
  let C781;
  let C780;
  let C779;
  const carouselInfos = dart.privateName(home_banner, "HomeBanner.carouselInfos");
  home_banner.HomeBanner = class HomeBanner extends framework.StatelessWidget {
    get carouselInfos() {
      return this[carouselInfos];
    }
    set carouselInfos(value) {
      super.carouselInfos = value;
    }
    build(context) {
      if (this.carouselInfos[$length] === 0) {
        return new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C761 || CT.C761});
      }
      return new container.Container.new({color: colors.Colors.white, child: new carousel_slider.CarouselSlider.new({items: this.carouselInfos[$map](basic.Builder, dart.fn(info => new basic.Builder.new({builder: dart.fn(context => {
              let t3;
              return new container.Container.new({width: new flutter_screenutil.ScreenUtil.new().setWidth(750), child: new image.Image.network((t3 = info, t3 == null ? "" : t3), {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C762 || CT.C762}), $creationLocationd_0dea112b090073317d4: C766 || CT.C766});
            }, BuildContextToContainer()), $creationLocationd_0dea112b090073317d4: C770 || CT.C770}), StringToBuilder()))[$toList](), viewportFraction: 1.0, aspectRatio: 2.0, autoPlay: true, $creationLocationd_0dea112b090073317d4: C773 || CT.C773}), $creationLocationd_0dea112b090073317d4: C779 || CT.C779});
    }
  };
  (home_banner.HomeBanner.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[carouselInfos] = JSArrayOfString().of(["http://hank.image.alimmdn.com/tbCoupon/dae.png", "http://hank.image.alimmdn.com/tbCoupon/pp.png"]);
    home_banner.HomeBanner.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home_banner.HomeBanner.prototype;
  dart.addTypeTests(home_banner.HomeBanner);
  dart.setMethodSignature(home_banner.HomeBanner, () => ({
    __proto__: dart.getMethods(home_banner.HomeBanner.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home_banner.HomeBanner, "package:hkbook/page/home/home_banner.dart");
  dart.setFieldSignature(home_banner.HomeBanner, () => ({
    __proto__: dart.getFields(home_banner.HomeBanner.__proto__),
    carouselInfos: dart.finalFieldType(core.List$(core.String))
  }));
  const contentHeight$ = dart.privateName(category_page, "XFileAppbar.contentHeight");
  const contentChild$ = dart.privateName(category_page, "XFileAppbar.contentChild");
  const statusBarColor$ = dart.privateName(category_page, "XFileAppbar.statusBarColor");
  category_page.XFileAppbar = class XFileAppbar extends framework.StatefulWidget {
    get contentHeight() {
      return this[contentHeight$];
    }
    set contentHeight(value) {
      super.contentHeight = value;
    }
    get contentChild() {
      return this[contentChild$];
    }
    set contentChild(value) {
      super.contentChild = value;
    }
    get statusBarColor() {
      return this[statusBarColor$];
    }
    set statusBarColor(value) {
      super.statusBarColor = value;
    }
    createState() {
      return new category_page._XFileAppbarState.new();
    }
    get preferredSize() {
      return new ui.Size.fromHeight(this.contentHeight);
    }
  };
  (category_page.XFileAppbar.new = function(opts) {
    let contentChild = opts && 'contentChild' in opts ? opts.contentChild : null;
    let contentHeight = opts && 'contentHeight' in opts ? opts.contentHeight : null;
    let statusBarColor = opts && 'statusBarColor' in opts ? opts.statusBarColor : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[contentChild$] = contentChild;
    this[contentHeight$] = contentHeight;
    this[statusBarColor$] = statusBarColor;
    category_page.XFileAppbar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = category_page.XFileAppbar.prototype;
  dart.addTypeTests(category_page.XFileAppbar);
  category_page.XFileAppbar[dart.implements] = () => [preferred_size.PreferredSizeWidget];
  dart.setMethodSignature(category_page.XFileAppbar, () => ({
    __proto__: dart.getMethods(category_page.XFileAppbar.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setGetterSignature(category_page.XFileAppbar, () => ({
    __proto__: dart.getGetters(category_page.XFileAppbar.__proto__),
    preferredSize: ui.Size
  }));
  dart.setLibraryUri(category_page.XFileAppbar, "package:hkbook/page/category/category_page.dart");
  dart.setFieldSignature(category_page.XFileAppbar, () => ({
    __proto__: dart.getFields(category_page.XFileAppbar.__proto__),
    contentHeight: dart.finalFieldType(core.double),
    contentChild: dart.finalFieldType(framework.Widget),
    statusBarColor: dart.finalFieldType(ui.Color)
  }));
  let C784;
  let C785;
  let C783;
  let C782;
  let C788;
  let C789;
  let C787;
  let C786;
  category_page._XFileAppbarState = class _XFileAppbarState extends framework.State$(category_page.XFileAppbar) {
    build(context) {
      return new container.Container.new({color: this.widget.statusBarColor, child: new safe_area.SafeArea.new({top: true, child: this.widget.contentChild, $creationLocationd_0dea112b090073317d4: C782 || CT.C782}), $creationLocationd_0dea112b090073317d4: C786 || CT.C786});
    }
  };
  (category_page._XFileAppbarState.new = function() {
    category_page._XFileAppbarState.__proto__.new.call(this);
    ;
  }).prototype = category_page._XFileAppbarState.prototype;
  dart.addTypeTests(category_page._XFileAppbarState);
  dart.setMethodSignature(category_page._XFileAppbarState, () => ({
    __proto__: dart.getMethods(category_page._XFileAppbarState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(category_page._XFileAppbarState, "package:hkbook/page/category/category_page.dart");
  category_page.CategoryPage = class CategoryPage extends framework.StatefulWidget {
    createState() {
      return new category_page._CategoryPageState.new();
    }
  };
  (category_page.CategoryPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    category_page.CategoryPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = category_page.CategoryPage.prototype;
  dart.addTypeTests(category_page.CategoryPage);
  dart.setMethodSignature(category_page.CategoryPage, () => ({
    __proto__: dart.getMethods(category_page.CategoryPage.__proto__),
    createState: dart.fnType(category_page._CategoryPageState, [])
  }));
  dart.setLibraryUri(category_page.CategoryPage, "package:hkbook/page/category/category_page.dart");
  let C792;
  let C791;
  let C790;
  let C795;
  let C796;
  let C797;
  let C794;
  let C793;
  let C800;
  let C801;
  let C799;
  let C798;
  let C804;
  let C803;
  let C802;
  let C807;
  let C808;
  let C809;
  let C810;
  let C806;
  let C805;
  let C813;
  let C814;
  let C812;
  let C811;
  let C817;
  let C816;
  let C815;
  let C820;
  let C821;
  let C822;
  let C819;
  let C818;
  const _getCategory = dart.privateName(category_page, "_getCategory");
  const _getMain$ = dart.privateName(category_page, "_getMain");
  let C825;
  let C824;
  let C823;
  let C828;
  let C829;
  let C827;
  let C826;
  let C832;
  let C833;
  let C831;
  let C830;
  let C836;
  let C835;
  let C834;
  let C839;
  let C840;
  let C838;
  let C837;
  let C843;
  let C844;
  let C842;
  let C841;
  let C847;
  let C848;
  let C846;
  let C845;
  let C851;
  let C852;
  let C853;
  let C854;
  let C850;
  let C849;
  let C857;
  let C856;
  let C855;
  const _buildNavigationBar = dart.privateName(category_page, "_buildNavigationBar");
  let C858;
  let C861;
  let C860;
  let C859;
  let C862;
  let C865;
  let C864;
  let C863;
  const State_AutomaticKeepAliveClientMixin$36$1 = class State_AutomaticKeepAliveClientMixin extends framework.State$(category_page.CategoryPage) {};
  (State_AutomaticKeepAliveClientMixin$36$1.new = function() {
    automatic_keep_alive.AutomaticKeepAliveClientMixin$(category_page.CategoryPage)[dart.mixinNew].call(this);
    State_AutomaticKeepAliveClientMixin$36$1.__proto__.new.call(this);
  }).prototype = State_AutomaticKeepAliveClientMixin$36$1.prototype;
  dart.applyMixin(State_AutomaticKeepAliveClientMixin$36$1, automatic_keep_alive.AutomaticKeepAliveClientMixin$(category_page.CategoryPage));
  category_page._CategoryPageState = class _CategoryPageState extends State_AutomaticKeepAliveClientMixin$36$1 {
    initState() {
      core.print("initState 1");
      super.initState();
    }
    build(context) {
      super.build(context);
      core.print("build 1");
      return new container.Container.new({child: new scaffold.Scaffold.new({appBar: new category_page.XFileAppbar.new({contentHeight: screen.Screen.navigationBarHeight, statusBarColor: colors.Colors.white, contentChild: new container.Container.new({child: new ink_well.InkWell.new({onTap: dart.fn(() => {
                  app_navigator.AppNavigator.pushSearch(context);
                }, VoidToNull()), child: new container.Container.new({margin: new edge_insets.EdgeInsets.fromLTRB(new flutter_screenutil.ScreenUtil.new().setWidth(30), new flutter_screenutil.ScreenUtil.new().setHeight(15), new flutter_screenutil.ScreenUtil.new().setWidth(30), new flutter_screenutil.ScreenUtil.new().setHeight(15)), height: new flutter_screenutil.ScreenUtil.new().setHeight(60), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(dart.notNull(new flutter_screenutil.ScreenUtil.new().setHeight(60)) / 2), color: new ui.Color.new(4293980400)}), child: new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(new flutter_screenutil.ScreenUtil.new().setWidth(30), 0.0, new flutter_screenutil.ScreenUtil.new().setWidth(15), 0.0), height: new flutter_screenutil.ScreenUtil.new().setHeight(40), child: new image.Image.asset("icon_search_gray.png", {$creationLocationd_0dea112b090073317d4: C790 || CT.C790}), $creationLocationd_0dea112b090073317d4: C793 || CT.C793}), new text.Text.new("请输入您要搜索的商品", {style: new text_style.TextStyle.new({color: colors.Colors.black54, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(28)}), $creationLocationd_0dea112b090073317d4: C798 || CT.C798})]), $creationLocationd_0dea112b090073317d4: C802 || CT.C802}), $creationLocationd_0dea112b090073317d4: C805 || CT.C805}), $creationLocationd_0dea112b090073317d4: C811 || CT.C811}), $creationLocationd_0dea112b090073317d4: C815 || CT.C815}), $creationLocationd_0dea112b090073317d4: C818 || CT.C818}), body: new async$.FutureBuilder.new({future: this[_getCategory](), builder: dart.fn((context, snapshot) => {
              if (dart.test(snapshot.hasData)) {
                return this[_getMain$]();
              } else {
                return new fading_circle.SpinKitFadingCircle.new({color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C823 || CT.C823});
              }
            }, BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C826 || CT.C826}), $creationLocationd_0dea112b090073317d4: C830 || CT.C830}), $creationLocationd_0dea112b090073317d4: C834 || CT.C834});
    }
    [_buildNavigationBar]() {
      return new basic.Stack.new({children: JSArrayOfWidget().of([new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(0.0, screen.Screen.topSafeHeight, 0.0, 0.0), height: screen.Screen.navigationBarHeight, color: sq_color.SQColor.white, child: new container.Container.new({color: colors.Colors.white, child: new ink_well.InkWell.new({onTap: dart.fn(() => {
                  app_navigator.AppNavigator.pushSearch(this.context);
                }, VoidToNull()), child: new container.Container.new({margin: new edge_insets.EdgeInsets.fromLTRB(new flutter_screenutil.ScreenUtil.new().setWidth(30), new flutter_screenutil.ScreenUtil.new().setHeight(15), new flutter_screenutil.ScreenUtil.new().setWidth(30), new flutter_screenutil.ScreenUtil.new().setHeight(15)), height: new flutter_screenutil.ScreenUtil.new().setHeight(30), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(dart.notNull(new flutter_screenutil.ScreenUtil.new().setHeight(30)) / 2), color: colors.Colors.black12}), $creationLocationd_0dea112b090073317d4: C837 || CT.C837}), $creationLocationd_0dea112b090073317d4: C841 || CT.C841}), $creationLocationd_0dea112b090073317d4: C845 || CT.C845}), $creationLocationd_0dea112b090073317d4: C849 || CT.C849})]), $creationLocationd_0dea112b090073317d4: C855 || CT.C855});
    }
    [_getMain$]() {
      if (this.list[$length] === 0) {
        return new activity_indicator.CupertinoActivityIndicator.new({$creationLocationd_0dea112b090073317d4: C858 || CT.C858});
      } else {
        return new basic.Row.new({children: JSArrayOfWidget().of([new category_page.LeftCategoryNav.new(this.list, {$creationLocationd_0dea112b090073317d4: C859 || CT.C859}), new category_page.RightCategoryNav.new({$creationLocationd_0dea112b090073317d4: C862 || CT.C862})]), $creationLocationd_0dea112b090073317d4: C863 || CT.C863});
      }
    }
    [_getCategory]() {
      return async.async(dart.dynamic, (function* _getCategory() {
        let data = convert.json.decode(dart.toString(constant.Categoryjson));
        let cdata = new category_model.CategoryModel.fromJson(MapOfString$dynamic()._check(data));
        let c = cdata.data[$_get](0).subcategories;
        provide.Provide.value(category.ChildCategory, this.context).getChildCategory(c);
        this.list = cdata.data;
        return data;
      }).bind(this));
    }
    get wantKeepAlive() {
      return true;
    }
  };
  (category_page._CategoryPageState.new = function() {
    this.list = [];
    category_page._CategoryPageState.__proto__.new.call(this);
    ;
  }).prototype = category_page._CategoryPageState.prototype;
  dart.addTypeTests(category_page._CategoryPageState);
  dart.setMethodSignature(category_page._CategoryPageState, () => ({
    __proto__: dart.getMethods(category_page._CategoryPageState.__proto__),
    [_buildNavigationBar]: dart.fnType(framework.Widget, []),
    [_getMain$]: dart.fnType(framework.Widget, []),
    [_getCategory]: dart.fnType(async.Future, [])
  }));
  dart.setGetterSignature(category_page._CategoryPageState, () => ({
    __proto__: dart.getGetters(category_page._CategoryPageState.__proto__),
    wantKeepAlive: core.bool
  }));
  dart.setLibraryUri(category_page._CategoryPageState, "package:hkbook/page/category/category_page.dart");
  dart.setFieldSignature(category_page._CategoryPageState, () => ({
    __proto__: dart.getFields(category_page._CategoryPageState.__proto__),
    list: dart.fieldType(core.List)
  }));
  category_page.RightCategoryNav = class RightCategoryNav extends framework.StatefulWidget {
    createState() {
      return new category_page._RightCategoryNavState.new();
    }
  };
  (category_page.RightCategoryNav.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    category_page.RightCategoryNav.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = category_page.RightCategoryNav.prototype;
  dart.addTypeTests(category_page.RightCategoryNav);
  dart.setMethodSignature(category_page.RightCategoryNav, () => ({
    __proto__: dart.getMethods(category_page.RightCategoryNav.__proto__),
    createState: dart.fnType(category_page._RightCategoryNavState, [])
  }));
  dart.setLibraryUri(category_page.RightCategoryNav, "package:hkbook/page/category/category_page.dart");
  const _warpList$ = dart.privateName(category_page, "_warpList");
  let C868;
  let C867;
  let C866;
  let C871;
  let C872;
  let C873;
  let C870;
  let C869;
  let C874;
  let C877;
  let C878;
  let C879;
  let C876;
  let C875;
  let C882;
  let C883;
  let C884;
  let C885;
  let C881;
  let C880;
  let C888;
  let C887;
  let C886;
  let C891;
  let C892;
  let C893;
  let C894;
  let C895;
  let C890;
  let C889;
  let C898;
  let C899;
  let C897;
  let C896;
  let C902;
  let C903;
  let C904;
  let C901;
  let C900;
  let C907;
  let C906;
  let C905;
  category_page._RightCategoryNavState = class _RightCategoryNavState extends framework.State$(category_page.RightCategoryNav) {
    initState() {
      super.initState();
    }
    build(context) {
      let singleChildScrollView = new single_child_scroll_view.SingleChildScrollView.new({child: this[_warpList$](), $creationLocationd_0dea112b090073317d4: C866 || CT.C866});
      return new container.Container.new({color: colors.Colors.white, width: new flutter_screenutil.ScreenUtil.new().setWidth(570), child: singleChildScrollView, $creationLocationd_0dea112b090073317d4: C869 || CT.C869});
    }
    [_warpList$]() {
      return new (ProvideOfChildCategory()).new({builder: dart.fn((c, child, childGorty) => {
          if (childGorty.cl[$length] === 0) {
            return new container.Container.new({$creationLocationd_0dea112b090073317d4: C874 || CT.C874});
          }
          let list = childGorty.cl[$map](ink_well.InkWell, dart.fn(v => {
            let t3;
            return new ink_well.InkWell.new({onTap: dart.fn(() => {
                app_navigator.AppNavigator.pushSearchResult(this.context, v.name);
              }, VoidToNull()), child: new container.Container.new({width: new flutter_screenutil.ScreenUtil.new().setWidth(570 / 2), color: colors.Colors.white, padding: new edge_insets.EdgeInsets.all(0.0), margin: new edge_insets.EdgeInsets.only({bottom: 0.0}), child: new basic.Column.new({children: JSArrayOfWidget().of([new image.Image.network((t3 = v.iconUrl, t3 == null ? "" : t3), {fit: box_fit.BoxFit.cover, height: 570 / 4, $creationLocationd_0dea112b090073317d4: C875 || CT.C875}), new text.Text.new(v.name, {maxLines: 1, overflow: paragraph.TextOverflow.ellipsis, style: new text_style.TextStyle.new({color: colors.Colors.red, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(26)}), $creationLocationd_0dea112b090073317d4: C880 || CT.C880})]), $creationLocationd_0dea112b090073317d4: C886 || CT.C886}), $creationLocationd_0dea112b090073317d4: C889 || CT.C889}), $creationLocationd_0dea112b090073317d4: C896 || CT.C896});
          }, SubcategoriesToInkWell()))[$toList]();
          return new basic.Wrap.new({alignment: wrap.WrapAlignment.start, crossAxisAlignment: wrap.WrapCrossAlignment.start, children: list, $creationLocationd_0dea112b090073317d4: C900 || CT.C900});
        }, BuildContextAndWidgetAndChildCategoryToWidget()), $creationLocationd_0dea112b090073317d4: C905 || CT.C905});
    }
  };
  (category_page._RightCategoryNavState.new = function() {
    category_page._RightCategoryNavState.__proto__.new.call(this);
    ;
  }).prototype = category_page._RightCategoryNavState.prototype;
  dart.addTypeTests(category_page._RightCategoryNavState);
  dart.setMethodSignature(category_page._RightCategoryNavState, () => ({
    __proto__: dart.getMethods(category_page._RightCategoryNavState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_warpList$]: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(category_page._RightCategoryNavState, "package:hkbook/page/category/category_page.dart");
  const list$ = dart.privateName(category_page, "LeftCategoryNav.list");
  category_page.LeftCategoryNav = class LeftCategoryNav extends framework.StatefulWidget {
    get list() {
      return this[list$];
    }
    set list(value) {
      super.list = value;
    }
    createState() {
      return new category_page._LeftCategoryNavState.new();
    }
  };
  (category_page.LeftCategoryNav.new = function(list, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[list$] = list;
    category_page.LeftCategoryNav.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = category_page.LeftCategoryNav.prototype;
  dart.addTypeTests(category_page.LeftCategoryNav);
  dart.setMethodSignature(category_page.LeftCategoryNav, () => ({
    __proto__: dart.getMethods(category_page.LeftCategoryNav.__proto__),
    createState: dart.fnType(category_page._LeftCategoryNavState, [])
  }));
  dart.setLibraryUri(category_page.LeftCategoryNav, "package:hkbook/page/category/category_page.dart");
  dart.setFieldSignature(category_page.LeftCategoryNav, () => ({
    __proto__: dart.getFields(category_page.LeftCategoryNav.__proto__),
    list: dart.finalFieldType(core.List)
  }));
  const _leftInkWll = dart.privateName(category_page, "_leftInkWll");
  let C910;
  let C911;
  let C909;
  let C908;
  let C914;
  let C915;
  let C916;
  let C913;
  let C912;
  let C919;
  let C920;
  let C918;
  let C917;
  let C923;
  let C924;
  let C925;
  let C926;
  let C922;
  let C921;
  let C929;
  let C930;
  let C928;
  let C927;
  category_page._LeftCategoryNavState = class _LeftCategoryNavState extends framework.State$(category_page.LeftCategoryNav) {
    initState() {
      super.initState();
    }
    build(context) {
      return new container.Container.new({width: new flutter_screenutil.ScreenUtil.new().setWidth(180), decoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({right: new borders.BorderSide.new({width: 1.0, color: colors.Colors.black12})})}), child: new scroll_view.ListView.builder({itemCount: this.widget.list[$length], itemBuilder: dart.fn((c, i) => this[_leftInkWll](i), BuildContextAndintToWidget()), $creationLocationd_0dea112b090073317d4: C908 || CT.C908}), $creationLocationd_0dea112b090073317d4: C912 || CT.C912});
    }
    [_leftInkWll](index) {
      let isSelect = false;
      isSelect = dart.equals(index, this.currentIndex) ? true : false;
      return new ink_well.InkWell.new({onTap: dart.fn(() => {
          this.setState(dart.fn(() => {
            this.currentIndex = core.int._check(index);
          }, VoidToNull()));
          let c = dart.dload(this.widget.list[$_get](core.int._check(index)), 'subcategories');
          provide.Provide.value(category.ChildCategory, this.context).getChildCategory(core.List._check(c));
        }, VoidToNull()), child: new container.Container.new({height: new flutter_screenutil.ScreenUtil.new().setHeight(100), padding: new edge_insets.EdgeInsets.fromLTRB(new flutter_screenutil.ScreenUtil.new().setWidth(20), new flutter_screenutil.ScreenUtil.new().setHeight(30), 0.0, 0.0), decoration: new box_decoration.BoxDecoration.new({color: isSelect ? colors.Colors.pink : colors.Colors.white, border: new box_border.Border.new({bottom: new borders.BorderSide.new({width: 1.0, color: colors.Colors.black12})})}), child: new text.Text.new(core.String._check(dart.dload(this.widget.list[$_get](core.int._check(index)), 'name')), {style: new text_style.TextStyle.new({fontSize: new flutter_screenutil.ScreenUtil.new().setSp(30), color: isSelect ? colors.Colors.white : colors.Colors.black38}), $creationLocationd_0dea112b090073317d4: C917 || CT.C917}), $creationLocationd_0dea112b090073317d4: C921 || CT.C921}), $creationLocationd_0dea112b090073317d4: C927 || CT.C927});
    }
  };
  (category_page._LeftCategoryNavState.new = function() {
    this.currentIndex = 0;
    category_page._LeftCategoryNavState.__proto__.new.call(this);
    ;
  }).prototype = category_page._LeftCategoryNavState.prototype;
  dart.addTypeTests(category_page._LeftCategoryNavState);
  dart.setMethodSignature(category_page._LeftCategoryNavState, () => ({
    __proto__: dart.getMethods(category_page._LeftCategoryNavState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_leftInkWll]: dart.fnType(framework.Widget, [dart.dynamic])
  }));
  dart.setLibraryUri(category_page._LeftCategoryNavState, "package:hkbook/page/category/category_page.dart");
  dart.setFieldSignature(category_page._LeftCategoryNavState, () => ({
    __proto__: dart.getFields(category_page._LeftCategoryNavState.__proto__),
    currentIndex: dart.fieldType(core.int)
  }));
  cricel_page.CricelPage = class CricelPage extends framework.StatefulWidget {
    createState() {
      return new cricel_page.CricelPageState.new();
    }
  };
  (cricel_page.CricelPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    cricel_page.CricelPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = cricel_page.CricelPage.prototype;
  dart.addTypeTests(cricel_page.CricelPage);
  dart.setMethodSignature(cricel_page.CricelPage, () => ({
    __proto__: dart.getMethods(cricel_page.CricelPage.__proto__),
    createState: dart.fnType(cricel_page.CricelPageState, [])
  }));
  dart.setLibraryUri(cricel_page.CricelPage, "package:hkbook/page/Cricle/cricel_page.dart");
  const _couponList$0 = dart.privateName(cricel_page, "_couponList");
  let C933;
  let C932;
  let C931;
  let C936;
  let C935;
  let C934;
  const _getMain$0 = dart.privateName(cricel_page, "_getMain");
  let C939;
  let C940;
  let C941;
  let C942;
  let C938;
  let C937;
  let C945;
  let C944;
  let C943;
  let C948;
  let C949;
  let C950;
  let C947;
  let C946;
  let C953;
  let C954;
  let C952;
  let C951;
  let C957;
  let C956;
  let C955;
  const _warpList$0 = dart.privateName(cricel_page, "_warpList");
  let C960;
  let C959;
  let C958;
  let C963;
  let C964;
  let C965;
  let C966;
  let C962;
  let C961;
  const _CricleCell = dart.privateName(cricel_page, "_CricleCell");
  let C969;
  let C968;
  let C967;
  let C972;
  let C971;
  let C970;
  let C975;
  let C974;
  let C973;
  let C978;
  let C979;
  let C977;
  let C976;
  let C982;
  let C981;
  let C980;
  let C985;
  let C986;
  let C987;
  let C984;
  let C983;
  let C990;
  let C989;
  let C988;
  let C993;
  let C994;
  let C992;
  let C991;
  let C997;
  let C998;
  let C999;
  let C996;
  let C995;
  let C1002;
  let C1001;
  let C1000;
  let C1005;
  let C1004;
  let C1003;
  let C1008;
  let C1009;
  let C1010;
  let C1011;
  let C1012;
  let C1007;
  let C1006;
  let C1015;
  let C1016;
  let C1017;
  let C1014;
  let C1013;
  const _photoView = dart.privateName(cricel_page, "_photoView");
  let C1020;
  let C1021;
  let C1022;
  let C1023;
  let C1024;
  let C1019;
  let C1018;
  let C1027;
  let C1028;
  let C1029;
  let C1026;
  let C1025;
  let C1032;
  let C1033;
  let C1034;
  let C1035;
  let C1036;
  let C1031;
  let C1030;
  let C1039;
  let C1040;
  let C1041;
  let C1038;
  let C1037;
  const _allContent = dart.privateName(cricel_page, "_allContent");
  let C1044;
  let C1045;
  let C1046;
  let C1047;
  let C1048;
  let C1043;
  let C1042;
  let C1051;
  let C1052;
  let C1053;
  let C1050;
  let C1049;
  let C1056;
  let C1057;
  let C1055;
  let C1054;
  let C1060;
  let C1059;
  let C1058;
  let C1063;
  let C1064;
  let C1062;
  let C1061;
  let C1067;
  let C1066;
  let C1065;
  let C1070;
  let C1071;
  let C1069;
  let C1068;
  let C1074;
  let C1075;
  let C1073;
  let C1072;
  let C1078;
  let C1077;
  let C1076;
  let C1081;
  let C1080;
  let C1079;
  let C1084;
  let C1085;
  let C1083;
  let C1082;
  let C1088;
  let C1087;
  let C1086;
  let C1091;
  let C1092;
  let C1093;
  let C1090;
  let C1089;
  let C1096;
  let C1097;
  let C1095;
  let C1094;
  let C1098;
  let C1101;
  let C1102;
  let C1100;
  let C1099;
  let C1105;
  let C1106;
  let C1104;
  let C1103;
  let C1109;
  let C1110;
  let C1111;
  let C1112;
  let C1113;
  let C1114;
  let C1108;
  let C1107;
  let C1117;
  let C1116;
  let C1115;
  let C1120;
  let C1121;
  let C1122;
  let C1119;
  let C1118;
  let C1125;
  let C1126;
  let C1124;
  let C1123;
  let C1129;
  let C1130;
  let C1131;
  let C1128;
  let C1127;
  let C1134;
  let C1135;
  let C1133;
  let C1132;
  let C1138;
  let C1139;
  let C1140;
  let C1141;
  let C1137;
  let C1136;
  let C1144;
  let C1145;
  let C1143;
  let C1142;
  let C1148;
  let C1147;
  let C1146;
  let C1149;
  const page$ = dart.privateName(cricel_page, "CricelPageState.page");
  const couponList = dart.privateName(cricel_page, "CricelPageState.couponList");
  const fotterKey = dart.privateName(cricel_page, "CricelPageState.fotterKey");
  const State_AutomaticKeepAliveClientMixin$36$2 = class State_AutomaticKeepAliveClientMixin extends framework.State$(cricel_page.CricelPage) {};
  (State_AutomaticKeepAliveClientMixin$36$2.new = function() {
    automatic_keep_alive.AutomaticKeepAliveClientMixin$(cricel_page.CricelPage)[dart.mixinNew].call(this);
    State_AutomaticKeepAliveClientMixin$36$2.__proto__.new.call(this);
  }).prototype = State_AutomaticKeepAliveClientMixin$36$2.prototype;
  dart.applyMixin(State_AutomaticKeepAliveClientMixin$36$2, automatic_keep_alive.AutomaticKeepAliveClientMixin$(cricel_page.CricelPage));
  cricel_page.CricelPageState = class CricelPageState extends State_AutomaticKeepAliveClientMixin$36$2 {
    get page() {
      return this[page$];
    }
    set page(value) {
      this[page$] = value;
    }
    get couponList() {
      return this[couponList];
    }
    set couponList(value) {
      this[couponList] = value;
    }
    get fotterKey() {
      return this[fotterKey];
    }
    set fotterKey(value) {
      this[fotterKey] = value;
    }
    initState() {
      super.initState();
      core.print("initState 2");
      this.page = 1;
      this.couponList = JSArrayOfMapData().of([]);
      this[_couponList$0](this.page, "3786");
    }
    build(context) {
      super.build(context);
      core.print("build 2");
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("看看", {$creationLocationd_0dea112b090073317d4: C931 || CT.C931}), $creationLocationd_0dea112b090073317d4: C934 || CT.C934}), body: this[_getMain$0](context), backgroundColor: colors.Colors.white, resizeToAvoidBottomInset: false, $creationLocationd_0dea112b090073317d4: C937 || CT.C937});
    }
    [_getMain$0](context) {
      if (this.couponList[$length] === 0) {
        return new container.Container.new({alignment: alignment.Alignment.center, child: new ink_well.InkWell.new({child: new container.Container.new({width: dart.notNull(screen.Screen.width) / 3, height: dart.notNull(screen.Screen.height) / 3, child: new image.Image.asset("empty.png", {$creationLocationd_0dea112b090073317d4: C943 || CT.C943}), $creationLocationd_0dea112b090073317d4: C946 || CT.C946}), onTap: dart.fn(() => {
              this.page = 1;
              this.couponList = JSArrayOfMapData().of([]);
              this[_couponList$0](this.page, "3786");
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C951 || CT.C951}), $creationLocationd_0dea112b090073317d4: C955 || CT.C955});
      } else {
        core.print("build 3");
        return new refresher.EasyRefresh.new({child: new scroll_view.ListView.new({children: JSArrayOfWidget().of([this[_warpList$0]()]), $creationLocationd_0dea112b090073317d4: C958 || CT.C958}), onRefresh: dart.fn(() => async.async(core.Null, (function*() {
            this.page = 1;
            this.couponList = JSArrayOfMapData().of([]);
            this[_couponList$0](this.page, "3786");
          }).bind(this)), VoidToFutureOfNull()), onLoad: dart.fn(() => async.async(core.Null, function*() {
            app_navigator.AppNavigator.pushCricelMorePage(context);
          }), VoidToFutureOfNull()), footer: new footer.ClassicalFooter.new({loadText: "上拉进入更多", bgColor: colors.Colors.white, textColor: colors.Colors.pink, infoColor: colors.Colors.pink, noMoreText: "", key: this.fotterKey}), $creationLocationd_0dea112b090073317d4: C961 || CT.C961});
      }
    }
    [_warpList$0]() {
      if (dart.notNull(this.couponList[$length]) > 0) {
        let list = this.couponList[$map](framework.Widget, dart.fn(v => this[_CricleCell](v), MapDataToWidget()))[$toList]();
        return new basic.Wrap.new({children: list, $creationLocationd_0dea112b090073317d4: C967 || CT.C967});
      } else {
        return new image.Image.asset("empty.png", {$creationLocationd_0dea112b090073317d4: C970 || CT.C970});
      }
    }
    [_CricleCell](m) {
      let margin = new flutter_screenutil.ScreenUtil.new().setWidth(15);
      return new ink_well.InkWell.new({onTap: dart.fn(() => {
          app_navigator.AppNavigator.pushNovelDetail(this.context, m);
        }, VoidToNull()), child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({bottom: new borders.BorderSide.new({width: margin, color: colors.Colors.black12})}), color: colors.Colors.white}), padding: new edge_insets.EdgeInsets.all(margin), child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new image.Image.asset(m.userType === 1 ? "icon_tmall.png" : "icon_tao.png", {$creationLocationd_0dea112b090073317d4: C973 || CT.C973}), new container.Container.new({alignment: alignment.Alignment.centerLeft, margin: new edge_insets.EdgeInsets.all(margin), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new container.Container.new({child: new text.Text.new(m.shopTitle, {textAlign: ui.TextAlign.left, $creationLocationd_0dea112b090073317d4: C976 || CT.C976}), $creationLocationd_0dea112b090073317d4: C980 || CT.C980}), new container.Container.new({child: new text.Text.new(m.couponInfo, {textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: sq_color.SQColor.primary, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(28)}), $creationLocationd_0dea112b090073317d4: C983 || CT.C983}), $creationLocationd_0dea112b090073317d4: C988 || CT.C988})]), $creationLocationd_0dea112b090073317d4: C991 || CT.C991}), $creationLocationd_0dea112b090073317d4: C995 || CT.C995})]), $creationLocationd_0dea112b090073317d4: C1000 || CT.C1000}), $creationLocationd_0dea112b090073317d4: C1003 || CT.C1003}), new container.Container.new({alignment: alignment.Alignment.centerLeft, padding: new edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 0.0, margin), child: new text.Text.new(m.title, {maxLines: 1, overflow: paragraph.TextOverflow.ellipsis, textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: new ui.Color.new(4281545523)}), $creationLocationd_0dea112b090073317d4: C1006 || CT.C1006}), $creationLocationd_0dea112b090073317d4: C1013 || CT.C1013}), this[_photoView](m, margin, this.context), new container.Container.new({alignment: alignment.Alignment.centerLeft, padding: new edge_insets.EdgeInsets.fromLTRB(0.0, margin, 0.0, 0.0), child: new text.Text.new("[价格]¥" + dart.str(m.zkFinalPrice), {maxLines: 1, overflow: paragraph.TextOverflow.ellipsis, textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: new ui.Color.new(4281545523)}), $creationLocationd_0dea112b090073317d4: C1018 || CT.C1018}), $creationLocationd_0dea112b090073317d4: C1025 || CT.C1025}), new container.Container.new({alignment: alignment.Alignment.centerLeft, padding: new edge_insets.EdgeInsets.fromLTRB(0.0, dart.notNull(margin) / 2, 0.0, 0.0), child: new text.Text.new("[优惠券]¥" + dart.str(m.couponAmount), {maxLines: 1, overflow: paragraph.TextOverflow.ellipsis, textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: new ui.Color.new(4281545523)}), $creationLocationd_0dea112b090073317d4: C1030 || CT.C1030}), $creationLocationd_0dea112b090073317d4: C1037 || CT.C1037}), this[_allContent](this.context, m), new container.Container.new({child: new ink_well.InkWell.new({onTap: dart.fn(() => {
                    this.setState(dart.fn(() => {
                      m.isExpand = !dart.test(m.isExpand);
                    }, VoidToNull()));
                  }, VoidToNull()), child: new container.Container.new({alignment: alignment.Alignment.centerLeft, padding: new edge_insets.EdgeInsets.fromLTRB(0.0, dart.notNull(margin) / 2, 0.0, margin), child: new text.Text.new(dart.test(m.isExpand) ? "收起" : "全文", {maxLines: 1, overflow: paragraph.TextOverflow.ellipsis, textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: sq_color.SQColor.primary}), $creationLocationd_0dea112b090073317d4: C1042 || CT.C1042}), $creationLocationd_0dea112b090073317d4: C1049 || CT.C1049}), $creationLocationd_0dea112b090073317d4: C1054 || CT.C1054}), $creationLocationd_0dea112b090073317d4: C1058 || CT.C1058}), new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(0.0, dart.notNull(margin) * 2, 0.0, 0.0), child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new text.Text.new("优惠券已领取:" + dart.str(m.couponTotalCount), {style: new text_style.TextStyle.new({color: colors.Colors.black38, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(30)}), $creationLocationd_0dea112b090073317d4: C1061 || CT.C1061}), $creationLocationd_0dea112b090073317d4: C1065 || CT.C1065}), new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("立即领取", {style: new text_style.TextStyle.new({color: sq_color.SQColor.primary, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(30)}), $creationLocationd_0dea112b090073317d4: C1068 || CT.C1068}), new image.Image.asset("dianji.png", {height: new flutter_screenutil.ScreenUtil.new().setHeight(50), $creationLocationd_0dea112b090073317d4: C1072 || CT.C1072})]), $creationLocationd_0dea112b090073317d4: C1076 || CT.C1076})]), $creationLocationd_0dea112b090073317d4: C1079 || CT.C1079}), $creationLocationd_0dea112b090073317d4: C1082 || CT.C1082})]), $creationLocationd_0dea112b090073317d4: C1086 || CT.C1086}), $creationLocationd_0dea112b090073317d4: C1089 || CT.C1089}), $creationLocationd_0dea112b090073317d4: C1094 || CT.C1094});
    }
    [_photoView](m, margin, c) {
      if (m.smallImages == null || m.smallImages.string == null || m.smallImages.string[$length] === 0) {
        return new container.Container.new({$creationLocationd_0dea112b090073317d4: C1098 || CT.C1098});
      }
      let nl = JSArrayOfMap().of([]);
      for (let i = 0; i < dart.notNull(m.smallImages.string[$length]); i = i + 1) {
        nl[$add](new _js_helper.LinkedMap.from(["image", m.smallImages.string[$_get](i)]));
      }
      return new container.Container.new({child: new scroll_view.GridView.builder({shrinkWrap: true, physics: new scroll_physics.NeverScrollableScrollPhysics.new(), padding: new edge_insets.EdgeInsets.symmetric({vertical: 0.0}), gridDelegate: new sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: 3, crossAxisSpacing: core.double._check(margin), mainAxisSpacing: core.double._check(margin)}), itemBuilder: dart.fn((context, index) => {
            let t3;
            return new ink_well.InkWell.new({child: new image.Image.network((t3 = m.smallImages.string[$_get](index), t3 == null ? "" : t3), {fit: box_fit.BoxFit.fill, $creationLocationd_0dea112b090073317d4: C1099 || CT.C1099}), onTap: dart.fn(() => {
                app_navigator.AppNavigator.pushPhoto(framework.BuildContext._check(c), index, nl);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C1103 || CT.C1103});
          }, BuildContextAndintToInkWell()), itemCount: m.smallImages.string[$length], $creationLocationd_0dea112b090073317d4: C1107 || CT.C1107}), $creationLocationd_0dea112b090073317d4: C1115 || CT.C1115});
    }
    [_allContent](context, m) {
      if (dart.test(m.isExpand)) {
        return new container.Container.new({alignment: alignment.Alignment.centerLeft, child: new text.Text.new(m.title, {textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: new ui.Color.new(4281545523)}), $creationLocationd_0dea112b090073317d4: C1118 || CT.C1118}), $creationLocationd_0dea112b090073317d4: C1123 || CT.C1123});
        return new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({alignment: alignment.Alignment.centerLeft, child: new text.Text.new(m.title, {textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: new ui.Color.new(4281545523)}), $creationLocationd_0dea112b090073317d4: C1127 || CT.C1127}), $creationLocationd_0dea112b090073317d4: C1132 || CT.C1132}), new ink_well.InkWell.new({onTap: dart.fn(() => {
                app_navigator.AppNavigator.pushNovelDetail(context, m);
              }, VoidToNull()), child: new text.Text.new("宝贝详情", {overflow: paragraph.TextOverflow.ellipsis, textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: sq_color.SQColor.primary, decoration: ui.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: C1136 || CT.C1136}), $creationLocationd_0dea112b090073317d4: C1142 || CT.C1142})]), $creationLocationd_0dea112b090073317d4: C1146 || CT.C1146});
      } else {
        return new container.Container.new({$creationLocationd_0dea112b090073317d4: C1149 || CT.C1149});
      }
    }
    [_couponList$0](page, materiaqlId) {
      return async.async(dart.void, (function* _couponList() {
        core.print(dart.str(page));
        let formdata = new (IdentityMapOfString$dynamic()).from(["app_key", "27675850", "session_key", "hank", "method", "taobao.tbk.dg.material.optional", "partner_id", "top-apitools", "format", "json", "v", "2.0", "sign_method", "md5", "timestamp", service_method.getTime(), "adzone_id", "109164900192", "force_sensitive_param_fuzzy", "true", "page_no", dart.str(page), "has_coupon", "true", "cat", "0", "page_size", "10", "material_id", materiaqlId]);
        yield service_method.request("couponList", formdata).then(core.Null, dart.fn(value => {
          if (value == null) return;
          let data = convert.json.decode(dart.toString(value));
          core.print(dart.toString(value));
          let cdata = new coupon_model.CounponModel.fromJson(MapOfString$dynamic()._check(data));
          if (cdata === null) {
            toast.ToastHelper.showToast(this.context, "网络错误,点击重新加载");
          } else {
            this.setState(dart.fn(() => {
              this.couponList[$addAll](cdata.tbkDgMaterialOptionalResponse.resultList.mapData);
            }, VoidToNull()));
          }
        }, dynamicToNull()));
      }).bind(this));
    }
    get wantKeepAlive() {
      return true;
    }
  };
  (cricel_page.CricelPageState.new = function() {
    this[page$] = 1;
    this[couponList] = JSArrayOfMapData().of([]);
    this[fotterKey] = new (ValueKeyOfString()).new("fotterKey");
    cricel_page.CricelPageState.__proto__.new.call(this);
    ;
  }).prototype = cricel_page.CricelPageState.prototype;
  dart.addTypeTests(cricel_page.CricelPageState);
  dart.setMethodSignature(cricel_page.CricelPageState, () => ({
    __proto__: dart.getMethods(cricel_page.CricelPageState.__proto__),
    [_getMain$0]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_warpList$0]: dart.fnType(framework.Widget, []),
    [_CricleCell]: dart.fnType(framework.Widget, [coupon_model.MapData]),
    [_photoView]: dart.fnType(framework.Widget, [coupon_model.MapData, dart.dynamic, dart.dynamic]),
    [_allContent]: dart.fnType(framework.Widget, [framework.BuildContext, coupon_model.MapData]),
    [_couponList$0]: dart.fnType(async.Future$(dart.void), [dart.dynamic, dart.dynamic])
  }));
  dart.setGetterSignature(cricel_page.CricelPageState, () => ({
    __proto__: dart.getGetters(cricel_page.CricelPageState.__proto__),
    wantKeepAlive: core.bool
  }));
  dart.setLibraryUri(cricel_page.CricelPageState, "package:hkbook/page/Cricle/cricel_page.dart");
  dart.setFieldSignature(cricel_page.CricelPageState, () => ({
    __proto__: dart.getFields(cricel_page.CricelPageState.__proto__),
    page: dart.fieldType(core.int),
    couponList: dart.fieldType(core.List$(coupon_model.MapData)),
    fotterKey: dart.fieldType(key.Key)
  }));
  let C1152;
  let C1151;
  let C1150;
  let C1153;
  let C1156;
  let C1157;
  let C1155;
  let C1154;
  let C1158;
  let C1159;
  let C1160;
  let C1163;
  let C1164;
  let C1162;
  let C1161;
  let C1165;
  let C1168;
  let C1167;
  let C1166;
  app_navigator.AppNavigator = class AppNavigator extends core.Object {
    static push(context, scene) {
      navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => scene, BuildContextToWidget())}));
    }
    static pushNovelDetail(context, model) {
      app_navigator.AppNavigator.push(context, new details_page.DetailsPage.new(model, {$creationLocationd_0dea112b090073317d4: C1150 || CT.C1150}));
    }
    static pushCricelMorePage(context) {
      app_navigator.AppNavigator.push(context, new circel_more_page.CricelMorePage.new({$creationLocationd_0dea112b090073317d4: C1153 || CT.C1153}));
    }
    static pushMaterPage(context, key, t) {
      app_navigator.AppNavigator.push(context, new search_mater_page.SearchMaterResult.new(key, t, {$creationLocationd_0dea112b090073317d4: C1154 || CT.C1154}));
    }
    static pushPhoto(context, index, list) {
    }
    static pushSearch(context) {
      app_navigator.AppNavigator.push(context, new search_goods_page.SearchGoodsPage.new({$creationLocationd_0dea112b090073317d4: C1158 || CT.C1158}));
    }
    static pushClearCPage(context) {
      app_navigator.AppNavigator.push(context, new clearCache_page.ClearCPage.new({$creationLocationd_0dea112b090073317d4: C1159 || CT.C1159}));
    }
    static pushAboutWePage(context) {
      app_navigator.AppNavigator.push(context, new aboutWe_page.AboutWePage.new({$creationLocationd_0dea112b090073317d4: C1160 || CT.C1160}));
    }
    static pushBrowser(context, url, title) {
      app_navigator.AppNavigator.push(context, new browser.Browser.new({url: core.String._check(url), title: core.String._check(title), $creationLocationd_0dea112b090073317d4: C1161 || CT.C1161}));
    }
    static pushHelp(context) {
      app_navigator.AppNavigator.push(context, new help_page.HelpPage.new({$creationLocationd_0dea112b090073317d4: C1165 || CT.C1165}));
    }
    static pushSearchResult(context, key) {
      app_navigator.AppNavigator.push(context, new search_result.SearchResult.new(key, {$creationLocationd_0dea112b090073317d4: C1166 || CT.C1166}));
    }
  };
  (app_navigator.AppNavigator.new = function() {
    ;
  }).prototype = app_navigator.AppNavigator.prototype;
  dart.addTypeTests(app_navigator.AppNavigator);
  dart.setLibraryUri(app_navigator.AppNavigator, "package:hkbook/app/app_navigator.dart");
  let C1171;
  let C1170;
  let C1169;
  let C1174;
  let C1175;
  let C1173;
  let C1172;
  let C1178;
  let C1177;
  let C1176;
  let C1181;
  let C1182;
  let C1183;
  let C1180;
  let C1179;
  let C1186;
  let C1185;
  let C1184;
  let C1189;
  let C1190;
  let C1188;
  let C1187;
  help_page.HelpPage = class HelpPage extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("帮助", {$creationLocationd_0dea112b090073317d4: C1169 || CT.C1169}), centerTitle: true, $creationLocationd_0dea112b090073317d4: C1172 || CT.C1172}), body: new scroll_view.ListView.new({children: JSArrayOfWidget().of([new container.Container.new({child: new image.Image.asset("couponhelp.png", {$creationLocationd_0dea112b090073317d4: C1176 || CT.C1176}), width: screen.Screen.width, height: screen.Screen.height, $creationLocationd_0dea112b090073317d4: C1179 || CT.C1179})]), $creationLocationd_0dea112b090073317d4: C1184 || CT.C1184}), $creationLocationd_0dea112b090073317d4: C1187 || CT.C1187});
    }
  };
  (help_page.HelpPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    help_page.HelpPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = help_page.HelpPage.prototype;
  dart.addTypeTests(help_page.HelpPage);
  dart.setMethodSignature(help_page.HelpPage, () => ({
    __proto__: dart.getMethods(help_page.HelpPage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(help_page.HelpPage, "package:hkbook/page/mine/help_page.dart");
  clearCache_page.ClearCPage = class ClearCPage extends framework.StatefulWidget {
    createState() {
      return new clearCache_page._ClearCPageState.new();
    }
  };
  (clearCache_page.ClearCPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    clearCache_page.ClearCPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = clearCache_page.ClearCPage.prototype;
  dart.addTypeTests(clearCache_page.ClearCPage);
  dart.setMethodSignature(clearCache_page.ClearCPage, () => ({
    __proto__: dart.getMethods(clearCache_page.ClearCPage.__proto__),
    createState: dart.fnType(clearCache_page._ClearCPageState, [])
  }));
  dart.setLibraryUri(clearCache_page.ClearCPage, "package:hkbook/page/mine/clearCache_page.dart");
  const _cacheSizeStr = dart.privateName(clearCache_page, "_cacheSizeStr");
  let C1193;
  let C1192;
  let C1191;
  let C1196;
  let C1195;
  let C1194;
  const _clearCache = dart.privateName(clearCache_page, "_clearCache");
  let C1199;
  let C1200;
  let C1198;
  let C1197;
  let C1203;
  let C1204;
  let C1205;
  let C1202;
  let C1201;
  let C1208;
  let C1209;
  let C1210;
  let C1207;
  let C1206;
  let C1213;
  let C1214;
  let C1215;
  let C1212;
  let C1211;
  let C1218;
  let C1217;
  let C1216;
  let C1221;
  let C1220;
  let C1219;
  let C1224;
  let C1225;
  let C1226;
  let C1223;
  let C1222;
  let C1229;
  let C1230;
  let C1228;
  let C1227;
  let C1233;
  let C1234;
  let C1232;
  let C1231;
  let C1237;
  let C1238;
  let C1239;
  let C1236;
  let C1235;
  const _getVersion = dart.privateName(clearCache_page, "_getVersion");
  let C1242;
  let C1243;
  let C1244;
  let C1241;
  let C1240;
  let C1247;
  let C1248;
  let C1249;
  let C1246;
  let C1245;
  let C1250;
  let C1253;
  let C1254;
  let C1252;
  let C1251;
  let C1257;
  let C1256;
  let C1255;
  let C1260;
  let C1259;
  let C1258;
  let C1263;
  let C1264;
  let C1262;
  let C1261;
  let C1267;
  let C1266;
  let C1265;
  let C1270;
  let C1271;
  let C1269;
  let C1268;
  const _renderSize = dart.privateName(clearCache_page, "_renderSize");
  clearCache_page._ClearCPageState = class _ClearCPageState extends framework.State$(clearCache_page.ClearCPage) {
    initState() {
      super.initState();
      this.loadCache();
    }
    build(context) {
      let margin = new flutter_screenutil.ScreenUtil.new().setWidth(20);
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("设置", {$creationLocationd_0dea112b090073317d4: C1191 || CT.C1191}), $creationLocationd_0dea112b090073317d4: C1194 || CT.C1194}), body: new scroll_view.ListView.new({children: JSArrayOfWidget().of([new ink_well.InkWell.new({onTap: dart.fn(() => {
                this[_clearCache](context);
              }, VoidToNull()), child: new container.Container.new({margin: new edge_insets.EdgeInsets.only({bottom: new flutter_screenutil.ScreenUtil.new().setHeight(20)}), color: colors.Colors.white, child: new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: margin}), padding: new edge_insets.EdgeInsets.all(margin), child: new text.Text.new("清除缓存", {style: new text_style.TextStyle.new({color: colors.Colors.black87}), $creationLocationd_0dea112b090073317d4: C1197 || CT.C1197}), $creationLocationd_0dea112b090073317d4: C1201 || CT.C1201}), new basic.Expanded.new({child: new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: margin}), padding: new edge_insets.EdgeInsets.all(margin), child: new text.Text.new(dart.str(this[_cacheSizeStr]), {style: new text_style.TextStyle.new({color: colors.Colors.black54}), textAlign: ui.TextAlign.right, $creationLocationd_0dea112b090073317d4: C1206 || CT.C1206}), $creationLocationd_0dea112b090073317d4: C1211 || CT.C1211}), $creationLocationd_0dea112b090073317d4: C1216 || CT.C1216})]), $creationLocationd_0dea112b090073317d4: C1219 || CT.C1219}), $creationLocationd_0dea112b090073317d4: C1222 || CT.C1222}), $creationLocationd_0dea112b090073317d4: C1227 || CT.C1227}), new container.Container.new({color: colors.Colors.white, child: new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: margin}), padding: new edge_insets.EdgeInsets.all(margin), child: new text.Text.new("版本号", {style: new text_style.TextStyle.new({color: colors.Colors.black87}), $creationLocationd_0dea112b090073317d4: C1231 || CT.C1231}), $creationLocationd_0dea112b090073317d4: C1235 || CT.C1235}), new basic.Expanded.new({child: new (FutureBuilderOfString()).new({future: this[_getVersion](), builder: dart.fn((context, snapshot) => {
                        if (dart.test(snapshot.hasData)) {
                          return new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: margin}), padding: new edge_insets.EdgeInsets.all(margin), child: new text.Text.new("v" + dart.str(snapshot.data), {style: new text_style.TextStyle.new({color: colors.Colors.black54}), textAlign: ui.TextAlign.right, $creationLocationd_0dea112b090073317d4: C1240 || CT.C1240}), $creationLocationd_0dea112b090073317d4: C1245 || CT.C1245});
                        } else {
                          return new container.Container.new({$creationLocationd_0dea112b090073317d4: C1250 || CT.C1250});
                        }
                      }, BuildContextAndAsyncSnapshotToContainer()), $creationLocationd_0dea112b090073317d4: C1251 || CT.C1251}), $creationLocationd_0dea112b090073317d4: C1255 || CT.C1255})]), $creationLocationd_0dea112b090073317d4: C1258 || CT.C1258}), $creationLocationd_0dea112b090073317d4: C1261 || CT.C1261})]), $creationLocationd_0dea112b090073317d4: C1265 || CT.C1265}), $creationLocationd_0dea112b090073317d4: C1268 || CT.C1268});
    }
    [_getVersion]() {
      return async.async(core.String, function* _getVersion() {
        return "1.0.0";
      });
    }
    loadCache() {
      return async.async(dart.void, (function* loadCache() {
        let imageCache = binding$.PaintingBinding.instance.imageCache;
        let byte = imageCache.currentSizeBytes;
        this.setState(dart.fn(() => {
          this[_cacheSizeStr] = core.String._check(this[_renderSize](byte[$toDouble]()));
        }, VoidToNull()));
      }).bind(this));
    }
    [_renderSize](value) {
      let t3;
      if (null == value) {
        return 0;
      }
      let unitArr = (t3 = JSArrayOfString().of([]), t3[$add]("B"), t3[$add]("K"), t3[$add]("M"), t3[$add]("G"), t3);
      let index = 0;
      while (dart.notNull(value) > 1024) {
        index = index + 1;
        value = dart.notNull(value) / 1024;
      }
      let size = value[$toStringAsFixed](2);
      return size + dart.notNull(unitArr[$_get](index));
    }
    [_clearCache](c) {
      return async.async(dart.void, (function* _clearCache() {
        let imageCache = binding$.PaintingBinding.instance.imageCache;
        imageCache.clear();
        this.setState(dart.fn(() => {
          this[_cacheSizeStr] = "0MB";
        }, VoidToNull()));
        toast.ToastHelper.showToast(this.context, "清除成功");
      }).bind(this));
    }
  };
  (clearCache_page._ClearCPageState.new = function() {
    this[_cacheSizeStr] = "0MB";
    clearCache_page._ClearCPageState.__proto__.new.call(this);
    ;
  }).prototype = clearCache_page._ClearCPageState.prototype;
  dart.addTypeTests(clearCache_page._ClearCPageState);
  dart.setMethodSignature(clearCache_page._ClearCPageState, () => ({
    __proto__: dart.getMethods(clearCache_page._ClearCPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_getVersion]: dart.fnType(async.Future$(core.String), []),
    loadCache: dart.fnType(async.Future$(dart.void), []),
    [_renderSize]: dart.fnType(dart.dynamic, [core.double]),
    [_clearCache]: dart.fnType(dart.void, [framework.BuildContext])
  }));
  dart.setLibraryUri(clearCache_page._ClearCPageState, "package:hkbook/page/mine/clearCache_page.dart");
  dart.setFieldSignature(clearCache_page._ClearCPageState, () => ({
    __proto__: dart.getFields(clearCache_page._ClearCPageState.__proto__),
    [_cacheSizeStr]: dart.fieldType(core.String)
  }));
  let C1274;
  let C1273;
  let C1272;
  let C1277;
  let C1276;
  let C1275;
  const _mainView$ = dart.privateName(aboutWe_page, "_mainView");
  let C1280;
  let C1281;
  let C1282;
  let C1279;
  let C1278;
  let C1285;
  let C1286;
  let C1287;
  let C1288;
  let C1284;
  let C1283;
  let C1291;
  let C1292;
  let C1293;
  let C1290;
  let C1289;
  let C1296;
  let C1295;
  let C1294;
  let C1299;
  let C1300;
  let C1298;
  let C1297;
  let C1303;
  let C1302;
  let C1301;
  let C1306;
  let C1307;
  let C1308;
  let C1309;
  let C1305;
  let C1304;
  const _getVersion$ = dart.privateName(aboutWe_page, "_getVersion");
  let C1312;
  let C1313;
  let C1314;
  let C1311;
  let C1310;
  let C1317;
  let C1318;
  let C1319;
  let C1316;
  let C1315;
  let C1320;
  let C1323;
  let C1324;
  let C1322;
  let C1321;
  let C1327;
  let C1326;
  let C1325;
  let C1330;
  let C1331;
  let C1332;
  let C1329;
  let C1328;
  let C1335;
  let C1334;
  let C1333;
  let C1338;
  let C1339;
  let C1337;
  let C1336;
  let C1342;
  let C1343;
  let C1344;
  let C1341;
  let C1340;
  let C1347;
  let C1348;
  let C1346;
  let C1345;
  let C1351;
  let C1350;
  let C1349;
  let C1354;
  let C1353;
  let C1352;
  let C1357;
  let C1356;
  let C1355;
  let C1360;
  let C1359;
  let C1358;
  let C1363;
  let C1364;
  let C1362;
  let C1361;
  let C1367;
  let C1368;
  let C1369;
  let C1366;
  let C1365;
  let C1372;
  let C1373;
  let C1371;
  let C1370;
  let C1376;
  let C1375;
  let C1374;
  let C1379;
  let C1378;
  let C1377;
  let C1382;
  let C1381;
  let C1380;
  let C1385;
  let C1384;
  let C1383;
  aboutWe_page.AboutWePage = class AboutWePage extends framework.StatelessWidget {
    build(context) {
      let margin = new flutter_screenutil.ScreenUtil.new().setHeight(30);
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("关于我们", {$creationLocationd_0dea112b090073317d4: C1272 || CT.C1272}), $creationLocationd_0dea112b090073317d4: C1275 || CT.C1275}), body: new basic.Stack.new({children: JSArrayOfWidget().of([this[_mainView$](), new basic.Positioned.new({bottom: 0.0, left: 0.0, child: new container.Container.new({width: screen.Screen.width, alignment: alignment.Alignment.center, padding: new edge_insets.EdgeInsets.all(margin), child: new text.Text.new("Copyright@2020", {style: new text_style.TextStyle.new({color: colors.Colors.black54, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(26)}), textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C1278 || CT.C1278}), $creationLocationd_0dea112b090073317d4: C1283 || CT.C1283}), $creationLocationd_0dea112b090073317d4: C1289 || CT.C1289})]), $creationLocationd_0dea112b090073317d4: C1294 || CT.C1294}), $creationLocationd_0dea112b090073317d4: C1297 || CT.C1297});
    }
    [_mainView$]() {
      let margin = new flutter_screenutil.ScreenUtil.new().setHeight(30);
      return new scroll_view.ListView.new({children: JSArrayOfWidget().of([new container.Container.new({color: sq_color.SQColor.primary, alignment: alignment.Alignment.center, child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(margin, dart.notNull(margin) * 2, margin, dart.notNull(margin) * 2), width: new flutter_screenutil.ScreenUtil.new().setWidth(200), child: new image.Image.asset("login_logo.png", {$creationLocationd_0dea112b090073317d4: C1301 || CT.C1301}), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(new flutter_screenutil.ScreenUtil.new().setHeight(10))}), $creationLocationd_0dea112b090073317d4: C1304 || CT.C1304}), new (FutureBuilderOfString()).new({future: this[_getVersion$](), builder: dart.fn((context, snapshot) => {
                    if (dart.test(snapshot.hasData)) {
                      return new container.Container.new({padding: new edge_insets.EdgeInsets.all(margin), alignment: alignment.Alignment.center, child: new text.Text.new("v" + dart.str(snapshot.data), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(30)}), textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C1310 || CT.C1310}), $creationLocationd_0dea112b090073317d4: C1315 || CT.C1315});
                    } else {
                      return new container.Container.new({$creationLocationd_0dea112b090073317d4: C1320 || CT.C1320});
                    }
                  }, BuildContextAndAsyncSnapshotToContainer()), $creationLocationd_0dea112b090073317d4: C1321 || CT.C1321})]), $creationLocationd_0dea112b090073317d4: C1325 || CT.C1325}), $creationLocationd_0dea112b090073317d4: C1328 || CT.C1328}), new container.Container.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({padding: new edge_insets.EdgeInsets.all(margin), child: new text.Text.new("QQ", {$creationLocationd_0dea112b090073317d4: C1333 || CT.C1333}), $creationLocationd_0dea112b090073317d4: C1336 || CT.C1336}), new basic.Expanded.new({child: new container.Container.new({padding: new edge_insets.EdgeInsets.all(margin), child: new text.Text.new("136951866", {style: new text_style.TextStyle.new({color: sq_color.SQColor.primary}), textAlign: ui.TextAlign.right, $creationLocationd_0dea112b090073317d4: C1340 || CT.C1340}), $creationLocationd_0dea112b090073317d4: C1345 || CT.C1345}), $creationLocationd_0dea112b090073317d4: C1349 || CT.C1349})]), $creationLocationd_0dea112b090073317d4: C1352 || CT.C1352}), $creationLocationd_0dea112b090073317d4: C1355 || CT.C1355}), new container.Container.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({padding: new edge_insets.EdgeInsets.all(margin), child: new text.Text.new("邮箱", {$creationLocationd_0dea112b090073317d4: C1358 || CT.C1358}), $creationLocationd_0dea112b090073317d4: C1361 || CT.C1361}), new basic.Expanded.new({child: new container.Container.new({padding: new edge_insets.EdgeInsets.all(margin), child: new text.Text.new("zhangweihao113@163.com", {style: new text_style.TextStyle.new({color: new ui.Color.new(4281545523)}), textAlign: ui.TextAlign.right, $creationLocationd_0dea112b090073317d4: C1365 || CT.C1365}), $creationLocationd_0dea112b090073317d4: C1370 || CT.C1370}), $creationLocationd_0dea112b090073317d4: C1374 || CT.C1374})]), $creationLocationd_0dea112b090073317d4: C1377 || CT.C1377}), $creationLocationd_0dea112b090073317d4: C1380 || CT.C1380})]), $creationLocationd_0dea112b090073317d4: C1383 || CT.C1383});
    }
    [_getVersion$]() {
      return async.async(core.String, function* _getVersion() {
        return "1.0.0";
      });
    }
  };
  (aboutWe_page.AboutWePage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    aboutWe_page.AboutWePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = aboutWe_page.AboutWePage.prototype;
  dart.addTypeTests(aboutWe_page.AboutWePage);
  dart.setMethodSignature(aboutWe_page.AboutWePage, () => ({
    __proto__: dart.getMethods(aboutWe_page.AboutWePage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_mainView$]: dart.fnType(framework.Widget, []),
    [_getVersion$]: dart.fnType(async.Future$(core.String), [])
  }));
  dart.setLibraryUri(aboutWe_page.AboutWePage, "package:hkbook/page/mine/aboutWe_page.dart");
  const model$ = dart.privateName(details_page, "DetailsPage.model");
  details_page.DetailsPage = class DetailsPage extends framework.StatefulWidget {
    get model() {
      return this[model$];
    }
    set model(value) {
      super.model = value;
    }
    createState() {
      return new details_page.DetailsPageState.new(this.model);
    }
  };
  (details_page.DetailsPage.new = function(model, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[model$] = model;
    details_page.DetailsPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = details_page.DetailsPage.prototype;
  dart.addTypeTests(details_page.DetailsPage);
  dart.setMethodSignature(details_page.DetailsPage, () => ({
    __proto__: dart.getMethods(details_page.DetailsPage.__proto__),
    createState: dart.fnType(details_page.DetailsPageState, [])
  }));
  dart.setLibraryUri(details_page.DetailsPage, "package:hkbook/page/details/details_page.dart");
  dart.setFieldSignature(details_page.DetailsPage, () => ({
    __proto__: dart.getFields(details_page.DetailsPage.__proto__),
    model: dart.finalFieldType(coupon_model.MapData)
  }));
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C1386;
  let C1389;
  let C1388;
  let C1387;
  let C1392;
  let C1393;
  let C1391;
  let C1390;
  let C1396;
  let C1395;
  let C1394;
  let C1399;
  let C1400;
  let C1398;
  let C1397;
  let C1403;
  let C1402;
  let C1401;
  const _detailView = dart.privateName(details_page, "_detailView");
  let C1406;
  let C1405;
  let C1404;
  const _detailBottom = dart.privateName(details_page, "_detailBottom");
  let C1409;
  let C1410;
  let C1411;
  let C1408;
  let C1407;
  let C1414;
  let C1413;
  let C1412;
  let C1417;
  let C1418;
  let C1416;
  let C1415;
  let C1421;
  let C1422;
  let C1420;
  let C1419;
  let C1425;
  let C1426;
  let C1424;
  let C1423;
  let C1429;
  let C1430;
  let C1431;
  let C1428;
  let C1427;
  let C1432;
  let C1435;
  let C1436;
  let C1434;
  let C1433;
  let C1439;
  let C1440;
  let C1438;
  let C1437;
  let C1443;
  let C1444;
  let C1445;
  let C1446;
  let C1442;
  let C1441;
  let C1449;
  let C1450;
  let C1448;
  let C1447;
  let C1453;
  let C1454;
  let C1455;
  let C1456;
  let C1452;
  let C1451;
  const _openTaobao = dart.privateName(details_page, "_openTaobao");
  const model$0 = dart.privateName(details_page, "DetailsPageState.model");
  const tb = dart.privateName(details_page, "DetailsPageState.tb");
  const tbk = dart.privateName(details_page, "DetailsPageState.tbk");
  const isShareVisiable = dart.privateName(details_page, "DetailsPageState.isShareVisiable");
  const State_SingleTickerProviderStateMixin$36$ = class State_SingleTickerProviderStateMixin extends framework.State$(details_page.DetailsPage) {};
  (State_SingleTickerProviderStateMixin$36$.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(details_page.DetailsPage)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$, ticker_provider.SingleTickerProviderStateMixin$(details_page.DetailsPage));
  const State_AutomaticKeepAliveClientMixin$36$3 = class State_AutomaticKeepAliveClientMixin extends State_SingleTickerProviderStateMixin$36$ {};
  (State_AutomaticKeepAliveClientMixin$36$3.new = function() {
    automatic_keep_alive.AutomaticKeepAliveClientMixin$(details_page.DetailsPage)[dart.mixinNew].call(this);
    State_AutomaticKeepAliveClientMixin$36$3.__proto__.new.call(this);
  }).prototype = State_AutomaticKeepAliveClientMixin$36$3.prototype;
  dart.applyMixin(State_AutomaticKeepAliveClientMixin$36$3, automatic_keep_alive.AutomaticKeepAliveClientMixin$(details_page.DetailsPage));
  details_page.DetailsPageState = class DetailsPageState extends State_AutomaticKeepAliveClientMixin$36$3 {
    get model() {
      return this[model$0];
    }
    set model(value) {
      super.model = value;
    }
    get tb() {
      return this[tb];
    }
    set tb(value) {
      this[tb] = value;
    }
    get tbk() {
      return this[tbk];
    }
    set tbk(value) {
      this[tbk] = value;
    }
    get isShareVisiable() {
      return this[isShareVisiable];
    }
    set isShareVisiable(value) {
      this[isShareVisiable] = value;
    }
    initState() {
      super.initState();
      this.setup();
    }
    setup() {
      return async.async(dart.void, function* setup() {
        yield FutureOfNull().delayed(C1386 || CT.C1386, dart.fn(() => {
        }, VoidToNull()));
      });
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({leading: new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.arrow_back, {$creationLocationd_0dea112b090073317d4: C1387 || CT.C1387}), onPressed: dart.fn(() => {
              navigator.Navigator.pop(core.Object, context);
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C1390 || CT.C1390}), title: new text.Text.new("商品详情", {$creationLocationd_0dea112b090073317d4: C1394 || CT.C1394}), $creationLocationd_0dea112b090073317d4: C1397 || CT.C1397}), body: new basic.Stack.new({children: JSArrayOfWidget().of([new gesture_detector.GestureDetector.new({onTapUp: dart.fn(details => {
              }, TapUpDetailsToNull()), $creationLocationd_0dea112b090073317d4: C1401 || CT.C1401}), new scroll_view.ListView.new({children: this[_detailView](context), $creationLocationd_0dea112b090073317d4: C1404 || CT.C1404}), new basic.Positioned.new({bottom: 0.0, left: 0.0, child: this[_detailBottom](context), $creationLocationd_0dea112b090073317d4: C1407 || CT.C1407}), framework.Widget._check(this.buildShare())]), $creationLocationd_0dea112b090073317d4: C1412 || CT.C1412}), $creationLocationd_0dea112b090073317d4: C1415 || CT.C1415});
    }
    [_detailView](context) {
      let list = JSArrayOfWidget().of([new details_header.DetailsHeader.new(this.model, dart.fn(() => {
          core.print("window.open(\"https://136951866.github.io/coupon/\");");
        }, VoidToNull()), {$creationLocationd_0dea112b090073317d4: C1419 || CT.C1419})]);
      if (this.model.smallImages != null && this.model.smallImages.string != null) {
        let nlist = this.model.smallImages.string[$map](image.Image, dart.fn(v => {
          let t3;
          return new image.Image.network((t3 = v, t3 == null ? "" : t3), {fit: box_fit.BoxFit.fill, $creationLocationd_0dea112b090073317d4: C1423 || CT.C1423});
        }, StringToImage()))[$toList]();
        list[$addAll](nlist);
      }
      let c = new container.Container.new({width: new flutter_screenutil.ScreenUtil.new().setWidth(750), height: new flutter_screenutil.ScreenUtil.new().setHeight(100), color: new ui.Color.new(4294309365), $creationLocationd_0dea112b090073317d4: C1427 || CT.C1427});
      list[$add](c);
      return list;
    }
    buildShare() {
      if (!dart.test(this.isShareVisiable)) {
        return new container.Container.new({$creationLocationd_0dea112b090073317d4: C1432 || CT.C1432});
      }
      return new details_share.DetailsShare.new({model: this.tb, onTap: dart.fn(() => {
          this.setState(dart.fn(() => {
            this.isShareVisiable = false;
          }, VoidToNull()));
        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C1433 || CT.C1433});
    }
    [_detailBottom](context) {
      return new container.Container.new({width: new flutter_screenutil.ScreenUtil.new().setWidth(750), height: new flutter_screenutil.ScreenUtil.new().setHeight(100), color: colors.Colors.white, child: new ink_well.InkWell.new({onTap: dart.fn(() => {
            core.print("window.open(\"https://136951866.github.io/coupon/\");");
          }, VoidToNull()), child: new container.Container.new({color: new ui.Color.new(4294741772), width: new flutter_screenutil.ScreenUtil.new().setWidth(750), alignment: alignment.Alignment.center, child: new text.Text.new("下载APP获取优惠券", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C1437 || CT.C1437}), $creationLocationd_0dea112b090073317d4: C1441 || CT.C1441}), $creationLocationd_0dea112b090073317d4: C1447 || CT.C1447}), $creationLocationd_0dea112b090073317d4: C1451 || CT.C1451});
    }
    getTpwd(isShare, context) {
      return async.async(dart.void, (function* getTpwd() {
        let t3, t3$, t3$0;
        if (this.tb.length > 0) {
          if (dart.test(isShare)) {
            this.setState(dart.fn(() => {
              this.isShareVisiable = true;
            }, VoidToNull()));
          } else {
            let data = new clipboard.ClipboardData.new({text: this.tbk});
            clipboard.Clipboard.setData(data);
            this[_openTaobao](this.tbk);
          }
        } else {
          let logo = (t3 = this.model.pictUrl, t3 == null ? "" : t3);
          let url = "https:" + dart.notNull((t3$ = this.model.couponShareUrl, t3$ == null ? "" : t3$));
          let ruel = url + "&pid=" + dart.notNull(global.TAOKAO_PID);
          let text = (t3$0 = this.model.title, t3$0 == null ? "" : t3$0);
          let formdata = new (IdentityMapOfString$String()).from(["app_key", "27675850", "session_key", "hank", "method", "taobao.tbk.tpwd.create", "partner_id", "top-apitools", "format", "json", "v", "2.0", "sign_method", "md5", "timestamp", service_method.getTime(), "adzone_id", "109164900192", "force_sensitive_param_fuzzy", "true", "logo", logo, "url", ruel, "text", text]);
          let loadingPage = new loading_page.LoadingPage.new(context);
          loadingPage.show();
          yield service_method.request("getTpwd", formdata).then(core.Null, dart.fn(value => {
            loadingPage.close();
            if (value == null) return;
            let data = convert.json.decode(dart.toString(value));
            let cdata = new counpntbk_model.TpwdCreate.fromJson(MapOfString$dynamic()._check(data));
            if (cdata === null) {
              toast.ToastHelper.showToast(context, "网络错误,点击重新加载");
            } else {
              this.tb = dart.notNull(this.model.title) + "\n" + "[价格]¥" + dart.notNull(this.model.zkFinalPrice) + "\n[优惠券]¥" + dart.notNull(this.model.couponAmount) + "\n复制这段描述" + dart.notNull(cdata.tbkTpwdCreateResponse.data.model) + "打开淘宝APP查看来自好友的分享" + "\n下载APP https://136951866.github.io/coupon/ 获取更多链接";
              if (dart.test(isShare)) {
                this.setState(dart.fn(() => {
                  this.isShareVisiable = true;
                }, VoidToNull()));
              } else {
                this.tbk = cdata.tbkTpwdCreateResponse.data.model;
                let data = new clipboard.ClipboardData.new({text: this.tbk});
                clipboard.Clipboard.setData(data);
                FutureOfNull().delayed(new core.Duration.new({seconds: 1}), dart.fn(() => {
                  this[_openTaobao](this.tbk);
                }, VoidToNull()));
              }
            }
          }, dynamicToNull()));
        }
      }).bind(this));
    }
    [_openTaobao](tbk) {
      return async.async(dart.dynamic, function* _openTaobao() {
        core.print("---modift");
      });
    }
    get wantKeepAlive() {
      return true;
    }
  };
  (details_page.DetailsPageState.new = function(model) {
    this[tb] = "";
    this[tbk] = "";
    this[isShareVisiable] = false;
    this[model$0] = model;
    details_page.DetailsPageState.__proto__.new.call(this);
    ;
  }).prototype = details_page.DetailsPageState.prototype;
  dart.addTypeTests(details_page.DetailsPageState);
  dart.setMethodSignature(details_page.DetailsPageState, () => ({
    __proto__: dart.getMethods(details_page.DetailsPageState.__proto__),
    setup: dart.fnType(dart.void, []),
    [_detailView]: dart.fnType(core.List$(framework.Widget), [framework.BuildContext]),
    buildShare: dart.fnType(dart.dynamic, []),
    [_detailBottom]: dart.fnType(framework.Widget, [framework.BuildContext]),
    getTpwd: dart.fnType(async.Future$(dart.void), [core.bool, framework.BuildContext]),
    [_openTaobao]: dart.fnType(dart.dynamic, [core.String])
  }));
  dart.setGetterSignature(details_page.DetailsPageState, () => ({
    __proto__: dart.getGetters(details_page.DetailsPageState.__proto__),
    wantKeepAlive: core.bool
  }));
  dart.setLibraryUri(details_page.DetailsPageState, "package:hkbook/page/details/details_page.dart");
  dart.setFieldSignature(details_page.DetailsPageState, () => ({
    __proto__: dart.getFields(details_page.DetailsPageState.__proto__),
    model: dart.finalFieldType(coupon_model.MapData),
    tb: dart.fieldType(core.String),
    tbk: dart.fieldType(core.String),
    isShareVisiable: dart.fieldType(core.bool)
  }));
  const onTap$ = dart.privateName(details_share, "DetailsShare.onTap");
  const model$1 = dart.privateName(details_share, "DetailsShare.model");
  details_share.DetailsShare = class DetailsShare extends framework.StatefulWidget {
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get model() {
      return this[model$1];
    }
    set model(value) {
      super.model = value;
    }
    createState() {
      return new details_share._DetailsShareState.new();
    }
  };
  (details_share.DetailsShare.new = function(opts) {
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let model = opts && 'model' in opts ? opts.model : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onTap$] = onTap;
    this[model$1] = model;
    details_share.DetailsShare.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = details_share.DetailsShare.prototype;
  dart.addTypeTests(details_share.DetailsShare);
  dart.setMethodSignature(details_share.DetailsShare, () => ({
    __proto__: dart.getMethods(details_share.DetailsShare.__proto__),
    createState: dart.fnType(details_share._DetailsShareState, [])
  }));
  dart.setLibraryUri(details_share.DetailsShare, "package:hkbook/page/details/details_share.dart");
  dart.setFieldSignature(details_share.DetailsShare, () => ({
    __proto__: dart.getFields(details_share.DetailsShare.__proto__),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    model: dart.finalFieldType(core.String)
  }));
  let C1457;
  const _hide = dart.privateName(details_share, "_hide");
  let C1460;
  let C1459;
  let C1458;
  let C1463;
  let C1464;
  let C1462;
  let C1461;
  const _buildBottomView = dart.privateName(details_share, "_buildBottomView");
  let C1467;
  let C1466;
  let C1465;
  let C1470;
  let C1469;
  let C1468;
  let C1473;
  let C1472;
  let C1471;
  let C1476;
  let C1477;
  let C1475;
  let C1474;
  let C1480;
  let C1479;
  let C1478;
  let C1483;
  let C1484;
  let C1485;
  let C1482;
  let C1481;
  let C1488;
  let C1489;
  let C1490;
  let C1487;
  let C1486;
  let C1493;
  let C1492;
  let C1491;
  let C1496;
  let C1497;
  let C1498;
  let C1499;
  let C1500;
  let C1495;
  let C1494;
  let C1503;
  let C1504;
  let C1502;
  let C1501;
  let C1507;
  let C1506;
  let C1505;
  let C1510;
  let C1511;
  let C1512;
  let C1513;
  let C1514;
  let C1509;
  let C1508;
  let C1517;
  let C1518;
  let C1519;
  let C1520;
  let C1516;
  let C1515;
  const State_SingleTickerProviderStateMixin$36$0 = class State_SingleTickerProviderStateMixin extends framework.State$(details_share.DetailsShare) {};
  (State_SingleTickerProviderStateMixin$36$0.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(details_share.DetailsShare)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36$0.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36$0.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36$0, ticker_provider.SingleTickerProviderStateMixin$(details_share.DetailsShare));
  details_share._DetailsShareState = class _DetailsShareState extends State_SingleTickerProviderStateMixin$36$0 {
    initState() {
      super.initState();
      this.animationController = new animation_controller.AnimationController.new({duration: C1457 || CT.C1457, vsync: this});
      this.animation = new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(this.animationController);
      this.animation.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
        }, VoidToNull()));
      }, VoidToNull()));
      this.animationController.forward();
    }
    build(context) {
      return new container.Container.new({child: new basic.Stack.new({children: JSArrayOfWidget().of([new gesture_detector.GestureDetector.new({onTapDown: dart.fn(_ => {
                this[_hide]();
              }, TapDownDetailsToNull()), child: new container.Container.new({color: colors.Colors.transparent, $creationLocationd_0dea112b090073317d4: C1458 || CT.C1458}), $creationLocationd_0dea112b090073317d4: C1461 || CT.C1461}), framework.Widget._check(this[_buildBottomView]())]), $creationLocationd_0dea112b090073317d4: C1465 || CT.C1465}), $creationLocationd_0dea112b090073317d4: C1468 || CT.C1468});
    }
    dispose() {
      this.animationController.dispose();
      super.dispose();
    }
    [_hide]() {
      this.animationController.reverse();
      async.Timer.new(new core.Duration.new({milliseconds: 200}), dart.fn(() => {
        this.widget.onTap();
      }, VoidToNull()));
    }
    [_buildBottomView]() {
      return new basic.Positioned.new({bottom: -(dart.notNull(screen.Screen.bottomSafeHeight) + dart.notNull(new flutter_screenutil.ScreenUtil.new().setHeight(450))) * (1 - dart.notNull(this.animation.value)), left: 0.0, right: 0.0, child: new container.Container.new({height: new flutter_screenutil.ScreenUtil.new().setHeight(450), width: screen.Screen.width, color: colors.Colors.white, padding: new edge_insets.EdgeInsets.all(new flutter_screenutil.ScreenUtil.new().setHeight(15)), child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({height: new flutter_screenutil.ScreenUtil.new().setHeight(300), decoration: new box_decoration.BoxDecoration.new({color: new ui.Color.new(4294177779), borderRadius: new border_radius.BorderRadius.circular(4.0), border: box_border.Border.all({width: 1.0, color: colors.Colors.black12})}), child: new scroll_view.ListView.new({children: JSArrayOfWidget().of([new container.Container.new({padding: new edge_insets.EdgeInsets.all(5.0), child: new text.Text.new(this.widget.model, {$creationLocationd_0dea112b090073317d4: C1471 || CT.C1471}), $creationLocationd_0dea112b090073317d4: C1474 || CT.C1474})]), $creationLocationd_0dea112b090073317d4: C1478 || CT.C1478}), $creationLocationd_0dea112b090073317d4: C1481 || CT.C1481}), new ink_well.InkWell.new({onTap: dart.fn(() => {
                  core.print("i am hank test");
                  core.print(this.widget.model);
                  toast.ToastHelper.showToast(this.context, "复制成功,转发给好友吧!");
                  this[_hide]();
                }, VoidToNull()), child: new container.Container.new({margin: new edge_insets.EdgeInsets.all(new flutter_screenutil.ScreenUtil.new().setHeight(15)), height: new flutter_screenutil.ScreenUtil.new().setHeight(80), decoration: new box_decoration.BoxDecoration.new({color: sq_color.SQColor.primary, borderRadius: new border_radius.BorderRadius.circular(dart.notNull(new flutter_screenutil.ScreenUtil.new().setHeight(80)) / 2)}), alignment: alignment.Alignment.center, child: new ink_well.InkWell.new({child: new text.Text.new("复制文案", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(30)}), textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C1486 || CT.C1486}), $creationLocationd_0dea112b090073317d4: C1491 || CT.C1491}), $creationLocationd_0dea112b090073317d4: C1494 || CT.C1494}), $creationLocationd_0dea112b090073317d4: C1501 || CT.C1501})]), $creationLocationd_0dea112b090073317d4: C1505 || CT.C1505}), $creationLocationd_0dea112b090073317d4: C1508 || CT.C1508}), $creationLocationd_0dea112b090073317d4: C1515 || CT.C1515});
    }
  };
  (details_share._DetailsShareState.new = function() {
    this.animationController = null;
    this.animation = null;
    details_share._DetailsShareState.__proto__.new.call(this);
    ;
  }).prototype = details_share._DetailsShareState.prototype;
  dart.addTypeTests(details_share._DetailsShareState);
  dart.setMethodSignature(details_share._DetailsShareState, () => ({
    __proto__: dart.getMethods(details_share._DetailsShareState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_hide]: dart.fnType(dart.dynamic, []),
    [_buildBottomView]: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(details_share._DetailsShareState, "package:hkbook/page/details/details_share.dart");
  dart.setFieldSignature(details_share._DetailsShareState, () => ({
    __proto__: dart.getFields(details_share._DetailsShareState.__proto__),
    animationController: dart.fieldType(animation_controller.AnimationController),
    animation: dart.fieldType(animation.Animation$(core.double))
  }));
  let C1523;
  let C1524;
  let C1522;
  let C1521;
  let C1527;
  let C1528;
  let C1529;
  let C1526;
  let C1525;
  let C1532;
  let C1533;
  let C1531;
  let C1530;
  let C1536;
  let C1537;
  let C1535;
  let C1534;
  let C1540;
  let C1539;
  let C1538;
  let C1543;
  let C1544;
  let C1542;
  let C1541;
  let C1547;
  let C1546;
  let C1545;
  let C1548;
  let C1551;
  let C1550;
  let C1549;
  let C1554;
  let C1553;
  let C1552;
  let C1557;
  let C1558;
  let C1556;
  let C1555;
  let C1561;
  let C1562;
  let C1563;
  let C1564;
  let C1560;
  let C1559;
  let C1567;
  let C1568;
  let C1566;
  let C1565;
  let C1571;
  let C1572;
  let C1573;
  let C1574;
  let C1570;
  let C1569;
  let C1577;
  let C1576;
  let C1575;
  let C1580;
  let C1581;
  let C1579;
  let C1578;
  let C1584;
  let C1585;
  let C1586;
  let C1583;
  let C1582;
  let C1589;
  let C1590;
  let C1588;
  let C1587;
  let C1593;
  let C1592;
  let C1591;
  let C1596;
  let C1597;
  let C1598;
  let C1595;
  let C1594;
  let C1601;
  let C1600;
  let C1599;
  let C1604;
  let C1605;
  let C1606;
  let C1603;
  let C1602;
  let C1609;
  let C1610;
  let C1611;
  let C1608;
  let C1607;
  let C1614;
  let C1615;
  let C1616;
  let C1617;
  let C1613;
  let C1612;
  let C1620;
  let C1619;
  let C1618;
  let C1623;
  let C1622;
  let C1621;
  const model$2 = dart.privateName(details_header, "DetailsHeader.model");
  const onTap$0 = dart.privateName(details_header, "DetailsHeader.onTap");
  details_header.DetailsHeader = class DetailsHeader extends framework.StatelessWidget {
    get model() {
      return this[model$2];
    }
    set model(value) {
      super.model = value;
    }
    get onTap() {
      return this[onTap$0];
    }
    set onTap(value) {
      super.onTap = value;
    }
    build(context) {
      let t3;
      return new container.Container.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({width: screen.Screen.width, height: screen.Screen.width, child: new image.Image.network((t3 = this.model.pictUrl, t3 == null ? "" : t3), {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C1521 || CT.C1521}), $creationLocationd_0dea112b090073317d4: C1525 || CT.C1525}), new container.Container.new({margin: new edge_insets.EdgeInsets.all(new flutter_screenutil.ScreenUtil.new().setWidth(10)), child: new text.Text.new(this.model.title, {style: new text_style.TextStyle.new({color: new ui.Color.new(4281545523), fontSize: new flutter_screenutil.ScreenUtil.new().setSp(30)}), $creationLocationd_0dea112b090073317d4: C1530 || CT.C1530}), $creationLocationd_0dea112b090073317d4: C1534 || CT.C1534}), new container.Container.new({margin: new edge_insets.EdgeInsets.all(new flutter_screenutil.ScreenUtil.new().setWidth(10)), child: new basic.Row.new({children: JSArrayOfWidget().of([new image.Image.asset(this.model.userType === 1 ? "icon_tmall.png" : "icon_tao.png", {$creationLocationd_0dea112b090073317d4: C1538 || CT.C1538}), new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 5.0}), child: new text.Text.new("¥" + dart.str(this.model.zkFinalPrice), {style: new text_style.TextStyle.new({color: new ui.Color.new(4294936740), fontSize: new flutter_screenutil.ScreenUtil.new().setSp(40)}), $creationLocationd_0dea112b090073317d4: C1541 || CT.C1541}), $creationLocationd_0dea112b090073317d4: C1545 || CT.C1545})]), $creationLocationd_0dea112b090073317d4: C1548 || CT.C1548}), $creationLocationd_0dea112b090073317d4: C1549 || CT.C1549}), new container.Container.new({margin: new edge_insets.EdgeInsets.all(new flutter_screenutil.ScreenUtil.new().setWidth(10)), width: new flutter_screenutil.ScreenUtil.new().setWidth(750 - 20), child: new basic.Stack.new({children: JSArrayOfWidget().of([new image.Image.asset("yungdmuwsgjudbb.png", {$creationLocationd_0dea112b090073317d4: C1552 || CT.C1552}), new basic.Positioned.new({left: 0.0, top: 10.0, child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: new flutter_screenutil.ScreenUtil.new().setHeight(15)}), alignment: alignment.Alignment.center, width: new flutter_screenutil.ScreenUtil.new().setWidth(750 - 200), child: new text.Text.new(dart.str(this.model.couponAmount) + "元券", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C1555 || CT.C1555}), $creationLocationd_0dea112b090073317d4: C1559 || CT.C1559}), new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: new flutter_screenutil.ScreenUtil.new().setHeight(5)}), alignment: alignment.Alignment.center, width: new flutter_screenutil.ScreenUtil.new().setWidth(750 - 180), child: new text.Text.new("有效期:" + dart.str(this.model.couponStartTime) + "~" + dart.str(this.model.couponEndTime), {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(22)}), $creationLocationd_0dea112b090073317d4: C1565 || CT.C1565}), $creationLocationd_0dea112b090073317d4: C1569 || CT.C1569})]), $creationLocationd_0dea112b090073317d4: C1575 || CT.C1575}), new ink_well.InkWell.new({child: new container.Container.new({margin: new edge_insets.EdgeInsets.only({top: new flutter_screenutil.ScreenUtil.new().setHeight(25)}), child: new text.Text.new("立即领取", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C1578 || CT.C1578}), alignment: alignment.Alignment.center, $creationLocationd_0dea112b090073317d4: C1582 || CT.C1582}), onTap: dart.fn(() => {
                            this.onTap();
                          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C1587 || CT.C1587})]), $creationLocationd_0dea112b090073317d4: C1591 || CT.C1591}), $creationLocationd_0dea112b090073317d4: C1594 || CT.C1594})]), $creationLocationd_0dea112b090073317d4: C1599 || CT.C1599}), $creationLocationd_0dea112b090073317d4: C1602 || CT.C1602}), new container.Container.new({color: colors.Colors.white, padding: new edge_insets.EdgeInsets.all(new flutter_screenutil.ScreenUtil.new().setHeight(20)), width: new flutter_screenutil.ScreenUtil.new().setWidth(750 - 20), child: new text.Text.new("宝贝详情", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({fontSize: new flutter_screenutil.ScreenUtil.new().setSp(32)}), $creationLocationd_0dea112b090073317d4: C1607 || CT.C1607}), $creationLocationd_0dea112b090073317d4: C1612 || CT.C1612})]), $creationLocationd_0dea112b090073317d4: C1618 || CT.C1618}), $creationLocationd_0dea112b090073317d4: C1621 || CT.C1621});
    }
  };
  (details_header.DetailsHeader.new = function(model, onTap, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[model$2] = model;
    this[onTap$0] = onTap;
    details_header.DetailsHeader.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = details_header.DetailsHeader.prototype;
  dart.addTypeTests(details_header.DetailsHeader);
  dart.setMethodSignature(details_header.DetailsHeader, () => ({
    __proto__: dart.getMethods(details_header.DetailsHeader.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(details_header.DetailsHeader, "package:hkbook/page/details/details_header.dart");
  dart.setFieldSignature(details_header.DetailsHeader, () => ({
    __proto__: dart.getFields(details_header.DetailsHeader.__proto__),
    model: dart.finalFieldType(coupon_model.MapData),
    onTap: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  const keywrod$0 = dart.privateName(search_result, "SearchResult.keywrod");
  search_result.SearchResult = class SearchResult extends framework.StatefulWidget {
    get keywrod() {
      return this[keywrod$0];
    }
    set keywrod(value) {
      super.keywrod = value;
    }
    createState() {
      return new search_result._SearchResultState.new();
    }
  };
  (search_result.SearchResult.new = function(keywrod, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[keywrod$0] = keywrod;
    search_result.SearchResult.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_result.SearchResult.prototype;
  dart.addTypeTests(search_result.SearchResult);
  dart.setMethodSignature(search_result.SearchResult, () => ({
    __proto__: dart.getMethods(search_result.SearchResult.__proto__),
    createState: dart.fnType(search_result._SearchResultState, [])
  }));
  dart.setLibraryUri(search_result.SearchResult, "package:hkbook/page/category/search_result.dart");
  dart.setFieldSignature(search_result.SearchResult, () => ({
    __proto__: dart.getFields(search_result.SearchResult.__proto__),
    keywrod: dart.finalFieldType(dart.dynamic)
  }));
  const _couponList$1 = dart.privateName(search_result, "_couponList");
  let C1626;
  let C1625;
  let C1624;
  let C1629;
  let C1628;
  let C1627;
  const _getMain$1 = dart.privateName(search_result, "_getMain");
  let C1632;
  let C1633;
  let C1631;
  let C1630;
  let C1636;
  let C1635;
  let C1634;
  let C1639;
  let C1640;
  let C1638;
  let C1637;
  let C1643;
  let C1644;
  let C1642;
  let C1641;
  const _warpList$1 = dart.privateName(search_result, "_warpList");
  let C1647;
  let C1646;
  let C1645;
  let C1650;
  let C1651;
  let C1652;
  let C1653;
  let C1649;
  let C1648;
  let C1656;
  let C1657;
  let C1655;
  let C1654;
  let C1660;
  let C1661;
  let C1662;
  let C1663;
  let C1659;
  let C1658;
  let C1666;
  let C1665;
  let C1664;
  let C1669;
  let C1670;
  let C1668;
  let C1667;
  let C1673;
  let C1674;
  let C1675;
  let C1676;
  let C1677;
  let C1672;
  let C1671;
  let C1680;
  let C1679;
  let C1678;
  let C1683;
  let C1682;
  let C1681;
  let C1686;
  let C1687;
  let C1688;
  let C1689;
  let C1690;
  let C1685;
  let C1684;
  let C1693;
  let C1694;
  let C1692;
  let C1691;
  let C1697;
  let C1698;
  let C1696;
  let C1695;
  let C1701;
  let C1700;
  let C1699;
  search_result._SearchResultState = class _SearchResultState extends framework.State$(search_result.SearchResult) {
    initState() {
      super.initState();
      this.page = 1;
      this.couponList = JSArrayOfMapData().of([]);
      this[_couponList$1](this.page, this.widget.keywrod, "", "", "", "", "", "", "");
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(core.String._check(this.widget.keywrod), {$creationLocationd_0dea112b090073317d4: C1624 || CT.C1624}), $creationLocationd_0dea112b090073317d4: C1627 || CT.C1627}), body: this[_getMain$1](), $creationLocationd_0dea112b090073317d4: C1630 || CT.C1630});
    }
    [_getMain$1]() {
      if (this.couponList[$length] === 0) {
        return new container.Container.new({alignment: alignment.Alignment.center, child: new ink_well.InkWell.new({child: new text.Text.new("暂无数据", {$creationLocationd_0dea112b090073317d4: C1634 || CT.C1634}), onTap: dart.fn(() => {
              this.page = 1;
              this.couponList = JSArrayOfMapData().of([]);
              this[_couponList$1](this.page, this.widget.keywrod, "", "", "", "", "", "", "");
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C1637 || CT.C1637}), $creationLocationd_0dea112b090073317d4: C1641 || CT.C1641});
      } else {
        return new refresher.EasyRefresh.new({child: new scroll_view.ListView.new({children: JSArrayOfWidget().of([this[_warpList$1]()]), $creationLocationd_0dea112b090073317d4: C1645 || CT.C1645}), onRefresh: dart.fn(() => async.async(core.Null, (function*() {
            this.page = 1;
            this.couponList = JSArrayOfMapData().of([]);
            this[_couponList$1](this.page, this.widget.keywrod, "", "", "", "", "", "", "");
          }).bind(this)), VoidToFutureOfNull()), onLoad: dart.fn(() => async.async(core.Null, (function*() {
            this.page = dart.notNull(this.page) + 1;
            this[_couponList$1](this.page, this.widget.keywrod, "", "", "", "", "", "", "");
          }).bind(this)), VoidToFutureOfNull()), footer: new footer.ClassicalFooter.new({bgColor: colors.Colors.white, textColor: colors.Colors.pink, infoColor: colors.Colors.pink, noMoreText: "", key: this.fotterKey}), $creationLocationd_0dea112b090073317d4: C1648 || CT.C1648});
      }
    }
    [_warpList$1]() {
      if (dart.notNull(this.couponList[$length]) > 0) {
        let list = this.couponList[$map](ink_well.InkWell, dart.fn(v => {
          let t3;
          return new ink_well.InkWell.new({onTap: dart.fn(() => {
              app_navigator.AppNavigator.pushNovelDetail(this.context, v);
            }, VoidToNull()), child: new container.Container.new({width: new flutter_screenutil.ScreenUtil.new().setWidth(372), color: colors.Colors.white, padding: new edge_insets.EdgeInsets.all(5.0), margin: new edge_insets.EdgeInsets.only({bottom: 3.0}), child: new basic.Column.new({children: JSArrayOfWidget().of([new image.Image.network((t3 = v.pictUrl, t3 == null ? "" : t3), {height: 372 / 2, $creationLocationd_0dea112b090073317d4: C1654 || CT.C1654}), new text.Text.new(v.title, {maxLines: 1, overflow: paragraph.TextOverflow.ellipsis, style: new text_style.TextStyle.new({color: colors.Colors.red, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(26)}), $creationLocationd_0dea112b090073317d4: C1658 || CT.C1658}), new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("¥" + dart.str(v.zkFinalPrice), {$creationLocationd_0dea112b090073317d4: C1664 || CT.C1664}), new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(8.0, 0.0, 8.0, 0.0), margin: new edge_insets.EdgeInsets.fromLTRB(5.0, 0.0, 5.0, 0.0), alignment: alignment.Alignment.center, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(3.0), color: colors.Colors.red}), child: new text.Text.new("¥" + dart.str(v.couponAmount) + "元券", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C1667 || CT.C1667}), $creationLocationd_0dea112b090073317d4: C1671 || CT.C1671})]), $creationLocationd_0dea112b090073317d4: C1678 || CT.C1678})]), $creationLocationd_0dea112b090073317d4: C1681 || CT.C1681}), $creationLocationd_0dea112b090073317d4: C1684 || CT.C1684}), $creationLocationd_0dea112b090073317d4: C1691 || CT.C1691});
        }, MapDataToInkWell()))[$toList]();
        return new basic.Wrap.new({spacing: new flutter_screenutil.ScreenUtil.new().setHeight(3), children: list, $creationLocationd_0dea112b090073317d4: C1695 || CT.C1695});
      } else {
        return new image.Image.asset("empty.png", {$creationLocationd_0dea112b090073317d4: C1699 || CT.C1699});
      }
    }
    [_couponList$1](page, q, sort, startPrice, shipment, tmall, oversea, prepay, endPrice) {
      return async.async(dart.void, (function* _couponList() {
        let formdata = new (IdentityMapOfString$dynamic()).from(["app_key", "27675850", "session_key", "hank", "method", "taobao.tbk.dg.material.optional", "partner_id", "top-apitools", "format", "json", "v", "2.0", "sign_method", "md5", "timestamp", service_method.getTime(), "adzone_id", "109164900192", "force_sensitive_param_fuzzy", "true", "page_no", dart.str(page), "q", q, "has_coupon", "true", "page_size", "10"]);
        if (dart.dtest(dart.dsend(dart.dload(sort, 'length'), '>', [0]))) {
          formdata[$_set]("sort", dart.str(sort));
        }
        if (dart.dtest(dart.dsend(dart.dload(startPrice, 'length'), '>', [0]))) {
          formdata[$_set]("start_price", dart.str(startPrice));
        }
        if (dart.dtest(dart.dsend(dart.dload(shipment, 'length'), '>', [0]))) {
          formdata[$_set]("need_free_shipment", dart.str(shipment));
        }
        if (dart.dtest(dart.dsend(dart.dload(tmall, 'length'), '>', [0]))) {
          formdata[$_set]("is_tmall", dart.str(tmall));
        }
        if (dart.dtest(dart.dsend(dart.dload(oversea, 'length'), '>', [0]))) {
          formdata[$_set]("is_overseas", dart.str(oversea));
        }
        if (dart.dtest(dart.dsend(dart.dload(prepay, 'length'), '>', [0]))) {
          formdata[$_set]("need_prepay", dart.str(prepay));
        }
        if (dart.dtest(dart.dsend(dart.dload(endPrice, 'length'), '>', [0]))) {
          formdata[$_set]("end_price", dart.str(endPrice));
        }
        yield service_method.request("couponSearchList", formdata).then(core.Null, dart.fn(value => {
          if (value == null) return;
          let data = convert.json.decode(dart.toString(value));
          let cdata = new coupon_model.CounponModel.fromJson(MapOfString$dynamic()._check(data));
          if (cdata === null) {
            toast.ToastHelper.showToast(this.context, "网络错误,点击重新加载");
          } else {
            this.setState(dart.fn(() => {
              this.couponList[$addAll](cdata.tbkDgMaterialOptionalResponse.resultList.mapData);
            }, VoidToNull()));
          }
        }, dynamicToNull()));
      }).bind(this));
    }
  };
  (search_result._SearchResultState.new = function() {
    this.page = 1;
    this.couponList = JSArrayOfMapData().of([]);
    this.fotterKey = new (ValueKeyOfString()).new("fotterKey");
    search_result._SearchResultState.__proto__.new.call(this);
    ;
  }).prototype = search_result._SearchResultState.prototype;
  dart.addTypeTests(search_result._SearchResultState);
  dart.setMethodSignature(search_result._SearchResultState, () => ({
    __proto__: dart.getMethods(search_result._SearchResultState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_getMain$1]: dart.fnType(framework.Widget, []),
    [_warpList$1]: dart.fnType(framework.Widget, []),
    [_couponList$1]: dart.fnType(async.Future$(dart.void), [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])
  }));
  dart.setLibraryUri(search_result._SearchResultState, "package:hkbook/page/category/search_result.dart");
  dart.setFieldSignature(search_result._SearchResultState, () => ({
    __proto__: dart.getFields(search_result._SearchResultState.__proto__),
    page: dart.fieldType(core.int),
    couponList: dart.fieldType(core.List$(coupon_model.MapData)),
    fotterKey: dart.fieldType(key.Key)
  }));
  const keywrod$1 = dart.privateName(search_mater_page, "SearchMaterResult.keywrod");
  const title$0 = dart.privateName(search_mater_page, "SearchMaterResult.title");
  search_mater_page.SearchMaterResult = class SearchMaterResult extends framework.StatefulWidget {
    get keywrod() {
      return this[keywrod$1];
    }
    set keywrod(value) {
      super.keywrod = value;
    }
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    createState() {
      return new search_mater_page._SearchMasterResultState.new();
    }
  };
  (search_mater_page.SearchMaterResult.new = function(keywrod, title, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[keywrod$1] = keywrod;
    this[title$0] = title;
    search_mater_page.SearchMaterResult.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_mater_page.SearchMaterResult.prototype;
  dart.addTypeTests(search_mater_page.SearchMaterResult);
  dart.setMethodSignature(search_mater_page.SearchMaterResult, () => ({
    __proto__: dart.getMethods(search_mater_page.SearchMaterResult.__proto__),
    createState: dart.fnType(search_mater_page._SearchMasterResultState, [])
  }));
  dart.setLibraryUri(search_mater_page.SearchMaterResult, "package:hkbook/page/category/search_mater_page.dart");
  dart.setFieldSignature(search_mater_page.SearchMaterResult, () => ({
    __proto__: dart.getFields(search_mater_page.SearchMaterResult.__proto__),
    keywrod: dart.finalFieldType(dart.dynamic),
    title: dart.finalFieldType(dart.dynamic)
  }));
  const _couponNIneList$ = dart.privateName(search_mater_page, "_couponNIneList");
  const _couponList$2 = dart.privateName(search_mater_page, "_couponList");
  let C1704;
  let C1703;
  let C1702;
  let C1707;
  let C1706;
  let C1705;
  const _getMain$2 = dart.privateName(search_mater_page, "_getMain");
  let C1710;
  let C1711;
  let C1709;
  let C1708;
  let C1714;
  let C1713;
  let C1712;
  let C1717;
  let C1716;
  let C1715;
  let C1720;
  let C1721;
  let C1719;
  let C1718;
  const _warpList$2 = dart.privateName(search_mater_page, "_warpList");
  let C1724;
  let C1723;
  let C1722;
  let C1727;
  let C1728;
  let C1729;
  let C1730;
  let C1726;
  let C1725;
  let C1733;
  let C1734;
  let C1732;
  let C1731;
  let C1737;
  let C1738;
  let C1739;
  let C1740;
  let C1736;
  let C1735;
  let C1743;
  let C1742;
  let C1741;
  let C1746;
  let C1747;
  let C1745;
  let C1744;
  let C1750;
  let C1751;
  let C1752;
  let C1753;
  let C1754;
  let C1749;
  let C1748;
  let C1757;
  let C1756;
  let C1755;
  let C1760;
  let C1759;
  let C1758;
  let C1763;
  let C1764;
  let C1765;
  let C1766;
  let C1767;
  let C1762;
  let C1761;
  let C1770;
  let C1771;
  let C1769;
  let C1768;
  let C1774;
  let C1775;
  let C1773;
  let C1772;
  let C1778;
  let C1777;
  let C1776;
  search_mater_page._SearchMasterResultState = class _SearchMasterResultState extends framework.State$(search_mater_page.SearchMaterResult) {
    initState() {
      super.initState();
      this.page = 1;
      this.couponList = JSArrayOfMapData().of([]);
      if (dart.equals(this.widget.keywrod, "0000")) {
        this[_couponNIneList$](this.page, this.widget.keywrod, "");
      } else {
        this[_couponList$2](this.page, this.widget.keywrod, "");
      }
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(core.String._check(this.widget.title), {$creationLocationd_0dea112b090073317d4: C1702 || CT.C1702}), $creationLocationd_0dea112b090073317d4: C1705 || CT.C1705}), body: this[_getMain$2](), $creationLocationd_0dea112b090073317d4: C1708 || CT.C1708});
    }
    [_getMain$2]() {
      if (this.couponList[$length] === 0) {
        return new container.Container.new({alignment: alignment.Alignment.center, child: new ink_well.InkWell.new({child: new text.Text.new("暂无数据", {$creationLocationd_0dea112b090073317d4: C1712 || CT.C1712}), onTap: dart.fn(() => {
              this.page = 1;
              this.couponList = JSArrayOfMapData().of([]);
              if (dart.equals(this.widget.keywrod, "0000")) {
                this[_couponNIneList$](this.page, this.widget.keywrod, "");
              } else {
                this[_couponList$2](this.page, this.widget.keywrod, "");
              }
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C1715 || CT.C1715}), $creationLocationd_0dea112b090073317d4: C1718 || CT.C1718});
      } else {
        return new refresher.EasyRefresh.new({child: new scroll_view.ListView.new({children: JSArrayOfWidget().of([this[_warpList$2]()]), $creationLocationd_0dea112b090073317d4: C1722 || CT.C1722}), onRefresh: dart.fn(() => async.async(core.Null, (function*() {
            this.page = 1;
            this.couponList = JSArrayOfMapData().of([]);
            if (dart.equals(this.widget.keywrod, "0000")) {
              this[_couponNIneList$](this.page, this.widget.keywrod, "");
            } else {
              this[_couponList$2](this.page, this.widget.keywrod, "");
            }
          }).bind(this)), VoidToFutureOfNull()), onLoad: dart.fn(() => async.async(core.Null, (function*() {
            this.page = dart.notNull(this.page) + 1;
            if (dart.equals(this.widget.keywrod, "0000")) {
              this[_couponNIneList$](this.page, this.widget.keywrod, "");
            } else {
              this[_couponList$2](this.page, this.widget.keywrod, "");
            }
          }).bind(this)), VoidToFutureOfNull()), footer: new footer.ClassicalFooter.new({bgColor: colors.Colors.white, textColor: colors.Colors.pink, infoColor: colors.Colors.pink, noMoreText: "", key: this.fotterKey}), $creationLocationd_0dea112b090073317d4: C1725 || CT.C1725});
      }
    }
    [_warpList$2]() {
      if (dart.notNull(this.couponList[$length]) > 0) {
        let list = this.couponList[$map](ink_well.InkWell, dart.fn(v => {
          let t3;
          return new ink_well.InkWell.new({onTap: dart.fn(() => {
              app_navigator.AppNavigator.pushNovelDetail(this.context, v);
            }, VoidToNull()), child: new container.Container.new({width: new flutter_screenutil.ScreenUtil.new().setWidth(372), color: colors.Colors.white, padding: new edge_insets.EdgeInsets.all(5.0), margin: new edge_insets.EdgeInsets.only({bottom: 3.0}), child: new basic.Column.new({children: JSArrayOfWidget().of([new image.Image.network((t3 = v.pictUrl, t3 == null ? "" : t3), {height: 372 / 2, $creationLocationd_0dea112b090073317d4: C1731 || CT.C1731}), new text.Text.new(v.title, {maxLines: 1, overflow: paragraph.TextOverflow.ellipsis, style: new text_style.TextStyle.new({color: colors.Colors.red, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(26)}), $creationLocationd_0dea112b090073317d4: C1735 || CT.C1735}), new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("¥" + dart.str(v.zkFinalPrice), {$creationLocationd_0dea112b090073317d4: C1741 || CT.C1741}), new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(8.0, 0.0, 8.0, 0.0), margin: new edge_insets.EdgeInsets.fromLTRB(5.0, 0.0, 5.0, 0.0), alignment: alignment.Alignment.center, decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(3.0), color: colors.Colors.red}), child: new text.Text.new("¥" + dart.str(v.couponAmount) + "元券", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C1744 || CT.C1744}), $creationLocationd_0dea112b090073317d4: C1748 || CT.C1748})]), $creationLocationd_0dea112b090073317d4: C1755 || CT.C1755})]), $creationLocationd_0dea112b090073317d4: C1758 || CT.C1758}), $creationLocationd_0dea112b090073317d4: C1761 || CT.C1761}), $creationLocationd_0dea112b090073317d4: C1768 || CT.C1768});
        }, MapDataToInkWell()))[$toList]();
        return new basic.Wrap.new({spacing: new flutter_screenutil.ScreenUtil.new().setHeight(3), children: list, $creationLocationd_0dea112b090073317d4: C1772 || CT.C1772});
      } else {
        return new image.Image.asset("empty.png", {$creationLocationd_0dea112b090073317d4: C1776 || CT.C1776});
      }
    }
    [_couponList$2](page, materiaqlId, sort) {
      return async.async(dart.void, (function* _couponList() {
        let formdata = new (IdentityMapOfString$dynamic()).from(["app_key", "27675850", "session_key", "hank", "method", "taobao.tbk.dg.material.optional", "partner_id", "top-apitools", "format", "json", "v", "2.0", "sign_method", "md5", "timestamp", service_method.getTime(), "adzone_id", "109164900192", "force_sensitive_param_fuzzy", "true", "page_no", dart.str(page), "has_coupon", "true", "cat", "0", "page_size", "10", "material_id", materiaqlId]);
        yield service_method.request("couponList", formdata).then(core.Null, dart.fn(value => {
          let data = convert.json.decode(dart.toString(value));
          let cdata = new coupon_model.CounponModel.fromJson(MapOfString$dynamic()._check(data));
          if (cdata === null) {
            toast.ToastHelper.showToast(this.context, "网络错误,点击重新加载");
          } else {
            this.setState(dart.fn(() => {
              this.couponList[$addAll](cdata.tbkDgMaterialOptionalResponse.resultList.mapData);
            }, VoidToNull()));
          }
        }, dynamicToNull()));
      }).bind(this));
    }
    [_couponNIneList$](page, materiaqlId, sort) {
      return async.async(dart.void, (function* _couponNIneList() {
        let formdata = new (IdentityMapOfString$String()).from(["app_key", "27675850", "session_key", "hank", "method", "taobao.tbk.dg.material.optional", "partner_id", "top-apitools", "format", "json", "v", "2.0", "sign_method", "md5", "timestamp", service_method.getTime(), "adzone_id", "109164900192", "force_sensitive_param_fuzzy", "true", "page_no", dart.str(page), "has_coupon", "true", "cat", "10,13,16,19,20", "page_size", "10", "end_price", "10", "need_free_shipment", "true"]);
        yield service_method.request("couponList", formdata).then(core.Null, dart.fn(value => {
          if (value == null) return;
          let data = convert.json.decode(dart.toString(value));
          let cdata = new coupon_model.CounponModel.fromJson(MapOfString$dynamic()._check(data));
          if (cdata === null) {
            toast.ToastHelper.showToast(this.context, "网络错误,点击重新加载");
          } else {
            this.setState(dart.fn(() => {
              this.couponList[$addAll](cdata.tbkDgMaterialOptionalResponse.resultList.mapData);
            }, VoidToNull()));
          }
        }, dynamicToNull()));
      }).bind(this));
    }
  };
  (search_mater_page._SearchMasterResultState.new = function() {
    this.page = 1;
    this.couponList = JSArrayOfMapData().of([]);
    this.fotterKey = new (ValueKeyOfString()).new("fotterKey");
    search_mater_page._SearchMasterResultState.__proto__.new.call(this);
    ;
  }).prototype = search_mater_page._SearchMasterResultState.prototype;
  dart.addTypeTests(search_mater_page._SearchMasterResultState);
  dart.setMethodSignature(search_mater_page._SearchMasterResultState, () => ({
    __proto__: dart.getMethods(search_mater_page._SearchMasterResultState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_getMain$2]: dart.fnType(framework.Widget, []),
    [_warpList$2]: dart.fnType(framework.Widget, []),
    [_couponList$2]: dart.fnType(async.Future$(dart.void), [dart.dynamic, dart.dynamic, dart.dynamic]),
    [_couponNIneList$]: dart.fnType(async.Future$(dart.void), [dart.dynamic, dart.dynamic, dart.dynamic])
  }));
  dart.setLibraryUri(search_mater_page._SearchMasterResultState, "package:hkbook/page/category/search_mater_page.dart");
  dart.setFieldSignature(search_mater_page._SearchMasterResultState, () => ({
    __proto__: dart.getFields(search_mater_page._SearchMasterResultState.__proto__),
    page: dart.fieldType(core.int),
    couponList: dart.fieldType(core.List$(coupon_model.MapData)),
    fotterKey: dart.fieldType(key.Key)
  }));
  circel_more_page.CricelMorePage = class CricelMorePage extends framework.StatefulWidget {
    createState() {
      return new circel_more_page.CricelMorePageState.new();
    }
  };
  (circel_more_page.CricelMorePage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    circel_more_page.CricelMorePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = circel_more_page.CricelMorePage.prototype;
  dart.addTypeTests(circel_more_page.CricelMorePage);
  dart.setMethodSignature(circel_more_page.CricelMorePage, () => ({
    __proto__: dart.getMethods(circel_more_page.CricelMorePage.__proto__),
    createState: dart.fnType(circel_more_page.CricelMorePageState, [])
  }));
  dart.setLibraryUri(circel_more_page.CricelMorePage, "package:hkbook/page/Cricle/circel_more_page.dart");
  const _couponList$3 = dart.privateName(circel_more_page, "_couponList");
  let C1781;
  let C1780;
  let C1779;
  let C1782;
  const _getMain$3 = dart.privateName(circel_more_page, "_getMain");
  let C1785;
  let C1786;
  let C1784;
  let C1783;
  let C1789;
  let C1788;
  let C1787;
  let C1792;
  let C1793;
  let C1794;
  let C1791;
  let C1790;
  let C1797;
  let C1796;
  let C1795;
  let C1800;
  let C1801;
  let C1799;
  let C1798;
  const _warpList$3 = dart.privateName(circel_more_page, "_warpList");
  let C1804;
  let C1803;
  let C1802;
  let C1807;
  let C1808;
  let C1809;
  let C1810;
  let C1806;
  let C1805;
  const _CricleCell$ = dart.privateName(circel_more_page, "_CricleCell");
  let C1813;
  let C1812;
  let C1811;
  let C1816;
  let C1815;
  let C1814;
  let C1819;
  let C1818;
  let C1817;
  let C1822;
  let C1823;
  let C1821;
  let C1820;
  let C1826;
  let C1825;
  let C1824;
  let C1829;
  let C1830;
  let C1828;
  let C1827;
  let C1831;
  let C1834;
  let C1835;
  let C1833;
  let C1832;
  let C1838;
  let C1839;
  let C1840;
  let C1837;
  let C1836;
  let C1843;
  let C1842;
  let C1841;
  let C1846;
  let C1845;
  let C1844;
  let C1849;
  let C1850;
  let C1851;
  let C1852;
  let C1853;
  let C1848;
  let C1847;
  let C1856;
  let C1857;
  let C1858;
  let C1855;
  let C1854;
  const _photoView$ = dart.privateName(circel_more_page, "_photoView");
  let C1861;
  let C1862;
  let C1863;
  let C1864;
  let C1865;
  let C1860;
  let C1859;
  let C1868;
  let C1869;
  let C1870;
  let C1867;
  let C1866;
  let C1873;
  let C1874;
  let C1875;
  let C1876;
  let C1877;
  let C1872;
  let C1871;
  let C1880;
  let C1881;
  let C1882;
  let C1879;
  let C1878;
  const _allContent$ = dart.privateName(circel_more_page, "_allContent");
  let C1885;
  let C1886;
  let C1887;
  let C1888;
  let C1889;
  let C1884;
  let C1883;
  let C1892;
  let C1893;
  let C1894;
  let C1891;
  let C1890;
  let C1897;
  let C1898;
  let C1896;
  let C1895;
  let C1901;
  let C1900;
  let C1899;
  let C1904;
  let C1905;
  let C1903;
  let C1902;
  let C1908;
  let C1907;
  let C1906;
  let C1911;
  let C1912;
  let C1910;
  let C1909;
  let C1915;
  let C1916;
  let C1914;
  let C1913;
  let C1919;
  let C1918;
  let C1917;
  let C1922;
  let C1921;
  let C1920;
  let C1925;
  let C1926;
  let C1924;
  let C1923;
  let C1929;
  let C1928;
  let C1927;
  let C1932;
  let C1933;
  let C1934;
  let C1931;
  let C1930;
  let C1937;
  let C1938;
  let C1936;
  let C1935;
  let C1939;
  let C1942;
  let C1943;
  let C1941;
  let C1940;
  let C1946;
  let C1947;
  let C1945;
  let C1944;
  let C1950;
  let C1951;
  let C1952;
  let C1953;
  let C1954;
  let C1955;
  let C1949;
  let C1948;
  let C1958;
  let C1957;
  let C1956;
  let C1961;
  let C1962;
  let C1963;
  let C1960;
  let C1959;
  let C1966;
  let C1967;
  let C1965;
  let C1964;
  let C1970;
  let C1971;
  let C1972;
  let C1969;
  let C1968;
  let C1975;
  let C1976;
  let C1974;
  let C1973;
  let C1979;
  let C1980;
  let C1981;
  let C1982;
  let C1978;
  let C1977;
  let C1985;
  let C1986;
  let C1984;
  let C1983;
  let C1989;
  let C1988;
  let C1987;
  let C1990;
  const page$0 = dart.privateName(circel_more_page, "CricelMorePageState.page");
  const couponList$1 = dart.privateName(circel_more_page, "CricelMorePageState.couponList");
  const fotterKey$ = dart.privateName(circel_more_page, "CricelMorePageState.fotterKey");
  const State_AutomaticKeepAliveClientMixin$36$4 = class State_AutomaticKeepAliveClientMixin extends framework.State$(circel_more_page.CricelMorePage) {};
  (State_AutomaticKeepAliveClientMixin$36$4.new = function() {
    automatic_keep_alive.AutomaticKeepAliveClientMixin$(circel_more_page.CricelMorePage)[dart.mixinNew].call(this);
    State_AutomaticKeepAliveClientMixin$36$4.__proto__.new.call(this);
  }).prototype = State_AutomaticKeepAliveClientMixin$36$4.prototype;
  dart.applyMixin(State_AutomaticKeepAliveClientMixin$36$4, automatic_keep_alive.AutomaticKeepAliveClientMixin$(circel_more_page.CricelMorePage));
  circel_more_page.CricelMorePageState = class CricelMorePageState extends State_AutomaticKeepAliveClientMixin$36$4 {
    get page() {
      return this[page$0];
    }
    set page(value) {
      this[page$0] = value;
    }
    get couponList() {
      return this[couponList$1];
    }
    set couponList(value) {
      this[couponList$1] = value;
    }
    get fotterKey() {
      return this[fotterKey$];
    }
    set fotterKey(value) {
      this[fotterKey$] = value;
    }
    initState() {
      super.initState();
      core.print("initState 2");
      this.page = 1;
      this.couponList = JSArrayOfMapData().of([]);
      this[_couponList$3](this.page, "3786");
    }
    build(context) {
      super.build(context);
      core.print("build 2");
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("看看", {$creationLocationd_0dea112b090073317d4: C1779 || CT.C1779}), $creationLocationd_0dea112b090073317d4: C1782 || CT.C1782}), body: this[_getMain$3](), backgroundColor: colors.Colors.white, resizeToAvoidBottomInset: false, $creationLocationd_0dea112b090073317d4: C1783 || CT.C1783});
    }
    [_getMain$3]() {
      if (this.couponList[$length] === 0) {
        return new container.Container.new({alignment: alignment.Alignment.center, child: new ink_well.InkWell.new({child: new container.Container.new({width: dart.notNull(screen.Screen.width) / 3, height: dart.notNull(screen.Screen.height) / 3, child: new image.Image.asset("empty.png", {$creationLocationd_0dea112b090073317d4: C1787 || CT.C1787}), $creationLocationd_0dea112b090073317d4: C1790 || CT.C1790}), onTap: dart.fn(() => {
              this.page = 1;
              this.couponList = JSArrayOfMapData().of([]);
              this[_couponList$3](this.page, "3786");
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C1795 || CT.C1795}), $creationLocationd_0dea112b090073317d4: C1798 || CT.C1798});
      } else {
        core.print("build 3");
        return new refresher.EasyRefresh.new({child: new scroll_view.ListView.new({children: JSArrayOfWidget().of([this[_warpList$3]()]), $creationLocationd_0dea112b090073317d4: C1802 || CT.C1802}), onRefresh: dart.fn(() => async.async(core.Null, (function*() {
            this.page = 1;
            this.couponList = JSArrayOfMapData().of([]);
            this[_couponList$3](this.page, "3786");
          }).bind(this)), VoidToFutureOfNull()), onLoad: dart.fn(() => async.async(core.Null, (function*() {
            this.page = dart.notNull(this.page) + 1;
            this[_couponList$3](this.page, "3786");
          }).bind(this)), VoidToFutureOfNull()), footer: new footer.ClassicalFooter.new({bgColor: colors.Colors.white, textColor: colors.Colors.pink, infoColor: colors.Colors.pink, noMoreText: "", key: this.fotterKey}), $creationLocationd_0dea112b090073317d4: C1805 || CT.C1805});
      }
    }
    [_warpList$3]() {
      if (dart.notNull(this.couponList[$length]) > 0) {
        let list = this.couponList[$map](framework.Widget, dart.fn(v => this[_CricleCell$](v), MapDataToWidget()))[$toList]();
        return new basic.Wrap.new({children: list, $creationLocationd_0dea112b090073317d4: C1811 || CT.C1811});
      } else {
        return new image.Image.asset("empty.png", {$creationLocationd_0dea112b090073317d4: C1814 || CT.C1814});
      }
    }
    [_CricleCell$](m) {
      let margin = new flutter_screenutil.ScreenUtil.new().setWidth(15);
      return new ink_well.InkWell.new({onTap: dart.fn(() => {
          app_navigator.AppNavigator.pushNovelDetail(this.context, m);
        }, VoidToNull()), child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({bottom: new borders.BorderSide.new({width: margin, color: colors.Colors.black12})}), color: colors.Colors.white}), padding: new edge_insets.EdgeInsets.all(margin), child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new image.Image.asset(m.userType === 1 ? "icon_tmall.png" : "icon_tao.png", {$creationLocationd_0dea112b090073317d4: C1817 || CT.C1817}), new container.Container.new({alignment: alignment.Alignment.centerLeft, margin: new edge_insets.EdgeInsets.all(margin), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new container.Container.new({child: new text.Text.new(m.shopTitle, {textAlign: ui.TextAlign.left, $creationLocationd_0dea112b090073317d4: C1820 || CT.C1820}), $creationLocationd_0dea112b090073317d4: C1824 || CT.C1824}), new container.Container.new({child: new text.Text.new(m.couponInfo, {textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: sq_color.SQColor.primary, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(28)}), $creationLocationd_0dea112b090073317d4: C1827 || CT.C1827}), $creationLocationd_0dea112b090073317d4: C1831 || CT.C1831})]), $creationLocationd_0dea112b090073317d4: C1832 || CT.C1832}), $creationLocationd_0dea112b090073317d4: C1836 || CT.C1836})]), $creationLocationd_0dea112b090073317d4: C1841 || CT.C1841}), $creationLocationd_0dea112b090073317d4: C1844 || CT.C1844}), new container.Container.new({alignment: alignment.Alignment.centerLeft, padding: new edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 0.0, margin), child: new text.Text.new(m.title, {maxLines: 1, overflow: paragraph.TextOverflow.ellipsis, textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: new ui.Color.new(4281545523)}), $creationLocationd_0dea112b090073317d4: C1847 || CT.C1847}), $creationLocationd_0dea112b090073317d4: C1854 || CT.C1854}), this[_photoView$](m, margin, this.context), new container.Container.new({alignment: alignment.Alignment.centerLeft, padding: new edge_insets.EdgeInsets.fromLTRB(0.0, margin, 0.0, 0.0), child: new text.Text.new("[价格]¥" + dart.str(m.zkFinalPrice), {maxLines: 1, overflow: paragraph.TextOverflow.ellipsis, textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: new ui.Color.new(4281545523)}), $creationLocationd_0dea112b090073317d4: C1859 || CT.C1859}), $creationLocationd_0dea112b090073317d4: C1866 || CT.C1866}), new container.Container.new({alignment: alignment.Alignment.centerLeft, padding: new edge_insets.EdgeInsets.fromLTRB(0.0, dart.notNull(margin) / 2, 0.0, 0.0), child: new text.Text.new("[优惠券]¥" + dart.str(m.couponAmount), {maxLines: 1, overflow: paragraph.TextOverflow.ellipsis, textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: new ui.Color.new(4281545523)}), $creationLocationd_0dea112b090073317d4: C1871 || CT.C1871}), $creationLocationd_0dea112b090073317d4: C1878 || CT.C1878}), this[_allContent$](this.context, m), new container.Container.new({child: new ink_well.InkWell.new({onTap: dart.fn(() => {
                    this.setState(dart.fn(() => {
                      m.isExpand = !dart.test(m.isExpand);
                    }, VoidToNull()));
                  }, VoidToNull()), child: new container.Container.new({alignment: alignment.Alignment.centerLeft, padding: new edge_insets.EdgeInsets.fromLTRB(0.0, dart.notNull(margin) / 2, 0.0, margin), child: new text.Text.new(dart.test(m.isExpand) ? "收起" : "全文", {maxLines: 1, overflow: paragraph.TextOverflow.ellipsis, textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: sq_color.SQColor.primary}), $creationLocationd_0dea112b090073317d4: C1883 || CT.C1883}), $creationLocationd_0dea112b090073317d4: C1890 || CT.C1890}), $creationLocationd_0dea112b090073317d4: C1895 || CT.C1895}), $creationLocationd_0dea112b090073317d4: C1899 || CT.C1899}), new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(0.0, dart.notNull(margin) * 2, 0.0, 0.0), child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new text.Text.new("优惠券已领取:" + dart.str(m.couponTotalCount), {style: new text_style.TextStyle.new({color: colors.Colors.black38, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(30)}), $creationLocationd_0dea112b090073317d4: C1902 || CT.C1902}), $creationLocationd_0dea112b090073317d4: C1906 || CT.C1906}), new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("立即领取", {style: new text_style.TextStyle.new({color: sq_color.SQColor.primary, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(30)}), $creationLocationd_0dea112b090073317d4: C1909 || CT.C1909}), new image.Image.asset("dianji.png", {height: new flutter_screenutil.ScreenUtil.new().setHeight(50), $creationLocationd_0dea112b090073317d4: C1913 || CT.C1913})]), $creationLocationd_0dea112b090073317d4: C1917 || CT.C1917})]), $creationLocationd_0dea112b090073317d4: C1920 || CT.C1920}), $creationLocationd_0dea112b090073317d4: C1923 || CT.C1923})]), $creationLocationd_0dea112b090073317d4: C1927 || CT.C1927}), $creationLocationd_0dea112b090073317d4: C1930 || CT.C1930}), $creationLocationd_0dea112b090073317d4: C1935 || CT.C1935});
    }
    [_photoView$](m, margin, c) {
      if (m.smallImages == null || m.smallImages.string == null || m.smallImages.string[$length] === 0) {
        return new container.Container.new({$creationLocationd_0dea112b090073317d4: C1939 || CT.C1939});
      }
      let nl = JSArrayOfMap().of([]);
      for (let i = 0; i < dart.notNull(m.smallImages.string[$length]); i = i + 1) {
        nl[$add](new _js_helper.LinkedMap.from(["image", m.smallImages.string[$_get](i)]));
      }
      return new container.Container.new({child: new scroll_view.GridView.builder({shrinkWrap: true, physics: new scroll_physics.NeverScrollableScrollPhysics.new(), padding: new edge_insets.EdgeInsets.symmetric({vertical: 0.0}), gridDelegate: new sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: 3, crossAxisSpacing: core.double._check(margin), mainAxisSpacing: core.double._check(margin)}), itemBuilder: dart.fn((context, index) => {
            let t3;
            return new ink_well.InkWell.new({child: new image.Image.network((t3 = m.smallImages.string[$_get](index), t3 == null ? "" : t3), {fit: box_fit.BoxFit.fill, $creationLocationd_0dea112b090073317d4: C1940 || CT.C1940}), onTap: dart.fn(() => {
                app_navigator.AppNavigator.pushPhoto(framework.BuildContext._check(c), index, nl);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C1944 || CT.C1944});
          }, BuildContextAndintToInkWell()), itemCount: m.smallImages.string[$length], $creationLocationd_0dea112b090073317d4: C1948 || CT.C1948}), $creationLocationd_0dea112b090073317d4: C1956 || CT.C1956});
    }
    [_allContent$](context, m) {
      if (dart.test(m.isExpand)) {
        return new container.Container.new({alignment: alignment.Alignment.centerLeft, child: new text.Text.new(m.title, {textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: new ui.Color.new(4281545523)}), $creationLocationd_0dea112b090073317d4: C1959 || CT.C1959}), $creationLocationd_0dea112b090073317d4: C1964 || CT.C1964});
        return new basic.Row.new({children: JSArrayOfWidget().of([new container.Container.new({alignment: alignment.Alignment.centerLeft, child: new text.Text.new(m.title, {textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: new ui.Color.new(4281545523)}), $creationLocationd_0dea112b090073317d4: C1968 || CT.C1968}), $creationLocationd_0dea112b090073317d4: C1973 || CT.C1973}), new ink_well.InkWell.new({onTap: dart.fn(() => {
                app_navigator.AppNavigator.pushNovelDetail(context, m);
              }, VoidToNull()), child: new text.Text.new("宝贝详情", {overflow: paragraph.TextOverflow.ellipsis, textAlign: ui.TextAlign.left, style: new text_style.TextStyle.new({color: sq_color.SQColor.primary, decoration: ui.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: C1977 || CT.C1977}), $creationLocationd_0dea112b090073317d4: C1983 || CT.C1983})]), $creationLocationd_0dea112b090073317d4: C1987 || CT.C1987});
      } else {
        return new container.Container.new({$creationLocationd_0dea112b090073317d4: C1990 || CT.C1990});
      }
    }
    [_couponList$3](page, materiaqlId) {
      return async.async(dart.void, (function* _couponList() {
        let formdata = new (IdentityMapOfString$dynamic()).from(["app_key", "27675850", "session_key", "hank", "method", "taobao.tbk.dg.material.optional", "partner_id", "top-apitools", "format", "json", "v", "2.0", "sign_method", "md5", "timestamp", service_method.getTime(), "adzone_id", "109164900192", "force_sensitive_param_fuzzy", "true", "page_no", dart.str(page), "has_coupon", "true", "cat", "0", "page_size", "10", "material_id", materiaqlId]);
        yield service_method.request("couponList", formdata).then(core.Null, dart.fn(value => {
          if (value == null) return;
          let data = convert.json.decode(dart.toString(value));
          let cdata = new coupon_model.CounponModel.fromJson(MapOfString$dynamic()._check(data));
          if (cdata === null) {
            toast.ToastHelper.showToast(this.context, "网络错误,点击重新加载");
          } else {
            this.setState(dart.fn(() => {
              this.couponList[$addAll](cdata.tbkDgMaterialOptionalResponse.resultList.mapData);
            }, VoidToNull()));
          }
        }, dynamicToNull()));
      }).bind(this));
    }
    get wantKeepAlive() {
      return true;
    }
  };
  (circel_more_page.CricelMorePageState.new = function() {
    this[page$0] = 2;
    this[couponList$1] = JSArrayOfMapData().of([]);
    this[fotterKey$] = new (ValueKeyOfString()).new("fotterKey");
    circel_more_page.CricelMorePageState.__proto__.new.call(this);
    ;
  }).prototype = circel_more_page.CricelMorePageState.prototype;
  dart.addTypeTests(circel_more_page.CricelMorePageState);
  dart.setMethodSignature(circel_more_page.CricelMorePageState, () => ({
    __proto__: dart.getMethods(circel_more_page.CricelMorePageState.__proto__),
    [_getMain$3]: dart.fnType(framework.Widget, []),
    [_warpList$3]: dart.fnType(framework.Widget, []),
    [_CricleCell$]: dart.fnType(framework.Widget, [coupon_model.MapData]),
    [_photoView$]: dart.fnType(framework.Widget, [coupon_model.MapData, dart.dynamic, dart.dynamic]),
    [_allContent$]: dart.fnType(framework.Widget, [framework.BuildContext, coupon_model.MapData]),
    [_couponList$3]: dart.fnType(async.Future$(dart.void), [dart.dynamic, dart.dynamic])
  }));
  dart.setGetterSignature(circel_more_page.CricelMorePageState, () => ({
    __proto__: dart.getGetters(circel_more_page.CricelMorePageState.__proto__),
    wantKeepAlive: core.bool
  }));
  dart.setLibraryUri(circel_more_page.CricelMorePageState, "package:hkbook/page/Cricle/circel_more_page.dart");
  dart.setFieldSignature(circel_more_page.CricelMorePageState, () => ({
    __proto__: dart.getFields(circel_more_page.CricelMorePageState.__proto__),
    page: dart.fieldType(core.int),
    couponList: dart.fieldType(core.List$(coupon_model.MapData)),
    fotterKey: dart.fieldType(key.Key)
  }));
  let C1991;
  let C1994;
  let C1993;
  let C1992;
  novel_cover_view.NovelCoverView = class NovelCoverView extends framework.StatelessWidget {
    build(context) {
      return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
        }, VoidToNull()), child: new container.Container.new({$creationLocationd_0dea112b090073317d4: C1991 || CT.C1991}), $creationLocationd_0dea112b090073317d4: C1992 || CT.C1992});
    }
  };
  (novel_cover_view.NovelCoverView.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    novel_cover_view.NovelCoverView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = novel_cover_view.NovelCoverView.prototype;
  dart.addTypeTests(novel_cover_view.NovelCoverView);
  dart.setMethodSignature(novel_cover_view.NovelCoverView, () => ({
    __proto__: dart.getMethods(novel_cover_view.NovelCoverView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(novel_cover_view.NovelCoverView, "package:hkbook/widget/novel_cover_view.dart");
  search_suggest_page.SearchSuggestPage = class SearchSuggestPage extends framework.StatefulWidget {
    createState() {
      return new search_suggest_page._SearchSuggestPageState.new();
    }
  };
  (search_suggest_page.SearchSuggestPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    search_suggest_page.SearchSuggestPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_suggest_page.SearchSuggestPage.prototype;
  dart.addTypeTests(search_suggest_page.SearchSuggestPage);
  dart.setMethodSignature(search_suggest_page.SearchSuggestPage, () => ({
    __proto__: dart.getMethods(search_suggest_page.SearchSuggestPage.__proto__),
    createState: dart.fnType(search_suggest_page._SearchSuggestPageState, [])
  }));
  dart.setLibraryUri(search_suggest_page.SearchSuggestPage, "package:hkbook/page/category/search_suggest_page.dart");
  const _isHideSearchFind = dart.privateName(search_suggest_page, "_isHideSearchFind");
  let C1997;
  let C1996;
  let C1995;
  let C2000;
  let C1999;
  let C1998;
  let C2003;
  let C2004;
  let C2002;
  let C2001;
  let C2007;
  let C2006;
  let C2005;
  let C2010;
  let C2011;
  let C2012;
  let C2009;
  let C2008;
  let C2015;
  let C2016;
  let C2014;
  let C2013;
  let C2019;
  let C2018;
  let C2017;
  let C2022;
  let C2023;
  let C2021;
  let C2020;
  let C2026;
  let C2025;
  let C2024;
  let C2029;
  let C2028;
  let C2027;
  let C2032;
  let C2031;
  let C2030;
  let C2035;
  let C2034;
  let C2033;
  const _getistorynfo = dart.privateName(search_suggest_page, "_getistorynfo");
  let C2038;
  let C2039;
  let C2037;
  let C2036;
  let C2042;
  let C2043;
  let C2044;
  let C2041;
  let C2040;
  let C2047;
  let C2048;
  let C2046;
  let C2045;
  let C2051;
  let C2052;
  let C2053;
  let C2054;
  let C2055;
  let C2050;
  let C2049;
  let C2058;
  let C2057;
  let C2056;
  let C2059;
  let C2062;
  let C2063;
  let C2061;
  let C2060;
  let C2066;
  let C2065;
  let C2064;
  let C2069;
  let C2068;
  let C2067;
  let C2072;
  let C2073;
  let C2071;
  let C2070;
  search_suggest_page._SearchSuggestPageState = class _SearchSuggestPageState extends framework.State$(search_suggest_page.SearchSuggestPage) {
    build(context) {
      return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.only({topLeft: new ui.Radius.circular(16.0), topRight: new ui.Radius.circular(16.0)}), color: colors.Colors.white}), child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 30.0, $creationLocationd_0dea112b090073317d4: C1995 || CT.C1995}), new basic.Row.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({width: 12.0, $creationLocationd_0dea112b090073317d4: C1998 || CT.C1998}), new basic.Expanded.new({child: new text.Text.new("历史搜索", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 12.0}), $creationLocationd_0dea112b090073317d4: C2001 || CT.C2001}), $creationLocationd_0dea112b090073317d4: C2005 || CT.C2005}), new container.Container.new({child: new ink_well.InkWell.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.delete_forever, {color: colors.Colors.grey, size: 16.0, $creationLocationd_0dea112b090073317d4: C2008 || CT.C2008}), new text.Text.new("清空记录", {style: new text_style.TextStyle.new({color: colors.Colors.grey, fontSize: new flutter_screenutil.ScreenUtil.new().setSp(20)}), $creationLocationd_0dea112b090073317d4: C2013 || CT.C2013})]), $creationLocationd_0dea112b090073317d4: C2017 || CT.C2017}), onTap: dart.fn(() => {
                      provide.Provide.value(search_history.HistoryProvide, context).remove();
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C2020 || CT.C2020}), $creationLocationd_0dea112b090073317d4: C2024 || CT.C2024}), new basic.SizedBox.new({width: 8.0, $creationLocationd_0dea112b090073317d4: C2027 || CT.C2027})]), $creationLocationd_0dea112b090073317d4: C2030 || CT.C2030}), new basic.SizedBox.new({height: 16.0, $creationLocationd_0dea112b090073317d4: C2033 || CT.C2033}), new async$.FutureBuilder.new({future: this[_getistorynfo](context), builder: dart.fn((context, snapshot) => {
                if (dart.test(snapshot.hasData)) {
                  return new (ProvideOfHistoryProvide()).new({builder: dart.fn((ccontext, child, childhistory) => new basic.Wrap.new({direction: basic_types.Axis.horizontal, alignment: wrap.WrapAlignment.start, spacing: 8.0, runSpacing: 8.0, children: childhistory.historyList[$map](gesture_detector.GestureDetector, dart.fn(i => new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                          app_navigator.AppNavigator.pushSearchResult(context, i);
                        }, VoidToNull()), child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: new ui.Color.new(4294441207), borderRadius: new border_radius.BorderRadius.circular(13.0)}), padding: new edge_insets.EdgeInsets.symmetric({vertical: 8.0, horizontal: 12.0}), child: new text.Text.new(i, {style: new text_style.TextStyle.new({color: new ui.Color.new(4283848535), fontSize: 13.0}), $creationLocationd_0dea112b090073317d4: C2036 || CT.C2036}), $creationLocationd_0dea112b090073317d4: C2040 || CT.C2040}), $creationLocationd_0dea112b090073317d4: C2045 || CT.C2045}), StringToGestureDetector()))[$toList](), $creationLocationd_0dea112b090073317d4: C2049 || CT.C2049}), BuildContextAndWidgetAndHistoryProvideToWrap()), $creationLocationd_0dea112b090073317d4: C2056 || CT.C2056});
                } else {
                  return new container.Container.new({$creationLocationd_0dea112b090073317d4: C2059 || CT.C2059});
                }
              }, BuildContextAndAsyncSnapshotToStatelessWidget()), $creationLocationd_0dea112b090073317d4: C2060 || CT.C2060}), new basic.SizedBox.new({height: 30.0, $creationLocationd_0dea112b090073317d4: C2064 || CT.C2064})]), $creationLocationd_0dea112b090073317d4: C2067 || CT.C2067}), $creationLocationd_0dea112b090073317d4: C2070 || CT.C2070});
    }
    [_getistorynfo](c) {
      return async.async(dart.dynamic, function* _getistorynfo() {
        yield provide.Provide.value(search_history.HistoryProvide, c).getHistory();
        return "finish";
      });
    }
  };
  (search_suggest_page._SearchSuggestPageState.new = function() {
    this[_isHideSearchFind] = true;
    search_suggest_page._SearchSuggestPageState.__proto__.new.call(this);
    ;
  }).prototype = search_suggest_page._SearchSuggestPageState.prototype;
  dart.addTypeTests(search_suggest_page._SearchSuggestPageState);
  dart.setMethodSignature(search_suggest_page._SearchSuggestPageState, () => ({
    __proto__: dart.getMethods(search_suggest_page._SearchSuggestPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_getistorynfo]: dart.fnType(async.Future, [framework.BuildContext])
  }));
  dart.setLibraryUri(search_suggest_page._SearchSuggestPageState, "package:hkbook/page/category/search_suggest_page.dart");
  dart.setFieldSignature(search_suggest_page._SearchSuggestPageState, () => ({
    __proto__: dart.getFields(search_suggest_page._SearchSuggestPageState.__proto__),
    [_isHideSearchFind]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/hkbook/app/app_navigator", {
    "package:hkbook/page/category/search_goods_page.dart": search_goods_page,
    "package:hkbook/public.dart": $public,
    "package:hkbook/app/app_scene.dart": app_scene,
    "package:hkbook/app/root_scene.dart": root_scene,
    "package:hkbook/service/service_method.dart": service_method,
    "package:hkbook/service/interceptors/logInterceptors.dart": logInterceptors,
    "package:hkbook/service/api.dart": api,
    "package:hkbook/page/mine/mine_page.dart": mine_page,
    "package:hkbook/page/mine/me_header.dart": me_header,
    "package:hkbook/page/mine/mine_cell.dart": mine_cell,
    "package:hkbook/page/home/home_main.dart": home_main,
    "package:hkbook/page/home/home_sort.dart": home_sort,
    "package:hkbook/page/home/home_header.dart": home_header,
    "package:hkbook/page/home/home_banner.dart": home_banner,
    "package:hkbook/page/category/category_page.dart": category_page,
    "package:hkbook/page/Cricle/cricel_page.dart": cricel_page,
    "package:hkbook/app/app_navigator.dart": app_navigator,
    "package:hkbook/page/mine/help_page.dart": help_page,
    "package:hkbook/page/mine/clearCache_page.dart": clearCache_page,
    "package:hkbook/page/mine/aboutWe_page.dart": aboutWe_page,
    "package:hkbook/page/details/details_page.dart": details_page,
    "package:hkbook/page/details/details_share.dart": details_share,
    "package:hkbook/page/details/details_header.dart": details_header,
    "package:hkbook/page/category/search_result.dart": search_result,
    "package:hkbook/page/category/search_mater_page.dart": search_mater_page,
    "package:hkbook/page/Cricle/circel_more_page.dart": circel_more_page,
    "package:hkbook/widget/novel_cover_view.dart": novel_cover_view,
    "package:hkbook/page/category/search_suggest_page.dart": search_suggest_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../page/category/search_goods_page.dart","app_scene.dart","root_scene.dart","../service/service_method.dart","../service/interceptors/logInterceptors.dart","../service/api.dart","../page/mine/mine_page.dart","../page/mine/me_header.dart","../page/mine/mine_cell.dart","../page/home/home_main.dart","../page/home/home_sort.dart","../page/home/home_header.dart","../page/home/home_banner.dart","../page/category/category_page.dart","../page/Cricle/cricel_page.dart","app_navigator.dart","../page/mine/help_page.dart","../page/mine/clearCache_page.dart","../page/mine/aboutWe_page.dart","../page/details/details_page.dart","../page/details/details_share.dart","../page/details/details_header.dart","../page/category/search_result.dart","../page/category/search_mater_page.dart","../page/Cricle/circel_more_page.dart","../widget/novel_cover_view.dart","../page/category/search_suggest_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"app_navigator.ddc.js"}');
  // Exports:
  return {
    page__category__search_goods_page: search_goods_page,
    $public: $public,
    app__app_scene: app_scene,
    app__root_scene: root_scene,
    service__service_method: service_method,
    service__interceptors__logInterceptors: logInterceptors,
    service__api: api,
    page__mine__mine_page: mine_page,
    page__mine__me_header: me_header,
    page__mine__mine_cell: mine_cell,
    page__home__home_main: home_main,
    page__home__home_sort: home_sort,
    page__home__home_header: home_header,
    page__home__home_banner: home_banner,
    page__category__category_page: category_page,
    page__Cricle__cricel_page: cricel_page,
    app__app_navigator: app_navigator,
    page__mine__help_page: help_page,
    page__mine__clearCache_page: clearCache_page,
    page__mine__aboutWe_page: aboutWe_page,
    page__details__details_page: details_page,
    page__details__details_share: details_share,
    page__details__details_header: details_header,
    page__category__search_result: search_result,
    page__category__search_mater_page: search_mater_page,
    page__Cricle__circel_more_page: circel_more_page,
    widget__novel_cover_view: novel_cover_view,
    page__category__search_suggest_page: search_suggest_page
  };
});

//# sourceMappingURL=app_navigator.ddc.js.map
