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
var SvgPurview48Filled = function SvgPurview48Filled(_a, ref) {
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
    d: "m34.373 20.553.003-.001a27 27 0 0 1 3.869 2.003c.18.112.397-.093.293-.276L29.79 6.976l-.001-.002c-2.583-4.473-9.034-4.472-11.615.002-2.324 4.03-3.828 8.285-3.872 12.99a.2.2 0 0 0 .271.187c6.473-2.417 13.57-2.204 19.797.401h.003Zm1.632 4.737q.058-.3.099-.6a.203.203 0 0 1 .303-.15 24.2 24.2 0 0 1 7.217 6.622h.004c.374.518.711 1.056 1.035 1.602l.89 1.544a6.96 6.96 0 0 1 .947 3.52c-.03 3.45-2.735 6.552-6.753 6.552h-.001l-2.765-.005a24.3 24.3 0 0 1-10.304-3.056.2.2 0 0 1-.03-.328c.45-.383.932-.832 1.418-1.317 1.388-1.387 2.916-3.17 3.975-4.76 1.86-2.792 3.33-6.31 3.965-9.624m-24.283-3.214a27 27 0 0 1-.044-3.052c.01-.212-.28-.3-.387-.116l-8.882 15.4c-2.583 4.478.647 10.072 5.808 10.072h17.725c.212 0 .282-.294.093-.392a26.8 26.8 0 0 1-9.273-8.057 26.8 26.8 0 0 1-5.04-13.855"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPurview48Filled);

export { ForwardRef as default };
