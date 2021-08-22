

        async function getProduct() {
            let url = "https://api.mercadolibre.com/trends/MLM"
            const resp = await fetch(url);
            const product = await resp.json();
            await cargarDatos(product);

        }
        
        async function cargarDatos(pro){
      //     var tbody = document.querySelector('#Table tbody');
           //var boton = document.querySelector('#boton1 button');
      
           console.log(pro[1]);
           
           for (var i=1; i<7;i++){
               //var row = tbody.insertRow(i);

               //var nameCell = row.insertCell(0), 
               //urlCell = row.insertCell(1);
               //nameCell.innerHTML=pro[i].keyword;
               //urlCell.innerHTML=pro[i].url;
               document.getElementById("boton"+i).innerHTML=pro[i].keyword;
               document.querySelector("#link"+i).href=pro[i].url;
           }
           
        }


getProduct();
