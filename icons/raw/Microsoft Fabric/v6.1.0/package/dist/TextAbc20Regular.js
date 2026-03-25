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
var SvgTextAbc20Regular = function SvgTextAbc20Regular(_a, ref) {
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
    d: "M17.905 8.533a2.2 2.2 0 0 0-1.053-1.33 2.4 2.4 0 0 0-1.11-.2h-.026a1.94 1.94 0 0 0-1.327.488 2.5 2.5 0 0 0-.646.99 4 4 0 0 0-.242 1.2v.147a4.7 4.7 0 0 0 .249 1.724c.135.363.361.685.657.936.36.286.798.46 1.257.5a2.155 2.155 0 0 0 2.23-1.246.5.5 0 0 0-.911-.411 1.155 1.155 0 0 1-1.208.663 1.35 1.35 0 0 1-.73-.28 1.26 1.26 0 0 1-.363-.53 3.9 3.9 0 0 1-.185-1.38v-.07a3.1 3.1 0 0 1 .18-.905 1.5 1.5 0 0 1 .375-.592.94.94 0 0 1 .664-.233c.236-.02.473.014.694.1a1.23 1.23 0 0 1 .554.769.5.5 0 0 0 .94-.338v-.002Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.44 7.004a.5.5 0 0 1 .464.333l1.774 5a.5.5 0 0 1-.942.334l-.26-.728v.06h-2.25l-.263.682a.5.5 0 0 1-.932-.362l1.935-5a.5.5 0 0 1 .474-.32Zm-.028 1.938-.798 2.062h1.53zm6.878-.179c.012.384-.1.762-.32 1.077.161.113.298.26.4.428.171.296.257.635.247.977a1.62 1.62 0 0 1-.8 1.488 2.2 2.2 0 0 1-1.07.27h-1.75a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1.5c.35-.01.699.069 1.01.23.239.134.434.332.565.57.152.297.227.627.218.96m-1.096-.481a.44.44 0 0 0-.176-.178 1.1 1.1 0 0 0-.521-.1h-1v1.5h1.022c.174.003.346-.04.5-.122a.63.63 0 0 0 .275-.62 1 1 0 0 0-.1-.48m-.511 2.222H9.497v1.5h1.25a1.2 1.2 0 0 0 .564-.14.63.63 0 0 0 .3-.622.87.87 0 0 0-.1-.457.5.5 0 0 0-.2-.181 1.5 1.5 0 0 0-.628-.1"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgTextAbc20Regular);

export { ForwardRef as default };
