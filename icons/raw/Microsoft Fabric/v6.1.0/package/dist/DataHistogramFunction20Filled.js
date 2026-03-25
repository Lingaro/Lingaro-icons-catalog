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
var SvgDataHistogramFunction20Filled = function SvgDataHistogramFunction20Filled(_a, ref) {
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
    d: "M10.5 3A1.5 1.5 0 0 1 12 4.5v3.995a3 3 0 0 0-1.343 2.518H10.6a1.5 1.5 0 1 0-.107 3c-.057.967-.113 1.882-.14 2.223a4.5 4.5 0 0 1-.1.72l-.081-.038A1.5 1.5 0 0 0 8.684 17H8V4.5A1.5 1.5 0 0 1 9.5 3zM17 13.879V8a2 2 0 0 0-2-2h-2v2.067q.064-.015.129-.027.256-.039.516-.04c.513 0 1.015.144 1.45.417a1.5 1.5 0 0 1-.771 2.787 1.5 1.5 0 0 1 .696 1.797h.023c.24 0 .477.046.7.135.433.209.803.529 1.072.928zM5 9h2v8H3.5a.5.5 0 0 1-.5-.5V11a2 2 0 0 1 2-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.43 10.018c.174-.025.279-.02.356-.005a.9.9 0 0 1 .278.12.5.5 0 1 0 .514-.858 1.8 1.8 0 0 0-.596-.242 2 2 0 0 0-.696-.005h-.005c-.53.083-.936.356-1.207.742-.262.374-.386.83-.42 1.282a39 39 0 0 1-.046.966H10.6a.5.5 0 0 0 0 1h.952a271 271 0 0 1-.2 3.275c-.031.375-.059.706-.151.995-.087.273-.22.47-.446.602l-.013.008c-.258.16-.588.131-1.018-.084a.5.5 0 1 0-.447.895c.532.266 1.283.477 1.988.04.493-.29.75-.723.888-1.157.128-.4.164-.83.192-1.17l.004-.047v-.004c.035-.45.13-2.033.205-3.353H13.6a.5.5 0 1 0 0-1h-.991c.024-.453.04-.79.043-.905.027-.325.113-.586.24-.768a.77.77 0 0 1 .539-.327Zm5.424 4.836a.5.5 0 0 0-.708-.707l-1.537 1.537c-.207-.36-.382-.662-.453-.779a3 3 0 0 0-.258-.412 1.4 1.4 0 0 0-.52-.429.92.92 0 0 0-.832.081 1.7 1.7 0 0 0-.442.418.5.5 0 1 0 .792.612 1.3 1.3 0 0 1 .138-.153 1 1 0 0 1 .073.082c.06.079.117.176.169.276a73 73 0 0 1 .601 1.036l-1.73 1.73a.5.5 0 0 0 .707.708l1.54-1.54a51 51 0 0 0 .574.982l.027.046c.038.065.082.138.133.208a1.2 1.2 0 0 0 .466.38.5.5 0 0 0 .117.04c.3.062.58.036.822-.128a1.5 1.5 0 0 0 .348-.363 5.5 5.5 0 0 0-.819-.576l-.014.02-.062.077h-.01a.2.2 0 0 1-.042-.042 2 2 0 0 1-.077-.123l-.023-.04a76 76 0 0 1-.708-1.214z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataHistogramFunction20Filled);

export { ForwardRef as default };
