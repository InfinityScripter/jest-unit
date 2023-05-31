const mapArrNumbersToString = (arr) => { // функция принимает массив
  return arr // вернуть массив
    .filter (item => Number.isInteger (item)) // отфильтровать только числа
    .map (String); // преобразовать в строку
};


module.exports = mapArrNumbersToString; // экспортировать функцию
