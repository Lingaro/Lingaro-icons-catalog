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
var SvgMyLocationArrowDown20Regular = function SvgMyLocationArrowDown20Regular(_a, ref) {
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
    d: "M10 15h.022a5.5 5.5 0 0 0 .436 2.7.5.5 0 0 1-.958-.2v-1.52a6 6 0 0 1-5.48-5.48H2.5a.5.5 0 0 1 0-1h1.52A6 6 0 0 1 9.5 4.02V2.5a.5.5 0 0 1 1 0v1.52a6 6 0 0 1 5.48 5.48h1.52a.5.5 0 0 1 .2.958 5.5 5.5 0 0 0-2.7-.436V10a5 5 0 1 0-5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 13q.327 0 .635-.067a5.53 5.53 0 0 1 2.298-2.298A3 3 0 1 0 10 13m10 2.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-4.854 2.353.003.003a.5.5 0 0 0 .348.144h.006a.5.5 0 0 0 .35-.146l2-2a.5.5 0 0 0-.707-.708L16 16.293V13.5a.5.5 0 0 0-1 0v2.793l-1.146-1.147a.5.5 0 0 0-.708.708z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgMyLocationArrowDown20Regular);

export { ForwardRef as default };
