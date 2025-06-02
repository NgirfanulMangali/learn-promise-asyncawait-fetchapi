fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'DELETE',
}).then(response => response.json())
    .then(data => console.log(data))