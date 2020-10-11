define(['dart_sdk', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const delay_tween = Object.create(dart.library);
  const CT = Object.create(null);
  const delay$ = dart.privateName(delay_tween, "DelayTween.delay");
  delay_tween.DelayTween = class DelayTween extends tween.Tween$(core.double) {
    get delay() {
      return this[delay$];
    }
    set delay(value) {
      super.delay = value;
    }
    lerp(t) {
      return super.lerp((math.sin((dart.notNull(t) - dart.notNull(this.delay)) * 2 * 3.141592653589793) + 1) / 2);
    }
    evaluate(animation) {
      return this.lerp(animation.value);
    }
  };
  (delay_tween.DelayTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    let delay = opts && 'delay' in opts ? opts.delay : null;
    this[delay$] = delay;
    delay_tween.DelayTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = delay_tween.DelayTween.prototype;
  dart.addTypeTests(delay_tween.DelayTween);
  dart.setLibraryUri(delay_tween.DelayTween, "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/tweens/delay_tween.dart");
  dart.setFieldSignature(delay_tween.DelayTween, () => ({
    __proto__: dart.getFields(delay_tween.DelayTween.__proto__),
    delay: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/tweens/delay_tween", {
    "package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/tweens/delay_tween.dart": delay_tween
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["delay_tween.dart"],"names":[],"mappings":";;;;;;;;;;;IAOe;;;;;;SAGM;AAAM,YAAM,YAA+C,CAAzC,AAAoC,SAAf,AAAI,CAAb,aAAF,CAAC,iBAAG,eAAS,yBAAe,KAAK;IAAE;aAGhD;AAAc,uBAAK,AAAU,SAAD;IAAO;;;QARlD;QAAc;QAAU;;AAAU,4DAAa,KAAK,OAAO,GAAG;;EAAC","file":"delay_tween.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_spinkit_4$461$461$431__lib__src__tweens__delay_tween: delay_tween
  };
});

//# sourceMappingURL=delay_tween.ddc.js.map
