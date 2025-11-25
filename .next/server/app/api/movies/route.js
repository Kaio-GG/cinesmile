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
exports.id = "app/api/movies/route";
exports.ids = ["app/api/movies/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmovies%2Froute&page=%2Fapi%2Fmovies%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmovies%2Froute.ts&appDir=%2FUsers%2Fkaiofelipe%2FDocuments%2Fprojetos%20dev%2Fcinesmile%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkaiofelipe%2FDocuments%2Fprojetos%20dev%2Fcinesmile&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmovies%2Froute&page=%2Fapi%2Fmovies%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmovies%2Froute.ts&appDir=%2FUsers%2Fkaiofelipe%2FDocuments%2Fprojetos%20dev%2Fcinesmile%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkaiofelipe%2FDocuments%2Fprojetos%20dev%2Fcinesmile&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_kaiofelipe_Documents_projetos_dev_cinesmile_src_app_api_movies_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/movies/route.ts */ \"(rsc)/./src/app/api/movies/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/movies/route\",\n        pathname: \"/api/movies\",\n        filename: \"route\",\n        bundlePath: \"app/api/movies/route\"\n    },\n    resolvedPagePath: \"/Users/kaiofelipe/Documents/projetos dev/cinesmile/src/app/api/movies/route.ts\",\n    nextConfigOutput,\n    userland: _Users_kaiofelipe_Documents_projetos_dev_cinesmile_src_app_api_movies_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZtb3ZpZXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm1vdmllcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm1vdmllcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmthaW9mZWxpcGUlMkZEb2N1bWVudHMlMkZwcm9qZXRvcyUyMGRldiUyRmNpbmVzbWlsZSUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZrYWlvZmVsaXBlJTJGRG9jdW1lbnRzJTJGcHJvamV0b3MlMjBkZXYlMkZjaW5lc21pbGUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzhCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMva2Fpb2ZlbGlwZS9Eb2N1bWVudHMvcHJvamV0b3MgZGV2L2NpbmVzbWlsZS9zcmMvYXBwL2FwaS9tb3ZpZXMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL21vdmllcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL21vdmllc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbW92aWVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2thaW9mZWxpcGUvRG9jdW1lbnRzL3Byb2pldG9zIGRldi9jaW5lc21pbGUvc3JjL2FwcC9hcGkvbW92aWVzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmovies%2Froute&page=%2Fapi%2Fmovies%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmovies%2Froute.ts&appDir=%2FUsers%2Fkaiofelipe%2FDocuments%2Fprojetos%20dev%2Fcinesmile%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkaiofelipe%2FDocuments%2Fprojetos%20dev%2Fcinesmile&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/movies/route.ts":
/*!*************************************!*\
  !*** ./src/app/api/movies/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nconst normalizar = (valor)=>valor.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\").replace(/[aeiou]/g, \"\");\nasync function GET(req) {\n    const { searchParams } = new URL(req.url);\n    const nome = searchParams.get(\"nome\") ?? \"\";\n    const genero = searchParams.get(\"genero\") ?? \"\";\n    let shows = [];\n    try {\n        if (nome) {\n            const res = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(nome)}`);\n            const dataApi = await res.json();\n            shows = dataApi.map((item)=>item.show);\n            const allRes = await fetch(\"https://api.tvmaze.com/shows\");\n            const todos = await allRes.json();\n            const alvo = normalizar(nome);\n            const extras = todos.filter((show)=>normalizar(show.name).includes(alvo));\n            const ids = new Set(shows.map((s)=>s.id));\n            extras.forEach((s)=>!ids.has(s.id) && shows.push(s));\n        } else {\n            const allRes = await fetch(\"https://api.tvmaze.com/shows\");\n            shows = await allRes.json();\n        }\n        const filtrados = shows.filter((show)=>{\n            const generoOk = genero ? show.genres.some((g)=>g.toLowerCase().includes(genero.toLowerCase())) : true;\n            return generoOk;\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(filtrados);\n    } catch (error) {\n        console.error(\"Erro na API:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Erro ao buscar dados\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9tb3ZpZXMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFlM0MsTUFBTUMsYUFBYSxDQUFDQyxRQUNsQkEsTUFDR0MsV0FBVyxHQUNYQyxTQUFTLENBQUMsT0FDVkMsT0FBTyxDQUFDLG9CQUFvQixJQUM1QkEsT0FBTyxDQUFDLFlBQVk7QUFFbEIsZUFBZUMsSUFBSUMsR0FBWTtJQUNwQyxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLElBQUlHLEdBQUc7SUFDeEMsTUFBTUMsT0FBT0gsYUFBYUksR0FBRyxDQUFDLFdBQVc7SUFDekMsTUFBTUMsU0FBU0wsYUFBYUksR0FBRyxDQUFDLGFBQWE7SUFFN0MsSUFBSUUsUUFBMEIsRUFBRTtJQUVoQyxJQUFJO1FBRUYsSUFBSUgsTUFBTTtZQUNSLE1BQU1JLE1BQU0sTUFBTUMsTUFDaEIsQ0FBQyxzQ0FBc0MsRUFBRUMsbUJBQW1CTixPQUFPO1lBRXJFLE1BQU1PLFVBQWdDLE1BQU1ILElBQUlJLElBQUk7WUFDcERMLFFBQVFJLFFBQVFFLEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxJQUFJO1lBRXZDLE1BQU1DLFNBQVMsTUFBTVAsTUFBTTtZQUMzQixNQUFNUSxRQUEwQixNQUFNRCxPQUFPSixJQUFJO1lBQ2pELE1BQU1NLE9BQU94QixXQUFXVTtZQUV4QixNQUFNZSxTQUFTRixNQUFNRyxNQUFNLENBQUMsQ0FBQ0wsT0FDM0JyQixXQUFXcUIsS0FBS00sSUFBSSxFQUFFQyxRQUFRLENBQUNKO1lBR2pDLE1BQU1LLE1BQU0sSUFBSUMsSUFBSWpCLE1BQU1NLEdBQUcsQ0FBQyxDQUFDWSxJQUFNQSxFQUFFQyxFQUFFO1lBQ3pDUCxPQUFPUSxPQUFPLENBQUMsQ0FBQ0YsSUFBTSxDQUFDRixJQUFJSyxHQUFHLENBQUNILEVBQUVDLEVBQUUsS0FBS25CLE1BQU1zQixJQUFJLENBQUNKO1FBQ3JELE9BRUs7WUFDSCxNQUFNVCxTQUFTLE1BQU1QLE1BQU07WUFDM0JGLFFBQVEsTUFBTVMsT0FBT0osSUFBSTtRQUMzQjtRQUVBLE1BQU1rQixZQUFZdkIsTUFBTWEsTUFBTSxDQUFDLENBQUNMO1lBQzlCLE1BQU1nQixXQUFXekIsU0FDYlMsS0FBS2lCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQ2hCQSxFQUFFdEMsV0FBVyxHQUFHMEIsUUFBUSxDQUFDaEIsT0FBT1YsV0FBVyxPQUU3QztZQUVKLE9BQU9tQztRQUNUO1FBRUEsT0FBT3RDLHFEQUFZQSxDQUFDbUIsSUFBSSxDQUFDa0I7SUFDM0IsRUFBRSxPQUFPSyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxnQkFBZ0JBO1FBQzlCLE9BQU8xQyxxREFBWUEsQ0FBQ21CLElBQUksQ0FDdEI7WUFBRXVCLE9BQU87UUFBdUIsR0FDaEM7WUFBRUUsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYWlvZmVsaXBlL0RvY3VtZW50cy9wcm9qZXRvcyBkZXYvY2luZXNtaWxlL3NyYy9hcHAvYXBpL21vdmllcy9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxudHlwZSBUdk1hemVTaG93QmFzZSA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBpbWFnZT86IHsgbWVkaXVtPzogc3RyaW5nOyBvcmlnaW5hbD86IHN0cmluZyB9O1xuICBnZW5yZXM6IHN0cmluZ1tdO1xuICBwcmVtaWVyZWQ/OiBzdHJpbmc7XG59O1xuXG50eXBlIFR2TWF6ZVNlYXJjaFJlc3VsdCA9IHtcbiAgc2NvcmU6IG51bWJlcjtcbiAgc2hvdzogVHZNYXplU2hvd0Jhc2U7XG59O1xuXG5jb25zdCBub3JtYWxpemFyID0gKHZhbG9yOiBzdHJpbmcpOiBzdHJpbmcgPT5cbiAgdmFsb3JcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5ub3JtYWxpemUoXCJORkRcIilcbiAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcbiAgICAucmVwbGFjZSgvW2FlaW91XS9nLCBcIlwiKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IFJlcXVlc3QpIHtcbiAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxLnVybCk7XG4gIGNvbnN0IG5vbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibm9tZVwiKSA/PyBcIlwiO1xuICBjb25zdCBnZW5lcm8gPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZ2VuZXJvXCIpID8/IFwiXCI7XG5cbiAgbGV0IHNob3dzOiBUdk1hemVTaG93QmFzZVtdID0gW107XG5cbiAgdHJ5IHtcblxuICAgIGlmIChub21lKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9JHtlbmNvZGVVUklDb21wb25lbnQobm9tZSl9YFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGFBcGk6IFR2TWF6ZVNlYXJjaFJlc3VsdFtdID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHNob3dzID0gZGF0YUFwaS5tYXAoKGl0ZW0pID0+IGl0ZW0uc2hvdyk7XG5cbiAgICAgIGNvbnN0IGFsbFJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93c1wiKTtcbiAgICAgIGNvbnN0IHRvZG9zOiBUdk1hemVTaG93QmFzZVtdID0gYXdhaXQgYWxsUmVzLmpzb24oKTtcbiAgICAgIGNvbnN0IGFsdm8gPSBub3JtYWxpemFyKG5vbWUpO1xuXG4gICAgICBjb25zdCBleHRyYXMgPSB0b2Rvcy5maWx0ZXIoKHNob3cpID0+XG4gICAgICAgIG5vcm1hbGl6YXIoc2hvdy5uYW1lKS5pbmNsdWRlcyhhbHZvKVxuICAgICAgKTtcblxuICAgICAgY29uc3QgaWRzID0gbmV3IFNldChzaG93cy5tYXAoKHMpID0+IHMuaWQpKTtcbiAgICAgIGV4dHJhcy5mb3JFYWNoKChzKSA9PiAhaWRzLmhhcyhzLmlkKSAmJiBzaG93cy5wdXNoKHMpKTtcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IGFsbFJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93c1wiKTtcbiAgICAgIHNob3dzID0gYXdhaXQgYWxsUmVzLmpzb24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0cmFkb3MgPSBzaG93cy5maWx0ZXIoKHNob3cpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyb09rID0gZ2VuZXJvXG4gICAgICAgID8gc2hvdy5nZW5yZXMuc29tZSgoZykgPT5cbiAgICAgICAgICAgIGcudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhnZW5lcm8udG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICApXG4gICAgICAgIDogdHJ1ZTtcblxuICAgICAgcmV0dXJuIGdlbmVyb09rO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGZpbHRyYWRvcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gbmEgQVBJOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogXCJFcnJvIGFvIGJ1c2NhciBkYWRvc1wiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibm9ybWFsaXphciIsInZhbG9yIiwidG9Mb3dlckNhc2UiLCJub3JtYWxpemUiLCJyZXBsYWNlIiwiR0VUIiwicmVxIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwibm9tZSIsImdldCIsImdlbmVybyIsInNob3dzIiwicmVzIiwiZmV0Y2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJkYXRhQXBpIiwianNvbiIsIm1hcCIsIml0ZW0iLCJzaG93IiwiYWxsUmVzIiwidG9kb3MiLCJhbHZvIiwiZXh0cmFzIiwiZmlsdGVyIiwibmFtZSIsImluY2x1ZGVzIiwiaWRzIiwiU2V0IiwicyIsImlkIiwiZm9yRWFjaCIsImhhcyIsInB1c2giLCJmaWx0cmFkb3MiLCJnZW5lcm9PayIsImdlbnJlcyIsInNvbWUiLCJnIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/movies/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fmovies%2Froute&page=%2Fapi%2Fmovies%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmovies%2Froute.ts&appDir=%2FUsers%2Fkaiofelipe%2FDocuments%2Fprojetos%20dev%2Fcinesmile%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkaiofelipe%2FDocuments%2Fprojetos%20dev%2Fcinesmile&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();