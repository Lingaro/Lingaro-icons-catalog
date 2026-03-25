import * as React from 'react';
import { forwardRef } from 'react';

var __assign = window && window.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = window && window.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var SvgHomeWaves20Filled = function SvgHomeWaves20Filled(_a, ref) {
  var title = _a.title,
    titleId = _a.titleId,
    props = __rest(_a, ["title", "titleId"]);
  return /*#__PURE__*/React.createElement("svg", __assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    role: "img",
    focusable: "false",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M9 2a1.5 1.5 0 0 1 1 .382L15.5 7.3a1.5 1.5 0 0 1 .5 1.118v1.734a1.5 1.5 0 0 0-1.414.998l-.017.036q-.018.038-.044.09-.12.231-.283.434c-.362.446-.648.446-.742.446-.163 0-.417-.048-.743-.448a2.6 2.6 0 0 1-.354-.583 1.53 1.53 0 0 0-1.483-.966h-.006a1.49 1.49 0 0 0-1.368 1.13l-.04.105a1.7 1.7 0 0 1-.206.365.91.91 0 0 1-.8.4 1.5 1.5 0 1 0 0 3c.393.005.78-.05 1.152-.16q-.067.139-.106.29l-.04.105a1.7 1.7 0 0 1-.206.365.91.91 0 0 1-.8.4 1.5 1.5 0 0 0-1.414 1H3.5a1.5 1.5 0 0 1-1.5-1.5V8.418A1.5 1.5 0 0 1 2.5 7.3L8 2.382A1.5 1.5 0 0 1 9 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.982 12.344a1.96 1.96 0 0 0 1.518.815 1.96 1.96 0 0 0 1.518-.815 3.7 3.7 0 0 0 .4-.602 4 4 0 0 0 .094-.2l.022-.05v-.011a.5.5 0 0 1 .953.055v.009l.014.047a2.8 2.8 0 0 0 .399.767 1.9 1.9 0 0 0 1.6.8.5.5 0 0 1 0 1 2.9 2.9 0 0 1-2.4-1.202 3 3 0 0 1-.14-.2 4 4 0 0 1-.166.217 2.95 2.95 0 0 1-2.294 1.185 2.95 2.95 0 0 1-2.294-1.185 4 4 0 0 1-.166-.217 3 3 0 0 1-.14.2 2.9 2.9 0 0 1-2.4 1.202.5.5 0 0 1 0-1 1.9 1.9 0 0 0 1.6-.8 2.8 2.8 0 0 0 .399-.767l.014-.047v-.009a.5.5 0 0 1 .953-.055v.011l.022.05q.03.07.094.2.17.32.4.602m.664 4.584a1.96 1.96 0 0 1-.664-.584 3.7 3.7 0 0 1-.4-.602 4 4 0 0 1-.094-.2l-.022-.05v-.011a.5.5 0 0 0-.953.055v.009l-.014.047a2.8 2.8 0 0 1-.399.767 1.9 1.9 0 0 1-1.6.8.5.5 0 0 0 0 1 2.9 2.9 0 0 0 2.4-1.202q.077-.1.14-.2.076.108.166.217a2.95 2.95 0 0 0 2.294 1.185 2.95 2.95 0 0 0 2.294-1.185q.09-.11.166-.217.064.1.14.2a2.9 2.9 0 0 0 2.4 1.202.5.5 0 0 0 0-1 1.9 1.9 0 0 1-1.6-.8 2.8 2.8 0 0 1-.399-.767l-.014-.047v-.009a.5.5 0 0 0-.953-.055v.011l-.022.05a4 4 0 0 1-.094.2 3.7 3.7 0 0 1-.4.602 1.96 1.96 0 0 1-1.518.815 1.95 1.95 0 0 1-.854-.231"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHomeWaves20Filled);

export { ForwardRef as default };
