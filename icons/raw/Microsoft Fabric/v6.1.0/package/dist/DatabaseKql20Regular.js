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
var SvgDatabaseKql20Regular = function SvgDatabaseKql20Regular(_a, ref) {
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
    d: "M4 5.001c0-1.007.875-1.755 1.904-2.223C6.978 2.29 8.427 2.001 10 2.001s3.022.289 4.096.777C15.125 3.246 16 3.994 16 5.001v5.975h-1V6.699a5 5 0 0 1-.904.525C13.022 7.712 11.573 8 10 8s-3.022-.289-4.096-.777A5 5 0 0 1 5 6.699v8.302c0 .374.356.875 1.318 1.313C7.234 16.73 8.536 17 10 17q.214 0 .424-.008c.07.061.154.122.276.183l-.4.4q-.195.196-.305.425c-1.571 0-3.018-.29-4.091-.777C4.875 16.756 4 16.008 4 15V5Zm1 0c0 .374.356.875 1.318 1.313C7.234 6.73 8.536 7 10 7s2.766-.27 3.682-.687C14.644 5.876 15 5.374 15 5s-.356-.875-1.318-1.313C12.766 3.271 11.464 3 10 3s-2.766.27-3.682.687C5.356 4.126 5 4.628 5 5.001"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.484 12.005h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.853.354l-5-5a.5.5 0 0 1 .353-.854m.056 2.653a.5.5 0 0 1 0 .707l-.706.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0Zm2.83 2.829a.5.5 0 0 1 0 .707l-.708.707a.5.5 0 1 1-.707-.707l.707-.707a.5.5 0 0 1 .707 0Zm-1.415-1.414a.5.5 0 0 1 0 .707l-2.121 2.12a.5.5 0 1 1-.708-.706l2.122-2.121a.5.5 0 0 1 .707 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseKql20Regular);

export { ForwardRef as default };
