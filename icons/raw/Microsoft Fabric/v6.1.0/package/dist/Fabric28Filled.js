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
var SvgFabric28Filled = function SvgFabric28Filled(_a, ref) {
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
    d: "m7.082 10.763 16.638-2.42a.93.93 0 0 0 .764-.677l1.481-4.498a.924.924 0 0 0-1.007-1.163L9.578 4.204a4.15 4.15 0 0 0-3.345 3.004L4.98 11.804c.214-.713.629-.785 2.103-1.041Zm.41 1.542c-1.972.41-2.709 1.067-3.14 2.03a6 6 0 0 0-.2.537l-1.133 4.11a6.2 6.2 0 0 1 2.051-.694l11.101-1.628c.946-.156 1.14-.895 1.321-1.586l1.22-4.438zm-2.3 7.479c-2.134.347-2.834 1.758-3.002 2.19a2.955 2.955 0 0 0 2.436 3.986 4.9 4.9 0 0 0 1.417-.023l2.424-.336a1.54 1.54 0 0 0 1.27-1.12l1.524-5.587-6.07.89Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFabric28Filled);

export { ForwardRef as default };
