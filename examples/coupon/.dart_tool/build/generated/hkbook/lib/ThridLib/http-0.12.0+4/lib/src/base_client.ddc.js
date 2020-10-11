define(['dart_sdk', 'packages/pedantic/pedantic', 'packages/hkbook/ThridLib/http-0.12.0+4/lib/src/byte_stream', 'packages/hkbook/ThridLib/http-0.12.0+4/lib/src/exception', 'packages/hkbook/ThridLib/http-0.12.0+4/lib/src/utils', 'packages/http_parser/http_parser'], function(dart_sdk, packages__pedantic__pedantic, packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__byte_stream, packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__exception, packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__utils, packages__http_parser__http_parser) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const pedantic = packages__pedantic__pedantic.pedantic;
  const byte_stream = packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__byte_stream.ThridLib__http_0$4612$460$434__lib__src__byte_stream;
  const exception = packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__exception.ThridLib__http_0$4612$460$434__lib__src__exception;
  const utils = packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__utils.ThridLib__http_0$4612$460$434__lib__src__utils;
  const media_type = packages__http_parser__http_parser.src__media_type;
  const browser_client = Object.create(dart.library);
  const streamed_response = Object.create(dart.library);
  const base_response = Object.create(dart.library);
  const base_request = Object.create(dart.library);
  const client$ = Object.create(dart.library);
  const response$ = Object.create(dart.library);
  const base_client = Object.create(dart.library);
  const request$ = Object.create(dart.library);
  const $forEach = dartx.forEach;
  const $onLoad = dartx.onLoad;
  const $response = dartx.response;
  const $result = dartx.result;
  const $length = dartx.length;
  const $responseHeaders = dartx.responseHeaders;
  const $onError = dartx.onError;
  const $toString = dartx.toString;
  const $addAll = dartx.addAll;
  const $cast = dartx.cast;
  const $toLowerCase = dartx.toLowerCase;
  const $hashCode = dartx.hashCode;
  const $_get = dartx._get;
  const $containsKey = dartx.containsKey;
  const $_set = dartx._set;
  let LinkedHashSetOfHttpRequest = () => (LinkedHashSetOfHttpRequest = dart.constFn(collection.LinkedHashSet$(html.HttpRequest)))();
  let CompleterOfStreamedResponse = () => (CompleterOfStreamedResponse = dart.constFn(async.Completer$(streamed_response.StreamedResponse)))();
  let ProgressEventToNull = () => (ProgressEventToNull = dart.constFn(dart.fnType(core.Null, [html.ProgressEvent])))();
  let LinkedHashMapOfString$String = () => (LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))();
  let StringAndStringTobool = () => (StringAndStringTobool = dart.constFn(dart.fnType(core.bool, [core.String, core.String])))();
  let StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(core.String, core.String, []);
    }
  });
  const _xhrs = dart.privateName(browser_client, "_xhrs");
  const _sendUnstreamed = dart.privateName(base_client, "_sendUnstreamed");
  const _checkResponseSuccess = dart.privateName(base_client, "_checkResponseSuccess");
  base_client.BaseClient = class BaseClient extends core.Object {
    head(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("HEAD", url, headers);
    }
    get(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("GET", url, headers);
    }
    post(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("POST", url, headers, body, encoding);
    }
    put(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PUT", url, headers, body, encoding);
    }
    patch(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PATCH", url, headers, body, encoding);
    }
    delete(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("DELETE", url, headers);
    }
    read(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return async.async(core.String, (function* read() {
        let response = (yield this.get(url, {headers: headers}));
        this[_checkResponseSuccess](url, response);
        return response.body;
      }).bind(this));
    }
    readBytes(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return async.async(typed_data.Uint8List, (function* readBytes() {
        let response = (yield this.get(url, {headers: headers}));
        this[_checkResponseSuccess](url, response);
        return response.bodyBytes;
      }).bind(this));
    }
    [_sendUnstreamed](method, url, headers, body, encoding) {
      if (body === void 0) body = null;
      if (encoding === void 0) encoding = null;
      return async.async(response$.Response, (function* _sendUnstreamed() {
        let request = new request$.Request.new(method, base_client._fromUriOrString(url));
        if (headers != null) request.headers[$addAll](headers);
        if (encoding != null) request.encoding = encoding;
        if (body != null) {
          if (typeof body == 'string') {
            request.body = body;
          } else if (core.List.is(body)) {
            request.bodyBytes = body[$cast](core.int);
          } else if (core.Map.is(body)) {
            request.bodyFields = body[$cast](core.String, core.String);
          } else {
            dart.throw(new core.ArgumentError.new("Invalid request body \"" + dart.str(body) + "\"."));
          }
        }
        return response$.Response.fromStream(yield this.send(request));
      }).bind(this));
    }
    [_checkResponseSuccess](url, response) {
      if (dart.notNull(response.statusCode) < 400) return;
      let message = "Request to " + dart.str(url) + " failed with status " + dart.str(response.statusCode);
      if (response.reasonPhrase != null) {
        message = message + ": " + dart.str(response.reasonPhrase);
      }
      dart.throw(new exception.ClientException.new(message + ".", base_client._fromUriOrString(url)));
    }
    close() {
    }
  };
  (base_client.BaseClient.new = function() {
    ;
  }).prototype = base_client.BaseClient.prototype;
  dart.addTypeTests(base_client.BaseClient);
  base_client.BaseClient[dart.implements] = () => [client$.Client];
  dart.setMethodSignature(base_client.BaseClient, () => ({
    __proto__: dart.getMethods(base_client.BaseClient.__proto__),
    head: dart.fnType(async.Future$(response$.Response), [dart.dynamic], {headers: core.Map$(core.String, core.String)}, {}),
    get: dart.fnType(async.Future$(response$.Response), [dart.dynamic], {headers: core.Map$(core.String, core.String)}, {}),
    post: dart.fnType(async.Future$(response$.Response), [dart.dynamic], {body: dart.dynamic, encoding: convert.Encoding, headers: core.Map$(core.String, core.String)}, {}),
    put: dart.fnType(async.Future$(response$.Response), [dart.dynamic], {body: dart.dynamic, encoding: convert.Encoding, headers: core.Map$(core.String, core.String)}, {}),
    patch: dart.fnType(async.Future$(response$.Response), [dart.dynamic], {body: dart.dynamic, encoding: convert.Encoding, headers: core.Map$(core.String, core.String)}, {}),
    delete: dart.fnType(async.Future$(response$.Response), [dart.dynamic], {headers: core.Map$(core.String, core.String)}, {}),
    read: dart.fnType(async.Future$(core.String), [dart.dynamic], {headers: core.Map$(core.String, core.String)}, {}),
    readBytes: dart.fnType(async.Future$(typed_data.Uint8List), [dart.dynamic], {headers: core.Map$(core.String, core.String)}, {}),
    [_sendUnstreamed]: dart.fnType(async.Future$(response$.Response), [core.String, dart.dynamic, core.Map$(core.String, core.String)], [dart.dynamic, convert.Encoding]),
    [_checkResponseSuccess]: dart.fnType(dart.void, [dart.dynamic, response$.Response]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(base_client.BaseClient, "package:hkbook/ThridLib/http-0.12.0+4/lib/src/base_client.dart");
  const withCredentials = dart.privateName(browser_client, "BrowserClient.withCredentials");
  browser_client.BrowserClient = class BrowserClient extends base_client.BaseClient {
    get withCredentials() {
      return this[withCredentials];
    }
    set withCredentials(value) {
      this[withCredentials] = value;
    }
    send(request) {
      return async.async(streamed_response.StreamedResponse, (function* send() {
        let t0;
        let bytes = (yield request.finalize().toBytes());
        let xhr = html.HttpRequest.new();
        this[_xhrs].add(xhr);
        t0 = xhr;
        t0.open(request.method, dart.str(request.url), {async: true});
        t0.responseType = "blob";
        t0.withCredentials = this.withCredentials;
        t0;
        request.headers[$forEach](dart.bind(xhr, 'setRequestHeader'));
        let completer = CompleterOfStreamedResponse().new();
        pedantic.unawaited(xhr[$onLoad].first.then(dart.void, dart.fn(_ => {
          let t0;
          let blob = (t0 = html.Blob.as(xhr[$response]), t0 == null ? html.Blob.new([]) : t0);
          let reader = html.FileReader.new();
          reader[$onLoad].first.then(core.Null, dart.fn(_ => {
            let body = typed_data.Uint8List.as(reader[$result]);
            completer.complete(new streamed_response.StreamedResponse.new(byte_stream.ByteStream.fromBytes(body), xhr.status, {contentLength: body[$length], request: request, headers: xhr[$responseHeaders], reasonPhrase: xhr.statusText}));
          }, ProgressEventToNull()));
          reader[$onError].first.then(core.Null, dart.fn(error => {
            completer.completeError(new exception.ClientException.new(dart.toString(error), request.url), core.StackTrace.current);
          }, ProgressEventToNull()));
          reader.readAsArrayBuffer(blob);
        }, ProgressEventToNull())));
        pedantic.unawaited(xhr[$onError].first.then(dart.void, dart.fn(_ => {
          completer.completeError(new exception.ClientException.new("XMLHttpRequest error.", request.url), core.StackTrace.current);
        }, ProgressEventToNull())));
        xhr.send(bytes);
        try {
          return yield completer.future;
        } finally {
          this[_xhrs].remove(xhr);
        }
      }).bind(this));
    }
    close() {
      for (let xhr of this[_xhrs]) {
        xhr.abort();
      }
    }
  };
  (browser_client.BrowserClient.new = function() {
    this[_xhrs] = LinkedHashSetOfHttpRequest().new();
    this[withCredentials] = false;
    ;
  }).prototype = browser_client.BrowserClient.prototype;
  dart.addTypeTests(browser_client.BrowserClient);
  dart.setMethodSignature(browser_client.BrowserClient, () => ({
    __proto__: dart.getMethods(browser_client.BrowserClient.__proto__),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), [base_request.BaseRequest])
  }));
  dart.setLibraryUri(browser_client.BrowserClient, "package:hkbook/ThridLib/http-0.12.0+4/lib/src/browser_client.dart");
  dart.setFieldSignature(browser_client.BrowserClient, () => ({
    __proto__: dart.getFields(browser_client.BrowserClient.__proto__),
    [_xhrs]: dart.finalFieldType(core.Set$(html.HttpRequest)),
    withCredentials: dart.fieldType(core.bool)
  }));
  browser_client.createClient = function createClient() {
    return new browser_client.BrowserClient.new();
  };
  let C0;
  const request$0 = dart.privateName(base_response, "BaseResponse.request");
  const statusCode$ = dart.privateName(base_response, "BaseResponse.statusCode");
  const reasonPhrase$ = dart.privateName(base_response, "BaseResponse.reasonPhrase");
  const contentLength$ = dart.privateName(base_response, "BaseResponse.contentLength");
  const headers$ = dart.privateName(base_response, "BaseResponse.headers");
  const isRedirect$ = dart.privateName(base_response, "BaseResponse.isRedirect");
  const persistentConnection$ = dart.privateName(base_response, "BaseResponse.persistentConnection");
  base_response.BaseResponse = class BaseResponse extends core.Object {
    get request() {
      return this[request$0];
    }
    set request(value) {
      super.request = value;
    }
    get statusCode() {
      return this[statusCode$];
    }
    set statusCode(value) {
      super.statusCode = value;
    }
    get reasonPhrase() {
      return this[reasonPhrase$];
    }
    set reasonPhrase(value) {
      super.reasonPhrase = value;
    }
    get contentLength() {
      return this[contentLength$];
    }
    set contentLength(value) {
      super.contentLength = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    get isRedirect() {
      return this[isRedirect$];
    }
    set isRedirect(value) {
      super.isRedirect = value;
    }
    get persistentConnection() {
      return this[persistentConnection$];
    }
    set persistentConnection(value) {
      super.persistentConnection = value;
    }
  };
  (base_response.BaseResponse.new = function(statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C0 || CT.C0;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[statusCode$] = statusCode;
    this[contentLength$] = contentLength;
    this[request$0] = request;
    this[headers$] = headers;
    this[isRedirect$] = isRedirect;
    this[persistentConnection$] = persistentConnection;
    this[reasonPhrase$] = reasonPhrase;
    if (dart.notNull(this.statusCode) < 100) {
      dart.throw(new core.ArgumentError.new("Invalid status code " + dart.str(this.statusCode) + "."));
    } else if (this.contentLength != null && dart.notNull(this.contentLength) < 0) {
      dart.throw(new core.ArgumentError.new("Invalid content length " + dart.str(this.contentLength) + "."));
    }
  }).prototype = base_response.BaseResponse.prototype;
  dart.addTypeTests(base_response.BaseResponse);
  dart.setLibraryUri(base_response.BaseResponse, "package:hkbook/ThridLib/http-0.12.0+4/lib/src/base_response.dart");
  dart.setFieldSignature(base_response.BaseResponse, () => ({
    __proto__: dart.getFields(base_response.BaseResponse.__proto__),
    request: dart.finalFieldType(base_request.BaseRequest),
    statusCode: dart.finalFieldType(core.int),
    reasonPhrase: dart.finalFieldType(core.String),
    contentLength: dart.finalFieldType(core.int),
    headers: dart.finalFieldType(core.Map$(core.String, core.String)),
    isRedirect: dart.finalFieldType(core.bool),
    persistentConnection: dart.finalFieldType(core.bool)
  }));
  const stream$ = dart.privateName(streamed_response, "StreamedResponse.stream");
  streamed_response.StreamedResponse = class StreamedResponse extends base_response.BaseResponse {
    get stream() {
      return this[stream$];
    }
    set stream(value) {
      super.stream = value;
    }
  };
  (streamed_response.StreamedResponse.new = function(stream, statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C0 || CT.C0;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[stream$] = utils.toByteStream(stream);
    streamed_response.StreamedResponse.__proto__.new.call(this, statusCode, {contentLength: contentLength, request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    ;
  }).prototype = streamed_response.StreamedResponse.prototype;
  dart.addTypeTests(streamed_response.StreamedResponse);
  dart.setLibraryUri(streamed_response.StreamedResponse, "package:hkbook/ThridLib/http-0.12.0+4/lib/src/streamed_response.dart");
  dart.setFieldSignature(streamed_response.StreamedResponse, () => ({
    __proto__: dart.getFields(streamed_response.StreamedResponse.__proto__),
    stream: dart.finalFieldType(byte_stream.ByteStream)
  }));
  const _contentLength = dart.privateName(base_request, "_contentLength");
  const _persistentConnection = dart.privateName(base_request, "_persistentConnection");
  const _followRedirects = dart.privateName(base_request, "_followRedirects");
  const _maxRedirects = dart.privateName(base_request, "_maxRedirects");
  const _finalized = dart.privateName(base_request, "_finalized");
  const _checkFinalized = dart.privateName(base_request, "_checkFinalized");
  const method$ = dart.privateName(base_request, "BaseRequest.method");
  const url$ = dart.privateName(base_request, "BaseRequest.url");
  const headers = dart.privateName(base_request, "BaseRequest.headers");
  base_request.BaseRequest = class BaseRequest extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get headers() {
      return this[headers];
    }
    set headers(value) {
      super.headers = value;
    }
    get contentLength() {
      return this[_contentLength];
    }
    set contentLength(value) {
      if (value != null && dart.notNull(value) < 0) {
        dart.throw(new core.ArgumentError.new("Invalid content length " + dart.str(value) + "."));
      }
      this[_checkFinalized]();
      this[_contentLength] = value;
    }
    get persistentConnection() {
      return this[_persistentConnection];
    }
    set persistentConnection(value) {
      this[_checkFinalized]();
      this[_persistentConnection] = value;
    }
    get followRedirects() {
      return this[_followRedirects];
    }
    set followRedirects(value) {
      this[_checkFinalized]();
      this[_followRedirects] = value;
    }
    get maxRedirects() {
      return this[_maxRedirects];
    }
    set maxRedirects(value) {
      this[_checkFinalized]();
      this[_maxRedirects] = value;
    }
    get finalized() {
      return this[_finalized];
    }
    finalize() {
      if (dart.test(this.finalized)) dart.throw(new core.StateError.new("Can't finalize a finalized Request."));
      this[_finalized] = true;
      return null;
    }
    send() {
      return async.async(streamed_response.StreamedResponse, (function* send() {
        let client = client$.Client.new();
        try {
          let response = (yield client.send(this));
          let stream = utils.onDone(ListOfint(), response.stream, dart.bind(client, 'close'));
          return new streamed_response.StreamedResponse.new(new byte_stream.ByteStream.new(stream), response.statusCode, {contentLength: response.contentLength, request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase});
        } catch (e) {
          let _ = dart.getThrown(e);
          client.close();
          dart.rethrow(e);
        }
      }).bind(this));
    }
    [_checkFinalized]() {
      if (!dart.test(this.finalized)) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
    toString() {
      return dart.str(this.method) + " " + dart.str(this.url);
    }
  };
  (base_request.BaseRequest.new = function(method, url) {
    this[_contentLength] = null;
    this[_persistentConnection] = true;
    this[_followRedirects] = true;
    this[_maxRedirects] = 5;
    this[_finalized] = false;
    this[method$] = method;
    this[url$] = url;
    this[headers] = LinkedHashMapOfString$String().new({equals: dart.fn((key1, key2) => key1[$toLowerCase]() === key2[$toLowerCase](), StringAndStringTobool()), hashCode: dart.fn(key => key[$toLowerCase]()[$hashCode], StringToint())});
    ;
  }).prototype = base_request.BaseRequest.prototype;
  dart.addTypeTests(base_request.BaseRequest);
  dart.setMethodSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getMethods(base_request.BaseRequest.__proto__),
    finalize: dart.fnType(byte_stream.ByteStream, []),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), []),
    [_checkFinalized]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getGetters(base_request.BaseRequest.__proto__),
    contentLength: core.int,
    persistentConnection: core.bool,
    followRedirects: core.bool,
    maxRedirects: core.int,
    finalized: core.bool
  }));
  dart.setSetterSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getSetters(base_request.BaseRequest.__proto__),
    contentLength: core.int,
    persistentConnection: core.bool,
    followRedirects: core.bool,
    maxRedirects: core.int
  }));
  dart.setLibraryUri(base_request.BaseRequest, "package:hkbook/ThridLib/http-0.12.0+4/lib/src/base_request.dart");
  dart.setFieldSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getFields(base_request.BaseRequest.__proto__),
    method: dart.finalFieldType(core.String),
    url: dart.finalFieldType(core.Uri),
    [_contentLength]: dart.fieldType(core.int),
    [_persistentConnection]: dart.fieldType(core.bool),
    [_followRedirects]: dart.fieldType(core.bool),
    [_maxRedirects]: dart.fieldType(core.int),
    headers: dart.finalFieldType(core.Map$(core.String, core.String)),
    [_finalized]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(base_request.BaseRequest, ['toString']);
  client$.Client = class Client extends core.Object {
    static new() {
      return browser_client.createClient();
    }
  };
  (client$.Client[dart.mixinNew] = function() {
  }).prototype = client$.Client.prototype;
  dart.addTypeTests(client$.Client);
  dart.setLibraryUri(client$.Client, "package:hkbook/ThridLib/http-0.12.0+4/lib/src/client.dart");
  const bodyBytes$ = dart.privateName(response$, "Response.bodyBytes");
  response$.Response = class Response extends base_response.BaseResponse {
    get bodyBytes() {
      return this[bodyBytes$];
    }
    set bodyBytes(value) {
      super.bodyBytes = value;
    }
    get body() {
      return response$._encodingForHeaders(this.headers).decode(this.bodyBytes);
    }
    static fromStream(response) {
      return async.async(response$.Response, function* fromStream() {
        let body = (yield response.stream.toBytes());
        return new response$.Response.bytes(body, response.statusCode, {request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase});
      });
    }
  };
  (response$.Response.new = function(body, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C0 || CT.C0;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    response$.Response.bytes.call(this, response$._encodingForHeaders(headers).encode(body), statusCode, {request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
  }).prototype = response$.Response.prototype;
  (response$.Response.bytes = function(bodyBytes, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C0 || CT.C0;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[bodyBytes$] = utils.toUint8List(bodyBytes);
    response$.Response.__proto__.new.call(this, statusCode, {contentLength: bodyBytes[$length], request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    ;
  }).prototype = response$.Response.prototype;
  dart.addTypeTests(response$.Response);
  dart.setGetterSignature(response$.Response, () => ({
    __proto__: dart.getGetters(response$.Response.__proto__),
    body: core.String
  }));
  dart.setLibraryUri(response$.Response, "package:hkbook/ThridLib/http-0.12.0+4/lib/src/response.dart");
  dart.setFieldSignature(response$.Response, () => ({
    __proto__: dart.getFields(response$.Response.__proto__),
    bodyBytes: dart.finalFieldType(typed_data.Uint8List)
  }));
  response$._encodingForHeaders = function _encodingForHeaders(headers) {
    return utils.encodingForCharset(response$._contentTypeForHeaders(headers).parameters[$_get]("charset"));
  };
  response$._contentTypeForHeaders = function _contentTypeForHeaders(headers) {
    let contentType = headers[$_get]("content-type");
    if (contentType != null) return media_type.MediaType.parse(contentType);
    return new media_type.MediaType.new("application", "octet-stream");
  };
  base_client._fromUriOrString = function _fromUriOrString(uri) {
    return typeof uri == 'string' ? core.Uri.parse(uri) : core.Uri.as(uri);
  };
  const _defaultEncoding = dart.privateName(request$, "_defaultEncoding");
  const _bodyBytes = dart.privateName(request$, "_bodyBytes");
  const _contentType = dart.privateName(request$, "_contentType");
  const _checkFinalized$ = dart.privateName(request$, "_checkFinalized");
  request$.Request = class Request extends base_request.BaseRequest {
    get contentLength() {
      return this.bodyBytes[$length];
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "non-streaming Request objects."));
    }
    get encoding() {
      if (this[_contentType] == null || !dart.test(this[_contentType].parameters[$containsKey]("charset"))) {
        return this[_defaultEncoding];
      }
      return utils.requiredEncodingForCharset(this[_contentType].parameters[$_get]("charset"));
    }
    set encoding(value) {
      this[_checkFinalized$]();
      this[_defaultEncoding] = value;
      let contentType = this[_contentType];
      if (contentType == null) return;
      this[_contentType] = contentType.change({parameters: new (IdentityMapOfString$String()).from(["charset", value.name])});
    }
    get bodyBytes() {
      return this[_bodyBytes];
    }
    set bodyBytes(value) {
      this[_checkFinalized$]();
      this[_bodyBytes] = utils.toUint8List(value);
    }
    get body() {
      return this.encoding.decode(this.bodyBytes);
    }
    set body(value) {
      this.bodyBytes = this.encoding.encode(value);
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new media_type.MediaType.new("text", "plain", new (IdentityMapOfString$String()).from(["charset", this.encoding.name]));
      } else if (!dart.test(contentType.parameters[$containsKey]("charset"))) {
        this[_contentType] = contentType.change({parameters: new (IdentityMapOfString$String()).from(["charset", this.encoding.name])});
      }
    }
    get bodyFields() {
      let contentType = this[_contentType];
      if (contentType == null || contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new("Cannot access the body fields of a Request without " + "content-type \"application/x-www-form-urlencoded\"."));
      }
      return core.Uri.splitQueryString(this.body, {encoding: this.encoding});
    }
    set bodyFields(fields) {
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new media_type.MediaType.new("application", "x-www-form-urlencoded");
      } else if (contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new("Cannot set the body fields of a Request with " + "content-type \"" + dart.str(contentType.mimeType) + "\"."));
      }
      this.body = utils.mapToQuery(fields, {encoding: this.encoding});
    }
    finalize() {
      super.finalize();
      return byte_stream.ByteStream.fromBytes(this.bodyBytes);
    }
    get [_contentType]() {
      let contentType = this.headers[$_get]("content-type");
      if (contentType == null) return null;
      return media_type.MediaType.parse(contentType);
    }
    set [_contentType](value) {
      this.headers[$_set]("content-type", dart.toString(value));
    }
    [_checkFinalized$]() {
      if (!dart.test(this.finalized)) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
  };
  (request$.Request.new = function(method, url) {
    this[_defaultEncoding] = convert.utf8;
    this[_bodyBytes] = _native_typed_data.NativeUint8List.new(0);
    request$.Request.__proto__.new.call(this, method, url);
    ;
  }).prototype = request$.Request.prototype;
  dart.addTypeTests(request$.Request);
  dart.setMethodSignature(request$.Request, () => ({
    __proto__: dart.getMethods(request$.Request.__proto__),
    [_checkFinalized$]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(request$.Request, () => ({
    __proto__: dart.getGetters(request$.Request.__proto__),
    encoding: convert.Encoding,
    bodyBytes: typed_data.Uint8List,
    body: core.String,
    bodyFields: core.Map$(core.String, core.String),
    [_contentType]: media_type.MediaType
  }));
  dart.setSetterSignature(request$.Request, () => ({
    __proto__: dart.getSetters(request$.Request.__proto__),
    encoding: convert.Encoding,
    bodyBytes: core.List$(core.int),
    body: core.String,
    bodyFields: core.Map$(core.String, core.String),
    [_contentType]: media_type.MediaType
  }));
  dart.setLibraryUri(request$.Request, "package:hkbook/ThridLib/http-0.12.0+4/lib/src/request.dart");
  dart.setFieldSignature(request$.Request, () => ({
    __proto__: dart.getFields(request$.Request.__proto__),
    [_defaultEncoding]: dart.fieldType(convert.Encoding),
    [_bodyBytes]: dart.fieldType(typed_data.Uint8List)
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/http-0.12.0+4/lib/src/base_client", {
    "package:hkbook/ThridLib/http-0.12.0+4/lib/src/browser_client.dart": browser_client,
    "package:hkbook/ThridLib/http-0.12.0+4/lib/src/streamed_response.dart": streamed_response,
    "package:hkbook/ThridLib/http-0.12.0+4/lib/src/base_response.dart": base_response,
    "package:hkbook/ThridLib/http-0.12.0+4/lib/src/base_request.dart": base_request,
    "package:hkbook/ThridLib/http-0.12.0+4/lib/src/client.dart": client$,
    "package:hkbook/ThridLib/http-0.12.0+4/lib/src/response.dart": response$,
    "package:hkbook/ThridLib/http-0.12.0+4/lib/src/base_client.dart": base_client,
    "package:hkbook/ThridLib/http-0.12.0+4/lib/src/request.dart": request$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["base_client.dart","browser_client.dart","base_response.dart","streamed_response.dart","base_request.dart","client.dart","response.dart","request.dart"],"names":[],"mappings":"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","file":"base_client.ddc.js"}');
  // Exports:
  return {
    ThridLib__http_0$4612$460$434__lib__src__browser_client: browser_client,
    ThridLib__http_0$4612$460$434__lib__src__streamed_response: streamed_response,
    ThridLib__http_0$4612$460$434__lib__src__base_response: base_response,
    ThridLib__http_0$4612$460$434__lib__src__base_request: base_request,
    ThridLib__http_0$4612$460$434__lib__src__client: client$,
    ThridLib__http_0$4612$460$434__lib__src__response: response$,
    ThridLib__http_0$4612$460$434__lib__src__base_client: base_client,
    ThridLib__http_0$4612$460$434__lib__src__request: request$
  };
});

//# sourceMappingURL=base_client.ddc.js.map
