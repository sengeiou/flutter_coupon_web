define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/hkbook/ThridLib/carousel_slider-1.4.1/lib/carousel_slider', 'packages/hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__material, packages__hkbook__ThridLib__carousel_slider_1$464$461__lib__carousel_slider, packages__hkbook__ThridLib__flutter_screenutil_0$467$460__lib__flutter_screenutil, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const container = packages__flutter_web__animation.src__widgets__container;
  const image = packages__flutter_web__animation.src__widgets__image;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const colors = packages__flutter_web__material.src__material__colors;
  const carousel_slider = packages__hkbook__ThridLib__carousel_slider_1$464$461__lib__carousel_slider.ThridLib__carousel_slider_1$464$461__lib__carousel_slider;
  const flutter_screenutil = packages__hkbook__ThridLib__flutter_screenutil_0$467$460__lib__flutter_screenutil.ThridLib__flutter_screenutil_0$467$460__lib__flutter_screenutil;
  const box_fit = packages__flutter_web__src__animation__animation.src__painting__box_fit;
  const home_banner = Object.create(dart.library);
  const $length = dartx.length;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let BuildContextToContainer = () => (BuildContextToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext])))();
  let StringToBuilder = () => (StringToBuilder = dart.constFn(dart.fnType(basic.Builder, [core.String])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_banner.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 26,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 23,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_banner.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_banner.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_banner.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "viewportFraction",
        [_Location_column]: 9,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "aspectRatio",
        [_Location_column]: 9,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autoPlay",
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_banner.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/page/home/home_banner.dart"
      });
    }
  });
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C4;
  let C5;
  let C3;
  let C2;
  let C8;
  let C9;
  let C7;
  let C6;
  let C12;
  let C11;
  let C10;
  let C15;
  let C16;
  let C17;
  let C18;
  let C14;
  let C13;
  let C21;
  let C22;
  let C20;
  let C19;
  const carouselInfos = dart.privateName(home_banner, "HomeBanner.carouselInfos");
  home_banner.HomeBanner = class HomeBanner extends framework.StatelessWidget {
    get carouselInfos() {
      return this[carouselInfos];
    }
    set carouselInfos(value) {
      super.carouselInfos = value;
    }
    build(context) {
      if (this.carouselInfos[$length] === 0) {
        return new basic.SizedBox.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0});
      }
      return new container.Container.new({color: colors.Colors.white, child: new carousel_slider.CarouselSlider.new({items: this.carouselInfos[$map](basic.Builder, dart.fn(info => new basic.Builder.new({builder: dart.fn(context => {
              let t0;
              return new container.Container.new({width: new flutter_screenutil.ScreenUtil.new().setWidth(750), child: new image.Image.network((t0 = info, t0 == null ? "" : t0), {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C2 || CT.C2}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6});
            }, BuildContextToContainer()), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), StringToBuilder()))[$toList](), viewportFraction: 1.0, aspectRatio: 2.0, autoPlay: true, $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19});
    }
  };
  (home_banner.HomeBanner.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[carouselInfos] = JSArrayOfString().of(["http://hank.image.alimmdn.com/tbCoupon/dae.png", "http://hank.image.alimmdn.com/tbCoupon/pp.png"]);
    home_banner.HomeBanner.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home_banner.HomeBanner.prototype;
  dart.addTypeTests(home_banner.HomeBanner);
  dart.setMethodSignature(home_banner.HomeBanner, () => ({
    __proto__: dart.getMethods(home_banner.HomeBanner.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home_banner.HomeBanner, "package:hkbook/page/home/home_banner.dart");
  dart.setFieldSignature(home_banner.HomeBanner, () => ({
    __proto__: dart.getFields(home_banner.HomeBanner.__proto__),
    carouselInfos: dart.finalFieldType(core.List$(core.String))
  }));
  dart.trackLibraries("packages/hkbook/page/home/home_banner", {
    "package:hkbook/page/home/home_banner.dart": home_banner
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home_banner.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMqB;;;;;;UAGO;AACxB,UAAI,AAAc,AAAO,gCAAG;AAC1B,cAAO;;AAGT,YAAO,qCACS,4BACP,+CACE,AAAc,AAalB,wCAbsB,QAAC,QACjB,gCACI,QAAc;;AACrB,oBAAO,qCACE,AAAa,iDAAS,aAEhB,yBACJ,KAAL,IAAI,QAAJ,OAAQ,gBACM;sJAMT,kBACJ,eACH;IAGhB;;;;IA9BmB,sBAAgB,sBAAC,kDAAiD;;;EA+BvF","file":"home_banner.ddc.js"}');
  // Exports:
  return {
    page__home__home_banner: home_banner
  };
});

//# sourceMappingURL=home_banner.ddc.js.map
