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
var SvgScriptKql32Filled = function SvgScriptKql32Filled(_a, ref) {
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
    d: "M26.498 2.04a4 4 0 0 0-.5-.04H11a5 5 0 0 0-5 5v15h9.78l.487-.487q.195-.195.424-.349A2.8 2.8 0 0 1 19.142 17H24V5.922q0-.012.004-.033c.005-.035.016-.104.034-.289a3.97 3.97 0 0 1 2.96-3.46c-.16-.04-.32-.08-.5-.1M14.701 24a3 3 0 0 0 .859 2.462q.18.176.388.319l-.036.035A3 3 0 0 0 15.228 30H11.1l-1.83.003c-1.548.004-2.532.006-3.17-.003H6c-2.21 0-4-1.79-4-4v-1a1 1 0 0 1 1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 4c-.36 0-.7.1-1 .28-.6.34-1 .98-1 1.72v4h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.804 15h-8.054a.807.807 0 0 0-.568 1.376l8.053 8.053a.8.8 0 0 0 1.374-.57v-8.054a.8.8 0 0 0-.8-.8zm-8.1 5.341-.707.707a1.001 1.001 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414M21.57 25.4a1 1 0 0 1 0 1.415l-2.828 2.829a1 1 0 0 1-1.414-1.414l2.829-2.83a1 1 0 0 1 1.414 0Zm1.061 2.476a1 1 0 1 1 1.414 1.415l-.707.709a1.002 1.002 0 0 1-1.631-.325 1 1 0 0 1 .217-1.09z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgScriptKql32Filled);

export { ForwardRef as default };
