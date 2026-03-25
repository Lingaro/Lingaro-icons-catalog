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
var SvgNodesTriangleConnectedTop20Regular = function SvgNodesTriangleConnectedTop20Regular(_a, ref) {
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
    d: "M4 6.5A2 2 0 0 0 5.937 5h8.126a2 2 0 1 0 0-1H5.937A2 2 0 1 0 4 6.5m0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m12 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2M12 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0M5.269 6.932a.5.5 0 0 1 .674.212l1 1.916a.5.5 0 1 1-.886.463l-1-1.917a.5.5 0 0 1 .212-.674m9.462 0a.5.5 0 0 1 .212.674l-1 1.917a.5.5 0 0 1-.886-.463l1-1.916a.5.5 0 0 1 .674-.212m-7.462 3.833a.5.5 0 0 1 .674.212l1 1.917a.5.5 0 1 1-.886.462l-1-1.916a.5.5 0 0 1 .212-.675m5.462 0a.5.5 0 0 1 .212.675l-1 1.916a.5.5 0 0 1-.886-.462l1-1.917a.5.5 0 0 1 .674-.212"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgNodesTriangleConnectedTop20Regular);

export { ForwardRef as default };
