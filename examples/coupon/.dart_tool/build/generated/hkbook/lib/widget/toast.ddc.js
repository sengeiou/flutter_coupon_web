define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation', 'packages/flutter_web/material'], function(dart_sdk, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui, packages__flutter_web__animation, packages__flutter_web__material) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const ui = packages__flutter_web_ui__ui.ui;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const text$ = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const overlay = packages__flutter_web__animation.src__widgets__overlay;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const material = packages__flutter_web__material.src__material__material;
  const colors = packages__flutter_web__material.src__material__colors;
  const toast = Object.create(dart.library);
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294967295.0
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 14,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C1 || CT.C1,
        [TextStyle_inherit]: true
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 5,
        [EdgeInsets__right]: 10,
        [EdgeInsets__top]: 5,
        [EdgeInsets__left]: 10
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/toast.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 14,
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
        [_Location_column]: 16,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/toast.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/toast.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/toast.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 2000000
      });
    }
  });
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  const Color__value = dart.privateName(ui, "Color._value");
  let C1;
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C0;
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C2;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C5;
  let C6;
  let C4;
  let C3;
  let C9;
  let C10;
  let C11;
  let C8;
  let C7;
  let C14;
  let C13;
  let C12;
  let C17;
  let C16;
  let C15;
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C18;
  toast.ToastHelper = class ToastHelper extends core.Object {
    static showToast(context, text) {
      let style = C0 || CT.C0;
      let widget = new basic.Center.new({child: new material.Material.new({child: new container.Container.new({color: colors.Colors.black.withOpacity(0.5), padding: C2 || CT.C2, child: new text$.Text.new(text, {style: style, $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
      let entry = new overlay.OverlayEntry.new({builder: dart.fn(_ => widget, BuildContextToWidget())});
      overlay.Overlay.of(context).insert(entry);
      async.Timer.new(C18 || CT.C18, dart.fn(() => {
        let t0;
        t0 = entry;
        t0 === null ? null : t0.remove();
      }, VoidToNull()));
    }
  };
  (toast.ToastHelper.new = function() {
    ;
  }).prototype = toast.ToastHelper.prototype;
  dart.addTypeTests(toast.ToastHelper);
  dart.setLibraryUri(toast.ToastHelper, "package:hkbook/widget/toast.dart");
  dart.trackLibraries("packages/hkbook/widget/toast", {
    "package:hkbook/widget/toast.dart": toast
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["toast.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;qBAKqC,SAAgB;AAC3C;AAEC,mBAAS,6BACP,kCACE,oCACS,AAAM,gCAAY,mCAEzB,mBACL,IAAI,UACG,KAAK;AAKhB,kBAAQ,uCACD,QAAC,KAAM,MAAM;AAGS,MAAzB,AAAY,mBAAT,OAAO,SAAS,KAAK;AAI9B,MAFF,+BAAkC;;AACjB,aAAf,KAAK;sBAAL,OAAO;;IAEX;;;;EACF","file":"toast.ddc.js"}');
  // Exports:
  return {
    widget__toast: toast
  };
});

//# sourceMappingURL=toast.ddc.js.map
