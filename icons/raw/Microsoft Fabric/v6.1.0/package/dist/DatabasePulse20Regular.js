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
var SvgDatabasePulse20Regular = function SvgDatabasePulse20Regular(_a, ref) {
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
    d: "M14.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m-.6 2.832a.5.5 0 0 0-.931-.029l-.584 1.364H12a.5.5 0 1 0 0 1h.714a.5.5 0 0 0 .46-.303l.212-.495.643 1.8a.5.5 0 0 0 .935.018l.672-1.673.209.39a.5.5 0 0 0 .44.263H17a.5.5 0 0 0 0-1h-.415l-.573-1.07a.5.5 0 0 0-.905.05l-.58 1.444z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabasePulse20Regular);

export { ForwardRef as default };
