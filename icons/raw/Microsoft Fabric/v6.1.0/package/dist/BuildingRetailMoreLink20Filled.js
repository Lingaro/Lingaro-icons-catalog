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
var SvgBuildingRetailMoreLink20Filled = function SvgBuildingRetailMoreLink20Filled(_a, ref) {
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
    d: "M3.996 3.327A1 1 0 0 1 4.736 3H15.24a1 1 0 0 1 .739.327l2.733 3c.585.642.13 1.673-.739 1.673H2.002c-.869 0-1.324-1.031-.74-1.673zM16.988 9h-14v5.5a2.5 2.5 0 0 0 2.5 2.5h5.196a3.5 3.5 0 0 1-1.435-4.327 1 1 0 0 1 1.235-1.542 3.5 3.5 0 0 1 2.004-.631h4q.255 0 .5.035zm-10 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.488 11.5a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 1 0 0 1h.5a1.5 1.5 0 0 1 0 3h-.5a.5.5 0 1 0 0 1h.5a2.5 2.5 0 0 0 0-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.988 14a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBuildingRetailMoreLink20Filled);

export { ForwardRef as default };
