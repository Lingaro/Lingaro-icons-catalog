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
var SvgNotebookCode24Regular = function SvgNotebookCode24Regular(_a, ref) {
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
    d: "M9.605 8.674a.75.75 0 0 0-1.061-1.06L7.259 8.899a.85.85 0 0 0 0 1.202l1.285 1.285a.75.75 0 0 0 1.06-1.06L8.78 9.5zm3.822 2.712a.75.75 0 0 1 0-1.06l.825-.826-.825-.826a.75.75 0 0 1 1.06-1.06l1.286 1.285a.85.85 0 0 1 0 1.202l-1.286 1.285a.75.75 0 0 1-1.06 0m-.505-4.416a.75.75 0 0 0-1.456-.364l-1.355 5.425a.75.75 0 1 0 1.455.363z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M18.999 4.25A2.25 2.25 0 0 0 16.749 2H6.25A2.25 2.25 0 0 0 4 4.25v15.5A2.25 2.25 0 0 0 6.25 22h10.499a2.25 2.25 0 0 0 2.25-2.25zM6.25 3.5h10.499a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75V4.25a.75.75 0 0 1 .75-.75",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.75 15.002H20V18h.75l.102-.007a.75.75 0 0 0 .648-.743v-1.498l-.007-.102a.75.75 0 0 0-.743-.648m0-4H20V14h.75l.102-.007a.75.75 0 0 0 .648-.743v-1.498l-.007-.102a.75.75 0 0 0-.743-.648m0-4H20V10h.75l.102-.007a.75.75 0 0 0 .648-.743V7.752l-.007-.102a.75.75 0 0 0-.743-.648"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgNotebookCode24Regular);

export { ForwardRef as default };
