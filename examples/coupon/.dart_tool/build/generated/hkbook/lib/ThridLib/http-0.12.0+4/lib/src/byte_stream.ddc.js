define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const byte_stream = Object.create(dart.library);
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let StreamOfListOfint = () => (StreamOfListOfint = dart.constFn(async.Stream$(ListOfint())))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let CompleterOfUint8List = () => (CompleterOfUint8List = dart.constFn(async.Completer$(typed_data.Uint8List)))();
  let ListOfintTovoid = () => (ListOfintTovoid = dart.constFn(dart.fnType(dart.void, [ListOfint()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: convert.Utf8Codec.prototype,
        [Utf8Codec__allowMalformed]: false
      });
    }
  });
  const Utf8Codec__allowMalformed = dart.privateName(convert, "Utf8Codec._allowMalformed");
  let C0;
  byte_stream.ByteStream = class ByteStream extends async.StreamView$(core.List$(core.int)) {
    static fromBytes(bytes) {
      return new byte_stream.ByteStream.new(StreamOfListOfint().fromIterable(JSArrayOfListOfint().of([bytes])));
    }
    toBytes() {
      let completer = CompleterOfUint8List().new();
      let sink = new convert._ByteCallbackSink.new(dart.fn(bytes => completer.complete(_native_typed_data.NativeUint8List.fromList(bytes)), ListOfintTovoid()));
      this.listen(dart.bind(sink, 'add'), {onError: dart.bind(completer, 'completeError'), onDone: dart.bind(sink, 'close'), cancelOnError: true});
      return completer.future;
    }
    bytesToString(encoding) {
      if (encoding === void 0) encoding = C0 || CT.C0;
      return encoding.decodeStream(this);
    }
    toStringStream(encoding) {
      if (encoding === void 0) encoding = C0 || CT.C0;
      return encoding.decoder.bind(this);
    }
  };
  (byte_stream.ByteStream.new = function(stream) {
    byte_stream.ByteStream.__proto__.new.call(this, stream);
    ;
  }).prototype = byte_stream.ByteStream.prototype;
  dart.addTypeTests(byte_stream.ByteStream);
  dart.setMethodSignature(byte_stream.ByteStream, () => ({
    __proto__: dart.getMethods(byte_stream.ByteStream.__proto__),
    toBytes: dart.fnType(async.Future$(typed_data.Uint8List), []),
    bytesToString: dart.fnType(async.Future$(core.String), [], [convert.Encoding]),
    toStringStream: dart.fnType(async.Stream$(core.String), [], [convert.Encoding])
  }));
  dart.setLibraryUri(byte_stream.ByteStream, "package:hkbook/ThridLib/http-0.12.0+4/lib/src/byte_stream.dart");
  dart.trackLibraries("packages/hkbook/ThridLib/http-0.12.0+4/lib/src/byte_stream", {
    "package:hkbook/ThridLib/http-0.12.0+4/lib/src/byte_stream.dart": byte_stream
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["byte_stream.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;qBAcyC;AACnC,4CAAkB,iCAAa,yBAAC,KAAK;IAAG;;AAItC,sBAAY;AACZ,iBAA0B,kCAC1B,QAAC,SAAU,AAAU,SAAD,UAAoB,4CAAS,KAAK;AAIlC,MAHxB,YAAY,UAAL,IAAI,oBACY,UAAV,SAAS,4BACL,UAAL,IAAI,2BACG;AACnB,YAAO,AAAU,UAAD;IAClB;kBAIuC;;AACnC,YAAA,AAAS,SAAD,cAAc;IAAK;mBAES;;AACpC,YAAA,AAAS,AAAQ,SAAT,cAAc;IAAK;;yCAzBF;AAAU,oDAAM,MAAM;;EAAC","file":"byte_stream.ddc.js"}');
  // Exports:
  return {
    ThridLib__http_0$4612$460$434__lib__src__byte_stream: byte_stream
  };
});

//# sourceMappingURL=byte_stream.ddc.js.map
