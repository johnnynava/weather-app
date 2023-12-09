const forecast = async (city) => {
  try {
    const fetchedData = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=5544d5beca88415cbeb205624230412&q=${city}&days=3`,
      { mode: "cors" },
    );
    if (fetchedData.status === 200) {
      const cityWeather = await fetchedData.json();
      const location = cityWeather.location.name;
      const temp = cityWeather.current.temp_c;
      const isDay = cityWeather.current.is_day;
      let iconSrc;
      console.log(cityWeather.current.condition.icon);
      if (isDay === 0) {
        iconSrc = `img/weather/64x64/night/${cityWeather.current.condition.icon.substr(
          -7,
        )}`;
      } else if (isDay === 1) {
        iconSrc = `img/weather/64x64/day/${cityWeather.current.condition.icon.substr(
          -7,
        )}`;
      }
      const feelsLike = cityWeather.current.feelslike_c;
      const wind = cityWeather.current.wind_kph;
      const { humidity } = cityWeather.current;
      return {
        location,
        temp,
        isDay,
        iconSrc,
        feelsLike,
        wind,
        humidity,
      };
    }
  } catch (err) {
    console.log(err);
  }
};

export default forecast;
