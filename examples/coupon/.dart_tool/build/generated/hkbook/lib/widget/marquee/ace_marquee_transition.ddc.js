define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation'], function(dart_sdk, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui, packages__flutter_web__animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter_web__src__animation__animation.src__painting__basic_types;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const ui = packages__flutter_web_ui__ui.ui;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const transitions = packages__flutter_web__animation.src__widgets__transitions;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const ace_marquee_transition = Object.create(dart.library);
  let TweenOfOffset = () => (TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.down",
        index: 2
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.up",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.right",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: basic_types.AxisDirection.prototype,
        [_name]: "AxisDirection.left",
        index: 3
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "translation",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transformHitTests",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/widget/marquee/ace_marquee_transition.dart"
      });
    }
  });
  const _name = dart.privateName(basic_types, "_name");
  let C0;
  const _tween = dart.privateName(ace_marquee_transition, "_tween");
  let C1;
  let C2;
  let C3;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C6;
  let C7;
  let C8;
  let C5;
  let C4;
  const transformHitTests$ = dart.privateName(ace_marquee_transition, "ACEMarqueeTransition.transformHitTests");
  const child$ = dart.privateName(ace_marquee_transition, "ACEMarqueeTransition.child");
  const direction$ = dart.privateName(ace_marquee_transition, "ACEMarqueeTransition.direction");
  ace_marquee_transition.ACEMarqueeTransition = class ACEMarqueeTransition extends transitions.AnimatedWidget {
    get transformHitTests() {
      return this[transformHitTests$];
    }
    set transformHitTests(value) {
      super.transformHitTests = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get direction() {
      return this[direction$];
    }
    set direction(value) {
      super.direction = value;
    }
    get position() {
      return AnimationOfdouble()._check(this.listenable);
    }
    build(context) {
      let offset = this[_tween].evaluate(this.position);
      if (dart.equals(this.position.status, animation.AnimationStatus.reverse)) {
        switch (this.direction) {
          case C1 || CT.C1:
          {
            offset = new ui.Offset.new(offset.dx, -dart.notNull(offset.dy));
            break;
          }
          case C2 || CT.C2:
          {
            offset = new ui.Offset.new(-dart.notNull(offset.dx), offset.dy);
            break;
          }
          case C0 || CT.C0:
          {
            offset = new ui.Offset.new(offset.dx, -dart.notNull(offset.dy));
            break;
          }
          case C3 || CT.C3:
          {
            offset = new ui.Offset.new(-dart.notNull(offset.dx), offset.dy);
            break;
          }
        }
      }
      return new basic.FractionalTranslation.new({translation: offset, transformHitTests: this.transformHitTests, child: this.child, $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
    }
  };
  (ace_marquee_transition.ACEMarqueeTransition.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let position = opts && 'position' in opts ? opts.position : null;
    let transformHitTests = opts && 'transformHitTests' in opts ? opts.transformHitTests : true;
    let direction = opts && 'direction' in opts ? opts.direction : C0 || CT.C0;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_tween] = null;
    this[transformHitTests$] = transformHitTests;
    this[direction$] = direction;
    this[child$] = child;
    if (!(position != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/widget/marquee/ace_marquee_transition.dart", 17, 16, "position != null");
    ace_marquee_transition.ACEMarqueeTransition.__proto__.new.call(this, {key: key, listenable: position, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    switch (this.direction) {
      case C1 || CT.C1:
      {
        this[_tween] = new (TweenOfOffset()).new({begin: new ui.Offset.new(0.0, 1.0), end: new ui.Offset.new(0.0, 0.0)});
        break;
      }
      case C2 || CT.C2:
      {
        this[_tween] = new (TweenOfOffset()).new({begin: new ui.Offset.new(-1.0, 0.0), end: new ui.Offset.new(0.0, 0.0)});
        break;
      }
      case C0 || CT.C0:
      {
        this[_tween] = new (TweenOfOffset()).new({begin: new ui.Offset.new(0.0, -1.0), end: new ui.Offset.new(0.0, 0.0)});
        break;
      }
      case C3 || CT.C3:
      {
        this[_tween] = new (TweenOfOffset()).new({begin: new ui.Offset.new(1.0, 0.0), end: new ui.Offset.new(0.0, 0.0)});
        break;
      }
    }
  }).prototype = ace_marquee_transition.ACEMarqueeTransition.prototype;
  dart.addTypeTests(ace_marquee_transition.ACEMarqueeTransition);
  dart.setMethodSignature(ace_marquee_transition.ACEMarqueeTransition, () => ({
    __proto__: dart.getMethods(ace_marquee_transition.ACEMarqueeTransition.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(ace_marquee_transition.ACEMarqueeTransition, () => ({
    __proto__: dart.getGetters(ace_marquee_transition.ACEMarqueeTransition.__proto__),
    position: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(ace_marquee_transition.ACEMarqueeTransition, "package:hkbook/widget/marquee/ace_marquee_transition.dart");
  dart.setFieldSignature(ace_marquee_transition.ACEMarqueeTransition, () => ({
    __proto__: dart.getFields(ace_marquee_transition.ACEMarqueeTransition.__proto__),
    transformHitTests: dart.finalFieldType(core.bool),
    child: dart.finalFieldType(framework.Widget),
    direction: dart.finalFieldType(basic_types.AxisDirection),
    [_tween]: dart.fieldType(tween.Tween$(ui.Offset))
  }));
  dart.trackLibraries("packages/hkbook/widget/marquee/ace_marquee_transition", {
    "package:hkbook/widget/marquee/ace_marquee_transition.dart": ace_marquee_transition
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ace_marquee_transition.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGa;;;;;;IACE;;;;;;IAGO;;;;;;;AA4Bc;IAAU;UAGlB;AACjB,mBAAS,AAAO,sBAAS;AAChC,UAAoB,YAAhB,AAAS,sBAA0B;AACrC,gBAAQ;;;AAEkC,YAAtC,SAAS,kBAAO,AAAO,MAAD,KAAK,cAAC,AAAO,MAAD;AAClC;;;;AAEsC,YAAtC,SAAS,kBAAO,cAAC,AAAO,MAAD,MAAK,AAAO,MAAD;AAClC;;;;AAEsC,YAAtC,SAAS,kBAAO,AAAO,MAAD,KAAK,cAAC,AAAO,MAAD;AAClC;;;;AAEsC,YAAtC,SAAS,kBAAO,cAAC,AAAO,MAAD,MAAK,AAAO,MAAD;AAClC;;;;AAGN,YAAO,mDACU,MAAM,qBACA,+BACZ;IACb;;;QAjDM;QACwB;QACvB;QACA;QACA;;IAPO;IAKP;IACA;IACA;UACM,AAAS,QAAD,IAAI;AACnB,+EAAW,GAAG,cAAc,QAAQ;AAExC,YAAQ;;;AAEkD,QAAtD,eAAS,kCAAa,kBAAO,KAAG,WAAS,kBAAO,KAAG;AACnD;;;;AAEuD,QAAvD,eAAS,kCAAa,kBAAO,MAAI,WAAS,kBAAO,KAAG;AACpD;;;;AAEuD,QAAvD,eAAS,kCAAa,kBAAO,KAAG,YAAU,kBAAO,KAAG;AACpD;;;;AAEsD,QAAtD,eAAS,kCAAa,kBAAO,KAAG,WAAS,kBAAO,KAAG;AACnD;;;EAEN","file":"ace_marquee_transition.ddc.js"}');
  // Exports:
  return {
    widget__marquee__ace_marquee_transition: ace_marquee_transition
  };
});

//# sourceMappingURL=ace_marquee_transition.ddc.js.map
