define(['dart_sdk', 'packages/hkbook/ThridLib/http-0.12.0+4/lib/src/utils', 'packages/http_parser/http_parser', 'packages/hkbook/ThridLib/http-0.12.0+4/lib/src/byte_stream'], function(dart_sdk, packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__utils, packages__http_parser__http_parser, packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__byte_stream) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__utils.ThridLib__http_0$4612$460$434__lib__src__utils;
  const media_type = packages__http_parser__http_parser.src__media_type;
  const byte_stream = packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__byte_stream.ThridLib__http_0$4612$460$434__lib__src__byte_stream;
  const multipart_file = Object.create(dart.library);
  const multipart_file_stub = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  const CT = Object.create(null);
  const _isFinalized = dart.privateName(multipart_file, "_isFinalized");
  const _stream = dart.privateName(multipart_file, "_stream");
  const field$ = dart.privateName(multipart_file, "MultipartFile.field");
  const length$ = dart.privateName(multipart_file, "MultipartFile.length");
  const filename$ = dart.privateName(multipart_file, "MultipartFile.filename");
  const contentType$ = dart.privateName(multipart_file, "MultipartFile.contentType");
  multipart_file.MultipartFile = class MultipartFile extends core.Object {
    get field() {
      return this[field$];
    }
    set field(value) {
      super.field = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      super.filename = value;
    }
    get contentType() {
      return this[contentType$];
    }
    set contentType(value) {
      super.contentType = value;
    }
    get isFinalized() {
      return this[_isFinalized];
    }
    static fromBytes(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let stream = byte_stream.ByteStream.fromBytes(value);
      return new multipart_file.MultipartFile.new(field, stream, value[$length], {filename: filename, contentType: contentType});
    }
    static fromString(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      contentType == null ? contentType = new media_type.MediaType.new("text", "plain") : null;
      let encoding = utils.encodingForCharset(contentType.parameters[$_get]("charset"), convert.utf8);
      contentType = contentType.change({parameters: new (IdentityMapOfString$String()).from(["charset", encoding.name])});
      return multipart_file.MultipartFile.fromBytes(field, encoding.encode(value), {filename: filename, contentType: contentType});
    }
    static fromPath(field, filePath, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return multipart_file_stub.multipartFileFromPath(field, filePath, {filename: filename, contentType: contentType});
    }
    finalize() {
      if (dart.test(this.isFinalized)) {
        dart.throw(new core.StateError.new("Can't finalize a finalized MultipartFile."));
      }
      this[_isFinalized] = true;
      return this[_stream];
    }
  };
  (multipart_file.MultipartFile.new = function(field, stream, length, opts) {
    let t0;
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    this[_isFinalized] = false;
    this[field$] = field;
    this[length$] = length;
    this[filename$] = filename;
    this[_stream] = utils.toByteStream(stream);
    this[contentType$] = (t0 = contentType, t0 == null ? new media_type.MediaType.new("application", "octet-stream") : t0);
    ;
  }).prototype = multipart_file.MultipartFile.prototype;
  dart.addTypeTests(multipart_file.MultipartFile);
  dart.setMethodSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getMethods(multipart_file.MultipartFile.__proto__),
    finalize: dart.fnType(byte_stream.ByteStream, [])
  }));
  dart.setGetterSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getGetters(multipart_file.MultipartFile.__proto__),
    isFinalized: core.bool
  }));
  dart.setLibraryUri(multipart_file.MultipartFile, "package:hkbook/ThridLib/http-0.12.0+4/lib/src/multipart_file.dart");
  dart.setFieldSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getFields(multipart_file.MultipartFile.__proto__),
    field: dart.finalFieldType(core.String),
    length: dart.finalFieldType(core.int),
    filename: dart.finalFieldType(core.String),
    contentType: dart.finalFieldType(media_type.MediaType),
    [_stream]: dart.finalFieldType(byte_stream.ByteStream),
    [_isFinalized]: dart.fieldType(core.bool)
  }));
  multipart_file_stub.multipartFileFromPath = function multipartFileFromPath(field, filePath, opts) {
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    return dart.throw(new core.UnsupportedError.new("MultipartFile is only supported where dart:io is available."));
  };
  dart.trackLibraries("packages/hkbook/ThridLib/http-0.12.0+4/lib/src/multipart_file", {
    "package:hkbook/ThridLib/http-0.12.0+4/lib/src/multipart_file.dart": multipart_file,
    "package:hkbook/ThridLib/http-0.12.0+4/lib/src/multipart_file_stub.dart": multipart_file_stub
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["multipart_file.dart","multipart_file_stub.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;IAqBe;;;;;;IAMH;;;;;;IAKG;;;;;;IAKG;;;;;;;AAMQ;IAAY;qBAmBG,OAAiB;UAC5C;UAAoB;AAC1B,mBAAoB,iCAAU,KAAK;AACvC,YAAO,sCAAc,KAAK,EAAE,MAAM,EAAE,AAAM,KAAD,sBAC3B,QAAQ,eAAe,WAAW;IAClD;sBAQwC,OAAc;UAC1C;UAAoB;AACY,MAA1C,AAAY,WAAD,IAAC,OAAZ,cAAgB,6BAAU,QAAQ,WAAtB;AACR,qBAAW,yBAAmB,AAAY,AAAU,WAAX,mBAAY,YAAY;AACG,MAAxE,cAAc,AAAY,WAAD,qBAAoB,yCAAC,WAAW,AAAS,QAAD;AAEjE,YAAqB,wCAAU,KAAK,EAAE,AAAS,QAAD,QAAQ,KAAK,cAC7C,QAAQ,eAAe,WAAW;IAClD;oBAW6C,OAAc;UAC3C;UAAoB;AAChC,uDAAsB,KAAK,EAAE,QAAQ,aACvB,QAAQ,eAAe,WAAW;IAAC;;AAMnD,oBAAI;AAC2D,QAA7D,WAAM,wBAAW;;AAEA,MAAnB,qBAAe;AACf,YAAO;IACT;;+CAvDmB,OAAyB,QAAa;;QAC/C;QAAoB;IAVzB,qBAAe;IASD;IAAsC;IAC/C;IACI,gBAAE,mBAAa,MAAM;IACjB,sBAAc,KAAZ,WAAW,QAAX,OAAe,6BAAU,eAAe;;EAAe;;;;;;;;;;;;;;;;;;;;6EC9C1B,OAAc;QACjD;QAAoB;AAChC,sBAAM,8BACF;EAA8D","file":"multipart_file.ddc.js"}');
  // Exports:
  return {
    ThridLib__http_0$4612$460$434__lib__src__multipart_file: multipart_file,
    ThridLib__http_0$4612$460$434__lib__src__multipart_file_stub: multipart_file_stub
  };
});

//# sourceMappingURL=multipart_file.ddc.js.map
