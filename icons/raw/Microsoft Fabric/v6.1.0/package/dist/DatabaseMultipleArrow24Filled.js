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
var SvgDatabaseMultipleArrow24Filled = function SvgDatabaseMultipleArrow24Filled(_a, ref) {
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
    d: "M14 20c0 1.657-2.462 3-5.5 3S3 21.657 3 20v-4.656c.284.23.588.428.893.595C5.148 16.622 6.78 17 8.5 17s3.352-.377 4.607-1.062a6 6 0 0 0 .893-.594zm9-3c0 .868-.428 1.559-.919 2.042-.485.478-1.11.839-1.762 1.11-1.309.546-3.014.848-4.819.848l-.16-.004c.1-.31.16-.64.16-.996v-7.798c-.045-.51-.224-.959-.465-1.367a4 4 0 0 0-.129-.206l-.06-.084-.042-.063a16 16 0 0 0 .696.018c2.267 0 4.394-.487 6.009-1.348A7.3 7.3 0 0 0 23 8.108z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 9.5c2.788 0 5.09 1.132 5.45 2.6l.01.045.016.08.01.07.007.067q.006.069.007.138c0 1.657-2.462 3-5.5 3S3 14.157 3 12.5q0-.069.006-.138l.008-.066q.004-.036.01-.071l.015-.08.01-.045c.36-1.468 2.663-2.6 5.451-2.6M4.97 1.47a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06L6.03 7.03a.75.75 0 1 1-1.06-1.06L5.94 5h-.59c-1.085 0-1.76.271-2.17.68S2.5 6.765 2.5 7.85V10A.75.75 0 0 1 1 10V7.85c0-1.316.33-2.44 1.12-3.23S4.034 3.5 5.35 3.5h.59l-.97-.97a.75.75 0 0 1 0-1.06m11.058-.46C19.924 1.156 23 2.887 23 5c0 2.21-3.358 4-7.5 4-3.093 0-5.748-1-6.895-2.425l.736-.734a2.25 2.25 0 0 0 .03-3.148c1.263-.952 3.287-1.596 5.6-1.682q.262-.01.529-.011.265.001.528.01"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseMultipleArrow24Filled);

export { ForwardRef as default };
