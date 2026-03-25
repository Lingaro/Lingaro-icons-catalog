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
var SvgGraphModelInstance24Item = function SvgGraphModelInstance24Item(_a, ref) {
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
    fill: "url(#id1feea-ifde2ac-paint0_linear_62220_690)",
    d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#id1feea-ifde2ac-paint1_radial_62220_690)",
    fillOpacity: 0.2,
    d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#id1feea-ifde2ac-paint2_linear_62220_690)",
    fillRule: "evenodd",
    d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#6748A8",
    fillRule: "evenodd",
    d: "M12 4.5c.799 0 1.45.624 1.496 1.411l3.18 1.836a1.5 1.5 0 1 1 .541 2.725l-.929 1.585.902 1.475q.15-.031.31-.032a1.5 1.5 0 1 1-.824 2.752l-3.18 1.837a1.498 1.498 0 0 1-2.992-.001l-3.179-1.836a1.5 1.5 0 1 1-.514-2.72l.902-1.475-.929-1.585a1.5 1.5 0 1 1 .541-2.725l3.18-1.836A1.5 1.5 0 0 1 12 4.5M7.98 14.76q.019.119.02.24-.001.235-.068.448l2.677 1.546-1.63-2.778zm5.414 2.233 2.675-1.544a1.5 1.5 0 0 1-.047-.688l-1-.545zm-3.536-3.256 1.642 2.801v-3.125a1.5 1.5 0 0 1-.5-.299zm3.144-.624c-.145.13-.314.234-.502.3v3.125l1.643-2.802zm-5.1.554.572-.312-.187-.319zm7.625-.313.573.313-.386-.632zM8.88 12.066l.474.809 1.168-.638A1.5 1.5 0 0 1 10.5 12q.001-.143.026-.276l-1.064-.612zm4.61-.248a1.5 1.5 0 0 1-.009.418l1.168.638.474-.808-.537-.878zm-5.184-.73.29-.475-.858-.493zm7.147-.398.244.398.477-.813zm-3.14-3.223a1.5 1.5 0 0 1-.622 0l-1.707 2.792 1.045.6a1.494 1.494 0 0 1 2.014.063l1.021-.588zm.852-.523 1.767 2.892 1.086-.625a1.5 1.5 0 0 1 .053-.661l-2.868-1.655zM7.932 8.551A1.5 1.5 0 0 1 8 9q0 .058-.006.114l1.122.646 1.72-2.815-.037-.05z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "id1feea-ifde2ac-paint0_linear_62220_690",
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
    id: "id1feea-ifde2ac-paint1_radial_62220_690",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(56.31 -2.54 11.442)scale(19.0293 16.4677)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "id1feea-ifde2ac-paint2_linear_62220_690",
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
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgGraphModelInstance24Item);

export { ForwardRef as default };
