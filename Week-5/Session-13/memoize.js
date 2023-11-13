//Memoization

const temperatureData = {
  "New York": 20,

  London: 18,

  Paris: 22,

  Tokyo: 25,

  Sydney: 28,
};

function memoize(func) {
  const cache = {};
  return function (...args) {
    debugger;
    const key = JSON.stringify(args);
    if (cache[key]) {
      return "Retrieved from cache : " + cache[key];
    } else {
      const result = func.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}

function getTemperatureForCity(city) {
  debugger;
  if (city in temperatureData) {
    return temperatureData[city];
  } else {
    return "City not found";
  }
}

const memoizedGetTemperatureForCity = memoize(getTemperatureForCity);

console.log(memoizedGetTemperatureForCity("New York")); //Output : 20
console.log(memoizedGetTemperatureForCity("Paris")); //Output : 22
console.log(memoizedGetTemperatureForCity("Tokyo")); //Output : 25
console.log(memoizedGetTemperatureForCity("New York")); //Output : Retrieved from cache : 20
