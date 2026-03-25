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
var SvgOrientationVertical20Regular = function SvgOrientationVertical20Regular(_a, ref) {
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
    d: "M10.56 2.44A1.5 1.5 0 0 0 9.5 2h-4A1.5 1.5 0 0 0 4 3.5v8A1.5 1.5 0 0 0 5.5 13h4a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5v-6a1.5 1.5 0 0 0-.44-1.06m-.706.706A.5.5 0 0 1 10 3.5v8a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .354.146M15 3.25a.25.25 0 0 0-.25-.25h-.25a.5.5 0 0 1 0-1h.25A1.25 1.25 0 0 1 16 3.25v.25a.5.5 0 0 1-1 0zM15.5 5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m.354 3.146A.5.5 0 0 0 15 8.5v.25a.25.25 0 0 1-.25.25h-.25a.5.5 0 0 0 0 1h.25A1.25 1.25 0 0 0 16 8.75V8.5a.5.5 0 0 0-.146-.354m-1.708 6.708-.152-.153A3.5 3.5 0 0 1 7 14.5a.5.5 0 1 1 1 0 2.5 2.5 0 0 0 4.991.216l-.137.138a.5.5 0 0 1-.708-.708l1-1a.5.5 0 0 1 .708 0l1 1a.5.5 0 1 1-.708.708m-1.292-12A.5.5 0 0 1 12.5 3h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .354.854"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgOrientationVertical20Regular);

export { ForwardRef as default };
