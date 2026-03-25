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
var SvgDocumentMultipleDax20Regular = function SvgDocumentMultipleDax20Regular(_a, ref) {
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
    d: "M4 4.001a2 2 0 0 1 2-2h3.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 15 7.415v6.586a2 2 0 0 1-1.76 1.986l-.365-.486.404-.54a1 1 0 0 0 .721-.96v-6h-3.5a1.5 1.5 0 0 1-1.5-1.5v-3.5H6a1 1 0 0 0-1 1v8.997L4.646 14A3.5 3.5 0 0 0 4 13.068zm6-.793v3.293a.5.5 0 0 0 .5.5h3.293z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.985 17.713q-.014.096-.04.188A3.94 3.94 0 0 0 17 14.061v-5.06a1 1 0 0 0-1-1v6a3 3 0 0 1-2.137 2.874c.12.26.163.55.122.838M.146 13.147a.5.5 0 0 1 .354-.146h1a2.5 2.5 0 0 1 0 5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .146-.354m.854.854v3h.5a1.5 1.5 0 0 0 0-3zm5.5-1.25a.5.5 0 0 1 .471.334l1.5 4.25a.5.5 0 1 1-.943.332l-.236-.666H5.706l-.235.666a.5.5 0 1 1-.943-.332l1.5-4.25a.5.5 0 0 1 .471-.334Zm0 2-.44 1.25h.88zm6.495-1.321a.5.5 0 0 0-.895-.229L11 14.668l-1.1-1.467a.5.5 0 1 0-.8.6l1.274 1.7-1.274 1.7a.5.5 0 1 0 .8.6l1.1-1.466 1.1 1.466a.5.5 0 0 0 .8-.6l-1.276-1.7 1.276-1.7a.5.5 0 0 0 .095-.37Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentMultipleDax20Regular);

export { ForwardRef as default };
