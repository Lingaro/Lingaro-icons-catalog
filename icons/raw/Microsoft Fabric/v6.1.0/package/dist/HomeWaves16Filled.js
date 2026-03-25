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
var SvgHomeWaves16Filled = function SvgHomeWaves16Filled(_a, ref) {
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
    d: "M5.962 1.303a1.5 1.5 0 0 1 2.076 0l4.5 4.317A1.5 1.5 0 0 1 13 6.702v.412h-.001c-.62 0-1.184.39-1.413.994a2.6 2.6 0 0 1-.344.561c-.361.445-.648.445-.742.445s-.381 0-.743-.446a2.6 2.6 0 0 1-.353-.583c-.219-.578-.779-.967-1.483-.967h-.007a1.49 1.49 0 0 0-1.368 1.126l-.04.105a1.8 1.8 0 0 1-.206.366c-.21.28-.449.399-.8.399-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5q.605 0 1.154-.162a1.5 1.5 0 0 0-.107.292l-.04.105a1.8 1.8 0 0 1-.207.366.91.91 0 0 1-.8.4A1.5 1.5 0 0 0 4.132 14H2.5A1.5 1.5 0 0 1 1 12.5V6.702c0-.408.167-.8.462-1.082z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.982 9.299c.358.44.854.815 1.518.815s1.161-.375 1.518-.815a3.6 3.6 0 0 0 .509-.849l.004-.011v-.001a.499.499 0 0 1 .953.055v-.001l.003.008.005.016.009.031a2.8 2.8 0 0 0 .398.767c.307.409.796.8 1.6.8a.5.5 0 0 1 0 1c-1.196 0-1.957-.609-2.4-1.2a3 3 0 0 1-.141-.202 5 5 0 0 1-.165.217c-.455.56-1.208 1.185-2.294 1.185s-1.839-.625-2.294-1.185a4 4 0 0 1-.165-.217 3 3 0 0 1-.14.202c-.443.591-1.204 1.2-2.4 1.2a.5.5 0 0 1 0-1c.804 0 1.293-.391 1.6-.8a2.8 2.8 0 0 0 .41-.805l.003-.009.002-.009a.5.5 0 0 1 .953-.054l.004.012.006.013.004.011.012.027a3.6 3.6 0 0 0 .488.799m1.518 4.815c-.664 0-1.16-.375-1.518-.815a3.7 3.7 0 0 1-.489-.8l-.021-.05-.004-.011a.501.501 0 0 0-.953.054l-.002.008a2.8 2.8 0 0 1-.415.815c-.307.409-.796.8-1.6.8a.5.5 0 0 0 0 1c1.196 0 1.957-.609 2.4-1.2q.076-.102.141-.202.077.107.165.217c.455.56 1.208 1.185 2.294 1.185s1.839-.625 2.294-1.185q.088-.11.165-.217.064.1.141.202c.443.591 1.204 1.2 2.4 1.2a.5.5 0 0 0 0-1c-.804 0-1.293-.391-1.6-.8a2.8 2.8 0 0 1-.412-.814l-.002-.009v.001a.5.5 0 0 0-.953-.055v.001l-.004.011-.021.05a3.6 3.6 0 0 1-.488.799c-.357.44-.854.815-1.518.815"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgHomeWaves16Filled);

export { ForwardRef as default };
