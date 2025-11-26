/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/favorito/route";
exports.ids = ["app/api/favorito/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffavorito%2Froute&page=%2Fapi%2Ffavorito%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffavorito%2Froute.ts&appDir=%2FUsers%2Fkaiofelipe%2FDocuments%2Fprojetos%20dev%2Fcinesmile%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkaiofelipe%2FDocuments%2Fprojetos%20dev%2Fcinesmile&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffavorito%2Froute&page=%2Fapi%2Ffavorito%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffavorito%2Froute.ts&appDir=%2FUsers%2Fkaiofelipe%2FDocuments%2Fprojetos%20dev%2Fcinesmile%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkaiofelipe%2FDocuments%2Fprojetos%20dev%2Fcinesmile&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_kaiofelipe_Documents_projetos_dev_cinesmile_src_app_api_favorito_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/favorito/route.ts */ \"(rsc)/./src/app/api/favorito/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/favorito/route\",\n        pathname: \"/api/favorito\",\n        filename: \"route\",\n        bundlePath: \"app/api/favorito/route\"\n    },\n    resolvedPagePath: \"/Users/kaiofelipe/Documents/projetos dev/cinesmile/src/app/api/favorito/route.ts\",\n    nextConfigOutput,\n    userland: _Users_kaiofelipe_Documents_projetos_dev_cinesmile_src_app_api_favorito_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZmYXZvcml0byUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZmF2b3JpdG8lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZmYXZvcml0byUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmthaW9mZWxpcGUlMkZEb2N1bWVudHMlMkZwcm9qZXRvcyUyMGRldiUyRmNpbmVzbWlsZSUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZrYWlvZmVsaXBlJTJGRG9jdW1lbnRzJTJGcHJvamV0b3MlMjBkZXYlMkZjaW5lc21pbGUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2dDO0FBQzdHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMva2Fpb2ZlbGlwZS9Eb2N1bWVudHMvcHJvamV0b3MgZGV2L2NpbmVzbWlsZS9zcmMvYXBwL2FwaS9mYXZvcml0by9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZmF2b3JpdG8vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9mYXZvcml0b1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZmF2b3JpdG8vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMva2Fpb2ZlbGlwZS9Eb2N1bWVudHMvcHJvamV0b3MgZGV2L2NpbmVzbWlsZS9zcmMvYXBwL2FwaS9mYXZvcml0by9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffavorito%2Froute&page=%2Fapi%2Ffavorito%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffavorito%2Froute.ts&appDir=%2FUsers%2Fkaiofelipe%2FDocuments%2Fprojetos%20dev%2Fcinesmile%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkaiofelipe%2FDocuments%2Fprojetos%20dev%2Fcinesmile&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/favorito/route.ts":
/*!***************************************!*\
  !*** ./src/app/api/favorito/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nconst dynamic = \"force-dynamic\";\nasync function POST(req) {\n    try {\n        const { ids } = await req.json();\n        if (!Array.isArray(ids) || ids.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json([]);\n        }\n        const resultados = await Promise.all(ids.map(async (id)=>{\n            const res = await fetch(`https://api.tvmaze.com/shows/${id}`);\n            if (!res.ok) return null;\n            const dados = await res.json();\n            return {\n                id: dados.id,\n                title: dados.name,\n                image: dados.image?.original || dados.image?.medium || \"/assets/image/sem-imagem.svg\"\n            };\n        }));\n        const filtrados = resultados.filter(Boolean);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(filtrados);\n    } catch (error) {\n        console.error(\"Erro na busca de favoritos:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Erro ao carregar filmes\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9mYXZvcml0by9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFFcEMsTUFBTUMsVUFBVSxnQkFBZ0I7QUFFaEMsZUFBZUMsS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxHQUFHLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO1FBRTlCLElBQUksQ0FBQ0MsTUFBTUMsT0FBTyxDQUFDSCxRQUFRQSxJQUFJSSxNQUFNLEtBQUssR0FBRztZQUMzQyxPQUFPUixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDLEVBQUU7UUFDN0I7UUFFQSxNQUFNSSxhQUFhLE1BQU1DLFFBQVFDLEdBQUcsQ0FDbENQLElBQUlRLEdBQUcsQ0FBQyxPQUFPQztZQUNiLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFRixJQUFJO1lBQzVELElBQUksQ0FBQ0MsSUFBSUUsRUFBRSxFQUFFLE9BQU87WUFDcEIsTUFBTUMsUUFBUSxNQUFNSCxJQUFJVCxJQUFJO1lBRTVCLE9BQU87Z0JBQ0xRLElBQUlJLE1BQU1KLEVBQUU7Z0JBQ1pLLE9BQU9ELE1BQU1FLElBQUk7Z0JBQ2pCQyxPQUNFSCxNQUFNRyxLQUFLLEVBQUVDLFlBQ2JKLE1BQU1HLEtBQUssRUFBRUUsVUFDYjtZQUNKO1FBQ0Y7UUFHRixNQUFNQyxZQUFZZCxXQUFXZSxNQUFNLENBQUNDO1FBRXBDLE9BQU96QixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDa0I7SUFDM0IsRUFBRSxPQUFPRyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywrQkFBK0JBO1FBQzdDLE9BQU8xQixxREFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtZQUFFcUIsT0FBTztRQUEwQixHQUNuQztZQUFFRSxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2thaW9mZWxpcGUvRG9jdW1lbnRzL3Byb2pldG9zIGRldi9jaW5lc21pbGUvc3JjL2FwcC9hcGkvZmF2b3JpdG8vcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBkeW5hbWljID0gXCJmb3JjZS1keW5hbWljXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgaWRzIH0gPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGlkcykgfHwgaWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFtdKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHRhZG9zID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBpZHMubWFwKGFzeW5jIChpZCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2lkfWApO1xuICAgICAgICBpZiAoIXJlcy5vaykgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IGRhZG9zID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBkYWRvcy5pZCxcbiAgICAgICAgICB0aXRsZTogZGFkb3MubmFtZSxcbiAgICAgICAgICBpbWFnZTpcbiAgICAgICAgICAgIGRhZG9zLmltYWdlPy5vcmlnaW5hbCB8fFxuICAgICAgICAgICAgZGFkb3MuaW1hZ2U/Lm1lZGl1bSB8fFxuICAgICAgICAgICAgXCIvYXNzZXRzL2ltYWdlL3NlbS1pbWFnZW0uc3ZnXCIsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdCBmaWx0cmFkb3MgPSByZXN1bHRhZG9zLmZpbHRlcihCb29sZWFuKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihmaWx0cmFkb3MpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIG5hIGJ1c2NhIGRlIGZhdm9yaXRvczpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiRXJybyBhbyBjYXJyZWdhciBmaWxtZXNcIiB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImR5bmFtaWMiLCJQT1NUIiwicmVxIiwiaWRzIiwianNvbiIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInJlc3VsdGFkb3MiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaWQiLCJyZXMiLCJmZXRjaCIsIm9rIiwiZGFkb3MiLCJ0aXRsZSIsIm5hbWUiLCJpbWFnZSIsIm9yaWdpbmFsIiwibWVkaXVtIiwiZmlsdHJhZG9zIiwiZmlsdGVyIiwiQm9vbGVhbiIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/favorito/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffavorito%2Froute&page=%2Fapi%2Ffavorito%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffavorito%2Froute.ts&appDir=%2FUsers%2Fkaiofelipe%2FDocuments%2Fprojetos%20dev%2Fcinesmile%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkaiofelipe%2FDocuments%2Fprojetos%20dev%2Fcinesmile&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();