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
var SvgPlanning24Item = function SvgPlanning24Item(_a, ref) {
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
    fill: "url(#i52087c-i1627b0-paint0_linear_65420_293)",
    d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i52087c-i1627b0-paint1_radial_65420_293)",
    fillOpacity: 0.2,
    d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i52087c-i1627b0-paint2_linear_65420_293)",
    fillRule: "evenodd",
    d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i52087c-i1627b0-paint3_linear_65420_293)",
    d: "M12 6c.428 0 .845.046 1.247.13l-.807.81q-.037.036-.07.075a5 5 0 1 0 4.614 4.614q.04-.032.076-.069l.808-.808A6 6 0 1 1 12 6"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i52087c-i1627b0-paint4_linear_65420_293)",
    d: "M12 9.5a2.5 2.5 0 1 0 2.5 2.5h1A3.5 3.5 0 1 1 12 8.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i52087c-i1627b0-paint5_linear_65420_293)",
    d: "M14.647 6.146a.5.5 0 0 1 .853.354v2h2a.5.5 0 0 1 .354.854l-1.5 1.5A.5.5 0 0 1 16 11h-2.293l-.742.741A.996.996 0 0 1 12 13a1 1 0 1 1 .258-1.966l.742-.741V8a.5.5 0 0 1 .146-.354z"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i52087c-i1627b0-paint0_linear_65420_293",
    x1: 7.556,
    x2: 10.085,
    y1: 2,
    y2: 22.239,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i52087c-i1627b0-paint1_radial_65420_293",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(10.5556 15.8333 -15.8333 5.9375 8.389 7.208)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i52087c-i1627b0-paint2_linear_65420_293",
    x1: 8.458,
    x2: 11.151,
    y1: 2,
    y2: 22.197,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i52087c-i1627b0-paint3_linear_65420_293",
    x1: 6,
    x2: 18,
    y1: 6,
    y2: 18,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#7751B8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#5A409C"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i52087c-i1627b0-paint4_linear_65420_293",
    x1: 6,
    x2: 18,
    y1: 6,
    y2: 18,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#7751B8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#5A409C"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i52087c-i1627b0-paint5_linear_65420_293",
    x1: 6,
    x2: 18,
    y1: 6,
    y2: 18,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#7751B8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#5A409C"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPlanning24Item);

export { ForwardRef as default };
