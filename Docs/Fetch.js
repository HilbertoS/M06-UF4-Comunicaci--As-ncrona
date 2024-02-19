fetch('https://api.github.com/users/manishmshiva', {
    method: 'GET',
    mode: 'cors',
}
)
.then(response => response.json())
.then(data => {
    let padre = document.querySelector('body');

    for (const key in data) {
            let div = document.createElement('div');
            div.innerHTML = data[key];
            padre.appendChild(div);
    }
})
.catch(error => {
    console.log("Error:", error);
})