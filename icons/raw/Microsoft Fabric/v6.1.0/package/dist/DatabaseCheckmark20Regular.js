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
var SvgDatabaseCheckmark20Regular = function SvgDatabaseCheckmark20Regular(_a, ref) {
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
    d: "M4 5c0-1.007.875-1.755 1.904-2.222C6.978 2.289 8.427 2 10 2s3.022.29 4.096.778C15.125 3.245 16 3.993 16 5v4.208a5.5 5.5 0 0 0-1-.185V6.699a5 5 0 0 1-.904.524C13.022 7.712 11.573 8 10 8s-3.022-.288-4.096-.777A5 5 0 0 1 5 6.7V15c0 .373.356.875 1.318 1.312.831.378 1.98.636 3.278.68q.276.541.66 1.005-.129.004-.256.003c-1.573 0-3.022-.288-4.096-.777C4.875 16.756 4 16.008 4 15.001zm1 0c0 .374.356.876 1.318 1.313C7.234 6.73 8.536 7 10 7s2.766-.27 3.682-.687C14.644 5.876 15 5.374 15 5c0-.373-.356-.875-1.318-1.312C12.766 3.27 11.464 3 10 3s-2.766.271-3.682.688C5.356 4.125 5 4.627 5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2.146-1.853a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.646a.5.5 0 0 0-.708.707l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.707"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseCheckmark20Regular);

export { ForwardRef as default };
