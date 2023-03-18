"use strict";
exports.id = 927;
exports.ids = [927];
exports.modules = {

/***/ 4927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GalleryPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_ts_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9202);



function GalleryPage() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 md:gap-8 w-full h-full p-10 sm:py-12 sm:px-16 md:p-10 overflow-auto overscroll-contain",
            children: [
                _lib_ts_data__WEBPACK_IMPORTED_MODULE_2__/* .galleryPieces.sort */ .v.sort((a, b)=>a.order - b.order).map((piece, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-span-2 md:col-span-1 aspect-square relative bg-dark-gallery",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: piece.image,
                            alt: piece.title,
                            fill: true,
                            className: piece.classNames,
                            sizes: "100",
                            priority: true
                        })
                    }, `gallery-piece-${i}`)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-span-2 md:col-span-1 aspect-square relative bg-dark-gallery flex justify-center items-center text-gold font-avenir text-sm lg:text-lg text-center font-extralight tracking-wide p-2",
                    children: "More Coming Soon"
                })
            ]
        })
    });
}


/***/ })

};
;