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
var SvgArrowDownDoubleWrap12Regular = function SvgArrowDownDoubleWrap12Regular(_a, ref) {
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
    d: "M10.85 8.854a.5.5 0 0 0 0-.708.49.49 0 0 0-.7 0l-.15.147V3a.5.5 0 1 0-1 0v5.293l-.15-.147a.49.49 0 0 0-.7 0 .5.5 0 0 0 0 .708l1 1a.49.49 0 0 0 .7 0zm-7 0a.5.5 0 0 0 0-.708.49.49 0 0 0-.7 0L3 8.293V2.5a.5.5 0 0 0-1 0v5.793l-.15-.147a.49.49 0 0 0-.7 0 .5.5 0 0 0 0 .708l1 1a.49.49 0 0 0 .7 0zM8.706 1.7a.503.503 0 0 0-.323-.623 1.73 1.73 0 0 0-1.093.025.505.505 0 0 0-.29.64c.09.26.366.394.616.301a.8.8 0 0 1 .49-.008.48.48 0 0 0 .6-.335m-2.47.372a.483.483 0 0 0-.566.394A3 3 0 0 0 5.622 3v.6c0 .276.216.5.482.5a.49.49 0 0 0 .483-.5V3q0-.193.03-.34a.5.5 0 0 0-.38-.588ZM5.623 9q0 .193-.03.34a.5.5 0 0 0 .38.588.483.483 0 0 0 .566-.394q.049-.253.049-.534v-.6c0-.277-.216-.5-.483-.5a.49.49 0 0 0-.482.5zm.482-1.9a.49.49 0 0 0 .483-.5V5.4c0-.276-.216-.5-.483-.5a.49.49 0 0 0-.482.5v1.2c0 .276.216.5.482.5m-.863 3.159a.48.48 0 0 0-.617-.302.7.7 0 0 1-.253.043.7.7 0 0 1-.254-.043.48.48 0 0 0-.617.301c-.09.26.04.547.291.64.186.07.382.102.58.102s.393-.033.579-.102c.25-.093.38-.38.29-.64Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowDownDoubleWrap12Regular);

export { ForwardRef as default };
