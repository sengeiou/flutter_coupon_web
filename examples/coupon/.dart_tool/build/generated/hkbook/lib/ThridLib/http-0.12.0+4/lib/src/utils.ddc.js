define(['dart_sdk', 'packages/hkbook/ThridLib/http-0.12.0+4/lib/src/byte_stream'], function(dart_sdk, packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__byte_stream) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const byte_stream = packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__byte_stream.ThridLib__http_0$4612$460$434__lib__src__byte_stream;
  const utils = Object.create(dart.library);
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $_get = dartx._get;
  const $map = dartx.map;
  const $join = dartx.join;
  const $buffer = dartx.buffer;
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let JSArrayOfListOfString = () => (JSArrayOfListOfString = dart.constFn(_interceptors.JSArray$(ListOfString())))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringAndStringTovoid = () => (StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))();
  let ListOfStringToString = () => (ListOfStringToString = dart.constFn(dart.fnType(core.String, [ListOfString()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: convert.Latin1Codec.prototype,
        [Latin1Codec__allowInvalid]: false
      });
    }
  });
  const Latin1Codec__allowInvalid = dart.privateName(convert, "Latin1Codec._allowInvalid");
  let C0;
  utils.mapToQuery = function mapToQuery(map, opts) {
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    let pairs = JSArrayOfListOfString().of([]);
    map[$forEach](dart.fn((key, value) => pairs[$add](JSArrayOfString().of([core.Uri.encodeQueryComponent(key, {encoding: encoding}), core.Uri.encodeQueryComponent(value, {encoding: encoding})])), StringAndStringTovoid()));
    return pairs[$map](core.String, dart.fn(pair => dart.str(pair[$_get](0)) + "=" + dart.str(pair[$_get](1)), ListOfStringToString()))[$join]("&");
  };
  utils.encodingForCharset = function encodingForCharset(charset, fallback) {
    let t0;
    if (fallback === void 0) fallback = C0 || CT.C0;
    if (charset == null) return fallback;
    t0 = convert.Encoding.getByName(charset);
    return t0 == null ? fallback : t0;
  };
  utils.requiredEncodingForCharset = function requiredEncodingForCharset(charset) {
    let t0;
    t0 = convert.Encoding.getByName(charset);
    return t0 == null ? dart.throw(new core.FormatException.new("Unsupported encoding \"" + dart.str(charset) + "\".")) : t0;
  };
  utils.isPlainAscii = function isPlainAscii(string) {
    return utils._asciiOnly.hasMatch(string);
  };
  utils.toUint8List = function toUint8List(input) {
    if (typed_data.Uint8List.is(input)) return input;
    if (typed_data.TypedData.is(input)) {
      return typed_data.Uint8List.view(typed_data.TypedData.as(input)[$buffer]);
    }
    return _native_typed_data.NativeUint8List.fromList(input);
  };
  utils.toByteStream = function toByteStream(stream) {
    if (byte_stream.ByteStream.is(stream)) return stream;
    return new byte_stream.ByteStream.new(stream);
  };
  utils.onDone = function onDone(T, stream, onDone) {
    return stream.transform(T, new (async._StreamHandlerTransformer$(T, T)).new({handleDone: dart.fn(sink => {
        sink.close();
        onDone();
      }, dart.fnType(core.Null, [async.EventSink$(T)]))}));
  };
  dart.defineLazy(utils, {
    /*utils._asciiOnly*/get _asciiOnly() {
      return core.RegExp.new("^[\\x00-\\x7F]+$");
    }
  });
  dart.trackLibraries("packages/hkbook/ThridLib/http-0.12.0+4/lib/src/utils", {
    "package:hkbook/ThridLib/http-0.12.0+4/lib/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yCAcsC;QAAe;AAC/C,gBAAsB;AAInB,IAHP,AAAI,GAAD,WAAS,SAAC,KAAK,UAAU,AAAM,KAAD,OAAK,sBAC5B,8BAAqB,GAAG,aAAY,QAAQ,IAC5C,8BAAqB,KAAK,aAAY,QAAQ;AAExD,UAAO,AAAM,AAAuC,MAAxC,oBAAK,QAAC,QAAgC,SAApB,AAAI,IAAA,QAAC,MAAG,eAAG,AAAI,IAAA,QAAC,qCAAW;EAC3D;yDAMmC,SAAmB;;;AACpD,QAAI,AAAQ,OAAD,IAAI,MAAM,MAAO,SAAQ;AACpC,SAAgB,2BAAU,OAAO;iBAAjB,OAAsB,QAAQ;EAChD;yEAQ2C;;AACvC,SAAS,2BAAU,OAAO;iBAAjB,OACR,WAAM,6BAAgB,AAAkC,qCAAV,OAAO;EAAK;6CAQtC;AAAW,UAAA,AAAW,2BAAS,MAAM;EAAC;2CAK/B;AAC9B,QAAU,wBAAN,KAAK,GAAe,MAAO,MAAK;AACpC,QAAU,wBAAN,KAAK;AAEP,YAAiB,2BAAY,AAAc,wBAApB,KAAK;;AAE9B,UAAiB,6CAAS,KAAK;EACjC;6CAE0C;AACxC,QAAW,0BAAP,MAAM,GAAgB,MAAO,OAAM;AACvC,UAAO,gCAAW,MAAM;EAC1B;oCAM8B,QAAwB;AAClD,UAAA,AAAO,OAAD,cAA6B,8DAAyB,QAAC;AAC/C,QAAZ,AAAK,IAAD;AACI,QAAR,AAAM,MAAA;;EACL;;MA/BD,gBAAU;YAAG,iBAAO","file":"utils.ddc.js"}');
  // Exports:
  return {
    ThridLib__http_0$4612$460$434__lib__src__utils: utils
  };
});

//# sourceMappingURL=utils.ddc.js.map
