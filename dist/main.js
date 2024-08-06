/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/menu.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/menu.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */
.hamburger {
  padding: 5px 18px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
.hamburger:hover {
  opacity: 0.7;
}
.hamburger.is-active:hover {
  opacity: 0.7;
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #475480;
}

.hamburger-box {
  width: 25px;
  height: 19.5px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -1.25px;
}
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  width: 25px;
  height: 2.5px;
  background-color: #475480;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before, .hamburger-inner::after {
  content: "";
  display: block;
}
.hamburger-inner::before {
  top: -8.5px;
}
.hamburger-inner::after {
  bottom: -8.5px;
}

/*
 * 3DX
 */
.hamburger--3dx .hamburger-box {
  perspective: 50px;
}
.hamburger--3dx .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dx .hamburger-inner::before, .hamburger--3dx .hamburger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dx.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateY(180deg);
}
.hamburger--3dx.is-active .hamburger-inner::before {
  transform: translate3d(0, 8.5px, 0) rotate(45deg);
}
.hamburger--3dx.is-active .hamburger-inner::after {
  transform: translate3d(0, -8.5px, 0) rotate(-45deg);
}

/*
 * 3DX Reverse
 */
.hamburger--3dx-r .hamburger-box {
  perspective: 50px;
}
.hamburger--3dx-r .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dx-r .hamburger-inner::before, .hamburger--3dx-r .hamburger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dx-r.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateY(-180deg);
}
.hamburger--3dx-r.is-active .hamburger-inner::before {
  transform: translate3d(0, 8.5px, 0) rotate(45deg);
}
.hamburger--3dx-r.is-active .hamburger-inner::after {
  transform: translate3d(0, -8.5px, 0) rotate(-45deg);
}

/*
 * 3DY
 */
.hamburger--3dy .hamburger-box {
  perspective: 50px;
}
.hamburger--3dy .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dy .hamburger-inner::before, .hamburger--3dy .hamburger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dy.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(-180deg);
}
.hamburger--3dy.is-active .hamburger-inner::before {
  transform: translate3d(0, 8.5px, 0) rotate(45deg);
}
.hamburger--3dy.is-active .hamburger-inner::after {
  transform: translate3d(0, -8.5px, 0) rotate(-45deg);
}

/*
 * 3DY Reverse
 */
.hamburger--3dy-r .hamburger-box {
  perspective: 50px;
}
.hamburger--3dy-r .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dy-r .hamburger-inner::before, .hamburger--3dy-r .hamburger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dy-r.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(180deg);
}
.hamburger--3dy-r.is-active .hamburger-inner::before {
  transform: translate3d(0, 8.5px, 0) rotate(45deg);
}
.hamburger--3dy-r.is-active .hamburger-inner::after {
  transform: translate3d(0, -8.5px, 0) rotate(-45deg);
}

/*
 * 3DXY
 */
.hamburger--3dxy .hamburger-box {
  perspective: 50px;
}
.hamburger--3dxy .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dxy .hamburger-inner::before, .hamburger--3dxy .hamburger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dxy.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(180deg) rotateY(180deg);
}
.hamburger--3dxy.is-active .hamburger-inner::before {
  transform: translate3d(0, 8.5px, 0) rotate(45deg);
}
.hamburger--3dxy.is-active .hamburger-inner::after {
  transform: translate3d(0, -8.5px, 0) rotate(-45deg);
}

/*
 * 3DXY Reverse
 */
.hamburger--3dxy-r .hamburger-box {
  perspective: 50px;
}
.hamburger--3dxy-r .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dxy-r .hamburger-inner::before, .hamburger--3dxy-r .hamburger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dxy-r.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg);
}
.hamburger--3dxy-r.is-active .hamburger-inner::before {
  transform: translate3d(0, 8.5px, 0) rotate(45deg);
}
.hamburger--3dxy-r.is-active .hamburger-inner::after {
  transform: translate3d(0, -8.5px, 0) rotate(-45deg);
}

