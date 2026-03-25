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
var SvgDataScience28Regular = function SvgDataScience28Regular(_a, ref) {
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
    d: "m5.954 22.806 7.682 3.152c.262.072.538.054.787-.05l8.064-3.674a.8.8 0 0 0 .244-.169.993.993 0 0 0 .073-1.324l-3.501-4.258 4.492-7.51.007-.011c.221-.38.334-.81.334-1.246 0-.93-.52-1.832-1.416-2.232l-.014-.007-7.7-3.256L15 2.219a2.7 2.7 0 0 0-1.043-.215c-.372 0-.71.079-1.002.192l-7.548 2.97a1.5 1.5 0 0 0-.95 1.342c-.016.437.218.774.464 1.14L9.294 14.5 5.09 19.01c-.786.97-.732 2.43.183 3.327.2.2.432.358.68.47Zm12.337-7.553 4.216-7.05a.96.96 0 0 0 .128-.487c0-.387-.215-.723-.528-.863l-7.693-3.254a1.2 1.2 0 0 0-.456-.095c-.16 0-.313.034-.457.09L5.957 6.563l7.131 3.423a1.44 1.44 0 0 1 .744 1.272c0 .353-.118.673-.318.92l-3.387 3.627-3.871 4.148a.993.993 0 0 0 .072 1.317.8.8 0 0 0 .24.169l6.435 2.654z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataScience28Regular);

export { ForwardRef as default };
