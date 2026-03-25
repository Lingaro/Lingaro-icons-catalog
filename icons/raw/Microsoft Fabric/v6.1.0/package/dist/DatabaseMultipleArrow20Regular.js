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
var SvgDatabaseMultipleArrow20Regular = function SvgDatabaseMultipleArrow20Regular(_a, ref) {
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
    d: "M12 15.957v.542q0 .233-.074.455C11.54 18.118 9.706 19 7.5 19 5.015 19 3 17.88 3 16.5v-3.945c.255.229.54.425.832.588.99.55 2.288.858 3.668.858s2.679-.309 3.668-.858c.293-.163.578-.36.833-.59z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 1c1.573 0 3.022.29 4.096.777C18.125 2.245 19 2.993 19 4v10c0 1.007-.875 1.755-1.904 2.223C16.022 16.71 14.573 17 13 17h-.05q.049-.24.05-.501V16c1.464 0 2.766-.27 3.683-.688C17.644 14.876 18 14.374 18 14V5.698a5 5 0 0 1-.904.525C16.022 6.71 14.573 7 13 7s-3.022-.29-4.096-.777A5 5 0 0 1 8 5.698v1.316a9 9 0 0 0-1 0v-.479l1.268-1.267q.178-.18.312-.383.284.22.737.428C10.234 5.729 11.536 6 13 6s2.766-.27 3.683-.688C17.644 4.875 18 4.375 18 4c0-.374-.356-.875-1.317-1.313C15.766 2.272 14.464 2 13 2s-2.766.27-3.683.688a5 5 0 0 0-.395.204 2.5 2.5 0 0 0-.435-.905q.203-.113.417-.21C9.978 1.29 11.427 1 13 1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 8a8 8 0 0 1 1.379.12c.4.07.778.173 1.121.3 1.206.45 2 1.213 2 2.08 0 1.38-2.015 2.5-4.5 2.5S3 11.88 3 10.5c0-1.287 1.75-2.346 4-2.484q.246-.015.5-.016M4.146 1.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L5.293 4H4.5c-.923 0-1.523.23-1.896.604C2.23 4.977 2 5.577 2 6.5v2a.5.5 0 0 1-1 0v-2c0-1.077.27-1.977.896-2.604C2.523 3.27 3.423 3 4.5 3h.793L4.146 1.854a.5.5 0 0 1 0-.708"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseMultipleArrow20Regular);

export { ForwardRef as default };
