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
var SvgSlideTextAcceptDismiss20Filled = function SvgSlideTextAcceptDismiss20Filled(_a, ref) {
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
    d: "M2 6.5A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5V11H8a2 2 0 0 0-1.732 1H5.5a.5.5 0 0 0 0 1H6v3H4.5A2.5 2.5 0 0 1 2 13.5zm3.5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM5 10a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 12H8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5zm-1.396 2.296a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 0 1 .674-.738l.397.363 1.412-1.412a.5.5 0 0 1 .708 0ZM14 19h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5zm3.646-4.854a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708L17 16.207l-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708l.646.647z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSlideTextAcceptDismiss20Filled);

export { ForwardRef as default };
