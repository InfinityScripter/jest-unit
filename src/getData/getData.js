const axios = require('axios'); // axios библиотека для запросов на сервер
const mapArrToString = require('../mapArrToString/mapArrToString'); // функция для преобразования массива в строку
const getData = async () => {   // async/await - синтаксический сахар для работы с промисами
  try { // try/catch - блок для обработки ошибок
    const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // await - ожидание выполнения промиса
    const usersId = response.data.map((user) => user.id); // map - метод массива, который преобразует каждый
    // элемент массива в соответствии с переданной функцией и возвращает новый массив с результатами
    // преобразований возвращаем id каждого пользователя
    return mapArrToString(usersId); // возвращаем результат выполнения функции mapArrToString с аргументом usersId
  } catch (error) { // обработка ошибок
    console.log(error); // вывод ошибки в консоль
  }
};

module.exports = getData; // экспортируем функцию getData
