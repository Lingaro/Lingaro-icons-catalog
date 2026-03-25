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
var SvgTextNumberField20Filled = function SvgTextNumberField20Filled(_a, ref) {
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
    d: "M2.879 4.879A3 3 0 0 0 2 7v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5a3 3 0 0 0-2.121.879M6.75 9.734q.316-.21.587-.479V12.5a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.989-.107A2.8 2.8 0 0 1 6.2 8.9a.5.5 0 1 0 .555.832l-.004.002Zm4.827-1.47a.87.87 0 0 0-.245.6h-.004a.5.5 0 0 1-1 0 1.874 1.874 0 0 1 3.426-1.04 1.83 1.83 0 0 1-.047 1.975 3.1 3.1 0 0 1-.785.856 7 7 0 0 1-.31.23q-.057.043-.115.084l-.059.041-.015.011q-.17.117-.32.231a1.96 1.96 0 0 0-.678.748h2.1a.5.5 0 1 1 0 1h-2.693a.5.5 0 0 1-.5-.5 2.47 2.47 0 0 1 1.173-2.047q.149-.112.298-.216l.064-.045.057-.04a9 9 0 0 0 .382-.282c.216-.157.4-.353.543-.578a.84.84 0 0 0 .07-.923.89.89 0 0 0-.75-.369.87.87 0 0 0-.592.265Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTextNumberField20Filled);

export { ForwardRef as default };
