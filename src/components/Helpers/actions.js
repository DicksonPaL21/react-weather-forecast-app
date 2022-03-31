export const findCities = async (city, cb) => {
  try {
    const params = `?q=${city}&limit=5&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`;
    const url = `${process.env.REACT_APP_OPEN_WEATHER_MAP_END_POINT}/geo/1.0/direct${params}`;
    const response = await fetch(url);
    const data = await response.json();
    cb(data);
  } catch (e) {
    console.log(e);
  }
};

export const getWeather = async (lat, lon, cb) => {
  try {
    const params = `?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`;
    const url = `${process.env.REACT_APP_OPEN_WEATHER_MAP_END_POINT}/data/2.5/weather${params}`;
    const response = await fetch(url);
    const data = await response.json();
    cb(data);
  } catch (e) {
    console.log(e);
  }
};
