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
var SvgGraphModelInstance20Item = function SvgGraphModelInstance20Item(_a, ref) {
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
    fill: "url(#i47bbff-i0b2560-paint0_linear_62220_710)",
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h11A2.5 2.5 0 0 1 18 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 15.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i47bbff-i0b2560-paint1_radial_62220_710)",
    fillOpacity: 0.2,
    d: "M2 4.5A2.5 2.5 0 0 1 4.5 2h11A2.5 2.5 0 0 1 18 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 15.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i47bbff-i0b2560-paint2_linear_62220_710)",
    fillRule: "evenodd",
    d: "M15.5 3h-11A1.5 1.5 0 0 0 3 4.5v11A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 15.5 3m-11-1A2.5 2.5 0 0 0 2 4.5v11A2.5 2.5 0 0 0 4.5 18h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 15.5 2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i47bbff-i0b2560-paint3_linear_62220_710)",
    fillRule: "evenodd",
    d: "M10 3.75a1.25 1.25 0 0 1 .667.194l.017.01c.325.213.542.573.562.985l2.596 1.499.013-.008q.06-.036.12-.064L14 6.354q.068-.03.14-.05.021-.007.044-.012a1 1 0 0 1 .114-.024l.045-.007a1.25 1.25 0 1 1-.004 2.478l-.857 1.429.763 1.357a1.255 1.255 0 0 1 1.506 1.225 1.25 1.25 0 0 1-1.498 1.225l-.053-.013a1.2 1.2 0 0 1-.545-.293l-2.408 1.39a1.25 1.25 0 0 1-.562.986l-.02.012-.081.048-.047.022q-.027.014-.056.025-.09.038-.187.06l-.049.014a1.3 1.3 0 0 1-.49 0l-.048-.013a1.2 1.2 0 0 1-.371-.156l-.02-.012a1.3 1.3 0 0 1-.16-.126l-.025-.023-.056-.058-.023-.025-.056-.072-.015-.02a1.3 1.3 0 0 1-.106-.18l-.013-.028a1.2 1.2 0 0 1-.108-.453l-2.41-1.391a1.24 1.24 0 0 1-.486.277l-.034.01A1.3 1.3 0 0 1 5.5 14a1.25 1.25 0 1 1 .255-2.475l.764-1.356-.859-1.43a1.25 1.25 0 1 1-.003-2.478l.043.007q.07.01.136.029l.016.004q.078.023.152.055l.01.005q.07.032.135.073l.008.003L8.753 4.94v-.007q.01-.18.066-.341l.008-.02q.058-.157.152-.293l.016-.02q.027-.037.056-.071.01-.014.023-.026.027-.03.056-.058l.03-.028.056-.049.04-.03.06-.042.019-.012q.034-.022.07-.042l.015-.007q.021-.011.043-.02a1.2 1.2 0 0 1 .305-.1Q9.88 3.75 10 3.75m-3.297 8.666.003.014q.016.06.025.126l.007.042q.01.075.011.151l2.016 1.163-1.243-2.07zm4.53 1.496 2.017-1.163v-.006q0-.04.004-.079l-.866-.675zm-2.89-2.643L9.5 13.195v-2.3a1 1 0 0 1-.14-.074l-.016-.01-.041-.029a1 1 0 0 1-.124-.094l-.003-.003zm2.427-.538a1.2 1.2 0 0 1-.27.164v2.3l1.093-1.824zm.494-.882.846.66.214-.357-.389-.69zm-3.59.303.154.257.848-.595-.615-.353zm-.592-.986.113-.202-.358-.206zm5.72-.202.114.201.244-.407zm-4.25-.374.535.307a1.246 1.246 0 0 1 1.825 0l.533-.307-1.32-2.347a1.3 1.3 0 0 1-.253 0zM6.727 7.263q.022.115.023.237 0 .026-.003.053l.939.539 1.153-2.05zm5.586.829.939-.54-.002-.052q0-.122.023-.237L11.159 6.04z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i47bbff-i0b2560-paint0_linear_62220_710",
    x1: 6.444,
    x2: 8.468,
    y1: 2,
    y2: 18.192,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i47bbff-i0b2560-paint1_radial_62220_710",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(56.31 -2.206 9.727)scale(15.2234 13.1741)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i47bbff-i0b2560-paint2_linear_62220_710",
    x1: 7.167,
    x2: 9.321,
    y1: 2,
    y2: 18.157,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i47bbff-i0b2560-paint3_linear_62220_710",
    x1: 4.25,
    x2: 16.707,
    y1: 3.75,
    y2: 15.21,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#7751B8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#5A409C"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgGraphModelInstance20Item);

export { ForwardRef as default };
