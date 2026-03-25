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
var SvgCopilot16Filled = function SvgCopilot16Filled(_a, ref) {
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
    clipPath: "url(#i62b08a-a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.79 11.797h-.436c-.803 0-1.43-.239-1.845-.73-.4-.472-.53-1.095-.538-1.713-.017-1.222.442-2.738.807-3.942.318-1.05.727-2.123 1.28-2.941.55-.816 1.309-1.472 2.335-1.472h5.708c.834 0 1.576.527 1.85 1.314l.435 1.25c.125.359.45.608.825.639h.435c.803 0 1.43.238 1.845.728.4.473.53 1.097.538 1.714.017 1.222-.442 2.739-.806 3.943-.318 1.05-.728 2.122-1.28 2.94-.55.816-1.31 1.472-2.336 1.472H5.9a1.96 1.96 0 0 1-1.85-1.314l-.435-1.249a.96.96 0 0 0-.825-.64Zm3.914-1.422a2 2 0 0 1-.173.418h.531a.96.96 0 0 0 .912-.666l.252-.786c.406-1.4.807-2.8 1.07-3.718q.063-.223.174-.418h-.532a.96.96 0 0 0-.912.666l-.251.786a942 942 0 0 0-1.07 3.718ZM4.42 11.797q.083.147.14.31l.435 1.25a.96.96 0 0 0 .905.642h.218c.373 0 .54-.114.627-.237.145-.205.28-.493.416-.875.122-.337.236-.72.363-1.149a2 2 0 0 1-.461.055H4.934l-.114.004zm6.761-7.595h.401a2 2 0 0 1-.14-.31l-.435-1.25a.96.96 0 0 0-.904-.643h-.219c-.373 0-.54.115-.627.237-.145.205-.279.494-.416.875-.121.338-.236.721-.363 1.149q.224-.054.461-.055h2.128z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "i62b08a-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h16v16H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCopilot16Filled);

export { ForwardRef as default };
