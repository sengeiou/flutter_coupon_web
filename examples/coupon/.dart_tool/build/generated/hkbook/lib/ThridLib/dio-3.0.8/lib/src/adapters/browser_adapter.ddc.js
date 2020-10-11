define(['dart_sdk', 'packages/hkbook/ThridLib/dio-3.0.8/lib/src/adapter'], function(dart_sdk, packages__hkbook__ThridLib__dio_3$460$468__lib__src__adapter) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const adapter = packages__hkbook__ThridLib__dio_3$460$468__lib__src__adapter.ThridLib__dio_3$460$468__lib__src__adapter;
  const dio_error = packages__hkbook__ThridLib__dio_3$460$468__lib__src__adapter.ThridLib__dio_3$460$468__lib__src__dio_error;
  const options = packages__hkbook__ThridLib__dio_3$460$468__lib__src__adapter.ThridLib__dio_3$460$468__lib__src__options;
  const browser_adapter = Object.create(dart.library);
  const $add = dartx.add;
  const $_get = dartx._get;
  const $remove = dartx.remove;
  const $forEach = dartx.forEach;
  const $onLoad = dartx.onLoad;
  const $response = dartx.response;
  const $result = dartx.result;
  const $responseHeaders = dartx.responseHeaders;
  const $toLowerCase = dartx.toLowerCase;
  const $split = dartx.split;
  const $map = dartx.map;
  const $onError = dartx.onError;
  const $clear = dartx.clear;
  let JSArrayOfHttpRequest = () => (JSArrayOfHttpRequest = dart.constFn(_interceptors.JSArray$(html.HttpRequest)))();
  let StringAnddynamicTovoid = () => (StringAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [core.String, dart.dynamic])))();
  let CompleterOfResponseBody = () => (CompleterOfResponseBody = dart.constFn(async.Completer$(adapter.ResponseBody)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let MapEntryOfString$ListOfString = () => (MapEntryOfString$ListOfString = dart.constFn(core.MapEntry$(core.String, ListOfString())))();
  let StringAndStringToMapEntryOfString$ListOfString = () => (StringAndStringToMapEntryOfString$ListOfString = dart.constFn(dart.fnType(MapEntryOfString$ListOfString(), [core.String, core.String])))();
  let ProgressEventToNull = () => (ProgressEventToNull = dart.constFn(dart.fnType(core.Null, [html.ProgressEvent])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let ListOfintAndListOfintToUint8List = () => (ListOfintAndListOfintToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [ListOfint(), ListOfint()])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  const _xhrs = dart.privateName(browser_adapter, "_xhrs");
  const withCredentials = dart.privateName(browser_adapter, "BrowserHttpClientAdapter.withCredentials");
  browser_adapter.BrowserHttpClientAdapter = class BrowserHttpClientAdapter extends core.Object {
    get withCredentials() {
      return this[withCredentials];
    }
    set withCredentials(value) {
      this[withCredentials] = value;
    }
    fetch(options, requestStream, cancelFuture) {
      let t1, t0, t0$;
      let xhr = html.HttpRequest.new();
      this[_xhrs][$add](xhr);
      t0 = xhr;
      t0.open(options.method, dart.toString(options.uri), {async: true});
      t0.responseType = "blob";
      t0.withCredentials = core.bool._check((t1 = options.extra[$_get]("withCredentials"), t1 == null ? this.withCredentials : t1));
      t0;
      options.headers[$remove]("content-length");
      options.headers[$forEach](dart.fn((key, v) => xhr.setRequestHeader(key, dart.str(v)), StringAnddynamicTovoid()));
      let completer = CompleterOfResponseBody().new();
      xhr[$onLoad].first.then(core.Null, dart.fn(_ => {
        let t0;
        let blob = (t0 = xhr[$response], t0 == null ? html.Blob.new([]) : t0);
        let reader = html.FileReader.new();
        reader[$onLoad].first.then(core.Null, dart.fn(_ => {
          let body = typed_data.Uint8List.as(reader[$result]);
          completer.complete(new adapter.ResponseBody.fromBytes(body, xhr.status, {headers: xhr[$responseHeaders][$map](core.String, ListOfString(), dart.fn((k, v) => new (MapEntryOfString$ListOfString()).__(k[$toLowerCase](), v[$split](",")), StringAndStringToMapEntryOfString$ListOfString())), statusMessage: xhr.statusText, isRedirect: xhr.status === 302 || xhr.status === 301}));
        }, ProgressEventToNull()));
        reader[$onError].first.then(core.Null, dart.fn(error => {
          completer.completeError(new dio_error.DioError.new({type: dio_error.DioErrorType.RESPONSE, error: error, request: options}), core.StackTrace.current);
        }, ProgressEventToNull()));
        reader.readAsArrayBuffer(html.Blob._check(blob));
      }, ProgressEventToNull()));
      xhr[$onError].first.then(core.Null, dart.fn(_ => {
        completer.completeError(new dio_error.DioError.new({type: dio_error.DioErrorType.RESPONSE, error: "XMLHttpRequest error.", request: options}), core.StackTrace.current);
      }, ProgressEventToNull()));
      t0$ = cancelFuture;
      t0$ == null ? null : t0$.then(core.Null, dart.fn(_ => {
        if (dart.notNull(xhr.readyState) < 4 && dart.notNull(xhr.readyState) > 0) {
          try {
            xhr.abort();
          } catch (e$) {
            let e = dart.getThrown(e$);
          }
        }
      }, dynamicToNull()));
      if (requestStream == null) {
        xhr.send();
      } else {
        requestStream.reduce(dart.fn((a, b) => _native_typed_data.NativeUint8List.fromList((() => {
          let t1 = JSArrayOfint().of([]);
          for (let t2 of a)
            t1[$add](t2);
          for (let t3 of b)
            t1[$add](t3);
          return t1;
        })()), ListOfintAndListOfintToUint8List())).then(dart.void, dart.bind(xhr, 'send'));
      }
      return completer.future.whenComplete(dart.fn(() => {
        this[_xhrs][$remove](xhr);
      }, VoidToNull()));
    }
    close(opts) {
      let force = opts && 'force' in opts ? opts.force : false;
      if (dart.test(force)) {
        for (let xhr of this[_xhrs]) {
          xhr.abort();
        }
      }
      this[_xhrs][$clear]();
    }
  };
  (browser_adapter.BrowserHttpClientAdapter.new = function() {
    this[_xhrs] = JSArrayOfHttpRequest().of([]);
    this[withCredentials] = false;
    ;
  }).prototype = browser_adapter.BrowserHttpClientAdapter.prototype;
  dart.addTypeTests(browser_adapter.BrowserHttpClientAdapter);
  browser_adapter.BrowserHttpClientAdapter[dart.implements] = () => [adapter.HttpClientAdapter];
  dart.setMethodSignature(browser_adapter.BrowserHttpClientAdapter, () => ({
    __proto__: dart.getMethods(browser_adapter.BrowserHttpClientAdapter.__proto__),
    fetch: dart.fnType(async.Future$(adapter.ResponseBody), [options.RequestOptions, async.Stream$(core.List$(core.int)), async.Future]),
    close: dart.fnType(dart.void, [], {force: core.bool}, {})
  }));
  dart.setLibraryUri(browser_adapter.BrowserHttpClientAdapter, "package:hkbook/ThridLib/dio-3.0.8/lib/src/adapters/browser_adapter.dart");
  dart.setFieldSignature(browser_adapter.BrowserHttpClientAdapter, () => ({
    __proto__: dart.getFields(browser_adapter.BrowserHttpClientAdapter.__proto__),
    [_xhrs]: dart.finalFieldType(core.List$(html.HttpRequest)),
    withCredentials: dart.fieldType(core.bool)
  }));
  browser_adapter.createAdapter = function createAdapter() {
    return new browser_adapter.BrowserHttpClientAdapter.new();
  };
  dart.trackLibraries("packages/hkbook/ThridLib/dio-3.0.8/lib/src/adapters/browser_adapter", {
    "package:hkbook/ThridLib/dio-3.0.8/lib/src/adapters/browser_adapter.dart": browser_adapter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["browser_adapter.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoBO;;;;;;UAGqC,SACpB,eAAsB;;AACtC,gBAAM;AACI,MAAd,AAAM,kBAAI,GAAG;AAK4D,WAHzE,GAAG;MACC,QAAK,AAAQ,OAAD,SAAqB,cAAZ,AAAQ,OAAD,eAAwB;MACpD,kBAAe;2BACf,kBAAmD,KAAjC,AAAQ,AAAK,OAAN,cAAO,0BAAD,OAAuB;;AACP,MAAnD,AAAQ,AAAQ,OAAT;AAC6D,MAApE,AAAQ,AAAQ,OAAT,mBAAiB,SAAC,KAAK,MAAM,AAAI,GAAD,kBAAkB,GAAG,EAAM,SAAF,CAAC;AAE7D,sBAAY;AAgCd,MA9BF,AAAI,AAAO,AAAM,GAAd,gCAAmB,QAAC;;AAEjB,oBAAoB,KAAb,AAAI,GAAD,mBAAC,OAAY,cAAK;AAC5B,qBAAS;AAcX,QAZF,AAAO,AAAO,AAAM,MAAd,gCAAmB,QAAC;AACpB,qBAAqB,wBAAd,AAAO,MAAD;AAUhB,UATD,AAAU,SAAD,UACM,mCACX,IAAI,EACJ,AAAI,GAAD,mBACM,AAAI,AACR,GADO,sDACH,SAAC,GAAG,MAAM,yCAAS,AAAE,CAAD,kBAAgB,AAAE,CAAD,SAAO,0EACtC,AAAI,GAAD,yBACN,AAAI,AAAO,AAAO,GAAf,YAAW,OAAO,AAAI,AAAO,GAAR,YAAW;;AAcnD,QATF,AAAO,AAAQ,AAAM,MAAf,iCAAoB,QAAC;AAQxB,UAPD,AAAU,SAAD,eACP,kCACqB,wCACZ,KAAK,WACH,OAAO,IAEP;;AAGe,QAA9B,AAAO,MAAD,oCAAmB,IAAI;;AAc7B,MAXF,AAAI,AAAQ,AAAM,GAAf,iCAAoB,QAAC;AAUrB,QAPD,AAAU,SAAD,eACP,kCACqB,wCACZ,kCACE,OAAO,IAEP;;AAYb,YARF,YAAY;oBAAZ,OAAc,oBAAK,QAAC;AAClB,YAAmB,aAAf,AAAI,GAAD,eAAc,KAAoB,aAAf,AAAI,GAAD,eAAc;AACzC;AACa,YAAX,AAAI,GAAD;;gBACI;;;;AAMb,UAAI,AAAc,aAAD,IAAI;AACT,QAAV,AAAI,GAAD;;AAIgB,QAFnB,AACK,AACA,aAFQ,QACD,SAAC,GAAG,MAAgB;;wBAAa,EAAC;;wBAAK,EAAC;;;oEACtC,UAAJ,GAAG;;AAGf,YAAO,AAAU,AAAO,UAAR,qBAAqB;AAClB,QAAjB,AAAM,qBAAO,GAAG;;IAEpB;;UAMiB;AACf,oBAAI,KAAK;AACP,iBAAS,MAAO;AACH,UAAX,AAAI,GAAD;;;AAGM,MAAb,AAAM;IACR;;;IAxGM,cAAqB;IAQtB,wBAAkB;;EAiGzB;;;;;;;;;;;;;;;AA7GqC;EAA0B","file":"browser_adapter.ddc.js"}');
  // Exports:
  return {
    ThridLib__dio_3$460$468__lib__src__adapters__browser_adapter: browser_adapter
  };
});

//# sourceMappingURL=browser_adapter.ddc.js.map
