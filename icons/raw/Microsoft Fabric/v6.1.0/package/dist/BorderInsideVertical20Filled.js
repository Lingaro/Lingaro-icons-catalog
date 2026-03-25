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
var SvgBorderInsideVertical20Filled = function SvgBorderInsideVertical20Filled(_a, ref) {
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
    d: "M8.75 3a.75.75 0 0 0 0 1.5h.5v4.75h-.489a.75.75 0 1 0 0 1.5h.489v4.75h-.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-.5v-4.75h.523a.75.75 0 0 0 0-1.5h-.523V4.5h.5a.75.75 0 0 0 0-1.5zM5.453 4.603c-.387.151-.696.46-.849.846a.75.75 0 1 1-1.413-.492h-.005a3 3 0 0 1 1.77-1.77v.004a.75.75 0 1 1 .497 1.412m9.944.846a1.5 1.5 0 0 0-.938-.878.75.75 0 0 1 .586-1.38v-.005a3 3 0 0 1 1.77 1.77h-.005a.75.75 0 1 1-1.413.493M3.75 12a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v.5h.912a.75.75 0 0 1 0 1.5H4.5v.5a.75.75 0 0 1-.75.75m11.75-.75a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v.5h-.877a.75.75 0 0 0 0 1.5h.877zM5.453 15.398a1.5 1.5 0 0 1-.849-.846.75.75 0 1 0-1.413.492h-.005a3 3 0 0 0 1.77 1.77v-.004a.75.75 0 1 0 .497-1.412m9.944-.846a1.5 1.5 0 0 1-.938.878.75.75 0 0 0 .586 1.38v.005a3 3 0 0 0 1.77-1.77h-.005a.75.75 0 1 0-1.413-.493"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgBorderInsideVertical20Filled);

export { ForwardRef as default };
