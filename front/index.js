const host = 'http://localhost'
const port = 3000


async function getProduct() {
    let url = `${host}:${port}/products`
    const resp = await fetch(url);
    const products = await resp.json();
    await cargarDatos(products);
}

async function cargarDatos(pro){
    let products = document.getElementById("products");
for (let i = 1; i < 20; i++) {
var titulo = pro.results[i].title
var contenedor = document.createElement("div");
contenedor.setAttribute("id", "p" + i);
var imagen = document.createElement("img");
imagen.setAttribute("id","imagen"+i);
imagen.setAttribute("src", pro.results[i].thumbnail);
let producto = `
<div class="card" style="width: 18rem; margin-top: 20px;">
<img src="`+pro.results[i].thumbnail+`" class="card-img-top">
<div class="card-body">
    <h5 class="card-title" id="titulo"+i>`+pro.results[i].title+`</h5>
    <p class="card-text">$`+pro.results[i].price+`</p>
    <a href="#" class="btn btn-primary"> <i class="fas fa-cart-plus"></i></a>
</div>
</div>`;

contenedor.innerHTML += producto

products.appendChild(contenedor)   
}  
}

async function getTrendsProduct() {
  let url = `${host}:${port}/trendsproducts`
   // let url = "https://api.mercadolibre.com/trends/MLM/MLM1132"
    const resp1 = await fetch(url);
    const productT = await resp1.json();
    await cargarDatosT(productT);
}

async function cargarDatosT(pro){
  let products = document.getElementById("trendsproducts");
     var tbody = document.querySelector('#prductosT tbody');
     //var boton = document.querySelector('#boton1 button');
     
         tbody.innerHTML=''
         
         for (var i=1; i<7;i++){
             var row = tbody.insertRow(0);
             var numCell = row.insertCell(0),
             nameCell = row.insertCell(1), 
             urlCell = row.insertCell(2);
             numCell.innerHTML= i;
             nameCell.innerHTML=pro[i].keyword;
             urlCell.innerHTML=pro[i].url;
             tbody.appendChild(row);
         }
}

getProduct();
getTrendsProduct();

async function getCart() {
 
    const result = await fetch(`${host}:${port}/cart`);
    const cart = await result.json();
    console.log(cart);  
}
getCart()


async function agregarProducto() {
  await fetch(`${host}:${port}/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Articulo)
    });
}
async function eliminarProducto(id) {
  await fetch(`${host}:${port}/cart`+ id,{
		method:'DELETE',
	}).then(() => {
     console.log('removed');
  }).catch(err => {
    console.error(err)
  });
}
