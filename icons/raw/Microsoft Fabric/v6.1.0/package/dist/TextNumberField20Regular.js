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
var SvgTextNumberField20Regular = function SvgTextNumberField20Regular(_a, ref) {
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
    d: "M11.332 8.864a.87.87 0 0 1 1.258-.773.9.9 0 0 1 .33.278.84.84 0 0 1-.07.923 2.1 2.1 0 0 1-.544.578 9 9 0 0 1-.382.282l-.057.04-.064.045q-.149.104-.298.216a2.47 2.47 0 0 0-1.173 2.047.5.5 0 0 0 .5.5h2.693a.5.5 0 0 0 0-1h-2.1a1.96 1.96 0 0 1 .678-.748q.15-.114.32-.231l.015-.011.06-.041q.056-.042.115-.083.153-.109.31-.231a3.1 3.1 0 0 0 .784-.856 1.83 1.83 0 0 0 .047-1.975 1.874 1.874 0 0 0-3.426 1.04.5.5 0 0 0 1 0zm-3.995.391q-.27.267-.587.479l.004-.002A.5.5 0 0 1 6.2 8.9a2.8 2.8 0 0 0 1.15-1.507.5.5 0 0 1 .988.107v5a.5.5 0 1 1-1 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTextNumberField20Regular);

export { ForwardRef as default };
