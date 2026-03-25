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
var SvgDataEngineering16Filled = function SvgDataEngineering16Filled(_a, ref) {
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
    d: "M10.318 14.911c.132-.056.254-.139.358-.241l2.274-2.257a6 6 0 0 1-2.26-.624c-1.12-.553-1.893-1.618-2.58-2.692l-.878-1.39A80 80 0 0 1 4.988 9.28c-.226.15-.414.277-.57.389-.303.215-.482.37-.637.553-.16.19-.33.447-.566.902-.337.65-.236 1.316.035 1.926a4.2 4.2 0 0 0 .586.944l.595.65c.213.227.505.356.81.356h4.661a1 1 0 0 0 .416-.089"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14.149 11.216.457-.455A1.34 1.34 0 0 0 15 9.882v-3.81c0-.926-1.075-1.514-1.665-.647 0 0-1.371 2.063-3.961 3.766.541.772 1.087 1.37 1.759 1.702.715.353 1.44.517 2.031.528.604.012.9-.134.985-.205M6.507 6.989c-.481.342-.873.605-1.2.824-.41.276-.72.483-.978.695-.952.722-1.365.954-1.975 2.131-.25.483-.34.97-.33 1.424l-.723-.78C1.094 11.06 1 10.735 1 10.427v-4.8c0-.316.101-.62.317-.842L4.671 1.34A1.12 1.12 0 0 1 5.468 1h5.454c.424 0 .702.434.501.823A12 12 0 0 1 8.09 5.808c-.508.395-1.059.803-1.582 1.18Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDataEngineering16Filled);

export { ForwardRef as default };
