const validateValueTest = require('./validateValue'); // подключаем функцию



describe('validateValue', () => { // describe - группировка тестов
  test ('validateValue should return false if value is less than 0', () => {
    expect(validateValueTest(-1)).toBe(false); // expect - ожидание
  } );

  test ('Validate is true if value is between 0 and 100', () => {
    expect(validateValueTest(50)).toBe(true);
  });
  test ('Validate is false if value is greater than 100', () => {
    expect(validateValueTest(101)).toBe(false);
  });
  test ('value is 100 should return true', () => {
    expect(validateValueTest(100)).toBe(true);
  });
  test ('value is 0 should return true', () => {
    expect(validateValueTest(0)).toBe(true);
  });
  test('value is not a number should return false', () => {
    expect(validateValueTest('a')).toBe(false);
  });
});
