require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__comment__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__post__["a"]; });



__WEBPACK_IMPORTED_MODULE_0__comment__["a" /* comment */].belongsTo(__WEBPACK_IMPORTED_MODULE_1__post__["a" /* post */]);



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return db; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a; });


const db = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a("", "", "", {
  dialect: "sqlite",
  storage: "./db.sqlite"
});



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(6);


const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();



app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json({ limit: "50mb" }));
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.urlencoded({ extended: false, limit: "50mb" }));

app.use("/api", __WEBPACK_IMPORTED_MODULE_2__routes__["a" /* apiRouter */]);

app.listen(3000, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("RUnning on port 3000");
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller_post__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controller_comment__ = __webpack_require__(12);




const apiRouter = __WEBPACK_IMPORTED_MODULE_0_express___default()();

apiRouter.post("/post", __WEBPACK_IMPORTED_MODULE_1__controller_post__["a" /* createPost */]);
apiRouter.get("/post/all", __WEBPACK_IMPORTED_MODULE_1__controller_post__["b" /* getAllPost */]);
apiRouter.get("/post/:id", __WEBPACK_IMPORTED_MODULE_1__controller_post__["c" /* getPost */]);

apiRouter.post("/comment", __WEBPACK_IMPORTED_MODULE_2__controller_comment__["a" /* createComment */]);
apiRouter.get("/comment/:id", __WEBPACK_IMPORTED_MODULE_2__controller_comment__["b" /* getComment */]);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllPost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_post__ = __webpack_require__(8);


const createPost = async (req, res) => {
  res.json((await post.create(req.body.title, req.body.caption, req.body.link, req.body.lat, req.body.lat)));
};

const getPost = async (req, res) => {
  res.json((await findById(req.params.id)));
};

const getAllPost = async (req, res) => {
  res.json((await findAll()));
};



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export read */
/* unused harmony export findAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(1);


const create = (title, caption, link, lat, long) => {
  return __WEBPACK_IMPORTED_MODULE_0__model__["b" /* post */].create({
    title: title,
    caption: caption,
    link: link,
    lat: lat,
    long: long
  });
};

const read = id => {
  return __WEBPACK_IMPORTED_MODULE_0__model__["b" /* post */].findById(id);
};

const readAll = () => {
  return __WEBPACK_IMPORTED_MODULE_0__model__["b" /* post */].findAll();
};



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return comment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__db__ = __webpack_require__(2);
// post_id, caption, link


const comment = __WEBPACK_IMPORTED_MODULE_0__db__["b" /* db */].define("comment", {
  caption: __WEBPACK_IMPORTED_MODULE_0__db__["a" /* Sequelize */].STRING,
  link: __WEBPACK_IMPORTED_MODULE_0__db__["a" /* Sequelize */].STRING
});



/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__db__ = __webpack_require__(2);
//lat and long, title, gif content, caption, link



const post = __WEBPACK_IMPORTED_MODULE_0__db__["b" /* db */].define("post", {
  title: __WEBPACK_IMPORTED_MODULE_0__db__["a" /* Sequelize */].STRING,
  caption: __WEBPACK_IMPORTED_MODULE_0__db__["a" /* Sequelize */].STRING,
  link: __WEBPACK_IMPORTED_MODULE_0__db__["a" /* Sequelize */].STRING,
  lat: __WEBPACK_IMPORTED_MODULE_0__db__["a" /* Sequelize */].STRING,
  long: __WEBPACK_IMPORTED_MODULE_0__db__["a" /* Sequelize */].STRING
});



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getComment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_comment__ = __webpack_require__(13);


const createComment = async (req, res) => {
  res.json((await Object(__WEBPACK_IMPORTED_MODULE_0__services_comment__["a" /* create */])(req.body.post_id, req.body.caption)));
};

const getComment = async (req, res) => {
  res.json((await find(req.params.post_id)));
};



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* unused harmony export read */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(1);


const create = async (postId, link, caption) => {
  return await __WEBPACK_IMPORTED_MODULE_0__model__["a" /* comment */].create({ postId: postId, link: link, caption: caption });
};

const read = async postId => {
  return await __WEBPACK_IMPORTED_MODULE_0__model__["a" /* comment */].findOne({ where: { postId: postId } });
};



/***/ })
/******/ ]);
//# sourceMappingURL=main.map