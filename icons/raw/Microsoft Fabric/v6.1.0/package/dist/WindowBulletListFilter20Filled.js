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
var SvgWindowBulletListFilter20Filled = function SvgWindowBulletListFilter20Filled(_a, ref) {
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
    d: "M16.001 10V7h-12v7a2 2 0 0 0 2 2h8v1h-8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.501 9.5a.97.97 0 0 1 .289-.7 1.1 1.1 0 0 1 .32-.22.86.86 0 0 1 .391-.08q.2 0 .383.078.178.079.32.21a1.006 1.006 0 0 1-.312 1.633.8.8 0 0 1-.391.079 1 1 0 0 1-.391-.078 1.1 1.1 0 0 1-.32-.211.84.84 0 0 1-.211-.311 1.2 1.2 0 0 1-.078-.4m0 4a.97.97 0 0 1 .289-.703 1.1 1.1 0 0 1 .32-.218.84.84 0 0 1 .391-.08.9.9 0 0 1 .383.08q.178.076.32.21c.095.09.17.2.219.32a1.006 1.006 0 0 1-.531 1.313.8.8 0 0 1-.391.078 1 1 0 0 1-.391-.078 1.1 1.1 0 0 1-.32-.211.84.84 0 0 1-.211-.312 1.2 1.2 0 0 1-.078-.4ZM9.55 10a.56.56 0 0 1-.387-.148v-.004a.462.462 0 0 1 0-.7A.56.56 0 0 1 9.55 9h4.4a.56.56 0 0 1 .387.152.463.463 0 0 1 0 .7.56.56 0 0 1-.364.148zm3.017 4-1.025-1H9.55a.56.56 0 0 0-.505.306.46.46 0 0 0 .118.542v.004A.56.56 0 0 0 9.55 14zm-.287-1.72.915.915.012.012L15 15v2a.25.25 0 0 0 .138.223l1.5.75A.25.25 0 0 0 17 17.75V15l2.72-2.72a.75.75 0 0 0-.53-1.28h-6.38a.75.75 0 0 0-.53 1.28"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowBulletListFilter20Filled);

export { ForwardRef as default };
