define(['dart_sdk', 'packages/flutter_web/animation'], function(dart_sdk, packages__flutter_web__animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const flutter_screenutil = Object.create(dart.library);
  const CT = Object.create(null);
  const width$ = dart.privateName(flutter_screenutil, "ScreenUtil.width");
  const height$ = dart.privateName(flutter_screenutil, "ScreenUtil.height");
  const allowFontScaling$ = dart.privateName(flutter_screenutil, "ScreenUtil.allowFontScaling");
  flutter_screenutil.ScreenUtil = class ScreenUtil extends core.Object {
    get width() {
      return this[width$];
    }
    set width(value) {
      this[width$] = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      this[height$] = value;
    }
    get allowFontScaling() {
      return this[allowFontScaling$];
    }
    set allowFontScaling(value) {
      this[allowFontScaling$] = value;
    }
    static getInstance() {
      return flutter_screenutil.ScreenUtil.instance;
    }
    init(context) {
      let mediaQuery = media_query.MediaQuery.of(context);
      flutter_screenutil.ScreenUtil._mediaQueryData = mediaQuery;
      flutter_screenutil.ScreenUtil._pixelRatio = mediaQuery.devicePixelRatio;
      flutter_screenutil.ScreenUtil._screenWidth = mediaQuery.size.width;
      flutter_screenutil.ScreenUtil._screenHeight = mediaQuery.size.height;
      flutter_screenutil.ScreenUtil._statusBarHeight = mediaQuery.padding.top;
      flutter_screenutil.ScreenUtil._bottomBarHeight = flutter_screenutil.ScreenUtil._mediaQueryData.padding.bottom;
      flutter_screenutil.ScreenUtil._textScaleFactor = mediaQuery.textScaleFactor;
    }
    static get mediaQueryData() {
      return flutter_screenutil.ScreenUtil._mediaQueryData;
    }
    static get textScaleFactor() {
      return flutter_screenutil.ScreenUtil._textScaleFactor;
    }
    static get pixelRatio() {
      return flutter_screenutil.ScreenUtil._pixelRatio;
    }
    static get screenWidthDp() {
      return flutter_screenutil.ScreenUtil._screenWidth;
    }
    static get screenHeightDp() {
      return flutter_screenutil.ScreenUtil._screenHeight;
    }
    static get screenWidth() {
      return dart.notNull(flutter_screenutil.ScreenUtil._screenWidth) * dart.notNull(flutter_screenutil.ScreenUtil._pixelRatio);
    }
    static get screenHeight() {
      return dart.notNull(flutter_screenutil.ScreenUtil._screenHeight) * dart.notNull(flutter_screenutil.ScreenUtil._pixelRatio);
    }
    static get statusBarHeight() {
      return flutter_screenutil.ScreenUtil._statusBarHeight;
    }
    static get bottomBarHeight() {
      return flutter_screenutil.ScreenUtil._bottomBarHeight;
    }
    get scaleWidth() {
      return dart.notNull(flutter_screenutil.ScreenUtil._screenWidth) / dart.notNull(flutter_screenutil.ScreenUtil.instance.width);
    }
    get scaleHeight() {
      return dart.notNull(flutter_screenutil.ScreenUtil._screenHeight) / dart.notNull(flutter_screenutil.ScreenUtil.instance.height);
    }
    setWidth(width) {
      return dart.notNull(width) * dart.notNull(this.scaleWidth);
    }
    setHeight(height) {
      return dart.notNull(height) * dart.notNull(this.scaleHeight);
    }
    setSp(fontSize) {
      return dart.test(this.allowFontScaling) ? this.setWidth(fontSize) : dart.notNull(this.setWidth(fontSize)) / dart.notNull(flutter_screenutil.ScreenUtil._textScaleFactor);
    }
  };
  (flutter_screenutil.ScreenUtil.new = function(opts) {
    let width = opts && 'width' in opts ? opts.width : 1080;
    let height = opts && 'height' in opts ? opts.height : 1920;
    let allowFontScaling = opts && 'allowFontScaling' in opts ? opts.allowFontScaling : false;
    this[width$] = width;
    this[height$] = height;
    this[allowFontScaling$] = allowFontScaling;
    ;
  }).prototype = flutter_screenutil.ScreenUtil.prototype;
  dart.addTypeTests(flutter_screenutil.ScreenUtil);
  dart.setMethodSignature(flutter_screenutil.ScreenUtil, () => ({
    __proto__: dart.getMethods(flutter_screenutil.ScreenUtil.__proto__),
    init: dart.fnType(dart.void, [framework.BuildContext]),
    setWidth: dart.fnType(core.num, [core.num]),
    setHeight: dart.fnType(core.num, [core.num]),
    setSp: dart.fnType(core.num, [core.num])
  }));
  dart.setGetterSignature(flutter_screenutil.ScreenUtil, () => ({
    __proto__: dart.getGetters(flutter_screenutil.ScreenUtil.__proto__),
    scaleWidth: core.double,
    scaleHeight: core.double
  }));
  dart.setLibraryUri(flutter_screenutil.ScreenUtil, "package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart");
  dart.setFieldSignature(flutter_screenutil.ScreenUtil, () => ({
    __proto__: dart.getFields(flutter_screenutil.ScreenUtil.__proto__),
    width: dart.fieldType(core.double),
    height: dart.fieldType(core.double),
    allowFontScaling: dart.fieldType(core.bool)
  }));
  dart.defineLazy(flutter_screenutil.ScreenUtil, {
    /*flutter_screenutil.ScreenUtil.instance*/get instance() {
      return new flutter_screenutil.ScreenUtil.new();
    },
    set instance(_) {},
    /*flutter_screenutil.ScreenUtil._mediaQueryData*/get _mediaQueryData() {
      return null;
    },
    set _mediaQueryData(_) {},
    /*flutter_screenutil.ScreenUtil._screenWidth*/get _screenWidth() {
      return null;
    },
    set _screenWidth(_) {},
    /*flutter_screenutil.ScreenUtil._screenHeight*/get _screenHeight() {
      return null;
    },
    set _screenHeight(_) {},
    /*flutter_screenutil.ScreenUtil._pixelRatio*/get _pixelRatio() {
      return null;
    },
    set _pixelRatio(_) {},
    /*flutter_screenutil.ScreenUtil._statusBarHeight*/get _statusBarHeight() {
      return null;
    },
    set _statusBarHeight(_) {},
    /*flutter_screenutil.ScreenUtil._bottomBarHeight*/get _bottomBarHeight() {
      return null;
    },
    set _bottomBarHeight(_) {},
    /*flutter_screenutil.ScreenUtil._textScaleFactor*/get _textScaleFactor() {
      return null;
    },
    set _textScaleFactor(_) {}
  });
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil", {
    "package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart": flutter_screenutil
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flutter_screenutil.dart"],"names":[],"mappings":";;;;;;;;;;;;;IAYS;;;;;;IACA;;;;;;IAIF;;;;;;;AAmBH,YAAO;IACT;SAEuB;AACN,uBAAwB,0BAAG,OAAO;AACrB,MAA5B,gDAAkB,UAAU;AACa,MAAzC,4CAAc,AAAW,UAAD;AACY,MAApC,6CAAe,AAAW,AAAK,UAAN;AACa,MAAtC,8CAAgB,AAAW,AAAK,UAAN;AACe,MAAzC,iDAAmB,AAAW,AAAQ,UAAT;AACoB,MAAjD,iDAAmB,AAAgB,AAAQ;AACE,MAA7C,iDAAmB,AAAW,UAAD;IAC/B;;AAE4C;IAAe;;AAItB;IAAgB;;AAIrB;IAAW;;AAIR;IAAY;;AAIX;IAAa;;AAIhB,YAAa,cAAb,2DAAe;IAAW;;AAIzB,YAAc,cAAd,4DAAgB;IAAW;;AAIxB;IAAgB;;AAIhB;IAAgB;;AAI5B,YAAa,cAAb,2DAAe,AAAS;IAAK;;AAE5B,YAAc,cAAd,4DAAgB,AAAS;IAAM;aAOxC;AAAU,YAAM,cAAN,KAAK,iBAAG;IAAU;cAU3B;AAAW,YAAO,cAAP,MAAM,iBAAG;IAAW;UAOnC;AAAa,gDACrB,cAAS,QAAQ,IACE,aAAnB,cAAS,QAAQ,kBAAI;IAAgB;;;QApFpC;QACA;QACA;IAFA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;;MAzBgB,sCAAQ;YAAO;;;MAWX,6CAAe;;;;MACvB,0CAAY;;;;MACZ,2CAAa;;;;MACb,yCAAW;;;;MACX,8CAAgB;;;;MAEhB,8CAAgB;;;;MAEhB,8CAAgB","file":"flutter_screenutil.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_screenutil_0$467$460__lib__flutter_screenutil: flutter_screenutil
  };
});

//# sourceMappingURL=flutter_screenutil.ddc.js.map
