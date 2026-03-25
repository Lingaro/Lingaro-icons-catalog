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
var SvgCopilot28Filled = function SvgCopilot28Filled(_a, ref) {
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
    d: "M8.558 2.004c-1.723 0-3.01 1.102-3.954 2.484-.948 1.388-1.655 3.199-2.206 4.945-.633 2.007-1.427 4.525-1.397 6.55.015 1.025.24 2.046.916 2.813.694.787 1.741 1.173 3.102 1.173h.109c.278.024.483.088.64.167.197.1.356.246.495.445.293.419.457.99.672 1.742l.032.11c.21.732.479 1.633 1.06 2.336l.011.013c.636.761 1.57 1.213 2.923 1.213h8.48c1.724 0 3.01-1.103 3.955-2.485.948-1.387 1.655-3.199 2.206-4.944.633-2.008 1.427-4.525 1.397-6.55-.015-1.026-.24-2.046-.916-2.814-.694-.787-1.741-1.172-3.102-1.172h-.109a1.7 1.7 0 0 1-.64-.168 1.34 1.34 0 0 1-.495-.445c-.293-.419-.457-.99-.672-1.741l-.032-.111c-.21-.732-.479-1.633-1.06-2.336l-.011-.013c-.636-.76-1.57-1.212-2.923-1.212H8.56ZM20.351 8.03a4 4 0 0 0-.2.01h-4.258c-.594 0-1.167.123-1.688.349l.198-.643.046-.151a38 38 0 0 1 .666-2.03c.238-.636.473-1.124.732-1.474a1.43 1.43 0 0 1 1.192-.588c.793 0 1.262.2 1.577.474q.108.095.195.2c.356.426.558 1.028.78 1.801l.051.18c.167.588.364 1.282.709 1.872m-3.152 1.51a4.25 4.25 0 0 0-.826 1.528c-.324 1.085-.726 2.43-1.153 3.848l-.482 1.59a2.75 2.75 0 0 1-2.631 1.951H10.8a4.25 4.25 0 0 0 .826-1.53c.324-1.084.726-2.43 1.153-3.847l.482-1.589a2.75 2.75 0 0 1 2.631-1.952zM7.65 19.967q.1-.003.2-.01h4.258c.594 0 1.167-.123 1.688-.35l-.198.644-.046.15a38 38 0 0 1-.666 2.03c-.238.636-.473 1.124-.732 1.474a1.43 1.43 0 0 1-1.192.589c-.793 0-1.262-.2-1.577-.475a2 2 0 0 1-.195-.2c-.356-.426-.558-1.028-.78-1.8l-.051-.18c-.167-.589-.364-1.283-.709-1.872"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCopilot28Filled);

export { ForwardRef as default };
