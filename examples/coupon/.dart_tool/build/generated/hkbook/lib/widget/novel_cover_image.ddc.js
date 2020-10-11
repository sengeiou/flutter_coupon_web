define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/hkbook/app/sq_color'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__hkbook__app__sq_color) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const container = packages__flutter_web__animation.src__widgets__container;
  const image = packages__flutter_web__animation.src__widgets__image;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const box_fit = packages__flutter_web__src__animation__animation.src__painting__box_fit;
  const sq_color = packages__hkbook__app__sq_color.app__sq_color;
  const novel_cover_image = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 9,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/novel_cover_image.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/novel_cover_image.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  let C7;
  let C8;
  let C6;
  let C5;
  const imgUrl$ = dart.privateName(novel_cover_image, "NovelCoverImage.imgUrl");
  const width$ = dart.privateName(novel_cover_image, "NovelCoverImage.width");
  const height$ = dart.privateName(novel_cover_image, "NovelCoverImage.height");
  novel_cover_image.NovelCoverImage = class NovelCoverImage extends framework.StatelessWidget {
    get imgUrl() {
      return this[imgUrl$];
    }
    set imgUrl(value) {
      super.imgUrl = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    build(context) {
      return new container.Container.new({child: new image.Image.new({fit: box_fit.BoxFit.cover, width: this.width, height: this.height, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({color: sq_color.SQColor.paper})}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
    }
  };
  (novel_cover_image.NovelCoverImage.new = function(imgUrl, opts) {
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[imgUrl$] = imgUrl;
    this[width$] = width;
    this[height$] = height;
    novel_cover_image.NovelCoverImage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = novel_cover_image.NovelCoverImage.prototype;
  dart.addTypeTests(novel_cover_image.NovelCoverImage);
  dart.setMethodSignature(novel_cover_image.NovelCoverImage, () => ({
    __proto__: dart.getMethods(novel_cover_image.NovelCoverImage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(novel_cover_image.NovelCoverImage, "package:hkbook/widget/novel_cover_image.dart");
  dart.setFieldSignature(novel_cover_image.NovelCoverImage, () => ({
    __proto__: dart.getFields(novel_cover_image.NovelCoverImage.__proto__),
    imgUrl: dart.finalFieldType(core.String),
    width: dart.finalFieldType(core.double),
    height: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/hkbook/widget/novel_cover_image", {
    "package:hkbook/widget/novel_cover_image.dart": novel_cover_image
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["novel_cover_image.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKe;;;;;;IACA;;;;;;IACA;;;;;;UAIa;AACxB,YAAO,qCACE,0BAEO,6BACL,oBACC,gFAEE,8CAA6B,8BAAmB;IAEhE;;oDAbqB;QAAc;QAAY;;IAA1B;IAAc;IAAY;AAA/C;;EAAuD","file":"novel_cover_image.ddc.js"}');
  // Exports:
  return {
    widget__novel_cover_image: novel_cover_image
  };
});

//# sourceMappingURL=novel_cover_image.ddc.js.map
