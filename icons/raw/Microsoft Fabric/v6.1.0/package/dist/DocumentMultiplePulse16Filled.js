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
var SvgDocumentMultiplePulse16Filled = function SvgDocumentMultiplePulse16Filled(_a, ref) {
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
    d: "M8 1v3.5q.001.264.085.5a1.5 1.5 0 0 0-1.422.827l-.504 1.01-.757-1.896A1.5 1.5 0 0 0 4 4V2.5A1.5 1.5 0 0 1 5.5 1zm7 5a1 1 0 0 0-1-1v6a3 3 0 0 1-3 3H6a1 1 0 0 0 1 1h4.21A3.79 3.79 0 0 0 15 11.21z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9.432 5.998.498.999h.57a1.5 1.5 0 0 1 0 2.999H9.005c-.338 0-.658-.113-.915-.312l-.74 1.481a1.5 1.5 0 0 1-2.734-.113L4 9.513V11.5A1.5 1.5 0 0 0 5.5 13h6.002a1.5 1.5 0 0 0 1.5-1.5V6H9.5q-.035 0-.068-.002M9 1.25V4.5a.5.5 0 0 0 .5.5h3.25z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.03 4.999a.5.5 0 0 1 .443.314l1.585 3.963 1.5-3.002a.5.5 0 0 1 .894 0l.86 1.723h1.189a.5.5 0 0 1 0 .999H9.004a.5.5 0 0 1-.447-.276l-.552-1.105-1.551 3.103a.5.5 0 0 1-.91-.037L3.959 6.716l-1 2.003a.5.5 0 0 1-.447.276H.499a.5.5 0 0 1 0-1h1.704l1.36-2.721a.5.5 0 0 1 .468-.276Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentMultiplePulse16Filled);

export { ForwardRef as default };
