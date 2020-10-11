define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const container = packages__flutter_web__animation.src__widgets__container;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const text = packages__flutter_web__animation.src__widgets__text;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const ink_well = packages__flutter_web__material.src__material__ink_well;
  const colors = packages__flutter_web__material.src__material__colors;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const ui = packages__flutter_web_ui__ui.ui;
  const recomend = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndintToInkWell = () => (BuildContextAndintToInkWell = dart.constFn(dart.fnType(ink_well.InkWell, [framework.BuildContext, core.int])))();
  let BuildContextAndintToContainer = () => (BuildContextAndintToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext, core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/recomend.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 28,
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
        [_Location_column]: 26,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/recomend.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 26,
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
        [_Location_column]: 17,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/recomend.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/recomend.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/recomend.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/recomend.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 17,
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
        [_Location_column]: 16,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/recomend.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 42,
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
        [_Location_column]: 16,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/recomend.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "separatorBuilder",
        [_Location_column]: 7,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/recomend.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 51,
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
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/category/recomend.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C4;
  let C3;
  let C9;
  let C8;
  let C7;
  let C12;
  let C11;
  let C10;
  let C15;
  let C14;
  let C13;
  let C18;
  let C19;
  let C20;
  let C17;
  let C16;
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
  let C33;
  let C34;
  let C30;
  let C29;
  let C37;
  let C38;
  let C36;
  let C35;
  const items$ = dart.privateName(recomend, "RecomendListWidget.items");
  const onItemTap$ = dart.privateName(recomend, "RecomendListWidget.onItemTap");
  recomend.RecomendListWidget = class RecomendListWidget extends framework.StatelessWidget {
    get items() {
      return this[items$];
    }
    set items(value) {
      super.items = value;
    }
    get onItemTap() {
      return this[onItemTap$];
    }
    set onItemTap(value) {
      super.onItemTap = value;
    }
    build(context) {
      let listView = new scroll_view.ListView.separated({padding: new edge_insets.EdgeInsets.symmetric({horizontal: 6.0}), itemCount: this.items[$length], itemBuilder: dart.fn((context, i) => new ink_well.InkWell.new({onTap: dart.fn(() => this.onItemTap(this.items[$_get](i)), VoidTovoid()), child: new container.Container.new({height: 42.0, alignment: alignment.Alignment.centerLeft, child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({width: 4.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new basic.Expanded.new({child: new text.Text.new(this.items[$_get](i), {style: new text_style.TextStyle.new({fontSize: 12.0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new basic.SizedBox.new({width: 4.0, $creationLocationd_0dea112b090073317d4: C10 || CT.C10})]), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), BuildContextAndintToInkWell()), separatorBuilder: dart.fn((context, i) => new container.Container.new({height: 1.0, color: colors.Colors.grey._get(200), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), BuildContextAndintToContainer()), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
      return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.only({topLeft: new ui.Radius.circular(16.0), topRight: new ui.Radius.circular(16.0)}), color: colors.Colors.white}), child: listView, $creationLocationd_0dea112b090073317d4: C35 || CT.C35});
    }
  };
  (recomend.RecomendListWidget.new = function(items, opts) {
    let onItemTap = opts && 'onItemTap' in opts ? opts.onItemTap : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[items$] = items;
    this[onItemTap$] = onItemTap;
    recomend.RecomendListWidget.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = recomend.RecomendListWidget.prototype;
  dart.addTypeTests(recomend.RecomendListWidget);
  dart.setMethodSignature(recomend.RecomendListWidget, () => ({
    __proto__: dart.getMethods(recomend.RecomendListWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(recomend.RecomendListWidget, "package:hkbook/page/category/recomend.dart");
  dart.setFieldSignature(recomend.RecomendListWidget, () => ({
    __proto__: dart.getFields(recomend.RecomendListWidget.__proto__),
    items: dart.finalFieldType(core.List$(core.String)),
    onItemTap: dart.finalFieldType(dart.fnType(dart.void, [core.String]))
  }));
  dart.trackLibraries("packages/hkbook/page/category/recomend", {
    "package:hkbook/page/category/recomend.dart": recomend
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["recomend.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGqB;;;;;;IACQ;;;;;;UAKD;AACpB,qBAAoB,6CACF,kDAAsB,kBAC/B,AAAM,kCACJ,SAAc,SAAa,MAC/B,iCACE,cAAM,eAAU,AAAK,kBAAC,CAAC,0BACvB,qCACG,iBACa,uCACd,6BACa,sBAChB,+BACS,4DAET,+BACS,kBACL,AAAK,kBAAC,CAAC,WACA,wCAAoB,sHAG/B,+BACS,6RAOD,SAAc,SAAa,MACpC,qCACG,YACM,AAAI,wBAAC;AAKzB,YAAO,0CACS,oDACmB,8CAAqB,uBAAS,iBAAsB,uBAAS,gBAC1E,8BACX,QAAQ;IACrB;;8CA7CwB;QAAa;;IAAb;IAAa;AAArC;;EAAgD","file":"recomend.ddc.js"}');
  // Exports:
  return {
    page__category__recomend: recomend
  };
});

//# sourceMappingURL=recomend.ddc.js.map
