let allProductos = [];
window.addEventListener('load', cargarProductos);
async function cargarProductos(){
    allProductos = [];
    renderProductos([]);
    let res = await fetch('/api/productos', {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let respuesta = await res.json();
    console.log(respuesta)
    if (Array.isArray(respuesta)) {
        allProductos.push(...respuesta);
        renderProductos(allProductos);
    }
}


function renderProductos(data){
    let html='';
    if(data.length>0){
        data.array.forEach(prod => {
            html += `<div class="card mb-3">
                        <h3 class="card-header">${prod.nombre}</h3>
                        <div class="card-body">
                        <h5 class="card-title">${prod.descripcion}</h5>
                        <h6 class="card-subtitle text-muted">Support card subtitle</h6>
                    </div>
                    <img src="${prod.foto}">
                    <ul class="list-group list-group-flush">
                        <li li class="list-group-item">Precio: ${prod.precio}</li>
                        <li class="list-group-item">Stock: ${prod.stock}</li>
                    </ul>
                    </div>`
        });
    }


    document.getElementById('productos').innerHTML = html;
}
