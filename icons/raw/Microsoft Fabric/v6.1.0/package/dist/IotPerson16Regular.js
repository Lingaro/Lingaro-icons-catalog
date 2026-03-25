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
var SvgIotPerson16Regular = function SvgIotPerson16Regular(_a, ref) {
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
    d: "M9 3.5a1.5 1.5 0 1 1 1.25 1.48l-.018.032a3 3 0 0 0-1.43.514l.574-1.032A1.5 1.5 0 0 1 9 3.5m1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M8.7 5.6a2.5 2.5 0 0 0-2.079.314l-.767-.768a1.5 1.5 0 1 0-.707.707l.767.768a2.49 2.49 0 0 0-.299 2.132l-1.121.623a1.5 1.5 0 1 0 .486.874l1.122-.623c.288.336.664.595 1.093.74a2.5 2.5 0 0 1 1.078-.357 3 3 0 0 1-.374-.513 1.5 1.5 0 0 1 0-2.994 3 3 0 0 1 .801-.904ZM5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5c2.5 0 3.5-1.255 3.5-2.5a1.5 1.5 0 0 0-1.5-1.5h-4A1.5 1.5 0 0 0 7 12.5c0 1.25 1 2.5 3.5 2.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgIotPerson16Regular);

export { ForwardRef as default };
