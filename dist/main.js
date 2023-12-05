/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const forecast = async city => {
  try {
    const fetchedData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5544d5beca88415cbeb205624230412&q=${city}&days=3`, {
      mode: "cors"
    });
    if (fetchedData.status === 200) {
      const cityWeather = await fetchedData.json();
      const location = cityWeather.location.name;
      const temp = cityWeather.current.temp_c;
      const isDay = cityWeather.current.is_day;
      let iconSrc;
      if (isDay === 0) {
        iconSrc = `img/weather/64x64/night/${cityWeather.current.condition.icon.substr(-7)}`;
      } else if (isDay === 1) {
        iconSrc = `img/weather/64x64/x§xday/${cityWeather.current.condition.icon.substr(-7)}`;
      }
      const feelsLike = cityWeather.current.feelslike_c;
      const wind = cityWeather.current.wind_kph;
      const {
        humidity
      } = cityWeather.current;
      return {
        location,
        temp,
        isDay,
        iconSrc,
        feelsLike,
        wind,
        humidity
      };
    }
  } catch (err) {
    console.log(err);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forecast);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

const searchBox = document.querySelector("#citySearch");
const form = document.querySelector("form");
let chosenCity;
const displayCity = async city => {
  chosenCity = await (0,_api_logic__WEBPACK_IMPORTED_MODULE_0__["default"])(city);
  searchBox.value = "";
  document.querySelector("#weatherIcon").src = chosenCity.iconSrc;
  document.querySelector("#location").textContent = chosenCity.location;
  document.querySelector("#temp").textContent = `${chosenCity.temp}°C`;
  document.querySelector("#feelsLike").textContent = `Feels like: ${chosenCity.feelsLike}°C`;
  document.querySelector("#wind").textContent = `Wind: ${chosenCity.wind}kph`;
  document.querySelector("#humidity").textContent = `Humidtity: ${chosenCity.humidity}%`;
};
const formEventListener = () => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    if (searchBox.value.length) {
      displayCity(searchBox.value);
    }
  });
};
displayCity("London");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formEventListener);

/***/ })
/******/ 	]);
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


(0,_api_logic__WEBPACK_IMPORTED_MODULE_0__["default"])("ecuador");
(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;