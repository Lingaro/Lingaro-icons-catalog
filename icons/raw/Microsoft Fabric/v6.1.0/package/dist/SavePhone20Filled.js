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
var SvgSavePhone20Filled = function SvgSavePhone20Filled(_a, ref) {
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
    d: "M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2v-5.5A1.5 1.5 0 0 1 6.5 10h6.129c.504-.61 1.267-1 2.121-1H17V6.621a2 2 0 0 0-.586-1.414l-1.621-1.621A2 2 0 0 0 13.379 3H13v3.5A1.5 1.5 0 0 1 11.5 8h-4A1.5 1.5 0 0 1 6 6.5V3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.104 11q-.103.358-.104.75V17H6v-5.5a.5.5 0 0 1 .5-.5zM12 3H7v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5zm1 8.75c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 17.25 19h-2.5A1.75 1.75 0 0 1 13 17.25zM15.5 16a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSavePhone20Filled);

export { ForwardRef as default };
