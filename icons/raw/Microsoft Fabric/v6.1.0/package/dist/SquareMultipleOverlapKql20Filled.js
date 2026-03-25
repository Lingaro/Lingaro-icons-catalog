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
var SvgSquareMultipleOverlapKql20Filled = function SvgSquareMultipleOverlapKql20Filled(_a, ref) {
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
    d: "M6 4.5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7h-1.5V4a.5.5 0 0 0-.5-.5H8a.5.5 0 0 0-.5.5v.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 8v3h-.6c-.3 0-.465.016-.765.216a2 2 0 0 0-.135.1V8a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h7.007q.109.214.293.4c.1.1.2.2.4.3l-.4.4a1.6 1.6 0 0 0-.293.4H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.484 12.004h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.853.354l-5-5a.5.5 0 0 1 .353-.854m.056 2.653a.5.5 0 0 1 0 .707l-.706.707a.5.5 0 1 1-.708-.707l.708-.707a.5.5 0 0 1 .707 0Zm2.83 2.829a.5.5 0 0 1 0 .707l-.708.707a.5.5 0 1 1-.707-.707l.707-.707a.5.5 0 0 1 .707 0Zm-1.415-1.414a.5.5 0 0 1 0 .707l-2.121 2.12a.5.5 0 1 1-.708-.706l2.122-2.122a.5.5 0 0 1 .707 0Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareMultipleOverlapKql20Filled);

export { ForwardRef as default };
