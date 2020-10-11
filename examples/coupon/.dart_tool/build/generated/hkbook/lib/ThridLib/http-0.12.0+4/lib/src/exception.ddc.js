define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const exception = Object.create(dart.library);
  const CT = Object.create(null);
  const message$ = dart.privateName(exception, "ClientException.message");
  const uri$ = dart.privateName(exception, "ClientException.uri");
  exception.ClientException = class ClientException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    toString() {
      return this.message;
    }
  };
  (exception.ClientException.new = function(message, uri) {
    if (uri === void 0) uri = null;
    this[message$] = message;
    this[uri$] = uri;
    ;
  }).prototype = exception.ClientException.prototype;
  dart.addTypeTests(exception.ClientException);
  exception.ClientException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(exception.ClientException, "package:hkbook/ThridLib/http-0.12.0+4/lib/src/exception.dart");
  dart.setFieldSignature(exception.ClientException, () => ({
    __proto__: dart.getFields(exception.ClientException.__proto__),
    message: dart.finalFieldType(core.String),
    uri: dart.finalFieldType(core.Uri)
  }));
  dart.defineExtensionMethods(exception.ClientException, ['toString']);
  dart.trackLibraries("packages/hkbook/ThridLib/http-0.12.0+4/lib/src/exception", {
    "package:hkbook/ThridLib/http-0.12.0+4/lib/src/exception.dart": exception
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["exception.dart"],"names":[],"mappings":";;;;;;;;;;IAMe;;;;;;IAGH;;;;;;;AAKW;IAAO;;4CAHP,SAAe;;IAAf;IAAe;;EAAK","file":"exception.ddc.js"}');
  // Exports:
  return {
    ThridLib__http_0$4612$460$434__lib__src__exception: exception
  };
});

//# sourceMappingURL=exception.ddc.js.map
