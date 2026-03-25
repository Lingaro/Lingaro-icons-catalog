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
var SvgDataScience16Regular = function SvgDataScience16Regular(_a, ref) {
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
    d: "M7.583 14.972a.74.74 0 0 0 .482-.027l4.838-2.152a.5.5 0 0 0 .147-.098.57.57 0 0 0 .043-.776l-2.063-2.45 2.738-4.37.005-.009c.145-.242.219-.52.219-.8 0-.602-.345-1.172-.917-1.421l-.025-.012-4.664-1.733a1.7 1.7 0 0 0-1.256-.01L2.787 2.67a1 1 0 0 0-.395 1.622l2.534 3.877-2.508 2.623-.023.027a1.57 1.57 0 0 0 .118 2.13c.13.126.28.225.438.294zm-.415-1.222 5.747-9.174a.56.56 0 0 0 .077-.286.55.55 0 0 0-.317-.505l-4.652-1.73a.7.7 0 0 0-.548-.002L3.125 3.61l4.159 2.02c.25.147.426.41.426.734 0 .207-.07.394-.19.538L5.487 9.028l-2.323 2.43a.57.57 0 0 0 .043.771.5.5 0 0 0 .145.099l3.815 1.422Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataScience16Regular);

export { ForwardRef as default };
