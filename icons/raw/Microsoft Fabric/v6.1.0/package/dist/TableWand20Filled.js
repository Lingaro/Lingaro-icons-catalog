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
var SvgTableWand20Filled = function SvgTableWand20Filled(_a, ref) {
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
    d: "M9.085 6H7V2h4v3.085A1.5 1.5 0 0 0 9.085 6m5 0-.02-.064a1.5 1.5 0 0 1 0-2.872 1.5 1.5 0 0 1 .572-.791A2.5 2.5 0 0 0 13.5 2H12v4zm-5.207 5 1.095-1.095a1.5 1.5 0 0 1-.909-.97A1.5 1.5 0 0 1 8.085 7H7v4zm-3.026 3.026L6 13.878V12H2v1.5A2.5 2.5 0 0 0 4.5 16H5a2.9 2.9 0 0 1 .852-1.974M6 11V7H2v4zm0-9v4H2V4.5A2.5 2.5 0 0 1 4.5 2zm7.729 5.564a1.914 1.914 0 1 1 2.707 2.707l-7.17 7.17a1.914 1.914 0 1 1-2.707-2.708zm-.48 1.893L7.266 15.44a.914.914 0 1 0 1.293 1.293l5.983-5.983zm2 .586.48-.48a.914.914 0 0 0-1.293-1.292l-.48.48zM10.5 6a.5.5 0 0 1 .5.5V7h.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V8h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 .5-.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3.5a.5.5 0 0 0-1 0V4h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V5h.5a.5.5 0 0 0 0-1H16zM17.5 15a.5.5 0 0 0 0-1H17v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V15z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableWand20Filled);

export { ForwardRef as default };
