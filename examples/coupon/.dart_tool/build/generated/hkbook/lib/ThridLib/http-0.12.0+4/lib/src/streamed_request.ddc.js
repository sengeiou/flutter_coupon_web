define(['dart_sdk', 'packages/hkbook/ThridLib/http-0.12.0+4/lib/src/byte_stream', 'packages/hkbook/ThridLib/http-0.12.0+4/lib/src/base_client'], function(dart_sdk, packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__byte_stream, packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const byte_stream = packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__byte_stream.ThridLib__http_0$4612$460$434__lib__src__byte_stream;
  const base_request = packages__hkbook__ThridLib__http_0$4612$460$434__lib__src__base_client.ThridLib__http_0$4612$460$434__lib__src__base_request;
  const streamed_request = Object.create(dart.library);
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let StreamControllerOfListOfint = () => (StreamControllerOfListOfint = dart.constFn(async.StreamController$(ListOfint())))();
  const CT = Object.create(null);
  const _controller = dart.privateName(streamed_request, "_controller");
  streamed_request.StreamedRequest = class StreamedRequest extends base_request.BaseRequest {
    get sink() {
      return this[_controller].sink;
    }
    finalize() {
      super.finalize();
      return new byte_stream.ByteStream.new(this[_controller].stream);
    }
  };
  (streamed_request.StreamedRequest.new = function(method, url) {
    this[_controller] = StreamControllerOfListOfint().new({sync: true});
    streamed_request.StreamedRequest.__proto__.new.call(this, method, url);
    ;
  }).prototype = streamed_request.StreamedRequest.prototype;
  dart.addTypeTests(streamed_request.StreamedRequest);
  dart.setGetterSignature(streamed_request.StreamedRequest, () => ({
    __proto__: dart.getGetters(streamed_request.StreamedRequest.__proto__),
    sink: async.EventSink$(core.List$(core.int))
  }));
  dart.setLibraryUri(streamed_request.StreamedRequest, "package:hkbook/ThridLib/http-0.12.0+4/lib/src/streamed_request.dart");
  dart.setFieldSignature(streamed_request.StreamedRequest, () => ({
    __proto__: dart.getFields(streamed_request.StreamedRequest.__proto__),
    [_controller]: dart.finalFieldType(async.StreamController$(core.List$(core.int)))
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/http-0.12.0+4/lib/src/streamed_request", {
    "package:hkbook/ThridLib/http-0.12.0+4/lib/src/streamed_request.dart": streamed_request
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["streamed_request.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AAuBmC,YAAA,AAAY;IAAI;;AAgB/B,MAAV;AACN,YAAO,gCAAW,AAAY;IAChC;;mDAXuB,QAAY;IACjB,oBAAE,yCAAkC;AAChD,8DAAM,MAAM,EAAE,GAAG;;EAAC","file":"streamed_request.ddc.js"}');
  // Exports:
  return {
    ThridLib__http_0$4612$460$434__lib__src__streamed_request: streamed_request
  };
});

//# sourceMappingURL=streamed_request.ddc.js.map
