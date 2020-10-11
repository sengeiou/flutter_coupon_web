define(['dart_sdk', 'packages/flutter_web/src/foundation/assertions'], function(dart_sdk, packages__flutter_web__src__foundation__assertions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter_web__src__foundation__assertions.src__foundation__change_notifier;
  const current_index = Object.create(dart.library);
  const CT = Object.create(null);
  const currentIndex = dart.privateName(current_index, "CurrentIndexProvice.currentIndex");
  const Object_ChangeNotifier$36 = class Object_ChangeNotifier extends core.Object {};
  (Object_ChangeNotifier$36.new = function() {
    change_notifier.ChangeNotifier.new.call(this);
  }).prototype = Object_ChangeNotifier$36.prototype;
  dart.applyMixin(Object_ChangeNotifier$36, change_notifier.ChangeNotifier);
  current_index.CurrentIndexProvice = class CurrentIndexProvice extends Object_ChangeNotifier$36 {
    get currentIndex() {
      return this[currentIndex];
    }
    set currentIndex(value) {
      this[currentIndex] = value;
    }
    changIdex(nindex) {
      this.currentIndex = nindex;
      this.notifyListeners();
    }
  };
  (current_index.CurrentIndexProvice.new = function() {
    this[currentIndex] = 0;
    current_index.CurrentIndexProvice.__proto__.new.call(this);
    ;
  }).prototype = current_index.CurrentIndexProvice.prototype;
  dart.addTypeTests(current_index.CurrentIndexProvice);
  dart.setMethodSignature(current_index.CurrentIndexProvice, () => ({
    __proto__: dart.getMethods(current_index.CurrentIndexProvice.__proto__),
    changIdex: dart.fnType(dart.dynamic, [core.int])
  }));
  dart.setLibraryUri(current_index.CurrentIndexProvice, "package:hkbook/provide/current_index.dart");
  dart.setFieldSignature(current_index.CurrentIndexProvice, () => ({
    __proto__: dart.getFields(current_index.CurrentIndexProvice.__proto__),
    currentIndex: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/hkbook/provide/current_index", {
    "package:hkbook/provide/current_index.dart": current_index
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["current_index.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAGM;;;;;;cACU;AACS,MAArB,oBAAe,MAAM;AACJ,MAAjB;IACF;;;IAJI,qBAAe;;;EAKrB","file":"current_index.ddc.js"}');
  // Exports:
  return {
    provide__current_index: current_index
  };
});

//# sourceMappingURL=current_index.ddc.js.map
