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
var SvgDatabaseSwap20Filled = function SvgDatabaseSwap20Filled(_a, ref) {
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
    d: "M12.975 2.512C13.518 2.186 14.235 2 15 2s1.483.185 2.025.51c.533.32.975.831.975 1.49s-.442 1.17-.975 1.49c-.542.325-1.26.51-2.025.51s-1.482-.185-2.025-.51C12.443 5.17 12 4.66 12 4s.443-1.17.975-1.49ZM4.354 7.579a.5.5 0 0 1-.854-.354 2.36 2.36 0 0 1 2.357-2.358h2.436L7.28 3.855a.5.5 0 1 1 .707-.708l1.867 1.867a.5.5 0 0 1 0 .707L7.987 7.587a.5.5 0 1 1-.707-.707l1.013-1.013H5.857A1.36 1.36 0 0 0 4.5 7.225a.5.5 0 0 1-.146.354m11.589 4.698a.5.5 0 0 0-.5.5 1.36 1.36 0 0 1-1.357 1.358H11.65l1.013-1.013a.5.5 0 0 0-.707-.707l-1.866 1.866a.5.5 0 0 0 0 .707l1.866 1.867a.5.5 0 1 0 .707-.708l-1.013-1.012h2.436a2.36 2.36 0 0 0 2.357-2.358.5.5 0 0 0-.5-.5M12 6.019v1.982a1.81 1.81 0 0 0 .968 1.456 4.07 4.07 0 0 0 4.064 0A1.81 1.81 0 0 0 18 8.001V6.02a3.6 3.6 0 0 1-.46.329C16.817 6.78 15.915 7 15 7s-1.817-.22-2.54-.653a3.6 3.6 0 0 1-.46-.329Zm-10 8v1.982a1.81 1.81 0 0 0 .968 1.456 4.07 4.07 0 0 0 4.064 0A1.81 1.81 0 0 0 8 16.001V14.02a3.6 3.6 0 0 1-.46.329C6.817 14.78 5.915 15 5 15s-1.817-.22-2.54-.653a3.6 3.6 0 0 1-.46-.329Zm.975-3.507C3.517 10.186 4.235 10 5 10s1.483.185 2.025.51c.533.32.975.831.975 1.49s-.442 1.17-.975 1.49c-.542.325-1.26.51-2.025.51s-1.483-.185-2.025-.51C2.442 13.17 2 12.66 2 12s.442-1.17.975-1.49Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatabaseSwap20Filled);

export { ForwardRef as default };
