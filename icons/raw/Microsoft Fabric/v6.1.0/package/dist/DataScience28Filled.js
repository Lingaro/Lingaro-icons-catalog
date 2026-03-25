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
var SvgDataScience28Filled = function SvgDataScience28Filled(_a, ref) {
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
    d: "m12.068 26.02.473-.792 6.173-10.337 4.617-7.73c.09-.154.14-.339.14-.536 0-.424-.236-.794-.579-.947l-8.429-3.573a1.3 1.3 0 0 0-.5-.105c-.174 0-.343.037-.5.098L5.467 5.377l7.543 3.741c.478.27.815.775.815 1.397q-.002.336-.12.624l-.008.019a1.6 1.6 0 0 1-.22.367l-3.643 4.08-5.213 5.838c-.343.425-.31 1.071.079 1.447q.119.12.264.184zm3.232-.07 8.156-3.724a.9.9 0 0 0 .268-.186 1.09 1.09 0 0 0 .08-1.454l-4.042-4.523-5.29 8.857.001.002a.73.73 0 0 0 .078.848c.193.216.49.277.748.18zM4.964 7.324c0-.17.037-.33.104-.47l6.367 3.157v.004a.81.81 0 0 1 .453.73c0 .18-.057.346-.154.48l-2.717 3.042-3.911-6.405a1.06 1.06 0 0 1-.142-.538",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataScience28Filled);

export { ForwardRef as default };
