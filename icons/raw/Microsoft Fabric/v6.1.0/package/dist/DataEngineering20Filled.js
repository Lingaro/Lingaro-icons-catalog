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
var SvgDataEngineering20Filled = function SvgDataEngineering20Filled(_a, ref) {
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
    d: "m17.228 13.476.322-.321c.268-.266.43-.627.45-1.004V7.797c0-1.06-1.227-1.731-1.9-.74 0 0-1.58 2.38-4.563 4.332.63.787 1.328 1.387 2.071 1.755.834.412 1.682.606 2.378.619.742.014 1.125-.174 1.24-.289z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.182 18c.328-.001.644-.143.884-.377l1.49-1.469 1.402-1.392h-.02c-.847-.021-1.828-.254-2.772-.722-1.14-.563-2.095-1.536-2.843-2.61a18 18 0 0 1-.797-1.163l-.465-.732a91 91 0 0 1-2.457 1.711c-.26.175-.477.32-.658.45-.35.25-.565.435-.753.657-.193.227-.392.533-.663 1.058-.414.798-.284 1.611.035 2.331a5 5 0 0 0 .717 1.145l.657.706a1.28 1.28 0 0 0 .92.407",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.688 9.28c-.28.192-.527.358-.75.507-.367.247-.664.446-.917.638-1.221.82-1.635 1.118-2.352 2.5a3.33 3.33 0 0 0-.366 1.83l-.936-1.004A1.38 1.38 0 0 1 2 12.81l.001-5.579c0-.185.035-.307.104-.473.066-.16.16-.306.28-.43L6.214 2.39c.243-.25.57-.389.91-.389h6.223a.638.638 0 0 1 .573.94l-.104.198A13.7 13.7 0 0 1 10.26 7.38a65 65 0 0 1-2.573 1.9Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataEngineering20Filled);

export { ForwardRef as default };
