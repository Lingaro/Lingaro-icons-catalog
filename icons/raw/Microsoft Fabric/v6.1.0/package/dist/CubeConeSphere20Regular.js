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
var SvgCubeConeSphere20Regular = function SvgCubeConeSphere20Regular(_a, ref) {
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
    d: "m6 11.695-1.727-.867a.45.45 0 0 1-.2-.188.6.6 0 0 1-.073-.255.505.505 0 0 1 .727-.446l1.773.881 1.773-.883a.51.51 0 0 1 .58.096.505.505 0 0 1 .077.609.45.45 0 0 1-.2.188L7 11.695v2.19a.5.5 0 1 1-1 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 3a4 4 0 0 0-4 4q0 .028.006.056l.003.025a2 2 0 0 0-.181.075l-3 1.5a1.4 1.4 0 0 0-.609.555A1.5 1.5 0 0 0 2 10v3.765c.004.279.083.551.228.789.14.24.35.434.6.555l3 1.5a1.53 1.53 0 0 0 1.344 0l3-1.5a1.4 1.4 0 0 0 .447-.334 3.4 3.4 0 0 0 .975.678q.39.183.8.32a5.2 5.2 0 0 0 1.563.224l.04-.002.038.002a5.2 5.2 0 0 0 1.563-.224q.41-.137.8-.32.425-.197.782-.5a2.8 2.8 0 0 0 .585-.68c.154-.249.235-.536.235-.828q0-.256-.07-.5a3 3 0 0 0-.18-.47l-3.305-6.69a.45.45 0 0 0-.187-.2.5.5 0 0 0-.25-.063L14 5.525h-.008a.5.5 0 0 0-.247.061A3.99 3.99 0 0 0 10 3m3 3.913-1.237 2.501a3 3 0 0 1-.776.406 1.6 1.6 0 0 0-.215-.609 1.4 1.4 0 0 0-.6-.555l-3-1.5a2 2 0 0 0-.162-.068l-.003-.022A.4.4 0 0 1 7 7a3 3 0 0 1 6-.087m-3 6.54v.312a.6.6 0 0 1-.078.258.46.46 0 0 1-.195.188l-3 1.5a.6.6 0 0 1-.227.054.6.6 0 0 1-.23-.054l-3-1.5a.45.45 0 0 1-.2-.188.5.5 0 0 1-.07-.258V10a.6.6 0 0 1 .081-.258.46.46 0 0 1 .195-.188l2.898-1.449.004.013.1-.049a.5.5 0 0 1 .454 0l.621.311-.01-.02L9.73 9.554c.085.04.154.106.2.188.046.078.07.167.07.258zm6.336.89q-.272.187-.578.313a5 5 0 0 1-.53.187c-.38.104-.772.156-1.166.157h-.124a4.4 4.4 0 0 1-1.165-.157 5 5 0 0 1-.53-.187 3 3 0 0 1-.579-.313 2.3 2.3 0 0 1-.464-.421.8.8 0 0 1-.2-.524.7.7 0 0 1 .047-.242q.04-.12.1-.234L14 7.132l2.852 5.79q.06.113.1.234.045.117.048.242a.8.8 0 0 1-.195.524 2.3 2.3 0 0 1-.469.42Z"
  }));
};
var ForwardRef = /*#__PURE__*/forwardRef(SvgCubeConeSphere20Regular);

export { ForwardRef as default };
