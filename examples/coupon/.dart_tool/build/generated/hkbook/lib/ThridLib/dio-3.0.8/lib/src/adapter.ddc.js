define(['dart_sdk', 'packages/hkbook/ThridLib/dio-3.0.8/lib/src/headers', 'packages/hkbook/ThridLib/dio-3.0.8/lib/src/redirect_record', 'packages/hkbook/ThridLib/dio-3.0.8/lib/src/utils', 'packages/http_parser/http_parser'], function(dart_sdk, packages__hkbook__ThridLib__dio_3$460$468__lib__src__headers, packages__hkbook__ThridLib__dio_3$460$468__lib__src__redirect_record, packages__hkbook__ThridLib__dio_3$460$468__lib__src__utils, packages__http_parser__http_parser) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const headers = packages__hkbook__ThridLib__dio_3$460$468__lib__src__headers.ThridLib__dio_3$460$468__lib__src__headers;
  const redirect_record = packages__hkbook__ThridLib__dio_3$460$468__lib__src__redirect_record.ThridLib__dio_3$460$468__lib__src__redirect_record;
  const utils = packages__hkbook__ThridLib__dio_3$460$468__lib__src__utils.ThridLib__dio_3$460$468__lib__src__utils;
  const media_type = packages__http_parser__http_parser.src__media_type;
  const cancel_token = Object.create(dart.library);
  const dio_error = Object.create(dart.library);
  const response = Object.create(dart.library);
  const options$ = Object.create(dart.library);
  const transformer = Object.create(dart.library);
  const adapter = Object.create(dart.library);
  const $toString = dartx.toString;
  const $last = dartx.last;
  const $toLowerCase = dartx.toLowerCase;
  const $map = dartx.map;
  const $trim = dartx.trim;
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $startsWith = dartx.startsWith;
  const $split = dartx.split;
  const $replaceAll = dartx.replaceAll;
  const $isNotEmpty = dartx.isNotEmpty;
  const $contains = dartx.contains;
  const $first = dartx.first;
  const $length = dartx.length;
  const $addAll = dartx.addAll;
  const $toList = dartx.toList;
  let LinkedHashMapOfString$dynamic = () => (LinkedHashMapOfString$dynamic = dart.constFn(collection.LinkedHashMap$(core.String, dart.dynamic)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapEntryOfString$dynamic = () => (MapEntryOfString$dynamic = dart.constFn(core.MapEntry$(core.String, dart.dynamic)))();
  let StringAnddynamicToMapEntryOfString$dynamic = () => (StringAnddynamicToMapEntryOfString$dynamic = dart.constFn(dart.fnType(MapEntryOfString$dynamic(), [core.String, dart.dynamic])))();
  let StringAndObjectToString = () => (StringAndObjectToString = dart.constFn(dart.fnType(core.String, [core.String, core.Object])))();
  let _StreamHandlerTransformerOfUint8List$Uint8List = () => (_StreamHandlerTransformerOfUint8List$Uint8List = dart.constFn(async._StreamHandlerTransformer$(typed_data.Uint8List, typed_data.Uint8List)))();
  let EventSinkOfUint8List = () => (EventSinkOfUint8List = dart.constFn(async.EventSink$(typed_data.Uint8List)))();
  let Uint8ListAndEventSinkOfUint8ListToNull = () => (Uint8ListAndEventSinkOfUint8ListToNull = dart.constFn(dart.fnType(core.Null, [typed_data.Uint8List, EventSinkOfUint8List()])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let Uint8ListTovoid = () => (Uint8ListTovoid = dart.constFn(dart.fnType(dart.void, [typed_data.Uint8List])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let voidToFuture = () => (voidToFuture = dart.constFn(dart.fnType(async.Future, [dart.void])))();
  let StreamOfUint8List = () => (StreamOfUint8List = dart.constFn(async.Stream$(typed_data.Uint8List)))();
  let intToUint8List = () => (intToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: dio_error.DioErrorType.prototype,
        [_name$]: "DioErrorType.CONNECT_TIMEOUT",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: dio_error.DioErrorType.prototype,
        [_name$]: "DioErrorType.SEND_TIMEOUT",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: dio_error.DioErrorType.prototype,
        [_name$]: "DioErrorType.RECEIVE_TIMEOUT",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: dio_error.DioErrorType.prototype,
        [_name$]: "DioErrorType.RESPONSE",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: dio_error.DioErrorType.prototype,
        [_name$]: "DioErrorType.CANCEL",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: dio_error.DioErrorType.prototype,
        [_name$]: "DioErrorType.DEFAULT",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], dio_error.DioErrorType);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: options$.ResponseType.prototype,
        [_name$0]: "ResponseType.json",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: options$.ResponseType.prototype,
        [_name$0]: "ResponseType.stream",
        index: 1
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: options$.ResponseType.prototype,
        [_name$0]: "ResponseType.plain",
        index: 2
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: options$.ResponseType.prototype,
        [_name$0]: "ResponseType.bytes",
        index: 3
      });
    },
    get C11() {
      return C11 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], options$.ResponseType);
    }
  });
  const _cancelError = dart.privateName(cancel_token, "_cancelError");
  const _completer = dart.privateName(cancel_token, "_completer");
  cancel_token.CancelToken = class CancelToken extends core.Object {
    static isCancel(e) {
      return dart.equals(e.type, dio_error.DioErrorType.CANCEL);
    }
    get cancelError() {
      return this[_cancelError];
    }
    get isCancelled() {
      return this[_cancelError] != null;
    }
    get whenCancel() {
      return this[_completer].future;
    }
    cancel(reason) {
      if (reason === void 0) reason = null;
      this[_cancelError] = new dio_error.DioError.new({type: dio_error.DioErrorType.CANCEL, error: reason});
      this[_completer].complete();
    }
  };
  (cancel_token.CancelToken.new = function() {
    this[_cancelError] = null;
    this[_completer] = null;
    this[_completer] = async.Completer.new();
  }).prototype = cancel_token.CancelToken.prototype;
  dart.addTypeTests(cancel_token.CancelToken);
  dart.setMethodSignature(cancel_token.CancelToken, () => ({
    __proto__: dart.getMethods(cancel_token.CancelToken.__proto__),
    cancel: dart.fnType(dart.void, [], [dart.dynamic])
  }));
  dart.setGetterSignature(cancel_token.CancelToken, () => ({
    __proto__: dart.getGetters(cancel_token.CancelToken.__proto__),
    cancelError: dio_error.DioError,
    isCancelled: core.bool,
    whenCancel: async.Future$(dart.void)
  }));
  dart.setLibraryUri(cancel_token.CancelToken, "package:hkbook/ThridLib/dio-3.0.8/lib/src/cancel_token.dart");
  dart.setFieldSignature(cancel_token.CancelToken, () => ({
    __proto__: dart.getFields(cancel_token.CancelToken.__proto__),
    [_cancelError]: dart.fieldType(dio_error.DioError),
    [_completer]: dart.fieldType(async.Completer)
  }));
  const _name$ = dart.privateName(dio_error, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  dio_error.DioErrorType = class DioErrorType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (dio_error.DioErrorType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = dio_error.DioErrorType.prototype;
  dart.addTypeTests(dio_error.DioErrorType);
  dart.setLibraryUri(dio_error.DioErrorType, "package:hkbook/ThridLib/dio-3.0.8/lib/src/dio_error.dart");
  dart.setFieldSignature(dio_error.DioErrorType, () => ({
    __proto__: dart.getFields(dio_error.DioErrorType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(dio_error.DioErrorType, ['toString']);
  dio_error.DioErrorType.CONNECT_TIMEOUT = C0 || CT.C0;
  dio_error.DioErrorType.SEND_TIMEOUT = C1 || CT.C1;
  dio_error.DioErrorType.RECEIVE_TIMEOUT = C2 || CT.C2;
  dio_error.DioErrorType.RESPONSE = C3 || CT.C3;
  dio_error.DioErrorType.CANCEL = C4 || CT.C4;
  dio_error.DioErrorType.DEFAULT = C5 || CT.C5;
  dio_error.DioErrorType.values = C6 || CT.C6;
  const request$ = dart.privateName(dio_error, "DioError.request");
  const response$ = dart.privateName(dio_error, "DioError.response");
  const type$ = dart.privateName(dio_error, "DioError.type");
  const error$ = dart.privateName(dio_error, "DioError.error");
  dio_error.DioError = class DioError extends core.Object {
    get request() {
      return this[request$];
    }
    set request(value) {
      this[request$] = value;
    }
    get response() {
      return this[response$];
    }
    set response(value) {
      this[response$] = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      this[type$] = value;
    }
    get error() {
      return this[error$];
    }
    set error(value) {
      this[error$] = value;
    }
    get message() {
      let t0, t0$;
      t0$ = (t0 = this.error, t0 == null ? null : dart.toString(t0));
      return t0$ == null ? "" : t0$;
    }
    toString() {
      let msg = "DioError [" + dart.str(this.type) + "]: " + dart.str(this.message);
      if (core.Error.is(this.error)) {
        msg = msg + ("\n" + dart.str(dart.dload(this.error, 'stackTrace')));
      }
      return msg;
    }
  };
  (dio_error.DioError.new = function(opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let response = opts && 'response' in opts ? opts.response : null;
    let type = opts && 'type' in opts ? opts.type : C5 || CT.C5;
    let error = opts && 'error' in opts ? opts.error : null;
    this[request$] = request;
    this[response$] = response;
    this[type$] = type;
    this[error$] = error;
    ;
  }).prototype = dio_error.DioError.prototype;
  dart.addTypeTests(dio_error.DioError);
  dio_error.DioError[dart.implements] = () => [core.Exception];
  dart.setGetterSignature(dio_error.DioError, () => ({
    __proto__: dart.getGetters(dio_error.DioError.__proto__),
    message: core.String
  }));
  dart.setLibraryUri(dio_error.DioError, "package:hkbook/ThridLib/dio-3.0.8/lib/src/dio_error.dart");
  dart.setFieldSignature(dio_error.DioError, () => ({
    __proto__: dart.getFields(dio_error.DioError.__proto__),
    request: dart.fieldType(options$.RequestOptions),
    response: dart.fieldType(response.Response),
    type: dart.fieldType(dio_error.DioErrorType),
    error: dart.fieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(dio_error.DioError, ['toString']);
  const _is_Response_default = Symbol('_is_Response_default');
  const data$ = dart.privateName(response, "Response.data");
  const headers$ = dart.privateName(response, "Response.headers");
  const request$0 = dart.privateName(response, "Response.request");
  const statusCode$ = dart.privateName(response, "Response.statusCode");
  const statusMessage$ = dart.privateName(response, "Response.statusMessage");
  const extra$ = dart.privateName(response, "Response.extra");
  const redirects$ = dart.privateName(response, "Response.redirects");
  const isRedirect$ = dart.privateName(response, "Response.isRedirect");
  response.Response$ = dart.generic(T => {
    class Response extends core.Object {
      get data() {
        return this[data$];
      }
      set data(value) {
        this[data$] = T._check(value);
      }
      get headers() {
        return this[headers$];
      }
      set headers(value) {
        this[headers$] = value;
      }
      get request() {
        return this[request$0];
      }
      set request(value) {
        this[request$0] = value;
      }
      get statusCode() {
        return this[statusCode$];
      }
      set statusCode(value) {
        this[statusCode$] = value;
      }
      get statusMessage() {
        return this[statusMessage$];
      }
      set statusMessage(value) {
        this[statusMessage$] = value;
      }
      get extra() {
        return this[extra$];
      }
      set extra(value) {
        this[extra$] = value;
      }
      get redirects() {
        return this[redirects$];
      }
      set redirects(value) {
        this[redirects$] = value;
      }
      get isRedirect() {
        return this[isRedirect$];
      }
      set isRedirect(value) {
        super.isRedirect = value;
      }
      get realUri() {
        let t0, t0$;
        t0$ = (t0 = this.redirects[$last], t0 == null ? null : t0.location);
        return t0$ == null ? this.request.uri : t0$;
      }
      toString() {
        if (core.Map.is(this.data)) {
          return convert.json.encode(this.data);
        }
        return dart.toString(this.data);
      }
    }
    (Response.new = function(opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let request = opts && 'request' in opts ? opts.request : null;
      let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : null;
      let statusCode = opts && 'statusCode' in opts ? opts.statusCode : null;
      let statusMessage = opts && 'statusMessage' in opts ? opts.statusMessage : null;
      let redirects = opts && 'redirects' in opts ? opts.redirects : null;
      let extra = opts && 'extra' in opts ? opts.extra : null;
      this[data$] = data;
      this[headers$] = headers;
      this[request$0] = request;
      this[isRedirect$] = isRedirect;
      this[statusCode$] = statusCode;
      this[statusMessage$] = statusMessage;
      this[redirects$] = redirects;
      this[extra$] = extra;
      ;
    }).prototype = Response.prototype;
    dart.addTypeTests(Response);
    Response.prototype[_is_Response_default] = true;
    dart.setGetterSignature(Response, () => ({
      __proto__: dart.getGetters(Response.__proto__),
      realUri: core.Uri
    }));
    dart.setLibraryUri(Response, "package:hkbook/ThridLib/dio-3.0.8/lib/src/response.dart");
    dart.setFieldSignature(Response, () => ({
      __proto__: dart.getFields(Response.__proto__),
      data: dart.fieldType(T),
      headers: dart.fieldType(headers.Headers),
      request: dart.fieldType(options$.RequestOptions),
      statusCode: dart.fieldType(core.int),
      statusMessage: dart.fieldType(core.String),
      extra: dart.fieldType(core.Map$(core.String, dart.dynamic)),
      redirects: dart.fieldType(core.List$(redirect_record.RedirectRecord)),
      isRedirect: dart.finalFieldType(core.bool)
    }));
    dart.defineExtensionMethods(Response, ['toString']);
    return Response;
  });
  response.Response = response.Response$();
  dart.addTypeTests(response.Response, _is_Response_default);
  const _name$0 = dart.privateName(options$, "_name");
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  options$.ResponseType = class ResponseType extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (options$.ResponseType.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = options$.ResponseType.prototype;
  dart.addTypeTests(options$.ResponseType);
  dart.setLibraryUri(options$.ResponseType, "package:hkbook/ThridLib/dio-3.0.8/lib/src/options.dart");
  dart.setFieldSignature(options$.ResponseType, () => ({
    __proto__: dart.getFields(options$.ResponseType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(options$.ResponseType, ['toString']);
  options$.ResponseType.json = C7 || CT.C7;
  options$.ResponseType.stream = C8 || CT.C8;
  options$.ResponseType.plain = C9 || CT.C9;
  options$.ResponseType.bytes = C10 || CT.C10;
  options$.ResponseType.values = C11 || CT.C11;
  const method$ = dart.privateName(options$, "_RequestConfig.method");
  const headers$0 = dart.privateName(options$, "_RequestConfig.headers");
  const sendTimeout$ = dart.privateName(options$, "_RequestConfig.sendTimeout");
  const receiveTimeout$ = dart.privateName(options$, "_RequestConfig.receiveTimeout");
  const responseType$ = dart.privateName(options$, "_RequestConfig.responseType");
  const validateStatus$ = dart.privateName(options$, "_RequestConfig.validateStatus");
  const receiveDataWhenStatusError$ = dart.privateName(options$, "_RequestConfig.receiveDataWhenStatusError");
  const extra$0 = dart.privateName(options$, "_RequestConfig.extra");
  const followRedirects$ = dart.privateName(options$, "_RequestConfig.followRedirects");
  const maxRedirects$ = dart.privateName(options$, "_RequestConfig.maxRedirects");
  const requestEncoder$ = dart.privateName(options$, "_RequestConfig.requestEncoder");
  const responseDecoder$ = dart.privateName(options$, "_RequestConfig.responseDecoder");
  options$._RequestConfig = class _RequestConfig extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      this[method$] = value;
    }
    get headers() {
      return this[headers$0];
    }
    set headers(value) {
      this[headers$0] = value;
    }
    get sendTimeout() {
      return this[sendTimeout$];
    }
    set sendTimeout(value) {
      this[sendTimeout$] = value;
    }
    get receiveTimeout() {
      return this[receiveTimeout$];
    }
    set receiveTimeout(value) {
      this[receiveTimeout$] = value;
    }
    get responseType() {
      return this[responseType$];
    }
    set responseType(value) {
      this[responseType$] = value;
    }
    get validateStatus() {
      return this[validateStatus$];
    }
    set validateStatus(value) {
      this[validateStatus$] = value;
    }
    get receiveDataWhenStatusError() {
      return this[receiveDataWhenStatusError$];
    }
    set receiveDataWhenStatusError(value) {
      this[receiveDataWhenStatusError$] = value;
    }
    get extra() {
      return this[extra$0];
    }
    set extra(value) {
      this[extra$0] = value;
    }
    get followRedirects() {
      return this[followRedirects$];
    }
    set followRedirects(value) {
      this[followRedirects$] = value;
    }
    get maxRedirects() {
      return this[maxRedirects$];
    }
    set maxRedirects(value) {
      this[maxRedirects$] = value;
    }
    get requestEncoder() {
      return this[requestEncoder$];
    }
    set requestEncoder(value) {
      this[requestEncoder$] = value;
    }
    get responseDecoder() {
      return this[responseDecoder$];
    }
    set responseDecoder(value) {
      this[responseDecoder$] = value;
    }
    set contentType(contentType) {
      let t0, t0$;
      this.headers[$_set]("content-type", (t0$ = (t0 = contentType, t0 == null ? null : t0[$toLowerCase]()), t0$ == null ? null : t0$[$trim]()));
    }
    get contentType() {
      return core.String._check(this.headers[$_get]("content-type"));
    }
  };
  (options$._RequestConfig.new = function(opts) {
    let t0, t0$;
    let method = opts && 'method' in opts ? opts.method : null;
    let receiveTimeout = opts && 'receiveTimeout' in opts ? opts.receiveTimeout : null;
    let sendTimeout = opts && 'sendTimeout' in opts ? opts.sendTimeout : null;
    let extra = opts && 'extra' in opts ? opts.extra : null;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    let responseType = opts && 'responseType' in opts ? opts.responseType : null;
    let validateStatus = opts && 'validateStatus' in opts ? opts.validateStatus : null;
    let receiveDataWhenStatusError = opts && 'receiveDataWhenStatusError' in opts ? opts.receiveDataWhenStatusError : true;
    let followRedirects = opts && 'followRedirects' in opts ? opts.followRedirects : true;
    let maxRedirects = opts && 'maxRedirects' in opts ? opts.maxRedirects : 5;
    let requestEncoder = opts && 'requestEncoder' in opts ? opts.requestEncoder : null;
    let responseDecoder = opts && 'responseDecoder' in opts ? opts.responseDecoder : null;
    this[headers$0] = null;
    this[extra$0] = null;
    this[method$] = method;
    this[receiveTimeout$] = receiveTimeout;
    this[sendTimeout$] = sendTimeout;
    this[responseType$] = responseType;
    this[validateStatus$] = validateStatus;
    this[receiveDataWhenStatusError$] = receiveDataWhenStatusError;
    this[followRedirects$] = followRedirects;
    this[maxRedirects$] = maxRedirects;
    this[requestEncoder$] = requestEncoder;
    this[responseDecoder$] = responseDecoder;
    this.headers = (t0 = headers, t0 == null ? new (IdentityMapOfString$dynamic()).new() : t0);
    this.extra = (t0$ = extra, t0$ == null ? new (IdentityMapOfString$dynamic()).new() : t0$);
    this.contentType = contentType;
    this.headers = this.headers[$map](core.String, dart.dynamic, dart.fn((key, v) => new (MapEntryOfString$dynamic()).__(key[$toLowerCase]()[$toString](), v), StringAnddynamicToMapEntryOfString$dynamic()));
  }).prototype = options$._RequestConfig.prototype;
  dart.addTypeTests(options$._RequestConfig);
  dart.setGetterSignature(options$._RequestConfig, () => ({
    __proto__: dart.getGetters(options$._RequestConfig.__proto__),
    contentType: core.String
  }));
  dart.setSetterSignature(options$._RequestConfig, () => ({
    __proto__: dart.getSetters(options$._RequestConfig.__proto__),
    contentType: core.String
  }));
  dart.setLibraryUri(options$._RequestConfig, "package:hkbook/ThridLib/dio-3.0.8/lib/src/options.dart");
  dart.setFieldSignature(options$._RequestConfig, () => ({
    __proto__: dart.getFields(options$._RequestConfig.__proto__),
    method: dart.fieldType(core.String),
    headers: dart.fieldType(core.Map$(core.String, dart.dynamic)),
    sendTimeout: dart.fieldType(core.int),
    receiveTimeout: dart.fieldType(core.int),
    responseType: dart.fieldType(options$.ResponseType),
    validateStatus: dart.fieldType(dart.fnType(core.bool, [core.int])),
    receiveDataWhenStatusError: dart.fieldType(core.bool),
    extra: dart.fieldType(core.Map$(core.String, dart.dynamic)),
    followRedirects: dart.fieldType(core.bool),
    maxRedirects: dart.fieldType(core.int),
    requestEncoder: dart.fieldType(dart.fnType(core.List$(core.int), [core.String, options$.RequestOptions])),
    responseDecoder: dart.fieldType(dart.fnType(core.String, [core.List$(core.int), options$.RequestOptions, adapter.ResponseBody]))
  }));
  const baseUrl$ = dart.privateName(options$, "BaseOptions.baseUrl");
  const queryParameters$ = dart.privateName(options$, "BaseOptions.queryParameters");
  const connectTimeout$ = dart.privateName(options$, "BaseOptions.connectTimeout");
  options$.BaseOptions = class BaseOptions extends options$._RequestConfig {
    get baseUrl() {
      return this[baseUrl$];
    }
    set baseUrl(value) {
      this[baseUrl$] = value;
    }
    get queryParameters() {
      return this[queryParameters$];
    }
    set queryParameters(value) {
      this[queryParameters$] = value;
    }
    get connectTimeout() {
      return this[connectTimeout$];
    }
    set connectTimeout(value) {
      this[connectTimeout$] = value;
    }
    merge(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t1, t0$4, t1$, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12;
      let method = opts && 'method' in opts ? opts.method : null;
      let baseUrl = opts && 'baseUrl' in opts ? opts.baseUrl : null;
      let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
      let path = opts && 'path' in opts ? opts.path : null;
      let connectTimeout = opts && 'connectTimeout' in opts ? opts.connectTimeout : null;
      let receiveTimeout = opts && 'receiveTimeout' in opts ? opts.receiveTimeout : null;
      let sendTimeout = opts && 'sendTimeout' in opts ? opts.sendTimeout : null;
      let extra = opts && 'extra' in opts ? opts.extra : null;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let responseType = opts && 'responseType' in opts ? opts.responseType : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let validateStatus = opts && 'validateStatus' in opts ? opts.validateStatus : null;
      let receiveDataWhenStatusError = opts && 'receiveDataWhenStatusError' in opts ? opts.receiveDataWhenStatusError : null;
      let followRedirects = opts && 'followRedirects' in opts ? opts.followRedirects : null;
      let maxRedirects = opts && 'maxRedirects' in opts ? opts.maxRedirects : null;
      let requestEncoder = opts && 'requestEncoder' in opts ? opts.requestEncoder : null;
      let responseDecoder = opts && 'responseDecoder' in opts ? opts.responseDecoder : null;
      return new options$.BaseOptions.new({method: (t0 = method, t0 == null ? this.method : t0), baseUrl: (t0$ = baseUrl, t0$ == null ? this.baseUrl : t0$), queryParameters: (t0$0 = queryParameters, t0$0 == null ? this.queryParameters : t0$0), connectTimeout: (t0$1 = connectTimeout, t0$1 == null ? this.connectTimeout : t0$1), receiveTimeout: (t0$2 = receiveTimeout, t0$2 == null ? this.receiveTimeout : t0$2), sendTimeout: (t0$3 = sendTimeout, t0$3 == null ? this.sendTimeout : t0$3), extra: (t0$4 = extra, t0$4 == null ? LinkedHashMapOfString$dynamic().from((t1 = this.extra, t1 == null ? new _js_helper.LinkedMap.new() : t1)) : t0$4), headers: (t0$5 = headers, t0$5 == null ? LinkedHashMapOfString$dynamic().from((t1$ = this.headers, t1$ == null ? new _js_helper.LinkedMap.new() : t1$)) : t0$5), responseType: (t0$6 = responseType, t0$6 == null ? this.responseType : t0$6), contentType: (t0$7 = contentType, t0$7 == null ? this.contentType : t0$7), validateStatus: (t0$8 = validateStatus, t0$8 == null ? this.validateStatus : t0$8), receiveDataWhenStatusError: (t0$9 = receiveDataWhenStatusError, t0$9 == null ? this.receiveDataWhenStatusError : t0$9), followRedirects: (t0$10 = followRedirects, t0$10 == null ? this.followRedirects : t0$10), maxRedirects: (t0$11 = maxRedirects, t0$11 == null ? this.maxRedirects : t0$11), requestEncoder: requestEncoder, responseDecoder: (t0$12 = responseDecoder, t0$12 == null ? this.responseDecoder : t0$12)});
    }
  };
  (options$.BaseOptions.new = function(opts) {
    let method = opts && 'method' in opts ? opts.method : null;
    let connectTimeout = opts && 'connectTimeout' in opts ? opts.connectTimeout : null;
    let receiveTimeout = opts && 'receiveTimeout' in opts ? opts.receiveTimeout : null;
    let sendTimeout = opts && 'sendTimeout' in opts ? opts.sendTimeout : null;
    let baseUrl = opts && 'baseUrl' in opts ? opts.baseUrl : null;
    let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
    let extra = opts && 'extra' in opts ? opts.extra : null;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let responseType = opts && 'responseType' in opts ? opts.responseType : C7 || CT.C7;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    let validateStatus = opts && 'validateStatus' in opts ? opts.validateStatus : null;
    let receiveDataWhenStatusError = opts && 'receiveDataWhenStatusError' in opts ? opts.receiveDataWhenStatusError : true;
    let followRedirects = opts && 'followRedirects' in opts ? opts.followRedirects : true;
    let maxRedirects = opts && 'maxRedirects' in opts ? opts.maxRedirects : 5;
    let requestEncoder = opts && 'requestEncoder' in opts ? opts.requestEncoder : null;
    let responseDecoder = opts && 'responseDecoder' in opts ? opts.responseDecoder : null;
    this[connectTimeout$] = connectTimeout;
    this[baseUrl$] = baseUrl;
    this[queryParameters$] = queryParameters;
    options$.BaseOptions.__proto__.new.call(this, {method: method, receiveTimeout: receiveTimeout, sendTimeout: sendTimeout, extra: extra, headers: headers, responseType: responseType, contentType: contentType, validateStatus: validateStatus, receiveDataWhenStatusError: receiveDataWhenStatusError, followRedirects: followRedirects, maxRedirects: maxRedirects, requestEncoder: requestEncoder, responseDecoder: responseDecoder});
    ;
  }).prototype = options$.BaseOptions.prototype;
  dart.addTypeTests(options$.BaseOptions);
  dart.setMethodSignature(options$.BaseOptions, () => ({
    __proto__: dart.getMethods(options$.BaseOptions.__proto__),
    merge: dart.fnType(options$.BaseOptions, [], {baseUrl: core.String, connectTimeout: core.int, contentType: core.String, extra: core.Map$(core.String, dart.dynamic), followRedirects: core.bool, headers: core.Map$(core.String, dart.dynamic), maxRedirects: core.int, method: core.String, path: core.String, queryParameters: core.Map$(core.String, dart.dynamic), receiveDataWhenStatusError: core.bool, receiveTimeout: core.int, requestEncoder: dart.fnType(core.List$(core.int), [core.String, options$.RequestOptions]), responseDecoder: dart.fnType(core.String, [core.List$(core.int), options$.RequestOptions, adapter.ResponseBody]), responseType: options$.ResponseType, sendTimeout: core.int, validateStatus: dart.fnType(core.bool, [core.int])}, {})
  }));
  dart.setLibraryUri(options$.BaseOptions, "package:hkbook/ThridLib/dio-3.0.8/lib/src/options.dart");
  dart.setFieldSignature(options$.BaseOptions, () => ({
    __proto__: dart.getFields(options$.BaseOptions.__proto__),
    baseUrl: dart.fieldType(core.String),
    queryParameters: dart.fieldType(core.Map$(core.String, dart.dynamic)),
    connectTimeout: dart.fieldType(core.int)
  }));
  options$.Options = class Options extends options$._RequestConfig {
    merge(opts) {
      let t0, t0$, t0$0, t1, t0$1, t1$, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
      let method = opts && 'method' in opts ? opts.method : null;
      let sendTimeout = opts && 'sendTimeout' in opts ? opts.sendTimeout : null;
      let receiveTimeout = opts && 'receiveTimeout' in opts ? opts.receiveTimeout : null;
      let extra = opts && 'extra' in opts ? opts.extra : null;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let responseType = opts && 'responseType' in opts ? opts.responseType : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let validateStatus = opts && 'validateStatus' in opts ? opts.validateStatus : null;
      let receiveDataWhenStatusError = opts && 'receiveDataWhenStatusError' in opts ? opts.receiveDataWhenStatusError : null;
      let followRedirects = opts && 'followRedirects' in opts ? opts.followRedirects : null;
      let maxRedirects = opts && 'maxRedirects' in opts ? opts.maxRedirects : null;
      let requestEncoder = opts && 'requestEncoder' in opts ? opts.requestEncoder : null;
      let responseDecoder = opts && 'responseDecoder' in opts ? opts.responseDecoder : null;
      return new options$.Options.new({method: (t0 = method, t0 == null ? this.method : t0), sendTimeout: (t0$ = sendTimeout, t0$ == null ? this.sendTimeout : t0$), receiveTimeout: (t0$0 = receiveTimeout, t0$0 == null ? this.receiveTimeout : t0$0), extra: (t0$1 = extra, t0$1 == null ? LinkedHashMapOfString$dynamic().from((t1 = this.extra, t1 == null ? new _js_helper.LinkedMap.new() : t1)) : t0$1), headers: (t0$2 = headers, t0$2 == null ? LinkedHashMapOfString$dynamic().from((t1$ = this.headers, t1$ == null ? new _js_helper.LinkedMap.new() : t1$)) : t0$2), responseType: (t0$3 = responseType, t0$3 == null ? this.responseType : t0$3), contentType: (t0$4 = contentType, t0$4 == null ? this.contentType : t0$4), validateStatus: (t0$5 = validateStatus, t0$5 == null ? this.validateStatus : t0$5), receiveDataWhenStatusError: (t0$6 = receiveDataWhenStatusError, t0$6 == null ? this.receiveDataWhenStatusError : t0$6), followRedirects: (t0$7 = followRedirects, t0$7 == null ? this.followRedirects : t0$7), maxRedirects: (t0$8 = maxRedirects, t0$8 == null ? this.maxRedirects : t0$8), requestEncoder: requestEncoder, responseDecoder: (t0$9 = responseDecoder, t0$9 == null ? this.responseDecoder : t0$9)});
    }
  };
  (options$.Options.new = function(opts) {
    let method = opts && 'method' in opts ? opts.method : null;
    let sendTimeout = opts && 'sendTimeout' in opts ? opts.sendTimeout : null;
    let receiveTimeout = opts && 'receiveTimeout' in opts ? opts.receiveTimeout : null;
    let extra = opts && 'extra' in opts ? opts.extra : null;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let responseType = opts && 'responseType' in opts ? opts.responseType : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    let validateStatus = opts && 'validateStatus' in opts ? opts.validateStatus : null;
    let receiveDataWhenStatusError = opts && 'receiveDataWhenStatusError' in opts ? opts.receiveDataWhenStatusError : null;
    let followRedirects = opts && 'followRedirects' in opts ? opts.followRedirects : null;
    let maxRedirects = opts && 'maxRedirects' in opts ? opts.maxRedirects : null;
    let requestEncoder = opts && 'requestEncoder' in opts ? opts.requestEncoder : null;
    let responseDecoder = opts && 'responseDecoder' in opts ? opts.responseDecoder : null;
    options$.Options.__proto__.new.call(this, {method: method, sendTimeout: sendTimeout, receiveTimeout: receiveTimeout, extra: extra, headers: headers, responseType: responseType, contentType: contentType, validateStatus: validateStatus, receiveDataWhenStatusError: receiveDataWhenStatusError, followRedirects: followRedirects, maxRedirects: maxRedirects, requestEncoder: requestEncoder, responseDecoder: responseDecoder});
    ;
  }).prototype = options$.Options.prototype;
  dart.addTypeTests(options$.Options);
  dart.setMethodSignature(options$.Options, () => ({
    __proto__: dart.getMethods(options$.Options.__proto__),
    merge: dart.fnType(options$.Options, [], {contentType: core.String, extra: core.Map$(core.String, dart.dynamic), followRedirects: core.bool, headers: core.Map$(core.String, dart.dynamic), maxRedirects: core.int, method: core.String, receiveDataWhenStatusError: core.bool, receiveTimeout: core.int, requestEncoder: dart.fnType(core.List$(core.int), [core.String, options$.RequestOptions]), responseDecoder: dart.fnType(core.String, [core.List$(core.int), options$.RequestOptions, adapter.ResponseBody]), responseType: options$.ResponseType, sendTimeout: core.int, validateStatus: dart.fnType(core.bool, [core.int])}, {})
  }));
  dart.setLibraryUri(options$.Options, "package:hkbook/ThridLib/dio-3.0.8/lib/src/options.dart");
  const data$0 = dart.privateName(options$, "RequestOptions.data");
  const baseUrl$0 = dart.privateName(options$, "RequestOptions.baseUrl");
  const path$ = dart.privateName(options$, "RequestOptions.path");
  const queryParameters$0 = dart.privateName(options$, "RequestOptions.queryParameters");
  const cancelToken$ = dart.privateName(options$, "RequestOptions.cancelToken");
  const onReceiveProgress$ = dart.privateName(options$, "RequestOptions.onReceiveProgress");
  const onSendProgress$ = dart.privateName(options$, "RequestOptions.onSendProgress");
  const connectTimeout$0 = dart.privateName(options$, "RequestOptions.connectTimeout");
  options$.RequestOptions = class RequestOptions extends options$.Options {
    get data() {
      return this[data$0];
    }
    set data(value) {
      this[data$0] = value;
    }
    get baseUrl() {
      return this[baseUrl$0];
    }
    set baseUrl(value) {
      this[baseUrl$0] = value;
    }
    get path() {
      return this[path$];
    }
    set path(value) {
      this[path$] = value;
    }
    get queryParameters() {
      return this[queryParameters$0];
    }
    set queryParameters(value) {
      this[queryParameters$0] = value;
    }
    get cancelToken() {
      return this[cancelToken$];
    }
    set cancelToken(value) {
      this[cancelToken$] = value;
    }
    get onReceiveProgress() {
      return this[onReceiveProgress$];
    }
    set onReceiveProgress(value) {
      this[onReceiveProgress$] = value;
    }
    get onSendProgress() {
      return this[onSendProgress$];
    }
    set onSendProgress(value) {
      this[onSendProgress$] = value;
    }
    get connectTimeout() {
      return this[connectTimeout$0];
    }
    set connectTimeout(value) {
      this[connectTimeout$0] = value;
    }
    merge(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t1, t0$9, t1$, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17;
      let method = opts && 'method' in opts ? opts.method : null;
      let sendTimeout = opts && 'sendTimeout' in opts ? opts.sendTimeout : null;
      let receiveTimeout = opts && 'receiveTimeout' in opts ? opts.receiveTimeout : null;
      let connectTimeout = opts && 'connectTimeout' in opts ? opts.connectTimeout : null;
      let data = opts && 'data' in opts ? opts.data : null;
      let path = opts && 'path' in opts ? opts.path : null;
      let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
      let baseUrl = opts && 'baseUrl' in opts ? opts.baseUrl : null;
      let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
      let onSendProgress = opts && 'onSendProgress' in opts ? opts.onSendProgress : null;
      let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
      let extra = opts && 'extra' in opts ? opts.extra : null;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let responseType = opts && 'responseType' in opts ? opts.responseType : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let validateStatus = opts && 'validateStatus' in opts ? opts.validateStatus : null;
      let receiveDataWhenStatusError = opts && 'receiveDataWhenStatusError' in opts ? opts.receiveDataWhenStatusError : true;
      let followRedirects = opts && 'followRedirects' in opts ? opts.followRedirects : true;
      let maxRedirects = opts && 'maxRedirects' in opts ? opts.maxRedirects : null;
      let requestEncoder = opts && 'requestEncoder' in opts ? opts.requestEncoder : null;
      let responseDecoder = opts && 'responseDecoder' in opts ? opts.responseDecoder : null;
      return new options$.RequestOptions.new({method: (t0 = method, t0 == null ? this.method : t0), sendTimeout: (t0$ = sendTimeout, t0$ == null ? this.sendTimeout : t0$), receiveTimeout: (t0$0 = receiveTimeout, t0$0 == null ? this.receiveTimeout : t0$0), connectTimeout: (t0$1 = connectTimeout, t0$1 == null ? this.connectTimeout : t0$1), data: (t0$2 = data, t0$2 == null ? this.data : t0$2), path: (t0$3 = path, t0$3 == null ? this.path : t0$3), queryParameters: (t0$4 = queryParameters, t0$4 == null ? this.queryParameters : t0$4), baseUrl: (t0$5 = baseUrl, t0$5 == null ? this.baseUrl : t0$5), onReceiveProgress: (t0$6 = onReceiveProgress, t0$6 == null ? this.onReceiveProgress : t0$6), onSendProgress: (t0$7 = onSendProgress, t0$7 == null ? this.onSendProgress : t0$7), cancelToken: (t0$8 = cancelToken, t0$8 == null ? this.cancelToken : t0$8), extra: (t0$9 = extra, t0$9 == null ? LinkedHashMapOfString$dynamic().from((t1 = this.extra, t1 == null ? new _js_helper.LinkedMap.new() : t1)) : t0$9), headers: (t0$10 = headers, t0$10 == null ? LinkedHashMapOfString$dynamic().from((t1$ = this.headers, t1$ == null ? new _js_helper.LinkedMap.new() : t1$)) : t0$10), responseType: (t0$11 = responseType, t0$11 == null ? this.responseType : t0$11), contentType: (t0$12 = contentType, t0$12 == null ? this.contentType : t0$12), validateStatus: (t0$13 = validateStatus, t0$13 == null ? this.validateStatus : t0$13), receiveDataWhenStatusError: (t0$14 = receiveDataWhenStatusError, t0$14 == null ? this.receiveDataWhenStatusError : t0$14), followRedirects: (t0$15 = followRedirects, t0$15 == null ? this.followRedirects : t0$15), maxRedirects: (t0$16 = maxRedirects, t0$16 == null ? this.maxRedirects : t0$16), requestEncoder: requestEncoder, responseDecoder: (t0$17 = responseDecoder, t0$17 == null ? this.responseDecoder : t0$17)});
    }
    get uri() {
      let _url = this.path;
      if (!_url[$startsWith](core.RegExp.new("https?:"))) {
        _url = dart.notNull(this.baseUrl) + dart.notNull(_url);
        let s = _url[$split](":/");
        _url = dart.notNull(s[$_get](0)) + ":/" + s[$_get](1)[$replaceAll]("//", "/");
      }
      let query = transformer.Transformer.urlEncodeMap(this.queryParameters);
      if (query[$isNotEmpty]) {
        _url = dart.notNull(_url) + ((_url[$contains]("?") ? "&" : "?") + dart.notNull(query));
      }
      return core.Uri.parse(_url).normalizePath();
    }
  };
  (options$.RequestOptions.new = function(opts) {
    let method = opts && 'method' in opts ? opts.method : null;
    let sendTimeout = opts && 'sendTimeout' in opts ? opts.sendTimeout : null;
    let receiveTimeout = opts && 'receiveTimeout' in opts ? opts.receiveTimeout : null;
    let connectTimeout = opts && 'connectTimeout' in opts ? opts.connectTimeout : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let path = opts && 'path' in opts ? opts.path : null;
    let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
    let baseUrl = opts && 'baseUrl' in opts ? opts.baseUrl : null;
    let onReceiveProgress = opts && 'onReceiveProgress' in opts ? opts.onReceiveProgress : null;
    let onSendProgress = opts && 'onSendProgress' in opts ? opts.onSendProgress : null;
    let cancelToken = opts && 'cancelToken' in opts ? opts.cancelToken : null;
    let extra = opts && 'extra' in opts ? opts.extra : null;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let responseType = opts && 'responseType' in opts ? opts.responseType : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    let validateStatus = opts && 'validateStatus' in opts ? opts.validateStatus : null;
    let receiveDataWhenStatusError = opts && 'receiveDataWhenStatusError' in opts ? opts.receiveDataWhenStatusError : true;
    let followRedirects = opts && 'followRedirects' in opts ? opts.followRedirects : true;
    let maxRedirects = opts && 'maxRedirects' in opts ? opts.maxRedirects : null;
    let requestEncoder = opts && 'requestEncoder' in opts ? opts.requestEncoder : null;
    let responseDecoder = opts && 'responseDecoder' in opts ? opts.responseDecoder : null;
    this[path$] = "";
    this[connectTimeout$0] = connectTimeout;
    this[data$0] = data;
    this[path$] = path;
    this[queryParameters$0] = queryParameters;
    this[baseUrl$0] = baseUrl;
    this[onReceiveProgress$] = onReceiveProgress;
    this[onSendProgress$] = onSendProgress;
    this[cancelToken$] = cancelToken;
    options$.RequestOptions.__proto__.new.call(this, {method: method, sendTimeout: sendTimeout, receiveTimeout: receiveTimeout, extra: extra, headers: headers, responseType: responseType, contentType: contentType, validateStatus: validateStatus, receiveDataWhenStatusError: receiveDataWhenStatusError, followRedirects: followRedirects, maxRedirects: maxRedirects, requestEncoder: requestEncoder, responseDecoder: responseDecoder});
    ;
  }).prototype = options$.RequestOptions.prototype;
  dart.addTypeTests(options$.RequestOptions);
  dart.setMethodSignature(options$.RequestOptions, () => ({
    __proto__: dart.getMethods(options$.RequestOptions.__proto__),
    merge: dart.fnType(options$.RequestOptions, [], {baseUrl: core.String, cancelToken: cancel_token.CancelToken, connectTimeout: core.int, contentType: core.String, data: core.String, extra: core.Map$(core.String, dart.dynamic), followRedirects: core.bool, headers: core.Map$(core.String, dart.dynamic), maxRedirects: core.int, method: core.String, onReceiveProgress: dart.fnType(dart.void, [core.int, core.int]), onSendProgress: dart.fnType(dart.void, [core.int, core.int]), path: core.String, queryParameters: core.Map$(core.String, dart.dynamic), receiveDataWhenStatusError: core.bool, receiveTimeout: core.int, requestEncoder: dart.fnType(core.List$(core.int), [core.String, options$.RequestOptions]), responseDecoder: dart.fnType(core.String, [core.List$(core.int), options$.RequestOptions, adapter.ResponseBody]), responseType: options$.ResponseType, sendTimeout: core.int, validateStatus: dart.fnType(core.bool, [core.int])}, {})
  }));
  dart.setGetterSignature(options$.RequestOptions, () => ({
    __proto__: dart.getGetters(options$.RequestOptions.__proto__),
    uri: core.Uri
  }));
  dart.setLibraryUri(options$.RequestOptions, "package:hkbook/ThridLib/dio-3.0.8/lib/src/options.dart");
  dart.setFieldSignature(options$.RequestOptions, () => ({
    __proto__: dart.getFields(options$.RequestOptions.__proto__),
    data: dart.fieldType(dart.dynamic),
    baseUrl: dart.fieldType(core.String),
    path: dart.fieldType(core.String),
    queryParameters: dart.fieldType(core.Map$(core.String, dart.dynamic)),
    cancelToken: dart.fieldType(cancel_token.CancelToken),
    onReceiveProgress: dart.fieldType(dart.fnType(dart.void, [core.int, core.int])),
    onSendProgress: dart.fieldType(dart.fnType(dart.void, [core.int, core.int])),
    connectTimeout: dart.fieldType(core.int)
  }));
  transformer.Transformer = class Transformer extends core.Object {
    static urlEncodeMap(map) {
      return utils.encodeMap(map, dart.fn((key, value) => {
        if (value == null) return key;
        return dart.str(key) + "=" + dart.str(core.Uri.encodeQueryComponent(dart.toString(value)));
      }, StringAndObjectToString()));
    }
  };
  (transformer.Transformer.new = function() {
    ;
  }).prototype = transformer.Transformer.prototype;
  dart.addTypeTests(transformer.Transformer);
  dart.setLibraryUri(transformer.Transformer, "package:hkbook/ThridLib/dio-3.0.8/lib/src/transformer.dart");
  const _isJsonMime = dart.privateName(transformer, "_isJsonMime");
  const jsonDecodeCallback$ = dart.privateName(transformer, "DefaultTransformer.jsonDecodeCallback");
  transformer.DefaultTransformer = class DefaultTransformer extends transformer.Transformer {
    get jsonDecodeCallback() {
      return this[jsonDecodeCallback$];
    }
    set jsonDecodeCallback(value) {
      this[jsonDecodeCallback$] = value;
    }
    transformRequest(options) {
      return async.async(core.String, (function* transformRequest() {
        let t0;
        let data = (t0 = options.data, t0 == null ? "" : t0);
        if (!(typeof data == 'string')) {
          if (dart.test(this[_isJsonMime](options.contentType))) {
            return convert.json.encode(options.data);
          } else if (core.Map.is(data)) {
            return transformer.Transformer.urlEncodeMap(data);
          }
        }
        return dart.toString(data);
      }).bind(this));
    }
    transformResponse(options, response) {
      return async.async(dart.dynamic, (function* transformResponse() {
        let t0, t0$, t0$0, t0$1, t2, t2$;
        if (dart.equals(options.responseType, options$.ResponseType.stream)) {
          return response;
        }
        let length = 0;
        let received = 0;
        let showDownloadProgress = options.onReceiveProgress != null;
        if (showDownloadProgress) {
          length = core.int.parse((t0$ = (t0 = response.headers[$_get]("content-length"), t0 == null ? null : t0[$first]), t0$ == null ? "-1" : t0$));
        }
        let completer = async.Completer.new();
        let stream = response.stream.transform(typed_data.Uint8List, new (_StreamHandlerTransformerOfUint8List$Uint8List()).new({handleData: dart.fn((data, sink) => {
            sink.add(_native_typed_data.NativeUint8List.fromList(data));
            if (showDownloadProgress) {
              received = received + dart.notNull(data[$length]);
              options.onReceiveProgress(received, length);
            }
          }, Uint8ListAndEventSinkOfUint8ListToNull())}));
        let buffer = JSArrayOfint().of([]);
        let subscription = null;
        subscription = stream.listen(dart.fn(element => buffer[$addAll](element), Uint8ListTovoid()), {onError: dart.fn(e => completer.completeError(e), dynamicTovoid()), onDone: dart.fn(() => completer.complete(), VoidTovoid()), cancelOnError: true});
        t0$1 = (t0$0 = options.cancelToken, t0$0 == null ? null : t0$0.whenCancel);
        t0$1 == null ? null : t0$1.then(dart.dynamic, dart.fn(_ => subscription.cancel(), voidToFuture()));
        if (dart.notNull(options.receiveTimeout) > 0) {
          try {
            yield completer.future.timeout(new core.Duration.new({milliseconds: options.receiveTimeout}));
          } catch (e) {
            let ex = dart.getThrown(e);
            if (async.TimeoutException.is(ex)) {
              yield subscription.cancel();
              dart.throw(new dio_error.DioError.new({request: options, error: "Receiving data timeout[" + dart.str(options.receiveTimeout) + "ms]", type: dio_error.DioErrorType.RECEIVE_TIMEOUT}));
            } else
              throw e;
          }
        } else {
          yield completer.future;
        }
        if (dart.equals(options.responseType, options$.ResponseType.bytes)) return buffer;
        let responseBody = null;
        if (options.responseDecoder != null) {
          responseBody = options.responseDecoder(buffer, options, (t2 = response, t2.stream = null, t2));
        } else {
          responseBody = convert.utf8.decode(buffer, {allowMalformed: true});
        }
        if (responseBody != null && responseBody[$isNotEmpty] && dart.equals(options.responseType, options$.ResponseType.json) && dart.test(this[_isJsonMime]((t2$ = response.headers[$_get]("content-type"), t2$ == null ? null : t2$[$first])))) {
          if (this.jsonDecodeCallback != null) {
            return this.jsonDecodeCallback(responseBody);
          } else {
            return convert.json.decode(responseBody);
          }
        }
        return responseBody;
      }).bind(this));
    }
    [_isJsonMime](contentType) {
      if (contentType == null) return false;
      return media_type.MediaType.parse(contentType).mimeType[$toLowerCase]() === headers.Headers.jsonMimeType.mimeType;
    }
  };
  (transformer.DefaultTransformer.new = function(opts) {
    let jsonDecodeCallback = opts && 'jsonDecodeCallback' in opts ? opts.jsonDecodeCallback : null;
    this[jsonDecodeCallback$] = jsonDecodeCallback;
    ;
  }).prototype = transformer.DefaultTransformer.prototype;
  dart.addTypeTests(transformer.DefaultTransformer);
  dart.setMethodSignature(transformer.DefaultTransformer, () => ({
    __proto__: dart.getMethods(transformer.DefaultTransformer.__proto__),
    transformRequest: dart.fnType(async.Future$(core.String), [options$.RequestOptions]),
    transformResponse: dart.fnType(async.Future, [options$.RequestOptions, adapter.ResponseBody]),
    [_isJsonMime]: dart.fnType(core.bool, [core.String])
  }));
  dart.setLibraryUri(transformer.DefaultTransformer, "package:hkbook/ThridLib/dio-3.0.8/lib/src/transformer.dart");
  dart.setFieldSignature(transformer.DefaultTransformer, () => ({
    __proto__: dart.getFields(transformer.DefaultTransformer.__proto__),
    jsonDecodeCallback: dart.fieldType(dart.fnType(dart.dynamic, [core.String]))
  }));
  adapter.HttpClientAdapter = class HttpClientAdapter extends core.Object {};
  (adapter.HttpClientAdapter.new = function() {
    ;
  }).prototype = adapter.HttpClientAdapter.prototype;
  dart.addTypeTests(adapter.HttpClientAdapter);
  dart.setLibraryUri(adapter.HttpClientAdapter, "package:hkbook/ThridLib/dio-3.0.8/lib/src/adapter.dart");
  const stream$ = dart.privateName(adapter, "ResponseBody.stream");
  const headers$1 = dart.privateName(adapter, "ResponseBody.headers");
  const statusCode$0 = dart.privateName(adapter, "ResponseBody.statusCode");
  const statusMessage$0 = dart.privateName(adapter, "ResponseBody.statusMessage");
  const isRedirect$0 = dart.privateName(adapter, "ResponseBody.isRedirect");
  const redirects$0 = dart.privateName(adapter, "ResponseBody.redirects");
  const extra = dart.privateName(adapter, "ResponseBody.extra");
  adapter.ResponseBody = class ResponseBody extends core.Object {
    get stream() {
      return this[stream$];
    }
    set stream(value) {
      this[stream$] = value;
    }
    get headers() {
      return this[headers$1];
    }
    set headers(value) {
      this[headers$1] = value;
    }
    get statusCode() {
      return this[statusCode$0];
    }
    set statusCode(value) {
      this[statusCode$0] = value;
    }
    get statusMessage() {
      return this[statusMessage$0];
    }
    set statusMessage(value) {
      this[statusMessage$0] = value;
    }
    get isRedirect() {
      return this[isRedirect$0];
    }
    set isRedirect(value) {
      super.isRedirect = value;
    }
    get redirects() {
      return this[redirects$0];
    }
    set redirects(value) {
      this[redirects$0] = value;
    }
    get extra() {
      return this[extra];
    }
    set extra(value) {
      this[extra] = value;
    }
  };
  (adapter.ResponseBody.new = function(stream, statusCode, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let statusMessage = opts && 'statusMessage' in opts ? opts.statusMessage : null;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : null;
    let redirects = opts && 'redirects' in opts ? opts.redirects : null;
    this[extra] = new (IdentityMapOfString$dynamic()).new();
    this[stream$] = stream;
    this[statusCode$0] = statusCode;
    this[headers$1] = headers;
    this[statusMessage$0] = statusMessage;
    this[isRedirect$0] = isRedirect;
    this[redirects$0] = redirects;
    ;
  }).prototype = adapter.ResponseBody.prototype;
  (adapter.ResponseBody.fromString = function(text, statusCode, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let statusMessage = opts && 'statusMessage' in opts ? opts.statusMessage : null;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : null;
    this[extra] = new (IdentityMapOfString$dynamic()).new();
    this[redirects$0] = null;
    this[statusCode$0] = statusCode;
    this[headers$1] = headers;
    this[statusMessage$0] = statusMessage;
    this[isRedirect$0] = isRedirect;
    this[stream$] = StreamOfUint8List().fromIterable(convert.utf8.encode(text)[$map](typed_data.Uint8List, dart.fn(e => _native_typed_data.NativeUint8List.fromList(JSArrayOfint().of([e])), intToUint8List()))[$toList]());
    ;
  }).prototype = adapter.ResponseBody.prototype;
  (adapter.ResponseBody.fromBytes = function(bytes, statusCode, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let statusMessage = opts && 'statusMessage' in opts ? opts.statusMessage : null;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : null;
    this[extra] = new (IdentityMapOfString$dynamic()).new();
    this[redirects$0] = null;
    this[statusCode$0] = statusCode;
    this[headers$1] = headers;
    this[statusMessage$0] = statusMessage;
    this[isRedirect$0] = isRedirect;
    this[stream$] = StreamOfUint8List().fromIterable(bytes[$map](typed_data.Uint8List, dart.fn(e => _native_typed_data.NativeUint8List.fromList(JSArrayOfint().of([e])), intToUint8List()))[$toList]());
    ;
  }).prototype = adapter.ResponseBody.prototype;
  dart.addTypeTests(adapter.ResponseBody);
  dart.setLibraryUri(adapter.ResponseBody, "package:hkbook/ThridLib/dio-3.0.8/lib/src/adapter.dart");
  dart.setFieldSignature(adapter.ResponseBody, () => ({
    __proto__: dart.getFields(adapter.ResponseBody.__proto__),
    stream: dart.fieldType(async.Stream$(typed_data.Uint8List)),
    headers: dart.fieldType(core.Map$(core.String, core.List$(core.String))),
    statusCode: dart.fieldType(core.int),
    statusMessage: dart.fieldType(core.String),
    isRedirect: dart.finalFieldType(core.bool),
    redirects: dart.fieldType(core.List$(redirect_record.RedirectRecord)),
    extra: dart.fieldType(core.Map$(core.String, dart.dynamic))
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/dio-3.0.8/lib/src/adapter", {
    "package:hkbook/ThridLib/dio-3.0.8/lib/src/cancel_token.dart": cancel_token,
    "package:hkbook/ThridLib/dio-3.0.8/lib/src/dio_error.dart": dio_error,
    "package:hkbook/ThridLib/dio-3.0.8/lib/src/response.dart": response,
    "package:hkbook/ThridLib/dio-3.0.8/lib/src/options.dart": options$,
    "package:hkbook/ThridLib/dio-3.0.8/lib/src/transformer.dart": transformer,
    "package:hkbook/ThridLib/dio-3.0.8/lib/src/adapter.dart": adapter
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["cancel_token.dart","dio_error.dart","response.dart","options.dart","transformer.dart","adapter.dart"],"names":[],"mappings":"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","file":"adapter.ddc.js"}');
  // Exports:
  return {
    ThridLib__dio_3$460$468__lib__src__cancel_token: cancel_token,
    ThridLib__dio_3$460$468__lib__src__dio_error: dio_error,
    ThridLib__dio_3$460$468__lib__src__response: response,
    ThridLib__dio_3$460$468__lib__src__options: options$,
    ThridLib__dio_3$460$468__lib__src__transformer: transformer,
    ThridLib__dio_3$460$468__lib__src__adapter: adapter
  };
});

//# sourceMappingURL=adapter.ddc.js.map
