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
var SvgKqlQueryset20Item = function SvgKqlQueryset20Item(_a, ref) {
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#i414497-a)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "i414497-b",
    width: 20,
    height: 20,
    x: 0,
    y: 0,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: "luminance"
    }
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M20 0H0v20h20z"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#i414497-b)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "url(#i414497-c)",
    d: "M5 5.5A2.5 2.5 0 0 1 7.5 3h8A2.5 2.5 0 0 1 18 5.5V14a5 5 0 0 1-5 5H7.5A2.5 2.5 0 0 1 5 16.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i414497-d)",
    fillOpacity: 0.2,
    d: "M5 5.5A2.5 2.5 0 0 1 7.5 3h8A2.5 2.5 0 0 1 18 5.5V14a5 5 0 0 1-5 5H7.5A2.5 2.5 0 0 1 5 16.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i414497-e)",
    fillRule: "evenodd",
    d: "M15.5 4h-8A1.5 1.5 0 0 0 6 5.5v11A1.5 1.5 0 0 0 7.5 18H13a4 4 0 0 0 4-4V5.5A1.5 1.5 0 0 0 15.5 4m-8-1A2.5 2.5 0 0 0 5 5.5v11A2.5 2.5 0 0 0 7.5 19H13a5 5 0 0 0 5-5V5.5A2.5 2.5 0 0 0 15.5 3z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i414497-f)",
    d: "M2 3.5A2.5 2.5 0 0 1 4.5 1h9A2.5 2.5 0 0 1 16 3.5v11a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 14.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i414497-g)",
    fillOpacity: 0.2,
    d: "M2 3.5A2.5 2.5 0 0 1 4.5 1h9A2.5 2.5 0 0 1 16 3.5v11a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 14.5z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i414497-h)",
    fillRule: "evenodd",
    d: "M13.5 2h-9A1.5 1.5 0 0 0 3 3.5v11A1.5 1.5 0 0 0 4.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 2m-9-1A2.5 2.5 0 0 0 2 3.5v11A2.5 2.5 0 0 0 4.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F5F5F5",
    d: "M19.56 11.44c-.28-.28-.66-.44-1.06-.44h-5c-.19 0-.38.04-.55.11l-.14.07-.13.08c-.15.1-.28.23-.44.46l-.04.07-.08.14c-.03.07-.05.13-.07.2l-.03.12v.06c-.03.16-.02.32 0 .49.06.29.2.56.41.76l.1.1c-.15.07-.28.16-.4.28l-.71.71a1.5 1.5 0 0 0 0 2.12c.12.12.27.22.42.29l-.42.42a1.499 1.499 0 1 0 2.12 2.12l.42-.42c.07.15.17.3.29.42a1.5 1.5 0 0 0 2.12 0l.71-.71c.12-.12.2-.26.27-.41l.08.08c.21.21.48.36.76.41l.2.03h.1c.2 0 .39-.04.59-.12.11-.05.2-.1.25-.14l.13-.1.06-.06.15-.17.05-.08c.17-.25.26-.54.26-.84V12.5c0-.4-.16-.78-.44-1.06z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i414497-i)",
    d: "M13.504 12h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.084.278l-.016.022a.5.5 0 0 1-.208.162.5.5 0 0 1-.545-.108l-5-5a.5.5 0 0 1-.077-.609l.01-.015.014-.022a.5.5 0 0 1 .406-.208"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i414497-j)",
    d: "M13.56 14.653a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 0 1-.707-.707l.707-.707a.5.5 0 0 1 .708 0Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i414497-k)",
    d: "M16.39 17.482a.5.5 0 0 1 0 .707l-.708.707a.5.5 0 1 1-.707-.707l.707-.707a.5.5 0 0 1 .707 0Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#i414497-l)",
    d: "M14.975 16.068a.5.5 0 0 1 0 .707l-2.121 2.121a.5.5 0 1 1-.707-.707l2.12-2.121a.5.5 0 0 1 .708 0"
  }))), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "i414497-c",
    x1: 8.611,
    x2: 11.082,
    y1: 3,
    y2: 19.064,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i414497-e",
    x1: 9.198,
    x2: 11.826,
    y1: 3,
    y2: 19.013,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i414497-f",
    x1: 5.889,
    x2: 8.191,
    y1: 1,
    y2: 17.116,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#EBEBEB"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i414497-h",
    x1: 6.521,
    x2: 8.97,
    y1: 1,
    y2: 17.071,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#BBB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#888"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i414497-i",
    x1: 12,
    x2: 19.042,
    y1: 12,
    y2: 19.004,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i414497-j",
    x1: 12,
    x2: 19.042,
    y1: 12,
    y2: 19.004,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i414497-k",
    x1: 12,
    x2: 19.042,
    y1: 12,
    y2: 19.004,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "i414497-l",
    x1: 12,
    x2: 19.042,
    y1: 12,
    y2: 19.004,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4BA446"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#3F7D35"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i414497-d",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "matrix(6.8611 12.66664 -9.94629 5.38757 9.153 7.167)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "i414497-g",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(59.744 -1.262 8.218)scale(14.6642 11.9669)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.177,
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#B8B8B8"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "i414497-a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h20v20H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgKqlQueryset20Item);

export { ForwardRef as default };
