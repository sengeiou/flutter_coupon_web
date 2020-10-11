define(['dart_sdk', 'packages/flutter_web_ui/ui'], function(dart_sdk, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui = packages__flutter_web_ui__ui.ui;
  const sq_color = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294046449.0
      });
    }
  });
  const Color__value = dart.privateName(ui, "Color._value");
  let C0;
  sq_color.SQColor = class SQColor extends core.Object {};
  (sq_color.SQColor.new = function() {
    ;
  }).prototype = sq_color.SQColor.prototype;
  dart.addTypeTests(sq_color.SQColor);
  dart.setLibraryUri(sq_color.SQColor, "package:hkbook/app/sq_color.dart");
  dart.defineLazy(sq_color.SQColor, {
    /*sq_color.SQColor.primary*/get primary() {
      return new ui.Color.new(4294069555);
    },
    set primary(_) {},
    /*sq_color.SQColor.secondary*/get secondary() {
      return new ui.Color.new(4283555526);
    },
    set secondary(_) {},
    /*sq_color.SQColor.red*/get red() {
      return new ui.Color.new(4294912837);
    },
    set red(_) {},
    /*sq_color.SQColor.orange*/get orange() {
      return new ui.Color.new(4294341220);
    },
    set orange(_) {},
    /*sq_color.SQColor.white*/get white() {
      return new ui.Color.new(4294967295);
    },
    set white(_) {},
    /*sq_color.SQColor.paper*/get paper() {
      return new ui.Color.new(4294309365);
    },
    set paper(_) {},
    /*sq_color.SQColor.lightGray*/get lightGray() {
      return new ui.Color.new(4293848814);
    },
    set lightGray(_) {},
    /*sq_color.SQColor.darkGray*/get darkGray() {
      return new ui.Color.new(4281545523);
    },
    set darkGray(_) {},
    /*sq_color.SQColor.gray*/get gray() {
      return new ui.Color.new(4287137928);
    },
    set gray(_) {},
    /*sq_color.SQColor.blue*/get blue() {
      return new ui.Color.new(4281764095);
    },
    set blue(_) {},
    /*sq_color.SQColor.golden*/get golden() {
      return new ui.Color.new(4287330657);
    },
    set golden(_) {},
    /*sq_color.SQColor.mainBackgroundColor*/get mainBackgroundColor() {
      return C0 || CT.C0;
    }
  });
  dart.trackLibraries("packages/hkbook/app/sq_color", {
    "package:hkbook/app/sq_color.dart": sq_color
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sq_color.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;EAgBA;;;;MAbe,wBAAO;YAAG,kBAAM;;;MAChB,0BAAS;YAAG,kBAAM;;;MAClB,oBAAG;YAAG,kBAAM;;;MACZ,uBAAM;YAAG,kBAAM;;;MACf,sBAAK;YAAG,kBAAM;;;MACd,sBAAK;YAAG,kBAAM;;;MACd,0BAAS;YAAG,kBAAM;;;MAClB,yBAAQ;YAAG,kBAAM;;;MACjB,qBAAI;YAAG,kBAAM;;;MACb,qBAAI;YAAG,kBAAM;;;MACb,uBAAM;YAAG,kBAAM;;;MACT,oCAAmB","file":"sq_color.ddc.js"}');
  // Exports:
  return {
    app__sq_color: sq_color
  };
});

//# sourceMappingURL=sq_color.ddc.js.map
