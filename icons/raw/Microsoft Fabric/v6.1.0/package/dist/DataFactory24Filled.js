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
var SvgDataFactory24Filled = function SvgDataFactory24Filled(_a, ref) {
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
    fillRule: "evenodd",
    d: "M7.8 2.004a.693.693 0 0 0-.685.79 12.456 12.456 0 0 0 12.33 10.667h2.554v-4.37c0-.92-.745-1.666-1.665-1.666h-.69c-2.56 0-4.82-1.67-5.575-4.12l-.22-.711a.84.84 0 0 0-.794-.59zm9.794 12.835c-.142.967-.89 2.002-2.183 2.002H8.652a12.2 12.2 0 0 0-1.537 4.387c-.06.41.26.78.675.78h5.27c.364 0 .684-.24.794-.59l.22-.71a5.83 5.83 0 0 1 5.575-4.121h.69c.908 0 1.646-.727 1.665-1.63l-.005.004h-2.555q-.94 0-1.85-.122M2.707 8.67h5.07a13.98 13.98 0 0 0 8.34 5.891c-.024.435-.332.78-.706.78H2.707c-.39 0-.707-.375-.707-.835v-5c0-.46.318-.836.707-.836",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataFactory24Filled);

export { ForwardRef as default };
