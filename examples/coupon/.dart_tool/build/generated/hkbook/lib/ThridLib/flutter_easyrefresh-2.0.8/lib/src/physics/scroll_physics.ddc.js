define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation'], function(dart_sdk, packages__flutter_web__src__animation__animation, packages__flutter_web__animation) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scroll_simulation = packages__flutter_web__src__animation__animation.src__widgets__scroll_simulation;
  const scroll_physics = packages__flutter_web__animation.src__widgets__scroll_physics;
  const scroll_physics$ = Object.create(dart.library);
  const $abs = dartx.abs;
  const $sign = dartx.sign;
  const $toDouble = dartx.toDouble;
  const CT = Object.create(null);
  const topBouncing$ = dart.privateName(scroll_physics$, "EasyRefreshPhysics.topBouncing");
  const bottomBouncing$ = dart.privateName(scroll_physics$, "EasyRefreshPhysics.bottomBouncing");
  scroll_physics$.EasyRefreshPhysics = class EasyRefreshPhysics extends scroll_physics.ScrollPhysics {
    get topBouncing() {
      return this[topBouncing$];
    }
    set topBouncing(value) {
      super.topBouncing = value;
    }
    get bottomBouncing() {
      return this[bottomBouncing$];
    }
    set bottomBouncing(value) {
      super.bottomBouncing = value;
    }
    applyTo(ancestor) {
      return new scroll_physics$.EasyRefreshPhysics.new({parent: this.buildParent(ancestor), topBouncing: this.topBouncing, bottomBouncing: this.bottomBouncing});
    }
    frictionFactor(overscrollFraction) {
      return 0.52 * math.pow(1 - dart.notNull(overscrollFraction), 2);
    }
    shouldAcceptUserOffset(position) {
      return true;
    }
    applyPhysicsToUserOffset(position, offset) {
      if (!(offset !== 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/physics/scroll_physics.dart", 61, 12, "offset != 0.0");
      if (!(dart.notNull(position.minScrollExtent) <= dart.notNull(position.maxScrollExtent))) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/physics/scroll_physics.dart", 62, 12, "position.minScrollExtent <= position.maxScrollExtent");
      if (!dart.test(position.outOfRange)) return offset;
      let overscrollPastStart = math.max(core.double, dart.notNull(position.minScrollExtent) - dart.notNull(position.pixels), 0.0);
      let overscrollPastEnd = math.max(core.double, dart.notNull(position.pixels) - dart.notNull(position.maxScrollExtent), 0.0);
      let overscrollPast = math.max(core.double, overscrollPastStart, overscrollPastEnd);
      let easing = overscrollPastStart > 0.0 && dart.notNull(offset) < 0.0 || overscrollPastEnd > 0.0 && dart.notNull(offset) > 0.0;
      let friction = easing ? this.frictionFactor((overscrollPast - offset[$abs]()) / dart.notNull(position.viewportDimension)) : this.frictionFactor(overscrollPast / dart.notNull(position.viewportDimension));
      let direction = offset[$sign];
      return direction * dart.notNull(scroll_physics$.EasyRefreshPhysics._applyFriction(overscrollPast, offset[$abs](), friction));
    }
    static _applyFriction(extentOutside, absDelta, gamma) {
      if (!(dart.notNull(absDelta) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/physics/scroll_physics.dart", 87, 12, "absDelta > 0");
      let total = 0.0;
      if (dart.notNull(extentOutside) > 0) {
        let deltaToLimit = dart.notNull(extentOutside) / dart.notNull(gamma);
        if (dart.notNull(absDelta) < deltaToLimit) return dart.notNull(absDelta) * dart.notNull(gamma);
        total = total + dart.notNull(extentOutside);
        absDelta = dart.notNull(absDelta) - deltaToLimit;
      }
      return total + dart.notNull(absDelta);
    }
    applyBoundaryConditions(position, value) {
      if (!dart.test(this.topBouncing)) {
        if (dart.notNull(value) < dart.notNull(position.pixels) && dart.notNull(position.pixels) <= dart.notNull(position.minScrollExtent)) return dart.notNull(value) - dart.notNull(position.pixels);
        if (dart.notNull(value) < dart.notNull(position.minScrollExtent) && dart.notNull(position.minScrollExtent) < dart.notNull(position.pixels)) return dart.notNull(value) - dart.notNull(position.minScrollExtent);
      }
      if (!dart.test(this.bottomBouncing)) {
        if (dart.notNull(position.maxScrollExtent) <= dart.notNull(position.pixels) && dart.notNull(position.pixels) < dart.notNull(value)) return dart.notNull(value) - dart.notNull(position.pixels);
        if (dart.notNull(position.pixels) < dart.notNull(position.maxScrollExtent) && dart.notNull(position.maxScrollExtent) < dart.notNull(value)) return dart.notNull(value) - dart.notNull(position.maxScrollExtent);
      }
      return 0.0;
    }
    createBallisticSimulation(position, velocity) {
      let tolerance = this.tolerance;
      if (velocity[$abs]() >= dart.notNull(tolerance.velocity) || dart.test(position.outOfRange)) {
        return new scroll_simulation.BouncingScrollSimulation.new({spring: this.spring, position: position.pixels, velocity: dart.notNull(velocity) * 0.91, leadingExtent: position.minScrollExtent, trailingExtent: position.maxScrollExtent, tolerance: tolerance});
      }
      return null;
    }
    get minFlingVelocity() {
      return 50 * 2.0;
    }
    carriedMomentum(existingVelocity) {
      return existingVelocity[$sign] * math.min(core.num, 0.000816 * math.pow(existingVelocity[$abs](), 1.967)[$toDouble](), 40000.0);
    }
    get dragStartDistanceMotionThreshold() {
      return 3.5;
    }
    get runtimeType() {
      if (dart.test(this.topBouncing) && dart.test(this.bottomBouncing))
        return dart.wrapType(scroll_physics$.EasyRefreshPhysics);
      else if (!dart.test(this.topBouncing) && dart.test(this.bottomBouncing))
        return dart.wrapType(scroll_physics.ClampingScrollPhysics);
      else if (dart.test(this.topBouncing) && !dart.test(this.bottomBouncing))
        return dart.wrapType(scroll_physics.AlwaysScrollableScrollPhysics);
      else
        return dart.wrapType(scroll_physics.NeverScrollableScrollPhysics);
    }
  };
  (scroll_physics$.EasyRefreshPhysics.new = function(opts) {
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let topBouncing = opts && 'topBouncing' in opts ? opts.topBouncing : true;
    let bottomBouncing = opts && 'bottomBouncing' in opts ? opts.bottomBouncing : true;
    this[topBouncing$] = topBouncing;
    this[bottomBouncing$] = bottomBouncing;
    scroll_physics$.EasyRefreshPhysics.__proto__.new.call(this, {parent: parent});
    ;
  }).prototype = scroll_physics$.EasyRefreshPhysics.prototype;
  dart.addTypeTests(scroll_physics$.EasyRefreshPhysics);
  dart.setMethodSignature(scroll_physics$.EasyRefreshPhysics, () => ({
    __proto__: dart.getMethods(scroll_physics$.EasyRefreshPhysics.__proto__),
    applyTo: dart.fnType(scroll_physics$.EasyRefreshPhysics, [scroll_physics.ScrollPhysics]),
    frictionFactor: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(scroll_physics$.EasyRefreshPhysics, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/physics/scroll_physics.dart");
  dart.setFieldSignature(scroll_physics$.EasyRefreshPhysics, () => ({
    __proto__: dart.getFields(scroll_physics$.EasyRefreshPhysics.__proto__),
    topBouncing: dart.finalFieldType(core.bool),
    bottomBouncing: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionAccessors(scroll_physics$.EasyRefreshPhysics, ['runtimeType']);
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/physics/scroll_physics", {
    "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/physics/scroll_physics.dart": scroll_physics$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scroll_physics.dart"],"names":[],"mappings":"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","file":"scroll_physics.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_easyrefresh_2$460$468__lib__src__physics__scroll_physics: scroll_physics$
  };
});

//# sourceMappingURL=scroll_physics.ddc.js.map
