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
var SvgDatabaseKql20Filled = function SvgDatabaseKql20Filled(_a, ref) {
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
    d: "M10 8.001c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.69 8.017c.47-.235.927-.534 1.31-.896v3.855h-3.6c-.3 0-.5.1-.8.3s-.5.4-.6.7-.2.6-.1.9c0 .3.2.6.4.8l.1.1c-.05.05-.125.1-.2.15s-.15.1-.2.15l-.7.7c-.6.6-.6 1.5 0 2.1.1.1.2.2.4.3l-.4.4q-.195.196-.305.425C6.683 17.999 4 16.657 4 15.001v-7.88c.383.362.84.661 1.31.896C6.562 8.643 8.222 9 10 9s3.438-.358 4.69-.984Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.484 12.005h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.853.354l-5-5a.5.5 0 0 1 .353-.854m.056 2.653a.5.5 0 0 1 0 .707l-.706.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0Zm2.83 2.829a.5.5 0 0 1 0 .707l-.708.707a.5.5 0 1 1-.707-.707l.707-.707a.5.5 0 0 1 .707 0Zm-1.415-1.414a.5.5 0 0 1 0 .707l-2.121 2.12a.5.5 0 1 1-.708-.706l2.122-2.121a.5.5 0 0 1 .707 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseKql20Filled);

export { ForwardRef as default };
