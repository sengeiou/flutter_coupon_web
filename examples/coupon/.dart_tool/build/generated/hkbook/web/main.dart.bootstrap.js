/* ENTRYPOINT_EXTENTION_MARKER */
(function() {
var _currentDirectory = (function () {
  var _url;
  var lines = new Error().stack.split('\n');
  function lookupUrl() {
    if (lines.length > 2) {
      var match = lines[1].match(/^\s+at (.+):\d+:\d+$/);
      // Chrome.
      if (match) return match[1];
      // Chrome nested eval case.
      match = lines[1].match(/^\s+at eval [(](.+):\d+:\d+[)]$/);
      if (match) return match[1];
      // Edge.
      match = lines[1].match(/^\s+at.+\((.+):\d+:\d+\)$/);
      if (match) return match[1];
      // Firefox.
      match = lines[0].match(/[<][@](.+):\d+:\d+$/)
      if (match) return match[1];
    }
    // Safari.
    return lines[0].match(/(.+):\d+:\d+$/)[1];
  }
  _url = lookupUrl();
  var lastSlash = _url.lastIndexOf('/');
  if (lastSlash == -1) return _url;
  var currentDirectory = _url.substring(0, lastSlash + 1);
  return currentDirectory;
})();

var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());

let modulePaths = {
 "dart_sdk": "packages/build_web_compilers/src/dev_compiler/dart_sdk",
 "packages/charcode/ascii": "packages/charcode/ascii.ddc",
 "packages/charcode/charcode": "packages/charcode/charcode.ddc",
 "packages/charcode/html_entity": "packages/charcode/html_entity.ddc",
 "packages/collection/collection": "packages/collection/collection.ddc",
 "packages/collection/src/algorithms": "packages/collection/src/algorithms.ddc",
 "packages/collection/src/canonicalized_map": "packages/collection/src/canonicalized_map.ddc",
 "packages/collection/src/comparators": "packages/collection/src/comparators.ddc",
 "packages/collection/src/iterable_zip": "packages/collection/src/iterable_zip.ddc",
 "packages/collection/src/priority_queue": "packages/collection/src/priority_queue.ddc",
 "packages/collection/src/utils": "packages/collection/src/utils.ddc",
 "packages/convert/convert": "packages/convert/convert.ddc",
 "packages/crypto/crypto": "packages/crypto/crypto.ddc",
 "packages/flutter_web/animation": "packages/flutter_web/animation.ddc",
 "packages/flutter_web/cupertino": "packages/flutter_web/cupertino.ddc",
 "packages/flutter_web/foundation": "packages/flutter_web/foundation.ddc",
 "packages/flutter_web/io": "packages/flutter_web/io.ddc",
 "packages/flutter_web/material": "packages/flutter_web/material.ddc",
 "packages/flutter_web/physics": "packages/flutter_web/physics.ddc",
 "packages/flutter_web/src/animation/animation": "packages/flutter_web/src/animation/animation.ddc",
 "packages/flutter_web/src/cupertino/action_sheet": "packages/flutter_web/src/cupertino/action_sheet.ddc",
 "packages/flutter_web/src/foundation/assertions": "packages/flutter_web/src/foundation/assertions.ddc",
 "packages/flutter_web/src/physics/clamped_simulation": "packages/flutter_web/src/physics/clamped_simulation.ddc",
 "packages/flutter_web_ui/ui": "packages/flutter_web_ui/ui.ddc",
 "packages/hkbook/ThridLib/carousel_slider-1.4.1/lib/carousel_slider": "packages/hkbook/ThridLib/carousel_slider-1.4.1/lib/carousel_slider.ddc",
 "packages/hkbook/ThridLib/connectivity-0.4.6+2/lib/connectivity": "packages/hkbook/ThridLib/connectivity-0.4.6+2/lib/connectivity.ddc",
 "packages/hkbook/ThridLib/dio-3.0.8/lib/dio": "packages/hkbook/ThridLib/dio-3.0.8/lib/dio.ddc",
 "packages/hkbook/ThridLib/dio-3.0.8/lib/src/adapter": "packages/hkbook/ThridLib/dio-3.0.8/lib/src/adapter.ddc",
 "packages/hkbook/ThridLib/dio-3.0.8/lib/src/adapters/browser_adapter": "packages/hkbook/ThridLib/dio-3.0.8/lib/src/adapters/browser_adapter.ddc",
 "packages/hkbook/ThridLib/dio-3.0.8/lib/src/dio": "packages/hkbook/ThridLib/dio-3.0.8/lib/src/dio.ddc",
 "packages/hkbook/ThridLib/dio-3.0.8/lib/src/form_data": "packages/hkbook/ThridLib/dio-3.0.8/lib/src/form_data.ddc",
 "packages/hkbook/ThridLib/dio-3.0.8/lib/src/headers": "packages/hkbook/ThridLib/dio-3.0.8/lib/src/headers.ddc",
 "packages/hkbook/ThridLib/dio-3.0.8/lib/src/interceptor": "packages/hkbook/ThridLib/dio-3.0.8/lib/src/interceptor.ddc",
 "packages/hkbook/ThridLib/dio-3.0.8/lib/src/interceptors/log": "packages/hkbook/ThridLib/dio-3.0.8/lib/src/interceptors/log.ddc",
 "packages/hkbook/ThridLib/dio-3.0.8/lib/src/multipart_file": "packages/hkbook/ThridLib/dio-3.0.8/lib/src/multipart_file.ddc",
 "packages/hkbook/ThridLib/dio-3.0.8/lib/src/redirect_record": "packages/hkbook/ThridLib/dio-3.0.8/lib/src/redirect_record.ddc",
 "packages/hkbook/ThridLib/dio-3.0.8/lib/src/utils": "packages/hkbook/ThridLib/dio-3.0.8/lib/src/utils.ddc",
 "packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/easy_refresh": "packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/easy_refresh.ddc",
 "packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator": "packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/footer/load_indicator.ddc",
 "packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator": "packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/header/refresh_indicator.ddc",
 "packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/i18n/global_easy_refresh_localizations": "packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/i18n/global_easy_refresh_localizations.ddc",
 "packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/listener/scroll_notification_interceptor": "packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/listener/scroll_notification_interceptor.ddc",
 "packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/listener/scroll_notification_listener": "packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/listener/scroll_notification_listener.ddc",
 "packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/physics/scroll_physics": "packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/physics/scroll_physics.ddc",
 "packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/widget/empty_widget": "packages/hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/src/widget/empty_widget.ddc",
 "packages/hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil": "packages/hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/flutter_spinkit": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/flutter_spinkit.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/chasing_dots.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/circle": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/circle.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/cube_grid": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/cube_grid.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/double_bounce": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/double_bounce.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/dual_ring": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/dual_ring.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_circle.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_cube": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_cube.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_four.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/fading_grid.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/folding_cube": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/folding_cube.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/hour_glass": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/hour_glass.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pouring_hour_glass": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pouring_hour_glass.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pulse": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pulse.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pumping_heart": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/pumping_heart.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ring": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ring.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ripple": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/ripple.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/rotating_circle": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/rotating_circle.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/rotating_plain": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/rotating_plain.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/spinning_circle": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/spinning_circle.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/square_circle": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/square_circle.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/three_bounce": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/three_bounce.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/tweens/delay_tween": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/tweens/delay_tween.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wandering_cubes.ddc",
 "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave": "packages/hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/src/wave.ddc",
 "packages/hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/flutter_webview_plugin": "packages/hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/flutter_webview_plugin.ddc",
 "packages/hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/javascript_message": "packages/hkbook/ThridLib/flutter_webview_plugin-0.3.10+1/lib/src/javascript_message.ddc",
 "packages/hkbook/ThridLib/http-0.12.0+4/lib/http": "packages/hkbook/ThridLib/http-0.12.0+4/lib/http.ddc",
 "packages/hkbook/ThridLib/http-0.12.0+4/lib/src/base_client": "packages/hkbook/ThridLib/http-0.12.0+4/lib/src/base_client.ddc",
 "packages/hkbook/ThridLib/http-0.12.0+4/lib/src/boundary_characters": "packages/hkbook/ThridLib/http-0.12.0+4/lib/src/boundary_characters.ddc",
 "packages/hkbook/ThridLib/http-0.12.0+4/lib/src/byte_stream": "packages/hkbook/ThridLib/http-0.12.0+4/lib/src/byte_stream.ddc",
 "packages/hkbook/ThridLib/http-0.12.0+4/lib/src/exception": "packages/hkbook/ThridLib/http-0.12.0+4/lib/src/exception.ddc",
 "packages/hkbook/ThridLib/http-0.12.0+4/lib/src/multipart_file": "packages/hkbook/ThridLib/http-0.12.0+4/lib/src/multipart_file.ddc",
 "packages/hkbook/ThridLib/http-0.12.0+4/lib/src/multipart_request": "packages/hkbook/ThridLib/http-0.12.0+4/lib/src/multipart_request.ddc",
 "packages/hkbook/ThridLib/http-0.12.0+4/lib/src/streamed_request": "packages/hkbook/ThridLib/http-0.12.0+4/lib/src/streamed_request.ddc",
 "packages/hkbook/ThridLib/http-0.12.0+4/lib/src/utils": "packages/hkbook/ThridLib/http-0.12.0+4/lib/src/utils.ddc",
 "packages/hkbook/ThridLib/plugin_platform_interface-1.0.2/lib/plugin_platform_interface": "packages/hkbook/ThridLib/plugin_platform_interface-1.0.2/lib/plugin_platform_interface.ddc",
 "packages/hkbook/ThridLib/provide-1.0.2/lib/provide": "packages/hkbook/ThridLib/provide-1.0.2/lib/provide.ddc",
 "packages/hkbook/ThridLib/shared_preferences-0.5.6/lib/shared_preferences": "packages/hkbook/ThridLib/shared_preferences-0.5.6/lib/shared_preferences.ddc",
 "packages/hkbook/ThridLib/shared_preferences_platform_interface-1.0.1/lib/method_channel_shared_preferences": "packages/hkbook/ThridLib/shared_preferences_platform_interface-1.0.1/lib/method_channel_shared_preferences.ddc",
 "packages/hkbook/ThridLib/url_launcher-5.4.2/lib/url_launcher": "packages/hkbook/ThridLib/url_launcher-5.4.2/lib/url_launcher.ddc",
 "packages/hkbook/ThridLib/url_launcher_platform_interface-1.0.6/lib/method_channel_url_launcher": "packages/hkbook/ThridLib/url_launcher_platform_interface-1.0.6/lib/method_channel_url_launcher.ddc",
 "packages/hkbook/app/app_navigator": "packages/hkbook/app/app_navigator.ddc",
 "packages/hkbook/app/constant": "packages/hkbook/app/constant.ddc",
 "packages/hkbook/app/sq_color": "packages/hkbook/app/sq_color.ddc",
 "packages/hkbook/global": "packages/hkbook/global.ddc",
 "packages/hkbook/main": "packages/hkbook/main.ddc",
 "packages/hkbook/model/category_model": "packages/hkbook/model/category_model.ddc",
 "packages/hkbook/model/counpntbk_model": "packages/hkbook/model/counpntbk_model.ddc",
 "packages/hkbook/model/coupon_model": "packages/hkbook/model/coupon_model.ddc",
 "packages/hkbook/page/category/recomend": "packages/hkbook/page/category/recomend.ddc",
 "packages/hkbook/page/category/search_card": "packages/hkbook/page/category/search_card.ddc",
 "packages/hkbook/page/home/tabbar": "packages/hkbook/page/home/tabbar.ddc",
 "packages/hkbook/provide/category": "packages/hkbook/provide/category.ddc",
 "packages/hkbook/provide/current_index": "packages/hkbook/provide/current_index.ddc",
 "packages/hkbook/provide/search_history": "packages/hkbook/provide/search_history.ddc",
 "packages/hkbook/service/interceptors/errorInterceptors": "packages/hkbook/service/interceptors/errorInterceptors.ddc",
 "packages/hkbook/service/interceptors/headerInterceptors": "packages/hkbook/service/interceptors/headerInterceptors.ddc",
 "packages/hkbook/service/interceptors/responseInterceptors": "packages/hkbook/service/interceptors/responseInterceptors.ddc",
 "packages/hkbook/service/result_data": "packages/hkbook/service/result_data.ddc",
 "packages/hkbook/service/service_url": "packages/hkbook/service/service_url.ddc",
 "packages/hkbook/utility/screen": "packages/hkbook/utility/screen.ddc",
 "packages/hkbook/widget/browser/browser": "packages/hkbook/widget/browser/browser.ddc",
 "packages/hkbook/widget/loading/loading_page": "packages/hkbook/widget/loading/loading_page.ddc",
 "packages/hkbook/widget/marquee/ace_marquee": "packages/hkbook/widget/marquee/ace_marquee.ddc",
 "packages/hkbook/widget/marquee/ace_marquee_transition": "packages/hkbook/widget/marquee/ace_marquee_transition.ddc",
 "packages/hkbook/widget/novel_cover_image": "packages/hkbook/widget/novel_cover_image.ddc",
 "packages/hkbook/widget/toast": "packages/hkbook/widget/toast.ddc",
 "packages/http_parser/http_parser": "packages/http_parser/http_parser.ddc",
 "packages/intl/date_symbols": "packages/intl/date_symbols.ddc",
 "packages/intl/intl": "packages/intl/intl.ddc",
 "packages/intl/number_symbols": "packages/intl/number_symbols.ddc",
 "packages/intl/number_symbols_data": "packages/intl/number_symbols_data.ddc",
 "packages/intl/src/plural_rules": "packages/intl/src/plural_rules.ddc",
 "packages/meta/meta": "packages/meta/meta.ddc",
 "packages/path/path": "packages/path/path.ddc",
 "packages/pedantic/pedantic": "packages/pedantic/pedantic.ddc",
 "packages/source_span/source_span": "packages/source_span/source_span.ddc",
 "packages/string_scanner/src/eager_span_scanner": "packages/string_scanner/src/eager_span_scanner.ddc",
 "packages/term_glyph/src/generated/ascii_glyph_set": "packages/term_glyph/src/generated/ascii_glyph_set.ddc",
 "packages/typed_data/typed_buffers": "packages/typed_data/typed_buffers.ddc",
 "packages/typed_data/typed_data": "packages/typed_data/typed_data.ddc",
 "packages/vector_math/hash": "packages/vector_math/hash.ddc",
 "packages/vector_math/vector_math_64": "packages/vector_math/vector_math_64.ddc",
 "web/main": "main.ddc"
};
if(!window.$dartLoader) {
   window.$dartLoader = {
     appDigests: _currentDirectory + 'main.digests',
     moduleIdToUrl: new Map(),
     urlToModuleId: new Map(),
     rootDirectories: new Array(),
     // Used in package:build_runner/src/server/build_updates_client/hot_reload_client.dart
     moduleParentsGraph: new Map(),
     moduleLoadingErrorCallbacks: new Map(),
     forceLoadModule: function (moduleName, callback, onError) {
       // dartdevc only strips the final extension when adding modules to source
       // maps, so we need to do the same.
       if (moduleName.endsWith('.ddc')) {
         moduleName = moduleName.substring(0, moduleName.length - 4);
       }
       if (typeof onError != 'undefined') {
         var errorCallbacks = $dartLoader.moduleLoadingErrorCallbacks;
         if (!errorCallbacks.has(moduleName)) {
           errorCallbacks.set(moduleName, new Set());
         }
         errorCallbacks.get(moduleName).add(onError);
       }
       requirejs.undef(moduleName);
       requirejs([moduleName], function() {
         if (typeof onError != 'undefined') {
           errorCallbacks.get(moduleName).delete(onError);
         }
         if (typeof callback != 'undefined') {
           callback();
         }
       });
     },
     getModuleLibraries: null, // set up by _initializeTools
   };
}
let customModulePaths = {};
window.$dartLoader.rootDirectories.push(window.location.origin + baseUrl);
for (let moduleName of Object.getOwnPropertyNames(modulePaths)) {
  let modulePath = modulePaths[moduleName];
  if (modulePath != moduleName) {
    customModulePaths[moduleName] = modulePath;
  }
  var src = window.location.origin + '/' + modulePath + '.js';
  if (window.$dartLoader.moduleIdToUrl.has(moduleName)) {
    continue;
  }
  $dartLoader.moduleIdToUrl.set(moduleName, src);
  $dartLoader.urlToModuleId.set(src, moduleName);
}
// Whenever we fail to load a JS module, try to request the corresponding
// `.errors` file, and log it to the console.
(function() {
  var oldOnError = requirejs.onError;
  requirejs.onError = function(e) {
    if (e.requireModules) {
      if (e.message) {
        // If error occurred on loading dependencies, we need to invalidate ancessor too.
        var ancesor = e.message.match(/needed by: (.*)/);
        if (ancesor) {
          e.requireModules.push(ancesor[1]);
        }
      }
      for (const module of e.requireModules) {
        var errorCallbacks = $dartLoader.moduleLoadingErrorCallbacks.get(module);
        if (errorCallbacks) {
          for (const callback of errorCallbacks) callback(e);
          errorCallbacks.clear();
        }
      }
    }
    if (e.originalError && e.originalError.srcElement) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          var message;
          if (this.status == 200) {
            message = this.responseText;
          } else {
            message = "Unknown error loading " + e.originalError.srcElement.src;
          }
          console.error(message);
          var errorEvent = new CustomEvent(
            'dartLoadException', { detail: message });
          window.dispatchEvent(errorEvent);
        }
      };
      xhr.open("GET", e.originalError.srcElement.src + ".errors", true);
      xhr.send();
    }
    // Also handle errors the normal way.
    if (oldOnError) oldOnError(e);
  };
}());

