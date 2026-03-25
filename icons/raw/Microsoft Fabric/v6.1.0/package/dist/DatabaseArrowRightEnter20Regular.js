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
var SvgDatabaseArrowRightEnter20Regular = function SvgDatabaseArrowRightEnter20Regular(_a, ref) {
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
    fillRule: "evenodd",
    d: "M5.9 2.779C4.875 3.247 4 3.995 4 5.002v4.207a5.5 5.5 0 0 1 1-.185V6.702q.422.309.9.523c1.298.54 2.694.804 4.1.777a10.2 10.2 0 0 0 4.1-.775q.478-.215.9-.525v8.3c0 .374-.356.875-1.318 1.313a9.2 9.2 0 0 1-3.281.686 5.5 5.5 0 0 1-.66 1.003q.13 0 .259-.002a10.2 10.2 0 0 0 4.1-.777c1.025-.468 1.9-1.216 1.9-2.223v-10c0-1.007-.875-1.755-1.9-2.223a10.2 10.2 0 0 0-4.1-.777 10.2 10.2 0 0 0-4.1.777m.418 3.536C5.356 5.877 5 5.375 5 5.002c0-.374.356-.875 1.318-1.313A9.2 9.2 0 0 1 10 3.002a9.2 9.2 0 0 1 3.682.687c.962.438 1.318.939 1.318 1.313s-.356.875-1.318 1.313A9.2 9.2 0 0 1 10 7.002a9.2 9.2 0 0 1-3.682-.687",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 10.002a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m2.353 4.854-2 2a.5.5 0 1 1-.707-.708l1.147-1.146H3.5a.5.5 0 0 1 0-1h2.793l-1.147-1.147a.5.5 0 1 1 .708-.707l2 2A.5.5 0 0 1 8 14.5v.006a.5.5 0 0 1-.144.348l-.003.003Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseArrowRightEnter20Regular);

export { ForwardRef as default };
