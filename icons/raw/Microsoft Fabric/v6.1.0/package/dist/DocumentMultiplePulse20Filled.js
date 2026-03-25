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
var SvgDocumentMultiplePulse20Filled = function SvgDocumentMultiplePulse20Filled(_a, ref) {
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
    d: "M9 2v4.5A1.5 1.5 0 0 0 10.5 8H15v6.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 14.5v-2.987l.615 1.539a1.5 1.5 0 0 0 2.734.113l.74-1.48c.257.198.577.31.915.31H10.5a1.5 1.5 0 0 0 0-2.998h-.57l-.585-1.17a1.5 1.5 0 0 0-2.682 0l-.505 1.01-.757-1.896A1.5 1.5 0 0 0 4 6V3.5A1.5 1.5 0 0 1 5.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 2.25V6.5a.5.5 0 0 0 .5.5h4.25zM17 9a1 1 0 0 0-1-1v6a3 3 0 0 1-3 3H6a1 1 0 0 0 1 1h6.06A3.94 3.94 0 0 0 17 14.06zM4.03 6.999a.5.5 0 0 1 .443.314l1.585 3.963 1.5-3.002a.5.5 0 0 1 .894 0l.86 1.723h1.189a.5.5 0 0 1 0 .999H9.004a.5.5 0 0 1-.447-.276l-.552-1.105-1.551 3.103a.5.5 0 0 1-.91-.037L3.959 8.716l-1 2.003a.5.5 0 0 1-.447.276H.499a.5.5 0 0 1 0-1h1.704l1.36-2.721a.5.5 0 0 1 .468-.276Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentMultiplePulse20Filled);

export { ForwardRef as default };
