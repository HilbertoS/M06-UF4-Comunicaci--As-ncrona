window.onload = showProduct;

function showProduct() {
    fetch('http://localhost:3000/products').then(response => response.json()).then(data => {
        console.log(data);
    let section = document.getElementById('product');

    console.log(section);

    data.forEach(product => {
        let div = document.createElement('div');
        let div2 = document.createElement('div');
        let contanedorImg = document.createElement('div');
        let categoria = document.createElement('div');
        let nombre = document.createElement('h4');
        let descripcion = document.createElement('p');
        let precio = document.createElement('p');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        let img = document.createElement('img');
    //    let boton = document.createElement('a');

        div.className = 'col-md-6 col-lg-6 col-xl-4';
        div2.className = 'rounded position-relative fruite-item border border-secondary';

        contanedorImg.className = 'fruite-img';
        img.src = 'images/' + product.product_name + '.jpg';
        img.className = 'w-100 rounded-top';

        categoria.className = 'text-white bg-secondary px-3 py-1 rounded position-absolute';
        categoria.style.top = '10px';
        categoria.style.left = '10px';
        categoria.style.fontSize = '12px';
        categoria.innerHTML = product.category_name;

        div3.className = 'p-4 rounded-bottom';

        nombre.innerHTML = product.product_name;
        descripcion.innerHTML = product.description;
        precio.innerHTML = product.price;
        precio.className = 'text-dark fs-5 fw-bold mb-0';
        descripcion.className = 'mt-4 mb-5';

        div4.className = 'd-flex justify-content-between flex-lg-wrap';

        /*boton.innerHTML = 'Buy Now';
        boton.className = 'custom_dark-btn';*/

        div.appendChild(div2);
        div2.appendChild(contanedorImg);
        contanedorImg.appendChild(img);
        div2.appendChild(categoria);
        div2.appendChild(div3);
        div3.appendChild(nombre);
        div3.appendChild(descripcion);
        div3.appendChild(div4);
        div4.appendChild(precio);

        section.appendChild(div);

    })

    })
}