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
var SvgTableKql20Filled = function SvgTableKql20Filled(_a, ref) {
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
    d: "M15.035 17.34a.5.5 0 0 1 .354.853l-.707.707a.5.5 0 0 1-.55.116.5.5 0 0 1-.269-.66.5.5 0 0 1 .112-.163l.707-.707a.5.5 0 0 1 .353-.146m-1.413-1.414a.5.5 0 0 1 .354.853L11.854 18.9a.503.503 0 0 1-.816-.162.5.5 0 0 1 .108-.545l2.123-2.12a.5.5 0 0 1 .353-.147M17.5 12a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.854.354l-5-5A.5.5 0 0 1 12.5 12zM7 17H5.5A2.5 2.5 0 0 1 3 14.5V13h4zm4.087-4a1.5 1.5 0 0 0 .353.562l.105.105q-.22.107-.397.282l-.708.708a1.5 1.5 0 0 0-.432.912l-.008.149.008.148A1.5 1.5 0 0 0 10.725 17H8v-4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.208 14.51a.5.5 0 0 1 .354.854l-.707.708a.501.501 0 0 1-.709-.708l.708-.707a.5.5 0 0 1 .354-.146ZM7 12H3V8h4zm5-.911q-.124.043-.24.106l-.094.058a1.5 1.5 0 0 0-.506.573l-.047.1q-.015.038-.026.074H8V8h4zM17 11h-4V8h4zM7 7H3V5.5A2.5 2.5 0 0 1 5.5 3H7zm5 0H8V3h4zm2.5-4A2.5 2.5 0 0 1 17 5.5V7h-4V3z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTableKql20Filled);

export { ForwardRef as default };
