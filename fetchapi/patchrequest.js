fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'Nathan Sebhastian',
        username: 'nsebhastian'
    }),
}).then(response => response.json())
    .then(data => console.log(data))