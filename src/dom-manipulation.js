import forecast from "./api-logic";

const searchBox = document.querySelector("#citySearch");
const form = document.querySelector("form");
let chosenCity;

const displayCity = async (city) => {
  chosenCity = await forecast(city);
  searchBox.value = "";
  document.querySelector("#weatherIcon").src = chosenCity.iconSrc;
  document.querySelector("#location").textContent = chosenCity.location;
  document.querySelector("#temp").textContent = `${chosenCity.temp}°C`;
  document.querySelector("#feelsLike").textContent =
    `Feels like: ${chosenCity.feelsLike}°C`;
  document.querySelector("#wind").textContent = `Wind: ${chosenCity.wind}kph`;
  document.querySelector("#humidity").textContent =
    `Humidtity: ${chosenCity.humidity}%`;
};

const formEventListener = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (searchBox.value.length) {
      displayCity(searchBox.value);
    }
  });
};

displayCity("London");

export default formEventListener;
