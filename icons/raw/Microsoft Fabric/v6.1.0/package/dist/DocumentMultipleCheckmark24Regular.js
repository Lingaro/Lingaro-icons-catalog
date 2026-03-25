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
var SvgDocumentMultipleCheckmark24Regular = function SvgDocumentMultipleCheckmark24Regular(_a, ref) {
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
    d: "M4 4.25A2.25 2.25 0 0 1 6.25 2h4.381a2.25 2.25 0 0 1 1.591.659l4.619 4.619c.422.422.659.994.659 1.59v8.382a2.25 2.25 0 0 1-2.25 2.25h-2.563c.154-.478.255-.98.294-1.5h2.269a.75.75 0 0 0 .75-.75V8.998h-3.246a2.25 2.25 0 0 1-2.25-2.25V3.5H6.25a.75.75 0 0 0-.75.75v6.826a6.5 6.5 0 0 0-1.5.422zm8.004.312v2.186c0 .414.336.75.75.75h2.185z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.268 20.5A6.5 6.5 0 0 1 11.19 22h4.06A4.75 4.75 0 0 0 20 17.25v-5.881a2.25 2.25 0 0 0-.658-1.591l-.841-.841v8.313a3.25 3.25 0 0 1-3.25 3.25zm-.268-3a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.146-2.354a.5.5 0 0 0-.708 0L5.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDocumentMultipleCheckmark24Regular);

export { ForwardRef as default };
