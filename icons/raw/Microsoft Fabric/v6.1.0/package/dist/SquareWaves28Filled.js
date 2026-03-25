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
var SvgSquareWaves28Filled = function SvgSquareWaves28Filled(_a, ref) {
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
    d: "M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h4.88a2.253 2.253 0 0 1 2.12-3.002c.373 0 .603-.108.821-.388a2 2 0 0 0 .128-.188q-.463.075-.949.076a2.253 2.253 0 0 1-2.25-2.25c0-1.24 1.009-2.25 2.25-2.25.373 0 .603-.108.821-.388.11-.141.183-.283.225-.378l.049-.117c.313-.972 1.164-1.603 2.123-1.617 1.028 0 1.894.641 2.185 1.593a3 3 0 0 0 .153.324c.042.072.095.155.155.237.23.308.394.332.456.34l.001.001.179-.002c.06-.01.218-.037.447-.343a2.5 2.5 0 0 0 .305-.562A2.24 2.24 0 0 1 23 14.498a2.28 2.28 0 0 1 2 1.22V6.75A3.75 3.75 0 0 0 21.25 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 17.153a4 4 0 0 1-.257.395c-.33.44-.781.823-1.41.924a2.1 2.1 0 0 1-.623.006c-.65-.09-1.116-.48-1.453-.93a4 4 0 0 1-.257-.395v.001a4 4 0 0 1-.279-.613l-.003-.011a.75.75 0 0 0-1.441.02l-.003.009-.018.054a3.3 3.3 0 0 1-.504.922c-.384.49-.996.963-2.002.963a.75.75 0 0 0 0 1.5c1.574 0 2.587-.777 3.183-1.537l.067-.089.056.076c.47.627 1.23 1.312 2.338 1.5a3.6 3.6 0 0 0 1.192.003c1.12-.183 1.885-.872 2.358-1.503l.056-.076q.032.045.067.089c.596.76 1.61 1.537 3.183 1.537a.75.75 0 1 0 0-1.5c-1.006 0-1.618-.473-2.002-.963a3.3 3.3 0 0 1-.505-.922l-.017-.054-.003-.009a.75.75 0 0 0-1.44-.02l-.004.011-.02.058a4 4 0 0 1-.259.556zm0 5a4 4 0 0 1-.257.395c-.33.44-.781.823-1.41.924a2.1 2.1 0 0 1-.623.006c-.65-.09-1.116-.48-1.453-.93a4 4 0 0 1-.257-.395v.001a4 4 0 0 1-.279-.613l-.003-.011a.75.75 0 0 0-1.441.02l-.003.009-.018.054a3.3 3.3 0 0 1-.504.922c-.384.49-.996.963-2.002.963a.75.75 0 0 0 0 1.5c1.574 0 2.587-.777 3.183-1.537l.067-.089.056.076c.47.627 1.23 1.312 2.338 1.5a3.6 3.6 0 0 0 1.192.003c1.12-.183 1.885-.872 2.358-1.503l.056-.076q.032.045.067.089c.596.76 1.61 1.537 3.183 1.537a.75.75 0 1 0 0-1.5c-1.006 0-1.618-.473-2.002-.963a3.3 3.3 0 0 1-.505-.922l-.017-.054-.003-.009a.75.75 0 0 0-1.44-.02l-.004.011-.02.058a4 4 0 0 1-.259.556z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareWaves28Filled);

export { ForwardRef as default };
