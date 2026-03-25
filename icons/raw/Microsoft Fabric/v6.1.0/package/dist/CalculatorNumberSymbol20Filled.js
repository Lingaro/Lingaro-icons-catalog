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
var SvgCalculatorNumberSymbol20Filled = function SvgCalculatorNumberSymbol20Filled(_a, ref) {
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
    d: "M13.5 2h-7A2.5 2.5 0 0 0 4 4.5v11A2.5 2.5 0 0 0 6.5 18h4.837A3.5 3.5 0 0 1 11 16.5v-4A3.5 3.5 0 0 1 14.5 9H16V4.5A2.5 2.5 0 0 0 13.5 2M11 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7.5 4h5A1.5 1.5 0 0 1 14 5.5v1A1.5 1.5 0 0 1 12.5 8h-5A1.5 1.5 0 0 1 6 6.5v-1A1.5 1.5 0 0 1 7.5 4m.5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2m6.374 3h-.97l.222-1.005h.972z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 12.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5zm1.5.995a.5.5 0 0 0 .5.5h.601L14.38 15h-.88a.5.5 0 1 0 0 1h.658l-.142.638a.5.5 0 0 0 .977.216l.189-.854h.969l-.143.637a.5.5 0 0 0 .976.218l.191-.855H18a.5.5 0 0 0 0-1h-.602l.225-1.005h.877a.5.5 0 1 0 0-1h-.654l.141-.633a.5.5 0 0 0-.976-.218l-.19.851h-.974l.14-.634a.5.5 0 1 0-.976-.216l-.188.85H14a.5.5 0 0 0-.5.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalculatorNumberSymbol20Filled);

export { ForwardRef as default };
