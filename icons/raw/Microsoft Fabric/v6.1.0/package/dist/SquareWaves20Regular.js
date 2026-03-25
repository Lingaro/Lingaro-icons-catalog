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
var SvgSquareWaves20Regular = function SvgSquareWaves20Regular(_a, ref) {
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
    d: "M14 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1.586c.205-.58.757-.996 1.405-1H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4.088q.238-.086.499-.087.27.015.501.097V6a3 3 0 0 0-3-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.482 12.185c.358.44.854.815 1.518.815s1.161-.375 1.518-.815a3.6 3.6 0 0 0 .509-.85l.004-.01a.5.5 0 0 1 .953.053l.003.008.005.015.009.032a2.8 2.8 0 0 0 .398.767c.307.409.796.8 1.6.8a.5.5 0 0 1 0 1c-1.196 0-1.957-.61-2.4-1.2a4 4 0 0 1-.141-.202 5 5 0 0 1-.165.217c-.455.56-1.208 1.185-2.294 1.185s-1.839-.625-2.294-1.185a5 5 0 0 1-.165-.217q-.064.1-.141.202c-.443.59-1.204 1.2-2.4 1.2a.5.5 0 0 1 0-1c.804 0 1.293-.391 1.6-.8a2.8 2.8 0 0 0 .413-.814l.002-.01a.5.5 0 0 1 .953-.053l.004.012.021.05a3.6 3.6 0 0 0 .488.799zM14 17c-.664 0-1.16-.375-1.518-.815l-.002-.001a3.6 3.6 0 0 1-.488-.8l-.02-.046-.001-.003-.004-.012a.5.5 0 0 0-.953.054l-.002.009a3 3 0 0 1-.084.234c-.067.16-.173.37-.329.58-.307.409-.796.8-1.6.8a.5.5 0 0 0 0 1c1.196 0 1.957-.61 2.4-1.2q.077-.103.141-.202.077.106.165.217c.455.56 1.208 1.185 2.294 1.185s1.839-.625 2.294-1.185q.089-.11.165-.217.065.1.141.202c.443.59 1.204 1.2 2.4 1.2a.5.5 0 0 0 0-1c-.804 0-1.293-.391-1.6-.8a2.8 2.8 0 0 1-.407-.799l-.005-.015-.003-.008a.5.5 0 0 0-.953-.053l-.004.01-.021.05a3.6 3.6 0 0 1-.488.799c-.357.44-.854.816-1.518.816"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgSquareWaves20Regular);

export { ForwardRef as default };
