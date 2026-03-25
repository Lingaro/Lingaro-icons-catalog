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
var SvgPurview28Regular = function SvgPurview28Regular(_a, ref) {
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
    d: "M18.281 4.55c-1.907-3.308-6.677-3.308-8.585 0L1.573 18.631c-1.906 3.306-.512 7.44 4.293 7.44H22.11c4.96 0 6.188-4.154 4.293-7.44l-.649-1.124-.01-.017a14 14 0 0 0-.4-.584l-7.06-12.354-.002-.003Zm-4.12 17.317-.122.09a12.4 12.4 0 0 1-2.554-2.618 12.3 12.3 0 0 1-2.243-5.631v-.024l.002-.017v-.006l.1-.041.026-.011a12.37 12.37 0 0 1 9.35.053l.04.028c.006.033.014.09.015.178a3 3 0 0 1-.065.585c-.091.48-.271 1.056-.497 1.652-.456 1.2-1.048 2.349-1.32 2.757-.478.717-1.197 1.56-1.86 2.223a9 9 0 0 1-.871.782Zm5.235-9.7q.991.415 1.916.983l-4.449-7.783v-.001c-1.279-2.214-4.471-2.214-5.749 0-1.176 2.04-1.947 4.188-1.976 6.578a14.02 14.02 0 0 1 10.257.226l.001-.002Zm.922 2.594q.026-.135.045-.27A12.3 12.3 0 0 1 24 17.841c.37.511.67 1.063.985 1.61 1.29 2.235-.211 5.067-2.875 5.067-3.39 0-4.547-.463-6.625-1.619.225-.194.464-.417.703-.656.72-.719 1.514-1.645 2.066-2.473.968-1.454 1.733-3.284 2.063-5.01Zm-12.81-3.143a13.96 13.96 0 0 0 2.65 8.68 13.95 13.95 0 0 0 4.722 4.138H5.866c-2.554 0-4.153-2.77-2.875-4.986z",
    clipRule: "evenodd"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgPurview28Regular);

export { ForwardRef as default };
