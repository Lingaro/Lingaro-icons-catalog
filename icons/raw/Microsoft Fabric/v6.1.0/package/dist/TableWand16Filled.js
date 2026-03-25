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
var SvgTableWand16Filled = function SvgTableWand16Filled(_a, ref) {
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#ic55512-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 3.5A2.5 2.5 0 0 1 3.5 1H4v3H1zm10-1c0-.507.252-.956.637-1.227A2.5 2.5 0 0 0 10.5 1H10v3h2.085l-.02-.064A1.5 1.5 0 0 1 11 2.5m-5 3q.001-.264.085-.5H5v4h2.378l1.004-1.005a1.5 1.5 0 0 1-1.318-1.06A1.5 1.5 0 0 1 6 5.5M7.085 4H5V1h4v2.085A1.5 1.5 0 0 0 7.085 4M1 5h3v4H1zm3 7.45a3 3 0 0 0-.292.55H3.5A2.5 2.5 0 0 1 1 10.5V10h3zM6.378 10 5 11.378V10zm5.851-4.436a1.914 1.914 0 1 1 2.707 2.707l-7.17 7.17A1.9 1.9 0 0 1 6.46 16a1.914 1.914 0 0 1-1.403-3.267l7.17-7.17Zm-.48 1.893-5.983 5.984a.914.914 0 1 0 1.293 1.292l5.983-5.983zm2 .586.48-.48a.914.914 0 0 0-1.293-1.292l-.48.48zM15.5 13a.5.5 0 0 0 0-1H15v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V13zM9 4.5a.5.5 0 0 0-1 0V5h-.5a.5.5 0 0 0 0 1H8v.5a.5.5 0 0 0 1 0V6h.5a.5.5 0 0 0 0-1H9zM13.5 1a.5.5 0 0 1 .5.5V2h.5a.5.5 0 0 1 0 1H14v.5a.5.5 0 0 1-1 0V3h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 .5-.5"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "ic55512-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h16v16H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableWand16Filled);

export { ForwardRef as default };
