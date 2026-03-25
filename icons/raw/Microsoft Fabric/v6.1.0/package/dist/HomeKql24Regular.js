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
var SvgHomeKql24Regular = function SvgHomeKql24Regular(_a, ref) {
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
    d: "M10.537 2.534a2.25 2.25 0 0 1 2.903-.002L20.2 8.23c.507.427.8 1.057.8 1.72v2.5l-1.5.012V9.951a.75.75 0 0 0-.267-.573l-6.76-5.7a.75.75 0 0 0-.968.001l-6.74 5.698a.75.75 0 0 0-.265.573v9.8c0 .138.112.25.25.25h8.555q.126.105.269.19a2.24 2.24 0 0 0-.537 1.31H4.75A1.75 1.75 0 0 1 3 19.75v-9.8c0-.662.292-1.29.797-1.718z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m16.155 13.99 6.32-.05a.5.5 0 0 1 .502.505l-.048 6.32a.5.5 0 0 1-.854.35l-6.27-6.272a.5.5 0 0 1 .35-.853m1.535 4.835a.75.75 0 0 1 .243 1.224l-2.122 2.12a.75.75 0 0 1-1.06-1.06l2.12-2.121a.75.75 0 0 1 .818-.163Zm-1.703-.72-.707.707a.75.75 0 0 1-1.06-1.061l.707-.707a.75.75 0 0 1 1.06 1.06Zm2.121 3.535.707-.707a.751.751 0 1 1 1.06 1.06l-.706.707a.75.75 0 0 1-1.061-1.06"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHomeKql24Regular);

export { ForwardRef as default };
