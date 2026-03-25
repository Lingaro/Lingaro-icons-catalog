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
var SvgDatatypeString16Filled = function SvgDatatypeString16Filled(_a, ref) {
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
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#i55ff24-a)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "i55ff24-b",
    width: 16,
    height: 17,
    x: 0,
    y: 0,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: "luminance"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 .001H0v16h16z"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#i55ff24-b)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.393 5.25a.75.75 0 0 0-1.407-.02l-1.935 5a.75.75 0 1 0 1.399.542l.104-.271h2.11l.09.25a.75.75 0 1 0 1.413-.5zM2.135 9.001l.52-1.343L3.132 9zM6 10.501v-5a.75.75 0 0 1 .75-.75h1.508c.168 0 .663 0 1.126.26.25.141.489.356.66.668.169.309.25.672.25 1.08 0 .406-.09.747-.242 1.025q.157.147.283.35c.191.314.283.688.283 1.108 0 .844-.402 1.401-.923 1.704a2.44 2.44 0 0 1-1.195.305H6.872v-.01a.75.75 0 0 1-.871-.74Zm1.5-.75h1c.12 0 .309-.025.441-.102a.3.3 0 0 0 .117-.11.6.6 0 0 0 .06-.297c0-.2-.042-.292-.064-.327a.23.23 0 0 0-.1-.087c-.137-.067-.327-.077-.518-.077H7.5zm.113-2.5h.669a.76.76 0 0 0 .357-.086.25.25 0 0 0 .095-.097.6.6 0 0 0 .06-.308c0-.212-.042-.317-.066-.36a.2.2 0 0 0-.08-.081c-.097-.055-.24-.068-.398-.068H7.5v1zm7.165-2.273c.522.258.916.738 1.178 1.468a.75.75 0 1 1-1.412.506c-.168-.468-.345-.587-.43-.628-.124-.062-.272-.073-.583-.073-.244 0-.389.075-.494.17a1.24 1.24 0 0 0-.307.494 2.8 2.8 0 0 0-.165.83q-.003.037-.002.052v.01c0 .406.007.89.163 1.289q.108.277.29.427c.117.096.297.19.598.223.092.01.29.01.483-.062a.8.8 0 0 0 .47-.454.75.75 0 1 1 1.367.616c-.636 1.411-2.035 1.441-2.486 1.391-.558-.062-1.022-.256-1.389-.559a2.5 2.5 0 0 1-.73-1.037c-.267-.683-.267-1.425-.267-1.807v-.046l.001-.028a4 4 0 0 1 .032-.408c.031-.252.095-.601.23-.961.133-.357.35-.765.713-1.09a2.2 2.2 0 0 1 1.493-.55h.035c.273 0 .748-.001 1.212.227"
  }))), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "i55ff24-a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h16v16H0z"
  }))));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgDatatypeString16Filled);

export { ForwardRef as default };
