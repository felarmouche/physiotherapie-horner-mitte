"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"e1f31c836a32\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZmVycmlcXERvY3VtZW50c1xcR2l0SHViXFxGcmFtZXdvcmtcXGFwcFxcZ2xvYmFscy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJlMWYzMWM4MzZhMzJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Slider.tsx":
/*!***********************************!*\
  !*** ./app/components/Slider.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst images = [\n    {\n        id: 1,\n        src: \"/images/1.webp\",\n        alt: \"Praxis Impression 1\"\n    },\n    {\n        id: 2,\n        src: \"/images/2.webp\",\n        alt: \"Praxis Impression 2\"\n    },\n    {\n        id: 3,\n        src: \"/images/3.webp\",\n        alt: \"Praxis Impression 3\"\n    },\n    {\n        id: 4,\n        src: \"/images/4.webp\",\n        alt: \"Praxis Impression 4\"\n    },\n    {\n        id: 5,\n        src: \"/images/4.webp\",\n        alt: \"Praxis Impression 5\"\n    },\n    {\n        id: 6,\n        src: \"/images/6.webp\",\n        alt: \"Praxis Impression 6\"\n    },\n    {\n        id: 7,\n        src: \"/images/7.webp\",\n        alt: \"Praxis Impression 7\"\n    },\n    {\n        id: 8,\n        src: \"/images/8.webp\",\n        alt: \"Praxis Impression 8\"\n    },\n    {\n        id: 9,\n        src: \"/images/9.webp\",\n        alt: \"Praxis Impression 9\"\n    }\n];\nfunction Slider() {\n    _s();\n    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const openModal = (image)=>setSelectedImage(image);\n    const closeModal = ()=>setSelectedImage(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-12 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-4xl md:text-5xl font-bold text-center text-secondary mb-12\",\n                        children: \"Impressionen\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ferri\\\\Documents\\\\GitHub\\\\Framework\\\\app\\\\components\\\\Slider.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2 md:grid-cols-3 gap-6\",\n                        children: images.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                                className: \"relative cursor-pointer overflow-hidden rounded-lg shadow-lg\",\n                                whileHover: {\n                                    scale: 1.05\n                                },\n                                onClick: ()=>openModal(image),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: image.src,\n                                        alt: image.alt,\n                                        className: \"w-full h-64 object-cover transition-all duration-300 ease-in-out\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ferri\\\\Documents\\\\GitHub\\\\Framework\\\\app\\\\components\\\\Slider.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 ease-in-out\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ferri\\\\Documents\\\\GitHub\\\\Framework\\\\app\\\\components\\\\Slider.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, image.id, true, {\n                                fileName: \"C:\\\\Users\\\\ferri\\\\Documents\\\\GitHub\\\\Framework\\\\app\\\\components\\\\Slider.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 25\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ferri\\\\Documents\\\\GitHub\\\\Framework\\\\app\\\\components\\\\Slider.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ferri\\\\Documents\\\\GitHub\\\\Framework\\\\app\\\\components\\\\Slider.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                children: selectedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    className: \"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75\",\n                    initial: {\n                        opacity: 0\n                    },\n                    animate: {\n                        opacity: 1\n                    },\n                    exit: {\n                        opacity: 0\n                    },\n                    onClick: closeModal,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        className: \"relative bg-light p-4 rounded-lg\",\n                        initial: {\n                            scale: 0.8\n                        },\n                        animate: {\n                            scale: 1\n                        },\n                        exit: {\n                            scale: 0.8\n                        },\n                        onClick: (e)=>e.stopPropagation(),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: closeModal,\n                                className: \"absolute top-2 right-2 text-3xl text-secondary hover:text-primary transition-colors\",\n                                children: \"\\xd7\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ferri\\\\Documents\\\\GitHub\\\\Framework\\\\app\\\\components\\\\Slider.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: selectedImage.src,\n                                alt: selectedImage.alt,\n                                className: \"max-w-full max-h-[80vh] object-contain\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ferri\\\\Documents\\\\GitHub\\\\Framework\\\\app\\\\components\\\\Slider.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ferri\\\\Documents\\\\GitHub\\\\Framework\\\\app\\\\components\\\\Slider.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ferri\\\\Documents\\\\GitHub\\\\Framework\\\\app\\\\components\\\\Slider.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ferri\\\\Documents\\\\GitHub\\\\Framework\\\\app\\\\components\\\\Slider.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ferri\\\\Documents\\\\GitHub\\\\Framework\\\\app\\\\components\\\\Slider.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(Slider, \"gNHFCSJ3h3sH8HFrpxN7hUqoxHs=\");\n_c = Slider;\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NsaWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMkM7QUFDYTtBQVF4RCxNQUFNSSxTQUFzQjtJQUN4QjtRQUFFQyxJQUFJO1FBQUdDLEtBQUs7UUFBa0JDLEtBQUs7SUFBc0I7SUFDM0Q7UUFBRUYsSUFBSTtRQUFHQyxLQUFLO1FBQWtCQyxLQUFLO0lBQXNCO0lBQzNEO1FBQUVGLElBQUk7UUFBR0MsS0FBSztRQUFrQkMsS0FBSztJQUFzQjtJQUMzRDtRQUFFRixJQUFJO1FBQUdDLEtBQUs7UUFBa0JDLEtBQUs7SUFBc0I7SUFDM0Q7UUFBRUYsSUFBSTtRQUFHQyxLQUFLO1FBQWtCQyxLQUFLO0lBQXNCO0lBQzNEO1FBQUVGLElBQUk7UUFBR0MsS0FBSztRQUFrQkMsS0FBSztJQUFzQjtJQUMzRDtRQUFFRixJQUFJO1FBQUdDLEtBQUs7UUFBa0JDLEtBQUs7SUFBc0I7SUFDM0Q7UUFBRUYsSUFBSTtRQUFHQyxLQUFLO1FBQWtCQyxLQUFLO0lBQXNCO0lBQzNEO1FBQUVGLElBQUk7UUFBR0MsS0FBSztRQUFrQkMsS0FBSztJQUFzQjtDQUM5RDtBQUVjLFNBQVNDOztJQUNwQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FBbUI7SUFFckUsTUFBTVUsWUFBWSxDQUFDQyxRQUEyQkYsaUJBQWlCRTtJQUMvRCxNQUFNQyxhQUFhLElBQVlILGlCQUFpQjtJQUVoRCxxQkFDSSw4REFBQ0k7UUFBUUMsV0FBVTs7MEJBQ2YsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDWCw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQWtFOzs7Ozs7a0NBR2hGLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDVlgsT0FBT2MsR0FBRyxDQUFDLENBQUNOLHNCQUNULDhEQUFDVixpREFBTUEsQ0FBQ2MsR0FBRztnQ0FFUEQsV0FBVTtnQ0FDVkksWUFBWTtvQ0FBRUMsT0FBTztnQ0FBSztnQ0FDMUJDLFNBQVMsSUFBTVYsVUFBVUM7O2tEQUV6Qiw4REFBQ1U7d0NBQ0doQixLQUFLTSxNQUFNTixHQUFHO3dDQUNkQyxLQUFLSyxNQUFNTCxHQUFHO3dDQUNkUSxXQUFVOzs7Ozs7a0RBRWQsOERBQUNDO3dDQUFJRCxXQUFVOzs7Ozs7OytCQVZWSCxNQUFNUCxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBCQWdCN0IsOERBQUNGLDBEQUFlQTswQkFDWE0sK0JBQ0csOERBQUNQLGlEQUFNQSxDQUFDYyxHQUFHO29CQUNQRCxXQUFVO29CQUNWUSxTQUFTO3dCQUFFQyxTQUFTO29CQUFFO29CQUN0QkMsU0FBUzt3QkFBRUQsU0FBUztvQkFBRTtvQkFDdEJFLE1BQU07d0JBQUVGLFNBQVM7b0JBQUU7b0JBQ25CSCxTQUFTUjs4QkFFVCw0RUFBQ1gsaURBQU1BLENBQUNjLEdBQUc7d0JBQ1BELFdBQVU7d0JBQ1ZRLFNBQVM7NEJBQUVILE9BQU87d0JBQUk7d0JBQ3RCSyxTQUFTOzRCQUFFTCxPQUFPO3dCQUFFO3dCQUNwQk0sTUFBTTs0QkFBRU4sT0FBTzt3QkFBSTt3QkFDbkJDLFNBQVMsQ0FBQ00sSUFBd0NBLEVBQUVDLGVBQWU7OzBDQUVuRSw4REFBQ0M7Z0NBQ0dSLFNBQVNSO2dDQUNURSxXQUFVOzBDQUNiOzs7Ozs7MENBR0QsOERBQUNPO2dDQUNHaEIsS0FBS0csY0FBY0gsR0FBRztnQ0FDdEJDLEtBQUtFLGNBQWNGLEdBQUc7Z0NBQ3RCUSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTFDO0dBaEV3QlA7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZmVycmlcXERvY3VtZW50c1xcR2l0SHViXFxGcmFtZXdvcmtcXGFwcFxcY29tcG9uZW50c1xcU2xpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwge0pTWCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5pbnRlcmZhY2UgSW1hZ2VUeXBlIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBzcmM6IHN0cmluZztcclxuICAgIGFsdDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBpbWFnZXM6IEltYWdlVHlwZVtdID0gW1xyXG4gICAgeyBpZDogMSwgc3JjOiBcIi9pbWFnZXMvMS53ZWJwXCIsIGFsdDogXCJQcmF4aXMgSW1wcmVzc2lvbiAxXCIgfSxcclxuICAgIHsgaWQ6IDIsIHNyYzogXCIvaW1hZ2VzLzIud2VicFwiLCBhbHQ6IFwiUHJheGlzIEltcHJlc3Npb24gMlwiIH0sXHJcbiAgICB7IGlkOiAzLCBzcmM6IFwiL2ltYWdlcy8zLndlYnBcIiwgYWx0OiBcIlByYXhpcyBJbXByZXNzaW9uIDNcIiB9LFxyXG4gICAgeyBpZDogNCwgc3JjOiBcIi9pbWFnZXMvNC53ZWJwXCIsIGFsdDogXCJQcmF4aXMgSW1wcmVzc2lvbiA0XCIgfSxcclxuICAgIHsgaWQ6IDUsIHNyYzogXCIvaW1hZ2VzLzQud2VicFwiLCBhbHQ6IFwiUHJheGlzIEltcHJlc3Npb24gNVwiIH0sXHJcbiAgICB7IGlkOiA2LCBzcmM6IFwiL2ltYWdlcy82LndlYnBcIiwgYWx0OiBcIlByYXhpcyBJbXByZXNzaW9uIDZcIiB9LFxyXG4gICAgeyBpZDogNywgc3JjOiBcIi9pbWFnZXMvNy53ZWJwXCIsIGFsdDogXCJQcmF4aXMgSW1wcmVzc2lvbiA3XCIgfSxcclxuICAgIHsgaWQ6IDgsIHNyYzogXCIvaW1hZ2VzLzgud2VicFwiLCBhbHQ6IFwiUHJheGlzIEltcHJlc3Npb24gOFwiIH0sXHJcbiAgICB7IGlkOiA5LCBzcmM6IFwiL2ltYWdlcy85LndlYnBcIiwgYWx0OiBcIlByYXhpcyBJbXByZXNzaW9uIDlcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEltYWdlLCBzZXRTZWxlY3RlZEltYWdlXSA9IHVzZVN0YXRlPEltYWdlVHlwZSB8IG51bGw+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9IChpbWFnZTogSW1hZ2VUeXBlKTogdm9pZCA9PiBzZXRTZWxlY3RlZEltYWdlKGltYWdlKTtcclxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKTogdm9pZCA9PiBzZXRTZWxlY3RlZEltYWdlKG51bGwpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTIgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXNlY29uZGFyeSBtYi0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEltcHJlc3Npb25lblxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbWFnZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1wb2ludGVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuTW9kYWwoaW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNjQgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktMCBob3ZlcjpiZy1vcGFjaXR5LTIwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLWxpZ2h0IHAtNCByb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgc2NhbGU6IDAuOCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBzY2FsZTogMSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdD17eyBzY2FsZTogMC44IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgdGV4dC0zeGwgdGV4dC1zZWNvbmRhcnkgaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkSW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17c2VsZWN0ZWRJbWFnZS5hbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctZnVsbCBtYXgtaC1bODB2aF0gb2JqZWN0LWNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJpbWFnZXMiLCJpZCIsInNyYyIsImFsdCIsIlNsaWRlciIsInNlbGVjdGVkSW1hZ2UiLCJzZXRTZWxlY3RlZEltYWdlIiwib3Blbk1vZGFsIiwiaW1hZ2UiLCJjbG9zZU1vZGFsIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwibWFwIiwid2hpbGVIb3ZlciIsInNjYWxlIiwib25DbGljayIsImltZyIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiYnV0dG9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Slider.tsx\n"));

/***/ })

});