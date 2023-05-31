const squareTest  = require('./square');

describe('square', () => {
  let mockValue  // объявляем переменную mockValue
  beforeEach(() => { // выполняем перед каждым тестом
    mockValue = Math.random() // присваиваем ей случайное значение
  }) // выполняем перед каждым тестом
  beforeAll(() => {}) // выполняется единожды перед всеми тестами
  test('square of 2 is 4', () => {
    expect(squareTest(2)).toBe(4); // проверяем, что результат square(2) равен 4
    expect(squareTest(2)).toBeLessThan(5); // проверяем, что результат square(2) меньше 5
    expect(squareTest(2)).toBeGreaterThan(3); // проверяем, что результат square(2) больше 3
    expect(squareTest(2)).not.toBeUndefined(); // проверяем, что результат square(2) не равен undefined
    const spy = jest.spyOn(Math, 'pow'); // создаем шпиона
    squareTest(2); // вызываем функцию square(2)
    expect(spy).toBeCalledTimes(1); // проверяем, что результат square(2) равен Math.pow(2, 2)
  });
// afterEach(() => {}) // выполняется после каждого теста
// afterAll(() => {}) // выполняется единожды после всех тестов
} );
