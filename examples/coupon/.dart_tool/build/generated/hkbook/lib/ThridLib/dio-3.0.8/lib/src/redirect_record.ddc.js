define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const redirect_record = Object.create(dart.library);
  const CT = Object.create(null);
  const statusCode$ = dart.privateName(redirect_record, "RedirectRecord.statusCode");
  const method$ = dart.privateName(redirect_record, "RedirectRecord.method");
  const location$ = dart.privateName(redirect_record, "RedirectRecord.location");
  redirect_record.RedirectRecord = class RedirectRecord extends core.Object {
    get statusCode() {
      return this[statusCode$];
    }
    set statusCode(value) {
      super.statusCode = value;
    }
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get location() {
      return this[location$];
    }
    set location(value) {
      super.location = value;
    }
  };
  (redirect_record.RedirectRecord.new = function(statusCode, method, location) {
    this[statusCode$] = statusCode;
    this[method$] = method;
    this[location$] = location;
    ;
  }).prototype = redirect_record.RedirectRecord.prototype;
  dart.addTypeTests(redirect_record.RedirectRecord);
  dart.setLibraryUri(redirect_record.RedirectRecord, "package:hkbook/ThridLib/dio-3.0.8/lib/src/redirect_record.dart");
  dart.setFieldSignature(redirect_record.RedirectRecord, () => ({
    __proto__: dart.getFields(redirect_record.RedirectRecord.__proto__),
    statusCode: dart.finalFieldType(core.int),
    method: dart.finalFieldType(core.String),
    location: dart.finalFieldType(core.Uri)
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/dio-3.0.8/lib/src/redirect_record", {
    "package:hkbook/ThridLib/dio-3.0.8/lib/src/redirect_record.dart": redirect_record
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["redirect_record.dart"],"names":[],"mappings":";;;;;;;;;;;IAIY;;;;;;IAGG;;;;;;IAGH;;;;;;;iDATU,YAAiB,QAAa;IAA9B;IAAiB;IAAa;;EAAS","file":"redirect_record.ddc.js"}');
  // Exports:
  return {
    ThridLib__dio_3$460$468__lib__src__redirect_record: redirect_record
  };
});

//# sourceMappingURL=redirect_record.ddc.js.map
