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
var SvgAppFolderPulse20Filled = function SvgAppFolderPulse20Filled(_a, ref) {
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
    d: "M14.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m-1.056 2.5a.5.5 0 0 0-.475.303l-.584 1.364H12a.5.5 0 0 0 0 1h.714c.2 0 .381-.12.46-.304l.213-.495.642 1.8a.5.5 0 0 0 .935.018l.673-1.673.208.39a.5.5 0 0 0 .441.264H17a.5.5 0 0 0 0-1h-.415l-.573-1.07a.5.5 0 0 0-.905.05l-.58 1.444-.628-1.759a.5.5 0 0 0-.455-.332"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 2a3 3 0 0 1 3 3v5.257a5.5 5.5 0 0 0-1-.656V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4.602q.274.538.656 1H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0-6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgAppFolderPulse20Filled);

export { ForwardRef as default };
