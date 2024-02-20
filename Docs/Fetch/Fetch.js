fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    headers: new Headers({ 'Content-Type': 'application/json' }),  
})
.then(response => response.json())
.then(data => {
    let padre = document.querySelector('body');

    data.forEach(user => {
        let div = document.createElement('div');
        div.innerHTML = `
            <p>ID: ${user.id}</p>
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <hr>
        `;
        padre.appendChild(div);
    });
})
.catch(error => {
    console.log("Error:", error);
});
