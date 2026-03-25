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
var SvgCopilot20Regular = function SvgCopilot20Regular(_a, ref) {
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
    d: "M5.927 2.001h6.212c1.054 0 1.981.694 2.279 1.705l.469 1.594c.16.547.64.933 1.199.982h.29c.887 0 1.572.251 2.026.767.443.503.59 1.17.599 1.84.019 1.32-.498 2.961-.91 4.268-.358 1.136-.818 2.317-1.436 3.222-.615.9-1.455 1.623-2.582 1.623H7.861a2.375 2.375 0 0 1-2.279-1.705l-.469-1.594a1.375 1.375 0 0 0-1.198-.982h-.29c-.888 0-1.573-.252-2.027-.768-.443-.502-.59-1.17-.599-1.838-.019-1.321.498-2.962.91-4.269.358-1.137.818-2.317 1.436-3.222.615-.901 1.455-1.623 2.582-1.623M2.862 7.147C2.435 8.503 1.982 9.975 2 11.1c.008.555.13.944.35 1.193.206.235.575.428 1.276.428h2.627c.61 0 1.146-.4 1.32-.985.47-1.577 1.266-4.239 1.894-6.276l.033-.107c.15-.483.294-.952.45-1.367.132-.354.28-.692.46-.985H5.927c-.644 0-1.22.402-1.756 1.187-.534.78-.959 1.848-1.309 2.959m2.872 6.574q.224.315.338.7l.47 1.594c.172.585.709.987 1.319.987h.026a.91.91 0 0 0 .754-.378c.167-.227.32-.544.474-.957.145-.387.28-.828.433-1.321l.03-.098.2-.65a2.4 2.4 0 0 1-.742.118H6.411a2 2 0 0 1-.159.005zm2.46-1.005h.842c.553 0 1.047-.33 1.263-.83a971 971 0 0 0 1.17-3.905q.115-.381.338-.694h-.843c-.553 0-1.047.33-1.262.829a822 822 0 0 0-1.171 3.906q-.115.38-.338.694Zm2.028-6.31c.235-.078.485-.119.742-.119h2.626a3 3 0 0 1 .158-.005h.518a2.4 2.4 0 0 1-.339-.7l-.469-1.594a1.375 1.375 0 0 0-1.319-.987h-.015a.92.92 0 0 0-.765.378c-.167.227-.32.544-.474.957-.145.387-.28.828-.433 1.321l-.03.098zm6.916 6.45c.427-1.357.88-2.828.863-3.953-.008-.555-.13-.944-.35-1.193-.206-.235-.575-.428-1.276-.428h-2.627c-.61 0-1.146.4-1.32.985a741 741 0 0 1-1.894 6.275l-.033.107c-.15.484-.294.953-.45 1.368a5.7 5.7 0 0 1-.46.985h4.482c.644 0 1.22-.402 1.756-1.187.534-.781.959-1.848 1.309-2.959"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCopilot20Regular);

export { ForwardRef as default };
