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
var SvgSlideTextAcceptDismiss20Regular = function SvgSlideTextAcceptDismiss20Regular(_a, ref) {
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
    d: "M17 6.5V11h1V6.5A2.5 2.5 0 0 0 15.5 4h-11A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16H6v-1H4.5A1.5 1.5 0 0 1 3 13.5v-7A1.5 1.5 0 0 1 4.5 5h11A1.5 1.5 0 0 1 17 6.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1H6c0-.364.097-.706.268-1zm7.5 0H8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5zm-1.396 2.296a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 0 1 .674-.738l.397.363 1.412-1.412a.5.5 0 0 1 .708 0ZM14 19h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5zm3.646-4.854a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708L17 16.207l-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708l.646.647z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSlideTextAcceptDismiss20Regular);

export { ForwardRef as default };
