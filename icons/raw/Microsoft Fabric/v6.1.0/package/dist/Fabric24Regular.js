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
var SvgFabric24Regular = function SvgFabric24Regular(_a, ref) {
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
    d: "M21.2 2h-.1L8.25 3.91c-1.4.22-2.52 1.25-2.89 2.6l-3.19 11.7a2.816 2.816 0 0 0 2.33 3.76c.4.06.84.05 1.35-.02l2.31-.32c.58-.08 1.06-.5 1.21-1.06l1.02-3.74 3.48-.51h.07c.34-.06.61-.31.69-.63l1.32-5.17 3.61-.53a.79.79 0 0 0 .66-.59l1.75-6.38q.03-.105.03-.21c0-.44-.36-.8-.8-.8zM7.92 20.14l-2.28.31h-.01c-.38.06-.68.05-.91.02h-.04c-.66-.07-1.17-.63-1.17-1.31 0-.16.03-.32.08-.46.06-.14.39-.92 1.66-1.13l3.52-.51-.84 3.08zm5.35-5.26-8.82 1.29h-.01l-.2.03.89-3.41c.11-.33.19-.41.27-.48.12-.1.44-.28 1.3-.44l7.64-1.13-1.06 4.13zm5.61-6.32L5.83 10.49h-.04l1-3.59c.21-.79.87-1.39 1.67-1.52l11.76-1.74-1.35 4.91z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFabric24Regular);

export { ForwardRef as default };
