const delay = (callback,msec) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, msec);
  });
};

delay(() => 5+5 , 1000)
  .then((result) => {
    console.log(result);
  });

module.exports = delay;
