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
var SvgCalculatorBracketsNumberSymbol20Filled = function SvgCalculatorBracketsNumberSymbol20Filled(_a, ref) {
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
    d: "M2 4.75A2.75 2.75 0 0 1 4.75 2h1.5a.75.75 0 0 1 0 1.5h-1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h1.5a.75.75 0 0 1 0 1.5h-1.5A2.75 2.75 0 0 1 2 15.25zM15.25 2A2.75 2.75 0 0 1 18 4.75v4.285A3.5 3.5 0 0 0 17.5 9h-1V4.75c0-.69-.56-1.25-1.25-1.25h-1.5a.75.75 0 0 1 0-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 6.5v2.535a3.5 3.5 0 0 0-1.52.607A.502.502 0 0 0 12 9h-1a.5.5 0 0 0 0 1h1l.053-.003A3.5 3.5 0 0 0 11.337 11H11a.5.5 0 0 0 0 1h.035q-.035.245-.035.5v.5a.5.5 0 0 0 0 1v1H7.5A1.5 1.5 0 0 1 6 13.5v-7A1.5 1.5 0 0 1 7.5 5h5A1.5 1.5 0 0 1 14 6.5m-7 0v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5m.5 3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1H8a.5.5 0 0 0-.5.5M8 11a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-.5 2.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1H8a.5.5 0 0 0-.5.5m8.874 1.5h-.97l.222-1.005h.972z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 12.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5zm1.5.995a.5.5 0 0 0 .5.5h.601L14.38 15h-.88a.5.5 0 1 0 0 1h.658l-.142.638a.5.5 0 0 0 .977.216l.189-.854h.969l-.143.637a.5.5 0 0 0 .976.218l.191-.855H18a.5.5 0 0 0 0-1h-.602l.225-1.005h.877a.5.5 0 1 0 0-1h-.654l.141-.633a.5.5 0 0 0-.976-.218l-.19.851h-.974l.14-.634a.5.5 0 1 0-.976-.216l-.188.85H14a.5.5 0 0 0-.5.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCalculatorBracketsNumberSymbol20Filled);

export { ForwardRef as default };
