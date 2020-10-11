define(['dart_sdk', 'packages/flutter_web/animation'], function(dart_sdk, packages__flutter_web__animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const scroll_notification = packages__flutter_web__animation.src__widgets__scroll_notification;
  const notification_listener = packages__flutter_web__animation.src__widgets__notification_listener;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const scroll_notification_listener = Object.create(dart.library);
  let NotificationListenerOfScrollNotification = () => (NotificationListenerOfScrollNotification = dart.constFn(notification_listener.NotificationListener$(scroll_notification.ScrollNotification)))();
  let ScrollNotificationTobool = () => (ScrollNotificationTobool = dart.constFn(dart.fnType(core.bool, [scroll_notification.ScrollNotification])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onNotification",
        [_Location_column]: 9,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 61,
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
        [_Location_column]: 7,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/listener/scroll_notification_listener.dart"
      });
    }
  });
  const child$ = dart.privateName(scroll_notification_listener, "ScrollNotificationListener.child");
  const onNotification$ = dart.privateName(scroll_notification_listener, "ScrollNotificationListener.onNotification");
  const onFocus$ = dart.privateName(scroll_notification_listener, "ScrollNotificationListener.onFocus");
  scroll_notification_listener.ScrollNotificationListener = class ScrollNotificationListener extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get onNotification() {
      return this[onNotification$];
    }
    set onNotification(value) {
      super.onNotification = value;
    }
    get onFocus() {
      return this[onFocus$];
    }
    set onFocus(value) {
      super.onFocus = value;
    }
    createState() {
      return new scroll_notification_listener.ScrollNotificationListenerState.new();
    }
  };
  (scroll_notification_listener.ScrollNotificationListener.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let onNotification = opts && 'onNotification' in opts ? opts.onNotification : null;
    let onFocus = opts && 'onFocus' in opts ? opts.onFocus : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[onNotification$] = onNotification;
    this[onFocus$] = onFocus;
    scroll_notification_listener.ScrollNotificationListener.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scroll_notification_listener.ScrollNotificationListener.prototype;
  dart.addTypeTests(scroll_notification_listener.ScrollNotificationListener);
  dart.setMethodSignature(scroll_notification_listener.ScrollNotificationListener, () => ({
    __proto__: dart.getMethods(scroll_notification_listener.ScrollNotificationListener.__proto__),
    createState: dart.fnType(scroll_notification_listener.ScrollNotificationListenerState, [])
  }));
  dart.setLibraryUri(scroll_notification_listener.ScrollNotificationListener, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/listener/scroll_notification_listener.dart");
  dart.setFieldSignature(scroll_notification_listener.ScrollNotificationListener, () => ({
    __proto__: dart.getFields(scroll_notification_listener.ScrollNotificationListener.__proto__),
    child: dart.finalFieldType(framework.Widget),
    onNotification: dart.finalFieldType(dart.fnType(core.bool, [scroll_notification.ScrollNotification])),
    onFocus: dart.finalFieldType(dart.fnType(dart.void, [core.bool]))
  }));
  const _focusState = dart.privateName(scroll_notification_listener, "_focusState");
  const _focus = dart.privateName(scroll_notification_listener, "_focus");
  const _handleScrollNotification = dart.privateName(scroll_notification_listener, "_handleScrollNotification");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  scroll_notification_listener.ScrollNotificationListenerState = class ScrollNotificationListenerState extends framework.State$(scroll_notification_listener.ScrollNotificationListener) {
    set [_focus](focus) {
      this[_focusState] = focus;
      if (this.widget.onFocus != null) this.widget.onFocus(this[_focusState]);
    }
    [_handleScrollNotification](notification) {
      if (scroll_notification.ScrollStartNotification.is(notification)) {
        if (notification.dragDetails != null) {
          this[_focus] = true;
        }
      } else if (scroll_notification.ScrollUpdateNotification.is(notification)) {
        if (dart.test(this[_focusState]) && notification.dragDetails == null) this[_focus] = false;
      } else if (scroll_notification.ScrollEndNotification.is(notification)) {
        if (dart.test(this[_focusState])) this[_focus] = false;
      }
    }
    build(context) {
      return new (NotificationListenerOfScrollNotification()).new({onNotification: dart.fn(notification => {
          this[_handleScrollNotification](notification);
          return this.widget.onNotification == null ? true : this.widget.onNotification(notification);
        }, ScrollNotificationTobool()), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (scroll_notification_listener.ScrollNotificationListenerState.new = function() {
    this[_focusState] = false;
    scroll_notification_listener.ScrollNotificationListenerState.__proto__.new.call(this);
    ;
  }).prototype = scroll_notification_listener.ScrollNotificationListenerState.prototype;
  dart.addTypeTests(scroll_notification_listener.ScrollNotificationListenerState);
  dart.setMethodSignature(scroll_notification_listener.ScrollNotificationListenerState, () => ({
    __proto__: dart.getMethods(scroll_notification_listener.ScrollNotificationListenerState.__proto__),
    [_handleScrollNotification]: dart.fnType(dart.void, [scroll_notification.ScrollNotification]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setSetterSignature(scroll_notification_listener.ScrollNotificationListenerState, () => ({
    __proto__: dart.getSetters(scroll_notification_listener.ScrollNotificationListenerState.__proto__),
    [_focus]: core.bool
  }));
  dart.setLibraryUri(scroll_notification_listener.ScrollNotificationListenerState, "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/listener/scroll_notification_listener.dart");
  dart.setFieldSignature(scroll_notification_listener.ScrollNotificationListenerState, () => ({
    __proto__: dart.getFields(scroll_notification_listener.ScrollNotificationListenerState.__proto__),
    [_focusState]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/listener/scroll_notification_listener", {
    "package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/listener/scroll_notification_listener.dart": scroll_notification_listener
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scroll_notification_listener.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAee;;;;;;IAG0C;;;;;;IAG7B;;;;;;;AAIxB,YAAO;IACT;;;QAjBM;QACW;QACV;QACA;;IAFU;IACV;IACA;AACF,2FAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;iBAoBJ;AACK,MAAnB,oBAAc,KAAK;AACnB,UAAI,AAAO,uBAAW,MAAM,AAAO,AAAoB,oBAAZ;IAC7C;gCAGkD;AAChD,UAAiB,+CAAb,YAAY;AACd,YAAI,AAAa,YAAD,gBAAgB;AACjB,UAAb,eAAS;;YAEN,KAAiB,gDAAb,YAAY;AACrB,sBAAI,sBAAe,AAAa,AAAY,YAAb,gBAAgB,MAAM,AAAc,eAAL;YACzD,KAAiB,6CAAb,YAAY;AACrB,sBAAI,oBAAa,AAAc,eAAL;;IAE9B;UAG0B;AACtB,mFACkB,QAAoB;AACK,UAAvC,gCAA0B,YAAY;AACtC,gBAAO,AAAO,AAAe,+BAAG,OAC1B,OACA,AAAO,2BAAe,YAAY;+CAEnC,AAAO;IACf;;;IA7BA,oBAAc;;;EA8BrB","file":"scroll_notification_listener.ddc.js"}');
  // Exports:
  return {
    ThridLib__flutter_easyrefresh_2$460$468__lib__src__listener__scroll_notification_listener: scroll_notification_listener
  };
});

//# sourceMappingURL=scroll_notification_listener.ddc.js.map
