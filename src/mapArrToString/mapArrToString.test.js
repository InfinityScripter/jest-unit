 const mapArrToStringTest = require ('./mapArrToString'); // импортируем функцию

describe ('mapArrToString', () => { // группируем тесты
  test ('Корректное значение', () => { // описываем тест
    expect(mapArrToStringTest ([1, 2, 3])).toEqual (["1", "2", "3"]); // ожидаемый результат
    //в джаваскрипт два объекта с одинаковыми свойствами не равны друг другу потому что хранятся в разных местах памяти
    //поэтому используем toEqual вместо toBe
    //toEqual сравнивает значения(содержимое) объектов, а не их ссылки
  });
  test ('not correct', () => {
    expect(mapArrToStringTest ([1, 2, 3])).not.toEqual (["1", "2", "3", "4"]);
  });
  test ('Разные переменные', () => {
    expect (mapArrToStringTest ([1, 2, 3,null,undefined])).toEqual (["1", "2", "3"]);
  });
  test ('empty array', () => {
    expect (mapArrToStringTest ([])).toEqual ([]);
  });

});
