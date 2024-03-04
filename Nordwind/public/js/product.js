window.onload = showProduct;

function showProduct() {
    fetch('http://localhost:3001/products').then(response => response.json()).then(data => {
        
    let section = document.getElementById('products');

    data.forEach(product => {
        let div = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
    })
    })
}