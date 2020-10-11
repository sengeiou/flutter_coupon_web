define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web_ui__ui, packages__flutter_web__animation, packages__flutter_web__material, packages__hkbook__ThridLib__flutter_screenutil_0$467$460__lib__flutter_screenutil, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui = packages__flutter_web_ui__ui.ui;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const preferred_size = packages__flutter_web__animation.src__widgets__preferred_size;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const text = packages__flutter_web__animation.src__widgets__text;
  const tab_controller = packages__flutter_web__material.src__material__tab_controller;
  const colors = packages__flutter_web__material.src__material__colors;
  const tabs = packages__flutter_web__material.src__material__tabs;
  const flutter_screenutil = packages__hkbook__ThridLib__flutter_screenutil_0$467$460__lib__flutter_screenutil.ThridLib__flutter_screenutil_0$467$460__lib__flutter_screenutil;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const tabbar = Object.create(dart.library);
  const $indexOf = dartx.indexOf;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let TabModelToContainer = () => (TabModelToContainer = dart.constFn(dart.fnType(container.Container, [tabbar.TabModel])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 31,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 36,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 31,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 2,
        [EdgeInsets__right]: 2,
        [EdgeInsets__top]: 2,
        [EdgeInsets__left]: 2
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 43,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 41,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 41,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 48,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 41,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 46,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 39,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 39,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 39,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 39,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 37,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 69,
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
        [_Location_column]: 35,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 39,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 39,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 39,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 39,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 83,
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
        [_Location_column]: 35,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 58,
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
        [_Location_column]: 25,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 27,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 27,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 27,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 27,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61, C62 || CT.C62], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 11,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorColor",
        [_Location_column]: 11,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indicatorSize",
        [_Location_column]: 11,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isScrollable",
        [_Location_column]: 11,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelColor",
        [_Location_column]: 11,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "unselectedLabelColor",
        [_Location_column]: 11,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelPadding",
        [_Location_column]: 11,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tabs",
        [_Location_column]: 11,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66, C67 || CT.C67, C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71, C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/tabbar.dart"
      });
    }
  });
  const title$ = dart.privateName(tabbar, "TabModel.title");
  const subtitle$ = dart.privateName(tabbar, "TabModel.subtitle");
  const keyId$ = dart.privateName(tabbar, "TabModel.keyId");
  tabbar.TabModel = class TabModel extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    get subtitle() {
      return this[subtitle$];
    }
    set subtitle(value) {
      this[subtitle$] = value;
    }
    get keyId() {
      return this[keyId$];
    }
    set keyId(value) {
      this[keyId$] = value;
    }
  };
  (tabbar.TabModel.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
    let keyId = opts && 'keyId' in opts ? opts.keyId : null;
    this[title$] = title;
    this[subtitle$] = subtitle;
    this[keyId$] = keyId;
    ;
  }).prototype = tabbar.TabModel.prototype;
  dart.addTypeTests(tabbar.TabModel);
  dart.setLibraryUri(tabbar.TabModel, "package:hkbook/page/home/tabbar.dart");
  dart.setFieldSignature(tabbar.TabModel, () => ({
    __proto__: dart.getFields(tabbar.TabModel.__proto__),
    title: dart.fieldType(core.String),
    subtitle: dart.fieldType(core.String),
    keyId: dart.fieldType(core.String)
  }));
  const tabModels$ = dart.privateName(tabbar, "GZXTabBarWidget.tabModels");
  const tabController$ = dart.privateName(tabbar, "GZXTabBarWidget.tabController");
  const currentIndex$ = dart.privateName(tabbar, "GZXTabBarWidget.currentIndex");
  tabbar.GZXTabBarWidget = class GZXTabBarWidget extends framework.StatefulWidget {
    get tabModels() {
      return this[tabModels$];
    }
    set tabModels(value) {
      super.tabModels = value;
    }
    get tabController() {
      return this[tabController$];
    }
    set tabController(value) {
      super.tabController = value;
    }
    get currentIndex() {
      return this[currentIndex$];
    }
    set currentIndex(value) {
      super.currentIndex = value;
    }
    createState() {
      return new tabbar._GZXTabBarWidgetState.new();
    }
    get preferredSize() {
      return new ui.Size.fromHeight(30.0);
    }
  };
  (tabbar.GZXTabBarWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let tabModels = opts && 'tabModels' in opts ? opts.tabModels : null;
    let tabController = opts && 'tabController' in opts ? opts.tabController : null;
    let currentIndex = opts && 'currentIndex' in opts ? opts.currentIndex : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[tabModels$] = tabModels;
    this[tabController$] = tabController;
    this[currentIndex$] = currentIndex;
    tabbar.GZXTabBarWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = tabbar.GZXTabBarWidget.prototype;
  dart.addTypeTests(tabbar.GZXTabBarWidget);
  tabbar.GZXTabBarWidget[dart.implements] = () => [preferred_size.PreferredSizeWidget];
  dart.setMethodSignature(tabbar.GZXTabBarWidget, () => ({
    __proto__: dart.getMethods(tabbar.GZXTabBarWidget.__proto__),
    createState: dart.fnType(tabbar._GZXTabBarWidgetState, [])
  }));
  dart.setGetterSignature(tabbar.GZXTabBarWidget, () => ({
    __proto__: dart.getGetters(tabbar.GZXTabBarWidget.__proto__),
    preferredSize: ui.Size
  }));
  dart.setLibraryUri(tabbar.GZXTabBarWidget, "package:hkbook/page/home/tabbar.dart");
  dart.setFieldSignature(tabbar.GZXTabBarWidget, () => ({
    __proto__: dart.getFields(tabbar.GZXTabBarWidget.__proto__),
    tabModels: dart.finalFieldType(core.List$(tabbar.TabModel)),
    tabController: dart.finalFieldType(tab_controller.TabController),
    currentIndex: dart.finalFieldType(core.int)
  }));
  const _selectedIndex = dart.privateName(tabbar, "_selectedIndex");
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C2;
  let C1;
  let C6;
  let C5;
  let C4;
  let C9;
  let C8;
  let C7;
  let C10;
  let C13;
  let C14;
  let C15;
  let C12;
  let C11;
  let C18;
  let C17;
  let C16;
  let C21;
  let C22;
  let C23;
  let C24;
  let C20;
  let C19;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C32;
  let C33;
  let C30;
  let C29;
  let C36;
  let C37;
  let C35;
  let C34;
  let C40;
  let C39;
  let C38;
  let C43;
  let C42;
  let C41;
  let C46;
  let C45;
  let C44;
  let C49;
  let C50;
  let C51;
  let C48;
  let C47;
  let C54;
  let C53;
  let C52;
  let C57;
  let C56;
  let C55;
  let C60;
  let C61;
  let C62;
  let C59;
  let C58;
  let C65;
  let C66;
  let C67;
  let C68;
  let C69;
  let C70;
  let C71;
  let C72;
  let C73;
  let C64;
  let C63;
  let C76;
  let C77;
  let C75;
  let C74;
  tabbar._GZXTabBarWidgetState = class _GZXTabBarWidgetState extends framework.State$(tabbar.GZXTabBarWidget) {
    initState() {
      super.initState();
    }
    build(context) {
      return new container.Container.new({color: colors.Colors.white, child: new tabs.TabBar.new({controller: this.widget.tabController, indicatorColor: colors.Colors.transparent, indicatorSize: tabs.TabBarIndicatorSize.label, isScrollable: true, labelColor: new ui.Color.new(4294856960), unselectedLabelColor: colors.Colors.black, labelPadding: new edge_insets.EdgeInsets.only({right: 10.0, left: 10.0}), onTap: dart.fn(i => {
            this[_selectedIndex] = i;
            this.setState(dart.fn(() => {
            }, VoidToNull()));
          }, intToNull()), tabs: this.widget.tabModels[$map](container.Container, dart.fn(i => new container.Container.new({padding: C0 || CT.C0, height: new flutter_screenutil.ScreenUtil.new().setHeight(88), child: new tabs.Tab.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Column.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: new flutter_screenutil.ScreenUtil.new().setHeight(5), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), new text.Text.new(i.title, {$creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new basic.SizedBox.new({height: new flutter_screenutil.ScreenUtil.new().setHeight(3), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), this.widget.tabModels[$indexOf](i) == this.widget.currentIndex ? new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(7.0), child: new container.Container.new({padding: C10 || CT.C10, color: new ui.Color.new(4294856960), alignment: alignment.Alignment.center, child: new container.Container.new({child: new text.Text.new(i.subtitle, {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({fontSize: 9.0, color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}) : new basic.Expanded.new({child: new container.Container.new({alignment: alignment.Alignment.center, child: new text.Text.new(i.subtitle, {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({fontSize: 9.0, color: new ui.Color.new(4290098869)}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38})]), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), new basic.SizedBox.new({width: new flutter_screenutil.ScreenUtil.new().setWidth(40), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), new container.Container.new({width: 1.0, height: new flutter_screenutil.ScreenUtil.new().setHeight(30), color: new ui.Color.new(4291414474), $creationLocationd_0dea112b090073317d4: C47 || CT.C47})]), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), TabModelToContainer()))[$toList](), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74});
    }
  };
  (tabbar._GZXTabBarWidgetState.new = function() {
    this[_selectedIndex] = 0;
    tabbar._GZXTabBarWidgetState.__proto__.new.call(this);
    ;
  }).prototype = tabbar._GZXTabBarWidgetState.prototype;
  dart.addTypeTests(tabbar._GZXTabBarWidgetState);
  dart.setMethodSignature(tabbar._GZXTabBarWidgetState, () => ({
    __proto__: dart.getMethods(tabbar._GZXTabBarWidgetState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(tabbar._GZXTabBarWidgetState, "package:hkbook/page/home/tabbar.dart");
  dart.setFieldSignature(tabbar._GZXTabBarWidgetState, () => ({
    __proto__: dart.getFields(tabbar._GZXTabBarWidgetState.__proto__),
    [_selectedIndex]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/hkbook/page/home/tabbar", {
    "package:hkbook/page/home/tabbar.dart": tabbar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["tabbar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIS;;;;;;IACA;;;;;;IACA;;;;;;;;QACQ;QAAY;QAAc;IAA1B;IAAY;IAAc;;EAAO;;;;;;;;;;;;;IAK3B;;;;;;IACD;;;;;;IACV;;;;;;;AAI6B;IAAuB;;AAGpC,YAAK,wBAAW;IAAG;;;QANlB;QAAU;QAAgB;QAAoB;;IAApC;IAAgB;IAAoB;AAAiB,0DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAetF,MAAX;IACR;UAG0B;AACxB,YAAO,qCACS,4BACP,iCACS,AAAO,2CACI,0CACY,8CACrB,kBACF,iBAAM,mCACW,mCACJ,wCAAY,YAAY,eAC1C,QAAC;AACY,YAAlB,uBAAiB,CAAC;AACH,YAAf,cAAS;;iCAEL,AAAO,AACR,AAsDA,iDAtDI,QAAC,KAAM,2DAEE,AAAa,kDAAU,YACpB,yBACA,6BACS,sBAChB,gCACoB,sBAChB,gCACU,AAAa,kDAAU,2DAEjC,kBAAK,AAAE,CAAD,gEACN,gCACU,AAAa,kDAAU,2DAEjC,AAAO,AAAU,AAAW,gCAAH,CAAC,KAAK,AAAO,2BAChC,uCAC6B,wCAAS,aAC7B,4DAEE,iBAAM,wBACQ,mCACd,oCACE,kBACP,AAAE,CAAD,uBACoB,4BACd,wCAAoB,YAAiB,4PAKlD,+BACS,wCACgB,mCACf,kBACN,AAAE,CAAD,uBACoB,4BACd,wCAAoB,YAAU,iBAAM,qPAMzD,+BACS,AAAa,iDAAS,8DAE/B,oCACS,aACC,AAAa,kDAAU,YACxB,iBAAM;IAOrC;;;IAjFI,uBAAiB;;;EAkFvB","file":"tabbar.ddc.js"}');
  // Exports:
  return {
    page__home__tabbar: tabbar
  };
});

//# sourceMappingURL=tabbar.ddc.js.map
