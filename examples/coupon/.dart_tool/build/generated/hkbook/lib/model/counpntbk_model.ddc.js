define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const counpntbk_model = Object.create(dart.library);
  const $_get = dartx._get;
  const $_set = dartx._set;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let LinkedMapOfString$dynamic = () => (LinkedMapOfString$dynamic = dart.constFn(_js_helper.LinkedMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  const tbkTpwdCreateResponse$ = dart.privateName(counpntbk_model, "TpwdCreate.tbkTpwdCreateResponse");
  counpntbk_model.TpwdCreate = class TpwdCreate extends core.Object {
    get tbkTpwdCreateResponse() {
      return this[tbkTpwdCreateResponse$];
    }
    set tbkTpwdCreateResponse(value) {
      this[tbkTpwdCreateResponse$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      if (this.tbkTpwdCreateResponse != null) {
        data[$_set]("tbk_tpwd_create_response", this.tbkTpwdCreateResponse.toJson());
      }
      return data;
    }
  };
  (counpntbk_model.TpwdCreate.new = function(opts) {
    let tbkTpwdCreateResponse = opts && 'tbkTpwdCreateResponse' in opts ? opts.tbkTpwdCreateResponse : null;
    this[tbkTpwdCreateResponse$] = tbkTpwdCreateResponse;
    ;
  }).prototype = counpntbk_model.TpwdCreate.prototype;
  (counpntbk_model.TpwdCreate.fromJson = function(json) {
    this[tbkTpwdCreateResponse$] = null;
    this.tbkTpwdCreateResponse = json[$_get]("tbk_tpwd_create_response") != null ? new counpntbk_model.TbkTpwdCreateResponse.fromJson(MapOfString$dynamic()._check(json[$_get]("tbk_tpwd_create_response"))) : null;
  }).prototype = counpntbk_model.TpwdCreate.prototype;
  dart.addTypeTests(counpntbk_model.TpwdCreate);
  dart.setMethodSignature(counpntbk_model.TpwdCreate, () => ({
    __proto__: dart.getMethods(counpntbk_model.TpwdCreate.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(counpntbk_model.TpwdCreate, "package:hkbook/model/counpntbk_model.dart");
  dart.setFieldSignature(counpntbk_model.TpwdCreate, () => ({
    __proto__: dart.getFields(counpntbk_model.TpwdCreate.__proto__),
    tbkTpwdCreateResponse: dart.fieldType(counpntbk_model.TbkTpwdCreateResponse)
  }));
  const data$ = dart.privateName(counpntbk_model, "TbkTpwdCreateResponse.data");
  counpntbk_model.TbkTpwdCreateResponse = class TbkTpwdCreateResponse extends core.Object {
    get data() {
      return this[data$];
    }
    set data(value) {
      this[data$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      if (this.data != null) {
        data[$_set]("data", this.data.toJson());
      }
      return data;
    }
  };
  (counpntbk_model.TbkTpwdCreateResponse.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    this[data$] = data;
    ;
  }).prototype = counpntbk_model.TbkTpwdCreateResponse.prototype;
  (counpntbk_model.TbkTpwdCreateResponse.fromJson = function(json) {
    this[data$] = null;
    this.data = json[$_get]("data") != null ? new counpntbk_model.Data.fromJson(MapOfString$dynamic()._check(json[$_get]("data"))) : null;
  }).prototype = counpntbk_model.TbkTpwdCreateResponse.prototype;
  dart.addTypeTests(counpntbk_model.TbkTpwdCreateResponse);
  dart.setMethodSignature(counpntbk_model.TbkTpwdCreateResponse, () => ({
    __proto__: dart.getMethods(counpntbk_model.TbkTpwdCreateResponse.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(counpntbk_model.TbkTpwdCreateResponse, "package:hkbook/model/counpntbk_model.dart");
  dart.setFieldSignature(counpntbk_model.TbkTpwdCreateResponse, () => ({
    __proto__: dart.getFields(counpntbk_model.TbkTpwdCreateResponse.__proto__),
    data: dart.fieldType(counpntbk_model.Data)
  }));
  const model$ = dart.privateName(counpntbk_model, "Data.model");
  counpntbk_model.Data = class Data extends core.Object {
    get model() {
      return this[model$];
    }
    set model(value) {
      this[model$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("model", this.model);
      return data;
    }
  };
  (counpntbk_model.Data.new = function(opts) {
    let model = opts && 'model' in opts ? opts.model : null;
    this[model$] = model;
    ;
  }).prototype = counpntbk_model.Data.prototype;
  (counpntbk_model.Data.fromJson = function(json) {
    this[model$] = null;
    this.model = core.String._check(json[$_get]("model"));
  }).prototype = counpntbk_model.Data.prototype;
  dart.addTypeTests(counpntbk_model.Data);
  dart.setMethodSignature(counpntbk_model.Data, () => ({
    __proto__: dart.getMethods(counpntbk_model.Data.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(counpntbk_model.Data, "package:hkbook/model/counpntbk_model.dart");
  dart.setFieldSignature(counpntbk_model.Data, () => ({
    __proto__: dart.getFields(counpntbk_model.Data.__proto__),
    model: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/hkbook/model/counpntbk_model", {
    "package:hkbook/model/counpntbk_model.dart": counpntbk_model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["counpntbk_model.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IACwB;;;;;;;AAWO,iBAAW;AACtC,UAAS,8BAAyB;AACsC,QAAtE,AAAI,IAAA,QAAC,4BAAmC,AAAsB;;AAEhE,YAAO,KAAI;IACb;;;QAdiB;;;EAAuB;kDAEC;;AAG7B,IAFV,6BAAwB,AAAI,AAA6B,IAA7B,QAAC,+BAA+B,OAClD,gFAA+B,AAAI,IAAA,QAAC,gCACxC;EACR;;;;;;;;;;;;;IAYK;;;;;;;AASwB,iBAAW;AACtC,UAAS,aAAQ;AACkB,QAAjC,AAAI,IAAA,QAAC,QAAe,AAAK;;AAE3B,YAAO,KAAI;IACb;;;QAZ4B;;;EAAM;6DAEkB;;AACkB,IAApE,YAAO,AAAI,AAAS,IAAT,QAAC,WAAW,OAAW,+DAAc,AAAI,IAAA,QAAC,YAAW;EAClE;;;;;;;;;;;;;IAYO;;;;;;;AASsB,iBAAW;AACZ,MAA1B,AAAI,IAAA,QAAC,SAAgB;AACrB,YAAO,KAAI;IACb;;;QAVW;;;EAAO;4CAEiB;;AACZ,iBAArB,mBAAQ,AAAI,IAAA,QAAC;EACf","file":"counpntbk_model.ddc.js"}');
  // Exports:
  return {
    model__counpntbk_model: counpntbk_model
  };
});

//# sourceMappingURL=counpntbk_model.ddc.js.map
