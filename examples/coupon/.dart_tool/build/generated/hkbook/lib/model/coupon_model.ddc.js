define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const coupon_model = Object.create(dart.library);
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $add = dartx.add;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let LinkedMapOfString$dynamic = () => (LinkedMapOfString$dynamic = dart.constFn(_js_helper.LinkedMap$(core.String, dart.dynamic)))();
  let JSArrayOfMapData = () => (JSArrayOfMapData = dart.constFn(_interceptors.JSArray$(coupon_model.MapData)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let MapDataToMapOfString$dynamic = () => (MapDataToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [coupon_model.MapData])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  const CT = Object.create(null);
  const tbkDgMaterialOptionalResponse$ = dart.privateName(coupon_model, "CounponModel.tbkDgMaterialOptionalResponse");
  coupon_model.CounponModel = class CounponModel extends core.Object {
    get tbkDgMaterialOptionalResponse() {
      return this[tbkDgMaterialOptionalResponse$];
    }
    set tbkDgMaterialOptionalResponse(value) {
      this[tbkDgMaterialOptionalResponse$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      if (this.tbkDgMaterialOptionalResponse != null) {
        data[$_set]("tbk_dg_material_optional_response", this.tbkDgMaterialOptionalResponse.toJson());
      }
      return data;
    }
  };
  (coupon_model.CounponModel.new = function(opts) {
    let tbkDgMaterialOptionalResponse = opts && 'tbkDgMaterialOptionalResponse' in opts ? opts.tbkDgMaterialOptionalResponse : null;
    this[tbkDgMaterialOptionalResponse$] = tbkDgMaterialOptionalResponse;
    ;
  }).prototype = coupon_model.CounponModel.prototype;
  (coupon_model.CounponModel.fromJson = function(json) {
    this[tbkDgMaterialOptionalResponse$] = null;
    this.tbkDgMaterialOptionalResponse = json[$_get]("tbk_dg_material_optional_response") != null ? new coupon_model.TbkDgMaterialOptionalResponse.fromJson(MapOfString$dynamic()._check(json[$_get]("tbk_dg_material_optional_response"))) : null;
  }).prototype = coupon_model.CounponModel.prototype;
  dart.addTypeTests(coupon_model.CounponModel);
  dart.setMethodSignature(coupon_model.CounponModel, () => ({
    __proto__: dart.getMethods(coupon_model.CounponModel.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(coupon_model.CounponModel, "package:hkbook/model/coupon_model.dart");
  dart.setFieldSignature(coupon_model.CounponModel, () => ({
    __proto__: dart.getFields(coupon_model.CounponModel.__proto__),
    tbkDgMaterialOptionalResponse: dart.fieldType(coupon_model.TbkDgMaterialOptionalResponse)
  }));
  const resultList$ = dart.privateName(coupon_model, "TbkDgMaterialOptionalResponse.resultList");
  const requestId$ = dart.privateName(coupon_model, "TbkDgMaterialOptionalResponse.requestId");
  coupon_model.TbkDgMaterialOptionalResponse = class TbkDgMaterialOptionalResponse extends core.Object {
    get resultList() {
      return this[resultList$];
    }
    set resultList(value) {
      this[resultList$] = value;
    }
    get requestId() {
      return this[requestId$];
    }
    set requestId(value) {
      this[requestId$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      if (this.resultList != null) {
        data[$_set]("result_list", this.resultList.toJson());
      }
      data[$_set]("request_id", this.requestId);
      return data;
    }
  };
  (coupon_model.TbkDgMaterialOptionalResponse.new = function(opts) {
    let resultList = opts && 'resultList' in opts ? opts.resultList : null;
    let requestId = opts && 'requestId' in opts ? opts.requestId : null;
    this[resultList$] = resultList;
    this[requestId$] = requestId;
    ;
  }).prototype = coupon_model.TbkDgMaterialOptionalResponse.prototype;
  (coupon_model.TbkDgMaterialOptionalResponse.fromJson = function(json) {
    this[requestId$] = null;
    this[resultList$] = null;
    this.resultList = json[$_get]("result_list") != null ? new coupon_model.ResultList.fromJson(MapOfString$dynamic()._check(json[$_get]("result_list"))) : null;
    this.requestId = core.String._check(json[$_get]("request_id"));
  }).prototype = coupon_model.TbkDgMaterialOptionalResponse.prototype;
  dart.addTypeTests(coupon_model.TbkDgMaterialOptionalResponse);
  dart.setMethodSignature(coupon_model.TbkDgMaterialOptionalResponse, () => ({
    __proto__: dart.getMethods(coupon_model.TbkDgMaterialOptionalResponse.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(coupon_model.TbkDgMaterialOptionalResponse, "package:hkbook/model/coupon_model.dart");
  dart.setFieldSignature(coupon_model.TbkDgMaterialOptionalResponse, () => ({
    __proto__: dart.getFields(coupon_model.TbkDgMaterialOptionalResponse.__proto__),
    resultList: dart.fieldType(coupon_model.ResultList),
    requestId: dart.fieldType(core.String)
  }));
  const mapData$ = dart.privateName(coupon_model, "ResultList.mapData");
  coupon_model.ResultList = class ResultList extends core.Object {
    get mapData() {
      return this[mapData$];
    }
    set mapData(value) {
      this[mapData$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      if (this.mapData != null) {
        data[$_set]("map_data", this.mapData[$map](MapOfString$dynamic(), dart.fn(v => v.toJson(), MapDataToMapOfString$dynamic()))[$toList]());
      }
      return data;
    }
  };
  (coupon_model.ResultList.new = function(opts) {
    let mapData = opts && 'mapData' in opts ? opts.mapData : null;
    this[mapData$] = mapData;
    ;
  }).prototype = coupon_model.ResultList.prototype;
  (coupon_model.ResultList.fromJson = function(json) {
    this[mapData$] = null;
    if (json[$_get]("map_data") != null) {
      this.mapData = JSArrayOfMapData().of([]);
      dart.dsend(json[$_get]("map_data"), 'forEach', [dart.fn(v => {
          this.mapData[$add](new coupon_model.MapData.fromJson(MapOfString$dynamic()._check(v)));
        }, dynamicToNull())]);
    }
  }).prototype = coupon_model.ResultList.prototype;
  dart.addTypeTests(coupon_model.ResultList);
  dart.setMethodSignature(coupon_model.ResultList, () => ({
    __proto__: dart.getMethods(coupon_model.ResultList.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(coupon_model.ResultList, "package:hkbook/model/coupon_model.dart");
  dart.setFieldSignature(coupon_model.ResultList, () => ({
    __proto__: dart.getFields(coupon_model.ResultList.__proto__),
    mapData: dart.fieldType(core.List$(coupon_model.MapData))
  }));
  const categoryId$ = dart.privateName(coupon_model, "MapData.categoryId");
  const categoryName$ = dart.privateName(coupon_model, "MapData.categoryName");
  const commissionRate$ = dart.privateName(coupon_model, "MapData.commissionRate");
  const couponAmount$ = dart.privateName(coupon_model, "MapData.couponAmount");
  const couponEndTime$ = dart.privateName(coupon_model, "MapData.couponEndTime");
  const couponInfo$ = dart.privateName(coupon_model, "MapData.couponInfo");
  const couponRemainCount$ = dart.privateName(coupon_model, "MapData.couponRemainCount");
  const couponShareUrl$ = dart.privateName(coupon_model, "MapData.couponShareUrl");
  const couponStartTime$ = dart.privateName(coupon_model, "MapData.couponStartTime");
  const couponTotalCount$ = dart.privateName(coupon_model, "MapData.couponTotalCount");
  const itemDescription$ = dart.privateName(coupon_model, "MapData.itemDescription");
  const itemId$ = dart.privateName(coupon_model, "MapData.itemId");
  const itemUrl$ = dart.privateName(coupon_model, "MapData.itemUrl");
  const numIid$ = dart.privateName(coupon_model, "MapData.numIid");
  const pictUrl$ = dart.privateName(coupon_model, "MapData.pictUrl");
  const sellerId$ = dart.privateName(coupon_model, "MapData.sellerId");
  const shopTitle$ = dart.privateName(coupon_model, "MapData.shopTitle");
  const smallImages$ = dart.privateName(coupon_model, "MapData.smallImages");
  const title$ = dart.privateName(coupon_model, "MapData.title");
  const url$ = dart.privateName(coupon_model, "MapData.url");
  const userType$ = dart.privateName(coupon_model, "MapData.userType");
  const volume$ = dart.privateName(coupon_model, "MapData.volume");
  const zkFinalPrice$ = dart.privateName(coupon_model, "MapData.zkFinalPrice");
  const isExpand = dart.privateName(coupon_model, "MapData.isExpand");
  coupon_model.MapData = class MapData extends core.Object {
    get categoryId() {
      return this[categoryId$];
    }
    set categoryId(value) {
      this[categoryId$] = value;
    }
    get categoryName() {
      return this[categoryName$];
    }
    set categoryName(value) {
      this[categoryName$] = value;
    }
    get commissionRate() {
      return this[commissionRate$];
    }
    set commissionRate(value) {
      this[commissionRate$] = value;
    }
    get couponAmount() {
      return this[couponAmount$];
    }
    set couponAmount(value) {
      this[couponAmount$] = value;
    }
    get couponEndTime() {
      return this[couponEndTime$];
    }
    set couponEndTime(value) {
      this[couponEndTime$] = value;
    }
    get couponInfo() {
      return this[couponInfo$];
    }
    set couponInfo(value) {
      this[couponInfo$] = value;
    }
    get couponRemainCount() {
      return this[couponRemainCount$];
    }
    set couponRemainCount(value) {
      this[couponRemainCount$] = value;
    }
    get couponShareUrl() {
      return this[couponShareUrl$];
    }
    set couponShareUrl(value) {
      this[couponShareUrl$] = value;
    }
    get couponStartTime() {
      return this[couponStartTime$];
    }
    set couponStartTime(value) {
      this[couponStartTime$] = value;
    }
    get couponTotalCount() {
      return this[couponTotalCount$];
    }
    set couponTotalCount(value) {
      this[couponTotalCount$] = value;
    }
    get itemDescription() {
      return this[itemDescription$];
    }
    set itemDescription(value) {
      this[itemDescription$] = value;
    }
    get itemId() {
      return this[itemId$];
    }
    set itemId(value) {
      this[itemId$] = value;
    }
    get itemUrl() {
      return this[itemUrl$];
    }
    set itemUrl(value) {
      this[itemUrl$] = value;
    }
    get numIid() {
      return this[numIid$];
    }
    set numIid(value) {
      this[numIid$] = value;
    }
    get pictUrl() {
      return this[pictUrl$];
    }
    set pictUrl(value) {
      this[pictUrl$] = value;
    }
    get sellerId() {
      return this[sellerId$];
    }
    set sellerId(value) {
      this[sellerId$] = value;
    }
    get shopTitle() {
      return this[shopTitle$];
    }
    set shopTitle(value) {
      this[shopTitle$] = value;
    }
    get smallImages() {
      return this[smallImages$];
    }
    set smallImages(value) {
      this[smallImages$] = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      this[url$] = value;
    }
    get userType() {
      return this[userType$];
    }
    set userType(value) {
      this[userType$] = value;
    }
    get volume() {
      return this[volume$];
    }
    set volume(value) {
      this[volume$] = value;
    }
    get zkFinalPrice() {
      return this[zkFinalPrice$];
    }
    set zkFinalPrice(value) {
      this[zkFinalPrice$] = value;
    }
    get isExpand() {
      return this[isExpand];
    }
    set isExpand(value) {
      this[isExpand] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("category_id", this.categoryId);
      data[$_set]("category_name", this.categoryName);
      data[$_set]("commission_rate", this.commissionRate);
      data[$_set]("coupon_amount", this.couponAmount);
      data[$_set]("coupon_end_time", this.couponEndTime);
      data[$_set]("coupon_info", this.couponInfo);
      data[$_set]("coupon_remain_count", this.couponRemainCount);
      data[$_set]("coupon_share_url", this.couponShareUrl);
      data[$_set]("coupon_start_time", this.couponStartTime);
      data[$_set]("coupon_total_count", this.couponTotalCount);
      data[$_set]("item_description", this.itemDescription);
      data[$_set]("item_id", this.itemId);
      data[$_set]("item_url", this.itemUrl);
      data[$_set]("num_iid", this.numIid);
      data[$_set]("pict_url", this.pictUrl);
      data[$_set]("seller_id", this.sellerId);
      data[$_set]("shop_title", this.shopTitle);
      if (this.smallImages != null) {
        data[$_set]("small_images", this.smallImages.toJson());
      }
      data[$_set]("title", this.title);
      data[$_set]("url", this.url);
      data[$_set]("user_type", this.userType);
      data[$_set]("volume", this.volume);
      data[$_set]("zk_final_price", this.zkFinalPrice);
      return data;
    }
  };
  (coupon_model.MapData.new = function(opts) {
    let categoryId = opts && 'categoryId' in opts ? opts.categoryId : null;
    let categoryName = opts && 'categoryName' in opts ? opts.categoryName : null;
    let commissionRate = opts && 'commissionRate' in opts ? opts.commissionRate : null;
    let couponAmount = opts && 'couponAmount' in opts ? opts.couponAmount : null;
    let couponEndTime = opts && 'couponEndTime' in opts ? opts.couponEndTime : null;
    let couponInfo = opts && 'couponInfo' in opts ? opts.couponInfo : null;
    let couponRemainCount = opts && 'couponRemainCount' in opts ? opts.couponRemainCount : null;
    let couponShareUrl = opts && 'couponShareUrl' in opts ? opts.couponShareUrl : null;
    let couponStartTime = opts && 'couponStartTime' in opts ? opts.couponStartTime : null;
    let couponTotalCount = opts && 'couponTotalCount' in opts ? opts.couponTotalCount : null;
    let itemDescription = opts && 'itemDescription' in opts ? opts.itemDescription : null;
    let itemId = opts && 'itemId' in opts ? opts.itemId : null;
    let itemUrl = opts && 'itemUrl' in opts ? opts.itemUrl : null;
    let numIid = opts && 'numIid' in opts ? opts.numIid : null;
    let pictUrl = opts && 'pictUrl' in opts ? opts.pictUrl : null;
    let sellerId = opts && 'sellerId' in opts ? opts.sellerId : null;
    let shopTitle = opts && 'shopTitle' in opts ? opts.shopTitle : null;
    let smallImages = opts && 'smallImages' in opts ? opts.smallImages : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let url = opts && 'url' in opts ? opts.url : null;
    let userType = opts && 'userType' in opts ? opts.userType : null;
    let volume = opts && 'volume' in opts ? opts.volume : null;
    let zkFinalPrice = opts && 'zkFinalPrice' in opts ? opts.zkFinalPrice : null;
    this[isExpand] = false;
    this[categoryId$] = categoryId;
    this[categoryName$] = categoryName;
    this[commissionRate$] = commissionRate;
    this[couponAmount$] = couponAmount;
    this[couponEndTime$] = couponEndTime;
    this[couponInfo$] = couponInfo;
    this[couponRemainCount$] = couponRemainCount;
    this[couponShareUrl$] = couponShareUrl;
    this[couponStartTime$] = couponStartTime;
    this[couponTotalCount$] = couponTotalCount;
    this[itemDescription$] = itemDescription;
    this[itemId$] = itemId;
    this[itemUrl$] = itemUrl;
    this[numIid$] = numIid;
    this[pictUrl$] = pictUrl;
    this[sellerId$] = sellerId;
    this[shopTitle$] = shopTitle;
    this[smallImages$] = smallImages;
    this[title$] = title;
    this[url$] = url;
    this[userType$] = userType;
    this[volume$] = volume;
    this[zkFinalPrice$] = zkFinalPrice;
    ;
  }).prototype = coupon_model.MapData.prototype;
  (coupon_model.MapData.fromJson = function(json) {
    this[isExpand] = false;
    this[zkFinalPrice$] = null;
    this[volume$] = null;
    this[userType$] = null;
    this[url$] = null;
    this[title$] = null;
    this[smallImages$] = null;
    this[shopTitle$] = null;
    this[sellerId$] = null;
    this[pictUrl$] = null;
    this[numIid$] = null;
    this[itemUrl$] = null;
    this[itemId$] = null;
    this[itemDescription$] = null;
    this[couponTotalCount$] = null;
    this[couponStartTime$] = null;
    this[couponShareUrl$] = null;
    this[couponRemainCount$] = null;
    this[couponInfo$] = null;
    this[couponEndTime$] = null;
    this[couponAmount$] = null;
    this[commissionRate$] = null;
    this[categoryName$] = null;
    this[categoryId$] = null;
    this.categoryId = core.int._check(json[$_get]("category_id"));
    this.categoryName = core.String._check(json[$_get]("category_name"));
    this.commissionRate = core.String._check(json[$_get]("commission_rate"));
    this.couponAmount = core.String._check(json[$_get]("coupon_amount"));
    this.couponEndTime = core.String._check(json[$_get]("coupon_end_time"));
    this.couponInfo = core.String._check(json[$_get]("coupon_info"));
    this.couponRemainCount = core.int._check(json[$_get]("coupon_remain_count"));
    this.couponShareUrl = core.String._check(json[$_get]("coupon_share_url"));
    this.couponStartTime = core.String._check(json[$_get]("coupon_start_time"));
    this.couponTotalCount = core.int._check(json[$_get]("coupon_total_count"));
    this.itemDescription = core.String._check(json[$_get]("item_description"));
    this.itemId = core.int._check(json[$_get]("item_id"));
    this.itemUrl = core.String._check(json[$_get]("item_url"));
    this.numIid = core.int._check(json[$_get]("num_iid"));
    this.pictUrl = core.String._check(json[$_get]("pict_url"));
    this.sellerId = core.int._check(json[$_get]("seller_id"));
    this.shopTitle = core.String._check(json[$_get]("shop_title"));
    this.smallImages = json[$_get]("small_images") != null ? new coupon_model.SmallImages.fromJson(MapOfString$dynamic()._check(json[$_get]("small_images"))) : null;
    this.title = core.String._check(json[$_get]("title"));
    this.url = core.String._check(json[$_get]("url"));
    this.userType = core.int._check(json[$_get]("user_type"));
    this.volume = core.int._check(json[$_get]("volume"));
    this.zkFinalPrice = core.String._check(json[$_get]("zk_final_price"));
  }).prototype = coupon_model.MapData.prototype;
  dart.addTypeTests(coupon_model.MapData);
  dart.setMethodSignature(coupon_model.MapData, () => ({
    __proto__: dart.getMethods(coupon_model.MapData.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(coupon_model.MapData, "package:hkbook/model/coupon_model.dart");
  dart.setFieldSignature(coupon_model.MapData, () => ({
    __proto__: dart.getFields(coupon_model.MapData.__proto__),
    categoryId: dart.fieldType(core.int),
    categoryName: dart.fieldType(core.String),
    commissionRate: dart.fieldType(core.String),
    couponAmount: dart.fieldType(core.String),
    couponEndTime: dart.fieldType(core.String),
    couponInfo: dart.fieldType(core.String),
    couponRemainCount: dart.fieldType(core.int),
    couponShareUrl: dart.fieldType(core.String),
    couponStartTime: dart.fieldType(core.String),
    couponTotalCount: dart.fieldType(core.int),
    itemDescription: dart.fieldType(core.String),
    itemId: dart.fieldType(core.int),
    itemUrl: dart.fieldType(core.String),
    numIid: dart.fieldType(core.int),
    pictUrl: dart.fieldType(core.String),
    sellerId: dart.fieldType(core.int),
    shopTitle: dart.fieldType(core.String),
    smallImages: dart.fieldType(coupon_model.SmallImages),
    title: dart.fieldType(core.String),
    url: dart.fieldType(core.String),
    userType: dart.fieldType(core.int),
    volume: dart.fieldType(core.int),
    zkFinalPrice: dart.fieldType(core.String),
    isExpand: dart.fieldType(core.bool)
  }));
  const string$ = dart.privateName(coupon_model, "SmallImages.string");
  coupon_model.SmallImages = class SmallImages extends core.Object {
    get string() {
      return this[string$];
    }
    set string(value) {
      this[string$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("string", this.string);
      return data;
    }
  };
  (coupon_model.SmallImages.new = function(opts) {
    let string = opts && 'string' in opts ? opts.string : null;
    this[string$] = string;
    ;
  }).prototype = coupon_model.SmallImages.prototype;
  (coupon_model.SmallImages.fromJson = function(json) {
    this[string$] = null;
    if (json[$_get]("string") == null || json == null || dart.equals(json[$_get]("string"), "")) {
      this.string = JSArrayOfString().of([]);
    } else {
      this.string = ListOfString()._check(dart.dgsend(json[$_get]("string"), [core.String], 'cast', []));
    }
  }).prototype = coupon_model.SmallImages.prototype;
  dart.addTypeTests(coupon_model.SmallImages);
  dart.setMethodSignature(coupon_model.SmallImages, () => ({
    __proto__: dart.getMethods(coupon_model.SmallImages.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(coupon_model.SmallImages, "package:hkbook/model/coupon_model.dart");
  dart.setFieldSignature(coupon_model.SmallImages, () => ({
    __proto__: dart.getFields(coupon_model.SmallImages.__proto__),
    string: dart.fieldType(core.List$(core.String))
  }));
  dart.trackLibraries("packages/hkbook/model/coupon_model", {
    "package:hkbook/model/coupon_model.dart": coupon_model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["coupon_model.dart"],"names":[],"mappings":"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","file":"coupon_model.ddc.js"}');
  // Exports:
  return {
    model__coupon_model: coupon_model
  };
});

//# sourceMappingURL=coupon_model.ddc.js.map
