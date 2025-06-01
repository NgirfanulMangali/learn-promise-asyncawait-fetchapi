fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'Nathan Sebhastian',
        email: 'wkwkwk@mail.com'
    }),
}).then(response => response.json())
    .then(data => console.log(data))