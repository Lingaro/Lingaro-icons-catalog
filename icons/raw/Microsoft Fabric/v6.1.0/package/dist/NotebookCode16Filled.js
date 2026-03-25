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
var SvgNotebookCode16Filled = function SvgNotebookCode16Filled(_a, ref) {
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
    d: "M2 2.75C2 1.784 2.784 1 3.75 1h7.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 11.25 15h-7.5A1.75 1.75 0 0 1 2 13.25zm6.482 2.558a.5.5 0 1 0-.97-.241l-.953 3.828a.5.5 0 1 0 .97.241zm.665.24a.5.5 0 0 0-.001.708l.649.652-.65.652a.5.5 0 0 0 .71.705l.93-.934a.6.6 0 0 0 0-.846l-.93-.934a.5.5 0 0 0-.708-.002Zm-3.293.8a.5.5 0 0 0-.708-.705l-.93.934a.6.6 0 0 0 0 .847l.93.934a.5.5 0 0 0 .708-.706L5.205 7l.65-.652ZM14.625 4H14v2h.625A.375.375 0 0 0 15 5.625v-1.25A.375.375 0 0 0 14.625 4M14 7h.625c.207 0 .375.168.375.375v1.25a.375.375 0 0 1-.375.375H14zm.625 3H14v2h.625a.375.375 0 0 0 .375-.375v-1.25a.375.375 0 0 0-.375-.375"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgNotebookCode16Filled);

export { ForwardRef as default };
