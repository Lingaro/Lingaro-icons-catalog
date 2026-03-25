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
var SvgDatabaseArrowSync16Regular = function SvgDatabaseArrowSync16Regular(_a, ref) {
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
    d: "M8 1C5.149 1 3 2.075 3 3.5v9c0 1.307 1.807 2.32 4.306 2.478A5.5 5.5 0 0 1 6.1 13.801C4.78 13.504 4 12.932 4 12.5V5.021a7.4 7.4 0 0 0 3.34.977 5.52 5.52 0 0 1 4.43-.85q.116-.061.23-.127v.186q.524.149 1 .393V3.5C13 2.075 10.851 1 8 1m0 1c2.441 0 4 .888 4 1.5S10.441 5 8 5s-4-.888-4-1.5S5.558 2 8 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H11a.5.5 0 0 1 0-1h.468a2 2 0 0 0-.933-.25 2 2 0 0 0-1.45.586.5.5 0 0 1-.706-.707A3 3 0 0 1 12 8.152V8a.5.5 0 0 1 .5-.5m-.876 5.532A3 3 0 0 1 9 12.848V13a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 0 1h-.468a2 2 0 0 0 .933.25 2 2 0 0 0 1.45-.586.5.5 0 0 1 .706.707c-.285.285-.624.51-.997.66Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseArrowSync16Regular);

export { ForwardRef as default };
