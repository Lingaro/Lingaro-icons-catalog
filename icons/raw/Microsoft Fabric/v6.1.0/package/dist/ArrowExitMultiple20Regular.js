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
var SvgArrowExitMultiple20Regular = function SvgArrowExitMultiple20Regular(_a, ref) {
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
    d: "M12 17.5a.5.5 0 0 1-.5.5H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6.5a.5.5 0 0 1 0 1H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6.5a.5.5 0 0 1 .5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.414 5.354a.5.5 0 0 1 .707 0l1.768 1.768a.5.5 0 0 1 0 .707l-1.768 1.768a.5.5 0 1 1-.707-.707l.89-.89H8.5a.5.5 0 0 1 0-1h6.853l-.939-.939a.5.5 0 0 1 0-.707m-3.794 5a.5.5 0 0 0-.706 0l-1.768 1.768a.5.5 0 0 0 0 .707l1.768 1.768a.5.5 0 1 0 .707-.707L9.73 13h6.804a.5.5 0 0 0 0-1H9.682l.939-.939a.5.5 0 0 0 0-.707Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowExitMultiple20Regular);

export { ForwardRef as default };
