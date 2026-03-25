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
var SvgCopilot24Filled = function SvgCopilot24Filled(_a, ref) {
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
    d: "M4 4.131C4.79 2.964 5.885 2 7.375 2h7.229c1.07 0 1.82.385 2.327 1.03.446.567.66 1.29.824 1.85l.01.037c.187.632.325 1.08.563 1.395.172.229.421.42.959.443h.26c1.15 0 2.057.33 2.662 1.023.585.672.773 1.557.786 2.426.024 1.711-.637 3.83-1.157 5.499l-.002.005c-.456 1.46-1.043 2.986-1.837 4.16-.788 1.166-1.885 2.13-3.374 2.13H9.39c-1.067-.001-1.815-.386-2.321-1.03-.447-.567-.66-1.29-.824-1.85l-.011-.036c-.186-.633-.324-1.08-.562-1.396-.172-.228-.422-.419-.959-.442h-.26c-1.15 0-2.058-.33-2.662-1.024-.586-.672-.774-1.557-.786-2.425-.025-1.712.636-3.83 1.157-5.5l.001-.005C2.62 6.83 3.207 5.304 4 4.131m5.477 11.61h.98c.956 0 1.8-.627 2.075-1.543l.484-1.614.948-3.197a3.7 3.7 0 0 1 .558-1.13h-.98c-.956 0-1.8.627-2.074 1.544l-.485 1.614-.002.007c-.35 1.174-.68 2.289-.945 3.189a3.7 3.7 0 0 1-.559 1.13m4.951-12.23c-.177.02-.358.071-.522.144-.228.102-.359.218-.406.282l-.004.006c-.202.278-.39.672-.584 1.196a32 32 0 0 0-.548 1.688l-.042.139a3.7 3.7 0 0 1 1.22-.21h3.302c-.234-.448-.376-.934-.494-1.337l-.024-.079c-.184-.625-.329-1.07-.574-1.383-.195-.248-.491-.457-1.148-.457q-.086 0-.176.01Zm-3.34 15.349a32 32 0 0 0 .547-1.689l.043-.139a3.7 3.7 0 0 1-1.221.21H7.156c.233.448.376.934.494 1.337l.023.08c.184.624.329 1.07.575 1.382.194.248.49.457 1.148.457.23 0 .48-.058.698-.155.227-.102.359-.218.406-.282l.001-.002c.203-.279.392-.673.587-1.2Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCopilot24Filled);

export { ForwardRef as default };
