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
var SvgToggleMultipleSparkles16Filled = function SvgToggleMultipleSparkles16Filled(_a, ref) {
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
    d: "m10.878.282.348 1.071a2.2 2.2 0 0 0 1.398 1.397l1.072.348.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.2 2.2 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.348-1.07a2.2 2.2 0 0 0-1.399-1.403l-1.072-.348a.423.423 0 0 1 0-.798l1.072-.348a2.2 2.2 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0Zm4.905 7.931-.765-.248a1.58 1.58 0 0 1-1-.999l-.248-.764a.302.302 0 0 0-.57 0l-.25.764a1.58 1.58 0 0 1-.983.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.49 1.47A1.2 1.2 0 0 0 8.78 1H5a3 3 0 0 0 0 6h4.15l-.33-1.04v-.09a1.1 1.1 0 0 0-.26-.38l-.06-.06a1 1 0 0 0-.4-.23L7 4.84A1.42 1.42 0 0 1 6 3.5c.01-.3.11-.59.29-.83A1.4 1.4 0 0 1 7 2.15l1.03-.38a1.4 1.4 0 0 0 .46-.3M6 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 4.5a1.3 1.3 0 0 1 .014-.5H5a3 3 0 0 0 0 6h6a3 3 0 0 0 2.845-2.047 1.3 1.3 0 0 1-1.095-.193 1.35 1.35 0 0 1-.49-.65l-.24-.76a.6.6 0 0 0-.14-.23.7.7 0 0 0-.22-.14l-.79-.25a1.3 1.3 0 0 1-.63-.48A1.26 1.26 0 0 1 10 8.5m1 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgToggleMultipleSparkles16Filled);

export { ForwardRef as default };
