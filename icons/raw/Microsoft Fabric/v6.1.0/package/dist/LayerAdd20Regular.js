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
var SvgLayerAdd20Regular = function SvgLayerAdd20Regular(_a, ref) {
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
    d: "M14.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a.5.5 0 0 0-.5.5V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.5-.5m-5.41 3.49c.09.492.243.962.455 1.4l-.05-.025-6.008-3.502a1 1 0 0 1-.416-1.26zm.093-2.402a5.5 5.5 0 0 0-.17 1.043L3.487 10.91a1 1 0 0 1-.416-1.26z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.494 3.117a1 1 0 0 1 1.01 0l6.01 3.52a1 1 0 0 1-.002 1.726l-1.198.697a5.6 5.6 0 0 0-2.174.11l2.869-1.671-5.504-3.224a1 1 0 0 0-1.011 0L3.99 7.499l5.506 3.209a1 1 0 0 0 1.007 0l.035-.022c-.356.37-.66.788-.902 1.245a1 1 0 0 1-.14-.066L3.487 8.363a1 1 0 0 1-.002-1.727l6.009-3.52Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgLayerAdd20Regular);

export { ForwardRef as default };