/*
 * Arrow
 */
.hamburger--arrow.is-active .hamburger-inner::before {
  transform: translate3d(-5px, 0, 0) rotate(-45deg) scale(0.7, 1);
}
.hamburger--arrow.is-active .hamburger-inner::after {
  transform: translate3d(-5px, 0, 0) rotate(45deg) scale(0.7, 1);
}

/*
 * Arrow Right
 */
.hamburger--arrow-r.is-active .hamburger-inner::before {
  transform: translate3d(5px, 0, 0) rotate(45deg) scale(0.7, 1);
}
.hamburger--arrow-r.is-active .hamburger-inner::after {
  transform: translate3d(5px, 0, 0) rotate(-45deg) scale(0.7, 1);
}

/*
 * Arrow Alt
 */
.hamburger--arrowalt .hamburger-inner::before {
  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.hamburger--arrowalt .hamburger-inner::after {
  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.hamburger--arrowalt.is-active .hamburger-inner::before {
  top: 0;
  transform: translate3d(-5px, -6.25px, 0) rotate(-45deg) scale(0.7, 1);
  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
}
.hamburger--arrowalt.is-active .hamburger-inner::after {
  bottom: 0;
  transform: translate3d(-5px, 6.25px, 0) rotate(45deg) scale(0.7, 1);
  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
}

/*
 * Arrow Alt Right
 */
.hamburger--arrowalt-r .hamburger-inner::before {
  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.hamburger--arrowalt-r .hamburger-inner::after {
  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.hamburger--arrowalt-r.is-active .hamburger-inner::before {
  top: 0;
  transform: translate3d(5px, -6.25px, 0) rotate(45deg) scale(0.7, 1);
  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
}
.hamburger--arrowalt-r.is-active .hamburger-inner::after {
  bottom: 0;
  transform: translate3d(5px, 6.25px, 0) rotate(-45deg) scale(0.7, 1);
  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
}

/*
 * Arrow Turn
 */
.hamburger--arrowturn.is-active .hamburger-inner {
  transform: rotate(-180deg);
}
.hamburger--arrowturn.is-active .hamburger-inner::before {
  transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);
}
.hamburger--arrowturn.is-active .hamburger-inner::after {
  transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);
}

/*
 * Arrow Turn Right
 */
.hamburger--arrowturn-r.is-active .hamburger-inner {
  transform: rotate(-180deg);
}
.hamburger--arrowturn-r.is-active .hamburger-inner::before {
  transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);
}
.hamburger--arrowturn-r.is-active .hamburger-inner::after {
  transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);
}

/*
 * Boring
 */
.hamburger--boring .hamburger-inner, .hamburger--boring .hamburger-inner::before, .hamburger--boring .hamburger-inner::after {
  transition-property: none;
}
.hamburger--boring.is-active .hamburger-inner {
  transform: rotate(45deg);
}
.hamburger--boring.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
}
.hamburger--boring.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
}

/*
 * Collapse
 */
