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
var SvgDataTree20Regular = function SvgDataTree20Regular(_a, ref) {
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
    d: "M4 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.983l2.312 1.53c.234-.348.579-.638.965-.859C11.998 5.241 12.962 5 14 5s2 .24 2.723.652C17.43 6.056 18 6.69 18 7.5v5.135h-.005c-.06.745-.604 1.333-1.272 1.714-.722.413-1.686.652-2.723.652s-2.001-.24-2.723-.652c-.387-.221-.732-.511-.966-.86L8 15.017V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 .512.141L10 12.495V10.5H6v.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v.5h4V7.505L7.512 5.86A1 1 0 0 1 7 6H5a1 1 0 0 1-1-1zm1 0v2h2V3zm6 9.5c0 .296.214.661.773.98.545.312 1.331.52 2.227.52s1.682-.208 2.227-.519c.559-.32.773-.684.773-.98V9.174a4 4 0 0 1-.277.175c-.722.413-1.686.652-2.723.652-1.038 0-2.002-.241-2.723-.654A4 4 0 0 1 11 9.17zM3 11h2V9H3zm8.774-4.478c-.56.32-.774.686-.774.978 0 .293.214.659.774.979.545.312 1.33.521 2.226.521s1.682-.208 2.227-.519c.559-.32.773-.684.773-.98 0-.297-.214-.662-.773-.981C15.682 6.209 14.896 6 14 6s-1.681.21-2.226.522M5 17h2v-2H5z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataTree20Regular);

export { ForwardRef as default };
