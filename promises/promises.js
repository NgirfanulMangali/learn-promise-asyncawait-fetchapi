let p = new Promise((resolve, reject) => {
    let isTrue = true;
    if (false) {
        resolve('Promise resolved')
    } else {
        reject('promise rejected')
    }
})

    .then(message => console.log(`promise resolved: ${message}`))
    .catch(message => console.log(`promise rejected: ${message}`))