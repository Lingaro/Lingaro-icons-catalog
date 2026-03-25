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
var SvgTooltipDataBarVertical20Regular = function SvgTooltipDataBarVertical20Regular(_a, ref) {
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
    d: "M12.293 4.793A1 1 0 0 0 12 5.5v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1.707-.707m-6 4A1 1 0 0 0 6 9.5v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1.707-.707m3-2A1 1 0 0 0 9 7.5v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1.707-.707"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 2A2.5 2.5 0 0 0 3 4.5v9A2.5 2.5 0 0 0 5.5 16h2.691l1.362 2.724a.5.5 0 0 0 .894 0L11.81 16h2.69a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 2zM4.44 3.44A1.5 1.5 0 0 1 5.5 3h9A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 0-.447.276L10 17.382l-1.053-2.106A.5.5 0 0 0 8.5 15h-3A1.5 1.5 0 0 1 4 13.5v-9c0-.398.158-.78.44-1.06"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTooltipDataBarVertical20Regular);

export { ForwardRef as default };
