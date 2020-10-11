define(['dart_sdk', 'packages/hkbook/ThridLib/http-0.12.0+4/lib/src/multipart_file', 'packages/hkbook/ThridLib/http-0.12.0+4/lib/src/byte_stream', 'packages/hkbook/ThridLib/http-0.12.0+4/lib/src/utils', 'packages/hkbook/ThridLib/http-0.12.0+4/lib/src/boundary_characters', 'packages/hkbook/ThridLib/http-0.12.0+4/lib/src/base_client'], function(dart_sdk, packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__multipart_file, packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__byte_stream, packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__utils, packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__boundary_characters, packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__base_client) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const multipart_file = packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__multipart_file.ThridLib__http_0$4612$460$434__lib__src__multipart_file;
  const byte_stream = packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__byte_stream.ThridLib__http_0$4612$460$434__lib__src__byte_stream;
  const utils = packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__utils.ThridLib__http_0$4612$460$434__lib__src__utils;
  const boundary_characters = packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__boundary_characters.ThridLib__http_0$4612$460$434__lib__src__boundary_characters;
  const base_request = packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__base_client.ThridLib__http_0$4612$460$434__lib__src__base_request;
  const multipart_request = Object.create(dart.library);
  const $length = dartx.length;
  const $forEach = dartx.forEach;
  const $_set = dartx._set;
  const $entries = dartx.entries;
  const $replaceAll = dartx.replaceAll;
  const $_get = dartx._get;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let JSArrayOfMultipartFile = () => (JSArrayOfMultipartFile = dart.constFn(_interceptors.JSArray$(multipart_file.MultipartFile)))();
  let StringAndStringToNull = () => (StringAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.String, core.String])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let _AsyncStarImplOfListOfint = () => (_AsyncStarImplOfListOfint = dart.constFn(async._AsyncStarImpl$(ListOfint())))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([13, 10], core.int);
    }
  });
  const _headerForField = dart.privateName(multipart_request, "_headerForField");
  const _headerForFile = dart.privateName(multipart_request, "_headerForFile");
  const _boundaryString = dart.privateName(multipart_request, "_boundaryString");
  const _finalize = dart.privateName(multipart_request, "_finalize");
  let C0;
  const _browserEncode = dart.privateName(multipart_request, "_browserEncode");
  const fields = dart.privateName(multipart_request, "MultipartRequest.fields");
  const files = dart.privateName(multipart_request, "MultipartRequest.files");
  multipart_request.MultipartRequest = class MultipartRequest extends base_request.BaseRequest {
    get fields() {
      return this[fields];
    }
    set fields(value) {
      super.fields = value;
    }
    get files() {
      return this[files];
    }
    set files(value) {
      super.files = value;
    }
    get contentLength() {
      let length = 0;
      this.fields[$forEach](dart.fn((name, value) => {
        length = length + ("--".length + 70 + "\r\n".length + dart.notNull(convert.utf8.encode(this[_headerForField](name, value))[$length]) + dart.notNull(convert.utf8.encode(value)[$length]) + "\r\n".length);
      }, StringAndStringToNull()));
      for (let file of this.files) {
        length = length + ("--".length + 70 + "\r\n".length + dart.notNull(convert.utf8.encode(this[_headerForFile](file))[$length]) + dart.notNull(file.length) + "\r\n".length);
      }
      return length + "--".length + 70 + "--\r\n".length;
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "multipart requests."));
    }
    finalize() {
      let boundary = this[_boundaryString]();
      this.headers[$_set]("content-type", "multipart/form-data; boundary=" + dart.str(boundary));
      super.finalize();
      return new byte_stream.ByteStream.new(this[_finalize](boundary));
    }
    [_finalize](boundary) {
      return new (_AsyncStarImplOfListOfint()).new((function* _finalize(stream) {
        let line = C0 || CT.C0;
        let separator = convert.utf8.encode("--" + dart.str(boundary) + "\r\n");
        let close = convert.utf8.encode("--" + dart.str(boundary) + "--\r\n");
        for (let field of this.fields[$entries]) {
          if (stream.add(separator)) return;
          yield;
          if (stream.add(convert.utf8.encode(this[_headerForField](field.key, field.value)))) return;
          yield;
          if (stream.add(convert.utf8.encode(field.value))) return;
          yield;
          if (stream.add(line)) return;
          yield;
        }
        for (let file of this.files) {
          if (stream.add(separator)) return;
          yield;
          if (stream.add(convert.utf8.encode(this[_headerForFile](file)))) return;
          yield;
          if (stream.addStream(file.finalize())) return;
          yield;
          if (stream.add(line)) return;
          yield;
        }
        if (stream.add(close)) return;
        yield;
      }).bind(this)).stream;
    }
    [_headerForField](name, value) {
      let header = "content-disposition: form-data; name=\"" + dart.str(this[_browserEncode](name)) + "\"";
      if (!dart.test(utils.isPlainAscii(value))) {
        header = header + "\r\n" + "content-type: text/plain; charset=utf-8\r\n" + "content-transfer-encoding: binary";
      }
      return header + "\r\n\r\n";
    }
    [_headerForFile](file) {
      let header = "content-type: " + dart.str(file.contentType) + "\r\n" + "content-disposition: form-data; name=\"" + dart.str(this[_browserEncode](file.field)) + "\"";
      if (file.filename != null) {
        header = header + "; filename=\"" + dart.str(this[_browserEncode](file.filename)) + "\"";
      }
      return header + "\r\n\r\n";
    }
    [_browserEncode](value) {
      return value[$replaceAll](multipart_request._newlineRegExp, "%0D%0A")[$replaceAll]("\"", "%22");
    }
    [_boundaryString]() {
      let prefix = "dart-http-boundary-";
      let list = ListOfint().generate(70 - prefix.length, dart.fn(index => boundary_characters.BOUNDARY_CHARACTERS[$_get](multipart_request.MultipartRequest._random.nextInt(boundary_characters.BOUNDARY_CHARACTERS[$length])), intToint()), {growable: false});
      return prefix + dart.str(core.String.fromCharCodes(list));
    }
  };
  (multipart_request.MultipartRequest.new = function(method, url) {
    this[fields] = new (IdentityMapOfString$String()).new();
    this[files] = JSArrayOfMultipartFile().of([]);
    multipart_request.MultipartRequest.__proto__.new.call(this, method, url);
    ;
  }).prototype = multipart_request.MultipartRequest.prototype;
  dart.addTypeTests(multipart_request.MultipartRequest);
  dart.setMethodSignature(multipart_request.MultipartRequest, () => ({
    __proto__: dart.getMethods(multipart_request.MultipartRequest.__proto__),
    [_finalize]: dart.fnType(async.Stream$(core.List$(core.int)), [core.String]),
    [_headerForField]: dart.fnType(core.String, [core.String, core.String]),
    [_headerForFile]: dart.fnType(core.String, [multipart_file.MultipartFile]),
    [_browserEncode]: dart.fnType(core.String, [core.String]),
    [_boundaryString]: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(multipart_request.MultipartRequest, "package:hkbook/ThridLib/http-0.12.0+4/lib/src/multipart_request.dart");
  dart.setFieldSignature(multipart_request.MultipartRequest, () => ({
    __proto__: dart.getFields(multipart_request.MultipartRequest.__proto__),
    fields: dart.finalFieldType(core.Map$(core.String, core.String)),
    files: dart.finalFieldType(core.List$(multipart_file.MultipartFile))
  }));
  dart.defineLazy(multipart_request.MultipartRequest, {
    /*multipart_request.MultipartRequest._boundaryLength*/get _boundaryLength() {
      return 70;
    },
    /*multipart_request.MultipartRequest._random*/get _random() {
      return math.Random.new();
    }
  });
  dart.defineLazy(multipart_request, {
    /*multipart_request._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n|\\r|\\n");
    }
  });
  dart.trackLibraries("packages/hkbook/ThridLib/http-0.12.0+4/lib/src/multipart_request", {
    "package:hkbook/ThridLib/http-0.12.0+4/lib/src/multipart_request.dart": multipart_request
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["multipart_request.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA2CQ;;;;;;IAGA;;;;;;;AASA,mBAAS;AASX,MAPF,AAAO,sBAAQ,SAAC,MAAM;AAMH,QALjB,SAAA,AAAO,MAAD,IAAI,AAAK,AAAO,AACF,AACF,AACmC,AACvB,mBAF1B,AAAO,6BACP,AAAK,AAAqC,oBAA9B,sBAAgB,IAAI,EAAE,KAAK,4BACvC,AAAK,AAAc,oBAAP,KAAK,cACjB,AAAO;;AAGb,eAAS,OAAQ;AAME,QALjB,SAAA,AAAO,MAAD,IAAI,AAAK,AAAO,AACF,AACF,AAC2B,AAC7B,mBAFZ,AAAO,6BACP,AAAK,AAA6B,oBAAtB,qBAAe,IAAI,4BAC/B,AAAK,IAAD,WACJ,AAAO;;AAGb,YAAO,AAAO,AAAc,AAAkB,OAAjC,GAAG,AAAK,mBAA2B,AAAS;IAC3D;sBAGsB;AAEM,MAD1B,WAAM,8BAAiB,8CACnB;IACN;;AAOQ,qBAAW;AACkD,MAAnE,AAAO,oBAAC,gBAAkB,AAAyC,4CAAT,QAAQ;AAClD,MAAV;AACN,YAAO,gCAAW,gBAAU,QAAQ;IACtC;gBAEmC;AAAR;AACnB;AACA,wBAAY,AAAK,oBAAO,AAAiB,gBAAb,QAAQ;AACpC,oBAAQ,AAAK,oBAAO,AAAmB,gBAAf,QAAQ;AAEtC,iBAAS,QAAS,AAAO;AACvB,yBAAM,SAAS;UAAf;AACA,yBAAM,AAAK,oBAAO,sBAAgB,AAAM,KAAD,MAAM,AAAM,KAAD;UAAlD;AACA,yBAAM,AAAK,oBAAO,AAAM,KAAD;UAAvB;AACA,yBAAM,IAAI;UAAV;;AAGF,iBAAW,OAAQ;AACjB,yBAAM,SAAS;UAAf;AACA,yBAAM,AAAK,oBAAO,qBAAe,IAAI;UAArC;AACA,+BAAO,AAAK,IAAD;UAAX;AACA,yBAAM,IAAI;UAAV;;AAEF,uBAAM,KAAK;QAAX;MACF;;sBAK8B,MAAa;AACrC,mBACA,AAAgE,qDAAvB,qBAAe,IAAI,KAAE;AAClE,qBAAK,mBAAa,KAAK;AAGkB,QAFvC,SAAW,MAAM,YACb,gDACA;;AAEN,YAAS,AAAe,OAAT;IACjB;qBAKoC;AAC9B,mBAAS,4BAAiB,AAAK,IAAD,gBAAa,SAC3C,qDAAyC,qBAAe,AAAK,IAAD,WAAQ;AAExE,UAAI,AAAK,IAAD,aAAa;AAC4C,QAA/D,SAAW,AAAoD,MAA9C,8BAAc,qBAAe,AAAK,IAAD,cAAW;;AAE/D,YAAS,AAAe,OAAT;IACjB;qBAG6B;AAM3B,YAAO,AAAM,AAAqC,MAAtC,cAAY,kCAAgB,uBAAqB,MAAK;IACpE;;AAIM,mBAAS;AACT,iBAAK,qBACW,KAAE,AAAO,MAAD,SACxB,QAAC,SACG,AAAmB,+CAAC,AAAQ,mDAAQ,AAAoB,4EAClD;AACd,YAAS,AAAoC,OAA9B,YAAS,0BAAc,IAAI;IAC5C;;qDAlHwB,QAAY;IAL9B,eAAyB;IAGzB,cAAuB;AAEc,gEAAM,MAAM,EAAE,GAAG;;EAAC;;;;;;;;;;;;;;;;;MAV5C,kDAAe;;;MAEZ,0CAAO;YAAG;;;;MA1B1B,gCAAc;YAAG,iBAAO","file":"multipart_request.ddc.js"}');
  // Exports:
  return {
    ThridLib__http_0$4612$460$434__lib__src__multipart_request: multipart_request
  };
});

//# sourceMappingURL=multipart_request.ddc.js.map
