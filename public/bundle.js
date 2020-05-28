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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/components/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/components/index.js":
/*!*********************************!*\
  !*** ./lib/components/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/atemengue/Documents/react/advanced-react/lib/components/index.js: Unexpected token (4:18)\\n\\n\\u001b[0m \\u001b[90m 2 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mReactDOM\\u001b[39m from \\u001b[32m\\\"react-dom\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 4 | \\u001b[39m\\u001b[36mconst\\u001b[39m \\u001b[33mApp\\u001b[39m \\u001b[33m=\\u001b[39m () \\u001b[33m=>\\u001b[39m \\u001b[33m<\\u001b[39m\\u001b[33mh2\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mHello\\u001b[39m \\u001b[33mReact\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mh2\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m                  \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m\\\"root\\\"\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m\\u001b[0m\\n    at Parser._raise (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:745:17)\\n    at Parser.raiseWithData (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:738:17)\\n    at Parser.raise (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:732:17)\\n    at Parser.unexpected (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:8806:16)\\n    at Parser.parseExprAtom (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:10129:20)\\n    at Parser.parseExprSubscripts (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:9655:23)\\n    at Parser.parseMaybeUnary (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:9635:21)\\n    at Parser.parseExprOps (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:9505:23)\\n    at Parser.parseMaybeConditional (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:9478:23)\\n    at Parser.parseMaybeAssign (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:9433:21)\\n    at Parser.parseFunctionBody (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:10700:24)\\n    at Parser.parseArrowExpression (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:10676:10)\\n    at Parser.parseParenAndDistinguishExpression (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:10294:12)\\n    at Parser.parseExprAtom (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:10006:21)\\n    at Parser.parseExprSubscripts (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:9655:23)\\n    at Parser.parseMaybeUnary (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:9635:21)\\n    at Parser.parseExprOps (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:9505:23)\\n    at Parser.parseMaybeConditional (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:9478:23)\\n    at Parser.parseMaybeAssign (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:9433:21)\\n    at Parser.parseVar (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:11814:26)\\n    at Parser.parseVarStatement (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:11623:10)\\n    at Parser.parseStatementContent (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:11222:21)\\n    at Parser.parseStatement (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:11155:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:11730:25)\\n    at Parser.parseBlockBody (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:11716:10)\\n    at Parser.parseTopLevel (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:11086:10)\\n    at Parser.parse (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:12767:10)\\n    at parse (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/parser/lib/index.js:12820:38)\\n    at parser (/home/atemengue/Documents/react/advanced-react/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29tcG9uZW50cy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/components/index.js\n");

/***/ })

/******/ });