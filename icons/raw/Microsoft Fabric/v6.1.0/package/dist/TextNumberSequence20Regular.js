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
var SvgTextNumberSequence20Regular = function SvgTextNumberSequence20Regular(_a, ref) {
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
    d: "M7.443 2a.5.5 0 0 1 .464.333l1.774 5a.5.5 0 1 1-.942.334L8.502 7H6.23l-.264.68a.5.5 0 0 1-.932-.36l1.935-5A.5.5 0 0 1 7.443 2m-.826 4h1.53l-.732-2.062zm.826 5a.5.5 0 0 1 .464.333l1.774 5a.5.5 0 1 1-.942.334L8.502 16H6.23l-.264.68a.5.5 0 0 1-.932-.36l1.935-5a.5.5 0 0 1 .474-.32m-.826 4h1.53l-.732-2.062zm4.883-2.136c0-.443.37-.864.835-.864.336 0 .614.158.752.37.123.188.182.494-.07.922-.122.208-.304.39-.543.578a9 9 0 0 1-.383.282l-.057.04c-.117.083-.241.17-.361.26-.566.427-1.173 1.011-1.173 2.048a.5.5 0 0 0 .5.5h2.693a.5.5 0 1 0 0-1h-2.096c.122-.282.355-.505.677-.748q.153-.114.32-.231l.015-.01.06-.042c.137-.098.283-.202.425-.314.282-.223.573-.495.785-.856.416-.708.404-1.425.046-1.975-.343-.527-.955-.824-1.59-.824-1.088 0-1.835.943-1.835 1.864a.5.5 0 1 0 1 0m.005-8.609q-.275.271-.587.48a.5.5 0 0 1-.555-.833c.6-.4 1.05-1.04 1.153-1.509a.5.5 0 0 1 .989.107v5a.5.5 0 1 1-1 0zM14 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .799.401c-.202.666-.502 1.095-.653 1.245a.5.5 0 0 0 .708.708C14.783 9.424 15.5 8.23 15.5 6.5A.5.5 0 0 0 15 6z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTextNumberSequence20Regular);

export { ForwardRef as default };
