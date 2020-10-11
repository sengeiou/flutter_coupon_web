define(['dart_sdk', 'packages/hkbook/ThridLib/dio-3.0.8/lib/src/multipart_file', 'packages/hkbook/ThridLib/dio-3.0.8/lib/src/utils'], function(dart_sdk, packages__hkbook__ThridLib__dio_3$460$468__lib__src__multipart_file, packages__hkbook__ThridLib__dio_3$460$468__lib__src__utils) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const multipart_file = packages__hkbook__ThridLib__dio_3$460$468__lib__src__multipart_file.ThridLib__dio_3$460$468__lib__src__multipart_file;
  const utils = packages__hkbook__ThridLib__dio_3$460$468__lib__src__utils.ThridLib__dio_3$460$468__lib__src__utils;
  const form_data = Object.create(dart.library);
  const $add = dartx.add;
  const $toString = dartx.toString;
  const $padLeft = dartx.padLeft;
  const $replaceAll = dartx.replaceAll;
  const $length = dartx.length;
  const $forEach = dartx.forEach;
  let MapEntryOfString$String = () => (MapEntryOfString$String = dart.constFn(core.MapEntry$(core.String, core.String)))();
  let JSArrayOfMapEntryOfString$String = () => (JSArrayOfMapEntryOfString$String = dart.constFn(_interceptors.JSArray$(MapEntryOfString$String())))();
  let MapEntryOfString$MultipartFile = () => (MapEntryOfString$MultipartFile = dart.constFn(core.MapEntry$(core.String, multipart_file.MultipartFile)))();
  let JSArrayOfMapEntryOfString$MultipartFile = () => (JSArrayOfMapEntryOfString$MultipartFile = dart.constFn(_interceptors.JSArray$(MapEntryOfString$MultipartFile())))();
  let StringAndObjectToNull = () => (StringAndObjectToNull = dart.constFn(dart.fnType(core.Null, [core.String, core.Object])))();
  let MapEntryOfString$StringToNull = () => (MapEntryOfString$StringToNull = dart.constFn(dart.fnType(core.Null, [MapEntryOfString$String()])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let StreamControllerOfListOfint = () => (StreamControllerOfListOfint = dart.constFn(async.StreamController$(ListOfint())))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let dynamicToFuture = () => (dynamicToFuture = dart.constFn(dart.fnType(async.Future, [dart.dynamic])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let ListOfintAndListOfintToListOfint = () => (ListOfintAndListOfintToListOfint = dart.constFn(dart.fnType(ListOfint(), [ListOfint(), ListOfint()])))();
  const CT = Object.create(null);
  const _boundary = dart.privateName(form_data, "_boundary");
  const _newlineRegExp = dart.privateName(form_data, "_newlineRegExp");
  const _isFinalized = dart.privateName(form_data, "_isFinalized");
  const _init = dart.privateName(form_data, "_init");
  const _browserEncode = dart.privateName(form_data, "_browserEncode");
  const _headerForField = dart.privateName(form_data, "_headerForField");
  const _headerForFile = dart.privateName(form_data, "_headerForFile");
  const fields = dart.privateName(form_data, "FormData.fields");
  const files = dart.privateName(form_data, "FormData.files");
  form_data.FormData = class FormData extends core.Object {
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
    get boundary() {
      return this[_boundary];
    }
    get isFinalized() {
      return this[_isFinalized];
    }
    [_init]() {
      let random = math.Random.new();
      this[_boundary] = "--dio-boundary-" + dart.toString(random.nextInt(4294967296))[$padLeft](10, "0");
    }
    [_headerForField](name, value) {
      let header = "content-disposition: form-data; name=\"" + dart.str(this[_browserEncode](name)) + "\"";
      if (!dart.test(utils.isPlainAscii(value))) {
        header = header + "\r\n" + "content-type: text/plain; charset=utf-8\r\n" + "content-transfer-encoding: binary";
      }
      return header + "\r\n\r\n";
    }
    [_headerForFile](entry) {
      let file = entry.value;
      let header = "content-disposition: form-data; name=\"" + dart.str(this[_browserEncode](entry.key)) + "\"";
      if (file.filename != null) {
        header = header + "; filename=\"" + dart.str(this[_browserEncode](file.filename)) + "\"";
      }
      header = header + "\r\n" + "content-type: " + dart.str(file.contentType);
      return header + "\r\n\r\n";
    }
    [_browserEncode](value) {
      return value[$replaceAll](this[_newlineRegExp], "%0D%0A")[$replaceAll]("\"", "%22");
    }
    get length() {
      let length = 0;
      this.fields[$forEach](dart.fn(entry => {
        length = length + ("--".length + 25 + "\r\n".length + dart.notNull(convert.utf8.encode(this[_headerForField](entry.key, entry.value))[$length]) + dart.notNull(convert.utf8.encode(entry.value)[$length]) + "\r\n".length);
      }, MapEntryOfString$StringToNull()));
      for (let file of this.files) {
        length = length + ("--".length + 25 + "\r\n".length + dart.notNull(convert.utf8.encode(this[_headerForFile](file))[$length]) + dart.notNull(file.value.length) + "\r\n".length);
      }
      return length + "--".length + 25 + "--\r\n".length;
    }
    finalize() {
      if (dart.test(this.isFinalized)) {
        dart.throw(new core.StateError.new("Can't finalize a finalized MultipartFile."));
      }
      this[_isFinalized] = true;
      let controller = StreamControllerOfListOfint().new({sync: false});
      function writeAscii(string) {
        controller.add(convert.utf8.encode(string));
      }
      dart.fn(writeAscii, StringTovoid());
      function writeUtf8(string) {
        return controller.add(convert.utf8.encode(string));
      }
      dart.fn(writeUtf8, StringTovoid());
      function writeLine() {
        return controller.add(JSArrayOfint().of([13, 10]));
      }
      dart.fn(writeLine, VoidTovoid());
      this.fields[$forEach](dart.fn(entry => {
        writeAscii("--" + dart.str(this.boundary) + "\r\n");
        writeAscii(this[_headerForField](entry.key, entry.value));
        writeUtf8(entry.value);
        writeLine();
      }, MapEntryOfString$StringToNull()));
      async.Future.forEach(MapEntryOfString$MultipartFile(), this.files, dart.fn(file => {
        writeAscii("--" + dart.str(this.boundary) + "\r\n");
        writeAscii(this[_headerForFile](MapEntryOfString$MultipartFile()._check(file)));
        return utils.writeStreamToSink(async.Stream._check(dart.dsend(dart.dload(file, 'value'), 'finalize', [])), controller).then(dart.dynamic, dart.fn(_ => writeLine(), dynamicTovoid()));
      }, dynamicToFuture())).then(core.Null, dart.fn(_ => {
        writeAscii("--" + dart.str(this.boundary) + "--\r\n");
        controller.close();
      }, dynamicToNull()));
      return controller.stream;
    }
    readAsBytes() {
      return this.finalize().reduce(dart.fn((a, b) => (() => {
        let t0 = JSArrayOfint().of([]);
        for (let t1 of a)
          t0[$add](t1);
        for (let t2 of b)
          t0[$add](t2);
        return t0;
      })(), ListOfintAndListOfintToListOfint()));
    }
  };
  (form_data.FormData.new = function() {
    this[_boundary] = null;
    this[_newlineRegExp] = core.RegExp.new("\\r\\n|\\r|\\n");
    this[fields] = JSArrayOfMapEntryOfString$String().of([]);
    this[files] = JSArrayOfMapEntryOfString$MultipartFile().of([]);
    this[_isFinalized] = false;
    this[_init]();
  }).prototype = form_data.FormData.prototype;
  (form_data.FormData.fromMap = function(map) {
    this[_boundary] = null;
    this[_newlineRegExp] = core.RegExp.new("\\r\\n|\\r|\\n");
    this[fields] = JSArrayOfMapEntryOfString$String().of([]);
    this[files] = JSArrayOfMapEntryOfString$MultipartFile().of([]);
    this[_isFinalized] = false;
    this[_init]();
    utils.encodeMap(map, dart.fn((key, value) => {
      if (value == null) return null;
      if (multipart_file.MultipartFile.is(value)) {
        this.files[$add](new (MapEntryOfString$MultipartFile()).__(key, value));
      } else {
        this.fields[$add](new (MapEntryOfString$String()).__(key, dart.toString(value)));
      }
      return null;
    }, StringAndObjectToNull()), {encode: false});
  }).prototype = form_data.FormData.prototype;
  dart.addTypeTests(form_data.FormData);
  dart.setMethodSignature(form_data.FormData, () => ({
    __proto__: dart.getMethods(form_data.FormData.__proto__),
    [_init]: dart.fnType(dart.void, []),
    [_headerForField]: dart.fnType(core.String, [core.String, core.String]),
    [_headerForFile]: dart.fnType(core.String, [core.MapEntry$(core.String, multipart_file.MultipartFile)]),
    [_browserEncode]: dart.fnType(core.String, [core.String]),
    finalize: dart.fnType(async.Stream$(core.List$(core.int)), []),
    readAsBytes: dart.fnType(async.Future$(core.List$(core.int)), [])
  }));
  dart.setGetterSignature(form_data.FormData, () => ({
    __proto__: dart.getGetters(form_data.FormData.__proto__),
    boundary: core.String,
    isFinalized: core.bool,
    length: core.int
  }));
  dart.setLibraryUri(form_data.FormData, "package:hkbook/ThridLib/dio-3.0.8/lib/src/form_data.dart");
  dart.setFieldSignature(form_data.FormData, () => ({
    __proto__: dart.getFields(form_data.FormData.__proto__),
    [_boundary]: dart.fieldType(core.String),
    [_newlineRegExp]: dart.finalFieldType(core.RegExp),
    fields: dart.finalFieldType(core.List$(core.MapEntry$(core.String, core.String))),
    files: dart.finalFieldType(core.List$(core.MapEntry$(core.String, multipart_file.MultipartFile))),
    [_isFinalized]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(form_data.FormData, {
    /*form_data.FormData._BOUNDARY_PRE_TAG*/get _BOUNDARY_PRE_TAG() {
      return "--dio-boundary-";
    },
    /*form_data.FormData._BOUNDARY_LENGTH*/get _BOUNDARY_LENGTH() {
      return 25;
    }
  });
  dart.trackLibraries("packages/hkbook/ThridLib/dio-3.0.8/lib/src/form_data", {
    "package:hkbook/ThridLib/dio-3.0.8/lib/src/form_data.dart": form_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["form_data.dart"],"names":[],"mappings":"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","file":"form_data.ddc.js"}');
  // Exports:
  return {
    ThridLib__dio_3$460$468__lib__src__form_data: form_data
  };
});

//# sourceMappingURL=form_data.ddc.js.map
