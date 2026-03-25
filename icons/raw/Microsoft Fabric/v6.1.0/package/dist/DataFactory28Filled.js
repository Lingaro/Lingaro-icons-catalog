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
var SvgDataFactory28Filled = function SvgDataFactory28Filled(_a, ref) {
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
    d: "M8.957 2.004a.832.832 0 0 0-.821.948 14.94 14.94 0 0 0 14.79 12.796h3.064v-5.243a1.997 1.997 0 0 0-1.997-1.998h-.828a7 7 0 0 1-6.687-4.943l-.264-.852a1 1 0 0 0-.953-.708zm11.478 15.055c-.027 1.124-.853 2.444-2.347 2.444H10.16a14.7 14.7 0 0 0-2.024 5.561.82.82 0 0 0 .81.936h6.32c.438 0 .822-.288.954-.708l.264-.852a7 7 0 0 1 6.687-4.943H24a1.997 1.997 0 0 0 1.997-1.997v-.26l-.006.007h-3.065q-1.269-.001-2.49-.188ZM2.848 10h6.443a16.47 16.47 0 0 0 9.645 6.758V17c0 .552-.38 1.002-.848 1.002H2.848C2.381 18.002 2 17.552 2 17v-5.999C2 10.45 2.381 10 2.848 10",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataFactory28Filled);

export { ForwardRef as default };
