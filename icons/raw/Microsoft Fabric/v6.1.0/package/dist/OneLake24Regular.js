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
var SvgOneLake24Regular = function SvgOneLake24Regular(_a, ref) {
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
    d: "M9.824 7.714A6.576 6.576 0 0 1 20.16 13.75c-1.305-1.07-3.544-1.237-5.017.255q-.531.539-1.062 1.018a15.4 15.4 0 0 1-2.841-3.835l-.365-.686c-.711-1.334-.915-1.717-1.05-2.79Zm8.503 12.02a10 10 0 0 0 .724-.672 8.07 8.07 0 0 0 2.478-7.589 8.07 8.07 0 0 0-4.622-5.76 4.36 4.36 0 0 0-1.228-2.385c-1.345-1.345-3.336-1.636-4.912-.857-.296.156-.673.4-.93.633a11.4 11.4 0 0 0-2.813 3.147 5.5 5.5 0 0 0-1.9.67c-1.79 1.034-2.78 2.932-2.769 4.901a9.8 9.8 0 0 0 .653 3.972c1.684 4.344 6.301 6.971 11.02 6.009a9.7 9.7 0 0 0 4.272-2.046l.014-.012zm-7.171-2.875c-1.153.226-2.173.249-3.071.117a9.98 9.98 0 0 1 .096-9.733c.248 1.34.8 2.877 1.732 4.646a17 17 0 0 0 3 4.088c-.638.46-1.238.78-1.757.882m6.193 1.738.007-.007.008-.006q.488-.41.906-.886a7 7 0 0 0 1.32-2.364c-.656-.982-2.364-1.303-3.38-.274-.735.746-1.516 1.463-2.282 2.033-.734.545-1.596 1.064-2.483 1.238-2.04.4-3.784.245-5.23-.287a8.23 8.23 0 0 0 7.513 2.289 8.2 8.2 0 0 0 3.613-1.73z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgOneLake24Regular);

export { ForwardRef as default };
