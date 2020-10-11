define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/foundation/assertions'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__foundation__assertions) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const transitions = packages__flutter_web__animation.src__widgets__transitions;
  const change_notifier = packages__flutter_web__src__foundation__assertions.src__foundation__change_notifier;
  const provide = Object.create(dart.library);
  const $_set = dartx._set;
  const $entries = dartx.entries;
  const $addAll = dartx.addAll;
  const $keys = dartx.keys;
  const $values = dartx.values;
  const $_get = dartx._get;
  const $putIfAbsent = dartx.putIfAbsent;
  const $add = dartx.add;
  let MapOfType$Provider = () => (MapOfType$Provider = dart.constFn(core.Map$(core.Type, provide.Provider)))();
  let LinkedMapOfProviderScope$MapOfType$Provider = () => (LinkedMapOfProviderScope$MapOfType$Provider = dart.constFn(_js_helper.LinkedMap$(provide.ProviderScope, MapOfType$Provider())))();
  let LinkedMapOfType$Provider = () => (LinkedMapOfType$Provider = dart.constFn(_js_helper.LinkedMap$(core.Type, provide.Provider)))();
  let BuildContextAndWidgetToWidget = () => (BuildContextAndWidgetToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])))();
  let ListOfType = () => (ListOfType = dart.constFn(core.List$(core.Type)))();
  let LinkedMapOfProviderScope$ListOfType = () => (LinkedMapOfProviderScope$ListOfType = dart.constFn(_js_helper.LinkedMap$(provide.ProviderScope, ListOfType())))();
  let JSArrayOfType = () => (JSArrayOfType = dart.constFn(_interceptors.JSArray$(core.Type)))();
  let VoidToListOfType = () => (VoidToListOfType = dart.constFn(dart.fnType(ListOfType(), [])))();
  let MapOfType$dynamic = () => (MapOfType$dynamic = dart.constFn(core.Map$(core.Type, dart.dynamic)))();
  let LinkedMapOfProviderScope$MapOfType$dynamic = () => (LinkedMapOfProviderScope$MapOfType$dynamic = dart.constFn(_js_helper.LinkedMap$(provide.ProviderScope, MapOfType$dynamic())))();
  let JSArrayOfListenable = () => (JSArrayOfListenable = dart.constFn(_interceptors.JSArray$(change_notifier.Listenable)))();
  let LinkedMapOfType$dynamic = () => (LinkedMapOfType$dynamic = dart.constFn(_js_helper.LinkedMap$(core.Type, dart.dynamic)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "providers",
        [_Location_column]: 9,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "parent",
        [_Location_column]: 9,
        [_Location_line]: 55,
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
        [_Location_column]: 12,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/provide-1.0.2/lib/provide.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: provide.ProviderScope.prototype,
        [_name$]: "_default"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listenable",
        [_Location_column]: 9,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 281,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 282,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 279,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/provide-1.0.2/lib/provide.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listenable",
        [_Location_column]: 9,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 288,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 286,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/provide-1.0.2/lib/provide.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listenable",
        [_Location_column]: 7,
        [_Location_line]: 350,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 351,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 352,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 349,
        [_Location_file]: "org-dartlang-app:///packages/hkbook/ThridLib/provide-1.0.2/lib/provide.dart"
      });
    }
  });
  const child$ = dart.privateName(provide, "ProviderNode.child");
  const providers$ = dart.privateName(provide, "ProviderNode.providers");
  const dispose$ = dart.privateName(provide, "ProviderNode.dispose");
  provide.ProviderNode = class ProviderNode extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get providers() {
      return this[providers$];
    }
    set providers(value) {
      super.providers = value;
    }
    get dispose() {
      return this[dispose$];
    }
    set dispose(value) {
      super.dispose = value;
    }
    createState() {
      return new provide._ProviderNodeState.new({child: this.child, providers: this.providers, disposeProviders: this.dispose});
    }
  };
  (provide.ProviderNode.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let dispose = opts && 'dispose' in opts ? opts.dispose : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[providers$] = providers;
    this[dispose$] = dispose;
    provide.ProviderNode.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = provide.ProviderNode.prototype;
  dart.addTypeTests(provide.ProviderNode);
  dart.setMethodSignature(provide.ProviderNode, () => ({
    __proto__: dart.getMethods(provide.ProviderNode.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(provide.ProviderNode, "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart");
  dart.setFieldSignature(provide.ProviderNode, () => ({
    __proto__: dart.getFields(provide.ProviderNode.__proto__),
    child: dart.finalFieldType(framework.Widget),
    providers: dart.finalFieldType(provide.Providers),
    dispose: dart.finalFieldType(core.bool)
  }));
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
  const dispose = Symbol("dispose");
  provide._ProviderNodeState = class _ProviderNodeState extends framework.State$(provide.ProviderNode) {
    build(context) {
      return new provide._InheritedProviders.new({child: this.child, providers: this.providers, parent: provide._InheritedProviders.of(context), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    dispose() {
      return async.async(dart.void, (function* dispose$() {
        this[dispose]();
        if (dart.test(this.disposeProviders)) {
          yield this.providers.dispose();
        }
      }).bind(this));
    }
    [dispose]() {
      return super.dispose();
    }
  };
  (provide._ProviderNodeState.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let disposeProviders = opts && 'disposeProviders' in opts ? opts.disposeProviders : null;
    this.child = child;
    this.providers = providers;
    this.disposeProviders = disposeProviders;
    provide._ProviderNodeState.__proto__.new.call(this);
    ;
  }).prototype = provide._ProviderNodeState.prototype;
  dart.addTypeTests(provide._ProviderNodeState);
  dart.setMethodSignature(provide._ProviderNodeState, () => ({
    __proto__: dart.getMethods(provide._ProviderNodeState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    dispose: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setLibraryUri(provide._ProviderNodeState, "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart");
  dart.setFieldSignature(provide._ProviderNodeState, () => ({
    __proto__: dart.getFields(provide._ProviderNodeState.__proto__),
    child: dart.finalFieldType(framework.Widget),
    providers: dart.finalFieldType(provide.Providers),
    disposeProviders: dart.finalFieldType(core.bool)
  }));
  const _name = dart.privateName(provide, "_name");
  const _name$ = dart.privateName(provide, "ProviderScope._name");
  provide.ProviderScope = class ProviderScope extends core.Object {
    get [_name]() {
      return this[_name$];
    }
    set [_name](value) {
      super[_name] = value;
    }
    toString() {
      return "Scope ('" + dart.str(this[_name]) + "')";
    }
  };
  (provide.ProviderScope.new = function(_name) {
    this[_name$] = _name;
    ;
  }).prototype = provide.ProviderScope.prototype;
  dart.addTypeTests(provide.ProviderScope);
  dart.setLibraryUri(provide.ProviderScope, "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart");
  dart.setFieldSignature(provide.ProviderScope, () => ({
    __proto__: dart.getFields(provide.ProviderScope.__proto__),
    [_name]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(provide.ProviderScope, ['toString']);
  const _providers = dart.privateName(provide, "_providers");
  const _providersForScope = dart.privateName(provide, "_providersForScope");
  let C5;
  provide.Providers = class Providers extends core.Object {
    static withProviders(providers, opts) {
      let t0;
      let scope = opts && 'scope' in opts ? opts.scope : null;
      t0 = new provide.Providers.new();
      t0.provideAll(providers, {scope: scope});
      return t0;
    }
    provide(T, provider, opts) {
      let scope = opts && 'scope' in opts ? opts.scope : null;
      if (!dart.equals(provider.type, dart.wrapType(T))) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/provide-1.0.2/lib/provide.dart", 112, 12, "provider.type == T");
      this[_providersForScope](scope)[$_set](dart.wrapType(T), provider);
    }
    provideAll(providers, opts) {
      let scope = opts && 'scope' in opts ? opts.scope : null;
      for (let entry of providers[$entries]) {
        if (!dart.equals(entry.key, entry.value.type)) {
          if (dart.equals(entry.value.type, dart.wrapType(dart.dynamic))) {
            dart.throw(new core.ArgumentError.new("Not able to infer the type of provider for" + " " + dart.str(entry.key) + " automatically. Add type argument to provider."));
          }
          dart.throw(new core.ArgumentError.new("Type mismatch between " + dart.str(entry.key) + " and provider " + "of " + dart.str(entry.value.type) + "."));
        }
      }
      this[_providersForScope](scope)[$addAll](providers);
    }
    provideFrom(other) {
      for (let scope of other[_providers][$keys]) {
        this.provideAll(other[_providersForScope](scope), {scope: scope});
      }
    }
    provideValue(T, value, opts) {
      let scope = opts && 'scope' in opts ? opts.scope : null;
      this.provide(T, provide.Provider$(T).value(value), {scope: scope});
    }
    dispose() {
      return async.async(dart.void, (function* dispose() {
        for (let scopeMap of this[_providers][$values]) {
          for (let provider of scopeMap[$values]) {
            yield provider.dispose();
          }
        }
      }).bind(this));
    }
    getFromType(type, opts) {
      let scope = opts && 'scope' in opts ? opts.scope : null;
      return this[_providersForScope](scope)[$_get](type);
    }
    [_providersForScope](scope) {
      let t0, t3, t2, t1, t0$;
      t0$ = this[_providers];
      t1 = (t0 = scope, t0 == null ? provide.Providers.defaultScope : t0);
      t2 = t0$[$_get](t1);
      return t2 == null ? (t3 = new (LinkedMapOfType$Provider()).new(), t0$[$_set](provide.ProviderScope._check(t1), t3), t3) : t2;
    }
  };
  (provide.Providers.new = function() {
    this[_providers] = new (LinkedMapOfProviderScope$MapOfType$Provider()).new();
    ;
  }).prototype = provide.Providers.prototype;
  dart.addTypeTests(provide.Providers);
  dart.setMethodSignature(provide.Providers, () => ({
    __proto__: dart.getMethods(provide.Providers.__proto__),
    provide: dart.gFnType(T => [dart.void, [provide.Provider$(T)], {scope: provide.ProviderScope}, {}]),
    provideAll: dart.fnType(dart.void, [core.Map$(core.Type, provide.Provider)], {scope: provide.ProviderScope}, {}),
    provideFrom: dart.fnType(dart.void, [provide.Providers]),
    provideValue: dart.gFnType(T => [dart.void, [T], {scope: provide.ProviderScope}, {}]),
    dispose: dart.fnType(async.Future$(dart.void), []),
    getFromType: dart.fnType(provide.Provider, [core.Type], {scope: provide.ProviderScope}, {}),
    [_providersForScope]: dart.fnType(core.Map$(core.Type, provide.Provider), [dart.dynamic])
  }));
  dart.setLibraryUri(provide.Providers, "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart");
  dart.setFieldSignature(provide.Providers, () => ({
    __proto__: dart.getFields(provide.Providers.__proto__),
    [_providers]: dart.finalFieldType(core.Map$(provide.ProviderScope, core.Map$(core.Type, provide.Provider)))
  }));
  dart.defineLazy(provide.Providers, {
    /*provide.Providers.defaultScope*/get defaultScope() {
      return C5 || CT.C5;
    }
  });
  const _is_Provider_default = Symbol('_is_Provider_default');
  provide.Provider$ = dart.generic(T => {
    class Provider extends core.Object {
      static value(value) {
        return new (provide._ValueProvider$(T)).new(value);
      }
      static function($function) {
        return new (provide._LazyProvider$(T)).new($function);
      }
      static withFactory($function) {
        return new (provide._FactoryProvider$(T)).new($function);
      }
      static stream(stream, opts) {
        let initialValue = opts && 'initialValue' in opts ? opts.initialValue : null;
        return new (provide._StreamProvider$(T)).new(stream, {initialValue: initialValue});
      }
    }
    (Provider[dart.mixinNew] = function() {
    }).prototype = Provider.prototype;
    dart.addTypeTests(Provider);
    Provider.prototype[_is_Provider_default] = true;
    dart.setLibraryUri(Provider, "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart");
    return Provider;
  });
  provide.Provider = provide.Provider$();
  dart.addTypeTests(provide.Provider, _is_Provider_default);
  const _is_TypedProvider_default = Symbol('_is_TypedProvider_default');
  provide.TypedProvider$ = dart.generic(T => {
    class TypedProvider extends core.Object {
      get type() {
        return dart.wrapType(T);
      }
    }
    (TypedProvider.new = function() {
      ;
    }).prototype = TypedProvider.prototype;
    dart.addTypeTests(TypedProvider);
    TypedProvider.prototype[_is_TypedProvider_default] = true;
    TypedProvider[dart.implements] = () => [provide.Provider$(T)];
    dart.setGetterSignature(TypedProvider, () => ({
      __proto__: dart.getGetters(TypedProvider.__proto__),
      type: core.Type
    }));
    dart.setLibraryUri(TypedProvider, "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart");
    return TypedProvider;
  });
  provide.TypedProvider = provide.TypedProvider$();
  dart.addTypeTests(provide.TypedProvider, _is_TypedProvider_default);
  let C8;
  let C9;
  let C10;
  let C7;
  let C6;
  let C13;
  let C14;
  let C15;
  let C12;
  let C11;
  const _is_Provide_default = Symbol('_is_Provide_default');
  const builder$ = dart.privateName(provide, "Provide.builder");
  const child$0 = dart.privateName(provide, "Provide.child");
  const scope$ = dart.privateName(provide, "Provide.scope");
  provide.Provide$ = dart.generic(T => {
    class Provide extends framework.StatelessWidget {
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      get child() {
        return this[child$0];
      }
      set child(value) {
        super.child = value;
      }
      get scope() {
        return this[scope$];
      }
      set scope(value) {
        super.scope = value;
      }
      static value(T, context, opts) {
        let scope = opts && 'scope' in opts ? opts.scope : null;
        let provider = provide._InheritedProviders.of(context).getValue(T, {scope: scope});
        if (!(provider != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/provide-1.0.2/lib/provide.dart", 258, 12, "provider != null");
        return provider.get(context);
      }
      static stream(T, context, opts) {
        let scope = opts && 'scope' in opts ? opts.scope : null;
        let provider = provide._InheritedProviders.of(context).getValue(T, {scope: scope});
        if (!(provider != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/provide-1.0.2/lib/provide.dart", 267, 12, "provider != null");
        return provider.stream(context);
      }
      build(context) {
        let provider = provide._InheritedProviders.of(context).getValue(T, {scope: this.scope});
        let value = provider.get(context);
        let listenable = provide._getListenable(provider, value);
        if (change_notifier.Listenable.is(provider)) {
          return new provide.ListeningBuilder.new({listenable: listenable, child: this.child, builder: dart.fn((buildContext, child) => this.builder(buildContext, child, provider.get(context)), BuildContextAndWidgetToWidget()), $creationLocationd_0dea112b090073317d4: C6 || CT.C6});
        } else if (change_notifier.Listenable.is(value)) {
          return new provide.ListeningBuilder.new({listenable: listenable, child: this.child, builder: dart.fn((buildContext, child) => this.builder(buildContext, child, value), BuildContextAndWidgetToWidget()), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
        }
        dart.throw(new core.ArgumentError.new("Either the type or the provider of it must" + " implement listenable. To get a non-listenable value, use the static" + " Provide.value<T>."));
      }
    }
    (Provide.new = function(opts) {
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let scope = opts && 'scope' in opts ? opts.scope : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$0] = child;
      this[scope$] = scope;
      Provide.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Provide.prototype;
    dart.addTypeTests(Provide);
    Provide.prototype[_is_Provide_default] = true;
    dart.setMethodSignature(Provide, () => ({
      __proto__: dart.getMethods(Provide.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(Provide, "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart");
    dart.setFieldSignature(Provide, () => ({
      __proto__: dart.getFields(Provide.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, T])),
      child: dart.finalFieldType(framework.Widget),
      scope: dart.finalFieldType(provide.ProviderScope)
    }));
    return Provide;
  });
  provide.Provide = provide.Provide$();
  dart.addTypeTests(provide.Provide, _is_Provide_default);
  const _update = dart.privateName(provide, "_update");
  let C18;
  let C19;
  let C20;
  let C17;
  let C16;
  const requestedScopedValues$ = dart.privateName(provide, "ProvideMulti.requestedScopedValues");
  const builder$0 = dart.privateName(provide, "ProvideMulti.builder");
  const child$1 = dart.privateName(provide, "ProvideMulti.child");
  provide.ProvideMulti = class ProvideMulti extends framework.StatelessWidget {
    get requestedScopedValues() {
      return this[requestedScopedValues$];
    }
    set requestedScopedValues(value) {
      super.requestedScopedValues = value;
    }
    get builder() {
      return this[builder$0];
    }
    set builder(value) {
      super.builder = value;
    }
    get child() {
      return this[child$1];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      let t3, t2, t1, t0;
      let providers = provide._InheritedProviders.of(context);
      let values = new (LinkedMapOfProviderScope$MapOfType$dynamic()).new();
      let listenables = JSArrayOfListenable().of([]);
      for (let providerScope of this.requestedScopedValues[$keys]) {
        for (let type of this.requestedScopedValues[$_get](providerScope)) {
          let provider = providers.getFromType(type, {scope: providerScope});
          let value = provider.get(context);
          listenables[$add](provide._getListenable(provider, value));
          (t0 = values, t1 = providerScope, t2 = t0[$_get](t1), t2 == null ? (t3 = new (LinkedMapOfType$dynamic()).new(), t0[$_set](t1, t3), t3) : t2)[$_set](type, value);
        }
      }
      return new provide.ListeningBuilder.new({listenable: new provide._MergedListenable.new(listenables), child: this.child, builder: dart.fn((buildContext, child) => this.builder(buildContext, child, this[_update](context, values)), BuildContextAndWidgetToWidget()), $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
    }
    [_update](context, values) {
      let providers = provide._InheritedProviders.of(context);
      for (let providerScope of this.requestedScopedValues[$keys]) {
        for (let type of this.requestedScopedValues[$_get](providerScope)) {
          let provider = providers.getFromType(type, {scope: providerScope});
          if (change_notifier.Listenable.is(provider)) {
            let value = provider.get(context);
            values[$_get](providerScope)[$_set](type, value);
          }
        }
      }
      return new provide.ProvidedValues.__(values);
    }
  };
  (provide.ProvideMulti.new = function(opts) {
    let t1, t0;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let requestedValues = opts && 'requestedValues' in opts ? opts.requestedValues : null;
    let requestedScopedValues = opts && 'requestedScopedValues' in opts ? opts.requestedScopedValues : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[builder$0] = builder;
    this[child$1] = child;
    this[requestedScopedValues$] = (t0 = new (LinkedMapOfProviderScope$ListOfType()).new(), t0[$addAll]((t1 = requestedScopedValues, t1 == null ? new (LinkedMapOfProviderScope$ListOfType()).new() : t1)), t0[$putIfAbsent](provide.Providers.defaultScope, dart.fn(() => {
      let t1;
      t1 = requestedValues;
      return t1 == null ? JSArrayOfType().of([]) : t1;
    }, VoidToListOfType())), t0);
    provide.ProvideMulti.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = provide.ProvideMulti.prototype;
  dart.addTypeTests(provide.ProvideMulti);
  dart.setMethodSignature(provide.ProvideMulti, () => ({
    __proto__: dart.getMethods(provide.ProvideMulti.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_update]: dart.fnType(provide.ProvidedValues, [framework.BuildContext, core.Map$(provide.ProviderScope, core.Map$(core.Type, dart.dynamic))])
  }));
  dart.setLibraryUri(provide.ProvideMulti, "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart");
  dart.setFieldSignature(provide.ProvideMulti, () => ({
    __proto__: dart.getFields(provide.ProvideMulti.__proto__),
    requestedScopedValues: dart.finalFieldType(core.Map$(provide.ProviderScope, core.List$(core.Type))),
    builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, provide.ProvidedValues])),
    child: dart.finalFieldType(framework.Widget)
  }));
  const _values$ = dart.privateName(provide, "_values");
  provide.ProvidedValues = class ProvidedValues extends core.Object {
    get(T, opts) {
      let t0;
      let scope = opts && 'scope' in opts ? opts.scope : null;
      return T._check(this[_values$][$_get]((t0 = scope, t0 == null ? provide.Providers.defaultScope : t0))[$_get](dart.wrapType(T)));
    }
  };
  (provide.ProvidedValues.__ = function(_values) {
    this[_values$] = _values;
    ;
  }).prototype = provide.ProvidedValues.prototype;
  dart.addTypeTests(provide.ProvidedValues);
  dart.setMethodSignature(provide.ProvidedValues, () => ({
    __proto__: dart.getMethods(provide.ProvidedValues.__proto__),
    get: dart.gFnType(T => [T, [], {scope: provide.ProviderScope}, {}])
  }));
  dart.setLibraryUri(provide.ProvidedValues, "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart");
  dart.setFieldSignature(provide.ProvidedValues, () => ({
    __proto__: dart.getFields(provide.ProvidedValues.__proto__),
    [_values$]: dart.finalFieldType(core.Map$(provide.ProviderScope, core.Map$(core.Type, dart.dynamic)))
  }));
  const _streamController = dart.privateName(provide, "_streamController");
  const _value$ = dart.privateName(provide, "_value");
  const _streamListener = dart.privateName(provide, "_streamListener");
  const _is__ValueProvider_default = Symbol('_is__ValueProvider_default');
  provide._ValueProvider$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class _ValueProvider extends provide.TypedProvider$(T) {
      get(context) {
        return this[_value$];
      }
      stream(context) {
        let value = this[_value$];
        if (change_notifier.Listenable.is(value)) {
          this[_streamController] == null ? this[_streamController] = StreamControllerOfT().broadcast() : null;
          value.addListener(dart.bind(this, _streamListener));
        } else {
          dart.throw(new core.UnsupportedError.new("Cannot create stream from a value that is not Listenable"));
        }
        return StreamOfT()._check(this[_streamController].stream);
      }
      dispose() {
        return async.async(dart.void, (function* dispose() {
          let t0;
          let value = this[_value$];
          if (change_notifier.Listenable.is(value)) {
            value.removeListener(dart.bind(this, _streamListener));
          }
          yield (t0 = this[_streamController], t0 == null ? null : t0.close());
        }).bind(this));
      }
      [_streamListener]() {
        let t0;
        t0 = this[_streamController];
        t0 == null ? null : t0.add(this[_value$]);
      }
    }
    (_ValueProvider.new = function(_value) {
      this[_streamController] = null;
      this[_value$] = _value;
      ;
    }).prototype = _ValueProvider.prototype;
    dart.addTypeTests(_ValueProvider);
    _ValueProvider.prototype[_is__ValueProvider_default] = true;
    dart.setMethodSignature(_ValueProvider, () => ({
      __proto__: dart.getMethods(_ValueProvider.__proto__),
      get: dart.fnType(T, [framework.BuildContext]),
      stream: dart.fnType(async.Stream$(T), [framework.BuildContext]),
      dispose: dart.fnType(async.Future$(dart.void), []),
      [_streamListener]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_ValueProvider, "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart");
    dart.setFieldSignature(_ValueProvider, () => ({
      __proto__: dart.getFields(_ValueProvider.__proto__),
      [_value$]: dart.finalFieldType(T),
      [_streamController]: dart.fieldType(async.StreamController)
    }));
    return _ValueProvider;
  });
  provide._ValueProvider = provide._ValueProvider$();
  dart.addTypeTests(provide._ValueProvider, _is__ValueProvider_default);
  const _initalizer$ = dart.privateName(provide, "_initalizer");
  const _is__LazyProvider_default = Symbol('_is__LazyProvider_default');
  provide._LazyProvider$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    const dispose = Symbol("dispose");
    const ChangeNotifier_TypedProvider$36 = class ChangeNotifier_TypedProvider extends change_notifier.ChangeNotifier {};
    (ChangeNotifier_TypedProvider$36.new = function() {
      ChangeNotifier_TypedProvider$36.__proto__.new.call(this);
    }).prototype = ChangeNotifier_TypedProvider$36.prototype;
    dart.applyMixin(ChangeNotifier_TypedProvider$36, provide.TypedProvider$(T));
    class _LazyProvider extends ChangeNotifier_TypedProvider$36 {
      dispose() {
        return async.async(dart.void, (function* dispose$() {
          let t0, t0$;
          let value = this[_value$];
          if (change_notifier.Listenable.is(value)) {
            t0 = value;
            t0.removeListener(dart.bind(this, _streamListener));
            t0.removeListener(dart.bind(this, 'notifyListeners'));
            t0;
          }
          yield (t0$ = this[_streamController], t0$ == null ? null : t0$.close());
          this[_value$] = null;
          this[dispose]();
        }).bind(this));
      }
      get(context) {
        let t0;
        let value = null;
        if (this[_value$] == null) {
          value = (t0 = this[_value$], t0 == null ? this[_value$] = this[_initalizer$](context) : t0);
          if (change_notifier.Listenable.is(value)) {
            value.addListener(dart.bind(this, 'notifyListeners'));
          }
        }
        return this[_value$];
      }
      stream(context) {
        let value = this[_value$];
        if (change_notifier.Listenable.is(value)) {
          this[_streamController] == null ? this[_streamController] = StreamControllerOfT().broadcast() : null;
          value.addListener(dart.bind(this, _streamListener));
        } else {
          dart.throw(new core.UnsupportedError.new("Cannot create stream from a value that is not Listenable"));
        }
        return StreamOfT()._check(this[_streamController].stream);
      }
      [_streamListener]() {
        let t0;
        t0 = this[_streamController];
        t0 == null ? null : t0.add(this[_value$]);
      }
      [dispose]() {
        return super.dispose();
      }
    }
    (_LazyProvider.new = function(_initalizer) {
      this[_value$] = null;
      this[_streamController] = null;
      this[_initalizer$] = _initalizer;
      _LazyProvider.__proto__.new.call(this);
      ;
    }).prototype = _LazyProvider.prototype;
    dart.addTypeTests(_LazyProvider);
    _LazyProvider.prototype[_is__LazyProvider_default] = true;
    dart.setMethodSignature(_LazyProvider, () => ({
      __proto__: dart.getMethods(_LazyProvider.__proto__),
      dispose: dart.fnType(async.Future$(dart.void), []),
      get: dart.fnType(T, [framework.BuildContext]),
      stream: dart.fnType(async.Stream$(T), [framework.BuildContext]),
      [_streamListener]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_LazyProvider, "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart");
    dart.setFieldSignature(_LazyProvider, () => ({
      __proto__: dart.getFields(_LazyProvider.__proto__),
      [_initalizer$]: dart.finalFieldType(dart.fnType(T, [framework.BuildContext])),
      [_value$]: dart.fieldType(T),
      [_streamController]: dart.fieldType(async.StreamController)
    }));
    return _LazyProvider;
  });
  provide._LazyProvider = provide._LazyProvider$();
  dart.addTypeTests(provide._LazyProvider, _is__LazyProvider_default);
  const _is__FactoryProvider_default = Symbol('_is__FactoryProvider_default');
  provide._FactoryProvider$ = dart.generic(T => {
    const Object_TypedProvider$36 = class Object_TypedProvider extends core.Object {};
    (Object_TypedProvider$36.new = function() {
    }).prototype = Object_TypedProvider$36.prototype;
    dart.applyMixin(Object_TypedProvider$36, provide.TypedProvider$(T));
    class _FactoryProvider extends Object_TypedProvider$36 {
      get(context) {
        return this.providerFunction(context);
      }
      stream(context) {
        return dart.throw(new core.UnsupportedError.new("Stream not supported for factory providers"));
      }
      dispose() {
        return async.async(dart.void, function* dispose() {
        });
      }
    }
    (_FactoryProvider.new = function(providerFunction) {
      this.providerFunction = providerFunction;
      ;
    }).prototype = _FactoryProvider.prototype;
    dart.addTypeTests(_FactoryProvider);
    _FactoryProvider.prototype[_is__FactoryProvider_default] = true;
    dart.setMethodSignature(_FactoryProvider, () => ({
      __proto__: dart.getMethods(_FactoryProvider.__proto__),
      get: dart.fnType(T, [framework.BuildContext]),
      stream: dart.fnType(async.Stream$(T), [framework.BuildContext]),
      dispose: dart.fnType(async.Future$(dart.void), [])
    }));
    dart.setLibraryUri(_FactoryProvider, "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart");
    dart.setFieldSignature(_FactoryProvider, () => ({
      __proto__: dart.getFields(_FactoryProvider.__proto__),
      providerFunction: dart.finalFieldType(dart.fnType(T, [framework.BuildContext]))
    }));
    return _FactoryProvider;
  });
  provide._FactoryProvider = provide._FactoryProvider$();
  dart.addTypeTests(provide._FactoryProvider, _is__FactoryProvider_default);
  const _listener = dart.privateName(provide, "_listener");
  const _lastValue = dart.privateName(provide, "_lastValue");
  const _stream = dart.privateName(provide, "_stream");
  const _is__StreamProvider_default = Symbol('_is__StreamProvider_default');
  provide._StreamProvider$ = dart.generic(T => {
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    const dispose = Symbol("dispose");
    const ChangeNotifier_TypedProvider$36 = class ChangeNotifier_TypedProvider extends change_notifier.ChangeNotifier {};
    (ChangeNotifier_TypedProvider$36.new = function() {
      ChangeNotifier_TypedProvider$36.__proto__.new.call(this);
    }).prototype = ChangeNotifier_TypedProvider$36.prototype;
    dart.applyMixin(ChangeNotifier_TypedProvider$36, provide.TypedProvider$(T));
    class _StreamProvider extends ChangeNotifier_TypedProvider$36 {
      stream(context) {
        return this[_stream];
      }
      get(context) {
        return this[_lastValue];
      }
      dispose() {
        return async.async(dart.void, (function* dispose$() {
          yield this[_listener].cancel();
          this[dispose]();
        }).bind(this));
      }
      [dispose]() {
        return super.dispose();
      }
    }
    (_StreamProvider.new = function(stream, opts) {
      let initialValue = opts && 'initialValue' in opts ? opts.initialValue : null;
      this[_listener] = null;
      this[_lastValue] = initialValue;
      this[_stream] = dart.test(stream.isBroadcast) ? stream : stream.asBroadcastStream();
      _StreamProvider.__proto__.new.call(this);
      this[_listener] = this[_stream].listen(dart.fn(data => {
        if (!dart.equals(this[_lastValue], data)) {
          this[_lastValue] = data;
          this.notifyListeners();
        }
      }, TToNull()));
    }).prototype = _StreamProvider.prototype;
    dart.addTypeTests(_StreamProvider);
    _StreamProvider.prototype[_is__StreamProvider_default] = true;
    dart.setMethodSignature(_StreamProvider, () => ({
      __proto__: dart.getMethods(_StreamProvider.__proto__),
      stream: dart.fnType(async.Stream$(T), [framework.BuildContext]),
      get: dart.fnType(T, [framework.BuildContext]),
      dispose: dart.fnType(async.Future$(dart.void), [])
    }));
    dart.setLibraryUri(_StreamProvider, "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart");
    dart.setFieldSignature(_StreamProvider, () => ({
      __proto__: dart.getFields(_StreamProvider.__proto__),
      [_stream]: dart.finalFieldType(async.Stream$(T)),
      [_lastValue]: dart.fieldType(T),
      [_listener]: dart.fieldType(async.StreamSubscription)
    }));
    return _StreamProvider;
  });
  provide._StreamProvider = provide._StreamProvider$();
  dart.addTypeTests(provide._StreamProvider, _is__StreamProvider_default);
  const parent$ = dart.privateName(provide, "_InheritedProviders.parent");
  const providers$0 = dart.privateName(provide, "_InheritedProviders.providers");
  provide._InheritedProviders = class _InheritedProviders extends framework.InheritedWidget {
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    get providers() {
      return this[providers$0];
    }
    set providers(value) {
      super.providers = value;
    }
    static of(context) {
      let widget = context.inheritFromWidgetOfExactType(dart.wrapType(provide._InheritedProviders));
      return provide._InheritedProviders.is(widget) ? widget : null;
    }
    updateShouldNotify(oldWidget) {
      let t0, t0$;
      provide._InheritedProviders._check(oldWidget);
      t0$ = (t0 = this.parent, t0 == null ? null : t0.updateShouldNotify(oldWidget.parent));
      return t0$ == null ? false || !dart.equals(this.providers, oldWidget.providers) : t0$;
    }
    getValue(T, opts) {
      let t1, t0;
      let scope = opts && 'scope' in opts ? opts.scope : null;
      return provide.Provider$(T)._check((t0 = this.providers.getFromType(dart.wrapType(T), {scope: scope}), t0 == null ? (t1 = this.parent, t1 == null ? null : t1.getValue(T, {scope: scope})) : t0));
    }
    getFromType(type, opts) {
      let t1, t0;
      let scope = opts && 'scope' in opts ? opts.scope : null;
      t0 = this.providers.getFromType(type, {scope: scope});
      return t0 == null ? (t1 = this.parent, t1 == null ? null : t1.getFromType(type, {scope: scope})) : t0;
    }
  };
  (provide._InheritedProviders.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[providers$0] = providers;
    this[parent$] = parent;
    provide._InheritedProviders.__proto__.new.call(this, {child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = provide._InheritedProviders.prototype;
  dart.addTypeTests(provide._InheritedProviders);
  dart.setMethodSignature(provide._InheritedProviders, () => ({
    __proto__: dart.getMethods(provide._InheritedProviders.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [core.Object]),
    getValue: dart.gFnType(T => [provide.Provider$(T), [], {scope: provide.ProviderScope}, {}]),
    getFromType: dart.fnType(provide.Provider, [core.Type], {scope: provide.ProviderScope}, {})
  }));
  dart.setLibraryUri(provide._InheritedProviders, "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart");
  dart.setFieldSignature(provide._InheritedProviders, () => ({
    __proto__: dart.getFields(provide._InheritedProviders.__proto__),
    parent: dart.finalFieldType(provide._InheritedProviders),
    providers: dart.finalFieldType(provide.Providers)
  }));
  const builder$1 = dart.privateName(provide, "ListeningBuilder.builder");
  const child$2 = dart.privateName(provide, "ListeningBuilder.child");
  provide.ListeningBuilder = class ListeningBuilder extends transitions.AnimatedWidget {
    get builder() {
      return this[builder$1];
    }
    set builder(value) {
      super.builder = value;
    }
    get child() {
      return this[child$2];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return this.builder(context, this.child);
    }
  };
  (provide.ListeningBuilder.new = function(opts) {
    let listenable = opts && 'listenable' in opts ? opts.listenable : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[builder$1] = builder;
    this[child$2] = child;
    if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/hkbook/ThridLib/provide-1.0.2/lib/provide.dart", 607, 16, "builder != null");
    provide.ListeningBuilder.__proto__.new.call(this, {key: key, listenable: listenable, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = provide.ListeningBuilder.prototype;
  dart.addTypeTests(provide.ListeningBuilder);
  dart.setMethodSignature(provide.ListeningBuilder, () => ({
    __proto__: dart.getMethods(provide.ListeningBuilder.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(provide.ListeningBuilder, "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart");
  dart.setFieldSignature(provide.ListeningBuilder, () => ({
    __proto__: dart.getFields(provide.ListeningBuilder.__proto__),
    builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])),
    child: dart.finalFieldType(framework.Widget)
  }));
  const _children$ = dart.privateName(provide, "_children");
  const _unlisten = dart.privateName(provide, "_unlisten");
  provide._MergedListenable = class _MergedListenable extends change_notifier.ChangeNotifier {
    dispose() {
      if (dart.test(this.hasListeners)) {
        this[_unlisten]();
      }
      super.dispose();
    }
    addListener(listener) {
      let t0;
      if (!dart.test(this.hasListeners)) {
        for (let child of this[_children$]) {
          t0 = child;
          t0 == null ? null : t0.addListener(dart.bind(this, 'notifyListeners'));
        }
      }
      super.addListener(listener);
    }
    removeListener(listener) {
      super.removeListener(listener);
      if (!dart.test(this.hasListeners)) {
        this[_unlisten]();
      }
    }
    [_unlisten]() {
      let t0;
      for (let child of this[_children$]) {
        t0 = child;
        t0 == null ? null : t0.removeListener(dart.bind(this, 'notifyListeners'));
      }
    }
  };
  (provide._MergedListenable.new = function(_children) {
    this[_children$] = _children;
    provide._MergedListenable.__proto__.new.call(this);
    ;
  }).prototype = provide._MergedListenable.prototype;
  dart.addTypeTests(provide._MergedListenable);
  dart.setMethodSignature(provide._MergedListenable, () => ({
    __proto__: dart.getMethods(provide._MergedListenable.__proto__),
    [_unlisten]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(provide._MergedListenable, "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart");
  dart.setFieldSignature(provide._MergedListenable, () => ({
    __proto__: dart.getFields(provide._MergedListenable.__proto__),
    [_children$]: dart.finalFieldType(core.List$(change_notifier.Listenable))
  }));
  provide._getListenable = function _getListenable(provider, value) {
    return change_notifier.Listenable._check(change_notifier.Listenable.is(provider) ? provider : change_notifier.Listenable.is(value) ? value : null);
  };
  dart.trackLibraries("packages/hkbook/ThridLib/provide-1.0.2/lib/provide", {
    "package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart": provide
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["provide.dart"],"names":[],"mappings":"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","file":"provide.ddc.js"}');
  // Exports:
  return {
    ThridLib__provide_1$460$462__lib__provide: provide
  };
});

//# sourceMappingURL=provide.ddc.js.map
