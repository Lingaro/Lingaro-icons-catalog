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
var SvgDataWarehouse16Regular = function SvgDataWarehouse16Regular(_a, ref) {
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
    d: "M12.75 14.549v.003H2.753c-.485 0-.925-.197-1.242-.517A1.74 1.74 0 0 1 1 12.802l.003-6.812c0-.21.112-.395.277-.496 1.379-.85 4.784-2.95 6.412-3.956a.59.59 0 0 1 .609-.01l2.674 1.65.006.004.002.001 3.744 2.311a.57.57 0 0 1 .273.493v6.316a2.25 2.25 0 0 1-2.25 2.246m-1.872-1a2.23 2.23 0 0 1-.378-1.246V8.96L6.25 6.336 2.003 8.958v1.564L4.192 9.17a.59.59 0 0 1 .616 0s1.589.982 2.912 1.796a.58.58 0 0 1 .28.496v1.339c0 .267.06.52.168.747zm.622-1.246c0 .686.558 1.246 1.25 1.246s1.25-.56 1.25-1.246V6.22l-5.995-3.7c-1.616 1-4.582 2.828-6.002 3.703v1.56L5.942 5.35a.59.59 0 0 1 .616 0l4.659 2.876a.58.58 0 0 1 .283.5v3.576Zm-8.75 1.246h4.353A2.8 2.8 0 0 1 7 12.802v-1.104l-2.5-1.542-2.497 1.54v1.11a.744.744 0 0 0 .747.743",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataWarehouse16Regular);

export { ForwardRef as default };
