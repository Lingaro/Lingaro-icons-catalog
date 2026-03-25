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
var SvgScriptKql24Regular = function SvgScriptKql24Regular(_a, ref) {
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
    d: "M19.8 2.008V2H7.75A3.25 3.25 0 0 0 4.5 5.25V15.5H2.75A1.75 1.75 0 0 0 1 17.25v1.825C1 20.765 2.377 22 4 22h7.061a2.24 2.24 0 0 1 .29-1.5H4c-.862 0-1.5-.63-1.5-1.425V17.25a.25.25 0 0 1 .25-.25h8.148q.117-.166.263-.31l.707-.707c.18-.177.39-.322.619-.429l-.02-.03a1.3 1.3 0 0 0-.24-.024H6V5.25c0-.966.784-1.75 1.75-1.75h9.676a2.97 2.97 0 0 0-.394 1.484v7.483l1.5-.012V8.5h3.264C22.46 8.5 23 7.96 23 7.295v-2.31a2.984 2.984 0 0 0-3.2-2.977m1.7 2.976V7h-2.968V4.984a1.484 1.484 0 1 1 2.968 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14.155 13.99 6.32-.05a.5.5 0 0 1 .502.505l-.047 6.32a.5.5 0 0 1-.854.35l-6.27-6.272a.5.5 0 0 1 .35-.853Zm1.535 4.835a.75.75 0 0 1 .244 1.224l-2.122 2.12a.75.75 0 0 1-1.06-1.06l2.12-2.121a.75.75 0 0 1 .818-.163m-1.702-.72-.707.707a.75.75 0 0 1-1.06-1.061l.707-.707a.75.75 0 0 1 1.06 1.06Zm2.12 3.535.707-.707a.751.751 0 0 1 1.281.53.75.75 0 0 1-.22.53l-.707.707a.75.75 0 0 1-1.06-1.06Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgScriptKql24Regular);

export { ForwardRef as default };
