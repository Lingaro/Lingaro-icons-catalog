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
var SvgFabric28Regular = function SvgFabric28Regular(_a, ref) {
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
    d: "m6.745 12.098 15.867-2.345 1.681-6.137L9.727 5.769a2.81 2.81 0 0 0-2.248 2.027l-.002.005-1.196 4.389q.225-.05.464-.092m-.714-4.696-3.864 14.14a3.377 3.377 0 0 0 2.834 4.408 5.6 5.6 0 0 0 1.615-.024l2.768-.382a1.75 1.75 0 0 0 1.452-1.276l1.307-4.801 4.174-.61c.403-.061.728-.359.832-.746l1.717-6.288 4.307-.636c.384-.053.732-.452.83-.82l1.958-7.153a.957.957 0 0 0-1.043-1.207l-15.42 2.28A4.31 4.31 0 0 0 6.03 7.401Zm-.05 6.658c.2-.16.63-.387 1.648-.577l9.611-1.42-1.457 5.358-10.786 1.57-.011.003a7 7 0 0 0-.593.12l1.166-4.328c.146-.437.265-.6.422-.726m-2.48 8.534q.002-.354.119-.661c.085-.218.553-1.263 2.227-1.548l4.677-.681-1.135 4.17a.25.25 0 0 1-.21.184l-2.78.384a4.1 4.1 0 0 1-1.183.023l-.025-.003-.024-.003A1.877 1.877 0 0 1 3.5 22.594Z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgFabric28Regular);

export { ForwardRef as default };
