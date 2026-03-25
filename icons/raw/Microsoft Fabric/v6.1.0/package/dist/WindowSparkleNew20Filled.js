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
var SvgWindowSparkleNew20Filled = function SvgWindowSparkleNew20Filled(_a, ref) {
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
    d: "M6.001 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6a5.5 5.5 0 0 1-.393-1H6.001a2 2 0 0 1-2-2V7h12v2.207q.524.149 1 .393V6a3 3 0 0 0-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.953 9.641q.147.169.354.381a5.5 5.5 0 0 0-.76.655q-.2-.21-.346-.377l-.019-.022-.017-.022a3 3 0 0 1-.164-.228l-.001.001a5 5 0 0 1-.649.761 7 7 0 0 1-.619.527 4 4 0 0 1-.271.187 6 6 0 0 1 .99.814q-.232.535-.348 1.12a4 4 0 0 0-.454-.509 5 5 0 0 0-.523-.445 3.3 3.3 0 0 0-.57-.343A1.3 1.3 0 0 0 7.001 12a.5.5 0 0 1 0-1c.193-.01.381-.06.555-.143q.309-.14.578-.343.276-.206.523-.446.211-.2.391-.429a2.6 2.6 0 0 0 .328-.539c.083-.189.126-.393.125-.6a.505.505 0 0 1 .5-.5.505.505 0 0 1 .5.5c.003.21.047.417.132.609q.127.286.32.532m6.048 8.601a4.5 4.5 0 1 1-5-7.483 4.5 4.5 0 0 1 5 7.483m-2.147-6.096a.5.5 0 0 0-.853.354V14h-1.5a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1h-1.5v-1.5a.5.5 0 0 0-.146-.354Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgWindowSparkleNew20Filled);

export { ForwardRef as default };
