define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const focus_manager = packages__flutter_web__animation.src__widgets__focus_manager;
  const editable_text = packages__flutter_web__animation.src__widgets__editable_text;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const rounded_rectangle_border = packages__flutter_web__animation.src__painting__rounded_rectangle_border;
  const borders = packages__flutter_web__animation.src__painting__borders;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const container = packages__flutter_web__animation.src__widgets__container;
  const card = packages__flutter_web__material.src__material__card;
  const icons = packages__flutter_web__material.src__material__icons;
  const colors = packages__flutter_web__material.src__material__colors;
  const text_field = packages__flutter_web__material.src__material__text_field;
  const input_decorator = packages__flutter_web__material.src__material__input_decorator;
  const input_border = packages__flutter_web__material.src__material__input_border;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const ui = packages__flutter_web_ui__ui.ui;
  const search_card = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
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
        __proto__: ui.Radius.prototype,
        [Radius_y]: 20,
        [Radius_x]: 20
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C3 || CT.C3,
        [BorderRadius_bottomLeft]: C3 || CT.C3,
        [BorderRadius_topRight]: C3 || CT.C3,
        [BorderRadius_topLeft]: C3 || CT.C3
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name]: "BorderStyle.none",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4278190080.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C5 || CT.C5,
        [BorderSide_width]: 0,
        [BorderSide_color]: C6 || CT.C6
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: rounded_rectangle_border.RoundedRectangleBorder.prototype,
        [RoundedRectangleBorder_borderRadius]: C2 || CT.C2,
        [RoundedRectangleBorder_side]: C4 || CT.C4
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 33,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 27,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 27,
        [_Location_line]: 74,
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
        [_Location_column]: 32,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 25,
        [_Location_line]: 78,
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
        [_Location_column]: 23,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 44,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 51,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 70,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    },
    get C25() {
      return C25 = dart.constList([], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 6,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 0
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 45,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 39,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 39,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 43,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 37,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 37,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "iconSize",
        [_Location_column]: 37,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 37,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 37,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 46,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 35,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 35,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 35,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 25,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 25,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 25,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSubmitted",
        [_Location_column]: 25,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 25,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 83,
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
        [_Location_column]: 26,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 67,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 11,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 59,
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
        [_Location_column]: 26,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/search_card.dart"
      });
    }
  });
  const focusNode$ = dart.privateName(search_card, "SearchCardWidget.focusNode");
  const textEditingController$ = dart.privateName(search_card, "SearchCardWidget.textEditingController");
  const onTap$ = dart.privateName(search_card, "SearchCardWidget.onTap");
  const isShowLeading$ = dart.privateName(search_card, "SearchCardWidget.isShowLeading");
  const hintText$ = dart.privateName(search_card, "SearchCardWidget.hintText");
  const onSubmitted$ = dart.privateName(search_card, "SearchCardWidget.onSubmitted");
  const onChanged$ = dart.privateName(search_card, "SearchCardWidget.onChanged");
  const autofocus$ = dart.privateName(search_card, "SearchCardWidget.autofocus");
  const isShowSuffixIcon$ = dart.privateName(search_card, "SearchCardWidget.isShowSuffixIcon");
  const elevation$ = dart.privateName(search_card, "SearchCardWidget.elevation");
  const rightWidget$ = dart.privateName(search_card, "SearchCardWidget.rightWidget");
  search_card.SearchCardWidget = class SearchCardWidget extends framework.StatefulWidget {
    get focusNode() {
      return this[focusNode$];
    }
    set focusNode(value) {
      super.focusNode = value;
    }
    get textEditingController() {
      return this[textEditingController$];
    }
    set textEditingController(value) {
      this[textEditingController$] = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get isShowLeading() {
      return this[isShowLeading$];
    }
    set isShowLeading(value) {
      super.isShowLeading = value;
    }
    get hintText() {
      return this[hintText$];
    }
    set hintText(value) {
      super.hintText = value;
    }
    get onSubmitted() {
      return this[onSubmitted$];
    }
    set onSubmitted(value) {
      super.onSubmitted = value;
    }
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    get autofocus() {
      return this[autofocus$];
    }
    set autofocus(value) {
      super.autofocus = value;
    }
    get isShowSuffixIcon() {
      return this[isShowSuffixIcon$];
    }
    set isShowSuffixIcon(value) {
      super.isShowSuffixIcon = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get rightWidget() {
      return this[rightWidget$];
    }
    set rightWidget(value) {
      this[rightWidget$] = value;
    }
    createState() {
      return new search_card._SearchCardWidgetState.new();
    }
  };
  (search_card.SearchCardWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
    let textEditingController = opts && 'textEditingController' in opts ? opts.textEditingController : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let isShowLeading = opts && 'isShowLeading' in opts ? opts.isShowLeading : true;
    let onSubmitted = opts && 'onSubmitted' in opts ? opts.onSubmitted : null;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
    let isShowSuffixIcon = opts && 'isShowSuffixIcon' in opts ? opts.isShowSuffixIcon : true;
    let hintText = opts && 'hintText' in opts ? opts.hintText : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : 2;
    let rightWidget = opts && 'rightWidget' in opts ? opts.rightWidget : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[focusNode$] = focusNode;
    this[textEditingController$] = textEditingController;
    this[onTap$] = onTap;
    this[isShowLeading$] = isShowLeading;
    this[onSubmitted$] = onSubmitted;
    this[onChanged$] = onChanged;
    this[autofocus$] = autofocus;
    this[isShowSuffixIcon$] = isShowSuffixIcon;
    this[hintText$] = hintText;
    this[elevation$] = elevation;
    this[rightWidget$] = rightWidget;
    search_card.SearchCardWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = search_card.SearchCardWidget.prototype;
  dart.addTypeTests(search_card.SearchCardWidget);
  dart.setMethodSignature(search_card.SearchCardWidget, () => ({
    __proto__: dart.getMethods(search_card.SearchCardWidget.__proto__),
    createState: dart.fnType(search_card._SearchCardWidgetState, [])
  }));
  dart.setLibraryUri(search_card.SearchCardWidget, "package:hkbook/page/category/search_card.dart");
  dart.setFieldSignature(search_card.SearchCardWidget, () => ({
    __proto__: dart.getFields(search_card.SearchCardWidget.__proto__),
    focusNode: dart.finalFieldType(focus_manager.FocusNode),
    textEditingController: dart.fieldType(editable_text.TextEditingController),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    isShowLeading: dart.finalFieldType(core.bool),
    hintText: dart.finalFieldType(core.String),
    onSubmitted: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    autofocus: dart.finalFieldType(core.bool),
    isShowSuffixIcon: dart.finalFieldType(core.bool),
    elevation: dart.finalFieldType(core.double),
    rightWidget: dart.fieldType(framework.Widget)
  }));
  const _hintText = dart.privateName(search_card, "_hintText");
  const _rightWidget = dart.privateName(search_card, "_rightWidget");
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C0;
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C3;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C2;
  const RoundedRectangleBorder_borderRadius = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.borderRadius");
  const _name = dart.privateName(borders, "_name");
  let C5;
  const BorderSide_style = dart.privateName(borders, "BorderSide.style");
  const BorderSide_width = dart.privateName(borders, "BorderSide.width");
  const Color__value = dart.privateName(ui, "Color._value");
  let C6;
  const BorderSide_color = dart.privateName(borders, "BorderSide.color");
  let C4;
  const RoundedRectangleBorder_side = dart.privateName(rounded_rectangle_border, "RoundedRectangleBorder.side");
  let C1;
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
  let C13;
  let C12;
  let C18;
  let C17;
  let C16;
  let C21;
  let C22;
  let C23;
  let C20;
  let C19;
  let C25;
  let C24;
  let C26;
  let C29;
  let C30;
  let C31;
  let C28;
  let C27;
  let C34;
  let C35;
  let C36;
  let C37;
  let C38;
  let C33;
  let C32;
  let C41;
  let C42;
  let C43;
  let C44;
  let C40;
  let C39;
  let C47;
  let C48;
  let C49;
  let C50;
  let C51;
  let C52;
  let C46;
  let C45;
  let C55;
  let C56;
  let C54;
  let C53;
  let C59;
  let C58;
  let C57;
  let C62;
  let C63;
  let C61;
  let C60;
  let C64;
  let C67;
  let C68;
  let C69;
  let C66;
  let C65;
  let C72;
  let C73;
  let C71;
  let C70;
  let C76;
  let C77;
  let C78;
  let C75;
  let C74;
  let C81;
  let C82;
  let C80;
  let C79;
  search_card._SearchCardWidgetState = class _SearchCardWidgetState extends framework.State$(search_card.SearchCardWidget) {
    initState() {
      super.initState();
    }
    build(context) {
      this[_rightWidget] = this.widget.rightWidget;
      this[_hintText] = this.widget.hintText;
      if (this.widget.textEditingController == null) {
        this.widget.textEditingController = new editable_text.TextEditingController.new();
      }
      return this.searchCard();
    }
    searchCard() {
      return new basic.Padding.new({padding: C0 || CT.C0, child: new card.Card.new({elevation: this.widget.elevation, shape: C1 || CT.C1, child: new basic.Padding.new({padding: C0 || CT.C0, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([dart.test(this.widget.isShowLeading) ? new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 5.0, top: 0.0, left: 5.0}), child: new icon.Icon.new(icons.Icons.search, {color: colors.Colors.grey, size: 20.0, $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}) : new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), new basic.Expanded.new({child: new container.Container.new({height: 34.0, child: new text_field.TextField.new({onTap: this.widget.onTap, style: new text_style.TextStyle.new({fontSize: 13.0}), controller: this.widget.textEditingController, decoration: new input_decorator.InputDecoration.new({icon: new icon.Icon.new(icons.Icons.search, {color: colors.Colors.grey, size: 28.0, $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), border: input_border.InputBorder.none, hintText: this[_hintText], suffixIcon: this.widget.textEditingController.text.length === 0 || !dart.test(this.widget.isShowSuffixIcon) ? new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C24 || CT.C24}) : new container.Container.new({width: 20.0, height: 20.0, alignment: alignment.Alignment.centerRight, child: new icon_button.IconButton.new({alignment: alignment.Alignment.centerRight, padding: C26 || CT.C26, iconSize: 18.0, icon: new icon.Icon.new(icons.Icons.cancel, {color: colors.Colors.grey._get(500), size: 16.0, $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), onPressed: dart.fn(() => {
                              this.setState(dart.fn(() => {
                                this.widget.textEditingController.text = "";
                                this.widget.onChanged("");
                              }, VoidToNull()));
                            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39})}), onSubmitted: this.widget.onSubmitted, onChanged: this.widget.onChanged, $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), this.widget.textEditingController.text.length === 0 || !dart.test(this.widget.isShowSuffixIcon) ? new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 5.0}), child: this[_rightWidget], $creationLocationd_0dea112b090073317d4: C60 || CT.C60}) : new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C64 || CT.C64})]), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79});
    }
  };
  (search_card._SearchCardWidgetState.new = function() {
    this[_hintText] = null;
    this[_rightWidget] = null;
    search_card._SearchCardWidgetState.__proto__.new.call(this);
    ;
  }).prototype = search_card._SearchCardWidgetState.prototype;
  dart.addTypeTests(search_card._SearchCardWidgetState);
  dart.setMethodSignature(search_card._SearchCardWidgetState, () => ({
    __proto__: dart.getMethods(search_card._SearchCardWidgetState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    searchCard: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(search_card._SearchCardWidgetState, "package:hkbook/page/category/search_card.dart");
  dart.setFieldSignature(search_card._SearchCardWidgetState, () => ({
    __proto__: dart.getFields(search_card._SearchCardWidgetState.__proto__),
    [_hintText]: dart.fieldType(core.String),
    [_rightWidget]: dart.fieldType(framework.Widget)
  }));
  dart.trackLibraries("packages/hkbook/page/category/search_card", {
    "package:hkbook/page/category/search_card.dart": search_card
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["search_card.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGkB;;;;;;IACM;;;;;;IACH;;;;;;IACR;;;;;;IACE;;;;;;IACc;;;;;;IACA;;;;;;IAChB;;;;;;IACA;;;;;;IACE;;;;;;IACL;;;;;;;AAkBgC;IAAwB;;;QAf1D;QACC;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;;IAVA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;AACF,gEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAaD,MAAX;IACR;UAG0B;AACS,MAAjC,qBAAe,AAAO;AACK,MAA3B,kBAAY,AAAO;AACnB,UAAI,AAAO,AAAsB,qCAAG;AACoB,QAAtD,AAAO,oCAAwB;;AAGjC,YAAO;IACT;;AAEuB,iEAGV,8BACM,AAAO,kDAEX,oDAEE,sCACgC,mDACE,0CACrB,gCAChB,AAAO,6BACD,gCACsB,wCAAY,UAAQ,WAAS,cAC1C,kBACC,4BACQ,0BACR,uHAGV,+BACS,+DAEf,+BACS,qCACK,aACD,qCAIE,AAAO,0BAEP,wCAAoB,oBACf,AAAO,+CACP,+CACJ,kBAAW,4BAAqB,0BAAW,uEAE7B,yCACV,6BACE,AAAO,AAAsB,AAAK,AAAO,AAAK,kDAAF,gBAAM,AAAO,gCAC/D,kFACA,oCACS,cACC,iBACa,wCACV,2CACY,mEAEX,YACJ,kBACE,4BACQ,AAAI,wBAAC,YACb,0EAEG;AAIP,8BAHF,cAAS;AAC+B,gCAAtC,AAAO,AAAsB,yCAAO;AAChB,gCAApB,AAAO,sBAAU;;+KAMpB,AAAO,oCACT,AAAO,kMAI1B,AAAO,AAAsB,AAAK,AAAO,AAAK,kDAAF,gBAAM,AAAO,gCACnD,gCAA4B,wCAAY,cAAW,8EACnD;IAKf;;;IA/FE;IACA;;;EA+FT","file":"search_card.ddc.js"}');
  // Exports:
  return {
    page__category__search_card: search_card
  };
});

//# sourceMappingURL=search_card.ddc.js.map