.hamburger--collapse .hamburger-inner {
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--collapse .hamburger-inner::after {
  top: -17px;
  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
}
.hamburger--collapse .hamburger-inner::before {
  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--collapse.is-active .hamburger-inner {
  transform: translate3d(0, -8.5px, 0) rotate(-45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--collapse.is-active .hamburger-inner::after {
  top: 0;
  opacity: 0;
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
}
.hamburger--collapse.is-active .hamburger-inner::before {
  top: 0;
  transform: rotate(-90deg);
  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
}

/*
 * Collapse Reverse
 */
.hamburger--collapse-r .hamburger-inner {
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--collapse-r .hamburger-inner::after {
  top: -17px;
  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
}
.hamburger--collapse-r .hamburger-inner::before {
  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--collapse-r.is-active .hamburger-inner {
  transform: translate3d(0, -8.5px, 0) rotate(45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--collapse-r.is-active .hamburger-inner::after {
  top: 0;
  opacity: 0;
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
}
.hamburger--collapse-r.is-active .hamburger-inner::before {
  top: 0;
  transform: rotate(90deg);
  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
}

/*
 * Elastic
 */
.hamburger--elastic .hamburger-inner {
  top: 1.25px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hamburger--elastic .hamburger-inner::before {
  top: 8.5px;
  transition: opacity 0.125s 0.275s ease;
}
.hamburger--elastic .hamburger-inner::after {
  top: 17px;
  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hamburger--elastic.is-active .hamburger-inner {
  transform: translate3d(0, 8.5px, 0) rotate(135deg);
  transition-delay: 0.075s;
}
.hamburger--elastic.is-active .hamburger-inner::before {
  transition-delay: 0s;
  opacity: 0;
}
.hamburger--elastic.is-active .hamburger-inner::after {
  transform: translate3d(0, -17px, 0) rotate(-270deg);
  transition-delay: 0.075s;
}

/*
 * Elastic Reverse
 */
.hamburger--elastic-r .hamburger-inner {
  top: 1.25px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hamburger--elastic-r .hamburger-inner::before {
  top: 8.5px;
  transition: opacity 0.125s 0.275s ease;
}
.hamburger--elastic-r .hamburger-inner::after {
  top: 17px;
  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hamburger--elastic-r.is-active .hamburger-inner {
  transform: translate3d(0, 8.5px, 0) rotate(-135deg);
  transition-delay: 0.075s;
}
.hamburger--elastic-r.is-active .hamburger-inner::before {
  transition-delay: 0s;
  opacity: 0;
}
.hamburger--elastic-r.is-active .hamburger-inner::after {
  transform: translate3d(0, -17px, 0) rotate(270deg);
  transition-delay: 0.075s;
}

/*
 * Emphatic
 */
.hamburger--emphatic {
  overflow: hidden;
}
.hamburger--emphatic .hamburger-inner {
  transition: background-color 0.125s 0.175s ease-in;
}
.hamburger--emphatic .hamburger-inner::before {
  left: 0;
  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
}
.hamburger--emphatic .hamburger-inner::after {
  top: 8.5px;
  right: 0;
  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
}
.hamburger--emphatic.is-active .hamburger-inner {
  transition-delay: 0s;
  transition-timing-function: ease-out;
  background-color: transparent !important;
}
.hamburger--emphatic.is-active .hamburger-inner::before {
  left: -50px;
  top: -50px;
  transform: translate3d(50px, 50px, 0) rotate(45deg);
  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.hamburger--emphatic.is-active .hamburger-inner::after {
  right: -50px;
  top: -50px;
  transform: translate3d(-50px, 50px, 0) rotate(-45deg);
  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}

/*
 * Emphatic Reverse
 */
.hamburger--emphatic-r {
  overflow: hidden;
}
.hamburger--emphatic-r .hamburger-inner {
  transition: background-color 0.125s 0.175s ease-in;
}
.hamburger--emphatic-r .hamburger-inner::before {
  left: 0;
  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;
}
.hamburger--emphatic-r .hamburger-inner::after {
  top: 8.5px;
  right: 0;
  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;
}
.hamburger--emphatic-r.is-active .hamburger-inner {
  transition-delay: 0s;
  transition-timing-function: ease-out;
  background-color: transparent !important;
}
.hamburger--emphatic-r.is-active .hamburger-inner::before {
  left: -50px;
  top: 50px;
  transform: translate3d(50px, -50px, 0) rotate(-45deg);
  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.hamburger--emphatic-r.is-active .hamburger-inner::after {
  right: -50px;
  top: 50px;
  transform: translate3d(-50px, -50px, 0) rotate(45deg);
  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);
}

/*
 * Minus
 */
.hamburger--minus .hamburger-inner::before, .hamburger--minus .hamburger-inner::after {
  transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;
}
.hamburger--minus.is-active .hamburger-inner::before, .hamburger--minus.is-active .hamburger-inner::after {
  opacity: 0;
  transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;
}
.hamburger--minus.is-active .hamburger-inner::before {
  top: 0;
}
.hamburger--minus.is-active .hamburger-inner::after {
  bottom: 0;
}

/*
 * Slider
 */
.hamburger--slider .hamburger-inner {
  top: 1.25px;
}
.hamburger--slider .hamburger-inner::before {
  top: 8.5px;
  transition-property: transform, opacity;
  transition-timing-function: ease;
  transition-duration: 0.15s;
}
.hamburger--slider .hamburger-inner::after {
  top: 17px;
}
.hamburger--slider.is-active .hamburger-inner {
  transform: translate3d(0, 8.5px, 0) rotate(45deg);
}
.hamburger--slider.is-active .hamburger-inner::before {
  transform: rotate(-45deg) translate3d(-3.5714285714px, -6px, 0);
  opacity: 0;
}
.hamburger--slider.is-active .hamburger-inner::after {
  transform: translate3d(0, -17px, 0) rotate(-90deg);
}

/*
 * Slider Reverse
 */
.hamburger--slider-r .hamburger-inner {
  top: 1.25px;
}
.hamburger--slider-r .hamburger-inner::before {
  top: 8.5px;
  transition-property: transform, opacity;
  transition-timing-function: ease;
  transition-duration: 0.15s;
}
.hamburger--slider-r .hamburger-inner::after {
  top: 17px;
}
.hamburger--slider-r.is-active .hamburger-inner {
  transform: translate3d(0, 8.5px, 0) rotate(-45deg);
}
.hamburger--slider-r.is-active .hamburger-inner::before {
  transform: rotate(45deg) translate3d(3.5714285714px, -6px, 0);
  opacity: 0;
}
.hamburger--slider-r.is-active .hamburger-inner::after {
  transform: translate3d(0, -17px, 0) rotate(90deg);
}

/*
 * Spin
 */
.hamburger--spin .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spin .hamburger-inner::before {
  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
}
.hamburger--spin .hamburger-inner::after {
  transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spin.is-active .hamburger-inner {
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--spin.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
}
.hamburger--spin.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}

/*
 * Spin Reverse
 */
.hamburger--spin-r .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spin-r .hamburger-inner::before {
  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
}
.hamburger--spin-r .hamburger-inner::after {
  transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spin-r.is-active .hamburger-inner {
  transform: rotate(-225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--spin-r.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
}
.hamburger--spin-r.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(90deg);
  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}

/*
 * Spring
 */
.hamburger--spring .hamburger-inner {
  top: 1.25px;
  transition: background-color 0s 0.13s linear;
}
.hamburger--spring .hamburger-inner::before {
  top: 8.5px;
  transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spring .hamburger-inner::after {
  top: 17px;
  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spring.is-active .hamburger-inner {
  transition-delay: 0.22s;
  background-color: transparent !important;
}
.hamburger--spring.is-active .hamburger-inner::before {
  top: 0;
  transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translate3d(0, 8.5px, 0) rotate(45deg);
}
.hamburger--spring.is-active .hamburger-inner::after {
  top: 0;
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translate3d(0, 8.5px, 0) rotate(-45deg);
}

/*
 * Spring Reverse
 */
.hamburger--spring-r .hamburger-inner {
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spring-r .hamburger-inner::after {
  top: -17px;
  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear;
}
.hamburger--spring-r .hamburger-inner::before {
  transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spring-r.is-active .hamburger-inner {
  transform: translate3d(0, -8.5px, 0) rotate(-45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--spring-r.is-active .hamburger-inner::after {
  top: 0;
  opacity: 0;
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear;
}
.hamburger--spring-r.is-active .hamburger-inner::before {
  top: 0;
  transform: rotate(90deg);
  transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
}

/*
 * Stand
 */
.hamburger--stand .hamburger-inner {
  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear;
}
.hamburger--stand .hamburger-inner::before {
  transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--stand .hamburger-inner::after {
  transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--stand.is-active .hamburger-inner {
  transform: rotate(90deg);
  background-color: transparent !important;
  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;
}
.hamburger--stand.is-active .hamburger-inner::before {
  top: 0;
  transform: rotate(-45deg);
  transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--stand.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(45deg);
  transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
}

/*
 * Stand Reverse
 */
.hamburger--stand-r .hamburger-inner {
  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear;
}
.hamburger--stand-r .hamburger-inner::before {
  transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--stand-r .hamburger-inner::after {
  transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--stand-r.is-active .hamburger-inner {
  transform: rotate(-90deg);
  background-color: transparent !important;
  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;
}
.hamburger--stand-r.is-active .hamburger-inner::before {
  top: 0;
  transform: rotate(-45deg);
  transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--stand-r.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(45deg);
  transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
}

/*
 * Squeeze
 */
.hamburger--squeeze .hamburger-inner {
  transition-duration: 0.075s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--squeeze .hamburger-inner::before {
  transition: top 0.075s 0.12s ease, opacity 0.075s ease;
}
.hamburger--squeeze .hamburger-inner::after {
  transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--squeeze.is-active .hamburger-inner {
  transform: rotate(45deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--squeeze.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.075s ease, opacity 0.075s 0.12s ease;
}
.hamburger--squeeze.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}

/*
 * Vortex
 */
.hamburger--vortex .hamburger-inner {
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
.hamburger--vortex .hamburger-inner::before, .hamburger--vortex .hamburger-inner::after {
  transition-duration: 0s;
  transition-delay: 0.1s;
  transition-timing-function: linear;
}
.hamburger--vortex .hamburger-inner::before {
  transition-property: top, opacity;
}
.hamburger--vortex .hamburger-inner::after {
  transition-property: bottom, transform;
}
.hamburger--vortex.is-active .hamburger-inner {
  transform: rotate(765deg);
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
.hamburger--vortex.is-active .hamburger-inner::before, .hamburger--vortex.is-active .hamburger-inner::after {
  transition-delay: 0s;
}
.hamburger--vortex.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
}
.hamburger--vortex.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(90deg);
}

/*
 * Vortex Reverse
 */
.hamburger--vortex-r .hamburger-inner {
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
.hamburger--vortex-r .hamburger-inner::before, .hamburger--vortex-r .hamburger-inner::after {
  transition-duration: 0s;
  transition-delay: 0.1s;
  transition-timing-function: linear;
}
.hamburger--vortex-r .hamburger-inner::before {
  transition-property: top, opacity;
}
.hamburger--vortex-r .hamburger-inner::after {
  transition-property: bottom, transform;
}
.hamburger--vortex-r.is-active .hamburger-inner {
  transform: rotate(-765deg);
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
.hamburger--vortex-r.is-active .hamburger-inner::before, .hamburger--vortex-r.is-active .hamburger-inner::after {
  transition-delay: 0s;
}
.hamburger--vortex-r.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
}
.hamburger--vortex-r.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
}

.menu {
  margin: 0;
  padding: 0;
  color: #475480;
}
.menu > * {
  display: inline-block;
}
.menu a {
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: inherit;
}
.menu .title {
  padding: 0 9px;
  color: #475480;
  font-size: 30px;
  margin: 0;
}
.menu .title a {
  color: #475480;
}
.menu .title a:hover {
  color: #629cf3;
}
.menu .dropdown {
  margin: 0 9px;
  display: inline-block;
}
.menu .dropdown .dropdown-header {
  border-left: 2px solid transparent;
  padding: 18px 9px;
}
.menu .dropdown ul {
  position: absolute;
  margin: 0;
  padding: 0;
  list-style-type: none;
  max-height: 0;
  overflow: hidden;
}
.menu .dropdown ul li {
  min-width: 130px;
  padding: 9px;
}
.menu .dropdown ul li:hover {
  color: white;
  background-color: #629cf3;
}
.menu .dropdown:hover > * {
  border-left: 2px solid #629cf3;
  cursor: pointer;
  background-color: #f0e7ff;
}
.menu .dropdown:hover > ul {
  max-height: 700px;
  transition: max-height 0.9s;
}
.menu .hamburger {
  height: 40px;
  display: none;
}
@media (max-width: 800px) {
  .menu .hamburger {
    display: inline-block;
  }
  .menu .dropdown-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(45vw, 1fr));
    min-height: 90vh;
    max-width: 90vw;
    padding-top: 20px;
    background-color: #f0e7ff;
    transform: translateX(-800px);
    transition: 0.15s;
    position: absolute;
  }
  .menu .dropdown-container.hide-mobile {
    display: none;
  }
  .menu .dropdown-container.is-active {
    transform: translateX(0);
  }
  .menu .hamburger.is-active {
    background-color: #f0e7ff;
  }
  .menu .hamburger.flash {
    background-color: #629cf3;
  }
  .menu .dropdown:hover > * {
    cursor: inherit;
  }
  .menu .dropdown ul {
    max-height: 700px;
    position: relative;
    padding-left: 9px;
  }
  .menu .dropdown ul li:hover {
    color: #629cf3;
    background-color: inherit;
  }
  .menu .dropdown .dropdown-header {
    border-left: none;
    padding: 9px;
    font-size: 18px;
    font-weight: 900;
  }
  .menu .dropdown:hover > * {
    border-left: none;
    background-color: inherit;
  }
}`, "",{"version":3,"sources":["webpack://./node_modules/hamburgers/_sass/hamburgers/hamburgers.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/_base.scss","webpack://./sass/menu.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_3dx.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_3dx-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_3dy.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_3dy-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_3dxy.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_3dxy-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_arrow.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_arrow-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_arrowalt.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_arrowalt-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_arrowturn.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_arrowturn-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_boring.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_collapse.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_collapse-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_elastic.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_elastic-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_emphatic.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_emphatic-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_minus.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_slider.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_slider-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_spin.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_spin-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_spring.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_spring-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_stand.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_stand-r.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_squeeze.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_vortex.scss","webpack://./node_modules/hamburgers/_sass/hamburgers/types/_vortex-r.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./sass/menu.scss":
/*!************************!*\
  !*** ./sass/menu.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./menu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/menu.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_menu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/menu.scss */ "./sass/menu.scss");


const hamburger = document.querySelector('.hamburger');
const dropdownContainer = document.querySelector('.dropdown-container');

hamburger.addEventListener('click', function hamburgerClick() {
  hamburger.classList.add('flash');
  setTimeout(() => hamburger.classList.remove('flash'), 150);
  this.classList.toggle('is-active');
  dropdownContainer.classList.toggle('is-active');
});

const smallWindow = window.matchMedia('(max-width: 800px)');
const largeWindow = window.matchMedia('(min-width: 800px)');

function temporarilyHideDropdown() {
  dropdownContainer.classList.add('hide-mobile');
  setTimeout(() => dropdownContainer.classList.remove('hide-mobile'), 800);
}

function hideDropdownTransition(e) {
  if (e.matches) {
    temporarilyHideDropdown();
  }
}

function resetDropdown() {
  hamburger.classList.remove('is-active');
  dropdownContainer.classList.remove('is-active');
}

smallWindow.addEventListener('change', hideDropdownTransition);
largeWindow.addEventListener('change', resetDropdown);

temporarilyHideDropdown();

/******/ })()
;
//# sourceMappingURL=main.js.map