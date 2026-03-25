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
var SvgToggleMultipleSparkles20Filled = function SvgToggleMultipleSparkles20Filled(_a, ref) {
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
    d: "m13.878.282.348 1.071a2.2 2.2 0 0 0 1.398 1.397l1.072.348.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.2 2.2 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.2 2.2 0 0 0-.532-.867 2.2 2.2 0 0 0-.866-.536l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.2 2.2 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0Zm4.905 7.931-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.407 2 10 2.15a1.4 1.4 0 0 0-.71.52c-.18.24-.28.53-.29.83a1.42 1.42 0 0 0 1 1.34l1.1.36a1 1 0 0 1 .4.23l.06.06c.112.107.2.237.26.38v.09L12.15 7c.09.258.25.486.46.66q.2.149.44.21a1.3 1.3 0 0 0-.05.63 1.3 1.3 0 0 0 .099.5H6.5a3.5 3.5 0 1 1 0-7zM6.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 7a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7zm7 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgToggleMultipleSparkles20Filled);

export { ForwardRef as default };
