setTimeout(() => {
  console.log('set timeout');
});

Promise.resolve(1).then(() => {
  console.log('first promise');
});

Promise.resolve(2).then(() => {
  console.log('second promise');
});
