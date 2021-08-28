
async function getProduct() {
            let url = "https://api.mercadolibre.com/sites/MLM/search?category=MLM1132"
            const resp = await fetch(url);
            const product = await resp.json();
            await cargarDatos(product);
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
        async function botonesCategorias() {
            let url = "https://api.mercadolibre.com/categories/MLM1132"
            const resp = await fetch(url);
            const product1 = await resp.json();
            console.log();
            for (var i=1; i<7;i++){
                document.getElementById("boton"+i).innerHTML=product1.children_categories[i].name;
            }
        }
        
getProduct();
botonesCategorias();