define(['dart_sdk', 'packages/http_parser/http_parser', 'packages/hkbook/ThridLib/dio-3.0.8/lib/src/utils'], function(dart_sdk, packages__http_parser__http_parser, packages__hkbook__ThridLib__dio_3$460$468__lib__src__utils) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_type = packages__http_parser__http_parser.src__media_type;
  const utils = packages__hkbook__ThridLib__dio_3$460$468__lib__src__utils.ThridLib__dio_3$460$468__lib__src__utils;
  const multipart_file = Object.create(dart.library);
  const multipart_file_stub = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let StreamOfListOfint = () => (StreamOfListOfint = dart.constFn(async.Stream$(ListOfint())))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  const CT = Object.create(null);
  const _isFinalized = dart.privateName(multipart_file, "_isFinalized");
  const _stream = dart.privateName(multipart_file, "_stream");
  const length$ = dart.privateName(multipart_file, "MultipartFile.length");
  const filename$ = dart.privateName(multipart_file, "MultipartFile.filename");
  const contentType$ = dart.privateName(multipart_file, "MultipartFile.contentType");
  multipart_file.MultipartFile = class MultipartFile extends core.Object {
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
    static fromBytes(value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let stream = StreamOfListOfint().fromIterable(JSArrayOfListOfint().of([value]));
      return new multipart_file.MultipartFile.new(stream, value[$length], {filename: filename, contentType: contentType});
    }
    static fromString(value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      contentType == null ? contentType = new media_type.MediaType.new("text", "plain") : null;
      let encoding = utils.encodingForCharset(contentType.parameters[$_get]("charset"), convert.utf8);
      contentType = contentType.change({parameters: new (IdentityMapOfString$String()).from(["charset", encoding.name])});
      return multipart_file.MultipartFile.fromBytes(encoding.encode(value), {filename: filename, contentType: contentType});
    }
    static fromFile(filePath, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return multipart_file_stub.multipartFileFromPath(filePath, {filename: filename, contentType: contentType});
    }
    static fromFileSync(filePath, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return multipart_file_stub.multipartFileFromPathSync(filePath, {filename: filename, contentType: contentType});
    }
    finalize() {
      if (dart.test(this.isFinalized)) {
        dart.throw(new core.StateError.new("Can't finalize a finalized MultipartFile."));
      }
      this[_isFinalized] = true;
      return this[_stream];
    }
  };
  (multipart_file.MultipartFile.new = function(stream, length, opts) {
    let t0;
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    this[_isFinalized] = false;
    this[length$] = length;
    this[filename$] = filename;
    this[_stream] = stream;
    this[contentType$] = (t0 = contentType, t0 == null ? new media_type.MediaType.new("application", "octet-stream") : t0);
    ;
  }).prototype = multipart_file.MultipartFile.prototype;
  dart.addTypeTests(multipart_file.MultipartFile);
  dart.setMethodSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getMethods(multipart_file.MultipartFile.__proto__),
    finalize: dart.fnType(async.Stream$(core.List$(core.int)), [])
  }));
  dart.setGetterSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getGetters(multipart_file.MultipartFile.__proto__),
    isFinalized: core.bool
  }));
  dart.setLibraryUri(multipart_file.MultipartFile, "package:hkbook/ThridLib/dio-3.0.8/lib/src/multipart_file.dart");
  dart.setFieldSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getFields(multipart_file.MultipartFile.__proto__),
    length: dart.finalFieldType(core.int),
    filename: dart.finalFieldType(core.String),
    contentType: dart.finalFieldType(media_type.MediaType),
    [_stream]: dart.finalFieldType(async.Stream$(core.List$(core.int))),
    [_isFinalized]: dart.fieldType(core.bool)
  }));
  multipart_file_stub.multipartFileFromPath = function multipartFileFromPath(filePath, opts) {
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    return dart.throw(multipart_file_stub._err);
  };
  multipart_file_stub.multipartFileFromPathSync = function multipartFileFromPathSync(filePath, opts) {
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    return dart.throw(multipart_file_stub._err);
  };
  dart.defineLazy(multipart_file_stub, {
    /*multipart_file_stub._err*/get _err() {
      return new core.UnsupportedError.new("MultipartFile is only supported where dart:io is available.");
    }
  });
  dart.trackLibraries("packages/hkbook/ThridLib/dio-3.0.8/lib/src/multipart_file", {
    "package:hkbook/ThridLib/dio-3.0.8/lib/src/multipart_file.dart": multipart_file,
    "package:hkbook/ThridLib/dio-3.0.8/lib/src/multipart_file_stub.dart": multipart_file_stub
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["multipart_file.dart","multipart_file_stub.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;IAkBY;;;;;;IAGG;;;;;;IAGG;;;;;;;AAMQ;IAAY;qBAsBxB;UACH;UACG;AAEN,mBAAgB,iCAAa,yBAAC,KAAK;AACvC,YAAO,sCACL,MAAM,EACN,AAAM,KAAD,sBACK,QAAQ,eACL,WAAW;IAE5B;sBASS;UACA;UACG;AAEgC,MAA1C,AAAY,WAAD,IAAC,OAAZ,cAAgB,6BAAU,QAAQ,WAAtB;AACR,qBAAW,yBAAmB,AAAY,AAAU,WAAX,mBAAY,YAAY;AACG,MAAxE,cAAc,AAAY,WAAD,qBAAoB,yCAAC,WAAW,AAAS,QAAD;AAEjE,YAAqB,wCACnB,AAAS,QAAD,QAAQ,KAAK,cACX,QAAQ,eACL,WAAW;IAE5B;oBAWS;UACA;UACG;AAER,uDACE,QAAQ,aACE,QAAQ,eACL,WAAW;IACzB;wBAGI;UACA;UACG;AAER,2DACE,QAAQ,aACE,QAAQ,eACL,WAAW;IACzB;;AAGH,oBAAI;AAC2D,QAA7D,WAAM,wBAAW;;AAEA,MAAnB,qBAAe;AACf,YAAO;IACT;;+CAnFoB,QACb;;QACA;QACK;IAZP,qBAAe;IAUb;IACA;IAEO,gBAAE,MAAM;IACJ,sBAAc,KAAZ,WAAW,QAAX,OAAe,6BAAU,eAAe;;EAAe;;;;;;;;;;;;;;;;;;;6ECtC1B;QACnC;QAAoB;AAChC,sBAAM;EAAI;qFAEiC;QAC/B;QAAoB;AAChC,sBAAM;EAAI;;MATR,wBAAI;YAAG,+BACT","file":"multipart_file.ddc.js"}');
  // Exports:
  return {
    ThridLib__dio_3$460$468__lib__src__multipart_file: multipart_file,
    ThridLib__dio_3$460$468__lib__src__multipart_file_stub: multipart_file_stub
  };
});

//# sourceMappingURL=multipart_file.ddc.js.map
