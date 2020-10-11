define(['dart_sdk', 'packages/flutter_web/animation'], function(dart_sdk, packages__flutter_web__animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const notification_listener = packages__flutter_web__animation.src__widgets__notification_listener;
  const scroll_notification = packages__flutter_web__animation.src__widgets__scroll_notification;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const scroll_notification_interceptor = Object.create(dart.library);
  let NotificationListenerOfScrollNotification = () => (NotificationListenerOfScrollNotification = dart.constFn(notification_listener.NotificationListener$(scroll_notification.ScrollNotification)))();
  let ScrollNotificationTobool = () => (ScrollNotificationTobool = dart.constFn(dart.fnType(core.bool, [scroll_notification.ScrollNotification])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onNotification",
        [_Location_column]: 7,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/listener/scroll_notification_interceptor.dart"
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
  let C1;
  let C0;
  const child$ = dart.privateName(scroll_notification_interceptor, "ScrollNotificationInterceptor.child");
  scroll_notification_interceptor.ScrollNotificationInterceptor = class ScrollNotificationInterceptor extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return new (NotificationListenerOfScrollNotification()).new({onNotification: dart.fn(notification => true, ScrollNotificationTobool()), child: this.child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (scroll_notification_interceptor.ScrollNotificationInterceptor.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    scroll_notification_interceptor.ScrollNotificationInterceptor.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_notification_interceptor.ScrollNotificationInterceptor.prototype;
  dart.addTypeTests(scroll_notification_interceptor.ScrollNotificationInterceptor);
  dart.setMethodSignature(scroll_notification_interceptor.ScrollNotificationInterceptor, () => ({
    __proto__: dart.getMethods(scroll_notification_interceptor.ScrollNotificationInterceptor.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(scroll_notification_interceptor.ScrollNotificationInterceptor, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/listener/scroll_notification_interceptor.dart");
  dart.setFieldSignature(scroll_notification_interceptor.ScrollNotificationInterceptor, () => ({
    __proto__: dart.getFields(scroll_notification_interceptor.ScrollNotificationInterceptor.__proto__),
    child: dart.finalFieldType(framework.Widget)
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/listener/scroll_notification_interceptor", {
    "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/listener/scroll_notification_interceptor.dart": scroll_notification_interceptor
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scroll_notification_interceptor.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIe;;;;;;UASa;AACxB,YAAO,uEACW,QAAoB,gBAC3B,0CAEG;IAEhB;;;QAZM;QACW;;;AACZ,iGAAW,GAAG;;EAAC","file":"scroll_notification_interceptor.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_easyrefresh_2$460$468__lib__src__listener__scroll_notification_interceptor: scroll_notification_interceptor
  };
});

//# sourceMappingURL=scroll_notification_interceptor.ddc.js.map
