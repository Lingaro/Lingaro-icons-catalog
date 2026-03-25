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
var SvgWindowAsteriskNew20Filled = function SvgWindowAsteriskNew20Filled(_a, ref) {
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
    d: "M6.001 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6a5.5 5.5 0 0 1-.393-1H6.001a2 2 0 0 1-2-2V7h12v2.207q.524.149 1 .393V6a3 3 0 0 0-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.414 12.405c.303-.735.76-1.39 1.332-1.924l-.246.142V8.5a.5.5 0 0 0-1 0v2.123L7.652 9.556a.5.5 0 0 0-.5.866L9 11.489l-1.848 1.067a.5.5 0 1 0 .5.866zm7.587 5.837a4.5 4.5 0 1 1-5-7.483 4.5 4.5 0 0 1 5 7.483m-2.147-6.096a.5.5 0 0 0-.853.354V14h-1.5a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1h-1.5v-1.5a.5.5 0 0 0-.146-.354Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowAsteriskNew20Filled);

export { ForwardRef as default };
