define(['dart_sdk', 'packages/hkbook/ThridLib/shared_preferences-0.5.6/lib/shared_preferences', 'packages/flutter_web/src/foundation/assertions'], function(dart_sdk, packages__hkbook__ThridLib__shared_preferences_0$465$466__lib__shared_preferences, packages__flutter_web__src__foundation__assertions) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const shared_preferences = packages__hkbook__ThridLib__shared_preferences_0$465$466__lib__shared_preferences.ThridLib__shared_preferences_0$465$466__lib__shared_preferences;
  const change_notifier = packages__flutter_web__src__foundation__assertions.src__foundation__change_notifier;
  const search_history = Object.create(dart.library);
  const $toString = dartx.toString;
  const $cast = dartx.cast;
  const $forEach = dartx.forEach;
  const $add = dartx.add;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  const CT = Object.create(null);
  const historyString = dart.privateName(search_history, "HistoryProvide.historyString");
  const historyList = dart.privateName(search_history, "HistoryProvide.historyList");
  const Object_ChangeNotifier$36 = class Object_ChangeNotifier extends core.Object {};
  (Object_ChangeNotifier$36.new = function() {
    change_notifier.ChangeNotifier.new.call(this);
  }).prototype = Object_ChangeNotifier$36.prototype;
  dart.applyMixin(Object_ChangeNotifier$36, change_notifier.ChangeNotifier);
  search_history.HistoryProvide = class HistoryProvide extends Object_ChangeNotifier$36 {
    get historyString() {
      return this[historyString];
    }
    set historyString(value) {
      this[historyString] = value;
    }
    get historyList() {
      return this[historyList];
    }
    set historyList(value) {
      this[historyList] = value;
    }
    save(history) {
      return async.async(dart.dynamic, (function* save() {
        let prefs = (yield shared_preferences.SharedPreferences.getInstance());
        this.historyString = prefs.getString("historyString");
        let t = this.historyString == null ? [] : convert.json.decode(dart.toString(this.historyString));
        let tl = core.List.as(t)[$cast](core.String);
        let isHave = false;
        tl[$forEach](dart.fn(item => {
          if (core.identical(item, history)) {
            isHave = true;
          }
        }, StringToNull()));
        if (!isHave) {
          tl[$add](core.String._check(history));
        }
        this.historyString = dart.toString(convert.json.encode(tl));
        core.print(this.historyString);
        prefs.setString("historyString", this.historyString);
        yield this.getHistory();
      }).bind(this));
    }
    remove() {
      return async.async(dart.dynamic, (function* remove() {
        let prefs = (yield shared_preferences.SharedPreferences.getInstance());
        prefs.remove("historyString");
        this.historyList = JSArrayOfString().of([]);
        this.notifyListeners();
      }).bind(this));
    }
    getHistory() {
      return async.async(dart.dynamic, (function* getHistory() {
        let prefs = (yield shared_preferences.SharedPreferences.getInstance());
        this.historyString = prefs.getString("historyString");
        core.print(this.historyString);
        this.historyList = JSArrayOfString().of([]);
        if (this.historyString == null) {
          this.historyList = JSArrayOfString().of([]);
          core.print("----");
        } else {
          let data = convert.json.decode(dart.toString(this.historyString));
          core.print(data);
          let t = core.List.as(data)[$cast](core.String);
          t[$forEach](dart.fn(item => {
            this.historyList[$add](item);
          }, StringToNull()));
        }
        this.notifyListeners();
      }).bind(this));
    }
  };
  (search_history.HistoryProvide.new = function() {
    this[historyString] = "[]";
    this[historyList] = JSArrayOfString().of([]);
    search_history.HistoryProvide.__proto__.new.call(this);
    ;
  }).prototype = search_history.HistoryProvide.prototype;
  dart.addTypeTests(search_history.HistoryProvide);
  dart.setMethodSignature(search_history.HistoryProvide, () => ({
    __proto__: dart.getMethods(search_history.HistoryProvide.__proto__),
    save: dart.fnType(dart.dynamic, [dart.dynamic]),
    remove: dart.fnType(dart.dynamic, []),
    getHistory: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(search_history.HistoryProvide, "package:hkbook/provide/search_history.dart");
  dart.setFieldSignature(search_history.HistoryProvide, () => ({
    __proto__: dart.getFields(search_history.HistoryProvide.__proto__),
    historyString: dart.fieldType(core.String),
    historyList: dart.fieldType(core.List$(core.String))
  }));
  dart.trackLibraries("packages/hkbook/provide/search_history", {
    "package:hkbook/provide/search_history.dart": search_history
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["search_history.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;IAKS;;;;;;IACM;;;;;;SAER;AAAD;AACgB,qBAAQ,MAAwB;AACD,QAAjD,qBAAiB,AAAM,KAAD,WAAW;AAC7B,gBAAI,AAAc,sBAAG,OAAM,KAAG,AAAK,oBAAqB,cAAd;AACjC,iBAAQ,AAAS,aAAX,CAAC;AACf,qBAAS;AAKZ,QAJF,AAAG,EAAD,WAAS,QAAC;AACV,cAAS,eAAL,IAAI,EAAI,OAAO;AACJ,YAAb,SAAS;;;AAGb,aAAI,MAAM;AACO,UAAf,AAAG,EAAD,0BAAK,OAAO;;AAE0B,QAA1C,qBAAgC,cAAhB,AAAK,oBAAO,EAAE;AACV,QAApB,WAAM;AACyC,QAA/C,AAAM,KAAD,WAAW,iBAAiB;AACf,QAAlB,MAAM;MACR;;;AAEM;AACc,qBAAQ,MAAwB;AACrB,QAA7B,AAAM,KAAD,QAAQ;AACG,QAAhB,mBAAc;AACG,QAAjB;MACF;;;AAEU;AACU,qBAAQ,MAAwB;AACD,QAAjD,qBAAiB,AAAM,KAAD,WAAW;AACb,QAApB,WAAM;AACU,QAAhB,mBAAc;AACd,YAAI,AAAc,sBAAG;AACH,UAAhB,mBAAc;AACD,UAAb,WAAM;;AAEF,qBAAO,AAAK,oBAAqB,cAAd;AACZ,UAAX,WAAM,IAAI;AACI,kBAAU,AAAS,aAAd,IAAI;AAGrB,UAFF,AAAE,CAAD,WAAS,QAAC;AACY,YAArB,AAAY,uBAAI,IAAI;;;AAGP,QAAjB;MACF;;;;IA/CO,sBAAgB;IACV,oBAAc;;;EAgD7B","file":"search_history.ddc.js"}');
  // Exports:
  return {
    provide__search_history: search_history
  };
});

//# sourceMappingURL=search_history.ddc.js.map
