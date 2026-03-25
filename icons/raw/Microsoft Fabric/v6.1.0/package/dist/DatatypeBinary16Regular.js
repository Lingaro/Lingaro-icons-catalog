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
var SvgDatatypeBinary16Regular = function SvgDatatypeBinary16Regular(_a, ref) {
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
    d: "M5.504 4.001c-.935 0-1.597.437-1.996 1.13-.376.653-.504 1.507-.504 2.37s.128 1.717.504 2.37c.399.693 1.061 1.13 1.996 1.13S7.1 10.564 7.5 9.871c.376-.653.504-1.507.504-2.37s-.128-1.717-.504-2.37C7.1 4.437 6.439 4 5.504 4Zm-1.5 3.5c0-.794.122-1.44.37-1.872.227-.393.565-.628 1.13-.628s.903.235 1.13.628c.248.432.37 1.079.37 1.872s-.122 1.44-.37 1.872c-.227.393-.565.628-1.13.628s-.903-.235-1.13-.628c-.248-.432-.37-1.079-.37-1.872m7.732-3.441a.5.5 0 0 1 .264.441v6a.5.5 0 0 1-1 0V5.435l-.723.482a.5.5 0 1 1-.554-.832l1.5-1a.5.5 0 0 1 .513-.025"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeBinary16Regular);

export { ForwardRef as default };
