function convertToCelsius(fahrenheit) {
  return +((fahrenheit - 32) * (5 / 9)).toFixed(1);
};

const convertToFahrenheit = function (celsius) {
  return +(((celsius * 9) / 5 + 32)).toFixed(1);
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
