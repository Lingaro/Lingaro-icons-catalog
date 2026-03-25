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
var SvgTextNumber0120Regular = function SvgTextNumber0120Regular(_a, ref) {
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
    d: "M14 6.5a.5.5 0 0 0-.777-.416l-1.5 1a.5.5 0 0 0 .554.832L13 7.434V12.5a.5.5 0 1 0 1 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.5 6c-.935 0-1.597.437-1.996 1.13C6.128 7.782 6 8.636 6 9.5c0 .863.128 1.717.504 2.37C6.903 12.564 7.565 13 8.5 13s1.597-.437 1.996-1.13c.376-.653.504-1.507.504-2.37s-.128-1.717-.504-2.37C10.097 6.436 9.435 6 8.5 6M7 9.5c0-.794.122-1.44.37-1.872C7.598 7.235 7.936 7 8.5 7s.903.235 1.13.628c.248.432.37 1.078.37 1.872s-.122 1.44-.37 1.872c-.227.393-.565.628-1.13.628s-.903-.235-1.13-.628C7.123 10.94 7 10.294 7 9.5"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTextNumber0120Regular);

export { ForwardRef as default };
