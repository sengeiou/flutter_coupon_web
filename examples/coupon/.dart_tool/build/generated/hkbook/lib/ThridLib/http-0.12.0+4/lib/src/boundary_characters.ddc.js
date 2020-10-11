define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const boundary_characters = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([43, 95, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122], core.int);
    }
  });
  let C0;
  dart.defineLazy(boundary_characters, {
    /*boundary_characters.BOUNDARY_CHARACTERS*/get BOUNDARY_CHARACTERS() {
      return C0 || CT.C0;
    }
  });
  dart.trackLibraries("packages/hkbook/ThridLib/http-0.12.0+4/lib/src/boundary_characters", {
    "package:hkbook/ThridLib/http-0.12.0+4/lib/src/boundary_characters.dart": boundary_characters
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["boundary_characters.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAYgB,uCAAmB","file":"boundary_characters.ddc.js"}');
  // Exports:
  return {
    ThridLib__http_0$4612$460$434__lib__src__boundary_characters: boundary_characters
  };
});

//# sourceMappingURL=boundary_characters.ddc.js.map
