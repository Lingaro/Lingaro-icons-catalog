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
var SvgArrowRightDoubleWrap12Regular = function SvgArrowRightDoubleWrap12Regular(_a, ref) {
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
    d: "M8.146 1.146a.5.5 0 0 1 .708 0l1 1a.5.5 0 0 1 0 .708l-1 1a.5.5 0 1 1-.708-.708L8.293 3H2.5a.5.5 0 0 1 0-1h5.793l-.147-.146a.5.5 0 0 1 0-.708m0 7a.5.5 0 0 1 .708 0l1 1a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708-.708L8.293 10H2.5a.5.5 0 0 1 0-1h5.793l-.147-.146a.5.5 0 0 1 0-.708m2.777-4.311a.5.5 0 1 0-.958.288.85.85 0 0 1-.008.508.5.5 0 1 0 .941.338 1.85 1.85 0 0 0 .025-1.133ZM9.534 6.45a.5.5 0 1 0-.194-.98A2 2 0 0 1 9 5.5h-.6a.5.5 0 0 0 0 1H9q.282 0 .534-.05m-6.874.081q.147-.03.34-.03h.6a.5.5 0 0 0 0-1H3q-.281 0-.534.05a.5.5 0 1 0 .194.98M5.4 5.5a.5.5 0 0 0 0 1h1.2a.5.5 0 0 0 0-1zM2.043 6.987a.5.5 0 1 0-.941-.338Q.999 6.94 1 7.25q0 .31.102.601a.5.5 0 1 0 .941-.338A.8.8 0 0 1 2 7.25q.001-.147.043-.263"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowRightDoubleWrap12Regular);

export { ForwardRef as default };
