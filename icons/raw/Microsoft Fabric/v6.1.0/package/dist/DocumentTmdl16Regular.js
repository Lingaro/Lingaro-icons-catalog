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
var SvgDocumentTmdl16Regular = function SvgDocumentTmdl16Regular(_a, ref) {
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
    d: "M5 1a2 2 0 0 0-2 2v6.085a1.5 1.5 0 0 1 .5.297 1.5 1.5 0 0 1 .5-.296V3a1 1 0 0 1 1-1h3v2.5A1.5 1.5 0 0 0 9.5 6H12v3.992l.066.067c.14-.454.488-.816.934-.974v-3.67a1.5 1.5 0 0 0-.44-1.061L9.647 1.439A1.5 1.5 0 0 0 8.586 1zm6.793 4H9.5a.5.5 0 0 1-.5-.5V2.207zM0 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H2v3.5a.5.5 0 0 1-1 0V11H.5a.5.5 0 0 1-.5-.5m14 0a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H14zm-9.59-.492a.5.5 0 0 1 .558.317L6 13.075l1.032-2.752A.5.5 0 0 1 8 10.5v4a.5.5 0 1 1-1 0v-1.243l-.532 1.419a.5.5 0 0 1-.936 0L5 13.257V14.5a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .41-.492M9 10.5a.5.5 0 0 1 .5-.5h.1a2.4 2.4 0 0 1 2.4 2.4v.2A2.4 2.4 0 0 1 9.6 15h-.1a.5.5 0 0 1-.5-.5zm1 .558v2.884a1.4 1.4 0 0 0 1-1.342v-.2a1.4 1.4 0 0 0-1-1.342"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentTmdl16Regular);

export { ForwardRef as default };
