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
var SvgDocumentPq24Regular = function SvgDocumentPq24Regular(_a, ref) {
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
    d: "M18.5 20.001a.5.5 0 0 1-.5.5h-1.887c.06.527-.105 1.05-.356 1.5H18a2 2 0 0 0 2-2V9.829a2 2 0 0 0-.586-1.414l-5.829-5.828a.4.4 0 0 0-.049-.04l-.036-.03a2 2 0 0 0-.219-.18 1 1 0 0 0-.08-.044l-.048-.024-.05-.029c-.054-.031-.109-.063-.166-.087a2 2 0 0 0-.624-.138l-.059-.007a1 1 0 0 0-.082-.007H6a2 2 0 0 0-2 2v8.5h.7q.404 0 .8.085V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10Zm-5-15.379 3.878 3.879H14a.5.5 0 0 1-.5-.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.25 14.001h1.5a2.251 2.251 0 0 1 1.591 3.842 2.25 2.25 0 0 1-1.591.658H4v2.25a.749.749 0 1 1-1.5 0v-6a.75.75 0 0 1 .75-.75m.75 3h.75a.749.749 0 1 0 0-1.5H4zm6.75-2.998a3 3 0 0 0-3 3v1.5a3 3 0 0 0 4.874 2.343l.676.507a.75.75 0 0 0 .9-1.2l-.676-.507a3 3 0 0 0 .226-1.143v-1.5a3 3 0 0 0-3-3m.45 3.9a.75.75 0 1 0-.9 1.2l1.04.78a1.5 1.5 0 0 1-2.09-1.38v-1.5a1.5 1.5 0 0 1 3 0v1.5q0 .09-.01.18z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentPq24Regular);

export { ForwardRef as default };
