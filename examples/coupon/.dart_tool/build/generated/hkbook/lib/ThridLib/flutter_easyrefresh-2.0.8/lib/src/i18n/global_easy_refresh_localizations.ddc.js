define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/foundation/assertions'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web_ui__ui, packages__flutter_web__src__foundation__assertions) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const localizations = packages__flutter_web__animation.src__widgets__localizations;
  const ui = packages__flutter_web_ui__ui.ui;
  const synchronous_future = packages__flutter_web__src__foundation__assertions.src__foundation__synchronous_future;
  const global_easy_refresh_localizations = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $first = dartx.first;
  const $contains = dartx.contains;
  const $_equals = dartx._equals;
  let ListOfLocale = () => (ListOfLocale = dart.constFn(core.List$(ui.Locale)))();
  let IterableOfLocale = () => (IterableOfLocale = dart.constFn(core.Iterable$(ui.Locale)))();
  let ListOfLocaleAndIterableOfLocaleToLocale = () => (ListOfLocaleAndIterableOfLocaleToLocale = dart.constFn(dart.fnType(ui.Locale, [ListOfLocale(), IterableOfLocale()])))();
  let LocaleAndIterableOfLocaleToLocale = () => (LocaleAndIterableOfLocaleToLocale = dart.constFn(dart.fnType(ui.Locale, [ui.Locale, IterableOfLocale()])))();
  let SynchronousFutureOfGlobalEasyRefreshLocalizations = () => (SynchronousFutureOfGlobalEasyRefreshLocalizations = dart.constFn(synchronous_future.SynchronousFuture$(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: global_easy_refresh_localizations.GeneratedLocalizationsDelegate.prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Locale.prototype,
        [Locale__countryCode]: "HK",
        [Locale_scriptCode]: null,
        [Locale__languageCode]: "zh"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Locale.prototype,
        [Locale__countryCode]: "TW",
        [Locale_scriptCode]: null,
        [Locale__languageCode]: "zh"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Locale.prototype,
        [Locale__countryCode]: "MO",
        [Locale_scriptCode]: null,
        [Locale__languageCode]: "zh"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Locale.prototype,
        [Locale__countryCode]: "",
        [Locale_scriptCode]: null,
        [Locale__languageCode]: "en"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Locale.prototype,
        [Locale__countryCode]: "CN",
        [Locale_scriptCode]: null,
        [Locale__languageCode]: "zh"
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], ui.Locale);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: global_easy_refresh_localizations.$zh_HK.prototype
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: global_easy_refresh_localizations.$zh_TW.prototype
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: global_easy_refresh_localizations.$zh_MO.prototype
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: global_easy_refresh_localizations.$en.prototype
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: global_easy_refresh_localizations.$zh_CN.prototype
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.prototype
      });
    }
  });
  let C0;
  global_easy_refresh_localizations.GlobalEasyRefreshLocalizations = class GlobalEasyRefreshLocalizations extends core.Object {
    static of(context) {
      return localizations.Localizations.of(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations, context, dart.wrapType(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations));
    }
    get textDirection() {
      return ui.TextDirection.ltr;
    }
    get completeLoad() {
      return "Load done";
    }
    get completeRefresh() {
      return "Refresh done";
    }
    get loadFailed() {
      return "Load failed";
    }
    get loadFinish() {
      return "Load completed";
    }
    get loaded() {
      return "Load completed";
    }
    get loading() {
      return "Loading...";
    }
    get noMore() {
      return "No more";
    }
    get pullToRefresh() {
      return "Pull to refresh";
    }
    get pushToLoad() {
      return "Pull to load";
    }
    get refreshFailed() {
      return "Refresh failed";
    }
    get refreshFinish() {
      return "Refresh completed";
    }
    get refreshed() {
      return "Refresh completed";
    }
    get refreshing() {
      return "Refreshing...";
    }
    get releaseToLoad() {
      return "Release to load";
    }
    get releaseToRefresh() {
      return "Release to refresh";
    }
    get updateAt() {
      return "Update at %T";
    }
  };
  (global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.new = function() {
    ;
  }).prototype = global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.prototype;
  dart.addTypeTests(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations);
  global_easy_refresh_localizations.GlobalEasyRefreshLocalizations[dart.implements] = () => [localizations.WidgetsLocalizations];
  dart.setGetterSignature(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations, () => ({
    __proto__: dart.getGetters(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.__proto__),
    textDirection: ui.TextDirection,
    completeLoad: core.String,
    completeRefresh: core.String,
    loadFailed: core.String,
    loadFinish: core.String,
    loaded: core.String,
    loading: core.String,
    noMore: core.String,
    pullToRefresh: core.String,
    pushToLoad: core.String,
    refreshFailed: core.String,
    refreshFinish: core.String,
    refreshed: core.String,
    refreshing: core.String,
    releaseToLoad: core.String,
    releaseToRefresh: core.String,
    updateAt: core.String
  }));
  dart.setLibraryUri(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/i18n/global_easy_refresh_localizations.dart");
  dart.defineLazy(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations, {
    /*global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.current*/get current() {
      return null;
    },
    set current(_) {},
    /*global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.delegate*/get delegate() {
      return C0 || CT.C0;
    }
  });
  global_easy_refresh_localizations.$zh_HK = class $36zh_HK extends global_easy_refresh_localizations.GlobalEasyRefreshLocalizations {
    get textDirection() {
      return ui.TextDirection.ltr;
    }
    get refreshed() {
      return "刷新完成";
    }
    get noMore() {
      return "沒有更多數據";
    }
    get pullToRefresh() {
      return "拉動刷新";
    }
    get loadFailed() {
      return "加載失敗";
    }
    get updateAt() {
      return "更新於 %T";
    }
    get loading() {
      return "正在加載...";
    }
    get refreshFinish() {
      return "刷新完成";
    }
    get releaseToLoad() {
      return "釋放加載";
    }
    get loadFinish() {
      return "加載完成";
    }
    get loaded() {
      return "加載完成";
    }
    get completeLoad() {
      return "完成加載";
    }
    get refreshFailed() {
      return "刷新失敗";
    }
    get pushToLoad() {
      return "拉動加載";
    }
    get releaseToRefresh() {
      return "釋放刷新";
    }
    get refreshing() {
      return "正在刷新...";
    }
    get completeRefresh() {
      return "完成刷新";
    }
  };
  (global_easy_refresh_localizations.$zh_HK.new = function() {
    global_easy_refresh_localizations.$zh_HK.__proto__.new.call(this);
    ;
  }).prototype = global_easy_refresh_localizations.$zh_HK.prototype;
  dart.addTypeTests(global_easy_refresh_localizations.$zh_HK);
  dart.setLibraryUri(global_easy_refresh_localizations.$zh_HK, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/i18n/global_easy_refresh_localizations.dart");
  global_easy_refresh_localizations.$zh_TW = class $36zh_TW extends global_easy_refresh_localizations.GlobalEasyRefreshLocalizations {
    get textDirection() {
      return ui.TextDirection.ltr;
    }
    get refreshed() {
      return "刷新完成";
    }
    get noMore() {
      return "沒有更多數據";
    }
    get pullToRefresh() {
      return "拉動刷新";
    }
    get loadFailed() {
      return "加載失敗";
    }
    get updateAt() {
      return "更新於 %T";
    }
    get loading() {
      return "正在加載...";
    }
    get refreshFinish() {
      return "刷新完成";
    }
    get releaseToLoad() {
      return "釋放加載";
    }
    get loadFinish() {
      return "加載完成";
    }
    get loaded() {
      return "加載完成";
    }
    get completeLoad() {
      return "完成加載";
    }
    get refreshFailed() {
      return "刷新失敗";
    }
    get pushToLoad() {
      return "拉動加載";
    }
    get releaseToRefresh() {
      return "釋放刷新";
    }
    get refreshing() {
      return "正在刷新...";
    }
    get completeRefresh() {
      return "完成刷新";
    }
  };
  (global_easy_refresh_localizations.$zh_TW.new = function() {
    global_easy_refresh_localizations.$zh_TW.__proto__.new.call(this);
    ;
  }).prototype = global_easy_refresh_localizations.$zh_TW.prototype;
  dart.addTypeTests(global_easy_refresh_localizations.$zh_TW);
  dart.setLibraryUri(global_easy_refresh_localizations.$zh_TW, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/i18n/global_easy_refresh_localizations.dart");
  global_easy_refresh_localizations.$zh_MO = class $36zh_MO extends global_easy_refresh_localizations.GlobalEasyRefreshLocalizations {
    get textDirection() {
      return ui.TextDirection.ltr;
    }
    get refreshed() {
      return "刷新完成";
    }
    get noMore() {
      return "沒有更多數據";
    }
    get pullToRefresh() {
      return "拉動刷新";
    }
    get loadFailed() {
      return "加載失敗";
    }
    get updateAt() {
      return "更新於 %T";
    }
    get loading() {
      return "正在加載...";
    }
    get refreshFinish() {
      return "刷新完成";
    }
    get releaseToLoad() {
      return "釋放加載";
    }
    get loadFinish() {
      return "加載完成";
    }
    get loaded() {
      return "加載完成";
    }
    get completeLoad() {
      return "完成加載";
    }
    get refreshFailed() {
      return "刷新失敗";
    }
    get pushToLoad() {
      return "拉動加載";
    }
    get releaseToRefresh() {
      return "釋放刷新";
    }
    get refreshing() {
      return "正在刷新...";
    }
    get completeRefresh() {
      return "完成刷新";
    }
  };
  (global_easy_refresh_localizations.$zh_MO.new = function() {
    global_easy_refresh_localizations.$zh_MO.__proto__.new.call(this);
    ;
  }).prototype = global_easy_refresh_localizations.$zh_MO.prototype;
  dart.addTypeTests(global_easy_refresh_localizations.$zh_MO);
  dart.setLibraryUri(global_easy_refresh_localizations.$zh_MO, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/i18n/global_easy_refresh_localizations.dart");
  global_easy_refresh_localizations.$en = class $36en extends global_easy_refresh_localizations.GlobalEasyRefreshLocalizations {};
  (global_easy_refresh_localizations.$en.new = function() {
    global_easy_refresh_localizations.$en.__proto__.new.call(this);
    ;
  }).prototype = global_easy_refresh_localizations.$en.prototype;
  dart.addTypeTests(global_easy_refresh_localizations.$en);
  dart.setLibraryUri(global_easy_refresh_localizations.$en, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/i18n/global_easy_refresh_localizations.dart");
  global_easy_refresh_localizations.$zh_CN = class $36zh_CN extends global_easy_refresh_localizations.GlobalEasyRefreshLocalizations {
    get textDirection() {
      return ui.TextDirection.ltr;
    }
    get refreshed() {
      return "刷新完成";
    }
    get noMore() {
      return "没有更多数据";
    }
    get pullToRefresh() {
      return "拉动刷新";
    }
    get loadFailed() {
      return "加载失败";
    }
    get updateAt() {
      return "更新于 %T";
    }
    get loading() {
      return "正在加载...";
    }
    get refreshFinish() {
      return "刷新完成";
    }
    get releaseToLoad() {
      return "释放加载";
    }
    get loadFinish() {
      return "加载完成";
    }
    get loaded() {
      return "加载完成";
    }
    get completeLoad() {
      return "完成加载";
    }
    get refreshFailed() {
      return "刷新失败";
    }
    get pushToLoad() {
      return "拉动加载";
    }
    get releaseToRefresh() {
      return "释放刷新";
    }
    get refreshing() {
      return "正在刷新...";
    }
    get completeRefresh() {
      return "完成刷新";
    }
  };
  (global_easy_refresh_localizations.$zh_CN.new = function() {
    global_easy_refresh_localizations.$zh_CN.__proto__.new.call(this);
    ;
  }).prototype = global_easy_refresh_localizations.$zh_CN.prototype;
  dart.addTypeTests(global_easy_refresh_localizations.$zh_CN);
  dart.setLibraryUri(global_easy_refresh_localizations.$zh_CN, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/i18n/global_easy_refresh_localizations.dart");
  const Locale__countryCode = dart.privateName(ui, "Locale._countryCode");
  const Locale_scriptCode = dart.privateName(ui, "Locale.scriptCode");
  const Locale__languageCode = dart.privateName(ui, "Locale._languageCode");
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C1;
  const _resolve = dart.privateName(global_easy_refresh_localizations, "_resolve");
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  const _isSupported = dart.privateName(global_easy_refresh_localizations, "_isSupported");
  global_easy_refresh_localizations.GeneratedLocalizationsDelegate = class GeneratedLocalizationsDelegate extends localizations.LocalizationsDelegate$(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations) {
    get supportedLocales() {
      return C1 || CT.C1;
    }
    listResolution(opts) {
      let fallback = opts && 'fallback' in opts ? opts.fallback : null;
      let withCountry = opts && 'withCountry' in opts ? opts.withCountry : true;
      return dart.fn((locales, supported) => {
        let t0;
        if (locales == null || dart.test(locales[$isEmpty])) {
          t0 = fallback;
          return t0 == null ? supported[$first] : t0;
        } else {
          return this[_resolve](locales[$first], fallback, supported, withCountry);
        }
      }, ListOfLocaleAndIterableOfLocaleToLocale());
    }
    resolution(opts) {
      let fallback = opts && 'fallback' in opts ? opts.fallback : null;
      let withCountry = opts && 'withCountry' in opts ? opts.withCountry : true;
      return dart.fn((locale, supported) => this[_resolve](locale, fallback, supported, withCountry), LocaleAndIterableOfLocaleToLocale());
    }
    load(locale) {
      let lang = global_easy_refresh_localizations.getLang(locale);
      if (lang != null) {
        switch (lang) {
          case "zh_HK":
          {
            global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.current = C7 || CT.C7;
            return new (SynchronousFutureOfGlobalEasyRefreshLocalizations()).new(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.current);
          }
          case "zh_TW":
          {
            global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.current = C8 || CT.C8;
            return new (SynchronousFutureOfGlobalEasyRefreshLocalizations()).new(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.current);
          }
          case "zh_MO":
          {
            global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.current = C9 || CT.C9;
            return new (SynchronousFutureOfGlobalEasyRefreshLocalizations()).new(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.current);
          }
          case "en":
          {
            global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.current = C10 || CT.C10;
            return new (SynchronousFutureOfGlobalEasyRefreshLocalizations()).new(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.current);
          }
          case "zh_CN":
          {
            global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.current = C11 || CT.C11;
            return new (SynchronousFutureOfGlobalEasyRefreshLocalizations()).new(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.current);
          }
          default:
        }
      }
      global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.current = C12 || CT.C12;
      return new (SynchronousFutureOfGlobalEasyRefreshLocalizations()).new(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations.current);
    }
    isSupported(locale) {
      return this[_isSupported](locale, true);
    }
    shouldReload(old) {
      global_easy_refresh_localizations.GeneratedLocalizationsDelegate._check(old);
      return false;
    }
    [_resolve](locale, fallback, supported, withCountry) {
      let t0, t0$;
      if (locale == null || !dart.test(this[_isSupported](locale, withCountry))) {
        t0 = fallback;
        return t0 == null ? supported[$first] : t0;
      }
      let languageLocale = new ui.Locale.new(locale.languageCode, "");
      if (dart.test(supported[$contains](locale))) {
        return locale;
      } else if (dart.test(supported[$contains](languageLocale))) {
        return languageLocale;
      } else {
        let fallbackLocale = (t0$ = fallback, t0$ == null ? supported[$first] : t0$);
        return fallbackLocale;
      }
    }
    [_isSupported](locale, withCountry) {
      if (locale != null) {
        for (let supportedLocale of this.supportedLocales) {
          if (supportedLocale.languageCode != locale.languageCode) {
            continue;
          }
          if (supportedLocale.countryCode == locale.countryCode) {
            return true;
          }
          if (!true[$_equals](withCountry) && (supportedLocale.countryCode == null || supportedLocale.countryCode[$isEmpty])) {
            return true;
          }
        }
      }
      return false;
    }
  };
  (global_easy_refresh_localizations.GeneratedLocalizationsDelegate.new = function() {
    global_easy_refresh_localizations.GeneratedLocalizationsDelegate.__proto__.new.call(this);
    ;
  }).prototype = global_easy_refresh_localizations.GeneratedLocalizationsDelegate.prototype;
  dart.addTypeTests(global_easy_refresh_localizations.GeneratedLocalizationsDelegate);
  dart.setMethodSignature(global_easy_refresh_localizations.GeneratedLocalizationsDelegate, () => ({
    __proto__: dart.getMethods(global_easy_refresh_localizations.GeneratedLocalizationsDelegate.__proto__),
    listResolution: dart.fnType(dart.fnType(ui.Locale, [core.List$(ui.Locale), core.Iterable$(ui.Locale)]), [], {fallback: ui.Locale, withCountry: core.bool}, {}),
    resolution: dart.fnType(dart.fnType(ui.Locale, [ui.Locale, core.Iterable$(ui.Locale)]), [], {fallback: ui.Locale, withCountry: core.bool}, {}),
    load: dart.fnType(async.Future$(global_easy_refresh_localizations.GlobalEasyRefreshLocalizations), [ui.Locale]),
    isSupported: dart.fnType(core.bool, [ui.Locale]),
    shouldReload: dart.fnType(core.bool, [core.Object]),
    [_resolve]: dart.fnType(ui.Locale, [ui.Locale, ui.Locale, core.Iterable$(ui.Locale), core.bool]),
    [_isSupported]: dart.fnType(core.bool, [ui.Locale, core.bool])
  }));
  dart.setGetterSignature(global_easy_refresh_localizations.GeneratedLocalizationsDelegate, () => ({
    __proto__: dart.getGetters(global_easy_refresh_localizations.GeneratedLocalizationsDelegate.__proto__),
    supportedLocales: core.List$(ui.Locale)
  }));
  dart.setLibraryUri(global_easy_refresh_localizations.GeneratedLocalizationsDelegate, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/i18n/global_easy_refresh_localizations.dart");
  global_easy_refresh_localizations.getLang = function getLang(l) {
    return l == null ? null : l.countryCode != null && l.countryCode[$isEmpty] ? l.languageCode : dart.toString(l);
  };
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/i18n/global_easy_refresh_localizations", {
    "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/i18n/global_easy_refresh_localizations.dart": global_easy_refresh_localizations
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["global_easy_refresh_localizations.dart"],"names":[],"mappings":"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","file":"global_easy_refresh_localizations.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_easyrefresh_2$460$468__lib__src__i18n__global_easy_refresh_localizations: global_easy_refresh_localizations
  };
});

//# sourceMappingURL=global_easy_refresh_localizations.ddc.js.map
