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
var SvgDataWarehouse20Filled = function SvgDataWarehouse20Filled(_a, ref) {
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
    d: "m17.755 7.184-7.411-4.58a.66.66 0 0 0-.656-.011A8030 8030 0 0 1 2.32 7.137a.67.67 0 0 0-.316.567v1.579l5.12-3.162a1.67 1.67 0 0 1 1.758.004l5.313 3.28c.488.293.805.825.805 1.426v5.156a1.498 1.498 0 0 0 2.996 0h.002L18 7.7a.66.66 0 0 0-.245-.516M2.004 12.413v-1.654a.67.67 0 0 1 .32-.499l5.324-3.287a.67.67 0 0 1 .704 0l5.324 3.287a.66.66 0 0 1 .324.571v5.156c0 .564.188 1.084.503 1.502H12v-.004a1 1 0 0 1-1-.997v-2.53c0-.6-.32-1.129-.799-1.42l-3.318-2.047a1.67 1.67 0 0 0-1.758-.004zM10 16.488c0 .363.097.704.267.997l.002.004H4.031L4 17.485a1.995 1.995 0 0 1-1.996-1.993V13.89a.68.68 0 0 1 .312-.495l3.332-2.056a.67.67 0 0 1 .704 0S8.168 12.46 9.68 13.39c.192.116.32.328.32.568z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataWarehouse20Filled);

export { ForwardRef as default };
