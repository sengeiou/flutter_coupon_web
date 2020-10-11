define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const category_model = Object.create(dart.library);
  const $_get = dartx._get;
  const $add = dartx.add;
  const $_set = dartx._set;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfData = () => (JSArrayOfData = dart.constFn(_interceptors.JSArray$(category_model.Data)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let LinkedMapOfString$dynamic = () => (LinkedMapOfString$dynamic = dart.constFn(_js_helper.LinkedMap$(core.String, dart.dynamic)))();
  let DataToMapOfString$dynamic = () => (DataToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [category_model.Data])))();
  let JSArrayOfSubcategories = () => (JSArrayOfSubcategories = dart.constFn(_interceptors.JSArray$(category_model.Subcategories)))();
  let SubcategoriesToMapOfString$dynamic = () => (SubcategoriesToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [category_model.Subcategories])))();
  const CT = Object.create(null);
  const statusCode$ = dart.privateName(category_model, "CategoryModel.statusCode");
  const message$ = dart.privateName(category_model, "CategoryModel.message");
  const data$ = dart.privateName(category_model, "CategoryModel.data");
  category_model.CategoryModel = class CategoryModel extends core.Object {
    get statusCode() {
      return this[statusCode$];
    }
    set statusCode(value) {
      this[statusCode$] = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      this[message$] = value;
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      this[data$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("status_code", this.statusCode);
      data[$_set]("message", this.message);
      if (this.data != null) {
        data[$_set]("data", this.data[$map](MapOfString$dynamic(), dart.fn(v => v.toJson(), DataToMapOfString$dynamic()))[$toList]());
      }
      return data;
    }
  };
  (category_model.CategoryModel.new = function(opts) {
    let statusCode = opts && 'statusCode' in opts ? opts.statusCode : null;
    let message = opts && 'message' in opts ? opts.message : null;
    let data = opts && 'data' in opts ? opts.data : null;
    this[statusCode$] = statusCode;
    this[message$] = message;
    this[data$] = data;
    ;
  }).prototype = category_model.CategoryModel.prototype;
  (category_model.CategoryModel.fromJson = function(json) {
    this[data$] = null;
    this[message$] = null;
    this[statusCode$] = null;
    this.statusCode = core.String._check(json[$_get]("status_code"));
    this.message = core.String._check(json[$_get]("message"));
    if (json[$_get]("data") != null) {
      this.data = JSArrayOfData().of([]);
      dart.dsend(json[$_get]("data"), 'forEach', [dart.fn(v => {
          this.data[$add](new category_model.Data.fromJson(MapOfString$dynamic()._check(v)));
        }, dynamicToNull())]);
    }
  }).prototype = category_model.CategoryModel.prototype;
  dart.addTypeTests(category_model.CategoryModel);
  dart.setMethodSignature(category_model.CategoryModel, () => ({
    __proto__: dart.getMethods(category_model.CategoryModel.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(category_model.CategoryModel, "package:hkbook/model/category_model.dart");
  dart.setFieldSignature(category_model.CategoryModel, () => ({
    __proto__: dart.getFields(category_model.CategoryModel.__proto__),
    statusCode: dart.fieldType(core.String),
    message: dart.fieldType(core.String),
    data: dart.fieldType(core.List$(category_model.Data))
  }));
  const id$ = dart.privateName(category_model, "Data.id");
  const iconUrl$ = dart.privateName(category_model, "Data.iconUrl");
  const name$ = dart.privateName(category_model, "Data.name");
  const order$ = dart.privateName(category_model, "Data.order");
  const status$ = dart.privateName(category_model, "Data.status");
  const itemsCount$ = dart.privateName(category_model, "Data.itemsCount");
  const createdAt$ = dart.privateName(category_model, "Data.createdAt");
  const updatedAt$ = dart.privateName(category_model, "Data.updatedAt");
  const deletedAt$ = dart.privateName(category_model, "Data.deletedAt");
  const subcategories$ = dart.privateName(category_model, "Data.subcategories");
  category_model.Data = class Data extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    get iconUrl() {
      return this[iconUrl$];
    }
    set iconUrl(value) {
      this[iconUrl$] = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get order() {
      return this[order$];
    }
    set order(value) {
      this[order$] = value;
    }
    get status() {
      return this[status$];
    }
    set status(value) {
      this[status$] = value;
    }
    get itemsCount() {
      return this[itemsCount$];
    }
    set itemsCount(value) {
      this[itemsCount$] = value;
    }
    get createdAt() {
      return this[createdAt$];
    }
    set createdAt(value) {
      this[createdAt$] = value;
    }
    get updatedAt() {
      return this[updatedAt$];
    }
    set updatedAt(value) {
      this[updatedAt$] = value;
    }
    get deletedAt() {
      return this[deletedAt$];
    }
    set deletedAt(value) {
      this[deletedAt$] = value;
    }
    get subcategories() {
      return this[subcategories$];
    }
    set subcategories(value) {
      this[subcategories$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("id", this.id);
      data[$_set]("icon_url", this.iconUrl);
      data[$_set]("name", this.name);
      data[$_set]("order", this.order);
      data[$_set]("status", this.status);
      data[$_set]("items_count", this.itemsCount);
      data[$_set]("created_at", this.createdAt);
      data[$_set]("updated_at", this.updatedAt);
      data[$_set]("deleted_at", this.deletedAt);
      if (this.subcategories != null) {
        data[$_set]("subcategories", this.subcategories[$map](MapOfString$dynamic(), dart.fn(v => v.toJson(), SubcategoriesToMapOfString$dynamic()))[$toList]());
      }
      return data;
    }
  };
  (category_model.Data.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let iconUrl = opts && 'iconUrl' in opts ? opts.iconUrl : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let order = opts && 'order' in opts ? opts.order : null;
    let status = opts && 'status' in opts ? opts.status : null;
    let itemsCount = opts && 'itemsCount' in opts ? opts.itemsCount : null;
    let createdAt = opts && 'createdAt' in opts ? opts.createdAt : null;
    let updatedAt = opts && 'updatedAt' in opts ? opts.updatedAt : null;
    let deletedAt = opts && 'deletedAt' in opts ? opts.deletedAt : null;
    let subcategories = opts && 'subcategories' in opts ? opts.subcategories : null;
    this[id$] = id;
    this[iconUrl$] = iconUrl;
    this[name$] = name;
    this[order$] = order;
    this[status$] = status;
    this[itemsCount$] = itemsCount;
    this[createdAt$] = createdAt;
    this[updatedAt$] = updatedAt;
    this[deletedAt$] = deletedAt;
    this[subcategories$] = subcategories;
    ;
  }).prototype = category_model.Data.prototype;
  (category_model.Data.fromJson = function(json) {
    this[subcategories$] = null;
    this[deletedAt$] = null;
    this[updatedAt$] = null;
    this[createdAt$] = null;
    this[itemsCount$] = null;
    this[status$] = null;
    this[order$] = null;
    this[name$] = null;
    this[iconUrl$] = null;
    this[id$] = null;
    this.id = core.int._check(json[$_get]("id"));
    this.iconUrl = core.String._check(json[$_get]("icon_url"));
    this.name = core.String._check(json[$_get]("name"));
    this.order = core.int._check(json[$_get]("order"));
    this.status = core.int._check(json[$_get]("status"));
    this.itemsCount = core.String._check(json[$_get]("items_count"));
    this.createdAt = core.String._check(json[$_get]("created_at"));
    this.updatedAt = core.String._check(json[$_get]("updated_at"));
    this.deletedAt = core.String._check(json[$_get]("deleted_at"));
    if (json[$_get]("subcategories") != null) {
      this.subcategories = JSArrayOfSubcategories().of([]);
      dart.dsend(json[$_get]("subcategories"), 'forEach', [dart.fn(v => {
          this.subcategories[$add](new category_model.Subcategories.fromJson(MapOfString$dynamic()._check(v)));
        }, dynamicToNull())]);
    }
  }).prototype = category_model.Data.prototype;
  dart.addTypeTests(category_model.Data);
  dart.setMethodSignature(category_model.Data, () => ({
    __proto__: dart.getMethods(category_model.Data.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(category_model.Data, "package:hkbook/model/category_model.dart");
  dart.setFieldSignature(category_model.Data, () => ({
    __proto__: dart.getFields(category_model.Data.__proto__),
    id: dart.fieldType(core.int),
    iconUrl: dart.fieldType(core.String),
    name: dart.fieldType(core.String),
    order: dart.fieldType(core.int),
    status: dart.fieldType(core.int),
    itemsCount: dart.fieldType(core.String),
    createdAt: dart.fieldType(core.String),
    updatedAt: dart.fieldType(core.String),
    deletedAt: dart.fieldType(core.String),
    subcategories: dart.fieldType(core.List$(category_model.Subcategories))
  }));
  const id$0 = dart.privateName(category_model, "Subcategories.id");
  const parentId$ = dart.privateName(category_model, "Subcategories.parentId");
  const iconUrl$0 = dart.privateName(category_model, "Subcategories.iconUrl");
  const name$0 = dart.privateName(category_model, "Subcategories.name");
  const order$0 = dart.privateName(category_model, "Subcategories.order");
  const status$0 = dart.privateName(category_model, "Subcategories.status");
  const itemsCount$0 = dart.privateName(category_model, "Subcategories.itemsCount");
  const createdAt$0 = dart.privateName(category_model, "Subcategories.createdAt");
  const updatedAt$0 = dart.privateName(category_model, "Subcategories.updatedAt");
  const deletedAt$0 = dart.privateName(category_model, "Subcategories.deletedAt");
  category_model.Subcategories = class Subcategories extends core.Object {
    get id() {
      return this[id$0];
    }
    set id(value) {
      this[id$0] = value;
    }
    get parentId() {
      return this[parentId$];
    }
    set parentId(value) {
      this[parentId$] = value;
    }
    get iconUrl() {
      return this[iconUrl$0];
    }
    set iconUrl(value) {
      this[iconUrl$0] = value;
    }
    get name() {
      return this[name$0];
    }
    set name(value) {
      this[name$0] = value;
    }
    get order() {
      return this[order$0];
    }
    set order(value) {
      this[order$0] = value;
    }
    get status() {
      return this[status$0];
    }
    set status(value) {
      this[status$0] = value;
    }
    get itemsCount() {
      return this[itemsCount$0];
    }
    set itemsCount(value) {
      this[itemsCount$0] = value;
    }
    get createdAt() {
      return this[createdAt$0];
    }
    set createdAt(value) {
      this[createdAt$0] = value;
    }
    get updatedAt() {
      return this[updatedAt$0];
    }
    set updatedAt(value) {
      this[updatedAt$0] = value;
    }
    get deletedAt() {
      return this[deletedAt$0];
    }
    set deletedAt(value) {
      this[deletedAt$0] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("id", this.id);
      data[$_set]("parent_id", this.parentId);
      data[$_set]("icon_url", this.iconUrl);
      data[$_set]("name", this.name);
      data[$_set]("order", this.order);
      data[$_set]("status", this.status);
      data[$_set]("items_count", this.itemsCount);
      data[$_set]("created_at", this.createdAt);
      data[$_set]("updated_at", this.updatedAt);
      data[$_set]("deleted_at", this.deletedAt);
      return data;
    }
  };
  (category_model.Subcategories.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let parentId = opts && 'parentId' in opts ? opts.parentId : null;
    let iconUrl = opts && 'iconUrl' in opts ? opts.iconUrl : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let order = opts && 'order' in opts ? opts.order : null;
    let status = opts && 'status' in opts ? opts.status : null;
    let itemsCount = opts && 'itemsCount' in opts ? opts.itemsCount : null;
    let createdAt = opts && 'createdAt' in opts ? opts.createdAt : null;
    let updatedAt = opts && 'updatedAt' in opts ? opts.updatedAt : null;
    let deletedAt = opts && 'deletedAt' in opts ? opts.deletedAt : null;
    this[id$0] = id;
    this[parentId$] = parentId;
    this[iconUrl$0] = iconUrl;
    this[name$0] = name;
    this[order$0] = order;
    this[status$0] = status;
    this[itemsCount$0] = itemsCount;
    this[createdAt$0] = createdAt;
    this[updatedAt$0] = updatedAt;
    this[deletedAt$0] = deletedAt;
    ;
  }).prototype = category_model.Subcategories.prototype;
  (category_model.Subcategories.fromJson = function(json) {
    this[deletedAt$0] = null;
    this[updatedAt$0] = null;
    this[createdAt$0] = null;
    this[itemsCount$0] = null;
    this[status$0] = null;
    this[order$0] = null;
    this[name$0] = null;
    this[iconUrl$0] = null;
    this[parentId$] = null;
    this[id$0] = null;
    this.id = core.int._check(json[$_get]("id"));
    this.parentId = core.int._check(json[$_get]("parent_id"));
    this.iconUrl = core.String._check(json[$_get]("icon_url"));
    this.name = core.String._check(json[$_get]("name"));
    this.order = core.int._check(json[$_get]("order"));
    this.status = core.int._check(json[$_get]("status"));
    this.itemsCount = core.int._check(json[$_get]("items_count"));
    this.createdAt = core.String._check(json[$_get]("created_at"));
    this.updatedAt = core.String._check(json[$_get]("updated_at"));
    this.deletedAt = core.String._check(json[$_get]("deleted_at"));
  }).prototype = category_model.Subcategories.prototype;
  dart.addTypeTests(category_model.Subcategories);
  dart.setMethodSignature(category_model.Subcategories, () => ({
    __proto__: dart.getMethods(category_model.Subcategories.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(category_model.Subcategories, "package:hkbook/model/category_model.dart");
  dart.setFieldSignature(category_model.Subcategories, () => ({
    __proto__: dart.getFields(category_model.Subcategories.__proto__),
    id: dart.fieldType(core.int),
    parentId: dart.fieldType(core.int),
    iconUrl: dart.fieldType(core.String),
    name: dart.fieldType(core.String),
    order: dart.fieldType(core.int),
    status: dart.fieldType(core.int),
    itemsCount: dart.fieldType(core.int),
    createdAt: dart.fieldType(core.String),
    updatedAt: dart.fieldType(core.String),
    deletedAt: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/hkbook/model/category_model", {
    "package:hkbook/model/category_model.dart": category_model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["category_model.dart"],"names":[],"mappings":"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","file":"category_model.ddc.js"}');
  // Exports:
  return {
    model__category_model: category_model
  };
});

//# sourceMappingURL=category_model.ddc.js.map
