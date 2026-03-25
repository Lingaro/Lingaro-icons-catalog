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
var SvgHomeWaves20Regular = function SvgHomeWaves20Regular(_a, ref) {
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
    d: "M3.5 16.175h5c-.7 0-1.2.4-1.4 1H3.5c-.8 0-1.5-.7-1.5-1.5v-7.2c0-.5.2-.9.5-1.2l5.5-4.9c.6-.5 1.4-.5 2 0l5.5 5c.3.3.5.7.5 1.1v1.7c-.4 0-.7.1-1 .4v-2.1a.65.65 0 0 0-.063-.269.4.4 0 0 1-.037-.131l-5.5-4.9c-.2-.2-.5-.2-.7 0l-5.5 4.9c-.1.1-.2.2-.2.4v7.2c0 .3.2.5.5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.982 12.36c.357.44.854.815 1.518.815s1.16-.376 1.518-.816a3.6 3.6 0 0 0 .51-.85l.004-.01v-.001a.5.5 0 0 1 .953.055v-.001l.002.009.014.047a2.7 2.7 0 0 0 .399.767c.307.409.796.8 1.6.8a.5.5 0 0 1 0 1c-1.196 0-1.957-.61-2.4-1.2a4 4 0 0 1-.14-.202 4 4 0 0 1-.166.217c-.455.56-1.208 1.185-2.294 1.185s-1.84-.625-2.294-1.185a4 4 0 0 1-.165-.217q-.064.1-.141.202c-.443.59-1.204 1.2-2.4 1.2a.5.5 0 1 1 0-1c.804 0 1.293-.391 1.6-.8a2.7 2.7 0 0 0 .413-.814l.002-.009v.001a.5.5 0 0 1 .953-.055v.001l.004.01.022.051a3.6 3.6 0 0 0 .488.8m0 4c.357.44.854.815 1.518.815s1.16-.376 1.518-.816a3.6 3.6 0 0 0 .51-.85l.004-.01v-.001a.5.5 0 0 1 .953.055v-.001l.002.009.014.047a2.7 2.7 0 0 0 .399.767c.307.409.796.8 1.6.8a.5.5 0 0 1 0 1c-1.196 0-1.957-.61-2.4-1.2a4 4 0 0 1-.14-.202 4 4 0 0 1-.166.217c-.455.56-1.208 1.185-2.294 1.185s-1.84-.625-2.294-1.185a4 4 0 0 1-.165-.217q-.064.1-.141.202c-.443.59-1.204 1.2-2.4 1.2a.5.5 0 1 1 0-1c.804 0 1.293-.391 1.6-.8a2.7 2.7 0 0 0 .413-.814l.002-.009v.001a.5.5 0 0 1 .953-.055v.001l.004.01.022.051a3.6 3.6 0 0 0 .488.8"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHomeWaves20Regular);

export { ForwardRef as default };
