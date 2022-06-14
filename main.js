/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchData)
/* harmony export */ });
// https://api.openweathermap.org/data/2.5x/weather?q={cityName}&units=metric&appid=463f90b73d25b0b65abf11031d0b03b9

async function fetchData(query) {
  const request = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=463f90b73d25b0b65abf11031d0b03b9`;
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error(`At fetchData — ${response.statusText}`);
  }
  return response.json();
}

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/modules/api.js");


function processData(input) {
  const temperature = {
    current: input.main.temp,
    tempMin: input.main.temp_min,
    tempMax: input.main.temp_max,
    feelsLike: input.main.feels_like,
  };
  Object.keys(temperature).forEach((key) => {
    temperature[key] = Math.round(temperature[key]);
  });
  const output = {
    name: input.name,
    country: input.sys.country,
    weather: {
      description: input.weather[0].description,
      ...temperature,
      humidity: input.main.humidity,
    },
  };
  return output;
}

async function getWeather(query) {
  const response = await (0,_api__WEBPACK_IMPORTED_MODULE_0__["default"])(query);
  const data = processData(response);
  return data;
}


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/data */ "./src/modules/data.js");


const search = document.querySelector('#search-city');

async function searchForCity(e) {
  const query = search.value;
  if (e.code === 'Enter' && query.length > 0) {
    search.value = '';
    try {
      const weather = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_0__["default"])(query);
      console.log(weather);
    } catch (error) {
      console.error(error);
    }
  }
}

search.addEventListener('keydown', (e) => searchForCity(e));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF1RCxTQUFTOztBQUVqRDtBQUNmLHVFQUF1RSxNQUFNO0FBQzdFO0FBQ0E7QUFDQSxzQ0FBc0Msb0JBQW9CO0FBQzFEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVDZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVlO0FBQ2YseUJBQXlCLGdEQUFTO0FBQ2xDO0FBQ0E7QUFDQTs7Ozs7OztVQzVCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTndDOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlEQUFVO0FBQ3RDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41eC93ZWF0aGVyP3E9e2NpdHlOYW1lfSZ1bml0cz1tZXRyaWMmYXBwaWQ9NDYzZjkwYjczZDI1YjBiNjVhYmYxMTAzMWQwYjAzYjlcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKHF1ZXJ5KSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3F1ZXJ5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9NDYzZjkwYjczZDI1YjBiNjVhYmYxMTAzMWQwYjAzYjlgO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBBdCBmZXRjaERhdGEg4oCUICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufSIsImltcG9ydCBmZXRjaERhdGEgZnJvbSAnLi9hcGknXG5cbmZ1bmN0aW9uIHByb2Nlc3NEYXRhKGlucHV0KSB7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0ge1xuICAgIGN1cnJlbnQ6IGlucHV0Lm1haW4udGVtcCxcbiAgICB0ZW1wTWluOiBpbnB1dC5tYWluLnRlbXBfbWluLFxuICAgIHRlbXBNYXg6IGlucHV0Lm1haW4udGVtcF9tYXgsXG4gICAgZmVlbHNMaWtlOiBpbnB1dC5tYWluLmZlZWxzX2xpa2UsXG4gIH07XG4gIE9iamVjdC5rZXlzKHRlbXBlcmF0dXJlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICB0ZW1wZXJhdHVyZVtrZXldID0gTWF0aC5yb3VuZCh0ZW1wZXJhdHVyZVtrZXldKTtcbiAgfSk7XG4gIGNvbnN0IG91dHB1dCA9IHtcbiAgICBuYW1lOiBpbnB1dC5uYW1lLFxuICAgIGNvdW50cnk6IGlucHV0LnN5cy5jb3VudHJ5LFxuICAgIHdlYXRoZXI6IHtcbiAgICAgIGRlc2NyaXB0aW9uOiBpbnB1dC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgLi4udGVtcGVyYXR1cmUsXG4gICAgICBodW1pZGl0eTogaW5wdXQubWFpbi5odW1pZGl0eSxcbiAgICB9LFxuICB9O1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHF1ZXJ5KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hEYXRhKHF1ZXJ5KTtcbiAgY29uc3QgZGF0YSA9IHByb2Nlc3NEYXRhKHJlc3BvbnNlKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vbW9kdWxlcy9kYXRhJztcblxuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1jaXR5Jyk7XG5cbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaEZvckNpdHkoZSkge1xuICBjb25zdCBxdWVyeSA9IHNlYXJjaC52YWx1ZTtcbiAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJyAmJiBxdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgc2VhcmNoLnZhbHVlID0gJyc7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBnZXRXZWF0aGVyKHF1ZXJ5KTtcbiAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cbn1cblxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gc2VhcmNoRm9yQ2l0eShlKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=