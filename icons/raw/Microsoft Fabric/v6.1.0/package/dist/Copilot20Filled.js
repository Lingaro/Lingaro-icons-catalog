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
var SvgCopilot20Filled = function SvgCopilot20Filled(_a, ref) {
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
    d: "M5.927 2h6.212c1.054 0 1.981.693 2.279 1.704l.469 1.594c.16.547.64.933 1.199.982h.29c.887 0 1.572.251 2.026.767.443.503.59 1.17.599 1.84.019 1.32-.498 2.961-.91 4.268-.358 1.136-.818 2.317-1.436 3.222C16.04 17.278 15.2 18 14.073 18H7.861a2.375 2.375 0 0 1-2.279-1.705l-.469-1.594a1.375 1.375 0 0 0-1.198-.982h-.29c-.888 0-1.573-.252-2.027-.768-.443-.502-.59-1.17-.599-1.838-.019-1.321.498-2.962.91-4.269.358-1.137.818-2.317 1.436-3.222.615-.901 1.455-1.623 2.582-1.623Zm-.192 11.72q.223.314.337.698l.47 1.595c.172.585.709.987 1.319.987h.026a.91.91 0 0 0 .754-.378c.167-.227.32-.544.474-.957.145-.387.28-.828.433-1.321l.03-.098.2-.65a2.4 2.4 0 0 1-.742.118H6.411a2 2 0 0 1-.159.005h-.518Zm2.458-1.006h.843c.553 0 1.047-.33 1.263-.83.437-1.446.87-2.896 1.17-3.905.076-.253.19-.487.338-.694h-.843c-.553 0-1.046.33-1.262.829A976 976 0 0 0 8.53 12.02q-.115.38-.338.694Zm2.03-6.31a2.3 2.3 0 0 1 .74-.119h2.627a3 3 0 0 1 .158-.005h.517a2.4 2.4 0 0 1-.338-.7l-.469-1.594a1.375 1.375 0 0 0-1.319-.987h-.015a.92.92 0 0 0-.765.378c-.167.227-.32.544-.474.957-.145.387-.28.828-.433 1.321l-.03.098-.2.65Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCopilot20Filled);

export { ForwardRef as default };
