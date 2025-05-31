const p1 = Promise.reject('Error From Promise One');
const p2 = Promise.resolve(200);
const p3 = Promise.resolve('Finished');

Promise.all([p1, p2, p3])
    .then(messages => console.log(messages))
    .catch(error => console.log(error));