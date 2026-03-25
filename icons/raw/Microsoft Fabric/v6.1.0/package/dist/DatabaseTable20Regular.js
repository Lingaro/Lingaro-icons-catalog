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
var SvgDatabaseTable20Regular = function SvgDatabaseTable20Regular(_a, ref) {
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
    d: "M4 5c0-1.007.875-1.755 1.904-2.223C6.978 2.289 8.427 2 10 2s3.022.289 4.096.777C15.125 3.245 16 3.993 16 5v3h-1V6.698a5 5 0 0 1-.904.525C13.022 7.711 11.573 8 10 8s-3.022-.289-4.096-.777A5 5 0 0 1 5 6.698V15c0 .374.356.875 1.318 1.313A7.4 7.4 0 0 0 8 16.82V17q0 .439.09.852c-.82-.132-1.566-.347-2.186-.63C4.875 16.756 4 16.008 4 15zm1 0c0 .374.356.875 1.318 1.313C7.234 6.729 8.536 7 10 7s2.766-.27 3.682-.687C14.644 5.875 15 5.373 15 5c0-.374-.356-.875-1.318-1.313C12.766 3.271 11.464 3 10 3s-2.766.27-3.682.687C5.356 4.125 5 4.627 5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2h2zm1 0v2h3v-2zm4 0v2h2a2 2 0 0 0-2-2m-1 3h-3v3h3zm3 0h-2v3h2zm-3 4h-3v2h3zm1 2a2 2 0 0 0 2-2h-2zm-5-6h-2v3h2zm0 4h-2a2 2 0 0 0 2 2z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseTable20Regular);

export { ForwardRef as default };
