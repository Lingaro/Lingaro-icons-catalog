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
var SvgReceiptKql24Regular = function SvgReceiptKql24Regular(_a, ref) {
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
    d: "M6.178 4a2.25 2.25 0 0 0-2.25 2.25v7.233l1.5-.011V6.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75V19H11.45l-.012 1.5h5.74a3.25 3.25 0 0 0 3.25-3.25V14h-3.5V6.25A2.25 2.25 0 0 0 14.678 4zm11 15h-.25v-3.5h2v1.75a1.75 1.75 0 0 1-1.75 1.75"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.475 14.94a.5.5 0 0 1 .504.505l-.048 6.32a.5.5 0 0 1-.854.35L7.462 20.5H7.46l-3.532-3.532v-.002l-1.123-1.123a.5.5 0 0 1 .35-.854l6.32-.048ZM7.678 8a.75.75 0 1 0 0 1.5h5.5a.75.75 0 1 0 0-1.5zm-.75 4.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m-1.995 8.799a.75.75 0 0 0-1.06-1.06l-2.122 2.12a.75.75 0 1 0 1.06 1.061zm-1.946-1.944a.75.75 0 0 0-1.06-1.061l-.707.707a.75.75 0 0 0 1.06 1.06zm3.889 2.828a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 0 1-1.06-1.06l.706-.708a.75.75 0 0 1 1.061 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgReceiptKql24Regular);

export { ForwardRef as default };
