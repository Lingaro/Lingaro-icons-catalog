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
var SvgPowerBi32Filled = function SvgPowerBi32Filled(_a, ref) {
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
    d: "m27.04 28.823-.004-25.645c0-.65-.527-1.177-1.177-1.177h-7.828c-.65 0-1.177.527-1.177 1.177v4.823h2.266a3.167 3.167 0 0 1 3.167 3.167V30h3.576c.65 0 1.177-.527 1.177-1.177M20.287 30V11.168c0-.645-.522-1.167-1.167-1.167h-6.235a1.17 1.17 0 0 0-1.17 1.17V14h1.262a3.167 3.167 0 0 1 3.167 3.167v12.835h4.143zm-8.572 0v.003h2.429V17.168c0-.644-.523-1.166-1.167-1.166H6.741a1.17 1.17 0 0 0-1.17 1.17V28.83c0 .647.524 1.17 1.17 1.17h4.973Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPowerBi32Filled);

export { ForwardRef as default };
