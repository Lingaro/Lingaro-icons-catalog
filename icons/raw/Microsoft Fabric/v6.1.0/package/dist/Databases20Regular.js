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
var SvgDatabases20Regular = function SvgDatabases20Regular(_a, ref) {
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
    d: "M12.458 2H3a1 1 0 0 0-1 1c0 .081.007.161.031.235.031.098 1.853 5.794 2.8 8.744a1 1 0 0 0 .95.688h2.073l.633 1.973a1 1 0 0 0 .953.694h2.071l.631 1.966a1 1 0 0 0 .954.701h.238c2.577 0 4.667-1.194 4.667-2.667V5.167C18.001 3.418 15.828 2 12.458 2M3.006 3h9.453c2.843 0 4.542 1.102 4.542 2.167 0 .627-.602 1.261-1.667 1.681v-.227c0-1.187-1.066-1.954-2.382-1.954H6.658a1 1 0 0 0-.953 1.302l1.828 5.699-1.75.006A8774 8774 0 0 1 3.006 3m6.433 11.334L6.658 5.667h6.293c.665 0 1.382.298 1.382.954v.529a9 9 0 0 1-1.875.184h-2.144a1 1 0 0 0-.952 1.307l1.827 5.693zM13.334 17l-.24-.006-2.778-8.66h2.144c2.028 0 3.596-.512 4.542-1.292v8.292c0 .68-1.428 1.667-3.667 1.667z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabases20Regular);

export { ForwardRef as default };
