const p1 = Promise.resolve('Error From Promise One');
const p2 = Promise.reject(200);
const p3 = Promise.resolve('Finished');

Promise.race([p1, p2, p3])
    .then(response => console.log(response))
    .catch(reason => console.log(reason));