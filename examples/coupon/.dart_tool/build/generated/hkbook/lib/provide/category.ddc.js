define(['dart_sdk', 'packages/hkbook/model/category_model', 'packages/flutter_web/src/foundation/assertions'], function(dart_sdk, packages__hkbook__model__category_model, packages__flutter_web__src__foundation__assertions) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const category_model = packages__hkbook__model__category_model.model__category_model;
  const change_notifier = packages__flutter_web__src__foundation__assertions.src__foundation__change_notifier;
  const category = Object.create(dart.library);
  let JSArrayOfSubcategories = () => (JSArrayOfSubcategories = dart.constFn(_interceptors.JSArray$(category_model.Subcategories)))();
  let ListOfSubcategories = () => (ListOfSubcategories = dart.constFn(core.List$(category_model.Subcategories)))();
  const CT = Object.create(null);
  const cl = dart.privateName(category, "ChildCategory.cl");
  const Object_ChangeNotifier$36 = class Object_ChangeNotifier extends core.Object {};
  (Object_ChangeNotifier$36.new = function() {
    change_notifier.ChangeNotifier.new.call(this);
  }).prototype = Object_ChangeNotifier$36.prototype;
  dart.applyMixin(Object_ChangeNotifier$36, change_notifier.ChangeNotifier);
  category.ChildCategory = class ChildCategory extends Object_ChangeNotifier$36 {
    get cl() {
      return this[cl];
    }
    set cl(value) {
      this[cl] = value;
    }
    getChildCategory(list) {
      this.cl = ListOfSubcategories()._check(list);
      this.notifyListeners();
    }
  };
  (category.ChildCategory.new = function() {
    this[cl] = JSArrayOfSubcategories().of([]);
    category.ChildCategory.__proto__.new.call(this);
    ;
  }).prototype = category.ChildCategory.prototype;
  dart.addTypeTests(category.ChildCategory);
  dart.setMethodSignature(category.ChildCategory, () => ({
    __proto__: dart.getMethods(category.ChildCategory.__proto__),
    getChildCategory: dart.fnType(dart.dynamic, [core.List])
  }));
  dart.setLibraryUri(category.ChildCategory, "package:hkbook/provide/category.dart");
  dart.setFieldSignature(category.ChildCategory, () => ({
    __proto__: dart.getFields(category.ChildCategory.__proto__),
    cl: dart.fieldType(core.List$(category_model.Subcategories))
  }));
  dart.trackLibraries("packages/hkbook/provide/category", {
    "package:hkbook/provide/category.dart": category
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["category.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAKsB;;;;;;qBACE;AACX,gBAAT,6BAAK,IAAI;AACQ,MAAjB;IACF;;;IAJoB,WAAK;;;EAM3B","file":"category.ddc.js"}');
  // Exports:
  return {
    provide__category: category
  };
});

//# sourceMappingURL=category.ddc.js.map
