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
var SvgTextLambda32Filled = function SvgTextLambda32Filled(_a, ref) {
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
    d: "M7.45 5.776c.003-.001.034-.012.102-.029q.105-.026.265-.056c.214-.04.472-.08.742-.113.556-.07 1.078-.11 1.3-.11.516 0 .994.078 1.415.222.434.15.815.461 1.188.968.382.52.697 1.163 1.034 1.89l1.079 2.335L7.112 27.23a1.25 1.25 0 1 0 2.275 1.038l6.57-14.395 6.659 14.4a1.25 1.25 0 0 0 2.269-1.049L15.765 7.5c-.332-.717-.74-1.574-1.29-2.322-.559-.76-1.319-1.484-2.39-1.852A6.9 6.9 0 0 0 9.86 2.97c-.38 0-1.023.054-1.613.128-.548.07-1.265.18-1.696.346a1.25 1.25 0 1 0 .899 2.333Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTextLambda32Filled);

export { ForwardRef as default };
