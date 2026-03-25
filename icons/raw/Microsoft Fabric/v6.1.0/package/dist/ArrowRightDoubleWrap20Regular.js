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
var SvgArrowRightDoubleWrap20Regular = function SvgArrowRightDoubleWrap20Regular(_a, ref) {
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
    d: "m14.293 4-.647-.646a.5.5 0 1 1 .707-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 1 1-.707-.708L14.293 5H4.5a.5.5 0 0 1 0-1zm0 10-.647-.646a.5.5 0 0 1 .707-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.707-.708l.647-.646H5.235a.5.5 0 0 1 0-1zm1.826-8.419a.5.5 0 0 1 .653.27 3 3 0 0 1 0 2.298.5.5 0 0 1-.924-.384 2 2 0 0 0 0-1.53.5.5 0 0 1 .27-.654Zm-.7 3.538a.5.5 0 0 1-.27.653A3 3 0 0 1 14 10h-1a.5.5 0 0 1 0-1h1c.272 0 .53-.054.765-.152a.5.5 0 0 1 .654.27ZM6 10c-.272 0-.53.054-.765.152a.5.5 0 0 1-.384-.924A3 3 0 0 1 6 9h1a.5.5 0 0 1 0 1zm2.5-.5A.5.5 0 0 1 9 9h2a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5m-4.619 1.081a.5.5 0 0 1 .27.654 2 2 0 0 0 0 1.53.5.5 0 1 1-.923.383 3 3 0 0 1 0-2.296.5.5 0 0 1 .653-.27Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowRightDoubleWrap20Regular);

export { ForwardRef as default };
