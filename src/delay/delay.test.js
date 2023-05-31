const delayTest = require('./delay');

describe('delay', () => {
  test ('should return 10', async () => {
    const result = await delayTest(() => 5+5 , 1000);
    expect(result).toBe(10);
  });
});
