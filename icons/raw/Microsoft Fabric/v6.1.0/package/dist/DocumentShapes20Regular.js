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
var SvgDocumentShapes20Regular = function SvgDocumentShapes20Regular(_a, ref) {
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
    d: "M12.646 13.316a2.25 2.25 0 1 0-2.236-3.873l.506.877a1.25 1.25 0 1 1 1.224 2.12zM9 9.501a.5.5 0 0 1 .433.25l2.598 4.5a.5.5 0 0 1-.433.75H6.402a.5.5 0 0 1-.433-.75l2.598-4.5A.5.5 0 0 1 9 9.501m-1.732 4.5h3.464l-1.732-3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 8.126v7.875c.002.266-.05.529-.156.773a2.1 2.1 0 0 1-.43.641 1.9 1.9 0 0 1-.633.43c-.248.1-.513.154-.78.156H6a1.9 1.9 0 0 1-.774-.156 2.1 2.1 0 0 1-.64-.43 1.9 1.9 0 0 1-.43-.633A2.1 2.1 0 0 1 4 16.001v-12a1.9 1.9 0 0 1 .156-.773c.103-.238.249-.455.43-.641.179-.186.395-.332.633-.43.248-.1.513-.154.781-.156h3.875c.263 0 .523.05.766.148.244.099.465.248.648.438l4.125 4.125c.186.185.332.405.43.648.099.244.152.503.156.766m-1 7.875V8.063a.3.3 0 0 0-.008-.062H12a1.9 1.9 0 0 1-.773-.156 2.1 2.1 0 0 1-.64-.43 1.9 1.9 0 0 1-.43-.633A2.1 2.1 0 0 1 10 6.001V3.009a.3.3 0 0 0-.062-.008H6a.97.97 0 0 0-.703.289 1.1 1.1 0 0 0-.219.32.86.86 0 0 0-.078.391v12a1 1 0 0 0 .078.391q.079.178.211.32a.85.85 0 0 0 .313.211q.192.074.398.078h8a.97.97 0 0 0 .703-.289 1.1 1.1 0 0 0 .22-.32.86.86 0 0 0 .077-.391m-.7-9-3.3-3.3v2.3a1 1 0 0 0 .078.391q.078.178.211.32a.85.85 0 0 0 .313.211q.192.074.398.078z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentShapes20Regular);

export { ForwardRef as default };
