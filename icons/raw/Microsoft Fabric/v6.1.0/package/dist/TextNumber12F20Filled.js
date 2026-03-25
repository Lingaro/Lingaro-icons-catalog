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
var SvgTextNumber12F20Filled = function SvgTextNumber12F20Filled(_a, ref) {
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
    d: "M8.76 13.504a.75.75 0 0 1-.734-.6c-.013-.062-.103-.545.153-1.168.258-.628.854-1.364 2.152-1.95.643-.29.924-.561 1.053-.783.127-.217.13-.42.128-.656a.9.9 0 0 0-.95-.843h-.034a.98.98 0 0 0-.951.528.75.75 0 0 1-1.396-.55l.004-.01a2.45 2.45 0 0 1 2.362-1.468 2.33 2.33 0 0 1 2.463 2.241v.014c.004.321.008.821-.257 1.355-.27.543-.8 1.087-1.804 1.542l-.012.005-.013.005a2.4 2.4 0 0 0-1.163.838h2.5a.75.75 0 0 1 0 1.5h-3.5Zm-1.016-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M4.147 8.382l.34-.226v4.598a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.165-.624l-1.5 1-.006.004a.75.75 0 0 0 .831 1.248M14.22 6.224a.75.75 0 0 1 .53-.22h3a.75.75 0 1 1 0 1.5H15.5v1.5h1.25a.75.75 0 1 1 0 1.5H15.5v2.25a.75.75 0 1 1-1.5 0v-6a.75.75 0 0 1 .22-.53"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTextNumber12F20Filled);

export { ForwardRef as default };