var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());
;

require.config({
    baseUrl: baseUrl,
    waitSeconds: 0,
    paths: customModulePaths
});

const modulesGraph = new Map();
function getRegisteredModuleName(moduleMap) {
  if ($dartLoader.moduleIdToUrl.has(moduleMap.name + '.ddc')) {
    return moduleMap.name + '.ddc';
  }
  return moduleMap.name;
}
requirejs.onResourceLoad = function (context, map, depArray) {
  const name = getRegisteredModuleName(map);
  const depNameArray = depArray.map(getRegisteredModuleName);
  if (modulesGraph.has(name)) {
    // TODO Move this logic to better place
    var previousDeps = modulesGraph.get(name);
    var changed = previousDeps.length != depNameArray.length;
    changed = changed || depNameArray.some(function(depName) {
      return !previousDeps.includes(depName);
    });
    if (changed) {
      console.warn("Dependencies graph change for module '" + name + "' detected. " +
        "Dependencies was [" + previousDeps + "], now [" +  depNameArray.map((depName) => depName) +"]. " +
        "Page can't be hot-reloaded, firing full page reload.");
      window.location.reload();
    }
  } else {
    modulesGraph.set(name, []);
    for (const depName of depNameArray) {
      if (!$dartLoader.moduleParentsGraph.has(depName)) {
        $dartLoader.moduleParentsGraph.set(depName, []);
      }
      $dartLoader.moduleParentsGraph.get(depName).push(name);
      modulesGraph.get(name).push(depName);
    }
  }
};
define("main.dart.bootstrap", ["web/main", "dart_sdk"], function(app, dart_sdk) {
  dart_sdk.dart.setStartAsyncSynchronously(true);
  dart_sdk._isolate_helper.startRootIsolate(() => {}, []);
  var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());

  dart_sdk._debugger.registerDevtoolsFormatter();
  $dartLoader.getModuleLibraries = dart_sdk.dart.getModuleLibraries;
  if (window.$dartStackTraceUtility && !window.$dartStackTraceUtility.ready) {
    window.$dartStackTraceUtility.ready = true;
    let dart = dart_sdk.dart;
    window.$dartStackTraceUtility.setSourceMapProvider(
      function(url) {
        url = url.replace(baseUrl, '/');
        var module = window.$dartLoader.urlToModuleId.get(url);
        if (!module) return null;
        return dart.getSourceMap(module);
      });
  }
  if (typeof document != 'undefined') {
    window.postMessage({ type: "DDC_STATE_CHANGE", state: "start" }, "*");
  }

  /* MAIN_EXTENSION_MARKER */
  (app.web__main || app.main).main();
  var bootstrap = {
      hot$onChildUpdate: function(childName, child) {
        // Special handling for the multi-root scheme uris. We need to strip
        // out the scheme and the top level directory, to match the source path
        // that chrome sees.
        if (childName.startsWith('org-dartlang-app:///')) {
          childName = childName.substring('org-dartlang-app:///'.length);
          var firstSlash = childName.indexOf('/');
          if (firstSlash == -1) return false;
          childName = childName.substring(firstSlash + 1);
        }
        if (childName === "main.dart") {
          // Clear static caches.
          dart_sdk.dart.hotRestart();
          child.main();
          return true;
        }
      }
    }
  dart_sdk.dart.trackLibraries("main.dart.bootstrap", {
    "main.dart.bootstrap": bootstrap
  }, '');
  return {
    bootstrap: bootstrap
  };
});
})();
