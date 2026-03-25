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
var SvgFabric16Filled = function SvgFabric16Filled(_a, ref) {
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
    fillRule: "evenodd",
    d: "m3.813 6.181 9.836-1.427h.003a.54.54 0 0 0 .446-.395l.88-2.677a.54.54 0 0 0-.554-.68l-.033.001-8.928 1.283c-.942.148-1.723.605-2.045 1.767l-.727 2.7c.11-.402.344-.442 1.122-.572m.301.996c-1.15.239-1.58.623-1.832 1.185a3 3 0 0 0-.117.312l-.579 2.142c.322-.18.776-.307 1.252-.385h.007l6.478-.95c.562-.093.715-.663.83-1.09l.509-2.187-6.356.94zm-1.22 4.257c-1.244.202-1.686 1.033-1.784 1.284q-.11.286-.111.61c0 .889.664 1.549 1.527 1.644q.361.054.826-.013l1.415-.196a.9.9 0 0 0 .742-.653l.928-3.195z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFabric16Filled);

export { ForwardRef as default };
