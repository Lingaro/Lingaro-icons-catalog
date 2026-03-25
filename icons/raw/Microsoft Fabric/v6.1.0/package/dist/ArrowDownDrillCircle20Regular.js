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
var SvgArrowDownDrillCircle20Regular = function SvgArrowDownDrillCircle20Regular(_a, ref) {
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
    d: "m10.5 10.293 2.147-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L9.5 10.293V5.5a.5.5 0 1 1 1 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.555 3.348a8 8 0 1 1 7.68 13.97l-.037.036-.014-.015-.122.052a8 8 0 0 1-6.246-.052l-.015.015-.038-.038A8.001 8.001 0 0 1 5.555 3.348M14.95 14.95q.442-.444.795-.95h-4.487l2.127 2.127a7 7 0 0 0 1.565-1.177M4.255 14a7 7 0 0 0 2.359 2.127L8.74 14zM10 17a7 7 0 0 0 2.415-.43l-2.416-2.415-2.415 2.415A7 7 0 0 0 10 17m-6.325-4h12.65a7 7 0 1 0-12.65 0"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgArrowDownDrillCircle20Regular);

export { ForwardRef as default };
