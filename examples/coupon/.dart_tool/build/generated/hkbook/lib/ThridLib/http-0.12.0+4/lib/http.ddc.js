define(['dart_sdk', 'packages/hkbook/ThridLib/http-0.12.0+4/lib/src/base_client'], function(dart_sdk, packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const response = packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__base_client.ThridLib__http_0$4612$460$434__lib__src__response;
  const client$ = packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__base_client.ThridLib__http_0$4612$460$434__lib__src__client;
  const http = Object.create(dart.library);
  let FutureOfResponse = () => (FutureOfResponse = dart.constFn(async.Future$(response.Response)))();
  let ClientToFutureOfResponse = () => (ClientToFutureOfResponse = dart.constFn(dart.fnType(FutureOfResponse(), [client$.Client])))();
  let FutureOfString = () => (FutureOfString = dart.constFn(async.Future$(core.String)))();
  let ClientToFutureOfString = () => (ClientToFutureOfString = dart.constFn(dart.fnType(FutureOfString(), [client$.Client])))();
  let FutureOfUint8List = () => (FutureOfUint8List = dart.constFn(async.Future$(typed_data.Uint8List)))();
  let ClientToFutureOfUint8List = () => (ClientToFutureOfUint8List = dart.constFn(dart.fnType(FutureOfUint8List(), [client$.Client])))();
  const CT = Object.create(null);
  http.head = function head(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(response.Response, dart.fn(client => client.head(url, {headers: headers}), ClientToFutureOfResponse()));
  };
  http.get = function get(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(response.Response, dart.fn(client => client.get(url, {headers: headers}), ClientToFutureOfResponse()));
  };
  http.post = function post(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response.Response, dart.fn(client => client.post(url, {headers: headers, body: body, encoding: encoding}), ClientToFutureOfResponse()));
  };
  http.put = function put(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response.Response, dart.fn(client => client.put(url, {headers: headers, body: body, encoding: encoding}), ClientToFutureOfResponse()));
  };
  http.patch = function patch(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response.Response, dart.fn(client => client.patch(url, {headers: headers, body: body, encoding: encoding}), ClientToFutureOfResponse()));
  };
  http.delete = function $delete(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(response.Response, dart.fn(client => client.delete(url, {headers: headers}), ClientToFutureOfResponse()));
  };
  http.read = function read(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(core.String, dart.fn(client => client.read(url, {headers: headers}), ClientToFutureOfString()));
  };
  http.readBytes = function readBytes(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(typed_data.Uint8List, dart.fn(client => client.readBytes(url, {headers: headers}), ClientToFutureOfUint8List()));
  };
  http._withClient = function _withClient(T, fn) {
    return async.async(T, function* _withClient() {
      let client = client$.Client.new();
      try {
        return yield fn(client);
      } finally {
        client.close();
      }
    });
  };
  dart.trackLibraries("packages/hkbook/ThridLib/http-0.12.0+4/lib/http", {
    "package:hkbook/ThridLib/http-0.12.0+4/lib/http.dart": http
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["http.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;4BAiCsB;QAA0B;AAC5C,+CAAY,QAAC,UAAW,AAAO,MAAD,MAAM,GAAG,YAAW,OAAO;EAAE;0BAU1C;QAA0B;AAC3C,+CAAY,QAAC,UAAW,AAAO,MAAD,KAAK,GAAG,YAAW,OAAO;EAAE;4BAqBxC;QACO;QAAS;QAAe;AACjD,+CAAY,QAAC,UACT,AAAO,MAAD,MAAM,GAAG,YAAW,OAAO,QAAQ,IAAI,YAAY,QAAQ;EAAE;0BAqBtD;QACQ;QAAS;QAAe;AACjD,+CAAY,QAAC,UACT,AAAO,MAAD,KAAK,GAAG,YAAW,OAAO,QAAQ,IAAI,YAAY,QAAQ;EAAE;8BAqBnD;QACM;QAAS;QAAe;AACjD,+CAAY,QAAC,UACT,AAAO,MAAD,OAAO,GAAG,YAAW,OAAO,QAAQ,IAAI,YAAY,QAAQ;EAAE;iCAUpD;QAA0B;AAC9C,+CAAY,QAAC,UAAW,AAAO,MAAD,QAAQ,GAAG,YAAW,OAAO;EAAE;4BAe7C;QAA0B;AAC1C,yCAAY,QAAC,UAAW,AAAO,MAAD,MAAM,GAAG,YAAW,OAAO;EAAE;sCAenC;QAA0B;AAClD,kDAAY,QAAC,UAAW,AAAO,MAAD,WAAW,GAAG,YAAW,OAAO;EAAE;6CAEhB;AAA5B;AAClB,mBAAS;AACb;AACE,cAAO,OAAM,AAAE,EAAA,CAAC,MAAM;;AAER,QAAd,AAAO,MAAD;;IAEV","file":"http.ddc.js"}');
  // Exports:
  return {
    ThridLib__http_0$4612$460$434__lib__http: http
  };
});

//# sourceMappingURL=http.ddc.js.map
