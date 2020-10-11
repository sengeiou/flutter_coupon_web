define(['dart_sdk', 'packages/hkbook/ThridLib/dio-3.0.8/lib/src/interceptor', 'packages/hkbook/ThridLib/dio-3.0.8/lib/src/adapter'], function(dart_sdk, packages__hkbook__ThridLib__dio_3$460$468__lib__src__interceptor, packages__hkbook__ThridLib__dio_3$460$468__lib__src__adapter) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const interceptor = packages__hkbook__ThridLib__dio_3$460$468__lib__src__interceptor.ThridLib__dio_3$460$468__lib__src__interceptor;
  const response = packages__hkbook__ThridLib__dio_3$460$468__lib__src__adapter.ThridLib__dio_3$460$468__lib__src__response;
  const log = Object.create(dart.library);
  const $forEach = dartx.forEach;
  const $join = dartx.join;
  const $toString = dartx.toString;
  const $split = dartx.split;
  let ObjectTovoid = () => (ObjectTovoid = dart.constFn(dart.fnType(dart.void, [core.Object])))();
  let StringAnddynamicTovoid = () => (StringAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [core.String, dart.dynamic])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let StringAndListOfStringTovoid = () => (StringAndListOfStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, ListOfString()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(core.print, ObjectTovoid());
    }
  });
  let C0;
  const _printResponse = dart.privateName(log, "_printResponse");
  const request$ = dart.privateName(log, "LogInterceptor.request");
  const requestHeader$ = dart.privateName(log, "LogInterceptor.requestHeader");
  const requestBody$ = dart.privateName(log, "LogInterceptor.requestBody");
  const responseBody$ = dart.privateName(log, "LogInterceptor.responseBody");
  const responseHeader$ = dart.privateName(log, "LogInterceptor.responseHeader");
  const error$ = dart.privateName(log, "LogInterceptor.error");
  const logPrint$ = dart.privateName(log, "LogInterceptor.logPrint");
  log.LogInterceptor = class LogInterceptor extends interceptor.Interceptor {
    get request() {
      return this[request$];
    }
    set request(value) {
      this[request$] = value;
    }
    get requestHeader() {
      return this[requestHeader$];
    }
    set requestHeader(value) {
      this[requestHeader$] = value;
    }
    get requestBody() {
      return this[requestBody$];
    }
    set requestBody(value) {
      this[requestBody$] = value;
    }
    get responseBody() {
      return this[responseBody$];
    }
    set responseBody(value) {
      this[responseBody$] = value;
    }
    get responseHeader() {
      return this[responseHeader$];
    }
    set responseHeader(value) {
      this[responseHeader$] = value;
    }
    get error() {
      return this[error$];
    }
    set error(value) {
      this[error$] = value;
    }
    get logPrint() {
      return this[logPrint$];
    }
    set logPrint(value) {
      this[logPrint$] = value;
    }
    onRequest(options) {
      return async.async(dart.dynamic, (function* onRequest() {
        let t0;
        this.logPrint("*** Request ***");
        this.printKV("uri", options.uri);
        if (dart.test(this.request)) {
          this.printKV("method", options.method);
          this.printKV("responseType", (t0 = options.responseType, t0 == null ? null : dart.toString(t0)));
          this.printKV("followRedirects", options.followRedirects);
          this.printKV("connectTimeout", options.connectTimeout);
          this.printKV("receiveTimeout", options.receiveTimeout);
          this.printKV("extra", options.extra);
        }
        if (dart.test(this.requestHeader)) {
          this.logPrint("headers:");
          options.headers[$forEach](dart.fn((key, v) => this.printKV(" " + dart.str(key), v), StringAnddynamicTovoid()));
        }
        if (dart.test(this.requestBody)) {
          this.logPrint("data:");
          this.printAll(options.data);
        }
        this.logPrint("");
      }).bind(this));
    }
    onError(err) {
      return async.async(dart.dynamic, (function* onError() {
        if (dart.test(this.error)) {
          this.logPrint("*** DioError ***:");
          this.logPrint("uri: " + dart.str(err.request.uri));
          this.logPrint(dart.str(err));
          if (err.response != null) {
            this[_printResponse](err.response);
          }
          this.logPrint("");
        }
      }).bind(this));
    }
    onResponse(response) {
      return async.async(dart.dynamic, (function* onResponse() {
        this.logPrint("*** Response ***");
        this[_printResponse](response);
      }).bind(this));
    }
    [_printResponse](response) {
      let t0;
      this.printKV("uri", (t0 = response.request, t0 == null ? null : t0.uri));
      if (dart.test(this.responseHeader)) {
        this.printKV("statusCode", response.statusCode);
        if (dart.equals(response.isRedirect, true)) {
          this.printKV("redirect", response.realUri);
        }
        if (response.headers != null) {
          this.logPrint("headers:");
          response.headers.forEach(dart.fn((key, v) => this.printKV(" " + dart.str(key), v[$join](",")), StringAndListOfStringTovoid()));
        }
      }
      if (dart.test(this.responseBody)) {
        this.logPrint("Response Text:");
        this.printAll(dart.toString(response));
      }
      this.logPrint("");
    }
    printKV(key, v) {
      this.logPrint(dart.str(key) + ": " + dart.str(v));
    }
    printAll(msg) {
      dart.toString(msg)[$split]("\n")[$forEach](this.logPrint);
    }
  };
  (log.LogInterceptor.new = function(opts) {
    let request = opts && 'request' in opts ? opts.request : true;
    let requestHeader = opts && 'requestHeader' in opts ? opts.requestHeader : true;
    let requestBody = opts && 'requestBody' in opts ? opts.requestBody : false;
    let responseHeader = opts && 'responseHeader' in opts ? opts.responseHeader : true;
    let responseBody = opts && 'responseBody' in opts ? opts.responseBody : false;
    let error = opts && 'error' in opts ? opts.error : true;
    let logPrint = opts && 'logPrint' in opts ? opts.logPrint : C0 || CT.C0;
    this[request$] = request;
    this[requestHeader$] = requestHeader;
    this[requestBody$] = requestBody;
    this[responseHeader$] = responseHeader;
    this[responseBody$] = responseBody;
    this[error$] = error;
    this[logPrint$] = logPrint;
    ;
  }).prototype = log.LogInterceptor.prototype;
  dart.addTypeTests(log.LogInterceptor);
  dart.setMethodSignature(log.LogInterceptor, () => ({
    __proto__: dart.getMethods(log.LogInterceptor.__proto__),
    [_printResponse]: dart.fnType(dart.void, [response.Response]),
    printKV: dart.fnType(dart.void, [core.String, core.Object]),
    printAll: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(log.LogInterceptor, "package:hkbook/ThridLib/dio-3.0.8/lib/src/interceptors/log.dart");
  dart.setFieldSignature(log.LogInterceptor, () => ({
    __proto__: dart.getFields(log.LogInterceptor.__proto__),
    request: dart.fieldType(core.bool),
    requestHeader: dart.fieldType(core.bool),
    requestBody: dart.fieldType(core.bool),
    responseBody: dart.fieldType(core.bool),
    responseHeader: dart.fieldType(core.bool),
    error: dart.fieldType(core.bool),
    logPrint: dart.fieldType(dart.fnType(dart.void, [core.Object]))
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/dio-3.0.8/lib/src/interceptors/log", {
    "package:hkbook/ThridLib/dio-3.0.8/lib/src/interceptors/log.dart": log
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["log.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuBO;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;IAGA;;;;;;IAYwB;;;;;;cAGG;AAAhB;;AACa,QAA3B,cAAS;AACkB,QAA3B,aAAQ,OAAO,AAAQ,OAAD;AAEtB,sBAAI;AAC+B,UAAjC,aAAQ,UAAU,AAAQ,OAAD;AACgC,UAAzD,aAAQ,sBAAgB,AAAQ,OAAD,4BAAC,OAAc;AACK,UAAnD,aAAQ,mBAAmB,AAAQ,OAAD;AACe,UAAjD,aAAQ,kBAAkB,AAAQ,OAAD;AACgB,UAAjD,aAAQ,kBAAkB,AAAQ,OAAD;AACF,UAA/B,aAAQ,SAAS,AAAQ,OAAD;;AAE1B,sBAAI;AACkB,UAApB,cAAS;AAC+C,UAAxD,AAAQ,AAAQ,OAAT,mBAAiB,SAAC,KAAK,MAAM,aAAQ,AAAO,eAAJ,GAAG,GAAG,CAAC;;AAExD,sBAAI;AACe,UAAjB,cAAS;AACa,UAAtB,cAAS,AAAQ,OAAD;;AAEN,QAAZ,cAAS;MACX;;YAGwB;AAAV;AACZ,sBAAI;AAC2B,UAA7B,cAAS;AAC0B,UAAnC,cAAS,AAAyB,mBAAjB,AAAI,AAAQ,GAAT;AACJ,UAAhB,cAAe,SAAJ,GAAG;AACd,cAAI,AAAI,GAAD,aAAa;AACU,YAA5B,qBAAe,AAAI,GAAD;;AAER,UAAZ,cAAS;;MAEb;;eAG2B;AAAV;AACa,QAA5B,cAAS;AACe,QAAxB,qBAAe,QAAQ;MACzB;;qBAE6B;;AACU,MAArC,aAAQ,aAAO,AAAS,QAAD,uBAAC,OAAS;AACjC,oBAAI;AACwC,QAA1C,aAAQ,cAAc,AAAS,QAAD;AAC9B,YAAwB,YAApB,AAAS,QAAD,aAAe;AACY,UAArC,aAAQ,YAAY,AAAS,QAAD;;AAE9B,YAAI,AAAS,QAAD,YAAY;AACF,UAApB,cAAS;AAC0D,UAAnE,AAAS,AAAQ,QAAT,iBAAiB,SAAC,KAAK,MAAM,aAAQ,AAAO,eAAJ,GAAG,GAAG,AAAE,CAAD,QAAM;;;AAGjE,oBAAI;AACwB,QAA1B,cAAS;AACoB,QAA7B,cAAkB,cAAT,QAAQ;;AAEP,MAAZ,cAAS;IACX;YAEoB,KAAY;AACV,MAApB,cAAmB,SAAR,GAAG,oBAAG,CAAC;IACpB;aAEc;AACgC,MAAxC,AAAW,AAAY,cAA3B,GAAG,UAAkB,gBAAc;IACrC;;;QA3GO;QACA;QACA;QACA;QACA;QACA;QACA;IANA;IACA;IACA;IACA;IACA;IACA;IACA;;EACL","file":"log.ddc.js"}');
  // Exports:
  return {
    ThridLib__dio_3$460$468__lib__src__interceptors__log: log
  };
});

//# sourceMappingURL=log.ddc.js.map
