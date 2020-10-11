define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const result_data = Object.create(dart.library);
  const CT = Object.create(null);
  const data$ = dart.privateName(result_data, "ResultData.data");
  const result$ = dart.privateName(result_data, "ResultData.result");
  const code$ = dart.privateName(result_data, "ResultData.code");
  const headers$ = dart.privateName(result_data, "ResultData.headers");
  result_data.ResultData = class ResultData extends core.Object {
    get data() {
      return this[data$];
    }
    set data(value) {
      this[data$] = value;
    }
    get result() {
      return this[result$];
    }
    set result(value) {
      this[result$] = value;
    }
    get code() {
      return this[code$];
    }
    set code(value) {
      this[code$] = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      this[headers$] = value;
    }
  };
  (result_data.ResultData.new = function(data, result, code, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    this[data$] = data;
    this[result$] = result;
    this[code$] = code;
    this[headers$] = headers;
    ;
  }).prototype = result_data.ResultData.prototype;
  dart.addTypeTests(result_data.ResultData);
  dart.setLibraryUri(result_data.ResultData, "package:hkbook/service/result_data.dart");
  dart.setFieldSignature(result_data.ResultData, () => ({
    __proto__: dart.getFields(result_data.ResultData.__proto__),
    data: dart.fieldType(dart.dynamic),
    result: dart.fieldType(core.bool),
    code: dart.fieldType(core.int),
    headers: dart.fieldType(dart.dynamic)
  }));
  result_data.Code = class Code extends core.Object {
    static errorHandleFunction(code, message, noTip) {
      if (dart.dtest(noTip)) {
        return message;
      }
      return message;
    }
  };
  (result_data.Code.new = function() {
    ;
  }).prototype = result_data.Code.prototype;
  dart.addTypeTests(result_data.Code);
  dart.setLibraryUri(result_data.Code, "package:hkbook/service/result_data.dart");
  dart.defineLazy(result_data.Code, {
    /*result_data.Code.NETWORK_ERROR*/get NETWORK_ERROR() {
      return -1;
    },
    /*result_data.Code.NETWORK_TIMEOUT*/get NETWORK_TIMEOUT() {
      return -2;
    },
    /*result_data.Code.NETWORK_JSON_EXCEPTION*/get NETWORK_JSON_EXCEPTION() {
      return -3;
    },
    /*result_data.Code.SUCCESS*/get SUCCESS() {
      return 200;
    }
  });
  dart.trackLibraries("packages/hkbook/service/result_data", {
    "package:hkbook/service/result_data.dart": result_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["result_data.dart"],"names":[],"mappings":";;;;;;;;;;;;IAKM;;;;;;IACC;;;;;;IACD;;;;;;IACA;;;;;;;yCAEY,MAAW,QAAa;QAAY;IAApC;IAAW;IAAa;IAAY;;EAAS;;;;;;;;;;;+BAalC,MAAM,SAAS;AACxC,qBAAG,KAAK;AACN,cAAO,QAAO;;AAGhB,YAAO,QAAO;IAChB;;;;EACF;;;;MAbe,8BAAa;;;MAEb,gCAAe;;;MAEf,uCAAsB;;;MACtB,wBAAO","file":"result_data.ddc.js"}');
  // Exports:
  return {
    service__result_data: result_data
  };
});

//# sourceMappingURL=result_data.ddc.js.map
