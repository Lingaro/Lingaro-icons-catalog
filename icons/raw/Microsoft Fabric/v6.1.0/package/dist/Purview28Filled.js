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
var SvgPurview28Filled = function SvgPurview28Filled(_a, ref) {
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
    d: "M22.07 12.256c.103.18-.106.386-.288.286a16 16 0 0 0-1.538-.742h-.002l-.002.001a16.22 16.22 0 0 0-11.786-.288.055.055 0 0 1-.074-.052c.05-2.723.932-5.174 2.271-7.503l.014-.024c.184-.32.404-.6.649-.84 1.717-1.681 4.705-1.401 5.998.839zm-.548 2.329a.127.127 0 0 0-.19.087l-.024.126-.005.029c-.384 1.982-1.262 4.081-2.373 5.753l-.008.011c-.638.958-1.556 2.029-2.388 2.86a16 16 0 0 1-.598.57.2.2 0 0 0 .037.326 14.35 14.35 0 0 0 5.767 1.637l1.643.003c2.308 0 3.862-1.786 3.867-3.77 0-.667-.172-1.353-.543-1.995l-.176-.307-.001-.003-.357-.616c-.19-.32-.386-.633-.604-.935h-.002a14.3 14.3 0 0 0-4.045-3.777ZM6.094 11.858c.104-.18.39-.1.393.107a16.14 16.14 0 0 0 3.072 9.237 16.15 16.15 0 0 0 4.769 4.392c.178.107.104.393-.104.393h-9.63c-2.953 0-4.802-3.202-3.324-5.765z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPurview28Filled);

export { ForwardRef as default };
