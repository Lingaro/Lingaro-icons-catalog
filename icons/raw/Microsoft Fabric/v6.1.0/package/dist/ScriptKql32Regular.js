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
var SvgScriptKql32Regular = function SvgScriptKql32Regular(_a, ref) {
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
    d: "M30 8a2 2 0 0 1-2 2h-4v7h-2V6c0-.729.195-1.412.535-2H11a3 3 0 0 0-3 3v15h7.78l-.22.22a3 3 0 0 0-.859 1.78H4v2a2 2 0 0 0 2 2h9.184a3 3 0 0 0 .044 2H6a4 4 0 0 1-4-4v-2a2 2 0 0 1 2-2h2V7a5 5 0 0 1 5-5h15a4 4 0 0 1 4 4zm-6-2v2h4V6a2 2 0 0 0-2-2h-.002A2 2 0 0 0 24 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27.196 19h-8.054a.807.807 0 0 0-.568 1.376l8.053 8.053a.8.8 0 0 0 1.374-.57v-8.054a.8.8 0 0 0-.8-.8zm-8.1 5.341-.707.707a1.001 1.001 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414M21.57 25.4a1 1 0 0 1 0 1.415l-2.828 2.829a1 1 0 0 1-1.414-1.414l2.829-2.83a1 1 0 0 1 1.414 0Zm1.061 2.476a1 1 0 1 1 1.414 1.415l-.707.709a1.002 1.002 0 0 1-1.631-.325 1 1 0 0 1 .217-1.09z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgScriptKql32Regular);

export { ForwardRef as default };
