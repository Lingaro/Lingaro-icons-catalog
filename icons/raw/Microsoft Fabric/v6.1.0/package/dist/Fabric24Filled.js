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
var SvgFabric24Filled = function SvgFabric24Filled(_a, ref) {
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
    fillRule: "evenodd",
    d: "m6.194 9.3 13.9-2.013h.005a.77.77 0 0 0 .637-.564l1.235-3.749A.77.77 0 0 0 21.228 2l-.048.002-.049.003L8.257 3.838A3.46 3.46 0 0 0 5.468 6.34l-1.04 3.83c.16-.592.514-.654 1.766-.872Zm.255 1.528c-1.644.341-2.258.89-2.617 1.693q-.093.21-.168.447l-.86 3.186c.46-.257 1.056-.466 1.736-.577l.01-.001 9.255-1.358c.804-.132 1.021-.947 1.185-1.558l.814-3.223-9.081 1.343zM4.66 17.077c-1.779.289-2.362 1.465-2.502 1.824-.103.27-.159.565-.159.873 0 1.269.947 2.058 2.18 2.194q.516.077 1.18-.019l2.022-.28c.509-.07.924-.439 1.06-.933l1.28-4.401z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFabric24Filled);

export { ForwardRef as default };
