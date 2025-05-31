const p1 = Promise.reject('Error From Promise One');
const p2 = Promise.resolve(200);
const p3 = Promise.resolve('Finished');

Promise.any([p1, p2, p3]).then(response => {
    console.log(response);
});