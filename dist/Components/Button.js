"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles/Button.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = _ref => {
  let {
    className,
    type,
    text
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "primary_class_button",
    type: type
  }, text);
};
var _default = Button;
exports.default = _default;